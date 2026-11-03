'use client';

import { ArrowUpRight, CalendarDays, Check, PenLine } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/brand/logo';
import { ContactForm } from '@/components/contact/contact-form';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

// The Cal.com widget pulls in its own runtime and external booking assets.
// Keep it out of the default contact-form path, then load it only when a
// visitor explicitly selects the call option.
const CalEmbed = dynamic(
  () =>
    import('@/components/contact/cal-embed').then((module) => module.CalEmbed),
  {
    ssr: false,
    loading: () => <div className='min-h-[38rem] w-full' aria-busy='true' />,
  },
);

interface ContactChannelsProps {
  dict: Dictionary;
  /** Cal.com booking URL; when absent only the form is offered. */
  calLink: string | null;
  /** Page heading; rendered beside the channel picker so they share a row. */
  header: ReactNode;
}

/**
 * Two ways in: take a slot, or write a brief. The call comes first and is
 * the default; the form is there for people who would rather write.
 *
 * The picker is its own row under the heading, separated by a rule. It used
 * to sit in a column beside the intro paragraph, which put the pills hard
 * against the text at desktop widths.
 *
 * Only the selected channel is mounted. This keeps the booking widget from
 * competing with the project form and avoids loading Cal.com unnecessarily.
 */
export function ContactChannels({
  dict,
  calLink,
  header,
}: ContactChannelsProps) {
  const t = dict.contact.choose;
  const [channel, setChannel] = useState<'form' | 'calendar'>('calendar');
  const [sent, setSent] = useState(false);
  const lenis = useLenis();

  // A sent enquiry clears the whole page: heading, picker and form go, and
  // one thank-you stands in their place at the top of the viewport.
  const handleSent = () => setSent(true);

  // Jump to the top only once the thank-you is in the DOM. The page is far
  // shorter by then, so Lenis must re-measure first or it clamps the jump
  // to the old limit and leaves the visitor looking at the footer. Lenis
  // owns scrolling on this site; the native call covers reduced motion,
  // where Lenis is stopped.
  useEffect(() => {
    if (!sent) return;
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [sent, lenis]);

  // "Send another" brings back a fresh form, not the calendar.
  const handleAgain = () => {
    setSent(false);
    setChannel('form');
  };

  if (sent) {
    return <ThankYou dict={dict} onAgain={handleAgain} />;
  }

  // Without a booking link there is nothing to choose between.
  if (!calLink) {
    return (
      <>
        {header}
        <ContactForm dict={dict} onSent={handleSent} />
      </>
    );
  }

  return (
    <div>
      {header}

      <div className='mt-8 flex flex-wrap justify-center gap-2 border-t border-line pt-6 sm:mt-10 md:justify-start'>
        <button
          type='button'
          onClick={() => setChannel('calendar')}
          aria-pressed={channel === 'calendar'}
          className={`inline-flex h-12 items-center gap-2 rounded-full border px-5 text-left text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 ${
            channel === 'calendar'
              ? 'border-brand bg-brand text-brand-foreground'
              : 'border-line bg-surface text-foreground hover:border-brand hover:text-brand-text'
          }`}
        >
          <CalendarDays className='h-4 w-4' />
          {t.callTab}
        </button>

        <button
          type='button'
          onClick={() => setChannel('form')}
          aria-pressed={channel === 'form'}
          className={`inline-flex h-12 items-center gap-2 rounded-full border px-5 text-left text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 ${
            channel === 'form'
              ? 'border-brand bg-brand text-brand-foreground'
              : 'border-line bg-surface text-foreground hover:border-brand hover:text-brand-text'
          }`}
        >
          <PenLine className='h-4 w-4' />
          {t.formTab}
        </button>
      </div>

      {channel === 'calendar' ? (
        <div
          id='contact-calendar'
          className='mt-6 overflow-hidden border border-line bg-ink'
        >
          {/* One colour for the whole lockup, matching the white-on-ink
              favicon the Cal.com embed shows just below. */}
          <div className='flex items-center justify-between gap-4 border-b border-card/15 px-5 py-4 sm:px-6'>
            <Logo
              linked={false}
              markClassName='text-card'
              wordmarkClassName='text-card'
            />
            <span className='font-mono text-[11px] uppercase tracking-[0.18em] text-card/70'>
              {t.callTab}
            </span>
          </div>
          <CalEmbed calLink={calLink} />
        </div>
      ) : (
        <div id='contact-form' className='mt-6'>
          <ContactForm dict={dict} onSent={handleSent} />
        </div>
      )}
    </div>
  );
}

/**
 * What the page becomes once an enquiry is in: one calm card, a thank-you,
 * the promise of a reply, and two ways on: home, or another enquiry.
 */
function ThankYou({
  dict,
  onAgain,
}: {
  dict: Dictionary;
  onAgain: () => void;
}) {
  const t = dict.contactForm;
  return (
    <div
      role='status'
      aria-live='polite'
      className='bl-card mx-auto flex max-w-2xl flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-20'
    >
      <span className='flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground'>
        <Check className='h-7 w-7' strokeWidth={2.5} />
      </span>
      <h1 className='bl-display mt-7 text-display-md text-foreground sm:text-display-lg'>
        {t.sentTitle}
      </h1>
      <p className='mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg'>
        {t.sentBody.replace('{time}', siteConfig.responseTime)}
      </p>
      <div className='mt-9 flex flex-col items-center gap-3 sm:flex-row'>
        <Link
          href={paths.home}
          className='bl-btn bl-btn-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
        >
          {t.sentHome}
          <ArrowUpRight className='h-3.5 w-3.5' />
        </Link>
        <button
          type='button'
          onClick={onAgain}
          className='bl-btn bl-btn-secondary inline-flex h-12 items-center justify-center gap-2.5 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
        >
          <PenLine className='h-3.5 w-3.5' />
          {t.sentAgain}
        </button>
      </div>
    </div>
  );
}

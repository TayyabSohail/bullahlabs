import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Conscious AI for Teams',
  description:
    'Practical AI training, workflow audits and guidance for teams that want more value with less waste.',
  alternates: { canonical: paths.teams },
};

/** Anchors the Conscious AI page's team offers link to, one per card. */
const offerIds = ['workshops', 'guidance', 'audits'];

function ContactButton({
  children,
  tone = 'primary',
}: {
  children: React.ReactNode;
  tone?: 'primary' | 'secondary';
}) {
  return (
    <Link
      href={paths.contact}
      className={`bl-btn ${tone === 'primary' ? 'bl-btn-primary' : 'bl-btn-secondary'} inline-flex h-12 items-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]`}
    >
      {children}
      <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
    </Link>
  );
}

/** The copy lives in `dict.teamsPage`, one block per section in page order. */
export default async function ConsciousAiTeamsPage() {
  const dict = await getDictionary();
  const t = dict.teamsPage;
  const bookingButton = <ContactButton>{t.hero.cta}</ContactButton>;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
          { name: t.breadcrumb, href: paths.teams },
        ]}
      />

      <section data-section='hero' className='bl-band-ink border-b border-ink'>
        <div className='bl-container min-h-[31rem] pb-16 pt-32 text-center sm:min-h-[34rem] sm:pt-40 md:text-left lg:min-h-[38rem] lg:pb-20 lg:pt-48'>
          <Reveal>
            <p className='bl-kicker text-white/65'>{t.hero.kicker}</p>
          </Reveal>
          <TextReveal
            as='h1'
            text={t.hero.title}
            accentWords={[...t.hero.accent]}
            className='bl-display mx-auto mt-8 max-w-[17ch] justify-center text-display-lg text-white sm:text-display-xl md:mx-0 md:justify-start [&_.bl-accent]:text-brand-2'
          />
          <Reveal delay={0.2}>
            <p className='mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg md:mx-0'>
              {t.hero.body}
            </p>
            <div className='mt-9 flex justify-center md:justify-start'>
              {bookingButton}
            </div>
          </Reveal>
        </div>
      </section>

      <section className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <p className='bl-kicker'>{t.familiar.kicker}</p>
          <TextReveal
            as='h2'
            text={t.familiar.title}
            accentWords={[...t.familiar.accent]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {t.familiar.items.map(([title, body]) => (
              <Reveal key={title} className='bl-card p-5'>
                <h3 className='bl-display text-xl'>{title}</h3>
                <p className='mt-2 text-sm leading-snug text-muted-foreground'>
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id='how' className='bl-section bl-rule bg-background'>
        <div className='bl-container'>
          <p className='bl-kicker'>{t.how.kicker}</p>
          <TextReveal
            as='h2'
            text={t.how.title}
            accentWords={[...t.how.accent]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid overflow-hidden border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4'>
            {t.how.steps.map(([number, title, body]) => (
              <div
                key={number}
                className='border-b border-r border-ink/40 bg-surface p-5 last:border-b-0 sm:p-6 lg:border-b-0'
              >
                <div>
                  <span className='shrink-0 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-text'>
                    {number}
                  </span>
                  <h3 className='bl-display mt-4 text-2xl'>{title}</h3>
                </div>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='services' className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <p className='bl-kicker'>{t.offers.kicker}</p>
          <TextReveal
            as='h2'
            text={t.offers.title}
            accentWords={[...t.offers.accent]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid gap-5 lg:grid-cols-3'>
            {t.offers.items.map(([tag, title, body, cta], index) => (
              <Reveal
                key={title}
                id={offerIds[index]}
                className={`flex min-h-0 scroll-mt-28 flex-col ${index === 2 ? 'bl-card-ink' : 'bl-card'} p-5 sm:min-h-80 sm:p-8`}
              >
                <p
                  className={`inline-block w-fit border px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] ${index === 2 ? 'border-brand/70 text-brand-2' : 'border-ink/40 text-muted-foreground'}`}
                >
                  {tag}
                </p>
                <h3
                  className={`bl-display mt-3 text-3xl sm:mt-5 ${index === 2 ? 'text-white' : ''}`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed sm:mt-3 ${index === 2 ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  {body}
                </p>
                <Link
                  href={paths.contact}
                  className={`bl-action mt-6 sm:mt-auto sm:pt-8 ${index === 2 ? 'text-brand-2 hover:text-brand-2' : ''}`}
                >
                  {cta} <ArrowUpRight className='h-3.5 w-3.5' />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='bl-section bl-rule bg-background'>
        <div className='bl-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center'>
          <div>
            <p className='bl-kicker'>{t.waste.kicker}</p>
            <TextReveal
              as='h2'
              text={t.waste.title}
              accentWords={[...t.waste.accent]}
              className='bl-display mt-5 max-w-[10ch] text-display-lg'
            />
            <p className='mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              {t.waste.body}
            </p>
          </div>
          <Reveal className='bl-card divide-y divide-line'>
            {t.waste.items.map(([item, label]) => (
              <div
                key={item}
                className='flex items-center justify-between gap-5 p-4 sm:px-6'
              >
                <p className='font-display text-base font-semibold'>{item}</p>
                <span className='shrink-0 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-text'>
                  {label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <div className='grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end'>
            <div>
              <p className='bl-kicker'>{t.changes.kicker}</p>
              <TextReveal
                as='h2'
                text={t.changes.title}
                accentWords={[...t.changes.accent]}
                className='bl-display mt-5 max-w-[12ch] text-display-lg'
              />
            </div>
            <p className='max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {t.changes.body}
            </p>
          </div>
          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            {t.changes.items.map(([title, body]) => (
              <Reveal key={title} className='bl-card p-6 sm:p-8'>
                <h3 className='bl-display text-2xl'>{title}</h3>
                <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
          <p className='mt-8 border-l-2 border-brand pl-5 text-sm leading-relaxed text-muted-foreground'>
            {t.changes.privacy}
          </p>
          <Reveal className='bl-card-ink mt-12 flex min-h-72 flex-col items-center justify-center p-8 text-center'>
            <h2 className='bl-display max-w-[13ch] text-display-lg text-white'>
              {t.changes.closing.lead}{' '}
              <span className='bl-accent text-brand-2'>
                {t.changes.closing.accent}
              </span>
            </h2>
            <p className='mt-5 max-w-md text-sm leading-relaxed text-white/65'>
              {t.changes.closing.body}
            </p>
            <div className='mt-8'>{bookingButton}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

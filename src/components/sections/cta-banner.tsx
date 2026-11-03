import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface CtaBannerProps {
  dict: Dictionary;
  kicker?: string;
  title?: string;
  accentWords?: number[];
  body?: string;
  /**
   * Replaces the contact button, for a closing block that asks for
   * something other than a conversation (e.g. an email field).
   */
  children?: React.ReactNode;
}

/** Closing call to action: an ink panel with one large button. */
export function CtaBanner({
  dict,
  kicker,
  title,
  accentWords,
  body,
  children,
}: CtaBannerProps) {
  const t = dict.cta;

  return (
    <section data-section='cta-banner' className='bl-container pb-6 pt-10'>
      <div className='bl-card bl-card-ink bl-grid-surface relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24'>
        <div className='relative mx-auto max-w-3xl'>
          <Reveal>
            <p className='bl-kicker justify-center text-white/60'>
              {kicker ?? t.kicker}
            </p>
          </Reveal>
          <TextReveal
            as='h2'
            text={title ?? t.title}
            accentWords={accentWords ?? [...t.accent]}
            className='bl-display mt-5 justify-center text-display-lg text-white [&_.bl-accent]:text-brand-2'
          />
          <Reveal delay={0.3}>
            <p className='mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg'>
              {body ?? t.body}
            </p>
          </Reveal>
          <Reveal
            delay={0.4}
            className='mt-10 flex flex-wrap items-center justify-center gap-3'
          >
            {children ?? (
              <Link
                href={paths.contact}
                className='bl-btn bl-btn-primary inline-flex h-14 items-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]'
              >
                {t.button}
                <span className='h-2.5 w-2.5 bg-white' />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

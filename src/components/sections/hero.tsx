import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Contours } from '@/components/effects/contours';
import { SystemMap } from '@/components/effects/system-map';
import { HeroTitle } from '@/components/motion/hero-title';
import { Reveal } from '@/components/motion/reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Opening section: what we are, in one headline and a few lines, two ways
 * in (the studio, the free course), and beside them Conscious AI as a
 * living map: the same work sent down the usual lane and ours, with the
 * cost meters filling beside each.
 */
export function Hero({ dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section data-section='hero' className='relative overflow-hidden border-b'>
      <Contours />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background'
      />

      <div className='bl-container relative pb-28 pt-28 sm:pb-32 sm:pt-32 lg:pb-40 xl:pb-48'>
        <HeroTitle
          title={t.title}
          className='bl-display justify-center text-center text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink sm:justify-start sm:text-left'
        />

        <div className='mt-10 grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-24 xl:gap-x-32'>
          <div className='min-w-0'>
            <Reveal delay={0.7}>
              <p className='max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl'>
                {t.body}
              </p>
            </Reveal>

            <Reveal
              delay={0.85}
              className='mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-stretch'
            >
              {/* A shared fixed measure makes this CTA pair read as one
                  deliberate choice on every viewport. */}
              <Link
                href={paths.contact}
                className='bl-btn bl-btn-ink inline-flex h-16 w-full max-w-[18rem] items-center justify-between gap-4 whitespace-nowrap px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em]'
              >
                {t.primary}
                <span className='h-2.5 w-2.5 shrink-0 bg-brand' />
              </Link>
              <Link
                href={paths.program}
                className='bl-btn bl-btn-secondary inline-flex h-16 w-full max-w-[18rem] items-center justify-between gap-4 whitespace-nowrap bg-surface px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em]'
              >
                {t.secondary}
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.9}
            distance={16}
            className='w-full min-w-0 max-w-[44rem] justify-self-center lg:mt-8 lg:justify-self-end xl:max-w-[48rem]'
          >
            <div className='bl-card bg-surface p-2 sm:p-3'>
              <SystemMap copy={t.map} delay={0.5} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

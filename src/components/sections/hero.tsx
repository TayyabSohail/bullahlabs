import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Contours } from '@/components/effects/contours';
import { SystemMap } from '@/components/effects/system-map';
import { LetterReveal } from '@/components/motion/letter-reveal';
import { Reveal } from '@/components/motion/reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Opening section: what the company does in one headline and one sentence,
 * two actions, and beside them the kind of product we build as a living
 * map: labelled tiles on a plate with requests and answers riding the
 * wires between them, and the model used only where it helps.
 */
export function Hero({ dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section className='relative overflow-hidden border-b'>
      <Contours />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background'
      />

      <div className='bl-container relative pb-12 pt-28 sm:pb-16 sm:pt-32'>
        {/* The title is two sentences on two lines: the habit, then the
            answer in the accent colour. It types in letter by letter once
            the preloader has lifted. */}
        <LetterReveal
          as='h1'
          text={t.title}
          accentWords={[...t.accent]}
          afterPreloader
          stagger={0.035}
          typingBounce
          delay={0.15}
          className='bl-display justify-start text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink'
        />

        <div className='mt-8 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-14'>
          <div className='min-w-0'>
            <Reveal delay={0.7}>
              <p className='max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl'>
                {t.body}
              </p>
            </Reveal>

            <Reveal
              delay={0.85}
              className='mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center'
            >
              <Link
                href={paths.contact}
                className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
              >
                {t.primary}
                <span className='h-2.5 w-2.5 bg-brand' />
              </Link>
              <Link
                href={paths.work}
                className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 bg-surface px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
              >
                {t.secondary}
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.9}
            distance={16}
            className='w-full min-w-0 max-w-[44rem] justify-self-center lg:-mt-10 lg:justify-self-end'
          >
            <SystemMap copy={t.map} delay={0.5} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

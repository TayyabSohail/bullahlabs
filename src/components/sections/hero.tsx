import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Contours } from '@/components/effects/contours';
import { DecisionCard } from '@/components/effects/decision-card';
import { LetterReveal } from '@/components/motion/letter-reveal';
import { Reveal } from '@/components/motion/reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Opening section: what the company does in one headline and one sentence,
 * two actions, and beside them the headline acted out: everyday tasks,
 * each decided in four steps, the habit struck through and the deliberate
 * choice put in its place.
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

      <div className='bl-container relative pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36'>
        <Reveal>
          <p className='inline-flex items-center gap-3 border border-ink/15 bg-white/85 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-ink backdrop-blur-sm'>
            <span className='h-1.5 w-1.5 bg-brand' />
            {t.badge}
          </p>
        </Reveal>

        {/* The title is two sentences on two lines: the habit, then the
            answer in the accent colour. It types in letter by letter once
            the preloader has lifted. */}
        <LetterReveal
          as='h1'
          text={t.title}
          accentWords={[...t.accent]}
          afterPreloader
          stagger={0.04}
          typingBounce
          delay={0.2}
          className='bl-display mt-6 justify-start text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.96] tracking-[-0.04em] text-ink sm:mt-7'
        />

        <div className='mt-8 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-x-12'>
          <div className='min-w-0'>
            <Reveal delay={0.7}>
              <p className='max-w-2xl text-xl leading-snug text-ink/75 sm:text-2xl'>
                {t.body}
              </p>
            </Reveal>

            <Reveal
              delay={0.85}
              className='mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'
            >
              <Link
                href={paths.program}
                className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
              >
                {t.primary}
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href={paths.work}
                className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 bg-white/85 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
              >
                {t.secondary}
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.9} distance={16} className='min-w-0'>
            <DecisionCard copy={t.decision} delay={1.4} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

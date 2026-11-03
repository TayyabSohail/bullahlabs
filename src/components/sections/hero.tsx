import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Contours } from '@/components/effects/contours';
import { HeroTitle } from '@/components/motion/hero-title';
import { Reveal } from '@/components/motion/reveal';
import { PlanetReceipt } from '@/components/sections/planet-receipt';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/** Where each of the three cells under the buttons leads, in dictionary order: course, team training, services. */
const STEP_PATHS = [paths.program, paths.teams, paths.services] as const;

/**
 * Opening section: what we are, in one headline and a few lines, one way
 * in (Conscious AI) with a quiet link to the work, three figures on one
 * rule, and beside them the planet's tab: one year of AI on one piece of
 * work, printed the usual way and ours. The studio's own call to action
 * waits for the sections below; the first view is about getting more out
 * of AI for less.
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

      <div className='bl-container relative pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32'>
        <HeroTitle
          title={t.title}
          className='bl-display justify-center text-center text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink sm:justify-start sm:text-left'
        />

        <div className='mt-10 grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-stretch lg:gap-x-16 xl:gap-x-20'>
          <div className='flex min-w-0 flex-col text-center sm:text-left'>
            <Reveal delay={0.1}>
              <p className='mx-auto max-w-xl text-lg leading-relaxed text-ink/70 sm:mx-0 sm:text-xl'>
                {t.body}
              </p>
            </Reveal>

            {/* Conscious AI leads in ink; the work sits beside it in a
                ruled box. A shared fixed measure makes the pair read as
                one deliberate choice on every viewport. */}
            <Reveal
              delay={0.18}
              className='mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:justify-center lg:justify-start'
            >
              <Link
                href={paths.program}
                className='bl-btn bl-btn-ink inline-flex h-16 w-full max-w-[18rem] items-center justify-between gap-4 whitespace-nowrap px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em]'
              >
                {t.primary}
                <span className='h-2.5 w-2.5 shrink-0 bg-brand' />
              </Link>
              <Link
                href={paths.work}
                className='bl-btn bl-btn-secondary inline-flex h-16 w-full max-w-[18rem] items-center justify-between gap-4 whitespace-nowrap bg-surface px-7 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em]'
              >
                {t.secondary}
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Reveal>

            {/* The three ways in (course, team training, services): three
                ruled cards on hard shadows, each one link, sitting at the
                bottom of the column so the copy side reads as tall as the
                receipt beside it. Kicker and number on top, a short serif
                heading, one line, and the way in on a rule at the foot. */}
            <Reveal delay={0.26} className='mt-12 lg:mt-auto lg:pt-12'>
              <ol className='grid gap-4 sm:grid-cols-3 sm:gap-5'>
                {t.steps.map(({ kicker, title, body, cta }, index) => (
                  <li key={title} className='flex text-left'>
                    <Link
                      href={STEP_PATHS[index] ?? paths.program}
                      className='bl-card bl-card-link group flex w-full flex-col p-5 sm:p-5'
                    >
                      <span className='flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
                        <span>
                          <span className='font-semibold text-brand-text'>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span aria-hidden='true'> · </span>
                          {kicker}
                        </span>
                        <span className='h-2 w-2 shrink-0 bg-brand' />
                      </span>
                      <span className='bl-display mt-4 block text-[1.45rem] leading-[1.05] text-ink sm:text-2xl'>
                        {title}
                      </span>
                      <span className='mt-2 block flex-1 text-sm leading-relaxed text-ink/65'>
                        {body}
                      </span>
                      <span className='mt-5 flex items-center justify-between gap-3 border-t border-ink/20 pt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-brand-text'>
                        {cta}
                        <ArrowUpRight className='h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* The stamp overhangs the top edge of the receipt, so the column
              keeps a little headroom for it. */}
          <Reveal
            delay={0.24}
            distance={16}
            className='w-full min-w-0 pt-6 lg:pt-8'
          >
            <PlanetReceipt
              copy={t.receipt}
              className='lg:ml-auto lg:mr-0 lg:max-w-md'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

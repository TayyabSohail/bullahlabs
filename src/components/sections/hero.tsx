import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { HeroTitle } from '@/components/motion/hero-title';
import { Reveal } from '@/components/motion/reveal';
import { PlanetReceipt } from '@/components/sections/planet-receipt';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Where each of the three cells under the button leads, in dictionary
 * order: the course section on the Conscious AI page (its `CourseSection`
 * carries id "course"), team training (the Upskilling page), services.
 */
const STEP_PATHS = [
  `${paths.program}#course`,
  paths.upskilling,
  paths.services,
] as const;

/**
 * Opening section: what we are, in one headline and two lines, one way in
 * (Conscious AI), three quiet ways further, and beside them the planet's
 * tab: one year of AI on one piece of work, printed the usual way and
 * ours. The receipt is the one rich thing on the first screen; the page
 * behind it is plain paper, so it reads at once.
 */
export function Hero({ dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section
      data-section='hero'
      className='bl-hero relative overflow-hidden border-b'
    >
      <div className='bl-container relative pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32'>
        <HeroTitle
          title={t.title}
          className='bl-display justify-center text-center text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink sm:justify-start sm:text-left'
        />

        {/* Phones stack copy over receipt; tablets put them side by side in
            two even columns; lg widens the copy side to 7/5. */}
        <div className='mt-8 grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-x-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-stretch lg:gap-x-16 xl:gap-x-20'>
          <div className='flex min-w-0 flex-col text-center sm:text-left'>
            {/* The lead in ink, the rest muted: one strong line, one quiet
                one. */}
            <Reveal delay={0.1}>
              <p className='mx-auto max-w-xl text-lg leading-relaxed sm:mx-0 sm:text-xl'>
                <span className='block font-medium text-ink'>{t.lead}</span>
                <span className='mt-2 block text-ink/60'>{t.body}</span>
              </p>
            </Reveal>

            {/* One button: the first view asks for a single decision. */}
            <Reveal
              delay={0.18}
              className='mt-6 flex w-full justify-center sm:justify-start'
            >
              <Link
                href={paths.program}
                className='bl-btn bl-btn-ink inline-flex h-14 w-full max-w-[18rem] items-center justify-between gap-4 whitespace-nowrap px-6'
              >
                {t.primary}
                <span className='h-2.5 w-2.5 shrink-0 bg-brand' />
              </Link>
            </Reveal>

            {/* The three ways in (course, team training, services). Below
                lg a three-row ledger: number, title, arrow. From lg three
                quiet ruled cards at the foot of the column, so the copy
                side reads as tall as the receipt beside it. */}
            <Reveal delay={0.26} className='mt-6 lg:mt-auto lg:pt-10'>
              <ul className='grid gap-3 text-left sm:grid-cols-3'>
                {t.steps.map(({ kicker, title, body, cta }, index) => (
                  <li key={title} className='flex text-left'>
                    <Link
                      href={STEP_PATHS[index] ?? paths.program}
                      className={cn(
                        'group flex min-h-[14rem] w-full flex-col rounded-2xl p-4 transition-transform hover:-translate-y-1',
                        index === 0 &&
                          'bg-[hsl(var(--brand-strong))] text-white shadow-[3px_3px_0_0_hsl(var(--ink))]',
                        index === 1 &&
                          'bg-[#315a50] text-white shadow-[3px_3px_0_0_hsl(var(--ink))]',
                        index === 2 &&
                          'bg-[hsl(var(--band-peach))] shadow-[3px_3px_0_0_hsl(var(--ink))]',
                      )}
                    >
                      <span
                        className={cn(
                          'bl-label',
                          index < 2 ? 'text-white/75' : 'text-ink/70',
                        )}
                      >
                        {kicker}
                      </span>
                      <span
                        className={cn(
                          'bl-display mt-2 block min-h-[2.2em] text-[1.35rem] leading-[1.05]',
                          index < 2 ? 'text-white' : 'text-ink',
                        )}
                      >
                        {title}
                      </span>
                      <span
                        className={cn(
                          'mt-2 block min-h-[4.5rem] text-sm leading-relaxed',
                          index < 2 ? 'text-white/80' : 'text-ink/75',
                        )}
                      >
                        {body}
                      </span>
                      <span
                        className={cn(
                          'mt-auto flex items-center justify-between gap-3 pt-4 font-mono text-xs transition-colors',
                          index < 2
                            ? 'text-white/85 group-hover:text-white'
                            : 'text-ink/80 group-hover:text-ink',
                        )}
                      >
                        {cta}
                        <ArrowUpRight className='h-3.5 w-3.5 shrink-0' />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* The stamp overhangs the top edge of the receipt, so the column
              keeps a little headroom for it. */}
          <Reveal
            delay={0.24}
            distance={12}
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

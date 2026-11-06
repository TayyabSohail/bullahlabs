import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { HeroTitle } from '@/components/motion/hero-title';
import { Reveal } from '@/components/motion/reveal';
import { PlanetReceipt } from '@/components/sections/planet-receipt';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';
import { cn } from '@/lib/utils';

interface HeroProps {
  dict: Dictionary;
}

const STEP_PATHS = [
  `${paths.program}#course`,
  paths.upskilling,
  paths.services,
] as const;

/**
 * Opening section: one headline and a compact statement beside the planet's
 * tab. The receipt is the rich interaction; the surrounding page stays
 * quiet so it reads at once.
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

            {/* Three compact routes using the same ink, peach and blue-grey
                palette that carries through the rest of the app. */}
            <Reveal delay={0.18} className='mt-6'>
              <ul className='grid gap-3 text-left sm:grid-cols-3'>
                {t.steps.map(({ kicker, title, body, cta }, index) => (
                  <li key={title}>
                    <Link
                      href={STEP_PATHS[index]}
                      className={cn(
                        'group relative flex min-h-[9.5rem] rounded-[1.35rem] border border-ink/70 p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
                        index === 0 && 'bg-ink text-white shadow-[5px_5px_0_hsl(var(--brand))] hover:shadow-[7px_7px_0_hsl(var(--brand))]',
                        index === 1 && 'bg-[hsl(var(--band-peach))] text-ink shadow-[5px_5px_0_hsl(var(--ink))] hover:shadow-[7px_7px_0_hsl(var(--ink))]',
                        index === 2 && 'bg-[hsl(var(--surface-2))] text-ink shadow-[5px_5px_0_hsl(var(--brand))] hover:shadow-[7px_7px_0_hsl(var(--brand))]',
                      )}
                    >
                      <span className='flex w-full flex-col'>
                        <span className={cn('font-sans text-[11px] font-medium', index === 0 ? 'text-brand-2' : 'text-brand-text')}>
                          {kicker}
                        </span>
                        <span className='bl-display mt-3 max-w-[10rem] text-[1.45rem] leading-[0.98]'>
                          {title}
                        </span>
                        <span className={cn('mt-1.5 max-w-[12rem] text-[12px] leading-snug', index === 0 ? 'text-white/70' : 'text-ink/60')}>
                          {body}
                        </span>
                        <span className={cn('mt-auto flex items-center justify-between pt-3 text-[12px] font-medium', index === 0 ? 'text-white/90' : 'text-ink/75')}>
                          <span>{cta}</span>
                          <ArrowUpRight className='h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </span>
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

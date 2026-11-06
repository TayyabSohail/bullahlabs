import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { HeroTitle } from '@/components/motion/hero-title';
import { Reveal } from '@/components/motion/reveal';
import { PlanetReceipt } from '@/components/sections/planet-receipt';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Opening section: one clear promise, a concise introduction and a direct
 * route into the studio's Conscious AI work. The receipt is supporting proof,
 * not another wall of copy.
 */
export function Hero({ dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section
      data-section='hero'
      className='bl-hero relative overflow-hidden border-b'
    >
      <div className='bl-container relative py-20 sm:py-28 lg:py-32'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:items-center lg:gap-x-20 xl:gap-x-28'>
          <div className='flex min-w-0 flex-col text-center sm:text-left'>
            <p className='mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-brand-text sm:text-[11px]'>
              Bullah Labs · product & engineering
            </p>
            <HeroTitle
              title={t.title}
              className='bl-display justify-center text-center text-[clamp(2.8rem,6.1vw,5.6rem)] leading-[0.98] tracking-[-0.03em] text-ink sm:justify-start sm:text-left'
            />
            <Reveal delay={0.1}>
              <p className='mx-auto mt-7 max-w-lg text-base leading-relaxed sm:mx-0 sm:text-lg'>
                <span className='block font-medium text-ink'>{t.lead}</span>
                <span className='mt-1 hidden text-ink/60 sm:block'>{t.body}</span>
              </p>
            </Reveal>
            <Reveal delay={0.18} className='mt-8 flex justify-center sm:justify-start'>
              <Link
                href={paths.program}
                className='bl-btn bl-btn-ink inline-flex h-14 min-w-[15.5rem] items-center justify-between gap-10 px-6 text-sm'
              >
                {t.primary}
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.24}
            distance={12}
            className='relative mx-auto w-full max-w-[19rem] min-w-0 sm:max-w-sm lg:mx-0 lg:max-w-md'
          >
            <div
              aria-hidden='true'
              className='absolute -inset-6 -z-10 rounded-full bg-brand/15 blur-3xl'
            />
            <PlanetReceipt
              copy={t.receipt}
              className='lg:ml-auto lg:mr-0'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

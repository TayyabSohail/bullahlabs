import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { LogoMark } from '@/components/brand/logo';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ConsciousAiTeaserProps {
  dict: Dictionary;
  className?: string;
}

/**
 * Homepage pointer to the Conscious AI course: one ink panel that says the
 * course is coming and links to its page. The course itself is not described
 * here; nothing about it is public until it opens.
 */
export function ConsciousAiTeaser({ dict, className }: ConsciousAiTeaserProps) {
  const t = dict.consciousAi;

  return (
    <section
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        <Reveal className='bl-card bl-card-ink bl-grid-surface relative overflow-hidden p-7 sm:p-10 lg:p-14'>
          <div
            aria-hidden='true'
            className='absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-brand/25 blur-[110px]'
          />
          <div className='relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14'>
            <div>
              <div className='flex flex-wrap items-center gap-4'>
                <LogoMark className='h-11 w-11 [&>circle:first-child]:fill-white [&>path]:fill-ink' />
                <p className='bl-kicker text-white/60'>{t.teaser.kicker}</p>
                <span className='inline-flex items-center gap-2 border border-brand bg-brand px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-foreground'>
                  <span
                    aria-hidden='true'
                    className='h-1.5 w-1.5 animate-pulse bg-white'
                  />
                  {t.status}
                </span>
              </div>
              <TextReveal
                as='h2'
                text={t.teaser.title}
                accentWords={[...t.teaser.accent]}
                className='bl-display mt-7 max-w-[18ch] text-display-md text-white [&_.bl-accent]:text-brand-2'
              />
              <p className='mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg'>
                {t.teaser.body}
              </p>
            </div>
            <Link
              href={paths.program}
              className='bl-btn bl-btn-primary inline-flex h-14 items-center justify-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]'
            >
              {t.teaser.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ServicesTeaserProps {
  dict: Dictionary;
  className?: string;
}

/**
 * Services hook on the work page: one tinted ruled card between the hero
 * and the project grid with a short line and a single button to /services.
 * Stacked on small screens; from lg a row with the button on the right. It
 * names nothing; the services page does that. The mirror of WorkShowcase.
 */
export function ServicesTeaser({ dict, className }: ServicesTeaserProps) {
  const t = dict.services.teaser;

  return (
    <section
      data-section='services-teaser'
      className={cn('bl-container pb-8 pt-4 sm:pb-12 sm:pt-6', className)}
    >
      <Reveal>
        <div className='bl-card bl-card-ink flex flex-col gap-5 p-5 text-center sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:text-left'>
          <div className='min-w-0'>
            <p className='bl-kicker justify-center text-white/60 lg:justify-start'>
              {t.kicker}
            </p>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              delay={0.1}
              className='bl-display mt-2 text-2xl text-white sm:text-3xl'
            />
            <p className='mx-auto mt-2 max-w-[56ch] text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0'>
              {t.description}
            </p>
          </div>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary mx-auto inline-flex h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap px-6 lg:mx-0'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

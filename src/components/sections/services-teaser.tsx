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
      className={cn('bl-container pb-8 sm:pb-12', className)}
    >
      <Reveal>
        <div className='bl-card bl-card-tint flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8'>
          <div className='min-w-0'>
            <p className='bl-kicker'>{t.kicker}</p>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              delay={0.1}
              className='bl-display mt-2 text-2xl text-foreground sm:text-3xl'
            />
            <p className='mt-2 max-w-[56ch] text-sm leading-relaxed text-muted-foreground sm:text-base'>
              {t.description}
            </p>
          </div>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap px-6'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

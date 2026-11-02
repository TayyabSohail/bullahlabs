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
 * Services hook on the work page: one ruled card between the hero and the
 * project grid, a short line and a single button to /services. It names
 * nothing; the services page does that. The mirror of WorkShowcase on
 * /services.
 */
export function ServicesTeaser({ dict, className }: ServicesTeaserProps) {
  const t = dict.services.teaser;

  return (
    <section
      data-section='services-teaser'
      className={cn('bl-container pb-10 sm:pb-14', className)}
    >
      <Reveal>
        <div className='bl-card bl-card-tint flex flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-10'>
          <div className='min-w-0'>
            <p className='bl-kicker'>{t.kicker}</p>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              delay={0.1}
              className='bl-display mt-3 text-2xl text-foreground sm:text-3xl'
            />
            <p className='mt-2 max-w-[56ch] text-sm leading-relaxed text-muted-foreground sm:text-base'>
              {t.description}
            </p>
          </div>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center gap-3 self-start whitespace-nowrap px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] md:self-auto'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

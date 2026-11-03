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
 * project grid with a short line and a single button to /services. Stacked
 * and centred on small screens; from lg up a left-aligned row with the
 * button on the right, like the other strips on the site. It names nothing;
 * the services page does that. The mirror of WorkShowcase on /services.
 */
export function ServicesTeaser({ dict, className }: ServicesTeaserProps) {
  const t = dict.services.teaser;

  return (
    <section
      data-section='services-teaser'
      className={cn('bl-container pb-10 sm:pb-14', className)}
    >
      <Reveal>
        <div className='bl-card bl-card-tint flex flex-col items-center gap-6 px-6 py-8 text-center sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:text-left'>
          <div className='flex min-w-0 flex-col items-center lg:items-start'>
            <p className='bl-kicker justify-center lg:justify-start'>{t.kicker}</p>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              delay={0.1}
              className='bl-display mt-3 justify-center text-2xl text-foreground sm:text-3xl lg:justify-start'
            />
            <p className='mt-2 max-w-[56ch] text-sm leading-relaxed text-muted-foreground sm:text-base'>
              {t.description}
            </p>
          </div>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center gap-3 whitespace-nowrap px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

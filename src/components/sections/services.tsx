import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getServices } from '@/data/services';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ServicesProps {
  dict: Dictionary;
  className?: string;
  /** The services page has its own hero, so it drops the section heading. */
  heading?: boolean;
}

/**
 * The seven services in a hairline grid. The first cell is an ink card with
 * the one-line promise and the way in; the services follow, numbered.
 */
export function Services({ dict, className, heading = true }: ServicesProps) {
  const t = dict.services;
  const services = getServices(dict.locale);

  return (
    <section
      className={cn('bl-section bl-rule bl-band-stone', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        {heading && (
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            accentWords={[...t.accent]}
            description={t.description}
          />
        )}

        <Stagger
          stagger={0.08}
          className={cn(
            'grid gap-px overflow-hidden border bg-line sm:grid-cols-2 lg:grid-cols-4',
            heading && 'mt-8 sm:mt-14',
          )}
        >
          <StaggerItem className='bl-grid-surface relative flex flex-col justify-between bg-ink p-6 text-white sm:p-8'>
            <p className='bl-display relative text-2xl leading-tight lg:text-3xl'>
              {t.promise}
            </p>
            <Link
              href={paths.contact}
              className='bl-btn bl-btn-primary relative mt-8 inline-flex h-12 items-center justify-center gap-3 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </StaggerItem>

          {services.map((service, index) => (
            <StaggerItem
              key={service.id}
              className='group flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-brand-soft/35 sm:p-8'
            >
              <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-brand-text'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='bl-display mt-6 text-xl text-foreground lg:text-2xl'>
                {service.title}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                {service.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

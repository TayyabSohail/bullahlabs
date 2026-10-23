import {
  ArrowUpRight,
  Bot,
  Boxes,
  Compass,
  Gauge,
  GraduationCap,
  Layers3,
  type LucideIcon,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getServices, type ServiceId } from '@/data/services';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ServicesProps {
  dict: Dictionary;
  className?: string;
  /** The services page has its own hero, so it drops the section heading. */
  heading?: boolean;
}

const serviceIcons: Record<ServiceId, LucideIcon> = {
  'product-development': Compass,
  'product-engineering': Layers3,
  'ai-automation': Bot,
  'systems-integrations': Boxes,
  'architecture-optimisation': Gauge,
  'education-guidance': GraduationCap,
  'product-improvement': Wrench,
};

/**
 * The seven services in a deliberately uneven grid. The entry card makes the
 * next step obvious, while the individual services are easy to scan by number
 * and symbol before reading their fuller description.
 */
export function Services({ dict, className, heading = true }: ServicesProps) {
  const t = dict.services;
  const services = getServices(dict.locale);

  return (
    <section data-section='services' className={cn('bl-section bl-rule bl-band-stone', className)}>
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
            'grid overflow-hidden border border-ink/80 bg-ink/80 sm:grid-cols-2 lg:grid-cols-4',
            heading && 'mt-8 sm:mt-14',
          )}
        >
          <StaggerItem className='bl-grid-surface relative flex min-h-[22rem] flex-col justify-between overflow-hidden bg-ink p-6 text-white sm:p-8 lg:col-span-2 lg:row-span-2 lg:min-h-[31.5rem] lg:p-10'>
            <div className='relative'>
              <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-brand/90'>
                [ {t.kicker} ]
              </p>
              <p className='bl-display mt-8 max-w-[15ch] text-3xl leading-[0.98] sm:text-4xl lg:mt-12 lg:text-5xl'>
                {t.promise}
              </p>
            </div>
            <span
              aria-hidden='true'
              className='bl-display pointer-events-none absolute -bottom-11 -right-2 select-none text-[15rem] leading-none text-white/[0.045] sm:text-[18rem]'
            >
              07
            </span>
            <Link
              href={paths.contact}
              className='bl-btn bl-btn-primary relative mt-8 inline-flex h-12 w-full items-center justify-center gap-3 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] sm:w-fit'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </StaggerItem>

          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            const featured = index === 0;

            return (
              <StaggerItem
                key={service.id}
                className={cn(
                  'relative flex min-h-[17rem] flex-col overflow-hidden bg-surface p-6 sm:p-8',
                  featured && 'lg:col-span-2',
                )}
              >
                <div className='flex items-start justify-between gap-5'>
                  <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
                    {String(index + 1).padStart(2, '0')} / 07
                  </p>
                  <span className='flex h-10 w-10 shrink-0 items-center justify-center border border-ink/20 bg-background/50 text-brand-text'>
                    <Icon aria-hidden='true' className='h-[18px] w-[18px]' strokeWidth={1.7} />
                  </span>
                </div>

                <div className='mt-auto border-t border-ink/15 pt-5 sm:pt-6'>
                  <h3
                    className={cn(
                      'bl-display max-w-[17ch] text-2xl text-foreground lg:text-[1.7rem]',
                      featured && 'lg:text-3xl',
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className='mt-3 max-w-[48ch] text-sm leading-relaxed text-muted-foreground'>
                    {service.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

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
 * The seven services on one hairline grid, like a printed price list: the
 * entry plate first, then each service as a numbered cell that reads top
 * down (number, name, what it is) at every width. No icons, no ghost
 * numerals: the ledger number is the only mark.
 */
export function Services({ dict, className, heading = true }: ServicesProps) {
  const t = dict.services;
  const services = getServices(dict.locale);

  return (
    <section
      data-section='services'
      className={cn('bl-section bl-rule bl-band-stone', className)}
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
          stagger={0.06}
          className={cn(
            'grid overflow-hidden border border-ink/80 bg-ink/80 sm:grid-cols-2 lg:grid-cols-4',
            heading && 'mt-6 sm:mt-10',
          )}
        >
          <StaggerItem className='relative flex flex-col justify-between bg-ink p-5 text-white sm:p-6 lg:col-span-2 lg:row-span-2 lg:p-8'>
            <div>
              <p className='bl-kicker text-white/60'>{t.kicker}</p>
              <p className='bl-display mt-4 max-w-[15ch] text-2xl leading-[0.98] sm:text-3xl lg:mt-8 lg:text-5xl'>
                {t.promise}
              </p>
            </div>
            <Link
              href={paths.contact}
              className='bl-btn bl-btn-primary mt-6 inline-flex h-12 w-full items-center justify-center gap-3 px-6 sm:w-fit lg:mt-10'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </StaggerItem>

          {services.map((service, index) => {
            const featured = index === 0;

            return (
              <StaggerItem
                key={service.id}
                className={cn(
                  'flex flex-col bg-surface p-5 sm:p-6',
                  featured && 'lg:col-span-2',
                )}
              >
                <h3
                  className={cn(
                    'bl-display max-w-[17ch] text-2xl text-foreground',
                    featured && 'lg:text-3xl',
                  )}
                >
                  {service.title}
                </h3>
                <p className='mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground'>
                  {service.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

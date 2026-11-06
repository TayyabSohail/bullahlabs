import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { getValues } from '@/data/values';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface PrinciplesProps {
  dict: Dictionary;
  className?: string;
}

/**
 * The engineering principles as numbered rows, read top to bottom like the
 * clauses of a working agreement: the number, the rule, what it means.
 */
export function Principles({ dict, className }: PrinciplesProps) {
  const t = dict.principles;
  const values = getValues(dict.locale);

  return (
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
        />
        <Stagger stagger={0.06} className='mt-6 border-t sm:mt-10'>
          {values.map((value, index) => (
            <StaggerItem
              key={value.title}
              className='grid grid-cols-[2rem_1fr] gap-x-2 border-b py-4 sm:py-5 lg:grid-cols-[2rem_1fr_1.3fr] lg:gap-x-8'
            >
              <span className='bl-num pt-1'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='bl-display text-xl text-foreground sm:text-2xl'>
                {value.title}
              </h3>
              <p className='col-start-2 mt-1 text-base leading-relaxed text-muted-foreground lg:col-start-3 lg:mt-0'>
                {value.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

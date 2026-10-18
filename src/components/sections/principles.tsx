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
 * clauses of a working agreement: the rule on the left, what it means on
 * the right.
 */
export function Principles({ dict, className }: PrinciplesProps) {
  const t = dict.principles;
  const values = getValues(dict.locale);

  return (
    <section
      className={cn('bl-section bl-rule bl-band-stone', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
        />
        <Stagger stagger={0.08} className='mt-8 border-t sm:mt-14'>
          {values.map((value, index) => (
            <StaggerItem
              key={value.title}
              className='grid gap-2 border-b py-5 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-6 lg:grid-cols-[4rem_1fr_1.3fr] lg:gap-10'
            >
              <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:pt-1.5'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='bl-display text-xl text-foreground sm:text-2xl'>
                {value.title}
              </h3>
              <p className='text-base leading-relaxed text-muted-foreground sm:col-start-2 lg:col-start-3'>
                {value.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

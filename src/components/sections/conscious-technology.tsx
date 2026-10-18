import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import type { Dictionary } from '@/i18n/dictionaries/en';

interface ConsciousTechnologyProps {
  dict: Dictionary;
  className?: string;
}

/**
 * Why technology is never just technology: three short statements in a
 * hairline row, each stamped with its number like a clause in a spec.
 */
export function ConsciousTechnology({
  dict,
  className,
}: ConsciousTechnologyProps) {
  const t = dict.consciousTech;

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
        />
        <Stagger
          stagger={0.1}
          className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 lg:grid-cols-3'
        >
          {t.paragraphs.map((paragraph, index) => (
            <StaggerItem
              key={paragraph}
              className='group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-brand-soft/35 sm:p-8 lg:p-10'
            >
              <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
                {'// '}
                {String(index + 1).padStart(2, '0')}
              </span>
              <p
                className={cn(
                  'mt-6 leading-snug text-foreground',
                  index === 0
                    ? 'bl-display text-2xl lg:text-3xl'
                    : 'text-lg font-medium lg:text-xl',
                )}
              >
                {paragraph}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import { ArrowUpRight, Check, X } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Reveal } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface CompareProps {
  dict: Dictionary;
  className?: string;
}

/**
 * One everyday task done twice: out of habit, and deliberately. Rows are the
 * four decisions (tool, context, prompt, when to stop); the habit column is
 * muted, the deliberate one sits on ink. From `md` it reads as a table with a
 * header row; below that each cell carries its own column label.
 */
export function Compare({ dict, className }: CompareProps) {
  const t = dict.compare;

  return (
    <section
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
        />

        <Reveal className='mt-8 sm:mt-14'>
          <div className='grid gap-px overflow-hidden border bg-line md:grid-cols-[8.5rem_minmax(0,1fr)_minmax(0,1fr)]'>
            {/* Header row */}
            <div className='hidden bg-surface md:block' />
            <ColumnLabel className='hidden bg-surface-2 text-muted-foreground md:flex'>
              <X className='h-3.5 w-3.5' strokeWidth={2.5} />
              {t.defaultLabel}
            </ColumnLabel>
            <ColumnLabel className='hidden bg-ink text-brand-2 md:flex'>
              <Check className='h-3.5 w-3.5' strokeWidth={2.5} />
              {t.consciousLabel}
            </ColumnLabel>

            {t.rows.map((row, index) => (
              <Row
                key={row.step}
                step={row.step}
                index={index}
                before={row.default}
                after={row.conscious}
                beforeLabel={t.defaultLabel}
                afterLabel={t.consciousLabel}
              />
            ))}

            {/* What each way adds up to */}
            <div className='hidden bg-surface md:block' />
            <p className='bg-surface-2 px-5 py-5 text-sm font-semibold leading-snug text-ink/70 sm:px-7'>
              {t.defaultResult}
            </p>
            <p className='bg-brand px-5 py-5 text-sm font-semibold leading-snug text-brand-foreground sm:px-7'>
              {t.consciousResult}
            </p>
          </div>
        </Reveal>

        <Reveal className='mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='max-w-xl text-xs leading-relaxed text-muted-foreground'>
            {t.note}
          </p>
          <Link href={paths.program} className='bl-action shrink-0'>
            {t.cta}
            <ArrowUpRight className='h-3.5 w-3.5' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ColumnLabel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        'items-center gap-2 px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]',
        className,
      )}
    >
      {children}
    </p>
  );
}

function Row({
  step,
  index,
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  step: string;
  index: number;
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <>
      <div className='flex items-baseline gap-3 bg-surface px-5 py-4 md:flex-col md:gap-2 md:px-6 md:py-6'>
        <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className='bl-display text-lg text-ink md:text-xl'>{step}</span>
      </div>
      <div className='bg-surface-2 px-5 py-4 sm:px-7 md:py-6'>
        <p className='mb-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:hidden'>
          {beforeLabel}
        </p>
        <p className='text-[15px] leading-relaxed text-ink/65'>{before}</p>
      </div>
      <div className='bg-ink px-5 py-4 sm:px-7 md:py-6'>
        <p className='mb-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-2 md:hidden'>
          {afterLabel}
        </p>
        <p className='text-[15px] font-medium leading-relaxed text-white'>
          {after}
        </p>
      </div>
    </>
  );
}

import { cn } from '@/lib/utils';

import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The spoiler as a redaction mark that reads anyway: the line sits on a
 * black, slightly skewed bar with a diagonal stripe texture, white and
 * bold, with the key words lit in green. Static, no animation.
 */
export function SpoilerPlate({
  copy,
  className,
}: {
  copy: Dictionary['consciousAiPage']['aiProfile']['spoiler'];
  className?: string;
}) {
  return (
    <p
      className={cn(
        'inline-flex max-w-md flex-wrap items-center gap-x-3 gap-y-2',
        className,
      )}
    >
      <span className='inline-flex h-6 shrink-0 items-center border border-ink bg-ink px-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[2px_2px_0_0_hsl(var(--brand))]'>
        {copy.tag}
      </span>
      <span className='inline-block -skew-x-6 bg-ink bg-[repeating-linear-gradient(45deg,transparent_0_6px,hsl(0_0%_100%/0.07)_6px_8px)] px-3 py-1.5 shadow-[3px_3px_0_0_hsl(var(--brand))]'>
        <span className='inline-block skew-x-6 font-display text-xl font-bold leading-snug text-white sm:text-2xl'>
          {copy.lead}{' '}
          <span className='bl-accent text-brand-2'>{copy.accent}</span>{' '}
          {copy.tail}
        </span>
      </span>
    </p>
  );
}

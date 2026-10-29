import { cn } from '@/lib/utils';

/**
 * The spoiler as a redaction mark that reads anyway: the line sits on a
 * black, slightly skewed bar with a diagonal stripe texture, white and
 * bold, with the key words lit in green. Static, no animation.
 */
export function SpoilerPlate({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex max-w-md flex-wrap items-center gap-x-3 gap-y-2',
        className,
      )}
    >
      <span className='inline-flex h-6 shrink-0 items-center border border-ink bg-ink px-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[2px_2px_0_0_hsl(var(--brand))]'>
        Spoiler
      </span>
      <span className='inline-block -skew-x-6 bg-ink bg-[repeating-linear-gradient(45deg,transparent_0_6px,hsl(0_0%_100%/0.07)_6px_8px)] px-3 py-1.5 shadow-[3px_3px_0_0_hsl(var(--brand))]'>
        <span className='inline-block skew-x-6 font-display text-xl font-bold leading-snug text-white sm:text-2xl'>
          You&rsquo;re{' '}
          <span className='bl-accent text-brand-2'>harder to replace</span> than
          you think.
        </span>
      </span>
    </p>
  );
}

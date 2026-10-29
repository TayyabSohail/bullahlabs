'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const LEAD = "You're ";
const ACCENT = 'harder to replace';
const TAIL = ' than you think.';
const TEXT = `${LEAD}${ACCENT}${TAIL}`;

/**
 * The spoiler, printed like a line on an old terminal: it types itself out
 * once the panel scrolls into view, then stays, bold and fully readable,
 * with the key words lit in green. Reduced motion shows the line at once.
 */
export function SpoilerTyper({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (reduce) {
      setCount(TEXT.length);
      return;
    }
    if (count >= TEXT.length) return;
    const timeout = window.setTimeout(
      () => setCount((current) => current + 1),
      count === 0 ? 500 : 34,
    );
    return () => window.clearTimeout(timeout);
  }, [started, count, reduce]);

  const done = count >= TEXT.length;
  const typed = TEXT.slice(0, count);

  return (
    <div
      ref={ref}
      className={cn(
        'relative max-w-md rotate-[-1deg] border border-ink bg-ink px-5 pb-5 pt-6 text-white shadow-[4px_4px_0_0_hsl(var(--brand))]',
        className,
      )}
    >
      <span
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_3px,hsl(0_0%_100%/0.05)_3px_4px)]'
      />
      <span
        aria-hidden='true'
        className='absolute -top-3 left-4 rotate-[-4deg] border-2 border-brand bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-2 shadow-[2px_2px_0_0_hsl(var(--brand))]'
      >
        Spoiler
      </span>
      <span className='relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/45'>
        <span className='flex items-center gap-1.5'>
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full bg-brand',
              !done && 'animate-pulse',
            )}
          />
          {done ? 'Printed' : 'Printing'}
        </span>
        <span>
          {String(Math.min(count, TEXT.length)).padStart(2, '0')} /{' '}
          {TEXT.length}
        </span>
      </span>
      <p
        aria-label={TEXT}
        className='relative mt-3 min-h-[2.4em] font-display text-2xl font-bold leading-snug sm:text-[1.7rem]'
      >
        <span aria-hidden='true'>
          {done ? (
            <>
              {LEAD}
              <span className='bl-accent text-brand-2'>{ACCENT}</span>
              {TAIL}
            </>
          ) : (
            typed
          )}
        </span>
        <span
          aria-hidden='true'
          className={cn(
            'ml-0.5 inline-block h-[0.95em] w-[0.5em] translate-y-[0.15em] bg-brand-2 align-baseline',
            done && 'bl-blink',
          )}
        />
      </p>
    </div>
  );
}

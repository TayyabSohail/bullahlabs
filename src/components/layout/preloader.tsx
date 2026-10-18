'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const LETTERS = 'BULLAH LABS'.split('');
const DURATION_MS = 3200;
const REDUCED_DURATION_MS = 900;
const HOLD_MS = 450;

/* The blocky progress bar: filled cells, then empty ones. */
const BAR_CELLS = 24;

/* Status words under the bar, switched as the counter passes each mark. */
const STATUS: [number, string][] = [
  [0, 'Initialising'],
  [35, 'Loading lessons'],
  [70, 'Checking output'],
  [100, 'Ready'],
];

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * First-load intro: a black curtain with a faint engineering grid. The
 * wordmark rises letter by letter inside
 * four corner brackets that draw in around it, a blocky retro loader fills
 * cell by cell as a counter runs to 100 with a status word beneath, the
 * mark flashes brand green at 100, then the curtain lifts.
 *
 * The curtain is part of the server-rendered HTML, so the screen is dark from
 * the very first paint instead of flashing the page before the intro appears.
 * It runs on every full page load; client-side route changes never remount
 * the root layout, so navigating within the site does not replay it. Users
 * who prefer reduced motion get a shorter, fade-only version.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    setReduceMotion(reduce);
    document.documentElement.classList.add('lenis-stopped');

    const duration = reduce ? REDUCED_DURATION_MS : DURATION_MS;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) return;

    // The loader must paint its complete state before the exit transition starts.
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove('lenis-stopped');
    }, HOLD_MS);

    return () => window.clearTimeout(timer);
  }, [progress]);

  const filled = Math.min(
    BAR_CELLS,
    Math.max(0, Math.round((progress / 100) * BAR_CELLS)),
  );
  const done = progress === 100;
  const status = STATUS.reduce(
    (current, [at, word]) => (progress >= at ? word : current),
    STATUS[0][1],
  );

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.dataset.preloaderComplete = 'true';
        window.dispatchEvent(new Event('bullahlabs:preloader-complete'));
      }}
    >
      {visible && (
        <motion.div
          key='preloader'
          initial={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={{
            duration: reduceMotion ? 0.3 : 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className='fixed inset-0 z-[75] flex flex-col items-center justify-center overflow-hidden bg-black text-white'
          aria-hidden='true'
          data-preloader
        >
          {/* Faint engineering grid, fading towards the edges. */}
          <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.05)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]' />

          {/* Corner markers that draw in around the mark. */}
          <div className='relative px-8 py-6 sm:px-12 sm:py-8'>
            {(['tl', 'tr', 'bl', 'br'] as const).map((corner, index) => (
              <motion.span
                key={corner}
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.3 + index * 0.12 }}
                className={cn(
                  'absolute h-5 w-5 border-brand transition-colors duration-300',
                  corner === 'tl' &&
                    'left-0 top-0 origin-top-left border-l border-t',
                  corner === 'tr' &&
                    'right-0 top-0 origin-top-right border-r border-t',
                  corner === 'bl' &&
                    'bottom-0 left-0 origin-bottom-left border-b border-l',
                  corner === 'br' &&
                    'bottom-0 right-0 origin-bottom-right border-b border-r',
                  done && 'border-white',
                )}
              />
            ))}

            {/* Wordmark: letters rise out of a clipped line, no hinge. */}
            <div className='flex overflow-hidden pb-[0.06em] font-display text-[clamp(2.5rem,9vw,7rem)] font-bold leading-none tracking-[0.08em]'>
              {LETTERS.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={
                    reduceMotion ? { opacity: 0 } : { y: '90%', opacity: 0 }
                  }
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    ease,
                    delay: reduceMotion ? 0 : 0.2 + index * 0.08,
                  }}
                  className={cn(
                    'inline-block transition-colors duration-200',
                    done ? 'text-brand' : 'text-white',
                  )}
                >
                  {letter === ' ' ? ' ' : letter}
                </motion.span>
              ))}
            </div>

            {/* Underline that fills with the count. */}
            <div className='relative mt-3 h-px w-full bg-white/10'>
              <span
                className='absolute inset-y-0 left-0 bg-brand transition-[width] duration-100 ease-linear'
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Blocky cell bar: filled blocks in brand, empty cells dimmed. */}
          <div className='mt-6 flex w-[min(28rem,84vw)] items-center gap-3 font-mono text-[11px] tracking-[0.12em] sm:gap-4'>
            <span className='text-white/75'>[</span>
            <span className='flex-1 overflow-hidden whitespace-nowrap text-center text-brand'>
              {'█'.repeat(filled)}
              <span className='text-white/30'>
                {'░'.repeat(BAR_CELLS - filled)}
              </span>
            </span>
            <span className='text-white/75'>]</span>
            <span className='w-12 text-right tabular-nums text-white/90'>
              {String(progress).padStart(3, '0')}%
            </span>
          </div>

          {/* Status word with a blinking block cursor. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50'
          >
            <span className='inline-block h-1.5 w-1.5 bg-brand' />
            <span className={cn(done && 'text-brand')}>{status}</span>
            {!reduceMotion && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className='inline-block h-3 w-1.5 bg-white/60'
              />
            )}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

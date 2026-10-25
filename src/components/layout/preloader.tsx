'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const LETTERS = 'BULLAH LABS'.split('');
const DURATION_MS = 1800;
const REDUCED_DURATION_MS = 600;
const HOLD_MS = 300;

/* The blocky progress bar: filled cells, then empty ones. */
const BAR_CELLS = 24;

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * First-load intro: a black curtain. The wordmark rises letter by letter inside
 * four corner brackets that draw in around it, a blocky retro loader fills
 * cell by cell as a counter runs to 100, the mark flashes brand green at 100,
 * then the curtain lifts.
 *
 * It runs whenever the homepage is loaded directly or refreshed. Client-side
 * navigation between routes remains immediate because this component belongs
 * only to the homepage route.
 */
export function Preloader() {
  // Render the curtain on the server and during the first client paint. Starting
  // from `false` here made the homepage briefly visible before this effect could
  // turn the preloader on.
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const isHome = window.location.pathname === '/';

    if (!isHome) {
      document.documentElement.dataset.preloaderComplete = 'true';
      return;
    }

    setVisible(true);
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started) return;

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
  }, [started]);

  useEffect(() => {
    if (!started || progress !== 100) return;

    // The loader must paint its complete state before the exit transition starts.
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove('lenis-stopped');
    }, HOLD_MS);

    return () => window.clearTimeout(timer);
  }, [progress, started]);

  const filled = Math.min(
    BAR_CELLS,
    Math.max(0, Math.round((progress / 100) * BAR_CELLS)),
  );
  const done = progress === 100;

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
          {/* Corner markers that draw in around the mark. */}
          <div className='relative px-8 py-6 sm:px-12 sm:py-8'>
            {(['tl', 'tr', 'bl', 'br'] as const).map((corner, index) => (
              <motion.span
                key={corner}
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease, delay: 0.15 + index * 0.08 }}
                className={cn(
                  'absolute h-5 w-5 border-brand transition-colors duration-300',
                  corner === 'tl' &&
                    'left-0 top-0 origin-top-left border-l border-t max-[380px]:left-4',
                  corner === 'tr' &&
                    'right-0 top-0 origin-top-right border-r border-t max-[380px]:right-4',
                  corner === 'bl' &&
                    'bottom-0 left-0 origin-bottom-left border-b border-l max-[380px]:left-4',
                  corner === 'br' &&
                    'bottom-0 right-0 origin-bottom-right border-b border-r max-[380px]:right-4',
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
                    duration: reduceMotion ? 0 : 0.6,
                    ease,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.05,
                  }}
                  className={cn(
                    'inline-block transition-colors duration-200',
                    letter === ' ' && 'w-[0.2em] flex-none sm:w-[0.38em]',
                    done ? 'text-brand' : 'text-white',
                  )}
                >
                  {letter === ' ' ? null : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Blocky cell bar: filled blocks in brand, empty cells dimmed.
              The counter has a fixed slot on the right and an empty slot of
              the same width on the left, so the bar itself stays centred
              under the wordmark instead of drifting left on phones. */}
          <div className='mt-6 grid w-[min(28rem,84vw)] grid-cols-[2.75rem_1fr_2.75rem] items-center gap-3 font-mono text-[11px] tracking-[0.12em] sm:gap-4'>
            <span aria-hidden='true' />
            <span className='flex min-w-0 items-center justify-center gap-3 sm:gap-4'>
              <span className='text-white/75'>[</span>
              <span className='min-w-0 overflow-hidden whitespace-nowrap text-brand'>
                {'█'.repeat(filled)}
                <span className='text-white/30'>
                  {'░'.repeat(BAR_CELLS - filled)}
                </span>
              </span>
              <span className='text-white/75'>]</span>
            </span>
            <span className='-translate-x-3 text-right tabular-nums text-white/90 sm:translate-x-0'>
              {String(progress).padStart(3, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

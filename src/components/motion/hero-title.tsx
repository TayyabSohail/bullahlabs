'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface HeroTitleProps {
  title: string;
  className?: string;
}

/** The hero promise enters as one whole-line pop after the intro curtain. */
export function HeroTitle({ title, className }: HeroTitleProps) {
  const reduceMotion = useReducedMotion();
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [headline, promise] = title.split('\n');

  useEffect(() => {
    if (
      document.documentElement.dataset.preloaderComplete === 'true' ||
      !document.querySelector('[data-preloader]')
    ) {
      setPreloaderFinished(true);
      return;
    }

    const reveal = () => setPreloaderFinished(true);
    window.addEventListener('bullahlabs:preloader-complete', reveal, {
      once: true,
    });
    return () =>
      window.removeEventListener('bullahlabs:preloader-complete', reveal);
  }, []);

  const hidden = { opacity: 0, scale: 0.82, y: '0.22em' };

  return (
    <h1 className={cn('bl-display', className)}>
      <span className='block'>{headline}</span>
      {promise && (
        <motion.span
          initial={reduceMotion ? false : hidden}
          animate={preloaderFinished ? { opacity: 1, scale: 1, y: 0 } : hidden}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='bl-accent mt-[0.16em] block origin-left text-brand-text'
        >
          {promise}
        </motion.span>
      )}
    </h1>
  );
}

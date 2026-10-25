'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface HeroTitleProps {
  title: string;
  className?: string;
}

/** The hero promise enters as one whole-line pop as soon as the hero mounts. */
export function HeroTitle({ title, className }: HeroTitleProps) {
  const reduceMotion = useReducedMotion();
  const [headline, promise] = title.split('\n');

  const hidden = { opacity: 0, scale: 0.82, y: '0.22em' };

  return (
    <h1 className={cn('bl-display', className)}>
      <span className='block'>{headline}</span>
      {promise && (
        <motion.span
          initial={reduceMotion ? false : hidden}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className='bl-accent mt-[0.16em] block origin-left text-brand-text'
        >
          {promise}
        </motion.span>
      )}
    </h1>
  );
}

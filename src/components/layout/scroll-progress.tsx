'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Reading-progress line pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden='true'
      style={{ scaleX }}
      className='pointer-events-none fixed inset-x-0 top-0 z-[55] h-1 origin-left bg-brand'
    />
  );
}

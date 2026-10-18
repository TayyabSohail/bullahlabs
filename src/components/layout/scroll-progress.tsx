'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Segmented reading-progress bar pinned to the very top of the viewport. */
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
      className='fixed inset-x-0 top-0 z-[55] h-[3px] origin-left bg-brand [mask-image:repeating-linear-gradient(90deg,black_0_10px,transparent_10px_13px)]'
    />
  );
}

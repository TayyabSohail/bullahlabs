'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { createContext, useContext, useId, useState } from 'react';

import { cn } from '@/lib/utils';

interface FoldState {
  open: boolean;
  panelId: string;
  toggle: () => void;
}

const FoldContext = createContext<FoldState | null>(null);

function useFold(component: string): FoldState {
  const state = useContext(FoldContext);
  if (!state) throw new Error(`${component} must sit inside <Fold>.`);
  return state;
}

/**
 * A disclosure whose trigger and panel can live in different grid cells.
 * The instructor plate holds the trigger; the facts open in a row of their
 * own under the whole card, so the column beside the plate never moves.
 * Renders no element itself: wrap the grid and place the two parts inside.
 */
export function Fold({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <FoldContext.Provider
      value={{ open, panelId, toggle: () => setOpen((value) => !value) }}
    >
      {children}
    </FoldContext.Provider>
  );
}

/** The button that opens and closes the fold. Children render as the label. */
export function FoldTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, panelId, toggle } = useFold('FoldTrigger');
  return (
    <button
      type='button'
      aria-expanded={open}
      aria-controls={panelId}
      onClick={toggle}
      className={cn('group/fold', className)}
      data-open={open ? '' : undefined}
    >
      {children}
    </button>
  );
}

/** The folded content: mounts when open, sliding in from zero height. */
export function FoldPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, panelId } = useFold('FoldPanel');
  const reduce = useReducedMotion();
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          id={panelId}
          key='panel'
          initial={reduce ? false : { height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn('overflow-hidden', className)}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

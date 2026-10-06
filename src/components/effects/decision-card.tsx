'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export interface DecisionAnswer {
  /** What happens out of habit. Shown first, then struck through. */
  byDefault: string;
  /** The deliberate choice that replaces it. */
  onPurpose: string;
}

export interface DecisionTask {
  /** The everyday task, as a person would say it. */
  task: string;
  /** One answer per question, in the order of `DecisionCopy.questions`. */
  answers: DecisionAnswer[];
  /** What the deliberate way adds up to. */
  outcome: string;
}

export interface DecisionCopy {
  /** Spoken description of the whole card, for assistive tech. */
  kicker: string;
  live: string;
  taskLabel: string;
  defaultLabel: string;
  consciousLabel: string;
  outcomeLabel: string;
  /** The four questions a person asks before pressing enter. */
  questions: string[];
  tasks: DecisionTask[];
}

interface DecisionCardProps {
  copy: DecisionCopy;
  /** Seconds before the first task starts playing. */
  delay?: number;
  className?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

/** Seconds, within one task. */
const TASK_IN = 0.5;
const ROW_START = 0.55;
const ROW_GAP = 0.75;
const STRIKE_AT = 0.45;
const PURPOSE_AT = 0.6;
const OUTCOME_AT = ROW_START + 4 * ROW_GAP;
/** How long one task stays on screen before the next replaces it. */
const CYCLE_S = 10;
const FADE_OUT = 0.4;

/** The ink token as an rgb triple, for colours framer can interpolate. */
const INK = '13, 13, 13';

/**
 * The headline, acted out: an everyday task appears and is decided in four
 * steps. Each step first shows the habit, which is then struck through, and
 * the deliberate choice takes its place with a tick. The outcome lands at the
 * bottom. After a pause the next task plays. Cycling waits while the card is
 * off screen; reduced motion shows the first task finished, with nothing
 * moving. Every task is rendered in the same grid cell so the card keeps one
 * height while the content changes.
 */
export function DecisionCard({
  copy,
  delay = 0,
  className,
}: DecisionCardProps) {
  const reduce = useReducedMotion() === true;
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.3 });
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(0);
  const count = copy.tasks.length;

  useEffect(() => {
    if (reduce) {
      setStarted(true);
      return;
    }
    const timer = window.setTimeout(() => setStarted(true), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [delay, reduce]);

  useEffect(() => {
    if (!started || reduce || !inView || count < 2) return;
    const timer = window.setTimeout(
      () => setActive((i) => (i + 1) % count),
      CYCLE_S * 1000,
    );
    return () => window.clearTimeout(timer);
  }, [started, reduce, inView, active, count]);

  const playing = started && !reduce;

  return (
    <div
      ref={rootRef}
      role='group'
      aria-label={copy.kicker}
      className={cn('bl-card', className)}
    >
      <div className='relative flex items-center justify-between gap-4 border-b bg-surface px-5 py-3 sm:px-6'>
        <p className='inline-flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-ink'>
          <motion.span
            aria-hidden='true'
            className='h-1.5 w-1.5 bg-brand'
            animate={playing ? { opacity: [1, 0.25, 1] } : undefined}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          {copy.live}
        </p>
        <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground'>
          {copy.taskLabel}{' '}
          <span className='text-ink'>
            {String(active + 1).padStart(2, '0')}
          </span>
          <span aria-hidden='true'> / {String(count).padStart(2, '0')}</span>
        </p>
        {/* Time left on this task. Restarts with the task, and with the
            card coming back into view, since cycling pauses off screen. */}
        {playing && (
          <motion.span
            key={`${active}-${inView}`}
            aria-hidden='true'
            className='absolute inset-x-0 -bottom-px h-px origin-left bg-brand'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: inView ? CYCLE_S : 0.2, ease: 'linear' }}
          />
        )}
      </div>

      <div className='grid'>
        {copy.tasks.map((task, i) => (
          <TaskPanel
            key={task.task}
            copy={copy}
            task={task}
            active={started && i === active}
            reduce={reduce}
          />
        ))}
      </div>
    </div>
  );
}

interface TaskPanelProps {
  copy: DecisionCopy;
  task: DecisionTask;
  active: boolean;
  reduce: boolean;
}

function TaskPanel({ copy, task, active, reduce }: TaskPanelProps) {
  /** With reduced motion every change is immediate. */
  const at = (seconds: number) => (reduce ? 0 : seconds);
  const dur = (seconds: number) => (reduce ? 0 : seconds);
  const out = { duration: dur(FADE_OUT), ease: 'easeOut' as const };

  return (
    <motion.div
      aria-hidden={!active}
      initial={false}
      animate={active ? 'show' : 'hide'}
      variants={{
        hide: {
          opacity: 0,
          transition: out,
          transitionEnd: { visibility: 'hidden' },
        },
        show: {
          opacity: 1,
          visibility: 'visible',
          transition: { duration: dur(0.2) },
        },
      }}
      style={{ gridArea: '1 / 1' }}
      className='flex flex-col bg-surface'
    >
      <motion.p
        variants={{
          hide: { opacity: 0, y: 8, transition: out },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: dur(TASK_IN), ease, delay: at(0.1) },
          },
        }}
        className='bl-display px-5 pb-5 pt-5 text-[1.6rem] leading-[1.08] tracking-[-0.02em] text-ink sm:px-6 sm:pt-6 sm:text-[1.9rem]'
      >
        {task.task}
      </motion.p>

      <dl className='grid gap-px border-y bg-line sm:grid-cols-2'>
        {copy.questions.map((question, i) => {
          const answer = task.answers[i];
          const start = ROW_START + i * ROW_GAP;
          return (
            <div
              key={question}
              className='bg-surface px-5 py-4 sm:px-6 sm:py-5'
            >
              <motion.dt
                variants={{
                  hide: { opacity: 0, transition: out },
                  show: {
                    opacity: 1,
                    transition: { duration: dur(0.35), delay: at(start) },
                  },
                }}
                className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'
              >
                <span className='text-muted-foreground'>
                  {String(i + 1).padStart(2, '0')}
                </span>{' '}
                {question}
              </motion.dt>
              {/* The habit: appears, then is struck through and dimmed. */}
              <motion.dd
                variants={{
                  hide: {
                    opacity: 0,
                    color: `rgba(${INK}, 0.7)`,
                    textDecorationColor: `rgba(${INK}, 0)`,
                    transition: out,
                  },
                  show: {
                    opacity: 1,
                    color: `rgba(${INK}, 0.4)`,
                    textDecorationColor: `rgba(${INK}, 0.45)`,
                    transition: {
                      opacity: { duration: dur(0.35), delay: at(start) },
                      color: {
                        duration: dur(0.4),
                        delay: at(start + STRIKE_AT),
                      },
                      textDecorationColor: {
                        duration: dur(0.4),
                        delay: at(start + STRIKE_AT),
                      },
                    },
                  },
                }}
                style={{ textDecorationLine: 'line-through' }}
                className='mt-2 text-sm leading-snug'
              >
                <span className='sr-only'>{copy.defaultLabel}: </span>
                {answer.byDefault}
              </motion.dd>
              <motion.dd
                variants={{
                  hide: { opacity: 0, y: 6, transition: out },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: dur(0.5),
                      ease,
                      delay: at(start + PURPOSE_AT),
                    },
                  },
                }}
                className='mt-1.5 flex items-start gap-2 text-[15px] font-medium leading-snug text-ink'
              >
                <Check
                  aria-hidden='true'
                  className='mt-0.5 h-4 w-4 shrink-0 text-brand-text'
                  strokeWidth={2.5}
                />
                <span>
                  <span className='sr-only'>{copy.consciousLabel}: </span>
                  {answer.onPurpose}
                </span>
              </motion.dd>
            </div>
          );
        })}
      </dl>

      <motion.p
        variants={{
          hide: { opacity: 0, transition: out },
          show: {
            opacity: 1,
            transition: { duration: dur(0.5), ease, delay: at(OUTCOME_AT) },
          },
        }}
        className='flex flex-col gap-1 bg-ink px-5 py-4 text-white sm:flex-row sm:items-baseline sm:gap-4 sm:px-6'
      >
        <span className='shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-2'>
          {copy.outcomeLabel}
        </span>
        <span className='text-sm font-medium leading-snug'>{task.outcome}</span>
      </motion.p>
    </motion.div>
  );
}

'use client';

import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';

/**
 * One shipped project told in three beats. Every line is a fact already in
 * `data/projects`: the problem the client had, what was built, the figure
 * it produced. `conscience` is the beat behind the headline: what was kept
 * out, kept light or kept human.
 */
export interface LedgerCase {
  /** Case study the result links to. */
  slug: string;
  /** Who it was for, in a few words. */
  client: string;
  problem: string;
  built: string;
  conscience: string;
  /** Headline figure such as "70%", "30 min" or "0". Counts up from zero. */
  value: string;
  /** Reads on from the figure. */
  label: string;
}

export interface CaseLedgerCopy {
  /** Accessible name of the panel. */
  kicker: string;
  /** Label in the header strip. */
  heading: string;
  stages: {
    problem: string;
    built: string;
    conscience: string;
    result: string;
  };
  /** The link under the figure. */
  link: string;
  /** Played one after another, then again from the start. */
  cases: LedgerCase[];
}

interface CaseLedgerProps {
  copy: CaseLedgerCopy;
  /** Seconds after the preloader lifts before the first case plays. */
  delay?: number;
  className?: string;
}

type Step = 'problem' | 'built' | 'conscience' | 'result' | 'link' | 'exit';

const RANK: Record<Step, number> = {
  problem: 0,
  built: 1,
  conscience: 2,
  result: 3,
  link: 4,
  exit: 5,
};

/** Milliseconds per typed character, and the rests after each beat. */
const TYPE_MS = 16;
const SETTLE_MS = 350;
const REST: Record<Exclude<Step, 'exit'>, number> = {
  problem: 900,
  built: 700,
  conscience: 2200,
  result: 400,
  link: 3200,
};
const EXIT_MS = 450;
const GAP_MS = 250;
const COUNT_S = 0.9;
const ease = [0.16, 1, 0.3, 1] as const;

/** How long one case is on the card, for the progress bar in the header. */
const caseMs = (c: LedgerCase) =>
  SETTLE_MS +
  c.problem.length * TYPE_MS +
  REST.problem +
  REST.built +
  REST.conscience +
  COUNT_S * 1000 +
  REST.result +
  REST.link;

interface Stage {
  index: number;
  step: Step;
  /** Characters of the problem shown so far. */
  typed: number;
}

/** The first case, complete: what the server renders and reduced motion keeps. */
const STATIC: Stage = { index: 0, step: 'link', typed: Infinity };

/**
 * Resolves once the first-load preloader has lifted its curtain (it keeps
 * `lenis-stopped` on the root element while it runs), or immediately when
 * no preloader is active.
 */
function waitForCurtain(): Promise<void> {
  const root = document.documentElement;
  if (!root.classList.contains('lenis-stopped')) return Promise.resolve();
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (root.classList.contains('lenis-stopped')) return;
      observer.disconnect();
      resolve();
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
  });
}

const sleep = (ms: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));

const pad = (n: number) => String(n).padStart(2, '0');

/** Splits "30 min" into "", 30, " min" so the number can count. */
function parseFigure(value: string) {
  const match = value.match(/^([^\d]*)(\d[\d,.]*?)(\D.*)?$/);
  if (!match) return null;
  const [, prefix, raw, suffix = ''] = match;
  const target = Number(raw.replace(/,/g, ''));
  if (Number.isNaN(target)) return null;
  const grouped = raw.includes(',');
  const format = (n: number) =>
    grouped ? Math.round(n).toLocaleString('en-US') : String(Math.round(n));
  return { prefix, target, suffix, format };
}

/** The headline figure, counting up from zero while a case plays. */
function Figure({ value, run }: { value: string; run: boolean }) {
  const parsed = parseFigure(value);
  const [n, setN] = useState(() => (run ? 0 : (parsed?.target ?? 0)));

  useEffect(() => {
    if (!run || !parsed) return;
    const controls = animate(0, parsed.target, {
      duration: COUNT_S,
      ease,
      onUpdate: setN,
    });
    return () => controls.stop();
    // The figure is fixed for the life of this instance; see the key above.
  }, [run]);

  return (
    <span className='bl-display text-[2.75rem] tabular-nums leading-none text-brand-text sm:text-[3.25rem]'>
      {parsed ? `${parsed.prefix}${parsed.format(n)}${parsed.suffix}` : value}
    </span>
  );
}

interface RowProps {
  n: string;
  label: string;
  /** This beat has been reached. */
  on: boolean;
  /** The beat being played is in this row. */
  active: boolean;
  /** The rail below this row has filled (the next beat has been reached). */
  fill?: boolean;
  last?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** One beat of the card: a numbered marker on the rail, a label, the content. */
function Row({
  n,
  label,
  on,
  active,
  fill,
  last,
  className,
  children,
}: RowProps) {
  return (
    <div className='grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-ink/15 first:border-t-0 sm:grid-cols-[3.25rem_minmax(0,1fr)]'>
      <div className='relative flex flex-col items-center pt-[1.1rem] sm:pt-[1.35rem]'>
        <span
          className='bl-ledger-mark h-2.5 w-2.5 border border-ink/50 bg-surface'
          data-on={on || undefined}
        />
        {!last && (
          <span className='relative mt-1.5 w-px flex-1 bg-ink/15'>
            <span
              className='bl-ledger-rail-fill absolute inset-0 bg-brand'
              data-on={fill || undefined}
            />
          </span>
        )}
      </div>
      <div className={cn('min-w-0 py-3 pr-4 sm:pr-5', className)}>
        <p
          className={cn(
            'truncate font-mono text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 sm:text-[11px]',
            active ? 'text-brand-text' : on ? 'text-ink/60' : 'text-ink/35',
          )}
        >
          <span className='mr-2 text-ink/40'>{n}</span>
          {label}
        </p>
        <div className='mt-2'>{children}</div>
      </div>
    </div>
  );
}

/**
 * The headline acted out with real work. A flat job card plays one shipped
 * project at a time in three beats a first-time visitor reads at a glance:
 * the problem the client had types in, what was built rises under it with
 * the conscience line that explains what was kept out or kept human, and
 * the measured result counts up with a link to the case study. A rail on
 * the left fills from beat to beat, a bar in the header shows how long the
 * case has left, then the card advances to the next one. It waits for the
 * preloader and only plays while on screen. The server and reduced motion
 * show the first case complete.
 */
export function CaseLedger({ copy, delay = 0.5, className }: CaseLedgerProps) {
  const reduce = useReducedMotion() === true;
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const inViewRef = useRef(false);
  inViewRef.current = inView;
  const casesRef = useRef(copy.cases);
  casesRef.current = copy.cases;

  const [running, setRunning] = useState(false);
  const [stage, setStage] = useState<Stage>(STATIC);

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    const live: { stop: () => void }[] = [];

    const go = (index: number, step: Step) =>
      setStage((s) => (s.index === index ? { ...s, step } : s));

    const play = async (index: number, c: LedgerCase) => {
      setStage({ index, step: 'problem', typed: 0 });
      await sleep(SETTLE_MS);
      if (cancelled) return;

      const typing = animate(0, c.problem.length, {
        duration: (c.problem.length * TYPE_MS) / 1000,
        ease: 'linear',
        onUpdate: (v) =>
          setStage((s) =>
            s.index === index ? { ...s, typed: Math.round(v) } : s,
          ),
      });
      live.push(typing);
      await typing;
      await sleep(REST.problem);
      if (cancelled) return;

      go(index, 'built');
      await sleep(REST.built);
      if (cancelled) return;
      go(index, 'conscience');
      await sleep(REST.conscience);
      if (cancelled) return;
      go(index, 'result');
      await sleep(COUNT_S * 1000 + REST.result);
      if (cancelled) return;
      go(index, 'link');
      await sleep(REST.link);
      if (cancelled) return;
      go(index, 'exit');
      await sleep(EXIT_MS);
    };

    (async () => {
      await waitForCurtain();
      await sleep(delay * 1000);
      if (cancelled) return;
      setRunning(true);

      let i = 0;
      while (!cancelled) {
        if (!inViewRef.current) {
          await sleep(400);
          continue;
        }
        const cases = casesRef.current;
        const index = i % cases.length;
        await play(index, cases[index]);
        if (cancelled) return;
        await sleep(GAP_MS);
        i += 1;
      }
    })();

    return () => {
      cancelled = true;
      live.forEach((c) => c.stop());
    };
    // The copy is read through a ref so a language switch does not restart.
  }, [reduce, delay]);

  const total = copy.cases.length;
  const c = copy.cases[stage.index % total];
  const rank = RANK[stage.step];
  const exiting = stage.step === 'exit';
  const typing = running && stage.step === 'problem';
  const activeRow = rank <= 0 ? 0 : rank <= 2 ? 1 : 2;

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <div
        role='group'
        aria-label={copy.kicker}
        className='bl-ledger relative border border-ink bg-surface/95 backdrop-blur-sm'
      >
        <span aria-hidden='true' className='bl-ledger-tick -left-[7px] -top-2'>
          +
        </span>
        <span aria-hidden='true' className='bl-ledger-tick -right-[7px] -top-2'>
          +
        </span>
        <span
          aria-hidden='true'
          className='bl-ledger-tick -bottom-2 -left-[7px]'
        >
          +
        </span>
        <span
          aria-hidden='true'
          className='bl-ledger-tick -bottom-2 -right-[7px]'
        >
          +
        </span>

        <div className='relative flex items-center gap-3 border-b border-ink bg-ink px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:px-5 sm:text-[11px]'>
          <span
            aria-hidden='true'
            className='bl-ledger-live h-2 w-2 bg-brand'
          />
          <span className='truncate'>{copy.heading}</span>
          <span className='ml-auto shrink-0 tabular-nums text-white/70'>
            {pad(stage.index + 1)} / {pad(total)}
          </span>
          <span
            key={stage.index}
            aria-hidden='true'
            className='bl-ledger-progress'
            data-run={running || undefined}
            style={{ animationDuration: `${caseMs(c)}ms` }}
          />
        </div>

        <motion.div
          key={stage.index}
          initial={running ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: exiting ? 0 : 1, y: exiting ? -8 : 0 }}
          transition={{ duration: exiting ? 0.4 : 0.5, ease }}
        >
          <Row
            n='01'
            label={`${copy.stages.problem} · ${c.client}`}
            on
            active={activeRow === 0}
            fill={rank >= 1}
            className='min-h-[6rem] sm:min-h-[6.25rem]'
          >
            <p className='text-[1.1rem] font-medium leading-snug text-ink sm:text-[1.2rem]'>
              {c.problem.slice(0, stage.typed)}
              {typing && (
                <span aria-hidden='true' className='bl-ledger-caret' />
              )}
            </p>
          </Row>

          <Row
            n='02'
            label={copy.stages.built}
            on={rank >= 1}
            active={activeRow === 1}
            fill={rank >= 3}
            className='min-h-[8.75rem] sm:min-h-[9rem]'
          >
            {rank >= 1 && (
              <motion.p
                initial={running ? { opacity: 0, y: 8 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className='text-[1.1rem] font-medium leading-snug text-ink/85 sm:text-[1.2rem]'
              >
                {c.built}
              </motion.p>
            )}
            {rank >= 2 && (
              <motion.div
                initial={running ? { opacity: 0, x: -10 } : false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
                className='mt-2.5 border-l-2 border-brand pl-3'
              >
                <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-text'>
                  {copy.stages.conscience}
                </p>
                <p className='mt-1 text-[0.95rem] leading-snug text-ink/70 sm:text-base'>
                  {c.conscience}
                </p>
              </motion.div>
            )}
          </Row>

          <Row
            n='03'
            label={copy.stages.result}
            on={rank >= 3}
            active={activeRow === 2}
            last
            className='min-h-[6rem] sm:min-h-[6.25rem]'
          >
            <div className='flex flex-wrap items-end gap-x-4 gap-y-3'>
              {rank >= 3 && (
                <motion.div
                  initial={running ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className='flex min-w-0 flex-wrap items-end gap-x-4 gap-y-2'
                >
                  <Figure value={c.value} run={running} />
                  <span className='max-w-[13rem] pb-1 text-sm leading-snug text-ink/70'>
                    {c.label}
                  </span>
                </motion.div>
              )}
              {rank >= 4 && (
                <motion.div
                  initial={running ? { opacity: 0, scale: 0.96 } : false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease }}
                  className='pb-1 sm:ml-auto'
                >
                  <Link
                    href={paths.caseStudy(c.slug)}
                    className='bl-btn bl-btn-secondary inline-flex h-9 items-center gap-2 bg-white px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink'
                  >
                    {copy.link}
                    <ArrowRight className='h-3.5 w-3.5' />
                  </Link>
                </motion.div>
              )}
            </div>
          </Row>
        </motion.div>
      </div>
    </div>
  );
}

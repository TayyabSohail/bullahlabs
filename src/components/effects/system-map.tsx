'use client';

import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export type MapNodeId =
  | 'task'
  | 'decide'
  | 'tool'
  | 'context'
  | 'check'
  | 'result';

/**
 * One real task walked through the conscious-AI habit, stop by stop.
 * Every task takes the same six stops; `ai` says whether a model is part
 * of the answer. It colours the cube, shrinks it as the model and the
 * input are kept small, and drives the computation meter under the map.
 */
export interface MapScenario {
  task: string;
  ai: boolean;
  decide: string;
  tool: string;
  context: string;
  check: string;
  result: string;
}

export interface SystemMapCopy {
  /** Shown under the map before the first task starts; also the alt text. */
  kicker: string;
  /** Small tag in front of the task name. */
  taskLabel: string;
  /** Tile labels; a newline splits one over two lines. */
  nodes: Record<MapNodeId, string>;
  /**
   * The computation meter under the map: its label, and the three states
   * it names: full (the usual way), empty (no model ran) and what is
   * left once a task is done consciously.
   */
  meter: { label: string; usual: string; none: string; lean: string };
  /** Played one after another, then again from the start. */
  scenarios: MapScenario[];
}

interface SystemMapProps {
  copy: SystemMapCopy;
  /** Seconds after the preloader lifts before the tiles rise. */
  delay?: number;
  className?: string;
}

type Tone = 'paper' | 'ink' | 'mint' | 'warm' | 'brand';
type CubeTone = 'ink' | 'brand' | 'paper';

/** One grid unit on screen: half a cell wide, half a cell tall. */
const UX = 40;
const UY = 20;
/** Tile side in grid units, and its top diamond in pixels, plus the edge. */
const TILE = 1.5;
const TILE_HW = TILE * UX;
const TILE_HH = TILE * UY;
const TILE_T = 11;
/** Distance between tile centres along a row and between the two rows. */
const COL = 2.2;
const ROW = 2.7;
/** Plate: the desk everything happens on, with a margin around the tiles. */
const PLATE_X: [number, number] = [-1.1, 2 * COL + 1.1];
const PLATE_Y: [number, number] = [-1.1, ROW + 1.1];
const PLATE_T = 8;
/** Cube: the task, riding the wires. Its base sits on the front of a tile. */
const CUBE = 12;
const CUBE_DY = 11;
/** Labels sit on the back half of a tile, clear of the cube. */
const LABEL_DY = -(TILE_T + 7);
/** Seconds to travel one wire; milliseconds the cube rests on each tile. */
const TRAVEL_S = 0.6;
const DWELL: Record<MapNodeId, number> = {
  task: 900,
  decide: 1500,
  tool: 1300,
  context: 1300,
  check: 1300,
  result: 2200,
};
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * The computation meter: how much of the usual computation a task still
 * carries after each stop, in segments. A task arrives at full, the usual
 * way: the biggest model, the whole document, several rounds. Deciding
 * "no AI" empties it at once; a smaller model and less input empty most
 * of it; the check and the result cost nothing more.
 */
export const METER_SEGMENTS = 10;
const LEVEL: Record<MapNodeId, [ai: number, noAi: number]> = {
  task: [10, 10],
  decide: [9, 0],
  tool: [5, 0],
  context: [2, 0],
  check: [2, 0],
  result: [2, 0],
};

export function levelFor(scenario: MapScenario, step: MapNodeId) {
  return LEVEL[step][scenario.ai ? 0 : 1];
}

/**
 * The conscious-AI habit laid out as a loop around the plate, in the order
 * it is taught: your task comes in top-left, the first question is whether
 * it needs AI at all, then the smallest model that does the job, only the
 * input it needs, a check by you, and the task lands back on the left done
 * with less waste. Tones carry the meaning: the decision is ink, the two
 * saving steps mint, the human check warm, the lean result solid brand.
 */
const NODES: Record<MapNodeId, { x: number; y: number; tone: Tone }> = {
  task: { x: 0, y: 0, tone: 'paper' },
  decide: { x: COL, y: 0, tone: 'ink' },
  tool: { x: 2 * COL, y: 0, tone: 'mint' },
  context: { x: 2 * COL, y: ROW, tone: 'mint' },
  check: { x: COL, y: ROW, tone: 'warm' },
  result: { x: 0, y: ROW, tone: 'brand' },
};

/** Back to front, so tiles paint in the right order. */
const NODE_ORDER: MapNodeId[] = [
  'task',
  'decide',
  'result',
  'tool',
  'check',
  'context',
];

/** The one route every task takes, as a loop around the plate. */
const ROUTE: MapNodeId[] = [
  'task',
  'decide',
  'tool',
  'context',
  'check',
  'result',
];

const EDGES: { from: MapNodeId; to: MapNodeId }[] = ROUTE.slice(1).map(
  (to, i) => ({ from: ROUTE[i], to }),
);

const edgeKey = (from: MapNodeId, to: MapNodeId) => `${from}>${to}`;

const project = (x: number, y: number) => ({
  px: (x - y) * UX,
  py: (x + y) * UY,
});

const at = (id: MapNodeId) => project(NODES[id].x, NODES[id].y);

const diamond = (cx: number, cy: number, hw: number, hh: number) =>
  `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;

/** Three faces of a box whose top diamond is centred on (cx, cy). */
function box(cx: number, cy: number, hw: number, hh: number, t: number) {
  return {
    top: diamond(cx, cy, hw, hh),
    left: `${cx - hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + t} ${cx - hw},${cy + t}`,
    right: `${cx},${cy + hh} ${cx + hw},${cy} ${cx + hw},${cy + t} ${cx},${cy + hh + t}`,
  };
}

/** Plate grid lines at whole units. */
const GRID: { x1: number; y1: number; x2: number; y2: number }[] = [];
for (let i = Math.ceil(PLATE_X[0]); i <= Math.floor(PLATE_X[1]); i++) {
  const a = project(i, PLATE_Y[0]);
  const b = project(i, PLATE_Y[1]);
  GRID.push({ x1: a.px, y1: a.py, x2: b.px, y2: b.py });
}
for (let j = Math.ceil(PLATE_Y[0]); j <= Math.floor(PLATE_Y[1]); j++) {
  const c = project(PLATE_X[0], j);
  const d = project(PLATE_X[1], j);
  GRID.push({ x1: c.px, y1: c.py, x2: d.px, y2: d.py });
}
const PLATE = (() => {
  const t = project(PLATE_X[0], PLATE_Y[0]);
  const r = project(PLATE_X[1], PLATE_Y[0]);
  const b = project(PLATE_X[1], PLATE_Y[1]);
  const l = project(PLATE_X[0], PLATE_Y[1]);
  return {
    top: `${t.px},${t.py} ${r.px},${r.py} ${b.px},${b.py} ${l.px},${l.py}`,
    left: `${l.px},${l.py} ${b.px},${b.py} ${b.px},${b.py + PLATE_T} ${l.px},${l.py + PLATE_T}`,
    right: `${b.px},${b.py} ${r.px},${r.py} ${r.px},${r.py + PLATE_T} ${b.px},${b.py + PLATE_T}`,
    minX: l.px,
    maxX: r.px,
    minY: t.py,
    maxY: b.py + PLATE_T,
  };
})();
/** The drawing hugs the plate; room above for the lifted tiles and the tick. */
const VIEW_BOX = [
  PLATE.minX - 12,
  PLATE.minY - 30,
  PLATE.maxX - PLATE.minX + 24,
  PLATE.maxY - PLATE.minY + 42,
].join(' ');

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

function captionFor(scenario: MapScenario, step: MapNodeId) {
  switch (step) {
    case 'task':
      return null;
    case 'decide':
      return scenario.decide;
    case 'tool':
      return scenario.tool;
    case 'context':
      return scenario.context;
    case 'check':
      return scenario.check;
    case 'result':
      return scenario.result;
  }
}

interface TileProps {
  id: MapNodeId;
  index: number;
  ready: boolean;
  pulse: number;
  active: boolean;
  reduce: boolean;
}

/** The box of a tile; its label is drawn in a separate layer above the cube. */
function Tile({ id, index, ready, pulse, active, reduce }: TileProps) {
  const { px, py } = at(id);
  const f = box(px, py - TILE_T, TILE_HW, TILE_HH, TILE_T);
  return (
    <motion.g
      className='bl-map-tile'
      data-tone={NODES[id].tone}
      data-active={active || undefined}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={ready ? { opacity: 1, y: active ? -6 : 0 } : undefined}
      transition={{ duration: 0.5, ease, delay: ready ? 0 : index * 0.1 }}
    >
      <polygon className='bl-map-left' points={f.left} />
      <polygon className='bl-map-right' points={f.right} />
      <polygon className='bl-map-top' points={f.top} />
      {!reduce && pulse > 0 && (
        <motion.polygon
          key={pulse}
          className='bl-map-flash'
          points={f.top}
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}
    </motion.g>
  );
}

function TileLabel({
  id,
  label,
  ready,
  active,
  reduce,
}: {
  id: MapNodeId;
  label: string;
  ready: boolean;
  active: boolean;
  reduce: boolean;
}) {
  const { px, py } = at(id);
  const lines = label.split('\n');
  return (
    <motion.g
      className='bl-map-tile'
      data-tone={NODES[id].tone}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={ready ? { opacity: 1, y: active ? -6 : 0 } : undefined}
      transition={{ duration: 0.5, ease }}
    >
      <text
        className='bl-map-label'
        x={px}
        y={py + LABEL_DY - (lines.length - 1) * 4}
        textAnchor='middle'
        dominantBaseline='central'
      >
        {lines.map((line, i) => (
          <tspan
            key={i}
            x={px}
            dy={i === 0 ? `${-(lines.length - 1) * 0.6}em` : '1.2em'}
          >
            {line}
          </tspan>
        ))}
      </text>
    </motion.g>
  );
}

/** The task cube: where it is, what it looks like. */
interface Walker {
  node: MapNodeId | null;
  tone: CubeTone;
  scale: number;
}

const IDLE: Walker = { node: null, tone: 'ink', scale: 1 };

/** Which task is on the plate and where it has got to. */
interface Stage {
  scenario: number;
  step: MapNodeId;
}

/**
 * Conscious AI as a working habit. Real tasks are sent across the plate
 * one at a time and every one takes the same six stops: your task, need
 * AI?, small model, less input, you check, less waste. When a model is
 * part of the answer the cube turns green at "need AI?" and shrinks at the
 * two saving stops, because the model and the input are kept small; when
 * the answer is a formula, a poll or a person, the cube stays white and
 * nothing is sent to a model. A computation meter under the map starts
 * full, the usual way, and drains as the task passes each conscious stop.
 * The route lights up behind the cube and a caption names the task and
 * says, in one short line, what is decided at each stop and what it
 * saves. Tiles rise in after the preloader and the wires draw; the walk
 * only runs while the map is on screen. Reduced motion shows the finished
 * map with the cube resting on the result.
 */
export function SystemMap({ copy, delay = 0.5, className }: SystemMapProps) {
  const reduce = useReducedMotion() === true;
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const inViewRef = useRef(false);
  inViewRef.current = inView;
  const scenariosRef = useRef(copy.scenarios);
  scenariosRef.current = copy.scenarios;

  const [ready, setReady] = useState(false);
  const [walker, setWalker] = useState<Walker>(IDLE);
  const [stage, setStage] = useState<Stage | null>(null);
  const [round, setRound] = useState(0);
  const [lit, setLit] = useState<string[]>([]);
  const [checked, setChecked] = useState(0);
  const [landed, setLanded] = useState(0);
  const [pulses, setPulses] = useState<Record<MapNodeId, number>>({
    task: 0,
    decide: 0,
    tool: 0,
    context: 0,
    check: 0,
    result: 0,
  });

  const start = at('task');
  const cubeX = useMotionValue(start.px);
  const cubeY = useMotionValue(start.py);
  const cubeOpacity = useMotionValue(0);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      const end = at('result');
      cubeX.set(end.px);
      cubeY.set(end.py);
      cubeOpacity.set(1);
      setWalker({ node: 'result', tone: 'paper', scale: 0.65 });
      setStage({ scenario: 0, step: 'result' });
      setLit(EDGES.map(({ from, to }) => edgeKey(from, to)));
      return;
    }

    let cancelled = false;
    const running: { stop: () => void }[] = [];
    const pulse = (id: MapNodeId) =>
      setPulses((prev) => ({ ...prev, [id]: prev[id] + 1 }));

    const move = (id: MapNodeId) => {
      const target = at(id);
      const a = animate(cubeX, target.px, { duration: TRAVEL_S, ease });
      const b = animate(cubeY, target.py, { duration: TRAVEL_S, ease });
      running.push(a, b);
      return Promise.all([a, b]);
    };

    /** One task walking the loop, stop by stop. */
    const walk = async (index: number, scenario: MapScenario) => {
      cubeX.set(start.px);
      cubeY.set(start.py);
      setRound((n) => n + 1);
      setLit([]);
      setWalker({ node: 'task', tone: 'ink', scale: 1 });
      setStage({ scenario: index, step: 'task' });
      pulse('task');
      await animate(cubeOpacity, 1, { duration: 0.3 });
      await sleep(DWELL.task);
      if (cancelled) return;

      for (let i = 1; i < ROUTE.length; i += 1) {
        const id = ROUTE[i];
        // The wire lights up under the cube as it travels and the caption
        // announces the stop as the cube sets off for it.
        setStage({ scenario: index, step: id });
        setLit((prev) => [...prev, edgeKey(ROUTE[i - 1], id)]);
        await move(id);
        if (cancelled) return;
        pulse(id);
        setWalker((prev) => ({
          ...prev,
          node: id,
          // A model is part of the answer: the task goes green. It is not:
          // the task stays white and nothing is sent anywhere.
          ...(id === 'decide' && { tone: scenario.ai ? 'brand' : 'paper' }),
          // The smallest tool that does the job, then only the context
          // it needs: the task gets lighter at each of the two stops.
          ...(id === 'tool' && scenario.ai && { scale: 0.8 }),
          ...(id === 'context' && scenario.ai && { scale: 0.65 }),
          ...(id === 'result' && { tone: 'paper' }), // delivered
        }));
        if (id === 'check') setChecked((n) => n + 1);
        if (id === 'result') setLanded((n) => n + 1);
        await sleep(DWELL[id]);
        if (cancelled) return;
      }
    };

    (async () => {
      await waitForCurtain();
      await sleep(delay * 1000);
      if (cancelled) return;
      setReady(true);
      await sleep(1000);

      let i = 0;
      while (!cancelled) {
        if (!inViewRef.current) {
          await sleep(400);
          continue;
        }
        const scenarios = scenariosRef.current;
        const index = i % scenarios.length;
        await walk(index, scenarios[index]);
        if (cancelled) return;
        await animate(cubeOpacity, 0, { duration: 0.3 });
        setWalker(IDLE);
        setLit([]);
        await sleep(450);
        i += 1;
      }
    })();

    return () => {
      cancelled = true;
      running.forEach((c) => c.stop());
    };
    // The motion values are stable; the copy is read through a ref.
  }, [reduce, delay]);

  const cube = box(0, -CUBE, CUBE, CUBE / 2, CUBE);
  const checkAt = at('check');
  const resultAt = at('result');
  const scenario = stage ? copy.scenarios[stage.scenario] : null;
  const caption = stage && scenario ? captionFor(scenario, stage.step) : null;
  const level =
    stage && scenario ? levelFor(scenario, stage.step) : METER_SEGMENTS;
  const meterHint =
    level === METER_SEGMENTS
      ? copy.meter.usual
      : level === 0
        ? copy.meter.none
        : stage?.step === 'result'
          ? copy.meter.lean
          : null;
  const labels = NODE_ORDER.map((id) => copy.nodes[id].replace('\n', ' ')).join(
    ', ',
  );

  return (
    <div
      ref={rootRef}
      role='img'
      aria-label={`${copy.kicker} ${labels}.`}
      className={cn('bl-map', className)}
    >
      <svg
        aria-hidden='true'
        viewBox={VIEW_BOX}
        className='block h-auto w-full overflow-visible'
      >
        <g className='bl-map-plate'>
          <polygon className='bl-map-plate-side' points={PLATE.left} />
          <polygon className='bl-map-plate-side' points={PLATE.right} />
          <polygon className='bl-map-plate-top' points={PLATE.top} />
          <g className='bl-map-grid'>
            {GRID.map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
            ))}
          </g>
        </g>

        {/* Wires */}
        <g>
          {EDGES.map(({ from, to }, i) => {
            const pa = at(from);
            const pb = at(to);
            return (
              <motion.line
                key={edgeKey(from, to)}
                className='bl-map-edge'
                x1={pa.px}
                y1={pa.py}
                x2={pb.px}
                y2={pb.py}
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={ready ? { pathLength: 1, opacity: 1 } : undefined}
                transition={{ duration: 0.6, ease, delay: 0.55 + i * 0.08 }}
              />
            );
          })}
        </g>

        {/* The route so far, lit in brand behind the cube. */}
        <g>
          <AnimatePresence>
            {lit.map((key) => {
              const [from, to] = key.split('>') as [MapNodeId, MapNodeId];
              const pa = at(from);
              const pb = at(to);
              return (
                <motion.line
                  key={`${round}:${key}`}
                  className='bl-map-edge-lit'
                  x1={pa.px}
                  y1={pa.py}
                  x2={pb.px}
                  y2={pb.py}
                  initial={reduce ? false : { pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    pathLength: { duration: TRAVEL_S, ease },
                    opacity: { duration: 0.3 },
                  }}
                />
              );
            })}
          </AnimatePresence>
        </g>

        {/* Tiles */}
        {NODE_ORDER.map((id, i) => (
          <Tile
            key={id}
            id={id}
            index={i}
            ready={ready}
            pulse={pulses[id]}
            active={walker.node === id}
            reduce={reduce}
          />
        ))}

        {/* A ring spreads from the result each time a task lands. */}
        {!reduce && landed > 0 && (
          <g
            key={`ring-${landed}`}
            transform={`translate(${resultAt.px} ${resultAt.py - TILE_T})`}
          >
            <polygon
              className='bl-map-ring'
              points={diamond(0, 0, TILE_HW, TILE_HH)}
            />
          </g>
        )}

        {/* The task */}
        <motion.g
          className='bl-map-cube'
          data-tone={walker.tone}
          style={{ x: cubeX, y: cubeY, opacity: cubeOpacity }}
        >
          <g transform={`translate(0 ${CUBE_DY})`}>
            <motion.g
              animate={{ scale: walker.scale }}
              transition={{ duration: 0.4, ease }}
            >
              <polygon className='bl-map-left' points={cube.left} />
              <polygon className='bl-map-right' points={cube.right} />
              <polygon className='bl-map-top' points={cube.top} />
            </motion.g>
          </g>
        </motion.g>

        {/* Labels sit above the cube so they stay readable. */}
        {NODE_ORDER.map((id) => (
          <TileLabel
            key={id}
            id={id}
            label={copy.nodes[id]}
            ready={ready}
            active={walker.node === id}
            reduce={reduce}
          />
        ))}

        {/* A tick rises over the review each time a task passes it. */}
        {!reduce && checked > 0 && (
          <motion.polyline
            key={`tick-${checked}`}
            className='bl-map-tick'
            points={`${checkAt.px - 14},${checkAt.py - TILE_T - TILE_HH - 16} ${checkAt.px - 4},${checkAt.py - TILE_T - TILE_HH - 6} ${checkAt.px + 16},${checkAt.py - TILE_T - TILE_HH - 28}`}
            initial={{ pathLength: 0, opacity: 1, y: 8 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0], y: [8, 0, -8] }}
            transition={{ duration: 1.6, ease, times: [0, 0.7, 1] }}
          />
        )}
      </svg>

      {/* The task on the plate, and what is happening to it right now. */}
      <div className='mt-3 min-h-[4.5rem] sm:min-h-[4rem]'>
        <AnimatePresence mode='wait' initial={false}>
          {scenario && stage ? (
            <motion.div
              key={stage.scenario}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground'>
                <p className='flex min-w-0 items-baseline gap-3'>
                  <span className='inline-flex shrink-0 items-baseline gap-2 font-semibold text-ink'>
                    <span
                      aria-hidden='true'
                      className={cn(
                        'inline-block h-2 w-2 translate-y-px',
                        walker.tone === 'brand' ? 'bg-brand' : 'bg-ink',
                      )}
                    />
                    {copy.taskLabel}
                  </span>
                  <span className='truncate'>{scenario.task}</span>
                </p>
                {/* How much of the usual computation the task still
                    carries: full when it arrives, drained stop by stop. */}
                <p
                  className='bl-map-meter'
                  aria-label={`${copy.meter.label}: ${level} / ${METER_SEGMENTS}`}
                >
                  <span className='font-semibold text-ink'>
                    {copy.meter.label}
                  </span>
                  <span aria-hidden='true' className='bl-map-meter-bar'>
                    {Array.from({ length: METER_SEGMENTS }, (_, i) => (
                      <span
                        key={i}
                        className='bl-map-meter-seg'
                        data-on={i < level || undefined}
                        style={{
                          transitionDelay: `${Math.max(0, level - 1 - i) * 40}ms`,
                        }}
                      />
                    ))}
                  </span>
                  <AnimatePresence mode='wait' initial={false}>
                    {meterHint && (
                      <motion.span
                        key={meterHint}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          'lowercase tracking-normal',
                          level === 0 || stage.step === 'result'
                            ? 'text-brand-text'
                            : 'text-muted-foreground',
                        )}
                      >
                        {meterHint}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </p>
              </div>
              <AnimatePresence mode='wait' initial={false}>
                <motion.p
                  key={caption ?? 'task'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25, ease }}
                  className={cn(
                    'mt-2 min-h-[1.4em] text-base font-medium leading-snug sm:text-lg',
                    stage.step === 'result' ? 'text-brand-text' : 'text-ink',
                  )}
                >
                  {caption ?? ' '}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.p
              key='kicker'
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease }}
              className='bl-kicker !tracking-[0.16em]'
            >
              {copy.kicker}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

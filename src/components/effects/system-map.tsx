'use client';

import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

/** The stops a task passes on the conscious lane, in order. */
export type MapStep =
  | 'task'
  | 'decide'
  | 'tool'
  | 'context'
  | 'check'
  | 'result';

/**
 * What one way of doing the work spends: tokens sent to a model, money in
 * US dollars, and carbon in kilograms of CO₂. A scenario carries two of
 * these, the usual way and the conscious way; the difference is the saving.
 */
export interface MapFigures {
  tokens: number;
  cost: number;
  co2: number;
}

/**
 * The work sent down both lanes at once. `ai` says whether a model is part
 * of the conscious answer: it colours the task block and decides whether
 * the lean model runs at all. `usual` is what the work costs the usual way;
 * `lean` what it costs done consciously.
 */
export interface MapScenario {
  /** What the work is; kept for the record, not drawn. */
  task: string;
  ai: boolean;
  usual: MapFigures;
  lean: MapFigures;
}

export interface SystemMapCopy {
  /** The two lanes. */
  lanes: { usual: string; conscious: string };
  /** Labels on the drawing; keep each box label under about twelve characters. */
  nodes: {
    /** The large model on the usual lane. */
    largeModel: string;
    /** The grid of input that goes into it: the full context, every time. */
    fullContext: string;
    /** The few cells that are enough on the conscious lane. */
    minimalContext: string;
    /** Prefix of the round counter above the large model: "Round 3/5". */
    round: string;
    /** The switch at the junction: our name, and a note on what we do there. */
    guide: string;
    guideNote: string;
    decide: string;
    tool: string;
    check: string;
  };
  /**
   * The saving between the lanes: its label, the locale the figures are
   * written in, the currency code for the money figure, and the words
   * after the token and carbon figures.
   */
  saved: {
    label: string;
    locale: string;
    currency: string;
    tokens: string;
    co2: string;
  };
  /** Played one after another, then again from the start. One is enough. */
  scenarios: MapScenario[];
}

interface SystemMapProps {
  copy: SystemMapCopy;
  /** Seconds after the preloader lifts before the drawing builds. */
  delay?: number;
  className?: string;
}

/* ----------------------------------------------------------------------- */
/* Layout                                                                   */

const W = 768;
const H = 344;
/** The two lanes: the usual way on top, the conscious way below. */
const LANE_A = 104;
const LANE_B = 268;
const ENTRY_X = 26;
/**
 * The switch where our part diverts the task down to the conscious lane.
 * Its label sits on the entry side, so the curve leaving it never crosses
 * the words.
 */
const JUNCTION_X = 156;
const CURVE_END_X = 230;
/** The usual lane: the full context as a grid, the large model, rounds. */
const FILE = { x: 236, y: LANE_A - 22, cols: 6, rows: 4, step: 12, size: 7 };
const MODEL = { x: 330, y: LANE_A - 34, w: 118, h: 68 };
const ROUNDS = 5;
/**
 * The conscious lane: three ruled stops hanging under the rail like
 * stations, so the task rides over them and never covers a label. Each
 * box is wide enough for its longest label in either language with room
 * to spare, and the row keeps clear of the meters.
 */
const STOP = {
  decide: { x: 276, w: 88, h: 38 },
  tool: { x: 390, w: 100, h: 38 },
  check: { x: 506, w: 92, h: 38 },
};
const STOP_DROP = 12;
const STOP_CY = LANE_B + STOP_DROP + STOP.decide.h / 2;
const SMALL_INPUT = 3;
const SMALL_Y = LANE_B - 26;
/**
 * Three meters at the end of each lane, tokens, money, carbon, each with
 * a short figure beside it. The panel between the lanes' meters is the
 * saving, written out in full.
 */
const BAR = { x: 570, w: 92, h: 8, gap: 6 };
const FIGURE_X = BAR.x + BAR.w + 7;
const METER_KEYS: (keyof MapFigures)[] = ['tokens', 'cost', 'co2'];
/** Top of meter row i, relative to the lane: the three rows centre on it. */
const barY = (lane: number, i: number) =>
  lane - (3 * BAR.h + 2 * BAR.gap) / 2 + i * (BAR.h + BAR.gap);
const PANEL_X = BAR.x;
const PANEL_RIGHT = W - 4;
/** The task block. */
const BLOCK = 18;
const ease = [0.16, 1, 0.3, 1] as const;

/** Where a task ends on each lane: resting just before the meters. */
const END_X = BAR.x - 18;

/** The curve the task takes from the switch down to the conscious lane. */
const CURVE = {
  p0: { x: JUNCTION_X, y: LANE_A },
  p1: { x: JUNCTION_X + 54, y: LANE_A },
  p2: { x: CURVE_END_X - 54, y: LANE_B },
  p3: { x: CURVE_END_X, y: LANE_B },
};
const CURVE_D = `M ${CURVE.p0.x} ${CURVE.p0.y} C ${CURVE.p1.x} ${CURVE.p1.y}, ${CURVE.p2.x} ${CURVE.p2.y}, ${CURVE.p3.x} ${CURVE.p3.y}`;

function bezier(t: number) {
  const { p0, p1, p2, p3 } = CURVE;
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
}

const FILE_CELLS = Array.from({ length: FILE.cols * FILE.rows }, (_, i) => ({
  x: FILE.x + (i % FILE.cols) * FILE.step,
  y: FILE.y + Math.floor(i / FILE.cols) * FILE.step,
}));

/* ----------------------------------------------------------------------- */
/* Figures                                                                  */

const ZERO: MapFigures = { tokens: 0, cost: 0, co2: 0 };

type Units = SystemMapCopy['saved'];

/** A whole number written out in full with thousands separators. */
const full = (n: number, locale: string) =>
  Math.round(n).toLocaleString(locale);

/** A short figure for the meters: 288M, 9.6M, 4,320. */
function compact(n: number, locale: string) {
  if (n >= 1e6) {
    return `${(n / 1e6).toLocaleString(locale, { maximumFractionDigits: 1 })}M`;
  }
  if (n >= 1e4) {
    return `${(n / 1e3).toLocaleString(locale, { maximumFractionDigits: 0 })}k`;
  }
  return full(n, locale);
}

function money(n: number, units: Units) {
  return n.toLocaleString(units.locale, {
    style: 'currency',
    currency: units.currency,
    maximumFractionDigits: n >= 10 ? 0 : 2,
  });
}

function carbon(kg: number, units: Units) {
  const figure = kg.toLocaleString(units.locale, {
    maximumFractionDigits: kg < 10 ? 1 : 0,
  });
  return `${figure} ${units.co2}`;
}

/** The figures beside the meters: short. */
function formatShort(key: keyof MapFigures, n: number, units: Units) {
  switch (key) {
    case 'tokens':
      return `${compact(n, units.locale)} ${units.tokens}`;
    case 'cost':
      return money(n, units);
    case 'co2':
      return carbon(n, units);
  }
}

/** The figures in the saving: written out in full. */
function formatFull(key: keyof MapFigures, n: number, units: Units) {
  switch (key) {
    case 'tokens':
      return `${full(n, units.locale)} ${units.tokens}`;
    case 'cost':
      return money(n, units);
    case 'co2':
      return carbon(n, units);
  }
}

const percent = (share: number, locale: string) =>
  `${Math.round(share * 100).toLocaleString(locale)}%`;

/**
 * A figure that counts from what it last showed to its new value. The
 * text is written straight into the node on every frame so the counting
 * never re-renders the drawing.
 */
function Count({
  value,
  format,
  duration = 0.8,
  delay = 0,
  reduce,
}: {
  value: number;
  format: (n: number) => string;
  duration?: number;
  delay?: number;
  reduce: boolean;
}) {
  const ref = useRef<SVGTSpanElement>(null);
  const shown = useRef(reduce ? value : 0);
  const formatRef = useRef(format);
  formatRef.current = format;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) {
      shown.current = value;
      node.textContent = formatRef.current(value);
      return;
    }
    const controls = animate(shown.current, value, {
      duration,
      delay,
      ease,
      onUpdate: (v) => {
        shown.current = v;
        node.textContent = formatRef.current(v);
      },
    });
    return () => controls.stop();
  }, [value, duration, delay, reduce]);

  return <tspan ref={ref}>{format(shown.current)}</tspan>;
}

/* ----------------------------------------------------------------------- */
/* Pieces                                                                   */

const sleep = (ms: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));

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

type Tone = 'paper' | 'ink' | 'brand' | 'warm';

/** A ruled box on a hard shadow, the site's own box style, centred on (cx, cy). */
function Box({
  cx,
  cy,
  w,
  h,
  tone,
  label,
  active,
  off,
  className,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  tone: Tone;
  label: string;
  active?: boolean;
  off?: boolean;
  className?: string;
}) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const lines = label.split('\n');
  return (
    <g
      className={cn('bl-map-box', className)}
      data-tone={tone}
      data-active={active || undefined}
      data-off={off || undefined}
    >
      <rect
        className='bl-map-box-shadow'
        x={x + 3}
        y={y + 3}
        width={w}
        height={h}
      />
      <rect className='bl-map-box-face' x={x} y={y} width={w} height={h} />
      <text
        className='bl-map-label'
        x={cx}
        y={cy - (lines.length - 1) * 6.5}
        textAnchor='middle'
        dominantBaseline='central'
      >
        {lines.map((line, i) => (
          <tspan key={i} x={cx} dy={i === 0 ? 0 : '1.2em'}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

/** A lane title: a small square and mono caps. */
function LaneTitle({
  x,
  y,
  text,
  tone,
}: {
  x: number;
  y: number;
  text: string;
  tone: 'ink' | 'brand';
}) {
  return (
    <g className='bl-map-lane' data-tone={tone}>
      <rect x={x} y={y - 4} width={7} height={7} className='bl-map-lane-mark' />
      <text
        x={x + 13}
        y={y}
        className='bl-map-lane-title'
        dominantBaseline='central'
      >
        {text}
      </text>
    </g>
  );
}

/**
 * The three meters at the end of a lane, tokens, money, carbon, each with
 * a short figure beside it. `share` is how full each meter is against the
 * usual way; `shown` the figures to write, which count as they change.
 */
function Meters({
  lane,
  tone,
  share,
  shown,
  units,
  reduce,
}: {
  lane: number;
  tone: 'ink' | 'brand';
  share: MapFigures;
  shown: MapFigures;
  units: Units;
  reduce: boolean;
}) {
  return (
    <g className='bl-map-meters' data-tone={tone}>
      {METER_KEYS.map((key, i) => {
        const y = barY(lane, i);
        return (
          <g key={key}>
            <rect
              className='bl-map-bar-track'
              x={BAR.x}
              y={y}
              width={BAR.w}
              height={BAR.h}
            />
            <motion.rect
              className='bl-map-bar-fill'
              x={BAR.x}
              y={y}
              height={BAR.h}
              initial={false}
              animate={{ width: Math.max(0, BAR.w * share[key]) }}
              transition={{ duration: share[key] === 0 ? 0 : 0.6, ease }}
            />
            <text
              className='bl-map-figure'
              x={FIGURE_X}
              y={y + BAR.h / 2}
              dominantBaseline='central'
            >
              <Count
                value={shown[key]}
                format={(n) => formatShort(key, n, units)}
                duration={0.6}
                reduce={reduce}
              />
            </text>
          </g>
        );
      })}
    </g>
  );
}

/* ----------------------------------------------------------------------- */
/* The graphic                                                              */

/** Which run is on and where the task has got to on the conscious lane. */
interface Stage {
  scenario: number;
  step: MapStep;
}

/** Everything the drawing shows at a given moment, besides the positions. */
interface Scene {
  /** The switch has flipped and the lanes have split. */
  split: boolean;
  /** The usual lane is churning: the context streams in, rounds tick. */
  streaming: boolean;
  round: number;
  /** How far the usual way has got, 0..1; its meters fill with it. */
  usual: number;
  /** The conscious way has spent what it spends; its meters show it. */
  lean: boolean;
  /** The minimal context has dropped into the lean model. */
  dropped: boolean;
  /** The task has passed your check. */
  checked: number;
  /** The task is done and the saving is counted. */
  saved: boolean;
  /** The task block: ink on arrival, brand when a model helps, paper when not. */
  tone: 'ink' | 'brand' | 'paper';
}

const RESET: Scene = {
  split: false,
  streaming: false,
  round: 0,
  usual: 0,
  lean: false,
  dropped: false,
  checked: 0,
  saved: false,
  tone: 'ink',
};

/**
 * Conscious AI shown as the difference it makes. The same work is sent
 * down two lanes at the same time. On the usual lane, a ghost of the task
 * goes straight into a large model: the full context streams in, the
 * model churns through five rounds, and the token, money and carbon
 * meters at the end fill up, figures counting. At the junction our switch
 * diverts the task itself down to the conscious lane: is AI needed at
 * all, a lean model, minimal context, a check by you. Its meters barely
 * move. When the task is done, the panel between the two lanes' meters
 * shows the saving: the share saved, then money counting up and landing
 * with a beat, tokens rolling up, and carbon wiped in. The kicker sits under the
 * drawing. The drawing builds after the preloader and only
 * runs while it is on screen. Reduced motion shows the finished picture.
 */
export function SystemMap({ copy, delay = 0.5, className }: SystemMapProps) {
  const reduce = useReducedMotion() === true;
  const uid = useId().replace(/:/g, '');
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const inViewRef = useRef(false);
  inViewRef.current = inView;
  const scenariosRef = useRef(copy.scenarios);
  scenariosRef.current = copy.scenarios;

  const [ready, setReady] = useState(false);
  const [stage, setStage] = useState<Stage | null>(null);
  const [scene, setScene] = useState<Scene>(RESET);
  const [run, setRun] = useState(0);

  const taskX = useMotionValue(ENTRY_X);
  const taskY = useMotionValue(LANE_A);
  const taskOpacity = useMotionValue(0);
  const ghostX = useMotionValue(JUNCTION_X);
  const ghostOpacity = useMotionValue(0);

  useEffect(() => {
    const patch = (p: Partial<Scene>) => setScene((s) => ({ ...s, ...p }));

    if (reduce) {
      setReady(true);
      taskX.set(END_X);
      taskY.set(LANE_B);
      taskOpacity.set(1);
      ghostX.set(END_X);
      ghostOpacity.set(0.5);
      setStage({ scenario: 0, step: 'result' });
      setScene({
        split: true,
        streaming: false,
        round: ROUNDS,
        usual: 1,
        lean: true,
        dropped: true,
        checked: 1,
        saved: true,
        tone: 'paper',
      });
      setRun(1);
      return;
    }

    let cancelled = false;
    const running: { stop: () => void }[] = [];
    const track = <T extends { stop: () => void }>(c: T) => {
      running.push(c);
      return c;
    };
    const moveTask = (x: number, duration = 0.5) =>
      track(animate(taskX, x, { duration, ease }));

    /** The usual lane, left to run on its own once the lanes split. */
    const churn = async () => {
      await track(
        animate(ghostX, MODEL.x + MODEL.w / 2, { duration: 0.7, ease }),
      );
      if (cancelled) return;
      patch({ streaming: true });
      for (let r = 1; r <= ROUNDS; r += 1) {
        patch({ round: r, usual: r / ROUNDS });
        await sleep(880);
        if (cancelled) return;
      }
      patch({ streaming: false });
      await track(animate(ghostX, END_X, { duration: 0.5, ease }));
    };

    /** One run, both lanes. */
    const play = async (index: number, scenario: MapScenario) => {
      setRun((n) => n + 1);
      setScene(RESET);
      setStage({ scenario: index, step: 'task' });
      taskX.set(ENTRY_X);
      taskY.set(LANE_A);
      ghostX.set(JUNCTION_X);
      ghostOpacity.set(0);
      await track(animate(taskOpacity, 1, { duration: 0.3 }));
      await sleep(500);
      if (cancelled) return;

      // In along the usual lane to the switch.
      await moveTask(JUNCTION_X, 0.7);
      if (cancelled) return;
      await sleep(250);
      patch({ split: true });
      await sleep(350);
      if (cancelled) return;

      // The lanes split: the ghost carries on, the task takes the curve.
      ghostOpacity.set(1);
      setStage({ scenario: index, step: 'decide' });
      const usual = churn();
      await track(
        animate(0, 1, {
          duration: 0.8,
          ease,
          onUpdate: (v) => {
            const p = bezier(v);
            taskX.set(p.x);
            taskY.set(p.y);
          },
        }),
      );
      if (cancelled) return;

      // Need AI?
      await moveTask(STOP.decide.x);
      await sleep(350);
      if (cancelled) return;
      patch({ tone: scenario.ai ? 'brand' : 'paper' });
      await sleep(1000);
      if (cancelled) return;

      // A lean model, then only the context it needs.
      setStage({ scenario: index, step: 'tool' });
      await moveTask(STOP.tool.x);
      await sleep(900);
      if (cancelled) return;
      setStage({ scenario: index, step: 'context' });
      if (scenario.ai) {
        patch({ dropped: true });
        await sleep(500);
      }
      patch({ lean: true });
      await sleep(1000);
      if (cancelled) return;

      // You check.
      setStage({ scenario: index, step: 'check' });
      await moveTask(STOP.check.x);
      setScene((s) => ({ ...s, checked: s.checked + 1 }));
      await sleep(1200);
      if (cancelled) return;

      // Done: the panel between the lanes' meters is the saving.
      setStage({ scenario: index, step: 'result' });
      await moveTask(END_X);
      await usual;
      if (cancelled) return;
      patch({ saved: true });
      await sleep(5200);
      if (cancelled) return;

      await Promise.all([
        track(animate(taskOpacity, 0, { duration: 0.35 })),
        track(animate(ghostOpacity, 0, { duration: 0.35 })),
      ]);
      await sleep(350);
    };

    (async () => {
      await waitForCurtain();
      await sleep(delay * 1000);
      if (cancelled) return;
      setReady(true);
      await sleep(900);

      let i = 0;
      while (!cancelled) {
        if (!inViewRef.current) {
          await sleep(400);
          continue;
        }
        const scenarios = scenariosRef.current;
        const index = i % scenarios.length;
        await play(index, scenarios[index]);
        if (cancelled) return;
        i += 1;
      }
    })();

    return () => {
      cancelled = true;
      running.forEach((c) => c.stop());
    };
    // The motion values are stable; the copy is read through a ref.
  }, [reduce, delay]);

  const scenario = stage ? copy.scenarios[stage.scenario] : null;
  const units = copy.saved;

  // What each lane spends, and how full its meters are against the usual way.
  const usualFigures = scenario?.usual ?? ZERO;
  const leanFigures = scenario?.lean ?? ZERO;
  const shareOf = (lean: number, usual: number) =>
    usual > 0 ? lean / usual : 0;
  const usualShown: MapFigures = {
    tokens: usualFigures.tokens * scene.usual,
    cost: usualFigures.cost * scene.usual,
    co2: usualFigures.co2 * scene.usual,
  };
  const leanShown = scene.lean ? leanFigures : ZERO;
  const leanShare: MapFigures = {
    tokens: scene.lean ? shareOf(leanFigures.tokens, usualFigures.tokens) : 0,
    cost: scene.lean ? shareOf(leanFigures.cost, usualFigures.cost) : 0,
    co2: scene.lean ? shareOf(leanFigures.co2, usualFigures.co2) : 0,
  };
  const saved: MapFigures = {
    tokens: usualFigures.tokens - leanFigures.tokens,
    cost: usualFigures.cost - leanFigures.cost,
    co2: usualFigures.co2 - leanFigures.co2,
  };
  const savedShare = usualFigures.cost > 0 ? saved.cost / usualFigures.cost : 0;

  // The panel: between the lanes' meters, spanning meters and figures.
  const panelW = PANEL_RIGHT - PANEL_X;
  const panelCX = PANEL_X + panelW / 2;
  const PANEL_Y = barY(LANE_A, 2) + BAR.h + 7;
  const PANEL_H = barY(LANE_B, 0) - 7 - PANEL_Y;

  const laneTop = LANE_A - 44;
  const build = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 10 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.5, ease, delay: ready ? i * 0.07 : 0 },
  });
  const altText = `${copy.lanes.usual}: ${copy.nodes.largeModel}, ${copy.nodes.fullContext}. ${copy.lanes.conscious}: ${copy.nodes.decide} ${copy.nodes.tool} ${copy.nodes.check}. ${copy.nodes.guide}.`;

  /** Rows in the saving: each figure arrives its own way. */
  const rowY = { cost: PANEL_Y + 60, tokens: PANEL_Y + 80, co2: PANEL_Y + 100 };

  return (
    <div
      ref={rootRef}
      role='img'
      aria-label={altText}
      className={cn('bl-map', className)}
    >
      <svg
        aria-hidden='true'
        viewBox={`0 0 ${W} ${H}`}
        className='block h-auto w-full overflow-hidden'
      >
        <defs>
          <pattern
            id={`${uid}-hatch`}
            width='6'
            height='6'
            patternUnits='userSpaceOnUse'
            patternTransform='rotate(45)'
          >
            <line x1='0' y1='0' x2='0' y2='6' className='bl-map-hatch' />
          </pattern>
          {/* The carbon figure is wiped in from the left. */}
          <clipPath id={`${uid}-wipe`}>
            <motion.rect
              x={PANEL_X}
              y={rowY.co2 - 12}
              height={24}
              initial={false}
              animate={{ width: scene.saved ? panelW : 0 }}
              transition={
                scene.saved
                  ? { duration: 0.9, ease, delay: 1.1 }
                  : { duration: 0 }
              }
            />
          </clipPath>
        </defs>

        {/* Lane titles */}
        <motion.g {...build(0)}>
          <LaneTitle
            x={ENTRY_X - 9}
            y={laneTop}
            text={copy.lanes.usual}
            tone='ink'
          />
        </motion.g>
        {/* The conscious title sits level with the row of stops. */}
        <motion.g {...build(1)}>
          <LaneTitle
            x={ENTRY_X - 9}
            y={STOP_CY}
            text={copy.lanes.conscious}
            tone='brand'
          />
        </motion.g>

        {/* Rails */}
        <motion.g {...build(2)}>
          <line
            className='bl-map-rail'
            x1={ENTRY_X - 9}
            y1={LANE_A}
            x2={BAR.x - 6}
            y2={LANE_A}
          />
          <line
            className='bl-map-rail'
            x1={CURVE_END_X}
            y1={LANE_B}
            x2={BAR.x - 6}
            y2={LANE_B}
          />
          <path className='bl-map-rail' d={CURVE_D} />
        </motion.g>

        {/* The curve lights up once the switch has sent the task down it. */}
        <AnimatePresence>
          {scene.split && (
            <motion.path
              key={`curve-${run}`}
              className='bl-map-rail-lit'
              d={CURVE_D}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease }}
            />
          )}
        </AnimatePresence>

        {/* The ghost: the same task, the usual way. Drawn under the model
            so it vanishes inside it. */}
        <motion.g
          className='bl-map-ghost'
          style={{ x: ghostX, opacity: ghostOpacity }}
        >
          <rect
            x={-BLOCK / 2}
            y={LANE_A - BLOCK / 2}
            width={BLOCK}
            height={BLOCK}
          />
        </motion.g>

        {/* The full context: a grid that empties into the large model. */}
        <motion.g {...build(3)}>
          {/* Anchored to the grid's right edge so it never runs into the model. */}
          <text
            className='bl-map-note'
            x={FILE.x + (FILE.cols - 1) * FILE.step + FILE.size}
            y={FILE.y - 12}
            textAnchor='end'
            dominantBaseline='central'
          >
            {copy.nodes.fullContext}
          </text>
          {FILE_CELLS.map((c, i) => (
            <rect
              key={i}
              className='bl-map-cell'
              x={c.x}
              y={c.y}
              width={FILE.size}
              height={FILE.size}
              data-gone={scene.streaming || scene.round > 0 || undefined}
            />
          ))}
        </motion.g>
        {/* ...and the cells in flight, one after another, into the model. */}
        {!reduce && scene.streaming && (
          <g key={`stream-${run}`}>
            {FILE_CELLS.map((c, i) => (
              <motion.rect
                key={i}
                className='bl-map-cell-flying'
                x={c.x}
                y={c.y}
                width={FILE.size}
                height={FILE.size}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: MODEL.x + MODEL.w / 2 - c.x - FILE.size / 2,
                  y: LANE_A - c.y - FILE.size / 2,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 0.55,
                  ease,
                  delay: i * 0.085,
                  opacity: {
                    duration: 0.55,
                    delay: i * 0.085,
                    times: [0, 0.8, 1],
                  },
                }}
              />
            ))}
          </g>
        )}

        {/* The large model, and the rounds it takes. */}
        <motion.g {...build(4)}>
          <Box
            cx={MODEL.x + MODEL.w / 2}
            cy={LANE_A}
            w={MODEL.w}
            h={MODEL.h}
            tone='ink'
            label={copy.nodes.largeModel}
            active={scene.streaming}
            className='bl-map-model'
          />
          <g transform={`translate(${MODEL.x + MODEL.w / 2} ${MODEL.y - 16})`}>
            <motion.path
              className='bl-map-round-arrow'
              d='M -7 0 A 7 7 0 1 1 0 7'
              animate={scene.streaming ? { rotate: 360 } : { rotate: 0 }}
              transition={
                scene.streaming
                  ? { duration: 0.88, ease: 'linear', repeat: Infinity }
                  : { duration: 0 }
              }
            />
            <path className='bl-map-round-arrow' d='M -3 7 L 0 7 L 0 4' />
            <text
              className='bl-map-note'
              x={14}
              y={0}
              dominantBaseline='central'
            >
              {`${copy.nodes.round} ${Math.max(scene.round, scene.split ? 1 : 0)}/${ROUNDS}`}
            </text>
          </g>
        </motion.g>

        {/* The switch: our part, where the task is diverted. */}
        <motion.g
          {...build(5)}
          className='bl-map-switch'
          data-on={scene.split || undefined}
        >
          <motion.line
            className='bl-map-switch-arm'
            x1={JUNCTION_X}
            y1={LANE_A}
            x2={JUNCTION_X + 15}
            y2={LANE_A}
            style={{ originX: 0, originY: 0.5 }}
            animate={{ rotate: scene.split ? 52 : 0 }}
            transition={{ duration: 0.35, ease }}
          />
          <rect
            className='bl-map-switch-shadow'
            x={JUNCTION_X - 8}
            y={LANE_A - 8}
            width={22}
            height={22}
          />
          <rect
            className='bl-map-switch-face'
            x={JUNCTION_X - 11}
            y={LANE_A - 11}
            width={22}
            height={22}
          />
          <rect
            className='bl-map-switch-mark'
            x={JUNCTION_X - 3}
            y={LANE_A - 3}
            width={6}
            height={6}
          />
          {/* The label ends short of the switch on its entry side: the
              curve leaves on the other side, so it never crosses the words. */}
          <text
            className='bl-map-label bl-map-switch-label'
            x={JUNCTION_X - 16}
            y={LANE_A + 24}
            textAnchor='end'
            dominantBaseline='central'
          >
            {copy.nodes.guide}
          </text>
          <text
            className='bl-map-note'
            x={JUNCTION_X - 16}
            y={LANE_A + 37}
            textAnchor='end'
            dominantBaseline='central'
          >
            {copy.nodes.guideNote}
          </text>
        </motion.g>

        {/* The conscious lane: three ruled stops hanging under the rail. */}
        <motion.g {...build(6)}>
          <line
            className='bl-map-stem'
            x1={STOP.decide.x}
            y1={LANE_B}
            x2={STOP.decide.x}
            y2={LANE_B + STOP_DROP}
          />
          <Box
            cx={STOP.decide.x}
            cy={STOP_CY}
            w={STOP.decide.w}
            h={STOP.decide.h}
            tone='paper'
            label={copy.nodes.decide}
            active={stage?.step === 'decide'}
          />
        </motion.g>
        <motion.g {...build(7)}>
          {/* Minimal context: three cells above the rail, their note above
              them, that drop through the rail into the lean model. */}
          <text
            className='bl-map-note'
            x={STOP.tool.x}
            y={SMALL_Y - 15}
            textAnchor='middle'
            dominantBaseline='central'
          >
            {copy.nodes.minimalContext}
          </text>
          {Array.from({ length: SMALL_INPUT }, (_, i) => {
            const x =
              STOP.tool.x -
              ((SMALL_INPUT - 1) * FILE.step) / 2 +
              i * FILE.step -
              FILE.size / 2;
            return (
              <motion.rect
                key={`${run}-${i}`}
                className='bl-map-cell'
                data-small
                x={x}
                y={SMALL_Y - FILE.size / 2}
                width={FILE.size}
                height={FILE.size}
                animate={
                  scene.dropped
                    ? { y: STOP_CY - SMALL_Y, opacity: 0 }
                    : { y: 0, opacity: 1 }
                }
                transition={
                  scene.dropped
                    ? { duration: 0.5, ease, delay: i * 0.12 }
                    : { duration: 0 }
                }
              />
            );
          })}
          <line
            className='bl-map-stem'
            x1={STOP.tool.x}
            y1={LANE_B}
            x2={STOP.tool.x}
            y2={LANE_B + STOP_DROP}
          />
          <Box
            cx={STOP.tool.x}
            cy={STOP_CY}
            w={STOP.tool.w}
            h={STOP.tool.h}
            tone='brand'
            label={copy.nodes.tool}
            active={stage?.step === 'tool' || stage?.step === 'context'}
            off={scenario ? !scenario.ai && scene.tone === 'paper' : false}
          />
        </motion.g>
        <motion.g {...build(8)}>
          <line
            className='bl-map-stem'
            x1={STOP.check.x}
            y1={LANE_B}
            x2={STOP.check.x}
            y2={LANE_B + STOP_DROP}
          />
          <Box
            cx={STOP.check.x}
            cy={STOP_CY}
            w={STOP.check.w}
            h={STOP.check.h}
            tone='warm'
            label={copy.nodes.check}
            active={stage?.step === 'check'}
          />
          {!reduce && scene.checked > 0 && (
            <motion.polyline
              key={`tick-${run}-${scene.checked}`}
              className='bl-map-tick'
              points={`${STOP.check.x - 9},${LANE_B - 28} ${STOP.check.x - 2},${LANE_B - 21} ${STOP.check.x + 11},${LANE_B - 36}`}
              initial={{ pathLength: 0, opacity: 1, y: 6 }}
              animate={{ pathLength: 1, opacity: [1, 1, 0], y: [6, 0, -8] }}
              transition={{ duration: 1.5, ease, times: [0, 0.7, 1] }}
            />
          )}
        </motion.g>

        {/* The meters: tokens, money, carbon, at the end of each lane. */}
        <motion.g {...build(9)}>
          <Meters
            lane={LANE_A}
            tone='ink'
            share={{ tokens: scene.usual, cost: scene.usual, co2: scene.usual }}
            shown={usualShown}
            units={units}
            reduce={reduce}
          />
          <Meters
            lane={LANE_B}
            tone='brand'
            share={leanShare}
            shown={leanShown}
            units={units}
            reduce={reduce}
          />
        </motion.g>

        {/* The saving: the panel between the lanes' meters. The share saved
            drops in first; then money counts up and lands with a beat,
            tokens roll up over a longer count, and carbon is wiped in. */}
        <AnimatePresence>
          {scene.saved && scenario && (
            <motion.g
              key={`saved-${run}`}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}
            >
              <motion.rect
                className='bl-map-gap'
                x={PANEL_X}
                y={PANEL_Y}
                width={panelW}
                height={PANEL_H}
                fill={`url(#${uid}-hatch)`}
                initial={reduce ? false : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease }}
                style={{ originY: 0 }}
              />
              <rect
                className='bl-map-gap-rule'
                x={PANEL_X}
                y={PANEL_Y}
                width={panelW}
                height={PANEL_H}
              />
              <motion.text
                className='bl-map-saved-label'
                x={panelCX}
                y={PANEL_Y + 13}
                textAnchor='middle'
                dominantBaseline='central'
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.25 }}
              >
                {copy.saved.label}
              </motion.text>
              {/* The share saved: drops in, large. */}
              <motion.text
                className='bl-map-saved-share'
                x={panelCX}
                y={PANEL_Y + 37}
                textAnchor='middle'
                dominantBaseline='central'
                initial={reduce ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.35,
                }}
              >
                <Count
                  value={savedShare}
                  format={(n) => percent(n, units.locale)}
                  duration={0.9}
                  delay={0.35}
                  reduce={reduce}
                />
              </motion.text>
              {/* Money: counts up fast, then lands with a beat. */}
              <motion.g
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1, 1.12, 1] }}
                transition={{
                  opacity: { duration: 0.2, delay: 0.5 },
                  scale: {
                    duration: 1.6,
                    times: [0, 0.78, 0.86, 1],
                    ease: 'easeOut',
                    delay: 0.5,
                  },
                }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <text
                  className='bl-map-saved-figure bl-map-saved-money'
                  x={panelCX}
                  y={rowY.cost}
                  textAnchor='middle'
                  dominantBaseline='central'
                >
                  <Count
                    value={saved.cost}
                    format={(n) => formatFull('cost', n, units)}
                    duration={1.2}
                    delay={0.5}
                    reduce={reduce}
                  />
                </text>
              </motion.g>
              {/* Tokens: slide in and roll up over a longer count. */}
              <motion.text
                className='bl-map-saved-figure'
                x={panelCX}
                y={rowY.tokens}
                textAnchor='middle'
                dominantBaseline='central'
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.8 }}
              >
                <Count
                  value={saved.tokens}
                  format={(n) => formatFull('tokens', n, units)}
                  duration={1.8}
                  delay={0.8}
                  reduce={reduce}
                />
              </motion.text>
              {/* Carbon: wiped in from the left, already whole. */}
              <g clipPath={reduce ? undefined : `url(#${uid}-wipe)`}>
                <text
                  className='bl-map-saved-figure'
                  x={panelCX}
                  y={rowY.co2}
                  textAnchor='middle'
                  dominantBaseline='central'
                >
                  {formatFull('co2', saved.co2, units)}
                </text>
              </g>
            </motion.g>
          )}
        </AnimatePresence>

        {/* The task. */}
        <motion.g
          className='bl-map-task'
          data-tone={scene.tone}
          style={{ x: taskX, y: taskY, opacity: taskOpacity }}
        >
          <rect
            className='bl-map-task-shadow'
            x={-BLOCK / 2 + 3}
            y={-BLOCK / 2 + 3}
            width={BLOCK}
            height={BLOCK}
          />
          <rect
            className='bl-map-task-face'
            x={-BLOCK / 2}
            y={-BLOCK / 2}
            width={BLOCK}
            height={BLOCK}
          />
        </motion.g>
      </svg>

    </div>
  );
}

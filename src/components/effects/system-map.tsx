'use client';

import { cn } from '@/lib/utils';

interface SystemMapProps {
  className?: string;
  delay?: number;
}

type Tone = 'mint' | 'paper' | 'warm' | 'ink';

function faces(
  x: number,
  y: number,
  width: number,
  height: number,
  depth: number,
) {
  return {
    top: `${x},${y - height} ${x + width},${y} ${x},${y + height} ${x - width},${y}`,
    left: `${x - width},${y} ${x},${y + height} ${x},${y + height + depth} ${x - width},${y + depth}`,
    right: `${x},${y + height} ${x + width},${y} ${x + width},${y + depth} ${x},${y + height + depth}`,
  };
}

/** A compact, vertical isometric story with stable tiles and moving boxes. */
export function SystemMap({ className }: SystemMapProps) {
  return (
    <div
      role='img'
      aria-label='Bullah Labs Conscious AI saves tokens, energy and cost while producing clean output.'
      className={cn('bl-map bl-map-vertical', className)}
    >
      <svg
        aria-hidden='true'
        viewBox='-250 0 500 385'
        className='block h-auto w-full'
      >
        <polygon
          className='bl-map-plate-side'
          points='0,20 210,125 0,355 -210,250 -210,260 0,365 210,135'
        />
        <polygon
          className='bl-map-plate-top'
          points='0,20 210,125 0,355 -210,250'
        />

        <g className='bl-map-flow-lines'>
          <path d='M -100 85 L 0 165 L -120 245' />
          <path d='M 100 85 L 0 165 L 120 245' />
          <path d='M 0 165 L 0 280 L 0 335' />
          <path d='M -120 245 L 0 335' />
          <path d='M 120 245 L 0 335' />
        </g>

        <Tile x={-100} y={85} lines={['PRACTICAL', 'AI']} tone='mint' />
        <Tile x={100} y={85} lines={['MEASURED', 'IMPACT']} tone='mint' />
        <Tile x={0} y={165} lines={['', '']} tone='ink' core />
        <Tile
          x={-120}
          y={245}
          lines={['TOKENS', 'SAVED']}
          tone='mint'
          compact
        />
        <Tile x={120} y={245} lines={['COST', 'SAVED']} tone='paper' compact />
        <Tile x={0} y={280} lines={['ENERGY', 'SAVED']} tone='paper' compact />
        <Tile x={0} y={335} lines={['CLEAN', 'OUTPUT']} tone='warm' />

        <MovingCube
          path='M -100 85 L 0 165 L -120 245'
          begin='0s'
          tone='brand'
        />
        <MovingCube
          path='M 100 85 L 0 165 L 120 245'
          begin='1.5s'
          tone='brand'
        />
        <MovingCube path='M 0 165 L 0 280 L 0 335' begin='3s' tone='warm' />
      </svg>
      <p
        aria-hidden='true'
        className='mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text sm:text-xs'
      >
        Bullah Labs · Conscious AI that delivers more with less
      </p>
    </div>
  );
}

function Tile({
  x,
  y,
  lines,
  tone,
  core = false,
  compact = false,
}: {
  x: number;
  y: number;
  lines: readonly [string, string];
  tone: Tone;
  core?: boolean;
  compact?: boolean;
}) {
  const width = core ? 72 : compact ? 58 : 76;
  const height = core ? 30 : compact ? 18 : 21;
  const shape = faces(x, y, width, height, core ? 12 : 9);
  return (
    <g className='bl-map-tile' data-tone={tone}>
      <polygon
        className='bl-map-shadow'
        points={faces(x, y + 4, width + 4, height + 2, 0).top}
      />
      <polygon className='bl-map-left' points={shape.left} />
      <polygon className='bl-map-right' points={shape.right} />
      <polygon className='bl-map-top' points={shape.top} />
      {core ? (
        <BullahCore x={x} y={y - 2} />
      ) : (
        <TileLabel x={x} y={y - 2} lines={lines} />
      )}
    </g>
  );
}

function TileLabel({
  x,
  y,
  lines,
}: {
  x: number;
  y: number;
  lines: readonly [string, string];
}) {
  return (
    <text className='bl-map-label' x={x} y={y} textAnchor='middle'>
      <tspan x={x} dy='-0.28em'>
        {lines[0]}
      </tspan>
      <tspan x={x} dy='1.18em'>
        {lines[1]}
      </tspan>
    </text>
  );
}

function BullahCore({ x, y }: { x: number; y: number }) {
  return (
    <g className='bl-map-core'>
      <circle cx={x} cy={y - 3} r='13' />
      <circle className='bl-map-core-orbit' cx={x} cy={y - 3} r='20' />
      <path
        d={`M ${x - 7} ${y - 3} L ${x} ${y - 9} L ${x + 7} ${y - 3} L ${x} ${y + 3} Z`}
      />
      <circle className='bl-map-core-dot' cx={x} cy={y - 3} r='2.5'>
        <animate
          attributeName='opacity'
          values='0.35;1;0.35'
          dur='2s'
          repeatCount='indefinite'
        />
      </circle>
      <text x={x} y={y + 17} textAnchor='middle'>
        BULLAH LABS
      </text>
    </g>
  );
}

function MovingCube({
  path,
  begin,
  tone,
}: {
  path: string;
  begin: string;
  tone: 'brand' | 'warm';
}) {
  const shape = faces(0, -7, 8, 4, 8);
  return (
    <g className='bl-map-cube' data-tone={tone}>
      <animateMotion
        path={path}
        begin={begin}
        dur='4.5s'
        repeatCount='indefinite'
        rotate='auto'
      />
      <polygon className='bl-map-left' points={shape.left} />
      <polygon className='bl-map-right' points={shape.right} />
      <polygon className='bl-map-top' points={shape.top} />
    </g>
  );
}

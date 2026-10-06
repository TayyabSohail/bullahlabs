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

/** A compact, vertical isometric story with quiet signal movement. */
export function SystemMap({ className }: SystemMapProps) {
  return (
    <div
      role='img'
      aria-label='Bullah Labs Conscious AI saves tokens, energy and cost while producing clean output.'
      className={cn('bl-map bl-map-vertical', className)}
    >
      <svg
        aria-hidden='true'
        viewBox='-220 35 440 335'
        className='block h-auto w-full'
      >
        <g className='bl-map-flow-lines'>
          <path d='M 0 116 L 0 137' />
          <path d='M -42 206 L -74 220' />
          <path d='M 42 206 L 74 220' />
          <path d='M 0 207 L 0 250' />
          <path d='M -120 245 L 0 335' />
          <path d='M 120 245 L 0 335' />
        </g>

        <Tile x={0} y={88} lines={['WASTEFUL', 'AI USE']} tone='mint' />
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
        <Tile x={0} y={335} lines={['VERIFIED', 'OUTPUT']} tone='warm' />
      </svg>
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
    </g>
  );
}

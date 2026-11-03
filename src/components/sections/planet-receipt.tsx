import { Reveal } from '@/components/motion/reveal';

export interface ReceiptLane {
  label: string;
  route: string;
  rows: readonly (readonly [key: string, value: string])[];
}

export interface ReceiptCopy {
  header: string;
  task: string;
  payer: string;
  usual: ReceiptLane;
  conscious: ReceiptLane;
  savedLabel: string;
  saved: string;
  /** The stamp: the lead word, then the word lit in green. */
  stamp: readonly [lead: string, accent: string];
}

/**
 * The planet's tab, printed. One piece of work, contract summaries for one
 * team over a year, the usual way against ours. The figures are rounded
 * orders of magnitude, not measurements: twenty people, twenty contracts a
 * month each, sixty thousand tokens a summary the usual way against two
 * thousand done consciously, a large model at about fifteen dollars and a
 * fifth of a kilogram of CO₂ per million tokens against a lean one at about
 * a tenth of that.
 */
export const planetReceipt: ReceiptCopy = {
  header: "Receipt · the planet's tab",
  task: 'Contract summaries · one team · one year',
  payer: 'Paid by: the planet · Settled by: you',
  usual: {
    label: 'The usual way',
    route: 'Large model · full context',
    rows: [
      ['tokens', '288,000,000'],
      ['money', '$ 4,320'],
      ['carbon', '58 kg CO₂'],
    ],
  },
  conscious: {
    label: 'Conscious AI',
    route: 'Need AI? · Lean model · You check',
    rows: [
      ['tokens', '9,600,000'],
      ['money', '$ 96'],
      ['carbon', '1.9 kg CO₂'],
    ],
  },
  savedLabel: 'Saved',
  saved: '98%',
  stamp: ['Better', 'AI'],
};

function ReceiptBlock({
  lane,
  tone,
  delay,
}: {
  lane: ReceiptLane;
  tone: 'usual' | 'conscious';
  delay: number;
}) {
  const conscious = tone === 'conscious';
  return (
    <Reveal
      delay={delay}
      className='border-t border-dashed border-ink/40 pt-2.5 sm:pt-3'
    >
      <div className='flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3'>
        <span
          className={`shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${conscious ? 'text-brand-text' : 'text-muted-foreground'}`}
        >
          {lane.label}
        </span>
        <span className='min-w-0 font-mono text-[10px] text-muted-foreground sm:truncate'>
          {lane.route}
        </span>
      </div>
      <dl className='mt-1.5 space-y-0.5 sm:mt-2 sm:space-y-1'>
        {lane.rows.map(([key, value]) => (
          <div
            key={key}
            className='flex items-baseline gap-2 font-mono text-[11px] sm:text-[13px]'
          >
            <dt className='text-muted-foreground'>{key}</dt>
            <span
              aria-hidden='true'
              className='flex-1 border-b border-dotted border-ink/35'
            />
            <dd
              className={`tabular-nums ${conscious ? 'font-semibold text-brand-text' : 'text-foreground line-through decoration-ink/40'}`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/**
 * A till receipt for one year of AI, the usual way and ours. Shared by the
 * home hero and the Conscious AI hero; the home page passes its own copy so
 * the German site prints a German receipt.
 */
export function PlanetReceipt({
  copy = planetReceipt,
  className = '',
}: {
  copy?: ReceiptCopy;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[17.5rem] sm:max-w-sm ${className}`}
    >
      <div className='bl-card bl-receipt rotate-[-1.5deg] bg-surface'>
        <div className='flex items-center justify-between gap-3 border-b border-ink px-3 py-2 sm:px-4 sm:py-2.5'>
          <span className='flex items-center gap-1.5' aria-hidden='true'>
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
          </span>
          <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
            {copy.header}
          </span>
        </div>
        <div className='space-y-3 px-4 pb-5 pt-4 sm:space-y-4 sm:px-5 sm:pb-6 sm:pt-5'>
          <Reveal>
            <p className='bl-display text-base text-foreground sm:text-xl md:text-lg lg:text-xl'>
              {copy.task}
            </p>
            <p className='mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] sm:tracking-[0.16em]'>
              {copy.payer}
            </p>
          </Reveal>
          <ReceiptBlock lane={copy.usual} tone='usual' delay={0.15} />
          <ReceiptBlock lane={copy.conscious} tone='conscious' delay={0.3} />
          <Reveal
            delay={0.45}
            className='flex items-center justify-between gap-3 border-t-2 border-ink pt-3'
          >
            <span className='font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground'>
              {copy.savedLabel}
            </span>
            <span className='bl-display text-2xl text-brand-text sm:text-3xl'>
              {copy.saved}
            </span>
          </Reveal>
        </div>
        <div aria-hidden='true' className='bl-receipt-edge' />
      </div>
      {/* The stamp wears the SPOILER plate: a skewed ink bar with a diagonal
          stripe texture, white bold type, the key word lit in green, on a
          hard green shadow. The rotation lives on the wrapper so the
          stamp-in animation does not overwrite the skew. */}
      <span
        aria-hidden='true'
        className='bl-stamp-in absolute -right-3 -top-5 rotate-[12deg] sm:-right-6'
      >
        <span className='inline-block -skew-x-6 bg-ink bg-[repeating-linear-gradient(45deg,transparent_0_6px,hsl(0_0%_100%/0.07)_6px_8px)] px-3 py-1.5 shadow-[3px_3px_0_0_hsl(var(--brand))]'>
          <span className='inline-block skew-x-6 font-display text-lg font-bold leading-none text-white sm:text-xl'>
            {copy.stamp[0]}{' '}
            <span className='bl-accent text-brand-2'>{copy.stamp[1]}</span>
          </span>
        </span>
      </span>
    </div>
  );
}

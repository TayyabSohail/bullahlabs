'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { useLocalTime } from '@/hooks/use-local-time';

import { Flag } from '@/components/brand/flags';
import { StaggerItem } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import type { SiteLocation } from '@/config/site';

const ease = [0.16, 1, 0.3, 1] as const;
const inView = { once: true, margin: '0px 0px -10% 0px' } as const;

/**
 * Line-drawn marks, one per value, each stroke drawn in on entry:
 * a heart, two circles that overlap, a planted flag, a pair of scales.
 */
const MARKS: Record<string, string[]> = {
  Love: [
    'M12 20.5S4.5 15.9 4.5 10.5A4 4 0 0 1 12 8a4 4 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10z',
  ],
  Acceptance: [
    'M9 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z',
    'M15 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z',
  ],
  Courage: ['M6 21V3', 'M6 4h12l-2.5 4 2.5 4H6'],
  Responsibility: [
    'M12 4v17',
    'M7 21h10',
    'M12 7 5 9.5M12 7l7 2.5',
    'M5 9.5 2 16a3 3 0 0 0 6 0z',
    'M19 9.5 16 16a3 3 0 0 0 6 0z',
  ],
};

interface ValueCardProps {
  title: string;
  body: string;
}

/**
 * One value: a ruled box on a hard shadow that lifts under the pointer.
 * The mark draws itself stroke by stroke as the card enters, and turns
 * emerald on hover with a hairline that grows along the foot.
 */
export function ValueCard({ title, body }: ValueCardProps) {
  const reduce = useReducedMotion();
  const strokes = MARKS[title] ?? [];
  const tones = [
    'bg-rose-500/10 text-rose-700 dark:text-rose-300',
    'bg-amber-400/15 text-amber-800 dark:text-amber-200',
    'bg-sky-500/10 text-sky-700 dark:text-sky-300',
    'bg-brand/10 text-brand-text',
  ];
  const tone = tones[
    ['Love', 'Acceptance', 'Courage', 'Responsibility'].indexOf(title)
  ] ?? tones[0];

  return (
    <StaggerItem className='bl-card bl-card-lift group relative isolate flex min-h-[17rem] flex-col overflow-hidden p-6 sm:p-7'>
      <div className='flex items-start justify-between gap-4'>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110 ${tone}`}
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
            className='h-7 w-7'
          >
            {strokes.map((d, strokeIndex) => (
              <motion.path
                key={d}
                d={d}
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={inView}
                transition={{
                  duration: 1,
                  ease,
                  delay: 0.3 + strokeIndex * 0.16,
                }}
              />
            ))}
          </svg>
        </span>
      </div>
      <h3 className='bl-display mt-5 text-2xl text-foreground sm:text-3xl'>
        {title}
      </h3>
      <p className='mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
        {body}
      </p>
      <span
        aria-hidden='true'
        className='mt-6 block h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100'
      />
    </StaggerItem>
  );
}

/**
 * The verse as a printed card: the Punjabi line wipes in right to left,
 * the transliteration rises word by word, then the translation fades in
 * underneath.
 */
export function VerseCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease }}
      className='bl-card flex flex-col p-6 sm:p-8'
    >
      <p className='flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
        <span>Kafi · Bulleh Shah</span>
        <span>Kasur, Punjab</span>
      </p>
      {/* The verse sits in the middle of whatever height the row gives the card. */}
      <div className='my-auto py-8'>
        <motion.p
          lang='pa-Arab'
          dir='rtl'
          initial={reduce ? false : { clipPath: 'inset(0 0 0 100%)' }}
          whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
          viewport={inView}
          transition={{ duration: 1.4, ease, delay: 0.35 }}
          className='text-right text-4xl leading-[1.7] text-foreground sm:text-5xl'
        >
          بلھیا کی جاناں میں کون
        </motion.p>
        <TextReveal
          as='p'
          text='Bulleya ki jaana main kaun.'
          delay={0.9}
          className='bl-display mt-6 text-2xl text-foreground sm:text-3xl'
        />
      </div>
      {false && <motion.span
        initial={reduce ? false : { opacity: 0, scale: 1.6, rotate: -16 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={inView}
        transition={{
          duration: 0.45,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 1.6,
        }}
        className='bl-stamp mb-6 self-end'
      >
        c. 1680 – 1757
      </motion.span>}
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.8, ease, delay: 1.3 }}
        className='border-t border-line pt-5 text-sm leading-relaxed text-muted-foreground sm:text-base'
      >
        <span className='text-foreground'>
          “Bulleh, what do I know of who I am?”
        </span>{' '}
        A refusal to be boxed in by religion, caste, or anyone else’s
        expectations.
      </motion.p>
    </motion.div>
  );
}

interface OfficeCardProps {
  location: SiteLocation;
}

/**
 * One office: flag and label, a live local clock beside the city, and a
 * status dot that rings while that office is inside working hours.
 */
export function OfficeCard({ location }: OfficeCardProps) {
  const local = useLocalTime(location.timezone);
  const open = local?.open ?? false;

  return (
    <StaggerItem className='bl-card bl-card-lift group flex flex-col p-5 sm:p-6'>
      <div className='flex items-center justify-between gap-3'>
        <p className='flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
          <Flag countryCode={location.countryCode} className='h-3 w-[18px]' />
          {location.label}
        </p>
        <p className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
          <span className='bl-status-dot' data-open={open} aria-hidden='true' />
          {local ? (open ? 'Office hours' : 'After hours') : ' '}
        </p>
      </div>
      <div className='mt-4 flex items-baseline justify-between gap-4'>
        <p className='bl-display text-2xl text-foreground sm:text-3xl'>
          {location.city}
        </p>
        <p
          className='font-mono text-lg tabular-nums text-foreground sm:text-xl'
          aria-label={
            local ? `Local time in ${location.city}: ${local.time}` : undefined
          }
        >
          {local?.time ?? '--:--'}
        </p>
      </div>
      <p className='mt-2 flex items-center justify-between gap-3 text-sm text-muted-foreground'>
        <span>{location.country}</span>
        <span className='font-mono text-[11px] uppercase tracking-[0.14em]'>
          {location.utc}
        </span>
      </p>
    </StaggerItem>
  );
}

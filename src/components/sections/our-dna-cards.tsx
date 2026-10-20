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
 * The verse is presented as a focused quote card: original Punjabi, its
 * transliteration, and a concise reading underneath.
 */
export function VerseCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease }}
      className='bl-card relative flex min-h-[18rem] flex-col p-6 sm:min-h-[24rem] sm:p-8'
    >
      <p className='flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
        <span>Bulleh Shah</span>
        <span>Kasur, Punjab</span>
      </p>
      <div className='relative my-auto py-5 sm:py-10'>
        <span
          aria-hidden='true'
          className='absolute -left-1 -top-2 font-serif text-8xl leading-none text-brand/20 sm:text-9xl'
        >
          “
        </span>
        <motion.p
          lang='pa-Arab'
          dir='rtl'
          initial={reduce ? false : { clipPath: 'inset(0 0 0 100%)' }}
          whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
          viewport={inView}
          transition={{ duration: 1.4, ease, delay: 0.35 }}
          className='urdu-khatati relative text-right text-4xl leading-[1.9] text-foreground sm:text-5xl'
        >
          بلھیا کی جاناں میں کون
        </motion.p>
        <TextReveal
          as='p'
          text='Bulleya ki jaana main kaun.'
          delay={0.9}
          className='bl-display relative mt-6 text-2xl text-foreground sm:text-3xl'
        />
      </div>
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

'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { useLocalTime } from '@/hooks/use-local-time';

import { Flag } from '@/components/brand/flags';
import { StaggerItem } from '@/components/motion/reveal';

import type { SiteLocation } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

const ease = [0.16, 1, 0.3, 1] as const;
const inView = { once: true, margin: '0px 0px -10% 0px' } as const;

/**
 * The verse is presented as a focused quote card: the original Punjabi in
 * Urdu (Shahmukhi) and Gurmukhi script, one above the other, with the
 * reading underneath in the visitor's language.
 */
export function VerseCard({ copy }: { copy: Dictionary['ourDna']['verse'] }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease }}
      className='bl-card relative flex flex-col p-5 sm:min-h-[24rem] sm:p-8'
    >
      <p className='bl-label flex items-center justify-between gap-4'>
        <span>{copy.name}</span>
        <span>{copy.place}</span>
      </p>
      <div className='relative my-auto py-4 sm:py-10'>
        <motion.p
          lang='pa-Arab'
          dir='rtl'
          initial={reduce ? false : { clipPath: 'inset(-60% 0 -60% 100%)' }}
          whileInView={{ clipPath: 'inset(-60% 0 -60% 0%)' }}
          viewport={inView}
          transition={{ duration: 1.4, ease, delay: 0.35 }}
          className='urdu-khatati relative text-right text-4xl leading-[2.6] text-foreground sm:text-5xl sm:leading-[2.6]'
        >
          بلھیا کی جاناں میں کون
        </motion.p>
        <motion.p
          lang='pa-Guru'
          initial={reduce ? false : { clipPath: 'inset(-30% 100% -30% 0)' }}
          whileInView={{ clipPath: 'inset(-30% 0% -30% 0)' }}
          viewport={inView}
          transition={{ duration: 1.4, ease, delay: 0.7 }}
          className='gurmukhi-lipi relative mt-6 text-3xl leading-[1.5] text-foreground sm:text-4xl sm:leading-[1.5]'
        >
          ਬੁੱਲ੍ਹਿਆ ਕੀ ਜਾਣਾਂ ਮੈਂ ਕੌਣ
        </motion.p>
      </div>
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.8, ease, delay: 1.3 }}
        className='border-t border-line pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base'
      >
        <span className='bl-display block text-xl text-foreground sm:text-2xl'>
          {copy.translation}
        </span>
        <span className='mt-2 block'>{copy.note}</span>
      </motion.p>
    </motion.div>
  );
}

interface OfficeCardProps {
  location: SiteLocation;
  labels: Dictionary['ourDna']['office'];
}

/**
 * One office: flag and label, a live local clock beside the city, and a
 * status dot that rings while that office is inside working hours.
 */
export function OfficeCard({ location, labels }: OfficeCardProps) {
  const local = useLocalTime(location.timezone);
  const open = local?.open ?? false;

  return (
    <StaggerItem className='bl-card bl-card-lift group flex flex-col p-5 sm:p-6'>
      <div className='flex items-center justify-between gap-3'>
        <p className='bl-label flex items-center gap-2'>
          <Flag countryCode={location.countryCode} className='h-3 w-[18px]' />
          {location.label}
        </p>
        <p className='bl-label inline-flex items-center gap-2'>
          <span className='bl-status-dot' data-open={open} aria-hidden='true' />
          {local ? (open ? labels.open : labels.closed) : ' '}
        </p>
      </div>
      <div className='mt-4 flex items-baseline justify-between gap-4'>
        <p className='bl-display text-2xl text-foreground sm:text-3xl'>
          {location.city}
        </p>
        <p
          className='font-mono text-lg tabular-nums text-foreground sm:text-xl'
          aria-label={
            local
              ? labels.localTime
                  .replace('{city}', location.city)
                  .replace('{time}', local.time)
              : undefined
          }
        >
          {local?.time ?? '--:--'}
        </p>
      </div>
      <p className='mt-2 flex items-center justify-between gap-3 text-sm text-muted-foreground'>
        <span>{location.country}</span>
        <span className='bl-label'>{location.utc}</span>
      </p>
    </StaggerItem>
  );
}

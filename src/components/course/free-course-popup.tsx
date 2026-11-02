'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronUp, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { CourseSignup } from '@/components/course/course-signup';

import { COOKIE_CONSENT_EVENT, readCookieConsent } from '@/lib/cookie-consent';
import {
  hasSeenCoursePopup,
  markCoursePopupSeen,
} from '@/lib/course-popup-storage';
import { hasJoinedCourseWaitlist } from '@/lib/course-waitlist-cookie';
import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { leadInstructor as instructor } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The card never greets a visitor on arrival. It opens once, after they have
 * shown some interest: they read down this far into the page, or they head
 * for the browser chrome to leave, or they stayed this long. Whichever comes
 * first, and only after the cookie choice.
 */
const OPEN_AT_SCROLL_DEPTH = 0.4;
const OPEN_AFTER_MS = 30_000;

/** Pages where the course already has its own section, or a form needs focus. */
const QUIET_PATHS = [paths.program, paths.contact];

type Stage = 'pending' | 'pill' | 'open';

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * The free Conscious AI course, introduced by its instructor. It rests as an
 * ivory ruled pill above the community dock, the same width as the dock at
 * every screen size. Only two things move, both inside its edge: a highlight
 * sweeps across every few seconds and the arrow nudges. Nothing glows or
 * spills past the border. It unfolds, in place, into a corner panel:
 * no overlay, no scroll lock, the page stays usable. The pill opens it, the
 * cross folds it back. On a first visit it also opens by itself, once, after
 * the visitor has scrolled, stayed a while or moved to leave.
 */
export function FreeCoursePopup({ dict }: { dict: Dictionary }) {
  const t = dict.program.popup;
  const pathname = usePathname();
  const [stage, setStage] = useState<Stage>('pending');
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  // Focus moves into the panel only when the visitor opened it themselves.
  const openedByHand = useRef(false);

  useEffect(() => {
    setStage('pill');
    if (hasSeenCoursePopup() || hasJoinedCourseWaitlist()) return;
    if (QUIET_PATHS.some((path) => pathname?.startsWith(path))) return;

    let timer: number | undefined;
    const stop = () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener(COOKIE_CONSENT_EVENT, arm);
    };
    const open = () => {
      stop();
      markCoursePopupSeen();
      openedByHand.current = false;
      setStage('open');
    };
    function onScroll() {
      const { scrollY, innerHeight } = window;
      const depth =
        (scrollY + innerHeight) / document.documentElement.scrollHeight;
      if (depth >= OPEN_AT_SCROLL_DEPTH) open();
    }
    function onLeave(event: MouseEvent) {
      // The pointer heading for the tabs or the address bar.
      if (event.clientY <= 0) open();
    }
    function arm() {
      timer = window.setTimeout(open, OPEN_AFTER_MS);
      window.addEventListener('scroll', onScroll, { passive: true });
      document.documentElement.addEventListener('mouseleave', onLeave);
    }

    // One thing at a time: the cookie banner goes first.
    if (readCookieConsent() !== null) arm();
    else window.addEventListener(COOKIE_CONSENT_EVENT, arm, { once: true });

    return stop;
  }, [pathname]);

  const open = stage === 'open';
  const facts = dict.programPage.course.preview.points;

  // Escape folds the panel; a hand-opened panel also takes focus.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setStage('pill');
    };
    window.addEventListener('keydown', onKey);
    if (openedByHand.current) panelRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const openByHand = () => {
    openedByHand.current = true;
    markCoursePopupSeen();
    setStage('open');
  };

  return (
    <AnimatePresence mode='popLayout' initial={false}>
      {stage === 'pill' && (
        <motion.button
          type='button'
          key='pill'
          layoutId={reduce ? undefined : 'free-course-card'}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.28, ease }}
          onClick={openByHand}
          aria-label={t.open}
          aria-haspopup='dialog'
          aria-expanded={false}
          data-cta='course-popup-pill'
          className='group relative flex h-14 w-full items-center gap-3 overflow-hidden rounded-full border border-ink bg-surface pl-1.5 pr-1.5 text-ink shadow-[3px_3px_0_hsl(var(--ink))] transition-[transform,box-shadow] duration-200 hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_hsl(var(--ink))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
        >
          {/* A highlight sweeps across every few seconds, clipped to the pill. */}
          <span
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 overflow-hidden rounded-full'
          >
            <span className='absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/70 to-transparent motion-reduce:hidden' />
          </span>

          <span className='relative flex h-11 w-11 shrink-0'>
            <Image
              src={instructor.image}
              alt=''
              width={88}
              height={88}
              className={cn(
                'relative h-11 w-11 rounded-full border border-ink object-cover',
                instructor.focus,
              )}
            />
          </span>
          <span className='relative flex min-w-0 flex-1 flex-col items-start text-left leading-none'>
            <span className='max-w-full truncate font-mono text-[12px] font-bold uppercase tracking-[0.14em]'>
              {t.pill}
            </span>
            <span className='mt-1.5 flex max-w-full items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              <span className='inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand' />
              <span className='truncate'>{t.pillHint}</span>
            </span>
          </span>
          <span className='relative flex h-10 w-10 shrink-0 animate-nudge items-center justify-center rounded-full border border-ink bg-ink text-white motion-reduce:animate-none'>
            <ChevronUp
              className='h-[18px] w-[18px]'
              strokeWidth={2.75}
              aria-hidden
            />
          </span>
        </motion.button>
      )}

      {open && (
        <motion.div
          key='panel'
          ref={panelRef}
          role='dialog'
          aria-modal='false'
          aria-labelledby={titleId}
          tabIndex={-1}
          layoutId={reduce ? undefined : 'free-course-card'}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.32, ease }}
          className='absolute bottom-0 right-0 z-10 flex max-h-[calc(100dvh-5rem)] w-[calc(100vw-1.5rem)] max-w-[26rem] flex-col overflow-y-auto border border-ink bg-surface shadow-[4px_4px_0_0_hsl(var(--ink))] focus:outline-none'
        >
          {/* The instructor: a full-bleed portrait with the name set into it. */}
          <aside className='relative isolate h-56 shrink-0 overflow-hidden bg-ink text-white sm:h-64'>
            <Image
              src={instructor.image}
              alt={`Portrait of ${instructor.name}`}
              fill
              sizes='416px'
              className='object-cover object-[center_22%]'
            />
            <span
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent'
            />
            <span className='absolute left-3 top-3 border border-ink bg-surface px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink shadow-[2px_2px_0_0_hsl(var(--ink))]'>
              {t.tag}
            </span>
            <div className='absolute inset-x-0 bottom-0 p-4'>
              <p className='font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60'>
                {t.taughtBy}
              </p>
              <p className='bl-display mt-1 text-[1.35rem] leading-none text-white'>
                {instructor.name}
              </p>
              <p className='mt-2 flex items-center gap-1.5 text-[11px] leading-tight text-white/75'>
                <HarvardShield className='h-4 w-auto shrink-0' />
                <span>{instructor.school}</span>
              </p>
            </div>
            {/* The cross folds the panel back into its pill. */}
            <button
              type='button'
              onClick={() => setStage('pill')}
              title={t.minimise}
              aria-label={t.minimise}
              className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-white/40 bg-ink/60 text-white backdrop-blur-sm transition-colors hover:bg-ink/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
            >
              <X className='h-4 w-4' />
            </button>
          </aside>

          {/* The course, the facts and the sign-up. */}
          <div className='flex flex-col p-4 sm:p-5'>
            <p className='bl-kicker text-[10px] sm:text-[10px]'>{t.kicker}</p>
            <h2
              id={titleId}
              className='bl-display mt-2.5 text-[1.6rem] leading-[1.05] text-ink'
            >
              {t.title}
            </h2>
            <p className='mt-2 text-[13px] leading-relaxed text-muted-foreground'>
              {t.body}
            </p>
            <ul className='mt-3 flex flex-wrap gap-1.5'>
              {facts.map((fact) => (
                <li
                  key={fact}
                  className='border border-ink/25 px-2 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink'
                >
                  {fact}
                </li>
              ))}
            </ul>
            <CourseSignup
              dict={dict}
              source='popup:free-course'
              variant='inline'
              tone='light'
              submitLabel={t.cta}
              consent={false}
              className='mt-4 [&_form>div]:!flex-col [&_form_button]:w-full'
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { SectionHeading } from '@/components/common/section-heading';
import { Reveal } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import type { Dictionary } from '@/i18n/dictionaries/en';

type NumbersCopy = Dictionary['consciousAiPage']['numbers'];
type SourceKey = keyof NumbersCopy['sources'];

/**
 * Where each figure comes from. The cards and the source names live in the
 * dictionary (`consciousAiPage.numbers`), keyed to these links.
 */
const SOURCE_LINKS: Record<SourceKey, string> = {
  ey2025:
    'https://www.ey.com/en_gl/newsroom/2025/11/ey-survey-reveals-companies-are-missing-out-on-up-to-40-percent-of-ai-productivity-gains-due-to-gaps-in-talent-strategy',
  slack2024: 'https://slack.com/blog/news/the-workforce-index-june-2024',
  workday2026:
    'https://newsroom.workday.com/2026-01-14-New-Workday-Research-Companies-Are-Leaving-AI-Gains-on-the-Table',
  betterup2025: 'https://www.betterup.com/blog/hidden-costs-workslop',
  anthropic2026:
    'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',
  routellm2024: 'https://sky.cs.berkeley.edu/project/routellm/',
  bcg2024:
    'https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value',
  iea2025: 'https://www.iea.org/reports/energy-and-ai/executive-summary',
  ucr2025: 'https://arxiv.org/abs/2304.03271',
  unesco2025:
    'https://www.ucl.ac.uk/news/2025/jul/practical-changes-could-reduce-ai-energy-demand-90',
};

/** How long each card stays up before the next one slides in. */
const DWELL_MS = 6000;
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * The numbers: one figure at a time in a ruled card that advances on its
 * own, a story-style progress strip across the top, arrows to step through
 * by hand. Pauses while hovered, focused or off-screen, and never
 * auto-advances for readers who prefer reduced motion.
 */
export function ConsciousAiNumbers({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  const t = dict.consciousAiPage.numbers;
  const cards = t.cards;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [held, setHeld] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Bumped whenever the timer restarts, so the meter restarts too.
  const [cycle, setCycle] = useState(0);
  const reduce = Boolean(useReducedMotion());
  const count = cards.length;
  const card = cards[index];
  const paused = held || hidden || reduce;

  const go = useCallback(
    (next: number, dir?: number) => {
      const target = (next + count) % count;
      setDirection(dir ?? (target > index ? 1 : -1));
      setIndex(target);
      setCycle((c) => c + 1);
    },
    [count, index],
  );

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => go(index + 1, 1), DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [paused, index, cycle, go]);

  // Restart the clock when the reader lets go, so meter and timer agree.
  const release = () => {
    setHeld(false);
    setCycle((c) => c + 1);
  };

  return (
    <section
      id='numbers'
      data-section='numbers'
      className={cn(
        'bl-section bl-rule bg-[hsl(var(--brand-soft))]',
        className,
      )}
    >
      <style>{`@keyframes bl-numbers-fill { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          descriptionPosition='below'
          className='max-w-6xl'
        />

        <Reveal className='mt-6 sm:mt-8'>
          <div
            className='bl-card'
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={release}
            onFocusCapture={() => setHeld(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) release();
            }}
          >
            {/* Meter: one ruled cell per card, the current one filling, and
                the counter beside it. */}
            <div className='flex items-center gap-4 border-b border-ink/85 px-4 py-3 sm:px-5'>
              <div className='flex flex-1 gap-1 sm:gap-1.5' aria-hidden='true'>
                {cards.map((item, i) => (
                  <button
                    key={item.figure + i}
                    type='button'
                    tabIndex={-1}
                    onClick={() => go(i)}
                    className='group h-5 flex-1 cursor-pointer'
                  >
                    <span className='block h-2.5 w-full border border-ink/70 bg-background transition-colors group-hover:border-ink sm:h-3'>
                      {i < index && (
                        <span className='block h-full w-full bg-ink' />
                      )}
                      {i === index && (
                        <span
                          key={cycle}
                          className='block h-full w-full origin-left bg-brand'
                          style={{
                            animation: reduce
                              ? 'none'
                              : `bl-numbers-fill ${DWELL_MS}ms linear forwards`,
                            animationPlayState: paused ? 'paused' : 'running',
                            transform: reduce ? 'scaleX(1)' : undefined,
                          }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <p className='shrink-0 font-mono text-xs tabular-nums text-foreground'>
                {String(index + 1).padStart(2, '0')}
                <span className='text-muted-foreground'>
                  {' / '}
                  {String(count).padStart(2, '0')}
                </span>
              </p>
            </div>

            {/* The card: figure on the left, what it means on the right. */}
            <div className='relative grid min-h-[14rem] overflow-hidden sm:min-h-[18rem]'>
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={index}
                  aria-live='polite'
                  initial={reduce ? false : { opacity: 0, x: 32 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? {} : { opacity: 0, x: -32 * direction }}
                  transition={{ duration: 0.4, ease }}
                  className='grid divide-y divide-ink/20 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:divide-x md:divide-y-0'
                >
                  <div className='flex flex-col gap-4 p-5 sm:gap-6 sm:p-8'>
                    <p className='self-start bg-ink px-2.5 py-1 font-mono text-[11px] text-white'>
                      {card.topic}
                    </p>
                    <p className='bl-display my-auto text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] text-foreground'>
                      {card.figure}
                    </p>
                  </div>
                  <div className='flex flex-col justify-center gap-4 p-5 sm:p-8'>
                    <p className='font-display text-xl leading-tight text-foreground sm:text-3xl lg:text-[2.25rem]'>
                      {card.body}
                    </p>
                    {card.source ? (
                      <a
                        href={SOURCE_LINKS[card.source as SourceKey]}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 self-start font-mono text-xs text-muted-foreground underline decoration-ink/40 underline-offset-4 transition-colors hover:text-brand-text hover:decoration-brand'
                      >
                        {t.source.replace(
                          '{name}',
                          t.sources[card.source as SourceKey],
                        )}
                        <ArrowUpRight
                          className='h-3.5 w-3.5'
                          aria-hidden='true'
                        />
                      </a>
                    ) : (
                      <p className='font-mono text-xs text-muted-foreground'>
                        {t.ownExample}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer: note and arrows */}
            <div className='flex items-center justify-between gap-4 border-t border-ink/85 px-4 py-3 sm:px-5'>
              <p className='text-xs text-muted-foreground sm:text-sm'>
                {t.note}
              </p>
              <div className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => go(index - 1, -1)}
                  aria-label={t.previous}
                  className='bl-btn bl-btn-secondary inline-flex h-10 w-10 items-center justify-center'
                >
                  <ArrowLeft className='h-4 w-4' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  onClick={() => go(index + 1, 1)}
                  aria-label={t.next}
                  className='bl-btn bl-btn-primary inline-flex h-10 w-10 items-center justify-center'
                >
                  <ArrowRight className='h-4 w-4' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

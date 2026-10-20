'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { LaptopFrame } from '@/components/mockups/laptop-frame';
import { ProjectScreen } from '@/components/mockups/project-screen';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getProjectBySlugLocalised } from '@/data/projects';
import { getTestimonials } from '@/data/testimonials';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface TestimonialsProps {
  dict: Dictionary;
  className?: string;
  /** Use when the surrounding page already establishes the section context. */
  heading?: boolean;
  title?: string;
}

const AUTO_MS = 7000;
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Light band. One quote at a time on the left, the product it is about on a
 * laptop on the right. Auto-advances, pauses on hover, draggable on touch.
 */
export function Testimonials({
  dict,
  className,
  heading = true,
  title,
}: TestimonialsProps) {
  const t = dict.testimonials;
  const testimonials = getTestimonials(dict.locale);
  // Sizer uses both locales so the nav row stays put when the language changes.
  const sizerQuotes = [...getTestimonials('en'), ...getTestimonials('de')];
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((current) => (current + delta + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || reduce || total < 2) return;
    const timer = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce, go, total]);

  if (total === 0) return null;

  const item = testimonials[index];
  const project = item.project
    ? getProjectBySlugLocalised(item.project, dict.locale)
    : null;
  const sectionId = `testimonial-${index + 1}`;

  return (
    <section
      id={sectionId}
      role='tabpanel'
      aria-labelledby={`${sectionId}-title`}
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        {heading ? (
          <div>
            <Reveal>
              <p className='bl-kicker'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={title ?? t.title}
              id={`${sectionId}-title`}
              className='bl-display mt-5 text-display-lg text-ink'
            />
          </div>
        ) : (
          <h2 id={`${sectionId}-title`} className='sr-only'>
            {t.kicker}
          </h2>
        )}

        <Reveal
          className={cn(
            'bl-card grid overflow-hidden lg:grid-cols-[1fr_0.75fr]',
            heading ? 'mt-8 sm:mt-14' : 'mt-0',
          )}
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className='contents'
          >
            {/* Quote */}
            <div className='relative z-[2] flex flex-col bg-surface p-5 text-ink sm:p-10 lg:p-12'>
              <span className='relative flex h-11 w-11 items-center justify-center border border-ink/20'>
                <Quote className='h-5 w-5 text-brand-text' />
              </span>
              {/* Sized to the tallest quote so the nav row below never moves */}
              <div className='relative mt-6 grid'>
                {sizerQuotes.map((q, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className={cn(
                      'invisible col-start-1 row-start-1',
                      i !== index && 'hidden sm:block',
                    )}
                  >
                    <p className='bl-display text-xl leading-[1.3] sm:text-3xl'>
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <footer className='mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-8'>
                      <div>
                        <p className='font-semibold'>{q.author}</p>
                        <p className='text-sm'>{q.company}</p>
                      </div>
                    </footer>
                  </div>
                ))}
                <AnimatePresence mode='wait' custom={direction} initial={false}>
                  <motion.blockquote
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: 40 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 * direction }}
                    transition={{ duration: 0.5, ease }}
                    drag={reduce ? false : 'x'}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) go(1);
                      if (info.offset.x > 60) go(-1);
                    }}
                    className='absolute inset-0 cursor-grab active:cursor-grabbing'
                  >
                    <p className='bl-display text-xl leading-[1.3] text-ink sm:text-3xl'>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className='mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-8'>
                      <div>
                        <p className='font-semibold text-ink'>
                          {item.author}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                      </div>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className='mt-6 flex items-center justify-between border-t border-ink/15 pt-5 sm:mt-10 sm:pt-6'>
                <div
                  className='flex gap-1.5'
                  role='tablist'
                  aria-label={t.title}
                >
                  {testimonials.map((_, dot) => (
                    <button
                      key={dot}
                      type='button'
                      role='tab'
                      aria-selected={dot === index}
                      aria-controls={`testimonial-${dot + 1}`}
                      aria-label={`${dot + 1} / ${total}`}
                      onClick={() => {
                        setDirection(dot > index ? 1 : -1);
                        setIndex(dot);
                      }}
                      className={cn(
                        'h-[3px] transition-all duration-500',
                        dot === index
                          ? 'w-8 bg-brand-2'
                          : 'w-3 bg-ink/25',
                      )}
                    />
                  ))}
                </div>
                <div className='flex gap-2'>
                  <button
                    type='button'
                    onClick={() => go(-1)}
                    aria-label={t.prev}
                    className='flex h-11 w-11 items-center justify-center border border-ink/30 text-ink'
                  >
                    <ArrowLeft className='h-4 w-4' />
                  </button>
                  <button
                    type='button'
                    onClick={() => go(1)}
                    aria-label={t.next}
                    className='bl-btn bl-btn-primary flex h-11 w-11 items-center justify-center'
                  >
                    <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>

            {/* Product on a laptop */}
            <div className='relative z-[2] flex flex-col justify-center border-t border-ink/20 bg-surface-2/70 p-5 sm:min-h-[22rem] sm:p-8 lg:border-l lg:border-t-0'>
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={project?.slug ?? index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                  className='relative'
                >
                  {project && (
                    <>
                      <LaptopFrame>
                        <ProjectScreen
                          project={project}
                          variant='laptop'
                          sizes='(min-width: 1024px) 34vw, 90vw'
                        />
                      </LaptopFrame>
                      <div className='mt-6 flex items-end justify-between gap-4 text-foreground'>
                        <div>
                          <p className='font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground'>
                            {project.category} &middot; {project.year}
                          </p>
                          <p className='bl-display mt-1 text-xl'>
                            {project.title}
                          </p>
                        </div>
                        <Link
                          href={paths.caseStudy(project.slug)}
                          className='bl-action text-brand-text'
                        >
                          {t.caseStudy} <ArrowUpRight className='h-3.5 w-3.5' />
                        </Link>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

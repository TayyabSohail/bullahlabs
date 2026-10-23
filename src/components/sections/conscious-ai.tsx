import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { CoursePlayer } from '@/components/course/course-player';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { courseHref, courseIsLive } from '@/constants/course';
import { paths } from '@/constants/paths';
import { getCourses } from '@/data/lessons';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface SectionProps {
  dict: Dictionary;
  className?: string;
}

/** Opens the course when it is live, otherwise the contact form. */
export function CourseLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  if (courseIsLive) {
    return (
      <a
        href={courseHref}
        target='_blank'
        rel='noreferrer'
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={courseHref} className={className}>
      {children}
    </Link>
  );
}

/**
 * The courses as a player: the current lesson in a 16:9 frame and a
 * searchable course / module / lesson list beside it. A lesson plays here as soon as its `video`
 * is set in `src/data/lessons.ts`; until then the frame says so. The
 * sign-up lives in the hero and the closing banner, not in the frame.
 */
export function CourseSection({ dict, className }: SectionProps) {
  const t = dict.programPage.course;
  const courses = getCourses(dict.locale);

  return (
    <section
      data-section='course'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          aside={
            courseIsLive ? (
              <CourseLink className='bl-action'>
                {dict.program.watch}
                <ArrowUpRight className='h-3.5 w-3.5' />
              </CourseLink>
            ) : undefined
          }
        />

        <Reveal className='mt-8 sm:mt-14'>
          <CoursePlayer courses={courses} labels={dict.program.player} />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * The problem and the answer, side by side: the pressure to use AI on a
 * paper card, and "not more AI, better AI" on an ink one.
 */
export function ProblemApproach({ dict, className }: SectionProps) {
  const problem = dict.programPage.problem;
  const approach = dict.programPage.approach;

  return (
    <section
      data-section='problem-approach'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container grid gap-4 lg:grid-cols-2 lg:gap-5'>
        <Reveal className='bl-card bl-grid-surface flex flex-col p-6 sm:p-8 lg:p-10'>
          <p className='bl-kicker'>{problem.kicker}</p>
          <TextReveal
            as='h2'
            text={problem.title}
            accentWords={[...problem.accent]}
            className='bl-display mt-5 text-display-sm text-foreground sm:text-display-lg'
          />
          <div className='mt-7 space-y-4'>
            {problem.lines.map((line, index) => (
              <p
                key={line}
                className={cn(
                  'leading-relaxed',
                  index === problem.lines.length - 1
                    ? 'border-l-2 border-brand pl-5 text-lg font-medium text-foreground'
                    : 'text-base text-muted-foreground sm:text-lg',
                )}
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className='bl-card bl-card-ink bl-grid-surface relative flex flex-col p-6 text-white sm:p-8 lg:p-10'
        >
          <p className='bl-kicker relative text-white/60'>{approach.kicker}</p>
          <TextReveal
            as='h2'
            text={approach.title}
            accentWords={[...approach.accent]}
            className='bl-display relative mt-5 text-display-sm text-white sm:text-display-lg [&_.bl-accent]:text-brand-2'
          />
          <div className='relative mt-7 space-y-4'>
            {approach.lines.map((line, index) => (
              <p
                key={line}
                className={cn(
                  'leading-relaxed',
                  index === approach.lines.length - 1
                    ? 'border-l-2 border-brand pl-5 text-lg font-medium text-white'
                    : 'text-base text-white/70 sm:text-lg',
                )}
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The six habits the free modules teach, one task at a time. */
export function LearningHabits({ dict, className }: SectionProps) {
  const t = dict.programPage.modules;

  return (
    <section
      data-section='learning-habits'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
        />
        <Stagger
          stagger={0.08}
          className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-3'
        >
          {t.habits.map((habit) => (
            <StaggerItem
              key={habit.title}
              className='flex flex-col bg-surface p-6 sm:p-8'
            >
              <h3 className='bl-display text-2xl text-foreground'>
                {habit.title}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
                {habit.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Who the free modules are for, and the questions they start from. */
export function WhoFor({ dict, className }: SectionProps) {
  const t = dict.programPage.whoFor;

  return (
    <section
      data-section='who-for'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
        <div>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[18ch] text-display-lg text-foreground'
          />
          <Reveal delay={0.2} className='mt-7 max-w-xl space-y-4'>
            {t.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className='text-base leading-relaxed text-muted-foreground sm:text-lg'
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.25} className='bl-card p-6 sm:p-8'>
          <ul className='divide-y divide-line'>
            {t.questions.map((question) => (
              <li
                key={question}
                className='flex items-center gap-4 py-4 text-lg font-medium text-foreground first:pt-0'
              >
                <span
                  aria-hidden='true'
                  className='font-mono text-sm text-brand-text'
                >
                  ?
                </span>
                {question}
              </li>
            ))}
          </ul>
          <p className='mt-6 border-l-2 border-brand pl-5 text-lg font-medium text-foreground'>
            {t.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Conscious AI for teams: training, workflows, guidance and optimisation. */
export function ForBusiness({ dict, className }: SectionProps) {
  const t = dict.programPage.business;

  return (
    <section
      data-section='for-business'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
        />
        <Stagger
          stagger={0.08}
          className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-4'
        >
          {t.offers.map((offer) => (
            <StaggerItem
              key={offer.title}
              className='group flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-brand-soft/35 sm:p-8'
            >
              <h3 className='bl-display text-xl text-foreground lg:text-2xl'>
                {offer.title}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                {offer.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className='mt-8 border-t pt-6 sm:mt-10 sm:pt-8'>
          <Link
            href={`${paths.contact}?service=team`}
            className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** Why we do this: the Bullah Labs vision, in two short paragraphs. */
export function Vision({ dict, className }: SectionProps) {
  const t = dict.programPage.vision;

  return (
    <section
      data-section='vision'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
        <div className='lg:sticky lg:top-32 lg:self-start'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[16ch] text-display-lg text-foreground'
          />
        </div>
        <Reveal delay={0.15} className='space-y-5'>
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                'leading-relaxed',
                index === t.paragraphs.length - 1
                  ? 'border-l-2 border-brand pl-5 text-xl font-medium text-foreground sm:text-2xl'
                  : 'text-base text-muted-foreground sm:text-lg',
              )}
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

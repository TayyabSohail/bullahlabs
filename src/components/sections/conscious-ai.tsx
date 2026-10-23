import { ArrowUpRight, LockKeyhole, Play } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { CourseSignup } from '@/components/course/course-signup';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { courseHref, courseIsLive } from '@/constants/course';
import { paths } from '@/constants/paths';
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

/** A considered launch preview until the first Conscious AI course opens. */
export function CourseSection({ dict, className }: SectionProps) {
  const t = dict.programPage.course;

  return (
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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
          <div className='grid overflow-hidden border border-line bg-line lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='relative isolate flex min-h-[25rem] flex-col overflow-hidden bg-ink p-6 text-white sm:min-h-[31rem] sm:p-8 lg:p-10'>
              <div
                aria-hidden='true'
                className='absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,hsl(var(--brand)/0.26)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--brand)/0.26)_1px,transparent_1px)] [background-size:3rem_3rem]'
              />
              <div
                aria-hidden='true'
                className='absolute -right-20 top-16 -z-10 h-64 w-64 rounded-full border border-brand/40 shadow-[0_0_0_2.5rem_hsl(var(--brand)/0.06),0_0_0_5rem_hsl(var(--brand)/0.04)]'
              />

              <div className='flex items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]'>
                <span className='text-white/60'>{t.preview.videoLabel}</span>
                <span className='border border-brand/60 bg-brand/10 px-2.5 py-1 text-brand-2'>
                  {t.preview.status}
                </span>
              </div>

              <div className='my-auto py-10'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-brand-2 shadow-[0_0_0_0.75rem_rgba(255,255,255,0.04)]'>
                  <Play className='ml-1 h-5 w-5' fill='currentColor' />
                </div>
                <p className='mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-2'>
                  {t.preview.seriesLabel}
                </p>
                <h3 className='bl-display mt-3 max-w-sm text-3xl leading-tight text-white sm:text-4xl'>
                  {t.preview.videoTitle}
                </h3>
                <p className='mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base'>
                  {t.preview.videoDescription}
                </p>
                <CourseSignup
                  dict={dict}
                  source='conscious-ai:course-preview'
                  variant='inline'
                  tone='dark'
                  className='mt-6 max-w-md'
                />
              </div>

              <div className='border-t border-white/15 pt-5'>
                <div className='flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/55'>
                  <span>{t.preview.inProduction}</span>
                  <span>{t.preview.lessonCount}</span>
                </div>
                <div className='mt-3 h-1 overflow-hidden bg-white/10'>
                  <div className='h-full w-1/3 bg-brand' />
                </div>
              </div>
            </div>

            <div className='bg-surface p-6 sm:p-8 lg:p-10'>
              <div className='flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6'>
                <div>
                  <p className='bl-kicker'>{t.preview.curriculumLabel}</p>
                  <h3 className='bl-display mt-4 text-2xl text-ink sm:text-3xl'>
                    {t.preview.curriculumTitle}
                  </h3>
                </div>
                <div className='inline-flex items-center gap-2 border border-line bg-surface-2 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  <LockKeyhole className='h-3.5 w-3.5 text-brand-text' />
                  {t.preview.status}
                </div>
              </div>

              <div className='mt-2 divide-y divide-line'>
                {t.preview.modules.map((module, index) => (
                  <div key={module.title} className='flex items-center gap-4 py-5 sm:gap-6'>
                    <span className='flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-surface-2 font-mono text-[11px] font-semibold text-brand-text'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className='min-w-0 flex-1'>
                      <p className='text-sm font-semibold text-ink sm:text-base'>{module.title}</p>
                      <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>{module.description}</p>
                    </div>
                    <LockKeyhole className='h-4 w-4 shrink-0 text-muted-foreground/60' />
                  </div>
                ))}
              </div>

              <p className='mt-6 border-l-2 border-brand bg-brand-soft/35 px-4 py-3 text-sm leading-relaxed text-foreground'>
                {t.preview.note}
              </p>
            </div>
          </div>
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
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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
    <section className={cn('bl-section bl-rule bl-band-stone', className)}>
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

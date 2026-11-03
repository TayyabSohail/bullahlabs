import { ArrowUpRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { SectionHeading } from '@/components/common/section-heading';
import { CourseSignup } from '@/components/course/course-signup';
import {
  Fold,
  FoldPanel,
  FoldTrigger,
} from '@/components/course/instructor-fold';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { courseHref, courseIsLive } from '@/constants/course';
import { paths } from '@/constants/paths';
import { leadInstructor as instructor } from '@/data/instructors';
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

/** The course before it opens: who teaches it, what it is, and the waitlist. */
export function CourseSection({
  dict,
  className,
  children,
}: SectionProps & { children?: React.ReactNode }) {
  const t = dict.programPage.course;

  return (
    <section
      id='course'
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
          {/* The fold's trigger sits in the plate and its panel is a row of
              its own under both columns, so opening it moves nothing else. */}
          <Fold>
            <div className='grid overflow-hidden border border-line bg-line lg:grid-cols-[0.9fr_1.1fr]'>
              {/* Who teaches it: portrait, name, one line, the rest folded. */}
              <div className='relative isolate order-1 flex flex-col overflow-hidden bg-ink p-6 text-center text-white sm:p-8 sm:text-left lg:p-10'>
                <div
                  aria-hidden='true'
                  className='absolute -right-20 top-16 -z-10 h-64 w-64 rounded-full border border-brand/40 shadow-[0_0_0_2.5rem_hsl(var(--brand)/0.06),0_0_0_5rem_hsl(var(--brand)/0.04)]'
                />

                <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60'>
                  {t.preview.instructorLabel}
                </p>

                <div className='mt-7 flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:gap-7'>
                  <Image
                    src={instructor.image}
                    alt={`Portrait of ${instructor.name}`}
                    width={800}
                    height={960}
                    sizes='(min-width: 640px) 176px, 128px'
                    className={cn(
                      'h-32 w-32 shrink-0 border border-white/30 object-cover shadow-[4px_4px_0_0_hsl(var(--brand))] sm:h-52 sm:w-44',
                      instructor.focus,
                    )}
                  />
                  <div className='min-w-0'>
                    <span className='inline-block border border-white/25 bg-white/[0.06] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/80'>
                      {instructor.role}
                    </span>
                    <h3 className='bl-display mt-4 text-3xl text-white sm:text-4xl'>
                      {instructor.name}
                    </h3>
                    <p className='bl-accent mt-1 font-display text-xl text-brand-2 sm:text-2xl'>
                      {instructor.tagline}
                    </p>
                    <p className='mt-4 flex items-center justify-center gap-3 text-left text-white sm:justify-start'>
                      <HarvardShield className='h-9 w-auto shrink-0' />
                      <span className='min-w-0 leading-tight'>
                        <span className='block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white/55'>
                          {t.preview.alumnus}
                        </span>
                        <span className='mt-0.5 block font-display text-base font-bold sm:text-lg'>
                          {instructor.school}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>

                <p className='mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:mx-0 sm:text-base'>
                  {instructor.bio}
                </p>

                <div className='mt-5 flex justify-center border-t border-white/15 pt-4 sm:justify-start'>
                  <FoldTrigger className='bl-action text-[11px] text-brand-2 hover:text-white'>
                    {t.preview.moreAbout.replace(
                      '{name}',
                      instructor.firstName,
                    )}
                    <Plus
                      className='h-3.5 w-3.5 transition-transform duration-200 group-data-[open]/fold:rotate-45'
                      aria-hidden='true'
                    />
                  </FoldTrigger>
                </div>
              </div>

              {/* What it is, in a line and three chips, then the waitlist. */}
              <div className='order-3 flex flex-col justify-center bg-surface p-6 sm:p-8 lg:p-10'>
                <ul className='flex flex-wrap justify-center gap-2 sm:justify-start'>
                  {t.preview.points.map((point) => (
                    <li
                      key={point}
                      className='border border-brand/60 bg-brand-soft px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-text'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <h3 className='bl-display mt-6 max-w-xl text-3xl leading-tight text-ink sm:text-4xl'>
                  {t.preview.title}
                </h3>
                <p className='mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base'>
                  {t.preview.audience}
                </p>
                <CourseSignup
                  dict={dict}
                  source='conscious-ai:course-preview'
                  variant='inline'
                  tone='light'
                  submitLabel={t.preview.waitlistCta}
                  className='mt-8 max-w-xl'
                />
              </div>

              {/* The instructor's longer story, in three columns across the
                whole card on desktop; on phones it follows the plate. */}
              <FoldPanel className='order-2 bg-ink text-white lg:order-3 lg:col-span-2'>
                <dl className='grid gap-5 border-t border-white/15 p-6 sm:grid-cols-3 sm:gap-8 sm:p-8 lg:px-10 lg:py-8'>
                  {instructor.facts.map(([label, body]) => (
                    <div
                      key={label}
                      className='sm:border-l sm:border-white/15 sm:pl-5'
                    >
                      <dt className='font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand-2'>
                        {label}
                      </dt>
                      <dd className='mt-1.5 max-w-sm text-sm leading-snug text-white/80'>
                        {body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FoldPanel>
            </div>
          </Fold>
        </Reveal>
        {children}
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
          description={t.paragraphs[0]}
        />
        <div className='mt-8 grid gap-px overflow-hidden border border-line bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-4'>
          {t.offers.map((offer) => (
            <div
              key={offer.title}
              className='flex flex-col bg-surface p-6 sm:p-8'
            >
              <h3 className='bl-display text-xl text-foreground lg:text-2xl'>
                {offer.title}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                {offer.body}
              </p>
            </div>
          ))}
        </div>
        <Reveal className='mt-8 border-t pt-6 sm:mt-10 sm:pt-8'>
          <Link
            href={paths.teams}
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

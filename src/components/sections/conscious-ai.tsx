import { ArrowUpRight, Eye, Gauge, Play, Users } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { courseHref, courseIsLive, requestAccessHref } from '@/constants/course';
import { paths } from '@/constants/paths';
import { getProgram, type PillarId } from '@/data/program';
import type { Dictionary } from '@/i18n/dictionaries/en';

const PILLAR_ICONS: Record<
  PillarId,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  'conscious-use': Eye,
  'trained-teams': Users,
  'optimized-usage': Gauge,
};

interface SectionProps {
  dict: Dictionary;
  className?: string;
}

/** The three pillars in a hairline grid: Conscious Use, Trained Teams, Optimized Usage. */
export function Pillars({ dict, className }: SectionProps) {
  const t = dict.pillars;
  const { pillars } = getProgram(dict.locale);

  return (
    <section
      className={cn('bl-section bl-rule bl-band-stone', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        <SectionHeading kicker={t.kicker} title={t.title} />

        <Stagger
          stagger={0.1}
          className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 md:grid-cols-3'
        >
          {pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.id];
            return (
              <StaggerItem
                key={pillar.id}
                className='group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-brand-soft/35 sm:p-8 lg:p-10'
              >
                <div className='flex items-center justify-between'>
                  <span className='flex h-11 w-11 items-center justify-center border bg-surface-2 text-ink transition-colors duration-300 group-hover:border-brand group-hover:bg-brand-soft group-hover:text-brand-text'>
                    <Icon className='h-5 w-5' strokeWidth={1.5} />
                  </span>
                  <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className='bl-display mt-8 text-3xl text-ink lg:text-4xl'>
                  {pillar.title}
                </h3>
                <p className='mt-3 text-base leading-relaxed text-muted-foreground'>
                  {pillar.tagline}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
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

interface CourseVideosProps extends SectionProps {
  kicker: string;
  title: string;
  accentWords?: number[];
  description?: string;
  /** How many lesson placeholders to show. */
  count?: number;
  /** The homepage adds a link through to the program page. */
  showProgramLink?: boolean;
}

/**
 * The course as a grid of lesson placeholders, each a 16:9 frame that a
 * video embed replaces once it is published, with the link to the course
 * underneath. Until NEXT_PUBLIC_COURSE_URL is set the link opens the
 * contact form instead.
 */
export function CourseVideos({
  dict,
  className,
  kicker,
  title,
  accentWords,
  description,
  count = 3,
  showProgramLink = false,
}: CourseVideosProps) {
  const t = dict.program;
  const lessons = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <section
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={kicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={kicker}
          title={title}
          accentWords={accentWords}
          description={description}
        />

        <Stagger
          stagger={0.08}
          className='mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'
        >
          {lessons.map((lesson) => (
            <StaggerItem key={lesson} className='flex'>
              <div className='bl-card flex w-full flex-col overflow-hidden'>
                {/* The frame a lesson's video will sit in */}
                <div
                  aria-hidden='true'
                  className='relative aspect-video w-full border-b bg-ink bg-[repeating-linear-gradient(135deg,transparent_0_14px,hsl(0_0%_100%/0.035)_14px_15px)]'
                >
                  <span className='absolute left-4 top-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50'>
                    {t.lesson} {String(lesson).padStart(2, '0')}
                  </span>
                  <span className='absolute inset-0 flex items-center justify-center'>
                    <span className='flex h-14 w-14 items-center justify-center border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur-sm'>
                      <Play className='ml-0.5 h-5 w-5' strokeWidth={1.5} />
                    </span>
                  </span>
                  <span className='absolute bottom-4 right-4 border border-brand bg-brand px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-foreground'>
                    {t.comingSoon}
                  </span>
                </div>
                <p className='px-5 py-4 text-sm text-muted-foreground'>
                  {t.lesson} {String(lesson).padStart(2, '0')}
                  <span className='sr-only'>: {t.comingSoon}</span>
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className='mt-8 flex flex-col gap-4 border-t pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8'>
          <p className='max-w-xl text-xs leading-relaxed text-muted-foreground'>
            {t.placeholderNote}
          </p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <CourseLink className='bl-btn bl-btn-primary inline-flex h-14 items-center justify-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] shadow-[0_16px_30px_-18px_hsl(var(--brand-strong))]'>
              {courseIsLive ? t.watch : t.request}
              <ArrowUpRight className='h-4 w-4' />
            </CourseLink>
            {showProgramLink ? (
              <Link href={paths.program} className='bl-action justify-center'>
                {t.cta}
                <ArrowUpRight className='h-3.5 w-3.5' />
              </Link>
            ) : (
              courseIsLive && (
                <Link
                  href={requestAccessHref}
                  className='bl-action justify-center'
                >
                  {t.request}
                  <ArrowUpRight className='h-3.5 w-3.5' />
                </Link>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

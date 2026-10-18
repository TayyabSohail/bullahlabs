import { ArrowUpRight, Eye, Gauge, Users } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { CoursePlayer } from '@/components/course/course-player';
import { CourseSignup } from '@/components/course/course-signup';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import {
  courseHref,
  courseIsLive,
  requestAccessHref,
} from '@/constants/course';
import { paths } from '@/constants/paths';
import { getModules } from '@/data/lessons';
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
  /** The homepage adds a link through to the program page. */
  showProgramLink?: boolean;
}

/**
 * The course as a player: the current lesson in a 16:9 frame, the modules
 * in a list that scrolls on its own beside it, and under both the sign-up
 * for being told when a lesson is published. A lesson plays here as soon
 * as its `video` is set in `src/data/lessons.ts`; until then the frame says
 * so. When NEXT_PUBLIC_COURSE_URL is set the full course off-site is linked
 * as well.
 */
export function CourseVideos({
  dict,
  className,
  kicker,
  title,
  accentWords,
  description,
  showProgramLink = false,
}: CourseVideosProps) {
  const t = dict.program;
  const modules = getModules(dict.locale);
  const source = showProgramLink ? 'home' : 'conscious-ai';

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
          aside={
            courseIsLive ? (
              <CourseLink className='bl-action'>
                {t.watch}
                <ArrowUpRight className='h-3.5 w-3.5' />
              </CourseLink>
            ) : undefined
          }
        />

        <Reveal className='mt-8 sm:mt-14'>
          <CoursePlayer
            modules={modules}
            labels={t.player}
            placeholderAction={
              <CourseSignup
                dict={dict}
                source={`${source}:player`}
                variant='inline'
                className='w-full max-w-md text-left'
              />
            }
          />
        </Reveal>

        <div className='mt-4 grid gap-4 lg:mt-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-5'>
          <Reveal delay={0.1}>
            <CourseSignup dict={dict} source={source} className='h-full' />
          </Reveal>
          <Reveal
            delay={0.2}
            className='bl-card flex flex-col justify-between p-6 sm:p-8'
          >
            <div>
              <p className='bl-kicker'>{t.nextKicker}</p>
              <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                {t.nextBody}
              </p>
            </div>
            <div className='mt-6 flex flex-col gap-3'>
              {courseIsLive && (
                <CourseLink className='bl-btn bl-btn-primary inline-flex h-12 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'>
                  {t.watch}
                  <ArrowUpRight className='h-4 w-4' />
                </CourseLink>
              )}
              {showProgramLink ? (
                <Link
                  href={paths.program}
                  className='bl-btn bl-btn-ink inline-flex h-12 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
                >
                  {t.cta}
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              ) : (
                <Link
                  href={requestAccessHref}
                  className='bl-btn bl-btn-ink inline-flex h-12 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
                >
                  {t.request}
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

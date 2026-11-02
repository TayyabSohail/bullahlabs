import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { ProjectCard } from '@/components/work/project-card';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getShowcaseProjectsLocalised } from '@/data/projects';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface WorkShowcaseProps {
  dict: Dictionary;
  className?: string;
  /** How many case studies to show; the rest are a click away on /work. */
  count?: number;
}

/**
 * "View our work" on the services page: three case studies as the proof
 * behind the services, each linking to its own page, plus a link to all of
 * them. The mirror of ServicesTeaser on /work.
 */
export function WorkShowcase({
  dict,
  className,
  count = 3,
}: WorkShowcaseProps) {
  const t = dict.work.showcase;
  const projects = getShowcaseProjectsLocalised(dict.locale).slice(0, count);

  return (
    <section
      data-section='work-showcase'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
          aside={
            <Link
              href={paths.work}
              className='bl-btn bl-btn-primary inline-flex h-12 items-center gap-3 whitespace-nowrap px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          }
        />

        <Stagger
          stagger={0.08}
          className='mt-8 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3'
        >
          {projects.map((project, index) => (
            <StaggerItem
              key={project.slug}
              className={cn(
                'flex min-w-0',
                index === 2 &&
                  'md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:mx-0 lg:w-auto',
              )}
            >
              <ProjectCard
                project={project}
                priority={index === 0}
                actionLabel={dict.work.view}
                className='w-full'
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

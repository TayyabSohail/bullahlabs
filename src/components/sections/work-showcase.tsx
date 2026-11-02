import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { ProjectCard } from '@/components/work/project-card';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import {
  getShowcaseProjectsByCategory,
  getShowcaseProjectsLocalised,
} from '@/data/projects';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface WorkShowcaseProps {
  dict: Dictionary;
  className?: string;
  /** How many case studies to show; the rest are a click away on /work. */
  count?: number;
}

/**
 * "View our work" on the services page: three case studies of three
 * different product types as the proof behind the services, each linking
 * to its own page, then a "view more" strip that takes the visitor to
 * /work. The mirror of ServicesTeaser on /work.
 */
export function WorkShowcase({
  dict,
  className,
  count = 3,
}: WorkShowcaseProps) {
  const t = dict.work.showcase;
  const all = getShowcaseProjectsLocalised(dict.locale);
  const projects = getShowcaseProjectsByCategory(count, all);
  const remaining = all.length - projects.length;

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

        {/* The "view more" row: the whole strip is the link to /work. */}
        <Link
          href={paths.work}
          data-cursor='view'
          className='bl-card bl-card-link group mt-6 flex items-center justify-between gap-4 px-5 py-4 sm:mt-8 sm:px-6'
        >
          <span className='min-w-0'>
            <span className='block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 group-hover:text-brand-text'>
              {t.cta}
            </span>
            <span className='mt-1 block text-sm leading-snug text-muted-foreground'>
              {t.more.replace('{n}', String(remaining))}
            </span>
          </span>
          <span className='flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-white transition-colors duration-300 group-hover:bg-brand'>
            <ArrowUpRight
              aria-hidden='true'
              className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

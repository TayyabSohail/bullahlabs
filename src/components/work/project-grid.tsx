'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ListFilter } from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProjectCard } from '@/components/work/project-card';

import { cn } from '@/lib/utils';

import type { Project, ProjectCategory } from '@/data/projects';

interface ProjectGridProps {
  projects: Project[];
  categories: ProjectCategory[];
  labels: Record<string, string>;
  /** Accessible name of the filter group, e.g. "Filter projects". */
  filterLabel: string;
  /** Visible label before the chips, e.g. "Filter by". */
  filterByLabel: string;
  actionLabel: string;
}

type Filter = 'All' | ProjectCategory;

/**
 * A labelled row of filter chips with counts over a three-column masonry of
 * project tiles. The active chip is an ink block on a hard shadow. Items are
 * distributed across columns so the flow reads left-to-right, top-to-bottom.
 */
export function ProjectGrid({
  projects,
  categories,
  labels,
  filterLabel,
  filterByLabel,
  actionLabel,
}: ProjectGridProps) {
  const [active, setActive] = useState<Filter>('All');
  const reduce = useReducedMotion();

  const filters = useMemo(() => {
    const all: Filter[] = ['All', ...categories];
    return all.map((filter) => ({
      filter,
      label: labels[filter] ?? filter,
      count:
        filter === 'All'
          ? projects.length
          : projects.filter((project) => project.category === filter).length,
    }));
  }, [categories, labels, projects]);

  const visible = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <>
      {/* A filter row, not a tab strip: a mono "Filter by" label with a
          funnel icon, then separate ruled chips, each carrying its count.
          The active chip is an ink block on a hard shadow. Chips wrap and
          sit left on narrow screens, centred under the heading from sm up. */}
      <div
        role='group'
        aria-label={filterLabel}
        className='flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4'
      >
        <span className='bl-label inline-flex items-center gap-2'>
          <ListFilter className='h-4 w-4' strokeWidth={1.5} aria-hidden />
          {filterByLabel}
        </span>
        <div className='flex flex-wrap gap-2 sm:justify-center'>
          {filters.map(({ filter, label, count }) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type='button'
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex h-9 items-center gap-2 whitespace-nowrap border px-3 font-mono text-xs font-medium transition-[background-color,color,box-shadow,transform] duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isActive
                    ? 'border-ink bg-ink text-white shadow-[3px_3px_0_0_hsl(var(--ink))]'
                    : 'border-ink/30 bg-surface text-ink/70 hover:border-ink hover:bg-brand-soft hover:text-ink active:translate-y-px',
                )}
              >
                <span>{label}</span>
                <span
                  className={cn(
                    'inline-flex h-5 min-w-5 items-center justify-center border px-1 text-[11px] tabular-nums',
                    isActive
                      ? 'border-white/30 text-white/80'
                      : 'border-ink/20 text-ink/50',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <MasonryColumns
        key={active}
        projects={visible}
        columnCount={1}
        className='mt-6 flex flex-col gap-4 sm:hidden'
        actionLabel={actionLabel}
        reduce={Boolean(reduce)}
      />
      <MasonryColumns
        key={`${active}-2`}
        projects={visible}
        columnCount={2}
        className='mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:hidden'
        actionLabel={actionLabel}
        reduce={Boolean(reduce)}
      />
      <MasonryColumns
        key={`${active}-3`}
        projects={visible}
        columnCount={3}
        className='mt-10 hidden gap-6 lg:grid lg:grid-cols-3'
        actionLabel={actionLabel}
        reduce={Boolean(reduce)}
      />
    </>
  );
}

function MasonryColumns({
  projects,
  columnCount,
  className,
  actionLabel,
  reduce,
}: {
  projects: Project[];
  columnCount: number;
  className: string;
  actionLabel: string;
  reduce: boolean;
}) {
  return (
    <div className={className}>
      {Array.from({ length: columnCount }, (_, columnIndex) => (
        <div key={columnIndex} className='flex min-w-0 flex-col gap-4 sm:gap-6'>
          {projects
            .filter((_, index) => index % columnCount === columnIndex)
            .map((project, index) => {
              const visualIndex = columnIndex + index * columnCount;
              return (
                <motion.div
                  key={project.slug}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (index % 3) * 0.06,
                  }}
                >
                  <ProjectCard
                    project={project}
                    priority={visualIndex < 3}
                    actionLabel={actionLabel}
                  />
                </motion.div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

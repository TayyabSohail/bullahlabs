'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { ProjectCard } from '@/components/work/project-card';

import { cn } from '@/lib/utils';

import type {
  EfficiencyLens,
  Project,
  ProjectCategory,
} from '@/data/projects';

interface ProjectGridProps {
  projects: Project[];
  lenses: EfficiencyLens[];
  categories: ProjectCategory[];
  labels: Record<string, string>;
  /** Full lens names for the cards, keyed by lens. */
  lensLabels: Record<EfficiencyLens, string>;
  filterLabel: string;
  actionLabel: string;
  countTemplate: string;
}

type Filter = 'All' | EfficiencyLens | ProjectCategory;

/**
 * Filter chips (efficiency lenses first, then product categories) over a
 * three-column masonry of project tiles. Items are
 * distributed across columns so the flow reads left-to-right, top-to-bottom.
 */
export function ProjectGrid({
  projects,
  lenses,
  categories,
  labels,
  lensLabels,
  filterLabel,
  actionLabel,
  countTemplate,
}: ProjectGridProps) {
  const [active, setActive] = useState<Filter>('All');
  const reduce = useReducedMotion();

  const filters: Filter[] = useMemo(
    () => ['All', ...lenses, ...categories],
    [lenses, categories],
  );

  const visible = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter(
      (project) =>
        project.category === active || project.efficiency.lens === active,
    );
  }, [active, projects]);

  return (
    <>
      <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
        <div
          role='group'
          aria-label={filterLabel}
          className='flex max-w-full flex-wrap gap-1.5'
        >
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type='button'
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  'border px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] transition-colors sm:px-4 sm:py-2.5 sm:text-[11px]',
                  isActive
                    ? 'border-ink bg-ink text-white'
                    : 'border-ink/15 bg-background text-ink/70 hover:bg-brand-soft hover:text-ink',
                )}
              >
                {labels[filter] ?? filter}
              </button>
            );
          })}
        </div>
        <p
          aria-live='polite'
          className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground'
        >
          {countTemplate.replace('{n}', String(visible.length))}
        </p>
      </div>

      <MasonryColumns
        key={active}
        projects={visible}
        columnCount={1}
        className='mt-8 flex flex-col gap-5 sm:hidden'
        actionLabel={actionLabel}
        lensLabels={lensLabels}
        reduce={Boolean(reduce)}
      />
      <MasonryColumns
        key={`${active}-2`}
        projects={visible}
        columnCount={2}
        className='mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:hidden'
        actionLabel={actionLabel}
        lensLabels={lensLabels}
        reduce={Boolean(reduce)}
      />
      <MasonryColumns
        key={`${active}-3`}
        projects={visible}
        columnCount={3}
        className='mt-10 hidden gap-6 lg:grid lg:grid-cols-3'
        actionLabel={actionLabel}
        lensLabels={lensLabels}
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
  lensLabels,
  reduce,
}: {
  projects: Project[];
  columnCount: number;
  className: string;
  actionLabel: string;
  lensLabels: Record<EfficiencyLens, string>;
  reduce: boolean;
}) {
  return (
    <div className={className}>
      {Array.from({ length: columnCount }, (_, columnIndex) => (
        <div key={columnIndex} className='flex min-w-0 flex-col gap-6'>
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
                    lensLabel={lensLabels[project.efficiency.lens]}
                  />
                </motion.div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

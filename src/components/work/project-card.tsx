import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ProjectMockup } from '@/components/mockups/project-mockup';

import { getTechMeta } from '@/lib/tech-icons';
import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
  /** Text for the footer action. */
  actionLabel?: string;
  /** Localised name of the project's efficiency lens. */
  lensLabel?: string;
}

const VISIBLE_TECH = 4;

/**
 * Portfolio-style project tile: the product on devices, category chip,
 * efficiency lens, title, the efficiency claim, tech chips, full-bleed
 * action footer.
 * The whole card is the link, so it is the one card type that lifts.
 */
export function ProjectCard({
  project,
  priority,
  className,
  actionLabel = 'View project',
  lensLabel,
}: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, VISIBLE_TECH);
  const overflow = project.tech.length - visibleTech.length;

  return (
    <Link
      href={paths.caseStudy(project.slug)}
      aria-label={`${project.title}: ${project.tagline}`}
      data-cursor='view'
      className={cn(
        'bl-card bl-card-link group relative isolate block min-w-0 max-w-full',
        className,
      )}
    >
      <div className='bl-grid-surface absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100' />

      <div className='relative border-b'>
        <ProjectMockup
          project={project}
          priority={priority}
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
        />
        <span className='absolute left-4 top-4 inline-flex items-center gap-2 border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md'>
          <span aria-hidden='true' className='h-px w-3 bg-brand' />
          {project.category}
        </span>
      </div>

      <div className='relative p-5 sm:p-6'>
        {lensLabel && (
          <p className='mb-3 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text'>
            <span aria-hidden='true' className='h-1.5 w-1.5 bg-brand' />
            {lensLabel}
          </p>
        )}
        <h3 className='bl-display text-2xl text-ink transition-colors duration-300 group-hover:text-brand-text'>
          {project.title}
        </h3>
        <p className='mt-1 text-sm text-muted-foreground'>{project.tagline}</p>
        <p className='mt-4 border-l-2 border-brand pl-3.5 text-[15px] font-medium leading-snug text-ink/85'>
          {project.efficiency.title}
        </p>


        <ul className='mt-5 flex flex-wrap items-center gap-1.5 border-t pt-5'>
          {visibleTech.map((tech) => {
            const { icon: Icon, color } = getTechMeta(tech);
            return (
              <li
                key={tech}
                className='inline-flex items-center gap-1.5 border border-ink/10 bg-surface-2 px-2 py-1 text-xs text-ink/70 transition group-hover:text-ink'
              >
                <Icon
                  aria-hidden='true'
                  className='h-3.5 w-3.5 shrink-0'
                  style={{
                    color: color === 'currentColor' ? undefined : color,
                  }}
                />
                {tech}
              </li>
            );
          })}
          {overflow > 0 && (
            <li className='inline-flex items-center border border-ink/10 bg-surface-2 px-2 py-1 text-xs text-ink/70'>
              +{overflow}
            </li>
          )}
        </ul>

        <span className='-mx-5 -mb-5 mt-6 flex min-h-14 items-center justify-between border-t bg-surface-2/60 px-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-300 group-hover:bg-brand/[0.08] group-hover:text-brand-text sm:-mx-6 sm:-mb-6 sm:px-6'>
          <span className='inline-flex items-center gap-2.5'>
            <span
              aria-hidden='true'
              className='h-px w-4 bg-brand transition-[width] duration-300 group-hover:w-6'
            />
            {actionLabel}
          </span>
          <span className='flex h-9 w-9 shrink-0 items-center justify-center border border-brand/40 bg-brand/[0.08] text-brand-text transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white'>
            <ArrowUpRight
              aria-hidden='true'
              className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            />
          </span>
        </span>
      </div>
    </Link>
  );
}

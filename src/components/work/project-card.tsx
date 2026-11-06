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
}

/**
 * Three chips plus a "+N" fit one row at every card width, so the chip row,
 * and with it the footer, sits at the same height on every tile.
 */
const VISIBLE_TECH = 3;

/**
 * Portfolio-style project tile: the product on devices, category label,
 * title, a tagline that says what the product is and what makes it lean,
 * tech chips, full-bleed action footer.
 * The whole card is the link, so it is the one card type that lifts.
 */
export function ProjectCard({
  project,
  priority,
  className,
  actionLabel = 'View project',
}: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, VISIBLE_TECH);
  const overflow = project.tech.length - visibleTech.length;

  return (
    <Link
      href={paths.caseStudy(project.slug)}
      aria-label={`${project.title}: ${project.tagline}`}
      data-cursor='view'
      className={cn(
        'bl-card bl-card-link group relative flex min-w-0 max-w-full flex-col',
        className,
      )}
    >
      <div className='relative border-b'>
        <ProjectMockup
          project={project}
          priority={priority}
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
        />
        <span className='absolute left-3 top-3 inline-flex items-center gap-2 bg-ink px-2.5 py-1 font-mono text-[11px] leading-4 text-white sm:left-4 sm:top-4'>
          <span aria-hidden='true' className='h-px w-3 bg-brand' />
          {project.category}
        </span>
      </div>

      <div className='relative flex flex-1 flex-col p-4 sm:p-5'>
        <h3 className='bl-display line-clamp-1 text-xl text-ink transition-colors duration-300 group-hover:text-brand-text sm:text-2xl'>
          {project.title}
        </h3>
        {/* Clamped to two lines and grows to fill the row, so the chip row
            and footer line up across cards of one grid row. */}
        <p className='mt-1.5 line-clamp-2 flex-1 text-sm leading-snug text-ink/80 sm:min-h-[2.5em] sm:text-[15px]'>
          {project.tagline}
        </p>

        <ul className='mt-3 flex flex-nowrap items-center gap-1.5 overflow-hidden border-t pt-3 sm:mt-4 sm:pt-4'>
          {visibleTech.map((tech) => {
            const { icon: Icon } = getTechMeta(tech);
            return (
              <li
                key={tech}
                title={tech}
                className='inline-flex min-w-0 items-center gap-1.5 border border-ink/10 bg-surface-2 px-2 py-1 text-xs text-ink/70 transition-colors group-hover:text-ink'
              >
                <Icon aria-hidden='true' className='h-3.5 w-3.5 shrink-0' />
                <span className='truncate'>{tech}</span>
              </li>
            );
          })}
          {overflow > 0 && (
            <li
              title={project.tech.slice(VISIBLE_TECH).join(', ')}
              className='inline-flex shrink-0 items-center border border-ink/10 bg-surface-2 px-2 py-1 text-xs tabular-nums text-ink/70'
            >
              +{overflow}
            </li>
          )}
        </ul>

        <span className='-mx-4 -mb-4 mt-3 flex min-h-11 items-center justify-between border-t bg-surface-2/60 px-4 font-mono text-xs font-medium text-ink transition-colors duration-300 group-hover:bg-brand/[0.08] group-hover:text-brand-text sm:-mx-5 sm:-mb-5 sm:mt-5 sm:min-h-12 sm:px-5'>
          <span className='inline-flex items-center gap-2.5'>
            <span
              aria-hidden='true'
              className='h-px w-4 bg-brand transition-[width] duration-300 group-hover:w-6'
            />
            {actionLabel}
          </span>
          <span className='flex h-8 w-8 shrink-0 items-center justify-center border border-brand/40 text-brand-text transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white'>
            <ArrowUpRight
              aria-hidden='true'
              className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              strokeWidth={1.5}
            />
          </span>
        </span>
      </div>
    </Link>
  );
}

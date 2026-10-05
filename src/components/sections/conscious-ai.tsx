import { ArrowUpRight, Eye, Gauge, Users } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

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
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          description={t.description}
        />

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
                <p className='mt-3 text-sm font-semibold leading-snug text-brand-text sm:text-base'>
                  {pillar.tagline}
                </p>
                <p className='mt-4 border-t pt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]'>
                  {pillar.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/**
 * The four tiers of Conscious AI as a path: the free course in ink, the paid
 * tiers beside it, each with who it is for and what the learner leaves with.
 */
export function ProgramTiers({ dict, className }: SectionProps) {
  const t = dict.program;
  const { tiers } = getProgram(dict.locale);

  return (
    <section
      id='conscious-ai'
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
        />

        <Stagger
          stagger={0.1}
          className='mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4'
        >
          {tiers.map((tier, index) => {
            const free = index === 0;
            return (
              <StaggerItem
                key={tier.id}
                className={cn(
                  'bl-card flex flex-col p-6 lg:p-7',
                  free && 'bl-card-ink',
                )}
              >
                <div className='flex items-center justify-between gap-3'>
                  <p
                    className={cn(
                      'font-mono text-[10px] font-semibold uppercase tracking-[0.22em]',
                      free ? 'text-white/60' : 'text-muted-foreground',
                    )}
                  >
                    {t.tier} {String(index + 1).padStart(2, '0')}
                  </p>
                  <span
                    className={cn(
                      'border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]',
                      free
                        ? 'border-brand bg-brand text-brand-foreground'
                        : 'border-ink/15 text-ink/70',
                    )}
                  >
                    {tier.access}
                  </span>
                </div>

                <h3
                  className={cn(
                    'bl-display mt-8 text-[1.7rem] leading-none',
                    free ? 'text-white' : 'text-ink',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    'mt-2 font-mono text-[10px] uppercase tracking-[0.16em]',
                    free ? 'text-brand-2' : 'text-brand-text',
                  )}
                >
                  {t.audience}: {tier.audience}
                </p>

                <div
                  className={cn(
                    'mt-6 border-l-2 border-brand py-0.5 pl-4',
                    free ? 'text-white/85' : 'text-ink/85',
                  )}
                >
                  <p
                    className={cn(
                      'font-mono text-[9px] uppercase tracking-[0.18em]',
                      free ? 'text-white/50' : 'text-muted-foreground',
                    )}
                  >
                    {t.outcome}
                  </p>
                  <p className='mt-1.5 text-sm font-medium leading-snug'>
                    {tier.outcome}
                  </p>
                </div>

                <ul
                  className={cn(
                    'mt-auto flex flex-wrap gap-1.5 pt-7 text-[10px] font-medium uppercase tracking-[0.08em]',
                    free ? 'text-white/70' : 'text-ink/70',
                  )}
                >
                  {tier.highlights.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        'inline-flex items-center gap-1.5 border px-2.5 py-1',
                        free ? 'border-white/15' : 'border-ink/10 bg-white',
                      )}
                    >
                      <span aria-hidden='true' className='h-1 w-1 bg-brand' />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className='mt-8 border-t pt-6 sm:mt-10 sm:pt-8'>
          <Link
            href={paths.program}
            className='bl-btn bl-btn-primary inline-flex h-14 items-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] shadow-[0_16px_30px_-18px_hsl(var(--brand-strong))]'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

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

/**
 * The four tiers of Conscious AI as a path: the free course in ink, the paid
 * tiers beside it, each with who it is for and what the learner leaves with.
 * Every card opens its tier on the program page.
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
              <StaggerItem key={tier.id} className='flex'>
                <Link
                  href={paths.programTier(tier.id)}
                  className={cn(
                    'bl-card bl-card-link flex w-full flex-col p-6 lg:p-7',
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
                </Link>
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

interface RoleTracksProps extends SectionProps {
  /**
   * The program page lists the three workflows each track builds. The
   * homepage shows the tracks as an index and links through for the detail.
   */
  detailed?: boolean;
}

/** The role tracks: one tile per job, flagship and technical tracks marked. */
export function RoleTracks({
  dict,
  className,
  detailed = false,
}: RoleTracksProps) {
  const t = dict.programPage;
  const { roleTracks } = getProgram(dict.locale);

  return (
    <section
      id={detailed ? 'role-tracks-list' : undefined}
      className={cn('bl-section bl-rule bl-band-white scroll-mt-20', className)}
      data-rail={t.tracksKicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.tracksKicker}
          title={t.tracksTitle}
          description={t.tracksDescription}
        />
        <Stagger
          stagger={0.06}
          className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-3'
        >
          {roleTracks.map((track, index) => (
            <StaggerItem
              key={track.id}
              className='flex flex-col bg-surface p-6 lg:p-7'
            >
              {!detailed && (
                <span className='mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
              <div className='flex min-h-6 items-start justify-between gap-3'>
                <h3 className='bl-display text-xl text-ink sm:text-2xl'>
                  {track.name}
                </h3>
                {(track.flagship || track.technical) && (
                  <span
                    className={cn(
                      'shrink-0 border px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]',
                      track.flagship
                        ? 'border-brand bg-brand text-brand-foreground'
                        : 'border-ink/15 text-ink/70',
                    )}
                  >
                    {track.flagship ? t.flagship : t.technical}
                  </span>
                )}
              </div>
              <p className='mt-2 text-sm text-muted-foreground'>
                {track.audience}
              </p>
              {detailed && (
                <ul className='mt-5 space-y-2.5 border-t pt-4 text-[13px] leading-snug text-ink/80'>
                  {track.workflows.map((workflow) => (
                    <li key={workflow} className='flex items-start gap-2.5'>
                      <span
                        aria-hidden='true'
                        className='mt-[7px] h-1 w-1 shrink-0 bg-brand'
                      />
                      {workflow}
                    </li>
                  ))}
                </ul>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        {!detailed && (
          <Reveal className='mt-6 sm:mt-8'>
            <Link
              href={paths.programTracks}
              scroll={false}
              className='bl-action'
            >
              {dict.program.tracksCta}
              <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/**
 * Who the program is for: the job functions it is written around, then the
 * two readers side by side, the person doing the work and the company
 * employing them.
 */
export function Audience({ dict, className }: SectionProps) {
  const t = dict.programPage;
  const { roles } = getProgram(dict.locale);

  return (
    <section
      className={cn('bl-section bl-rule bl-band-stone', className)}
      data-rail={t.audienceKicker}
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.audienceKicker}
          title={t.audienceTitle}
          description={t.audienceDescription}
        />
        <Reveal>
          <ul className='mt-8 flex flex-wrap gap-1.5 sm:mt-12'>
            {roles.map((role) => (
              <li
                key={role}
                className='inline-flex items-center gap-2 border border-ink/10 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-ink/75'
              >
                <span aria-hidden='true' className='h-1 w-1 bg-brand' />
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
        <Stagger className='mt-6 grid gap-4 md:grid-cols-2'>
          {[t.employee, t.employer].map((audience, index) => (
            <StaggerItem
              key={audience.label}
              className={cn('bl-card p-7 sm:p-9', index === 1 && 'bl-card-ink')}
            >
              <p className={cn('bl-kicker', index === 1 && 'text-white/60')}>
                {audience.label}
              </p>
              <h3
                className={cn(
                  'bl-display mt-5 max-w-[20ch] text-2xl sm:text-3xl',
                  index === 1 ? 'text-white' : 'text-ink',
                )}
              >
                {audience.title}
              </h3>
              <p
                className={cn(
                  'mt-4 text-base leading-relaxed',
                  index === 1 ? 'text-white/70' : 'text-muted-foreground',
                )}
              >
                {audience.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

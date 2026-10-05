import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/common/page-hero';
import { SectionHeading } from '@/components/common/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Pillars } from '@/components/sections/conscious-ai';
import { CtaBanner } from '@/components/sections/cta-banner';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getProgram } from '@/data/program';
import { getDictionary } from '@/i18n/server';
import { PROGRAM_OPTION } from '@/schema/contact';

export const metadata: Metadata = {
  title: 'Conscious AI',
  description:
    'Conscious AI is a practical program for non-technical knowledge workers: a free fundamentals course, then tiers for your own tools, your role and your whole team.',
  alternates: { canonical: paths.program },
};

/** Contact form, with the program already chosen. */
const enquiryHref = `${paths.contact}?service=${PROGRAM_OPTION}`;

export default async function ConsciousAiPage() {
  const dict = await getDictionary();
  const t = dict.programPage;
  const labels = dict.program;
  const program = getProgram(dict.locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
      >
        <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
          <Link
            href={enquiryHref}
            className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.primary}
            <span className='h-2.5 w-2.5 bg-brand' />
          </Link>
          <Link
            href='#tiers'
            className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.secondary}
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
        <p className='mt-10 max-w-3xl border-l-2 border-brand pl-5 text-lg font-medium leading-snug text-foreground sm:text-xl'>
          {t.principle}
        </p>
      </PageHero>

      <Pillars dict={dict} />

      {/* Five themes */}
      <section
        className='bl-section bl-rule bl-band-white'
        data-rail={t.themesKicker}
      >
        <div className='bl-container'>
          <SectionHeading kicker={t.themesKicker} title={t.themesTitle} />
          <Stagger
            stagger={0.08}
            className='mt-8 grid gap-px overflow-hidden border bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-5'
          >
            {program.themes.map((theme, index) => (
              <StaggerItem
                key={theme.title}
                className='flex flex-col bg-surface p-6 lg:p-7'
              >
                <span className='bl-display text-4xl text-brand/30'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className='bl-display mt-6 text-xl text-ink'>
                  {theme.title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                  {theme.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tiers, with their modules */}
      <section
        id='tiers'
        className='bl-section bl-rule bl-band-stone scroll-mt-20'
        data-rail={t.tiersKicker}
      >
        <div className='bl-container'>
          <SectionHeading
            kicker={t.tiersKicker}
            title={t.tiersTitle}
            description={t.tiersDescription}
          />

          <div className='mt-8 space-y-4 sm:mt-14 sm:space-y-6'>
            {program.tiers.map((tier, index) => (
              <Reveal
                key={tier.id}
                className='bl-card grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'
              >
                <div
                  className={cn(
                    'flex flex-col p-6 sm:p-8 lg:p-10',
                    index === 0 ? 'bg-ink text-white' : 'bg-surface-2/60',
                  )}
                >
                  <div className='flex items-center justify-between gap-3'>
                    <p
                      className={cn(
                        'font-mono text-[10px] font-semibold uppercase tracking-[0.22em]',
                        index === 0 ? 'text-white/60' : 'text-muted-foreground',
                      )}
                    >
                      {labels.tier} {String(index + 1).padStart(2, '0')}
                    </p>
                    <span
                      className={cn(
                        'border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]',
                        index === 0
                          ? 'border-brand bg-brand text-brand-foreground'
                          : 'border-ink/15 bg-white text-ink/70',
                      )}
                    >
                      {tier.access}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      'bl-display mt-8 text-3xl sm:text-4xl',
                      index === 0 ? 'text-white' : 'text-ink',
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 font-mono text-[10px] uppercase tracking-[0.16em]',
                      index === 0 ? 'text-brand-2' : 'text-brand-text',
                    )}
                  >
                    {labels.audience}: {tier.audience}
                  </p>
                  <p
                    className={cn(
                      'mt-5 text-sm leading-relaxed sm:text-[15px]',
                      index === 0 ? 'text-white/70' : 'text-muted-foreground',
                    )}
                  >
                    {tier.summary}
                  </p>
                  <div className='mt-auto pt-8'>
                    <div className='border-l-2 border-brand pl-4'>
                      <p
                        className={cn(
                          'font-mono text-[9px] uppercase tracking-[0.18em]',
                          index === 0
                            ? 'text-white/50'
                            : 'text-muted-foreground',
                        )}
                      >
                        {labels.outcome}
                      </p>
                      <p className='mt-1.5 text-sm font-medium leading-snug'>
                        {tier.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-t bg-surface lg:border-l lg:border-t-0'>
                  <p className='border-b px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8'>
                    {labels.modules}
                  </p>
                  <ol>
                    {tier.modules.map((module) => (
                      <li
                        key={module.code}
                        className='grid gap-x-6 gap-y-2 border-b px-6 py-5 last:border-b-0 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:px-8'
                      >
                        <span className='font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-text'>
                          {module.code}
                        </span>
                        <div>
                          <h4 className='text-base font-semibold text-ink'>
                            {module.title}
                          </h4>
                          <p className='mt-1.5 text-sm leading-relaxed text-muted-foreground'>
                            {module.focus}
                          </p>
                          <p className='mt-2.5 flex items-start gap-2 text-[13px] leading-snug text-ink/80'>
                            <span className='shrink-0 font-mono text-[9px] uppercase leading-[1.6] tracking-[0.16em] text-muted-foreground'>
                              {labels.output}
                            </span>
                            {module.output}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Role tracks */}
      <section
        className='bl-section bl-rule bl-band-white'
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
            {program.roleTracks.map((track) => (
              <StaggerItem
                key={track.id}
                className='flex flex-col bg-surface p-6 lg:p-7'
              >
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it is for */}
      <section
        className='bl-section bl-rule bl-band-stone'
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
              {program.roles.map((role) => (
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
            {[t.employee, t.employer].map((audience) => (
              <StaggerItem key={audience.label} className='bl-card p-7 sm:p-9'>
                <p className='bl-kicker'>{audience.label}</p>
                <h3 className='bl-display mt-5 max-w-[20ch] text-2xl text-ink sm:text-3xl'>
                  {audience.title}
                </h3>
                <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                  {audience.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className='bl-card bl-card-tint mt-4 grid gap-6 p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12'>
            <div>
              <p className='bl-kicker'>{t.sustainabilityKicker}</p>
              <h3 className='bl-display mt-5 text-2xl text-ink sm:text-3xl'>
                {t.sustainabilityTitle}
              </h3>
            </div>
            <p className='text-base leading-relaxed text-foreground/80 sm:text-lg'>
              {t.sustainabilityBody}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        dict={dict}
        title={t.ctaTitle}
        accentWords={[...t.ctaAccent]}
        body={t.ctaBody}
      />
    </>
  );
}

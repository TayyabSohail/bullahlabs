import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { ConsciousAiHome } from '@/components/sections/conscious-ai-home';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';
import { cn as mergeClasses } from '@/lib/utils';

/**
 * The answer to the problem: three concrete doors, each with its own next
 * step. They belong here, after the explanation—not in the opening hero.
 */
export function Studio({ dict }: { dict: Dictionary }) {
  const t = dict.studio;
  const teams = dict.offers.teams;
  const services = [
    { ...t.services[2], href: paths.teams },
    {
      title: teams.title,
      body: teams.rows.map(([, title]) => title).join(' · '),
      typical: teams.rows.map(([, , body]) => body).join(' · '),
      cta: teams.cta,
      href: paths.teams,
    },
    { ...t.services[0], href: paths.services },
  ];
  return (
    <section
      data-section='studio'
      id='studio'
      className='bl-rule bl-band-stone scroll-mt-24 py-10 sm:py-12 lg:py-14'
    >
      <div className='bl-container'>
        <SectionHeading
          title={t.title}
          accentWords={[...t.accent]}
          className='text-left [&_.bl-display]:justify-start [&_.bl-kicker]:justify-start'
        />

        <div className='mt-5 grid gap-2 sm:mt-6 sm:gap-2.5 md:grid-cols-3'>
          {services.map(({ title, body, typical, cta, href }, index) => (
            <Link
              key={title}
              href={href}
              aria-label={cta}
              className={mergeClasses(
                'bl-card bl-card-link group flex min-h-[10.5rem] flex-col border-t-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-[11.5rem] sm:p-5',
                index === 0 &&
                  'border-ink/30 border-t-ink bg-[hsl(var(--band-sky))] text-foreground',
                index === 1 &&
                  'border-brand/40 border-t-brand bg-brand-soft text-foreground',
                index === 2 &&
                  'border-ink/30 border-t-[hsl(var(--warm))] bg-[hsl(var(--band-peach))] text-foreground',
              )}
            >
              <p
                className={mergeClasses(
                  'font-mono text-[10px] font-semibold uppercase tracking-[0.12em]',
                  'text-brand-text',
                )}
              >
                0{index + 1} ·{' '}
                {index === 0
                  ? 'Optimise AI'
                  : index === 1
                    ? teams.kicker
                    : 'Build'}
              </p>
              <div className='mt-2.5 flex items-start justify-between gap-4 sm:mt-3 sm:block'>
                <h3 className='bl-display text-2xl leading-[0.95] text-current sm:text-3xl'>
                  {title}
                </h3>
                <ArrowUpRight
                  aria-hidden='true'
                  className='mt-0.5 h-5 w-5 shrink-0 sm:hidden'
                />
              </div>
              <p
                className={mergeClasses(
                  'mt-2 text-[13px] leading-snug sm:mt-3 sm:text-sm',
                  'text-current/70',
                )}
              >
                {body}
              </p>
              <p
                className={mergeClasses(
                  'mt-1.5 hidden text-[11px] leading-snug sm:block',
                  'text-current/60',
                )}
              >
                {typical}
              </p>
              <span
                className={mergeClasses(
                  'mt-auto hidden items-center justify-between border-t pt-2.5 text-sm font-semibold sm:inline-flex',
                  'border-current/30 text-current',
                )}
              >
                {cta}
                <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </span>
            </Link>
          ))}
        </div>

        <div className='mt-8 grid gap-5 border-t border-ink/20 pt-6 sm:mt-10 sm:pt-8 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-8'>
          <div>
            <p className='bl-kicker'>{t.learning.kicker}</p>
            <h3 className='bl-display mt-3 max-w-[18ch] text-3xl leading-[0.98] text-foreground sm:text-4xl'>
              {t.learning.title}
            </h3>
          </div>
          <ConsciousAiHome dict={dict} embedded />
        </div>
      </div>
    </section>
  );
}

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
            <article
              key={title}
              className={mergeClasses(
                'group relative flex min-h-[8.25rem] flex-col rounded-[1.125rem] border p-4 transition-[transform,box-shadow] duration-300 focus-within:-translate-y-1 hover:-translate-y-1 motion-reduce:transition-none sm:min-h-[10.5rem] sm:p-5',
                index === 0 && 'border-brand bg-brand text-ink',
                index === 1 && 'border-brand bg-brand-soft text-foreground',
                index === 2 && 'border-ink/30 bg-[hsl(var(--band-sky))] text-foreground',
              )}
            >
              <p
                className={mergeClasses(
                  'font-mono text-[10px] font-semibold uppercase tracking-[0.08em]',
                  index === 0 && 'text-ink/65',
                  index === 1 && 'text-brand-text',
                  index === 2 && 'text-brand-text',
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
                <h3
                  className={mergeClasses(
                    'bl-display text-2xl leading-[0.95] sm:text-3xl',
                    index === 0 ? 'text-ink' : 'text-current',
                  )}
                >
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
                  index === 0 ? 'text-ink/80' : 'text-current/70',
                )}
              >
                {body}
              </p>
              <p
                className={mergeClasses(
                  'mt-1.5 hidden text-[11px] leading-snug sm:block',
                  index === 0 ? 'text-ink/65' : 'text-current/60',
                )}
              >
                {typical}
              </p>
              <Link
                href={href}
                aria-label={cta}
                className='absolute inset-0 z-10 rounded-[1.125rem] sm:hidden'
              />
              <Link
                href={href}
                className={mergeClasses(
                  'relative z-20 mt-auto hidden items-center justify-between border-t pt-2.5 text-sm font-semibold transition-colors sm:inline-flex',
                  index === 0
                    ? 'border-ink/25 text-ink hover:text-brand-text'
                    : 'border-current/20 text-current hover:opacity-65',
                )}
              >
                {cta}
                <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </Link>
            </article>
          ))}
        </div>

        <div className='mt-8 max-w-3xl border-t border-ink/20 pt-6 sm:mt-10 sm:pt-8'>
          <p className='bl-kicker'>{t.learning.kicker}</p>
          <h3 className='bl-display mt-3 max-w-[18ch] text-3xl leading-[0.98] text-foreground sm:text-4xl'>
            {t.learning.title}
          </h3>
        </div>
        <ConsciousAiHome dict={dict} embedded />
      </div>
    </section>
  );
}

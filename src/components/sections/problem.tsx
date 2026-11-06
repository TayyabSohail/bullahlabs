import { ArrowUpRight } from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import type { Dictionary } from '@/i18n/dictionaries/en';

interface ProblemProps {
  dict: Dictionary;
}

/**
 * The problem people arrive with, right after the origin story. The studio's
 * answer follows in its own section, so the problem is allowed to be clear.
 */
export function Problem({ dict }: ProblemProps) {
  const t = dict.problem;
  const stats = [
    ...t.impact.powerStats,
    {
      value: t.impact.water.value,
      eyebrow: t.impact.water.eyebrow,
      label: t.impact.water.title,
    },
  ];

  return (
    <section
      data-section='problem'
      className='bl-section bl-rule bl-band-stone'
    >
      <div className='bl-container'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-4 max-w-[16ch] text-display-lg text-foreground'
          />
        </div>

        {/* A full evidence panel, deliberately unlike the surrounding CTA.
            The figures are the headline; their context remains immediately
            available rather than being buried in a generic card. */}
        <Reveal
          delay={0.15}
          className='mt-7 min-w-0 rounded-[2rem] bg-ink p-5 text-white sm:p-8'
        >
          <div className='grid gap-7 border-b border-white/20 pb-6 sm:pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:gap-14'>
            <div>
              <p className='bl-kicker text-brand-2'>{t.impact.label}</p>
              <h3 className='bl-display mt-3 max-w-[16ch] text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl'>
                {t.impact.kicker}
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-5 lg:pt-1'>
              <p className='max-w-[34ch] font-display text-xl leading-snug text-white sm:text-2xl'>
                {t.impact.intro}
              </p>
              <a
                href={t.impact.sourceUrl}
                target='_blank'
                rel='noreferrer'
                className='group inline-flex w-fit items-center gap-2 border-b border-brand pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-2'
              >
                {t.impact.sourceLabel}
                <ArrowUpRight className='h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </a>
            </div>
          </div>
          <dl className='mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={
                  index === 0
                    ? 'flex min-h-[10.5rem] flex-col justify-between rounded-2xl bg-[#8ce0c3] p-4 text-ink sm:min-h-48 sm:p-6'
                    : index === 1
                      ? 'flex min-h-[10.5rem] flex-col justify-between rounded-2xl bg-[hsl(var(--band-peach))] p-4 text-ink sm:min-h-48 sm:p-6'
                      : index === 2
                        ? 'flex min-h-[10.5rem] flex-col justify-between rounded-2xl bg-[#315a50] p-4 sm:min-h-48 sm:p-6'
                        : 'flex min-h-[10.5rem] flex-col justify-between rounded-2xl bg-[hsl(var(--brand-soft))] p-4 text-ink sm:min-h-48 sm:p-6'
                }
              >
                <dt
                  className={
                    index === 0 || index === 1 || index === 3
                      ? 'text-sm font-semibold leading-snug text-ink/75 sm:text-base'
                      : 'text-sm font-semibold leading-snug text-white/80 sm:text-base'
                  }
                >
                  {stat.eyebrow}
                </dt>
                <dd className='mt-5 sm:mt-8'>
                  <span
                    className={
                      index === 0 || index === 1 || index === 3
                        ? 'bl-display block text-[1.8rem] leading-[0.9] text-ink sm:text-4xl lg:text-[2.7rem]'
                        : 'bl-display block text-[1.8rem] leading-[0.9] text-white sm:text-4xl lg:text-[2.7rem]'
                    }
                  >
                    {stat.value}
                  </span>
                  <span
                    className={
                      index === 0 || index === 1 || index === 3
                        ? 'mt-3 block max-w-[28ch] text-[15px] font-medium leading-snug text-ink/80 sm:mt-5 sm:text-base'
                        : 'mt-3 block max-w-[28ch] text-[15px] font-medium leading-snug text-white/85 sm:mt-5 sm:text-base'
                    }
                  >
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

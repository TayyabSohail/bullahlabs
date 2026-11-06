import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ProblemProps {
  dict: Dictionary;
}

/**
 * The problem people arrive with, right after the hero, and the free answer
 * to it. Left: the headline, the pressure in a few lines, then the one-line
 * answer. Right: the free-resources plate and its direct way in. Under
 * both: the environmental cost of AI, four figures on one ruled card.
 */
export function Problem({ dict }: ProblemProps) {
  const t = dict.problem;
  const c = dict.consciousAi;
  const [pressure, skill] = c.paragraphs;
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
      <div className='bl-container grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(20rem,5fr)] lg:gap-x-16 lg:gap-y-8'>
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
          <Reveal delay={0.15}>
            <p className='mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {pressure}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className='mt-5 max-w-2xl border-l-2 border-brand pl-4 text-lg font-medium leading-snug text-foreground sm:text-xl'>
              {skill}
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className='bl-card bl-card-ink relative min-w-0 self-start p-5 text-white sm:p-6 lg:mt-8'
        >
          <p className='bl-kicker text-white/60'>{c.closingKicker}</p>
          <h3 className='bl-display mt-3 max-w-[15ch] text-2xl leading-tight sm:text-3xl'>
            {c.closing}
          </h3>
          <Link
            href={paths.program}
            className='bl-btn bl-btn-primary mt-5 inline-flex h-12 items-center gap-3 px-5'
          >
            {c.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Reveal>

        {/* A full evidence panel, deliberately unlike the surrounding CTA.
            The figures are the headline; their context remains immediately
            available rather than being buried in a generic card. */}
        <Reveal
          delay={0.3}
          className='min-w-0 overflow-hidden border border-ink bg-ink text-white lg:col-span-2'
        >
          <div className='grid gap-7 border-b border-white/20 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:gap-14'>
            <div>
              <p className='bl-kicker text-brand-2'>{t.kicker}</p>
              <h3 className='bl-display mt-3 max-w-[16ch] text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl'>
                {t.impact.kicker}
              </h3>
            </div>
            <div className='flex flex-col justify-between gap-5 lg:pt-1'>
              <p className='text-sm leading-relaxed text-white/70 sm:text-base'>
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
          <dl className='grid divide-y divide-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4'>
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className='flex min-h-56 flex-col justify-between px-5 py-6 sm:px-6 sm:py-7'
              >
                <dt className='bl-label text-white/55'>
                  0{index + 1} / {stat.eyebrow}
                </dt>
                <dd className='mt-8'>
                  <span className='bl-display block text-3xl leading-[0.9] text-brand-2 sm:text-4xl lg:text-[2.7rem]'>
                    {stat.value}
                  </span>
                  <span className='mt-5 block max-w-[22ch] text-sm leading-relaxed text-white/70'>
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

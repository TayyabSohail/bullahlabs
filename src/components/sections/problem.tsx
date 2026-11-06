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

        {/* The environmental cost: one ruled card, a heading row, then four
            figures on a hairline grid. Two columns on a phone, four from lg. */}
        <Reveal delay={0.3} className='bl-card min-w-0 lg:col-span-2'>
          <div className='border-b border-ink px-4 py-3 sm:px-5'>
            <h3 className='bl-display text-xl text-foreground sm:text-2xl'>
              {t.impact.kicker}
            </h3>
          </div>
          <dl className='grid grid-cols-2 gap-px bg-ink/15 lg:grid-cols-4'>
            {stats.map((stat) => (
              <div key={stat.value} className='bg-surface p-4 sm:p-5'>
                <dt className='bl-label'>{stat.eyebrow}</dt>
                <dd>
                  <span className='bl-display mt-2 block text-xl leading-tight text-foreground sm:text-2xl'>
                    {stat.value}
                  </span>
                  <span className='mt-2 block text-xs leading-relaxed text-muted-foreground sm:text-sm'>
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

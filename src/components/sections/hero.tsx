import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';

import { paths } from '@/constants/paths';
import { getProgram } from '@/data/program';
import type { Dictionary } from '@/i18n/dictionaries/en';
import { DEFAULT_INTEREST } from '@/schema/contact';

interface HeroProps {
  dict: Dictionary;
}

/**
 * Opening section: what the company does in one headline and one sentence,
 * two actions, and three facts about the program. No illustration; the tier
 * and track counts are read from the program data so they cannot drift.
 */
export function Hero({ dict }: HeroProps) {
  const t = dict.hero;
  const { tiers, roleTracks } = getProgram(dict.locale);
  const lines = t.title.split('\n');
  const facts = [
    { value: t.facts.free.value, label: t.facts.free.label },
    { value: String(tiers.length), label: t.facts.tiers },
    { value: String(roleTracks.length), label: t.facts.tracks },
  ];

  return (
    <section className='border-b'>
      <div className='bl-container pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pt-48'>
        <Reveal>
          <p className='bl-kicker'>{t.badge}</p>
        </Reveal>

        {/* The title is two sentences on two lines; the second carries the accent. */}
        <Reveal delay={0.1}>
          <h1 className='bl-display mt-6 text-[clamp(2.4rem,6.4vw,5.5rem)] leading-[1] tracking-[-0.03em] text-ink'>
            {lines.map((line, index) => (
              <span
                key={line}
                className={index > 0 ? 'bl-accent block' : 'block'}
              >
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className='mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl'>
            {t.body}
          </p>
        </Reveal>

        <Reveal
          delay={0.4}
          className='mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'
        >
          <Link
            href={paths.program}
            className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.primary}
            <ArrowRight className='h-4 w-4' />
          </Link>
          <Link
            href={`${paths.contact}?service=${DEFAULT_INTEREST}`}
            className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 bg-white px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.secondary}
          </Link>
        </Reveal>

        <Reveal delay={0.5}>
          <dl className='mt-14 grid gap-px overflow-hidden border bg-line sm:mt-20 sm:grid-cols-3'>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className='flex items-baseline gap-4 bg-surface px-5 py-5 sm:flex-col sm:gap-2 sm:px-7 sm:py-7'
              >
                <dd className='bl-display text-3xl text-ink sm:text-4xl'>
                  {fact.value}
                </dd>
                <dt className='text-sm leading-snug text-muted-foreground'>
                  {fact.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

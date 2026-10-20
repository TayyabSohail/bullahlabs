import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { CourseSignup } from '@/components/course/course-signup';
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
 * answer. Right: the free-resources card with the way in and the notify-me
 * field. No figures here; those sit with the offices.
 */
export function Problem({ dict }: ProblemProps) {
  const t = dict.problem;
  const c = dict.consciousAi;
  const [pressure, skill] = c.paragraphs;

  return (
    <section className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(20rem,5fr)] lg:gap-16'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[16ch] text-display-lg text-foreground'
          />
          <Reveal delay={0.15}>
            <p className='mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {pressure}
            </p>
          </Reveal>
          <Reveal delay={0.25} className='text-center sm:text-left'>
            <p className='mt-8 max-w-2xl text-lg font-medium leading-snug text-foreground sm:border-l-2 sm:border-brand sm:pl-5 sm:text-xl'>
              {skill}
            </p>
          </Reveal>
          <Reveal delay={0.35} className='text-center sm:text-left'>
            <Link
              href={paths.program}
              className='bl-btn bl-btn-primary mt-7 inline-flex h-12 items-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
            >
              {c.cta}
              <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className='bl-card bl-card-ink bl-grid-surface relative min-w-0 self-start p-6 text-white sm:p-8'
        >
          <div className='relative'>
            <p className='bl-kicker text-white/60'>{c.closingKicker}</p>
            <h3 className='bl-display mt-4 max-w-[15ch] text-3xl leading-tight sm:text-4xl'>
              {c.closing}
            </h3>
            <Link
              href={paths.program}
              className='bl-btn bl-btn-primary mx-auto mt-7 flex h-14 w-fit items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:mx-0'
            >
              {c.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <div className='mt-8 border-t border-white/15 pt-6'>
              <p className='text-sm leading-relaxed text-white/65'>
                {c.notifyNote}
              </p>
              <CourseSignup
                dict={dict}
                source='home:problem'
                variant='inline'
                tone='dark'
                submitLabel={c.notify}
                className='mt-5'
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

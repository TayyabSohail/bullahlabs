import { ArrowUpRight, Droplets } from 'lucide-react';
import Link from 'next/link';

import { CourseSignup } from '@/components/course/course-signup';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { Badge } from '@/components/ui/badge';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ProblemProps {
  dict: Dictionary;
}

/**
 * The problem people arrive with, right after the hero, and the free answer
 * to it. Left: the headline, the pressure in a few lines, then the one-line
 * answer, followed by a plain-language view of AI's environmental impact.
 * Right: the free-resources card with the way in and the notify-me field.
 */
export function Problem({ dict }: ProblemProps) {
  const t = dict.problem;
  const c = dict.consciousAi;
  const [pressure, skill] = c.paragraphs;

  return (
    <section className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(20rem,5fr)] lg:gap-x-16 lg:gap-y-8'>
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
          <Reveal delay={0.45} className='text-center sm:text-left'>
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
        <Reveal delay={0.35} className='min-w-0 lg:col-span-2'>
          <div className='border border-foreground bg-[#fffdf7] p-4 shadow-[5px_5px_0_hsl(var(--foreground))] sm:p-5'>
            <div className='border-b-2 border-foreground pb-3'>
              <Badge className='border border-foreground bg-[#f4cc67] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground'>
                Reality check
              </Badge>
              <h3 className='bl-display mt-2 text-2xl text-foreground sm:text-3xl'>
                {t.impact.kicker}
              </h3>
            </div>

            <div className='mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4'>
              {[
                ...t.impact.powerStats,
                {
                  value: t.impact.water.value,
                  eyebrow: t.impact.water.eyebrow,
                  label: t.impact.water.title,
                },
              ].map((stat, index) => (
                <article
                  key={stat.value}
                  className='relative border border-foreground bg-background p-3'
                >
                  <span className='absolute right-3 top-2 font-mono text-3xl font-semibold text-foreground/10'>
                    0{index + 1}
                  </span>
                  <p className='max-w-[14ch] font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-muted-foreground'>
                    {stat.eyebrow}
                  </p>
                  <p className='bl-display mt-3 text-2xl text-foreground sm:text-3xl'>
                    {stat.value}
                  </p>
                  <p className='mt-2 border-t border-foreground/20 pt-2 text-xs leading-relaxed text-foreground'>
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            <div className='mt-2 flex items-start gap-2 border border-foreground bg-[#d8f2e3] px-3 py-2'>
              <Droplets
                className='mt-0.5 h-4 w-4 shrink-0 text-brand-text'
                aria-hidden='true'
              />
              <p className='text-xs leading-relaxed text-foreground'>
                <span className='font-semibold'>
                  {t.impact.water.globalValue}:
                </span>{' '}
                {t.impact.water.globalLabel}
              </p>
            </div>

            <div className='mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-foreground/25 pt-2'>
              <span className='font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground'>
                Research
              </span>
              {t.impact.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target='_blank'
                  rel='noreferrer'
                  className='font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-brand-text underline decoration-brand/45 underline-offset-4 transition-colors hover:text-foreground'
                >
                  {source.label}{' '}
                  <ArrowUpRight className='inline h-3 w-3' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

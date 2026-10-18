import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { CourseSignup } from '@/components/course/course-signup';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface ConsciousAiIntroProps {
  dict: Dictionary;
  className?: string;
}

/**
 * The homepage pitch for Conscious AI: the pressure everyone feels, what the
 * free resources teach, and beside it an ink card with the promise, the
 * link to the program page and the field for hearing when the modules open.
 */
export function ConsciousAiIntro({ dict, className }: ConsciousAiIntroProps) {
  const t = dict.consciousAi;

  return (
    <section
      className={cn('bl-section bl-rule bl-band-stone', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker bl-kicker-numbered'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[20ch] text-display-md text-foreground'
          />
          <Reveal delay={0.2} className='mt-7 max-w-2xl space-y-5'>
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  'leading-relaxed',
                  index === 1
                    ? 'border-l-2 border-brand pl-5 text-lg font-medium text-foreground sm:text-xl'
                    : 'text-base text-muted-foreground sm:text-lg',
                )}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={0.25}
          className='bl-card bl-card-ink bl-grid-surface relative flex flex-col justify-between p-6 text-white sm:p-8 lg:p-10'
        >
          <div className='relative'>
            <p className='bl-kicker text-white/60'>{t.closingKicker}</p>
            <p className='bl-display mt-4 text-2xl leading-tight text-white sm:text-3xl lg:text-4xl'>
              {t.closing}
            </p>
            <Link
              href={paths.program}
              className='bl-btn bl-btn-primary mt-8 inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='relative mt-10 border-t border-white/15 pt-6'>
            <p className='text-sm leading-relaxed text-white/65'>
              {t.notifyNote}
            </p>
            <CourseSignup
              dict={dict}
              source='home:intro'
              variant='inline'
              tone='dark'
              className='mt-4'
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

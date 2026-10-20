import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { CourseSignup } from '@/components/course/course-signup';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** What we do about the hero's problem: the free course, and help for teams. The facts live in Numbers. */
export function ConsciousAiHome({ dict }: { dict: Dictionary }) {
  return (
    <section id='conscious-ai' className='bl-section bl-rule bl-band-stone scroll-mt-24'>
      <div className='bl-container'>
        <p className='bl-kicker'>Conscious AI</p>
        <div className='mt-5 max-w-3xl'>
          <TextReveal
            as='h2'
            text='Using AI well is a skill. Not a subscription.'
            accentWords={[6, 7, 8]}
            className='bl-display text-display-lg text-foreground'
          />
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            Free AI guidance for better tool choices. Team training for real work.
          </p>
          <Link
            href={paths.program}
            className='bl-btn bl-btn-primary mx-auto mt-7 flex h-12 w-fit items-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:mx-0'
          >
            {dict.consciousAi.cta}
            <ArrowUpRight className='h-3.5 w-3.5' />
          </Link>
        </div>

        <div className='mt-10 grid gap-5 lg:grid-cols-2'>
          <div className='bl-card bl-card-ink bl-grid-surface relative flex p-5 text-white sm:p-6'>
            <div className='relative flex w-full flex-col'>
              <p className='bl-kicker text-white/60'>Free course · coming soon</p>
              <h3 className='bl-display mt-4 text-3xl leading-tight'>Learn AI that helps.</h3>
              <p className='mt-3 max-w-md text-sm leading-relaxed text-white/65 sm:min-h-10'>Choose the right tool, use it well, and skip AI when simpler works.</p>
              <CourseSignup dict={dict} source='home:projects' variant='inline' tone='dark' submitLabel='Notify me' className='mt-6' />
            </div>
          </div>
          <div className='bl-card bl-card-tint flex flex-col p-5 sm:p-6'>
            <p className='bl-kicker'>For teams</p>
            <h3 className='bl-display mt-4 max-w-[15ch] text-3xl leading-tight text-foreground'>AI for your work.</h3>
            <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:min-h-10'>Tell us the task. We’ll find what helps, what to avoid, and where AI fits.</p>
            <div className='mt-6'>
              <Link
                href={`${paths.contact}?service=team`}
                className='bl-btn bl-btn-primary inline-flex h-12 w-40 items-center justify-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
              >
                Talk to us <ArrowUpRight className='h-3.5 w-3.5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <p className='font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-text'>Free course</p>
          <TextReveal
            as='h2'
            text='Using AI well is a skill. Not a subscription.'
            accentWords={[6, 7, 8]}
            className='bl-display mt-5 text-display-lg text-foreground'
          />
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            We teach it, free: how to choose the right tool, use it well, and leave it alone when a simpler answer is better. Teams get the same on their real work.
          </p>
        </div>

        <div className='mt-10 grid gap-5 lg:grid-cols-2'>
          <div className='bl-card bl-card-ink bl-grid-surface relative p-6 text-white sm:p-8'>
            <div className='relative'>
              <p className='bl-kicker text-white/60'>Free course · coming soon</p>
              <h3 className='bl-display mt-4 text-3xl leading-tight'>Learn what to use.</h3>
              <p className='mt-3 max-w-md text-sm leading-relaxed text-white/65'>Practical lessons for choosing the right tool, prompting clearly, and skipping AI when it is not needed.</p>
              <CourseSignup dict={dict} source='home:projects' variant='inline' tone='dark' submitLabel='Notify me' className='mt-6' />
            </div>
          </div>
          <div className='bl-card bl-card-tint flex flex-col p-6 sm:p-8'>
            <p className='bl-kicker'>For teams</p>
            <h3 className='bl-display mt-4 max-w-[15ch] text-3xl leading-tight text-foreground'>Need an answer for your work?</h3>
            <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground'>Tell us the task. We’ll help you decide whether AI belongs there, what fits, and what to avoid.</p>
            <div className='mt-auto pt-7'>
              <Link
                href={`${paths.contact}?service=team`}
                className='bl-btn bl-btn-primary inline-flex h-12 items-center justify-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'
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

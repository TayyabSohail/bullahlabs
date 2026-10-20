import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { CourseSignup } from '@/components/course/course-signup';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** The compact, high-contrast entry point to the free Conscious AI course. */
export function FreeResources({ dict }: { dict: Dictionary }) {
  return (
    <section className='bl-container py-10 sm:py-14'>
      <div className='bl-card bl-card-ink bl-grid-surface relative max-w-3xl p-7 text-white sm:p-10'>
        <div className='relative'>
          <p className='bl-kicker text-white/60'>Free resources</p>
          <h2 className='bl-display mt-5 max-w-[15ch] text-4xl leading-tight sm:text-5xl'>Work smarter with AI. Waste less. Stay in control.</h2>
          <Link href={paths.program} className='bl-btn bl-btn-primary mt-8 inline-flex h-14 items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'>Explore Conscious AI <ArrowUpRight className='h-4 w-4' /></Link>
          <div className='mt-10 border-t border-white/15 pt-6'>
            <p className='max-w-xl text-sm leading-relaxed text-white/65'>The free modules are in the making. Leave your email and we’ll tell you the day they open.</p>
            <CourseSignup dict={dict} source='home:free-resources' variant='inline' tone='dark' submitLabel='Notify me' className='mt-5 max-w-xl' />
          </div>
        </div>
      </div>
    </section>
  );
}

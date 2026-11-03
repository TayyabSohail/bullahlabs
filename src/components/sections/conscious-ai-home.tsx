import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { CourseSignup } from '@/components/course/course-signup';
import { TextReveal } from '@/components/motion/text-reveal';
import { TeamsOfferCard } from '@/components/sections/offer-card';

import { paths } from '@/constants/paths';
import { leadInstructor as instructor } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** What we do about the hero's problem: the free course, and help for teams. The facts live in Numbers. */
export function ConsciousAiHome({ dict }: { dict: Dictionary }) {
  const facts = dict.programPage.course.preview.points;

  return (
    <section
      id='conscious-ai'
      className='bl-section bl-rule bl-band-stone scroll-mt-24'
    >
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
            Free AI guidance for better tool choices. Team training for real
            work.
          </p>
        </div>

        {/* Two equal-height plates: the course (ink) and help for teams (tint).
            Each pins its action to the bottom so the rows line up. */}
        <div className='mt-10 grid gap-5 lg:grid-cols-[1.25fr_1fr]'>
          <div className='bl-card bl-card-ink relative isolate flex flex-col overflow-hidden p-5 text-white sm:p-6'>
            <p className='bl-kicker text-white/60'>Free course · coming soon</p>
            <h3 className='bl-display mt-4 text-3xl leading-tight lg:text-4xl'>
              Learn AI that helps.
            </h3>
            <p className='mt-3 max-w-md text-sm leading-relaxed text-white/65 lg:text-base'>
              Choose the right tool, use it well, and skip AI when simpler
              works.
            </p>

            {/* The instructor takes whatever height the teams plate leaves.
                The portrait keeps the photo's own 800x955 proportions, so its
                width follows the plate height and nothing gets cut off. */}
            <Link
              href={`${paths.program}#course`}
              aria-label={`${dict.program.popup.taughtBy} ${instructor.name}`}
              className='group mt-6 flex flex-1 items-stretch border border-white/20 bg-white/[0.04] transition-colors hover:border-brand/60 hover:bg-white/[0.07]'
            >
              <span className='relative block aspect-[800/955] min-h-[9rem] w-auto min-w-[7rem] shrink-0 overflow-hidden border-r border-white/20'>
                <Image
                  src={instructor.image}
                  alt={`Portrait of ${instructor.name}`}
                  fill
                  sizes='(min-width: 1024px) 220px, (min-width: 640px) 180px, 140px'
                  className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                />
              </span>
              <span className='flex min-w-0 flex-1 flex-col justify-center p-3.5 sm:p-5'>
                <span className='block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55'>
                  {dict.program.popup.taughtBy}
                </span>
                <span className='bl-display mt-1.5 block text-xl leading-none text-white transition-colors group-hover:text-brand sm:text-[1.75rem]'>
                  {instructor.name}
                </span>
                <span className='mt-3 flex items-center gap-2.5 text-white'>
                  <HarvardShield className='h-7 w-auto shrink-0 sm:h-8' />
                  <span className='font-display text-[13px] font-bold leading-tight sm:text-base'>
                    {instructor.school}
                  </span>
                </span>
              </span>
            </Link>

            {/* The facts as one quiet ruled strip above the form at the foot:
                the same hairline as the instructor plate, no green fills. */}
            <div className='mt-6'>
              <ul className='flex flex-wrap gap-x-5 gap-y-1.5 border-t border-white/20 pt-3'>
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className='flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70'
                  >
                    <span
                      aria-hidden='true'
                      className='block h-1.5 w-1.5 bg-brand'
                    />
                    {fact}
                  </li>
                ))}
              </ul>
              <CourseSignup
                dict={dict}
                source='home:projects'
                variant='inline'
                tone='dark'
                submitLabel='Add to waitlist'
                consent={false}
                className='mt-3'
              />
            </div>
          </div>

          <TeamsOfferCard className='bl-card-tint bl-card-lift p-5 sm:p-6' />
        </div>

        {/* The way into the whole programme: one rail across the width. */}
        <Link
          href={paths.program}
          className='bl-card bl-card-lift group mt-5 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6'
        >
          <span className='min-w-0'>
            <span className='bl-kicker block'>Conscious AI</span>
            <span className='bl-display mt-2 block text-xl leading-tight text-foreground sm:text-2xl'>
              The course, the numbers, and your AI profile.
            </span>
          </span>
          <span className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center justify-center gap-2.5 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'>
            {dict.consciousAi.cta}
            <ArrowUpRight className='h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
          </span>
        </Link>
      </div>
    </section>
  );
}

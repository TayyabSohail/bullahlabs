import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { CourseSignup } from '@/components/course/course-signup';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

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
          <Link
            href={paths.program}
            className='bl-btn bl-btn-primary mx-auto mt-7 flex h-12 w-fit items-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:mx-0'
          >
            {dict.consciousAi.cta}
            <ArrowUpRight className='h-3.5 w-3.5' />
          </Link>
        </div>

        <div className='mt-10 grid gap-5 lg:grid-cols-[1.25fr_1fr]'>
          {/* The free course, taught by Umair: text and form, portrait beside. */}
          <div className='bl-card bl-card-ink relative isolate grid overflow-hidden p-0 text-white sm:grid-cols-[minmax(0,1fr)_10.5rem]'>
            <div className='bl-grid-surface relative flex flex-col justify-center p-5 sm:p-6'>
              <p className='bl-kicker text-white/60'>
                Free course · coming soon
              </p>
              <h3 className='bl-display mt-4 text-3xl leading-tight'>
                Learn AI that helps.
              </h3>
              <p className='mt-3 max-w-md text-sm leading-relaxed text-white/65'>
                Choose the right tool, use it well, and skip AI when simpler
                works.
              </p>

              {/* On phones the instructor rides as a byline; wider, he gets the panel. */}
              <Link
                href={`${paths.program}#course`}
                className='mt-4 flex items-center gap-3 self-start border border-white/20 bg-white/[0.05] py-1.5 pl-1.5 pr-3 transition-colors hover:border-brand/60 hover:bg-white/[0.09] sm:hidden'
              >
                <Image
                  src={instructor.image}
                  alt=''
                  width={72}
                  height={72}
                  className={cn(
                    'h-9 w-9 shrink-0 border border-white/30 object-cover',
                    instructor.focus,
                  )}
                />
                <span className='min-w-0 leading-tight'>
                  <span className='block font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55'>
                    {dict.program.popup.taughtBy}
                  </span>
                  <span className='block font-display text-[15px] font-semibold text-white'>
                    {instructor.name}
                  </span>
                </span>
              </Link>

              <ul className='mt-5 flex flex-wrap gap-1.5'>
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className='border border-white/25 bg-white/[0.06] px-2 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/85'
                  >
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
                className='mt-5'
              />
            </div>

            <Link
              href={`${paths.program}#course`}
              aria-label={`${dict.program.popup.taughtBy} ${instructor.name}`}
              className='group relative hidden min-h-[18rem] border-l border-white/15 sm:block'
            >
              <Image
                src={instructor.image}
                alt={`Portrait of ${instructor.name}`}
                fill
                sizes='168px'
                className={cn(
                  'object-cover transition-transform duration-500 group-hover:scale-[1.03]',
                  instructor.focus,
                )}
              />
              <span
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent'
              />
              <span className='absolute inset-x-0 bottom-0 p-4'>
                <span className='block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60'>
                  {dict.program.popup.taughtBy}
                </span>
                <span className='bl-display mt-1 block text-[1.3rem] leading-none text-white'>
                  {instructor.name}
                </span>
                <span className='mt-2 flex items-start gap-1.5 text-[11px] leading-tight text-white/75'>
                  <HarvardShield className='mt-px h-4 w-auto shrink-0' />
                  <span>{instructor.school}</span>
                </span>
              </span>
            </Link>
          </div>

          <div className='bl-card bl-card-tint flex flex-col p-5 sm:p-6'>
            <p className='bl-kicker'>For teams</p>
            <h3 className='bl-display mt-4 max-w-[15ch] text-3xl leading-tight text-foreground'>
              AI for your work.
            </h3>
            <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground'>
              Tell us the task. We’ll find what helps, what to avoid, and where
              AI fits.
            </p>
            <ul className='mt-5 divide-y divide-ink/15 border-y border-ink/15 text-[13px] font-medium text-foreground'>
              <li className='py-2'>Training on your team’s real tasks</li>
              <li className='py-2'>Tool choice, cost and what to skip</li>
              <li className='py-2'>Checking what AI gives back</li>
            </ul>
            <div className='mt-auto pt-6'>
              <Link
                href={paths.contact}
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

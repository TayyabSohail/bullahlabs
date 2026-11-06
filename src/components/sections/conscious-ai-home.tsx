import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { CourseSignup } from '@/components/course/course-signup';
import { TextReveal } from '@/components/motion/text-reveal';
import { TeamsOfferCard } from '@/components/sections/offer-card';

import { paths } from '@/constants/paths';
import { getLeadInstructor } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** What we do about the hero's problem: the free course, and help for teams. The facts live in Numbers. */
export function ConsciousAiHome({ dict }: { dict: Dictionary }) {
  const t = dict.consciousAiHome;
  const facts = dict.programPage.course.preview.points;
  const instructor = getLeadInstructor(dict.locale);

  return (
    <section
      id='conscious-ai'
      className='bl-section bl-rule bl-band-stone scroll-mt-24'
    >
      <div className='bl-container'>
        <p className='bl-kicker'>{t.kicker}</p>
        <div className='mt-4 max-w-3xl'>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display text-display-lg text-foreground'
          />
          <p className='mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {t.description}
          </p>
        </div>

        {/* Two equal-height plates: the course (ink) and help for teams (tint).
            Each pins its action to the bottom so the rows line up. */}
        <div className='mt-6 grid gap-4 sm:mt-8 lg:grid-cols-[1.25fr_1fr] lg:gap-5'>
          <div className='bl-card bl-card-ink relative isolate flex flex-col overflow-hidden p-5 text-white sm:p-6'>
            <p className='bl-kicker text-white/60'>{t.course.kicker}</p>
            <h3 className='bl-display mt-3 text-2xl leading-tight sm:text-3xl lg:text-4xl'>
              {t.course.title}
            </h3>
            <p className='mt-2 max-w-md text-sm leading-relaxed text-white/65 lg:text-base'>
              {t.course.body}
            </p>

            {/* The instructor takes whatever height the teams plate leaves.
                The portrait keeps the photo's own 800x955 proportions, so its
                width follows the plate height and nothing gets cut off. */}
            <Link
              href={`${paths.program}#course`}
              aria-label={`${dict.program.popup.taughtBy} ${instructor.name}`}
              className='group mt-5 flex flex-1 items-stretch border border-white/20 bg-white/[0.04] transition-colors hover:border-white/50 hover:bg-white/[0.07]'
            >
              <span className='relative block aspect-[800/955] min-h-[8rem] w-auto min-w-[6.5rem] shrink-0 overflow-hidden border-r border-white/20'>
                <Image
                  src={instructor.image}
                  alt={t.course.portraitAlt.replace('{name}', instructor.name)}
                  fill
                  sizes='(min-width: 1024px) 220px, (min-width: 640px) 180px, 140px'
                  className='object-cover'
                />
              </span>
              <span className='flex min-w-0 flex-1 flex-col justify-center p-3.5 sm:p-5'>
                <span className='bl-label block text-white/55'>
                  {dict.program.popup.taughtBy}
                </span>
                <span className='bl-display mt-1 block text-xl leading-none text-white transition-colors group-hover:text-brand-2 sm:text-[1.75rem]'>
                  {instructor.name}
                </span>
                <span className='mt-3 flex items-center gap-2.5 text-white'>
                  <HarvardShield className='h-7 w-auto shrink-0 sm:h-8' />
                  <span className='font-display text-[13px] font-semibold leading-tight sm:text-base'>
                    {instructor.school}
                  </span>
                </span>
              </span>
            </Link>

            {/* The facts as one quiet ruled strip above the form at the foot. */}
            <div className='mt-5'>
              <ul className='flex flex-wrap gap-x-4 gap-y-1 border-t border-white/20 pt-3'>
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className='bl-label flex items-center gap-2 text-white/70'
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
                submitLabel={t.course.submit}
                consent={false}
                className='mt-3'
              />
            </div>
          </div>

          <TeamsOfferCard
            dict={dict}
            className='bl-card-tint bl-card-lift p-5 sm:p-6'
          />
        </div>

        {/* The way into the whole programme: one rail across the width. */}
        <Link
          href={paths.program}
          className='bl-card bl-card-lift group mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between lg:mt-5'
        >
          <span className='min-w-0'>
            <span className='bl-kicker'>{t.rail.kicker}</span>
            <span className='bl-display mt-1 block text-xl leading-tight text-foreground sm:text-2xl'>
              {t.rail.title}
            </span>
          </span>
          <span className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center justify-center gap-2.5 px-5'>
            {dict.consciousAi.cta}
            <ArrowUpRight className='h-3.5 w-3.5' />
          </span>
        </Link>
      </div>
    </section>
  );
}

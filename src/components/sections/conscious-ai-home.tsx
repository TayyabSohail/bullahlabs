import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { CourseSignup } from '@/components/course/course-signup';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';
import { getLeadInstructor } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** A focused course moment beneath the three studio options. */
export function ConsciousAiHome({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  /** Lets the course card sit inside the studio section without repeating its heading. */
  embedded?: boolean;
}) {
  const t = dict.consciousAiHome;
  const facts = dict.programPage.course.preview.points;
  const instructor = getLeadInstructor(dict.locale);

  return (
    <section
      id={embedded ? undefined : 'conscious-ai'}
      className={
        embedded ? 'h-full' : 'bl-section bl-rule bl-band-stone scroll-mt-24'
      }
    >
      <div className={embedded ? '' : 'bl-container'}>
        {!embedded && (
          <div className='grid gap-5 border-b border-ink pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end'>
            <div>
              <p className='bl-kicker'>{t.kicker}</p>
              <TextReveal
                as='h2'
                text={t.title}
                accentWords={[...t.accent]}
                className='bl-display mt-4 max-w-[17ch] text-display-lg text-foreground'
              />
            </div>
          </div>
        )}

        <div
          className={
            embedded
              ? 'h-full max-w-none border border-ink'
              : 'mt-6 max-w-3xl border border-ink lg:mt-8'
          }
        >
          <Reveal className='flex h-full min-w-0 flex-col bg-ink p-5 text-white sm:p-8 lg:p-10'>
            <p className='bl-kicker text-brand-2'>{t.course.kicker}</p>
            <h3 className='bl-display mt-4 max-w-[12ch] text-3xl leading-[0.92] sm:text-4xl'>
              {t.course.title}
            </h3>
            <p className='mt-5 max-w-[36ch] text-base leading-relaxed text-white/70 sm:text-lg'>
              {t.course.body}
            </p>

            <Link
              href={`${paths.program}#course`}
              aria-label={`${dict.program.popup.taughtBy} ${instructor.name}`}
              className='group mt-8 grid max-w-xl grid-cols-[5.5rem_1fr] py-4 transition-colors sm:grid-cols-[7rem_1fr]'
            >
              <span className='relative row-span-2 aspect-[800/955] overflow-hidden'>
                <Image
                  src={instructor.image}
                  alt={t.course.portraitAlt.replace('{name}', instructor.name)}
                  fill
                  sizes='(min-width: 1024px) 180px, 140px'
                  className='object-cover'
                />
              </span>
              <span className='self-end px-4 sm:px-5'>
                <span className='bl-label text-white/55'>
                  {dict.program.popup.taughtBy}
                </span>
                <span className='bl-display mt-1 block text-2xl leading-none text-white group-hover:text-brand-text sm:text-3xl'>
                  {instructor.name}
                </span>
              </span>
              <span className='flex items-center gap-2 px-4 pt-3 sm:px-5'>
                <HarvardShield className='h-7 w-auto shrink-0' />
                <span className='font-display text-sm font-semibold leading-tight text-white/80'>
                  {instructor.school}
                </span>
              </span>
            </Link>

            <div className='mt-auto pt-8'>
              <ul className='flex flex-wrap gap-x-4 gap-y-2 border-t border-white/20 pt-4'>
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className='bl-label flex items-center gap-2 text-white/70'
                  >
                    <span aria-hidden='true' className='h-1.5 w-1.5 bg-brand' />
                    {fact}
                  </li>
                ))}
              </ul>
              <CourseSignup
                dict={dict}
                source='home:conscious-ai'
                variant='inline'
                tone='dark'
                submitLabel={t.course.submit}
                consent={false}
                className='mt-4 max-w-xl'
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

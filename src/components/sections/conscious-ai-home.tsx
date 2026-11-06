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
          <Reveal className='grid h-full min-w-0 gap-6 bg-[hsl(var(--surface-2))] p-5 text-ink sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(19rem,1.1fr)] lg:gap-10 lg:p-8'>
            <div className='flex flex-col justify-center'>
              <p className='bl-kicker text-brand-text'>{t.course.kicker}</p>
              <h3 className='bl-display mt-4 max-w-[13ch] text-3xl leading-[0.96] sm:text-4xl'>
                {t.course.title}
              </h3>
              <p className='mt-4 max-w-[34ch] text-sm leading-relaxed text-muted-foreground sm:text-base'>
                {t.course.body}
              </p>
              <ul className='mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink/20 pt-3'>
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className='bl-label flex items-center gap-2 text-ink/75'
                  >
                    <span aria-hidden='true' className='h-1.5 w-1.5 bg-brand' />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex min-w-0 flex-col justify-center border-t border-ink/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0'>
              <Link
                href={`${paths.program}#course`}
                aria-label={`${dict.program.popup.taughtBy} ${instructor.name}`}
                className='group grid max-w-xl grid-cols-[5rem_1fr] items-center transition-colors sm:grid-cols-[6rem_1fr] lg:max-w-none'
              >
                <span className='relative row-span-2 aspect-[4/4.5] overflow-hidden'>
                  <Image
                    src={instructor.image}
                    alt={t.course.portraitAlt.replace(
                      '{name}',
                      instructor.name,
                    )}
                    fill
                    sizes='(min-width: 1024px) 120px, 96px'
                    className='object-cover'
                  />
                </span>
                <span className='self-end px-4 sm:px-5'>
                  <span className='bl-label text-muted-foreground'>
                    {dict.program.popup.taughtBy}
                  </span>
                  <span className='bl-display mt-1 block text-xl leading-none text-ink group-hover:text-brand-text sm:text-2xl'>
                    {instructor.name}
                  </span>
                </span>
                <span className='flex items-center gap-2 px-4 pt-3 sm:px-5'>
                  <HarvardShield className='h-7 w-auto shrink-0' />
                  <span className='font-display text-sm font-semibold leading-tight text-ink/80'>
                    {instructor.school}
                  </span>
                </span>
              </Link>
              <CourseSignup
                dict={dict}
                source='home:conscious-ai'
                variant='inline'
                tone='light'
                submitLabel={t.course.submit}
                consent={false}
                className='mt-5 max-w-xl lg:max-w-none'
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

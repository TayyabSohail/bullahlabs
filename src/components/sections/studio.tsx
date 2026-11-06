import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The studio offer, distilled to the three ways we help. Three ruled cards
 * from md; on a phone the same three as rows on one rule, so the section is
 * one screen, not three.
 */
export function Studio({ dict }: { dict: Dictionary }) {
  const t = dict.studio;
  return (
    <section
      data-section='studio'
      id='studio'
      className='bl-section bl-rule bl-band-stone scroll-mt-24'
    >
      <div className='bl-container'>
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          accentWords={[...t.accent]}
          description={t.description}
          descriptionPosition='below'
        />

        <div className='mt-6 grid border-t border-line sm:mt-8 md:grid-cols-3 md:gap-6 md:border-0'>
          {t.services.map(({ title, body, typical }, index) => (
            <article
              key={title}
              className='bl-card-md flex flex-col border-b border-line py-4 md:border-b-0 md:p-6'
            >
              <span className='bl-num'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='bl-display mt-2 text-3xl text-foreground md:mt-4 md:text-4xl'>
                {title}
              </h3>
              <p className='mt-2 text-base leading-relaxed text-muted-foreground md:mt-3'>
                {body}
              </p>
              <p className='bl-label mt-3 md:mt-auto md:border-t md:border-line md:pt-4'>
                {typical}
              </p>
            </article>
          ))}
        </div>

        <div className='mt-6 flex flex-col gap-4 bg-ink px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6'>
          <p className='bl-display text-xl sm:text-2xl'>{t.wantTitle}</p>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-12 w-full items-center justify-center gap-3 px-6 sm:w-auto'
          >
            {t.wantCta}
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}

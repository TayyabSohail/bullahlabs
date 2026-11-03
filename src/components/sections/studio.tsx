import { ArrowRight, Compass, GraduationCap, Hammer } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** One icon per offer, in the order of `dict.studio.services`. */
const ICONS = [Hammer, Compass, GraduationCap] as const;

/** The studio offer, distilled to the three ways we help. */
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

        {/* The offer: three ruled cards. */}
        <div className='mt-16 grid gap-6 md:grid-cols-3'>
          {t.services.map(({ title, body, typical }, index) => {
            const Icon = ICONS[index] ?? Hammer;
            return (
              <article key={title} className='bl-card flex flex-col p-7 sm:p-8'>
                <div className='flex items-center justify-between text-brand-text'>
                  <span className='font-mono text-[11px] font-semibold tracking-[0.18em]'>
                    0{index + 1}
                  </span>
                  <Icon className='h-6 w-6' strokeWidth={1.5} />
                </div>
                <h3 className='bl-display mt-8 text-4xl text-foreground sm:text-5xl'>
                  {title}
                </h3>
                <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                  {body}
                </p>
                <p className='mt-auto border-t border-line pt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text'>
                  {typical}
                </p>
              </article>
            );
          })}
        </div>

        <div className='mt-6 flex flex-col gap-5 bg-ink px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <p className='bl-display text-2xl sm:text-3xl'>{t.wantTitle}</p>
          <Link
            href={paths.services}
            className='bl-btn bl-btn-primary inline-flex h-14 w-full items-center justify-center gap-3 px-7 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:w-auto'
          >
            {t.wantCta}
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}

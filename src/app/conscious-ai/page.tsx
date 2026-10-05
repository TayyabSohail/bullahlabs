import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { LogoMark } from '@/components/brand/logo';
import { PageHero } from '@/components/common/page-hero';
import { Reveal } from '@/components/motion/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Origin } from '@/components/sections/origin';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';
import { COURSE_INTEREST } from '@/schema/contact';

export const metadata: Metadata = {
  title: 'Conscious AI',
  description:
    'Conscious AI is a course from Bullah Labs on using AI well at work. It is in the making; leave your email to hear when it opens.',
  alternates: { canonical: paths.program },
};

/** Contact form, with the course already chosen. */
const notifyHref = `${paths.contact}?service=${COURSE_INTEREST}`;

/**
 * Placeholder for the Conscious AI course. It says the course is coming and
 * takes sign-ups, and nothing more: the curriculum, pricing and audience are
 * not public until the course opens, so none of it belongs on this page.
 */
export default async function ConsciousAiPage() {
  const dict = await getDictionary();
  const t = dict.consciousAi;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
        size='lg'
      >
        <Link
          href={notifyHref}
          className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
        >
          {t.notify}
          <span className='h-2.5 w-2.5 bg-brand' />
        </Link>
      </PageHero>

      {/* The course card: a cover and the facts that are still to come. */}
      <section
        className='bl-section bl-rule bl-band-stone'
        data-rail={t.course.label}
      >
        <div className='bl-container'>
          <Reveal className='bl-card grid overflow-hidden lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
            <div className='bl-grid-surface relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-ink lg:aspect-auto lg:min-h-[26rem]'>
              <div
                aria-hidden='true'
                className='absolute -left-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-brand/25 blur-[110px]'
              />
              <LogoMark className='relative h-28 w-28 animate-[spin_40s_linear_infinite] motion-reduce:animate-none sm:h-36 sm:w-36 [&>circle:first-child]:fill-white [&>path]:fill-ink' />
              <span className='absolute left-5 top-5 inline-flex items-center gap-2 border border-brand bg-brand px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-foreground sm:left-7 sm:top-7'>
                <span
                  aria-hidden='true'
                  className='h-1.5 w-1.5 animate-pulse bg-white'
                />
                {t.status}
              </span>
            </div>

            <div className='flex flex-col border-t bg-surface p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10'>
              <p className='bl-kicker'>{t.course.label}</p>
              <h2 className='bl-display mt-5 text-3xl text-ink sm:text-4xl'>
                {t.course.title}
              </h2>
              <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                {t.course.body}
              </p>
              <dl className='mt-8 border-t'>
                {t.course.details.map((detail) => (
                  <div
                    key={detail.label}
                    className='flex items-baseline justify-between gap-6 border-b py-4'
                  >
                    <dt className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                      {detail.label}
                    </dt>
                    <dd className='text-sm font-medium text-ink'>
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className='mt-auto pt-8'>
                <Link href={notifyHref} className='bl-action'>
                  {t.notify}
                  <ArrowRight className='h-3.5 w-3.5' />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Origin dict={dict} />

      <CtaBanner
        dict={dict}
        title={t.ctaTitle}
        accentWords={[...t.ctaAccent]}
        body={t.ctaBody}
      />
    </>
  );
}

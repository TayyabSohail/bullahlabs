import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/common/page-hero';
import { CourseLink, CourseVideos } from '@/components/sections/conscious-ai';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { courseIsLive, requestAccessHref } from '@/constants/course';
import { paths } from '@/constants/paths';
import { getFaqs } from '@/data/faqs';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Conscious AI',
  description:
    'Conscious AI is a free video course for non-technical knowledge workers: when AI helps, how to get a reliable result in fewer rounds, and when to leave it alone.',
  alternates: { canonical: paths.program },
};

export default async function ConsciousAiPage() {
  const dict = await getDictionary();
  const t = dict.programPage;

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
      >
        <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
          <CourseLink className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'>
            {courseIsLive ? t.primary : t.secondary}
            {courseIsLive ? (
              <ArrowUpRight className='h-4 w-4' />
            ) : (
              <span className='h-2.5 w-2.5 bg-brand' />
            )}
          </CourseLink>
          {courseIsLive && (
            <Link
              href={requestAccessHref}
              className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              {t.secondary}
              <ArrowRight className='h-4 w-4' />
            </Link>
          )}
        </div>
        <p className='mt-10 max-w-3xl border-l-2 border-brand pl-5 text-lg font-medium leading-snug text-foreground sm:text-xl'>
          {t.principle}
        </p>
      </PageHero>

      <CourseVideos
        dict={dict}
        kicker={t.courseKicker}
        title={t.courseTitle}
        accentWords={[...t.courseAccent]}
        description={t.courseDescription}
        count={6}
        className='bl-band-stone'
      />

      <FaqSection
        items={getFaqs(dict.locale, 'program')}
        kicker={dict.faq.kicker}
        title={dict.faq.title}
        accentWords={[...dict.faq.accent]}
        description={dict.faq.description}
        className='bl-band-white bl-rule'
      />

      <CtaBanner
        dict={dict}
        title={t.ctaTitle}
        accentWords={[...t.ctaAccent]}
        body={t.ctaBody}
      />
    </>
  );
}

import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { CourseSignup } from '@/components/course/course-signup';
import {
  CourseSection,
  ForBusiness,
  LearningHabits,
  Notify,
  ProblemApproach,
  Vision,
  WhoFor,
} from '@/components/sections/conscious-ai';
import { CtaBanner } from '@/components/sections/cta-banner';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Conscious AI',
  description:
    'Conscious AI: free, practical learning modules from Bullah Labs to help you use AI confidently, work smarter and reduce unnecessary waste. No coding required.',
  alternates: { canonical: paths.program },
};

/**
 * The program page: the promise and the sign-up, the course player, the
 * problem and the answer, the habits the modules teach, who it is for,
 * the offer for teams, why we do this, the sign-up once more on its own,
 * and what comes after the free modules.
 */
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
        <p className='max-w-2xl text-lg font-medium leading-snug text-foreground sm:text-xl'>
          {t.promise}
        </p>
        <CourseSignup
          dict={dict}
          source='conscious-ai:hero'
          variant='inline'
          submitLabel={t.heroCta}
          className='mt-8 max-w-xl'
        />
        <p className='mt-10 max-w-3xl border-l-2 border-brand pl-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground'>
          {t.principle}
        </p>
      </PageHero>

      <CourseSection dict={dict} />
      <ProblemApproach dict={dict} />
      <LearningHabits dict={dict} />
      <WhoFor dict={dict} />
      <ForBusiness dict={dict} />
      <Vision dict={dict} />
      <Notify dict={dict} />

      <CtaBanner
        dict={dict}
        kicker={t.comingSoon.kicker}
        title={t.comingSoon.title}
        accentWords={[...t.comingSoon.accent]}
        body={t.comingSoon.body}
      >
        <CourseSignup
          dict={dict}
          source='conscious-ai:coming-soon'
          variant='inline'
          tone='dark'
          submitLabel={t.comingSoon.cta}
          className='w-full max-w-xl text-left'
        />
      </CtaBanner>
    </>
  );
}

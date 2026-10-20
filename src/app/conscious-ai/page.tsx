import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { CourseSignup } from '@/components/course/course-signup';
import { SystemMap } from '@/components/effects/system-map';
import {
  CourseSection,
  ForBusiness,
  LearningHabits,
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
    'Conscious AI: free, practical modules from Bullah Labs to get more from AI while using less of it. No coding required. Team training available.',
  alternates: { canonical: paths.program },
};

/**
 * The program page: the promise and the sign-up, the course player, the
 * problem and the answer, the habits the modules teach, who it is for,
 * the offer for teams, why we do this, and one closing banner with the
 * sign-up, like every other page's closing CTA.
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
        <div className='grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-2'>
          <div>
            <CourseSignup
              dict={dict}
              source='conscious-ai:hero'
              variant='inline'
              submitLabel={t.heroCta}
              className='max-w-xl'
            />
          </div>

          <div className='bl-card w-full min-w-0 max-w-[44rem] justify-self-center bg-surface p-2 sm:p-3 lg:justify-self-start'>
            <SystemMap copy={dict.hero.map} delay={0.5} />
          </div>
        </div>
      </PageHero>

      <CourseSection dict={dict} />
      <ProblemApproach dict={dict} />
      <LearningHabits dict={dict} />
      <WhoFor dict={dict} />
      <ForBusiness dict={dict} />
      <Vision dict={dict} />

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

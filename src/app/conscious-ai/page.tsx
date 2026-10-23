import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { AiWorkSnapshot } from '@/components/course/ai-work-snapshot';
import { CourseSignup } from '@/components/course/course-signup';
import { CommunitySection } from '@/components/sections/community';
import {
  CourseSection,
  ForBusiness,
  ProblemApproach,
  Vision,
  WhoFor,
} from '@/components/sections/conscious-ai';
import { CtaBanner } from '@/components/sections/cta-banner';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Use AI on your terms.',
  description:
    'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
  alternates: { canonical: paths.program },
  openGraph: {
    title: 'Use AI on your terms.',
    description:
      'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
    url: paths.program,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use AI on your terms.',
    description:
      'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
  },
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
        title='See how AI can work better for you.'
        accentWords={[3, 4, 5, 6]}
        size='lg'
        className='max-w-6xl pt-24 sm:pt-28 lg:pt-32'
      >
        <AiWorkSnapshot />
      </PageHero>

      <CourseSection dict={dict} />
      <ProblemApproach dict={dict} />
      <WhoFor dict={dict} />
      <ForBusiness dict={dict} />
      <Vision dict={dict} />
      <CommunitySection dict={dict} />

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

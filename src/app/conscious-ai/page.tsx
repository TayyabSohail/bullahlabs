import type { Metadata } from 'next';

import { AiWorkSnapshot } from '@/components/course/ai-work-snapshot';
import { CourseSignup } from '@/components/course/course-signup';
import { CommunitySection } from '@/components/sections/community';
import {
  CourseSection,
  ForBusiness,
  Vision,
} from '@/components/sections/conscious-ai';
import {
  ConsciousAiHero,
  ConsciousAiPrinciples,
} from '@/components/sections/conscious-ai-landing';
import { CtaBanner } from '@/components/sections/cta-banner';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Conscious AI - Use AI on your terms.',
  description:
    'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
  alternates: { canonical: paths.program },
  openGraph: {
    title: 'Conscious AI - Use AI on your terms.',
    description:
      'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
    url: paths.program,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conscious AI - Use AI on your terms.',
    description:
      'Free, practical lessons on when AI helps, which tool fits, and what it really costs.',
  },
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
      <ConsciousAiHero />
      <section id='ai-profile' className='bl-section bl-rule bg-secondary'>
        <div className='bl-container'>
          <AiWorkSnapshot />
        </div>
      </section>
      <ConsciousAiPrinciples />
      <CourseSection dict={dict} />
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

import type { Metadata } from 'next';

import { SectionHeading } from '@/components/common/section-heading';
import { AiWorkSnapshot } from '@/components/course/ai-work-snapshot';
import { SpoilerTyper } from '@/components/course/spoiler-typer';
import { CommunitySection } from '@/components/sections/community';
import { CourseSection } from '@/components/sections/conscious-ai';
import {
  ConsciousAiClosing,
  ConsciousAiFaq,
  ConsciousAiHero,
  ConsciousAiPrinciples,
  CourseInstructor,
  ForTeamsBridge,
  OurRoots,
} from '@/components/sections/conscious-ai-landing';
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

/**
 * The page runs in the order of the Conscious AI page map: hero, problem,
 * the fix, the live AI profile, the course and its instructor, our roots,
 * the bridge to teams, FAQs, community, then the closing CTAs.
 */
export default async function ConsciousAiPage() {
  const dict = await getDictionary();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
        ]}
      />
      <ConsciousAiHero />
      <ConsciousAiPrinciples />
      <section id='ai-profile' className='bl-section bl-rule bl-band-mint'>
        <div className='bl-container'>
          <SectionHeading
            kicker='Start here · Live'
            title='Feeling like AI will replace you?'
            accentWords={[4, 5]}
            description='Five quick steps to find out.'
            aside={<SpoilerTyper />}
          />
          <div className='mt-8 sm:mt-12'>
            <AiWorkSnapshot />
          </div>
        </div>
      </section>
      <CourseSection dict={dict}>
        <CourseInstructor />
      </CourseSection>
      <OurRoots />
      <ForTeamsBridge />
      <ConsciousAiFaq />
      <CommunitySection dict={dict} className='bl-band-stone bl-band-peach' />
      <ConsciousAiClosing dict={dict} />
    </>
  );
}

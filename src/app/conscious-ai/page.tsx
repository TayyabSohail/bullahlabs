import type { Metadata } from 'next';

import { SectionHeading } from '@/components/common/section-heading';
import { AiWorkSnapshot } from '@/components/course/ai-work-snapshot';
import { SpoilerPlate } from '@/components/course/spoiler-plate';
import { CommunitySection } from '@/components/sections/community';
import { CourseSection } from '@/components/sections/conscious-ai';
import {
  ConsciousAiClosing,
  ConsciousAiFaq,
  ConsciousAiHero,
  ConsciousAiNextSteps,
  ConsciousAiPrinciples,
  OurRoots,
} from '@/components/sections/conscious-ai-landing';
import { ConsciousAiNumbers } from '@/components/sections/conscious-ai-numbers';
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
 * The page runs in the order of the Conscious AI page map: hero, the problem
 * and the fix in one ledger, where next (teams and business first, services
 * second), the numbers, the live AI profile, the course and its instructor,
 * our roots, FAQs, community, then the closing CTAs.
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
      <ConsciousAiHero dict={dict} />
      <ConsciousAiPrinciples dict={dict} />
      <ConsciousAiNextSteps dict={dict} />
      <ConsciousAiNumbers dict={dict} />
      <section id='ai-profile' className='bl-section bl-rule bl-band-stone bl-band-sky'>
        <div className='bl-container'>
          <SectionHeading
            kicker={dict.consciousAiPage.aiProfile.kicker}
            title={dict.consciousAiPage.aiProfile.title}
            accentWords={[...dict.consciousAiPage.aiProfile.accent]}
            description={dict.consciousAiPage.aiProfile.description}
            aside={
              <SpoilerPlate copy={dict.consciousAiPage.aiProfile.spoiler} />
            }
          />
          <div className='mt-6 sm:mt-10'>
            <AiWorkSnapshot dict={dict} />
          </div>
        </div>
      </section>
      <CourseSection dict={dict} />
      <OurRoots dict={dict} />
      <ConsciousAiFaq dict={dict} />
      <CommunitySection dict={dict} className='bl-band-stone bl-band-peach' />
      <ConsciousAiClosing dict={dict} />
    </>
  );
}

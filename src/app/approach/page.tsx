import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { ConsciousTechnology } from '@/components/sections/conscious-technology';
import { CtaBanner } from '@/components/sections/cta-banner';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Principles } from '@/components/sections/principles';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How Bullah Labs works: understand the problem, choose the right approach, build and learn, improve with purpose. Technology built with its consequences in mind.',
  alternates: { canonical: paths.approach },
};

/** How we work, why technology is never just technology, and the principles. */
export default async function ApproachPage() {
  const dict = await getDictionary();
  const t = dict.howItWorks;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.approach, href: paths.approach },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
        size='lg'
      />
      <HowItWorks dict={dict} heading={false} className='pt-0' />
      <ConsciousTechnology dict={dict} className='bl-band-stone' />
      <Principles dict={dict} />
      <CtaBanner dict={dict} />
    </>
  );
}

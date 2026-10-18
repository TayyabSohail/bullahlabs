import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Principles } from '@/components/sections/principles';
import { Services } from '@/components/sections/services';
import { Technologies } from '@/components/sections/technologies';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Digital product development, product engineering, AI and automation, systems and integrations, architecture and optimisation, technology education, and product improvement.',
  alternates: { canonical: paths.services },
};

/** What we do: the seven services, how we work, the stack, the principles. */
export default async function ServicesPage() {
  const dict = await getDictionary();
  const t = dict.services;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.services, href: paths.services },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
        size='lg'
      />
      <Services dict={dict} heading={false} className='pt-0' />
      <HowItWorks dict={dict} />
      <Technologies dict={dict} />
      <Principles dict={dict} className='bl-band-white' />
      <CtaBanner dict={dict} />
    </>
  );
}

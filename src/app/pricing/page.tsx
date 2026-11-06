import type { Metadata } from 'next';

import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Focused AI strategy, team enablement, and product delivery engagements from Bullah Labs.',
  alternates: { canonical: paths.pricing },
};

export default async function PricingPage() {
  const dict = await getDictionary();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.pricing, href: paths.pricing },
        ]}
      />
      <Pricing />
      <Testimonials dict={dict} title='What our partners say.' />
    </>
  );
}

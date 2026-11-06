import type { Metadata } from 'next';

import { ConsciousAiNumbers } from '@/components/sections/conscious-ai-numbers';
import { Testimonials } from '@/components/sections/testimonials';
import {
  UpskillingBill,
  UpskillingClosing,
  UpskillingCourse,
  UpskillingFaq,
  UpskillingHero,
  UpskillingPricing,
  UpskillingTrainings,
} from '@/components/sections/upskilling';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

const title = 'AI Upskilling - Make your team AI-fluent.';
const description =
  'Hands-on AI training on your team’s real work. Less waste, a smaller AI bill, and a free workflow audit to start.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: paths.upskilling },
  openGraph: { title, description, url: paths.upskilling, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

/**
 * The page runs: hero, the trainings (benefits, steps, planet and data),
 * the itemized bill, pricing, the numbers, the free course and the way to
 * Services in one card, FAQs, client voices, then the closing CTAs. The copy lives in
 * `dict.upskillingPage`, one block per section in page order.
 */
export default async function UpskillingPage() {
  const dict = await getDictionary();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.upskillingPage.breadcrumb, href: paths.upskilling },
        ]}
      />
      <UpskillingHero dict={dict} />
      <UpskillingTrainings dict={dict} />
      <UpskillingBill dict={dict} />
      <UpskillingPricing dict={dict} />
      <ConsciousAiNumbers dict={dict} />
      <UpskillingCourse dict={dict} />
      <UpskillingFaq dict={dict} />
      <Testimonials
        dict={dict}
        title={dict.upskillingPage.testimonials.title}
        className='bl-band-peach'
      />
      <UpskillingClosing dict={dict} />
    </>
  );
}

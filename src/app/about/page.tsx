import type { Metadata } from 'next';

import { CtaBanner } from '@/components/sections/cta-banner';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Locations } from '@/components/sections/locations';
import { OurDna } from '@/components/sections/our-dna';
import { Principles } from '@/components/sections/principles';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Our DNA',
  description:
    'Bullah Labs is a product and engineering studio in Stuttgart and Islamabad. We build digital products with purpose and help teams use technology, including AI, well.',
  alternates: { canonical: paths.about },
};

export default async function OurDnaPage() {
  const dict = await getDictionary();
  const t = dict.aboutPage;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.about, href: paths.about },
        ]}
      />
      <OurDna />

      <Principles dict={dict} />

      <HowItWorks dict={dict} className='bl-band-stone' />

      <section className='bl-section bl-rule bl-band-stone overflow-hidden'>
        <div className='bl-container'>
          <Locations
            kicker={t.whereKicker}
            title={t.whereTitle}
            accentWords={[...t.whereAccent]}
            description={t.whereDescription}
          />
        </div>
      </section>

      <CtaBanner dict={dict} />
    </>
  );
}

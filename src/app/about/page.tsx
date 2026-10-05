import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { SectionHeading } from '@/components/common/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Locations } from '@/components/sections/locations';
import { Origin } from '@/components/sections/origin';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getValues } from '@/data/values';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Bullah Labs teaches non-technical teams to use AI effectively and responsibly through the Conscious AI program. Offices in Islamabad and Fellbach.',
  alternates: { canonical: paths.about },
};

export default async function AboutPage() {
  const dict = await getDictionary();
  const t = dict.aboutPage;
  const values = getValues(dict.locale);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.about, href: paths.about },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
      />

      <section className='bl-container grid gap-12 pb-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:pb-24'>
        <Reveal className='space-y-6 text-lg leading-relaxed text-foreground/85'>
          {t.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Stagger className='grid gap-px self-start overflow-hidden rounded-none border border-line bg-line'>
          {t.facts.map((fact) => (
            <StaggerItem
              key={fact.label}
              className='grid gap-2 bg-background p-6 sm:grid-cols-[8rem_1fr]'
            >
              <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>
                {fact.label}
              </p>
              <p className='text-base font-medium text-foreground'>
                {fact.value}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Origin dict={dict} />

      <section className='bl-section border-t border-line'>
        <div className='bl-container'>
          <SectionHeading
            kicker={t.principlesKicker}
            title={t.principlesTitle}
            accentWords={[...t.principlesAccent]}
          />
          <Stagger className='mt-14 grid gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className='flex flex-col bg-background p-7'
              >
                <h3 className='bl-display text-2xl text-foreground'>
                  {value.title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                  {value.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className='bl-section'>
        <div className='bl-container'>
          <SectionHeading
            kicker={t.whereKicker}
            title={t.whereTitle}
            accentWords={[...t.whereAccent]}
            description={t.whereDescription}
          />
          <Locations className='mt-14' contactLabel={dict.nav.contact} />
        </div>
      </section>

      <CtaBanner
        dict={dict}
        title={t.ctaTitle}
        accentWords={[...t.ctaAccent]}
        body={t.ctaBody}
      />
    </>
  );
}

import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Locations } from '@/components/sections/locations';
import { Principles } from '@/components/sections/principles';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Bullah Labs is a product and engineering team that builds technology with purpose and believes progress comes with responsibility. Offices in Islamabad and Stuttgart.',
  alternates: { canonical: paths.about },
};

export default async function AboutPage() {
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
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
        size='lg'
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

      <Principles dict={dict} />

      <HowItWorks dict={dict} className='bl-band-white' />

      <section className='bl-section bl-rule bl-band-stone overflow-hidden'>
        <div className='bl-container'>
          <Locations
            kicker={t.whereKicker}
            title={t.whereTitle}
            accentWords={[...t.whereAccent]}
            description={t.whereDescription}
            contactLabel={dict.nav.contact}
          />
        </div>
      </section>

      <CtaBanner dict={dict} />
    </>
  );
}

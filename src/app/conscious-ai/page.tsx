import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/common/page-hero';
import { SectionHeading } from '@/components/common/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { RoleTracks } from '@/components/sections/conscious-ai';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import { getFaqs } from '@/data/faqs';
import { getProgram } from '@/data/program';
import { getDictionary } from '@/i18n/server';
import { DEFAULT_INTEREST } from '@/schema/contact';

export const metadata: Metadata = {
  title: 'Conscious AI',
  description:
    'Conscious AI is a practical program for non-technical knowledge workers: a free fundamentals course, then tiers for your own tools, your role and your whole team.',
  alternates: { canonical: paths.program },
};

/** Contact form, with the free course already chosen. */
const enquiryHref = `${paths.contact}?service=${DEFAULT_INTEREST}`;

export default async function ConsciousAiPage() {
  const dict = await getDictionary();
  const t = dict.programPage;
  const labels = dict.program;
  const program = getProgram(dict.locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        accentWords={[...t.accent]}
        description={t.description}
      >
        <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
          <Link
            href={enquiryHref}
            className='bl-btn bl-btn-ink inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.primary}
            <span className='h-2.5 w-2.5 bg-brand' />
          </Link>
          <Link
            href='#tiers'
            className='bl-btn bl-btn-secondary inline-flex h-14 items-center justify-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
          >
            {t.secondary}
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
        <p className='mt-10 max-w-3xl border-l-2 border-brand pl-5 text-lg font-medium leading-snug text-foreground sm:text-xl'>
          {t.principle}
        </p>
      </PageHero>

      {/* Tiers, with their modules */}
      <section
        id='tiers'
        className='bl-section bl-rule bl-band-stone scroll-mt-20'
        data-rail={t.tiersKicker}
      >
        <div className='bl-container'>
          <SectionHeading
            kicker={t.tiersKicker}
            title={t.tiersTitle}
            description={t.tiersDescription}
          />

          <div className='mt-8 space-y-4 sm:mt-14 sm:space-y-6'>
            {program.tiers.map((tier, index) => (
              <Reveal
                key={tier.id}
                id={tier.id}
                className='bl-card grid scroll-mt-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'
              >
                <div
                  className={cn(
                    'flex flex-col p-6 sm:p-8 lg:p-10',
                    index === 0 ? 'bg-ink text-white' : 'bg-surface-2/60',
                  )}
                >
                  <div className='flex items-center justify-between gap-3'>
                    <p
                      className={cn(
                        'font-mono text-[10px] font-semibold uppercase tracking-[0.22em]',
                        index === 0 ? 'text-white/60' : 'text-muted-foreground',
                      )}
                    >
                      {labels.tier} {String(index + 1).padStart(2, '0')}
                    </p>
                    <span
                      className={cn(
                        'border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]',
                        index === 0
                          ? 'border-brand bg-brand text-brand-foreground'
                          : 'border-ink/15 bg-white text-ink/70',
                      )}
                    >
                      {tier.access}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      'bl-display mt-8 text-3xl sm:text-4xl',
                      index === 0 ? 'text-white' : 'text-ink',
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 font-mono text-[10px] uppercase tracking-[0.16em]',
                      index === 0 ? 'text-brand-2' : 'text-brand-text',
                    )}
                  >
                    {labels.audience}: {tier.audience}
                  </p>
                  <p
                    className={cn(
                      'mt-5 text-sm leading-relaxed sm:text-[15px]',
                      index === 0 ? 'text-white/70' : 'text-muted-foreground',
                    )}
                  >
                    {tier.summary}
                  </p>
                  <div className='mt-auto pt-8'>
                    <div className='border-l-2 border-brand pl-4'>
                      <p
                        className={cn(
                          'font-mono text-[9px] uppercase tracking-[0.18em]',
                          index === 0
                            ? 'text-white/50'
                            : 'text-muted-foreground',
                        )}
                      >
                        {labels.outcome}
                      </p>
                      <p className='mt-1.5 text-sm font-medium leading-snug'>
                        {tier.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-t bg-surface lg:border-l lg:border-t-0'>
                  <p className='border-b px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8'>
                    {labels.modules}
                  </p>
                  <ol>
                    {tier.modules.map((module) => (
                      <li
                        key={module.code}
                        className='grid gap-x-6 gap-y-2 border-b px-6 py-4 last:border-b-0 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:px-8'
                      >
                        <span className='font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-text'>
                          {module.code}
                        </span>
                        <div>
                          <h4 className='text-base font-semibold text-ink'>
                            {module.title}
                          </h4>
                          <p className='mt-1 text-sm leading-snug text-muted-foreground'>
                            {module.output}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RoleTracks dict={dict} detailed />

      <FaqSection
        items={getFaqs(dict.locale)}
        kicker={dict.faq.kicker}
        title={dict.faq.title}
        accentWords={[...dict.faq.accent]}
        description={dict.faq.description}
        className='bl-band-stone bl-rule'
      />

      <CtaBanner
        dict={dict}
        title={t.ctaTitle}
        accentWords={[...t.ctaAccent]}
        body={t.ctaBody}
      />
    </>
  );
}

import type { Metadata } from 'next';

import { PageHero } from '@/components/common/page-hero';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { ProjectGrid } from '@/components/work/project-grid';

import { paths } from '@/constants/paths';
import {
  type EfficiencyLens,
  getCategories,
  getLenses,
  getShowcaseProjectsLocalised,
  LENS_ORDER,
} from '@/data/projects';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects from Bullah Labs, each read through an efficiency principle: the right tool for the task, only the needed context, nothing done twice, checked before trusted.',
  alternates: { canonical: paths.work },
};

export default async function WorkPage() {
  const dict = await getDictionary();
  const t = dict.work;
  const showcase = getShowcaseProjectsLocalised(dict.locale);
  const lensLabels = Object.fromEntries(
    LENS_ORDER.map((lens) => [lens, t.lenses[lens].label]),
  ) as Record<EfficiencyLens, string>;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: paths.home },
          { name: t.kicker, href: paths.work },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        description={t.description}
        size='lg'
      />
      <section className='bl-container pb-10'>
        {/* The four lenses, so the filter chips below read as principles. */}
        <Stagger className='mb-10 grid gap-px overflow-hidden border bg-line sm:grid-cols-2 lg:mb-14 lg:grid-cols-4'>
          {LENS_ORDER.map((lens, index) => (
            <StaggerItem key={lens} className='bg-surface p-5 sm:p-6'>
              <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className='bl-display mt-3 text-lg text-ink sm:text-xl'>
                {t.lenses[lens].label}
              </h2>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                {t.lenses[lens].principle}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <ProjectGrid
          projects={showcase}
          lenses={getLenses(showcase)}
          categories={getCategories(showcase)}
          labels={t.filters}
          lensLabels={lensLabels}
          filterLabel={t.filterLabel}
          actionLabel={t.view}
          countTemplate={t.count}
        />
      </section>
      <CtaBanner dict={dict} />
    </>
  );
}

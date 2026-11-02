import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/common/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Testimonials } from '@/components/sections/testimonials';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { ProjectGrid } from '@/components/work/project-grid';

import { paths } from '@/constants/paths';
import { getCategories, getShowcaseProjectsLocalised } from '@/data/projects';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Bullah Labs: web and mobile products, integrations and AI, each with the problem, the work and the result.',
  alternates: { canonical: paths.work },
};

export default async function WorkPage() {
  const dict = await getDictionary();
  const t = dict.work;
  const showcase = getShowcaseProjectsLocalised(dict.locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: t.kicker, href: paths.work },
        ]}
      />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        description={t.description}
        size='lg'
      >
        <Link
          href={paths.services}
          className='bl-btn bl-btn-secondary inline-flex h-14 items-center gap-3 whitespace-nowrap bg-surface px-7 font-mono text-xs font-semibold uppercase tracking-[0.22em]'
        >
          {t.servicesCta}
          <ArrowRight className='h-4 w-4' />
        </Link>
      </PageHero>
      <section className='bl-container pb-10'>
        <ProjectGrid
          projects={showcase}
          categories={getCategories(showcase)}
          labels={t.filters}
          filterLabel={t.filterLabel}
          actionLabel={t.view}
          countTemplate={t.count}
        />
      </section>
      <Testimonials dict={dict} title='What people say.' />
      <CtaBanner dict={dict} />
    </>
  );
}

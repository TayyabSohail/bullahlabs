import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { ConsciousAiHome } from '@/components/sections/conscious-ai-home';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** Four clear next steps, presented as one composed studio panel. */
export function Studio({ dict }: { dict: Dictionary }) {
  const t = dict.studio;
  const services = [
    {
      label: '01 · Conscious AI',
      title: 'AI, with judgement.',
      cta: 'Make AI more conscious',
      href: paths.teams,
    },
    {
      label: '02 · For teams',
      title: 'A team that knows when to use it.',
      cta: 'Train your team',
      href: paths.teams,
    },
    {
      label: '03 · Build',
      title: 'Build something people return to.',
      cta: 'Talk about a build',
      href: paths.services,
    },
  ];

  return (
    <section
      data-section='studio'
      id='studio'
      className='bl-rule bl-band-stone scroll-mt-24 py-10 sm:py-12 lg:py-14'
    >
      <div className='bl-container'>
        <SectionHeading
          title={t.title}
          accentWords={[...t.accent]}
          className='text-left [&_.bl-display]:justify-start [&_.bl-kicker]:justify-start'
        />

        <div className='mt-5 rounded-[1.5rem] bg-ink p-2 sm:mt-6 sm:p-3'>
          <div className='grid min-w-0 md:grid-cols-3'>
            {services.map(({ label, title, cta, href }) => (
              <Link
                key={title}
                href={href}
              className='group flex min-h-[14rem] min-w-0 flex-col p-6 text-white transition-colors hover:bg-[hsl(var(--ink-2))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:p-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-white/45'
              >
                <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-2'>
                  {label}
                </p>
                <h3 className='bl-display mt-6 max-w-[14ch] break-words text-3xl leading-[0.94] sm:text-4xl'>
                  {title}
                </h3>
              <span className='mt-auto inline-flex h-11 self-start items-center gap-8 bg-brand px-4 text-sm font-semibold text-ink transition-colors group-hover:bg-brand-2'>
                  {cta}
                  <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-8 border-t border-ink/20 pt-6 sm:mt-10 sm:pt-8'>
          <ConsciousAiHome dict={dict} embedded />
        </div>
      </div>
    </section>
  );
}

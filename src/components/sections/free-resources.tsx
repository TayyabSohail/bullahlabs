import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { paths } from '@/constants/paths';

/** The compact, high-contrast entry point to the free Conscious AI course. */
export function FreeResources() {
  return (
    <section className='bl-container py-10 sm:py-14'>
      <div className='bl-card bl-card-ink bl-grid-surface relative max-w-3xl p-7 text-white sm:p-10'>
        <div className='relative'>
          <p className='bl-kicker text-white/60'>Free resources</p>
          <h2 className='bl-display mt-5 max-w-[15ch] text-4xl leading-tight sm:text-5xl'>Work smarter with AI. Waste less. Stay in control.</h2>
          <Link href={paths.program} className='bl-btn bl-btn-primary mt-8 inline-flex h-14 items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]'>Explore Conscious AI <ArrowUpRight className='h-4 w-4' /></Link>
        </div>
      </div>
    </section>
  );
}

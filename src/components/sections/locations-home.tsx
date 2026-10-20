import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Flag } from '@/components/brand/flags';
import { Globe } from '@/components/effects/globe';
import { CountUp } from '@/components/motion/count-up';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';

/** Two office pins, then client marks on each of the five continents we work with. */
const MARKERS = [
  { location: [33.69, 73.05] as [number, number], size: 0.07 }, // Islamabad (office)
  { location: [48.78, 9.18] as [number, number], size: 0.07 }, // Stuttgart (office)
  { location: [51.5, -0.12] as [number, number], size: 0.03 }, // London, Europe
  { location: [25.2, 55.27] as [number, number], size: 0.03 }, // Dubai, Asia
  { location: [0.35, 32.58] as [number, number], size: 0.03 }, // Kampala, Africa
  { location: [40.71, -74.0] as [number, number], size: 0.03 }, // New York, North America
  { location: [42.36, -71.06] as [number, number], size: 0.025 }, // Boston, North America
  { location: [-33.87, 151.21] as [number, number], size: 0.03 }, // Sydney, Oceania
];

const STATS = [
  ['150+', 'Projects delivered'],
  ['40+', 'Clients served'],
  ['5', 'Continents reached'],
] as const;

/** The figures and the two offices in one ink band, after what we do and before Let's Talk. */
export function LocationsHome() {
  return (
    <section
      id='locations'
      className='bl-section bl-rule bl-band-ink scroll-mt-24'
    >
      <div className='bl-container'>
        <div className='grid gap-8 sm:grid-cols-[minmax(0,1fr)_22rem] sm:items-center sm:gap-12'>
          <div className='lg:pl-12'>
            <p className='bl-kicker text-white/60'>Where we are</p>
            <h2 className='bl-display mt-4 text-4xl text-white sm:text-5xl'>
              Two offices. One team.
            </h2>
            <div className='mt-7 flex flex-wrap gap-x-7 gap-y-3'>
              {siteConfig.locations.map((location) => (
                <p
                  key={location.id}
                  className='flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-white'
                >
                  <Flag
                    countryCode={location.countryCode}
                    className='h-3 w-[18px]'
                  />
                  {location.city}
                </p>
              ))}
            </div>
            <Link
              href={paths.contact}
              className='bl-btn bl-btn-primary mt-8 inline-flex h-14 items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              Start a project <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='mx-auto w-full max-w-[20rem]'>
            <Globe markers={MARKERS} className='opacity-90' />
          </div>
        </div>

        {/* The figures: three counters on one rule. */}
        <div className='mt-12 grid border-t border-white/20 sm:grid-cols-3'>
          {STATS.map(([value, label], index) => (
            <div
              key={label}
              className={
                index === 0
                  ? 'py-7 sm:py-8 sm:pr-8 lg:text-center'
                  : 'border-t border-white/15 py-7 sm:border-l sm:border-t-0 sm:px-8 sm:py-8 lg:text-center'
              }
            >
              <p className='bl-display text-6xl leading-none text-white sm:text-7xl'>
                <CountUp value={value} delay={index * 0.1} />
              </p>
              <p className='mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Flag } from '@/components/brand/flags';
import { Globe } from '@/components/effects/globe';
import { CountUp } from '@/components/motion/count-up';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

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

/**
 * The figures and the two offices in one ink band. On a phone the globe
 * sits beside the copy at a small size and the three figures share one
 * row, so the band is one screen.
 */
export function LocationsHome({ dict }: { dict: Dictionary }) {
  const t = dict.locationsHome;
  return (
    <section
      data-section='locations'
      id='locations'
      className='bl-section bl-rule bl-band-ink bl-no-dot scroll-mt-24'
    >
      <div className='bl-container'>
        <div className='grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]'>
          <div className='text-center lg:pl-12 lg:text-left'>
            <p className='bl-kicker justify-center text-white/60 lg:justify-start'>
              {t.kicker}
            </p>
            <h2 className='bl-display mt-3 text-3xl text-white sm:text-5xl'>
              {t.title}
            </h2>
            <div className='mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start'>
              {siteConfig.locations.map((location) => (
                <p
                  key={location.id}
                  className='flex items-center gap-2 font-mono text-xs text-white'
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
              className='bl-btn bl-btn-primary mt-6 inline-flex h-12 items-center gap-3 px-5'
            >
              {t.cta} <ArrowUpRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='w-full'>
            <Globe markers={MARKERS} className='opacity-90' />
          </div>
        </div>

        {/* The figures: three counters on one rule, three across at every width. */}
        <div className='mt-8 grid grid-cols-3 border-t border-white/20 sm:mt-10'>
          {t.stats.map(([value, label], index) => (
            <div
              key={label}
              className={
                index === 0
                  ? 'py-5 pr-3 sm:py-8 sm:pr-8 lg:text-center'
                  : 'border-l border-white/15 px-3 py-5 sm:px-8 sm:py-8 lg:text-center'
              }
            >
              <p className='bl-display text-3xl leading-none text-white sm:text-6xl lg:text-7xl'>
                <CountUp value={value} delay={index * 0.1} />
              </p>
              <p className='bl-label mt-2 text-white/70 sm:mt-4'>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

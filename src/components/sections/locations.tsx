import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Flag } from '@/components/brand/flags';
import { Globe } from '@/components/effects/globe';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';

interface LocationsProps {
  kicker: string;
  title: string;
  /** Word indexes rendered in the serif accent style. */
  accentWords?: number[];
  description: string;
  /** Label for the contact link. Defaults to English. */
  contactLabel?: string;
  className?: string;
}

/** Only the two offices are pinned here; client cities stay on the homepage globe. */
const OFFICE_MARKERS = [
  { location: [33.69, 73.05] as [number, number], size: 0.07 }, // Islamabad
  { location: [48.78, 9.18] as [number, number], size: 0.07 }, // Stuttgart
];

/**
 * "Where we are": copy and the two office cards on the left, the dotted
 * globe with both offices pinned on the right.
 */
export function Locations({
  kicker,
  title,
  accentWords,
  description,
  contactLabel = 'Contact us',
  className,
}: LocationsProps) {
  return (
    <div
      className={cn(
        'grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16',
        className,
      )}
    >
      <div>
        <Reveal>
          <p className='bl-kicker bl-kicker-numbered'>{kicker}</p>
        </Reveal>
        <TextReveal
          as='h2'
          text={title}
          accentWords={accentWords}
          className='bl-display mt-5 max-w-[16ch] text-display-md text-foreground'
        />
        <Reveal delay={0.15}>
          <p className='mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {description}
          </p>
        </Reveal>

        <Stagger className='mt-10 grid gap-px border border-line bg-line sm:grid-cols-2'>
          {siteConfig.locations.map((location) => (
            <StaggerItem
              key={location.id}
              className='group relative flex flex-col bg-background p-6 sm:p-7'
            >
              <p className='flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                <Flag
                  countryCode={location.countryCode}
                  className='h-3 w-[18px]'
                />
                {location.label}
              </p>
              <p className='bl-display mt-4 text-2xl text-foreground sm:text-3xl'>
                {location.city}
              </p>
              <p className='mt-1 text-sm text-muted-foreground'>
                {location.country}
                <span className='mx-2 text-line' aria-hidden='true'>
                  /
                </span>
                <span className='font-mono text-[11px] uppercase tracking-[0.14em]'>
                  {location.utc}
                </span>
              </p>
              <Link
                href={paths.contact}
                className='mt-6 inline-flex items-center gap-1.5 self-start border-t border-line pt-4 text-sm font-medium text-foreground transition-colors group-hover:text-brand-text'
              >
                {contactLabel}
                <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal
        delay={0.1}
        className='relative mx-auto w-full max-w-[360px] sm:max-w-[520px]'
      >
        <Globe markers={OFFICE_MARKERS} />
      </Reveal>
    </div>
  );
}

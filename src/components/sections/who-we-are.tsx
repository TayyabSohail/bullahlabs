import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface WhoWeAreProps {
  dict: Dictionary;
  className?: string;
}

/**
 * Who we are, on the homepage: the statement on the left stays put while
 * the five paragraphs read down the right, ending in the link to /about.
 */
export function WhoWeAre({ dict, className }: WhoWeAreProps) {
  const t = dict.whoWeAre;

  return (
    <section
      className={cn('bl-section bl-rule bl-band-white', className)}
      data-rail={t.kicker}
    >
      <div className='bl-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
        <div className='lg:sticky lg:top-32 lg:self-start'>
          <Reveal>
            <p className='bl-kicker bl-kicker-numbered'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[18ch] text-display-md text-foreground'
          />
          <Reveal delay={0.3} className='mt-8 hidden lg:block'>
            <Link
              href={paths.about}
              className='bl-btn bl-btn-ink inline-flex h-14 items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]'
            >
              {t.cta}
              <ArrowUpRight className='h-4 w-4' />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className='space-y-6'>
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                'leading-relaxed',
                index === 0
                  ? 'text-xl font-medium text-foreground sm:text-2xl'
                  : index === t.paragraphs.length - 1
                    ? 'border-l-2 border-brand pl-5 text-lg font-medium text-foreground'
                    : 'text-base text-muted-foreground sm:text-lg',
              )}
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={paths.about}
            className='bl-btn bl-btn-ink inline-flex h-14 items-center gap-3 px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] lg:hidden'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

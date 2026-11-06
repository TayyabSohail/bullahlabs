'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/common/section-heading';
import { Reveal, Stagger } from '@/components/motion/reveal';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface HowItWorksProps {
  dict: Dictionary;
  className?: string;
  /** The approach page has its own hero, so it drops the section heading. */
  heading?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * How we work: four step cards in a row, each a ledger entry. Number and
 * phase on the first line, the step, then what happens. They fade up in
 * turn and nothing else moves.
 */
export function HowItWorks({
  dict,
  className,
  heading = true,
}: HowItWorksProps) {
  const t = dict.howItWorks;
  const reduce = Boolean(useReducedMotion());

  return (
    <section
      data-section='how-it-works'
      id='how-it-works'
      className={cn('bl-section bl-rule bl-band-stone', className)}
    >
      <div className='bl-container'>
        {heading && (
          <SectionHeading
            kicker={t.kicker}
            title={t.title}
            accentWords={[...t.accent]}
            description={t.description}
          />
        )}

        <Stagger
          stagger={0.06}
          className={cn(
            'grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5',
            heading && 'mt-6 sm:mt-10',
          )}
        >
          {t.steps.map((step) => (
            <motion.article
              key={step.title}
              variants={{
                hidden: reduce ? {} : { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease },
                },
              }}
              className='bl-card flex flex-col p-5 sm:p-6'
            >
              <p className='bl-label'>{step.when}</p>
              <h3 className='bl-display mt-3 max-w-[15ch] text-2xl text-foreground'>
                {step.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                {step.summary}
              </p>
            </motion.article>
          ))}
        </Stagger>

        <Reveal className='mt-6 border-t pt-6 sm:mt-10'>
          <Link
            href={paths.contact}
            className='bl-btn bl-btn-ink inline-flex h-12 items-center gap-3 px-6'
          >
            {t.cta}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

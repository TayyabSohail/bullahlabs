import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';

const plans = [
  {
    name: 'AI Clarity Sprint',
    timing: '2 weeks',
    summary: 'Find the work AI can improve first.',
    points: [
      'Workflow audit',
      'Prioritised opportunities',
      'Clear next-step plan',
    ],
  },
  {
    name: 'Team Enablement',
    timing: '4-6 weeks',
    summary: "Make AI useful in your team's everyday work.",
    points: [
      'Practical training',
      'Team-specific playbooks',
      'Measured adoption',
    ],
    featured: true,
  },
  {
    name: 'Build Partnership',
    timing: 'Ongoing',
    summary: 'Design and build the product worth making.',
    points: [
      'Product strategy',
      'Lean delivery team',
      'Responsible AI by default',
    ],
  },
];

/** Three concise engagements, each beginning with the same contact path. */
export function Pricing() {
  return (
    <section
      className='bl-section bl-rule bl-band-stone'
      data-section='pricing'
    >
      <div className='bl-container'>
        <div className='max-w-2xl'>
          <Reveal>
            <p className='bl-kicker'>Pricing</p>
          </Reveal>
          <TextReveal
            as='h1'
            text='Start with the work that matters most.'
            accentWords={[5, 6]}
            className='bl-display mt-5 text-display-lg text-ink'
          />
          <Reveal delay={0.12}>
            <p className='mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              Focused engagements, shaped around your team. Tell us what you
              need and we'll send a clear scope and proposal.
            </p>
          </Reveal>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6'>
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={0.08 * index} className='h-full'>
              <article
                className={`flex h-full min-h-[31rem] flex-col border p-6 sm:p-8 ${
                  plan.featured
                    ? 'border-ink bg-ink text-white'
                    : 'border-ink/20 bg-surface text-ink'
                }`}
              >
                <div className='border-current/20 flex items-start justify-between gap-4 border-b pb-5'>
                  <h2 className='bl-display text-3xl leading-none'>
                    {plan.name}
                  </h2>
                  <span className='shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] opacity-65'>
                    {plan.timing}
                  </span>
                </div>
                <p className='mt-6 text-lg leading-snug'>{plan.summary}</p>
                <ul className='mt-8 space-y-4 text-sm leading-relaxed'>
                  {plan.points.map((point) => (
                    <li key={point} className='flex gap-3'>
                      <Check className='mt-0.5 h-4 w-4 shrink-0 text-brand-text' />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={paths.contact}
                  className={`mt-auto inline-flex h-12 items-center justify-between border px-4 pt-0.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors ${
                    plan.featured
                      ? 'border-white/30 text-white hover:bg-white hover:text-ink'
                      : 'border-ink/30 text-ink hover:bg-ink hover:text-white'
                  }`}
                >
                  Talk about this <ArrowUpRight className='h-4 w-4' />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

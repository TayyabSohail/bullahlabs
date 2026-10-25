import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';

/** The editorial opening and principles supplied for the Conscious AI page. */
export function ConsciousAiHero() {
  return (
    <section className='bg-ink text-white'>
      <div className='bl-container relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40'>
        <div
          aria-hidden='true'
          className='absolute -right-24 top-8 h-72 w-72 rounded-full border border-brand/20 shadow-[0_0_0_5rem_hsl(var(--brand)/0.035),0_0_0_10rem_hsl(var(--brand)/0.02)]'
        />
        <div className='relative mx-auto max-w-5xl text-center sm:mx-0 sm:text-left'>
          <p className='bl-kicker text-brand-2'>
            Conscious AI
          </p>
          <h1 className='bl-display mt-6 text-display-xl leading-[0.94] text-white'>
            <span className='block'>Not more AI.</span>
            <span className='bl-accent mt-1 block text-brand-2'>Better AI.</span>
          </h1>
          <p className='mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base'>
            Use it with purpose. Keep your judgement.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3 sm:justify-start'>
            <Link
              href={`${paths.contact}?service=team`}
              className='bl-btn bl-btn-primary inline-flex h-11 items-center gap-2 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]'
            >
              Book a time with us <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConsciousAiPrinciples() {
  const principles = [
    ['FOMO, weekly.', 'A new model every Monday. Homework every Tuesday.'],
    ['Faster. Cheaper. You?', 'The boss just discovered AI. Awkward.'],
    [
      'Hot and thirsty.',
      'Data centres guzzle power and water. You never see the receipt.',
    ],
  ];
  const moves = [
    ['01', 'Use it on purpose', 'If a formula can do it, let it.'],
    ['02', 'Pick the right size', 'Smaller model, smaller footprint.'],
    ['03', 'Stay the expert', 'AI drafts. You decide.'],
  ];

  return (
    <>
      <section id='principles' className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <p className='bl-kicker'>The problem</p>
          <TextReveal
            as='h2'
            text='Everyone says use AI. Nobody says how.'
            accentWords={[2, 3]}
            className='bl-display mt-5 max-w-3xl text-display-lg text-foreground'
          />
          <div className='mt-8 grid gap-3 md:grid-cols-3'>
            {principles.map(([title, body]) => (
              <article key={title} className='bl-card p-5'>
                <h3 className='bl-display text-xl text-foreground'>{title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </article>
            ))}
          </div>
          <p className='bl-card-ink mt-5 border-brand px-6 py-6 text-center font-display text-2xl text-white sm:text-3xl'>
            We panic-prompt.{' '}
            <span className='bl-accent text-brand-2'>The planet pays.</span>
          </p>
        </div>
      </section>
      <section className='bl-section bl-rule bg-background'>
        <div className='bl-container'>
          <p className='bl-kicker'>The fix</p>
          <TextReveal
            as='h2'
            text='Better AI, in three moves.'
            accentWords={[2, 3, 4]}
            className='bl-display mt-5 text-display-lg text-foreground'
          />
          <div className='mt-8 grid border border-ink bg-surface md:grid-cols-3'>
            {moves.map(([number, title, body]) => (
              <article
                key={number}
                className='border-b border-ink/20 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0'
              >
                <p className='font-mono text-[10px] font-semibold tracking-[0.18em] text-brand-text'>
                  {number}
                </p>
                <h3 className='bl-display mt-3 text-2xl text-foreground'>
                  {title}
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

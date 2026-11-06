import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** The Upskilling offers, laid out as vertical cards for the standalone page. */
export function Pricing({ dict }: { dict: Dictionary }) {
  const t = dict.upskillingPage.pricing;
  const audit = t.audit;

  return (
    <section
      className='bl-section bl-rule bg-[hsl(var(--band-peach))]'
      data-section='pricing'
    >
      <div className='bl-container'>
        <div className='max-w-2xl'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h1'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 text-display-lg text-ink'
          />
          <Reveal delay={0.12}>
            <p className='mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {t.aside}
            </p>
          </Reveal>
        </div>

        <div className='mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:mt-16 lg:auto-rows-fr lg:grid-cols-4 lg:gap-6'>
          <Reveal className='flex h-full'>
            <article className='flex h-full min-h-[40rem] w-full flex-col border border-ink bg-ink p-7 text-white shadow-[0_1rem_2.5rem_-2.25rem_hsl(var(--ink)/0.8)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1.75rem_3.5rem_-2.25rem_hsl(var(--ink)/0.85)] sm:p-9 lg:min-h-[44rem] lg:p-7 xl:p-9'>
              <p className='bl-kicker text-white/60 [&::after]:text-brand-2 [&::before]:text-brand-2'>
                {audit.kicker}
              </p>
              <p className='mt-8 font-display text-5xl tabular-nums text-brand-2'>
                {audit.price}
              </p>
              <h2 className='bl-display mt-6 text-3xl leading-[1.05]'>
                {audit.title}
              </h2>
              <p className='mt-5 text-base leading-relaxed text-white/75'>
                {audit.body}
              </p>
              <ul className='mt-8 space-y-4 text-base leading-relaxed text-white/90'>
                {audit.items.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-brand-2' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='mt-auto border-t border-white/20 pt-6'>
                <Link
                  href={paths.contact}
                  className='bl-btn inline-flex h-14 w-full items-center justify-between gap-4 border border-white/50 px-5 font-sans text-sm font-semibold transition-colors hover:bg-white hover:text-ink'
                >
                  {audit.cta} <ArrowUpRight className='h-4 w-4' />
                </Link>
              </div>
            </article>
          </Reveal>

          {t.plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={0.08 * (index + 1)}
              className='flex h-full'
            >
              <article
                className={`relative flex h-full min-h-[40rem] w-full flex-col border bg-surface p-7 text-ink shadow-[0_1rem_2.5rem_-2.25rem_hsl(var(--ink)/0.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1.75rem_3.5rem_-2.25rem_hsl(var(--ink)/0.55)] sm:p-9 lg:min-h-[44rem] lg:p-7 xl:p-9 ${plan.recommended ? 'border-2 border-brand shadow-[0_1.5rem_3rem_-2.5rem_hsl(var(--brand)/0.38)]' : 'border-ink/30'}`}
              >
                {plan.recommended ? (
                  <p className='w-fit bg-brand px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-foreground'>
                    {t.recommended}
                  </p>
                ) : (
                  <p className='bl-label'>0{index + 1}</p>
                )}
                <h2 className='bl-display mt-6 text-3xl leading-[1.05]'>
                  {plan.name}
                </h2>
                <p className='mt-8 font-display text-4xl tabular-nums'>
                  {plan.from && <span className='bl-label mr-1'>{t.from}</span>}
                  {plan.price}
                </p>
                <p className='mt-6 text-lg font-medium leading-snug'>
                  {plan.lead}
                </p>
                <ul className='mt-8 space-y-4 text-base leading-relaxed text-muted-foreground'>
                  {plan.items.map((item) => (
                    <li key={item} className='flex gap-3'>
                      <Check className='mt-0.5 h-4 w-4 shrink-0 text-brand-text' />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className='mt-auto border-t border-ink/15 pt-6'>
                  <Link
                    href={paths.contact}
                    className={`bl-btn inline-flex h-14 w-full items-center justify-between gap-4 px-5 font-sans text-sm font-semibold ${plan.recommended ? 'bl-btn-primary' : 'bl-btn-secondary'}`}
                  >
                    {plan.cta} <ArrowUpRight className='h-4 w-4' />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className='bl-label mt-7'>{t.note}</p>
      </div>
    </section>
  );
}

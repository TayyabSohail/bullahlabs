import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

import { paths } from '@/constants/paths';
import { getDictionary } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Conscious AI for Teams',
  description:
    'Practical AI training, workflow audits and guidance for teams that want more value with less waste.',
  alternates: { canonical: paths.teams },
};

const familiar = [
  ['AI everywhere.', "Half the team quietly wonders if they're next."],
  ['Which model for what?', 'Shrugs all round.'],
  ['The AI bill grows.', 'The results, not so much.'],
  ['Your sustainability report', 'has an AI-shaped hole.'],
];

const workflow = [
  ['01', 'Audit', 'Map it. Measure it. Footprint included.'],
  ['02', 'Plan', 'Rank fixes by impact and risk.'],
  ['03', 'Fix & train', 'Big wins first. Quality checked.'],
  ['04', 'Repeat', 'Next workflow, please.'],
];

const offers = [
  [
    'First steps',
    'Workshops',
    'Turn AI anxiety into confidence, on your real tasks. Which tool when, and how to check it.',
    'Book a workshop',
  ],
  [
    'First steps',
    'Guidance',
    'Shared rules for tools, data, cost and carbon. So using AI finally comes with instructions.',
    'Ask about guidance',
  ],
  [
    'For grown-ups',
    'Audit & optimise',
    'AI that fits your workflow. We map the workflow, find wasted compute and cut it. Measured before and after.',
    'Start an audit',
  ],
];

const waste = [
  ['A lorry delivering a letter', 'Oversized model'],
  ['A filing cabinet at every meeting', 'Too much context'],
  ['Ordering the whole menu for one dish', 'Over-eager retrieval'],
  ['A novelist adding up a receipt', 'AI doing simple jobs'],
  ['Circling the block after arriving', 'Extra steps'],
];

function ContactButton({
  children,
  tone = 'primary',
}: {
  children: React.ReactNode;
  tone?: 'primary' | 'secondary';
}) {
  return (
    <Link
      href={`${paths.contact}?service=team`}
      className={`bl-btn ${tone === 'primary' ? 'bl-btn-primary' : 'bl-btn-secondary'} inline-flex h-12 items-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]`}
    >
      {children}
      <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
    </Link>
  );
}

function BookingButton() {
  return <ContactButton>Talk through your workflow</ContactButton>;
}

export default async function ConsciousAiTeamsPage() {
  const dict = await getDictionary();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, href: paths.home },
          { name: dict.nav.program, href: paths.program },
          { name: 'For teams', href: paths.teams },
        ]}
      />

      <section className='bl-band-ink border-b border-ink'>
        <div className='bl-container min-h-[31rem] pb-16 pt-32 text-center sm:min-h-[34rem] sm:pt-40 sm:text-left lg:min-h-[38rem] lg:pb-20 lg:pt-48'>
          <Reveal>
            <p className='bl-kicker text-white/65'>Conscious AI for teams</p>
          </Reveal>
          <TextReveal
            as='h1'
            text='Your team uses AI. Is it paying off?'
            accentWords={[6, 7]}
            className='bl-display mx-auto mt-8 max-w-[17ch] justify-center text-display-lg text-white sm:mx-0 sm:justify-start sm:text-display-xl [&_.bl-accent]:text-brand-2'
          />
          <Reveal delay={0.2}>
            <p className='mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:mx-0 sm:text-lg'>
              We cut wasted compute from your AI. Off the bill. Off the
              footprint. Never off the quality.
            </p>
            <div className='mt-9 flex justify-center sm:justify-start'>
              <BookingButton />
            </div>
          </Reveal>
        </div>
      </section>

      <section className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <p className='bl-kicker'>Sound familiar?</p>
          <TextReveal
            as='h2'
            text='AI everywhere. A plan nowhere.'
            accentWords={[2, 3]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {familiar.map(([title, body]) => (
              <Reveal key={title} className='bl-card p-5'>
                <h3 className='bl-display text-xl'>{title}</h3>
                <p className='mt-2 text-sm leading-snug text-muted-foreground'>
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='bl-section bl-rule bg-background'>
        <div className='bl-container'>
          <p className='bl-kicker'>How we work</p>
          <TextReveal
            as='h2'
            text='One workflow at a time.'
            accentWords={[2, 3, 4]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid overflow-hidden border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4'>
            {workflow.map(([number, title, body]) => (
              <div
                key={number}
                className='border-b border-r border-ink/40 bg-surface p-5 last:border-b-0 sm:p-6 lg:border-b-0'
              >
                <div className='flex items-baseline gap-3 sm:block'>
                  <span className='shrink-0 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-text'>
                    {number}
                  </span>
                  <h3 className='bl-display text-2xl sm:mt-4'>{title}</h3>
                </div>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <p className='bl-kicker'>Any size</p>
          <TextReveal
            as='h2'
            text='Pick your starting point.'
            accentWords={[2, 3, 4]}
            className='bl-display mt-5 text-display-lg'
          />
          <div className='mt-9 grid gap-5 lg:grid-cols-3'>
            {offers.map(([tag, title, body, cta], index) => (
              <Reveal
                key={title}
                className={`flex min-h-0 flex-col ${index === 2 ? 'bl-card-ink' : 'bl-card'} p-5 sm:min-h-80 sm:p-8`}
              >
                <p
                  className={`inline-block w-fit border px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] ${index === 2 ? 'border-brand/70 text-brand-2' : 'border-ink/40 text-muted-foreground'}`}
                >
                  {tag}
                </p>
                <h3
                  className={`bl-display mt-3 text-3xl sm:mt-5 ${index === 2 ? 'text-white' : ''}`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed sm:mt-3 ${index === 2 ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  {body}
                </p>
                <Link
                  href={`${paths.contact}?service=team`}
                  className={`bl-action mt-6 sm:mt-auto sm:pt-8 ${index === 2 ? 'text-brand-2 hover:text-brand-2' : ''}`}
                >
                  {cta} <ArrowUpRight className='h-3.5 w-3.5' />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='bl-section bl-rule bg-background'>
        <div className='bl-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center'>
          <div>
            <p className='bl-kicker'>Things an audit finds</p>
            <TextReveal
              as='h2'
              text='Waste we hunt for.'
              accentWords={[2, 3]}
              className='bl-display mt-5 max-w-[10ch] text-display-lg'
            />
            <p className='mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              Prompts, models, retrieval, tools, steps. Plus cost, speed and
              estimated energy.
            </p>
          </div>
          <Reveal className='bl-card divide-y divide-line'>
            {waste.map(([item, label]) => (
              <div
                key={item}
                className='flex items-center justify-between gap-5 p-4 sm:px-6'
              >
                <p className='font-display text-base font-semibold'>{item}</p>
                <span className='shrink-0 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-text'>
                  {label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className='bl-section bl-rule bl-band-stone'>
        <div className='bl-container'>
          <div className='grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end'>
            <div>
              <p className='bl-kicker'>What changes</p>
              <TextReveal
                as='h2'
                text='Useful AI, with a plan behind it.'
                accentWords={[2, 3, 4, 5, 6]}
                className='bl-display mt-5 max-w-[12ch] text-display-lg'
              />
            </div>
            <p className='max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              You leave with decisions your team can use tomorrow - not another
              dashboard to maintain.
            </p>
          </div>
          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            {[
              [
                'A shared way of working',
                'Clear choices on tools, prompting, checking work and when not to use AI.',
              ],
              [
                'A smaller, smarter stack',
                'The models and steps that earn their place - and the expensive clutter that does not.',
              ],
              [
                'A written next-step plan',
                'Prioritised improvements, owners and a realistic way to measure the result.',
              ],
            ].map(([title, body]) => (
              <Reveal key={title} className='bl-card p-6 sm:p-8'>
                <h3 className='bl-display text-2xl'>{title}</h3>
                <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
          <p className='mt-8 border-l-2 border-brand pl-5 text-sm leading-relaxed text-muted-foreground'>
            We use the minimum access needed to understand a workflow. Your data
            stays your business.
          </p>
          <Reveal className='bl-card-ink mt-12 flex min-h-72 flex-col items-center justify-center p-8 text-center'>
            <h2 className='bl-display max-w-[13ch] text-display-lg text-white'>
              Bring one workflow.{' '}
              <span className='bl-accent text-brand-2'>
                We'll bring the scissors.
              </span>
            </h2>
            <p className='mt-5 max-w-md text-sm leading-relaxed text-white/65'>
              Start with one honest conversation. We'll tell you whether a
              workshop, guidance or an audit is the right next move.
            </p>
            <div className='mt-8'>
              <BookingButton />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
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
  openGraph: {
    title: 'Conscious AI for Teams | Bullah Labs',
    description:
      'Make AI useful in the work your team actually does — with less cost, waste and uncertainty.',
    url: paths.teams,
  },
};

const familiar = [
  ['AI everywhere.', 'Half the team quietly wonders if they’re next.'],
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
  ],
  [
    'First steps',
    'Guidance',
    'Shared rules for tools, data, cost and carbon. So “use AI” finally comes with instructions.',
  ],
  [
    'For grown-ups',
    'Audit & optimise',
    'AI that fits your workflow. We map the workflow, find wasted compute and cut it. Measured before and after.',
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

      <section className='bl-container grid min-h-[42rem] items-center gap-10 pb-16 pt-32 sm:pt-40 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 lg:pt-48'>
        <div>
          <Reveal>
            <p className='bl-kicker'>Conscious AI for teams</p>
          </Reveal>
          <TextReveal
            as='h1'
            text='Your team uses AI. Is it paying off?'
            accentWords={[5, 6, 7]}
            className='bl-display mt-5 max-w-[13ch] text-display-xl text-foreground'
          />
          <Reveal delay={0.2}>
            <p className='mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              We cut wasted compute from your AI. Off the bill. Off the
              footprint. Never off the quality.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <ContactButton>Book a time with us</ContactButton>
              <ContactButton tone='secondary'>
                Talk to real humans
              </ContactButton>
            </div>
          </Reveal>
        </div>
        <Reveal
          delay={0.35}
          className='bl-card-ink ml-auto w-full max-w-md p-7 sm:p-9'
        >
          <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-2'>
            Our big question
          </p>
          <p className='bl-display mt-6 max-w-[16ch] text-3xl leading-[0.95] text-white'>
            Is this the smallest AI that reliably gets the job done?
          </p>
          <p className='mt-6 text-sm leading-relaxed text-white/65'>
            Quality first. Then we trim the fat, and the watts.
          </p>
        </Reveal>
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
                className='border-b border-r border-ink/40 bg-surface p-6 last:border-b-0 lg:border-b-0'
              >
                <span className='font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-text'>
                  {number}
                </span>
                <h3 className='bl-display mt-4 text-2xl'>{title}</h3>
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
            {offers.map(([tag, title, body], index) => (
              <Reveal
                key={title}
                className={
                  index === 2 ? 'bl-card-ink p-6 sm:p-8' : 'bl-card p-6 sm:p-8'
                }
              >
                <p
                  className={`inline-block border px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] ${index === 2 ? 'border-brand/70 text-brand-2' : 'border-ink/40 text-muted-foreground'}`}
                >
                  {tag}
                </p>
                <h3
                  className={`bl-display mt-5 text-3xl ${index === 2 ? 'text-white' : ''}`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${index === 2 ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  {body}
                </p>
                <Link
                  href={`${paths.contact}?service=team`}
                  className={`bl-action mt-8 ${index === 2 ? 'text-brand-2' : ''}`}
                >
                  Format & price <ArrowUpRight className='h-3.5 w-3.5' />
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
          <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end'>
            <div>
              <p className='bl-kicker'>In development · product</p>
              <TextReveal
                as='h2'
                text='Conscious AI.'
                className='bl-display mt-5 text-display-lg'
              />
              <p className='bl-display mt-1 text-2xl italic text-brand-text'>
                A fitness tracker for your team’s AI habits, footprint included.
              </p>
            </div>
            <Link
              href={paths.program}
              className='bl-btn bl-btn-primary inline-flex h-11 items-center px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]'
            >
              Get early access
            </Link>
          </div>
          <p className='mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground'>
            See which AI gets used for what, what it costs in money and energy,
            and where a smaller tool could do the job.
          </p>
          <div className='mt-9 grid gap-5 md:grid-cols-3'>
            {['Usage by task', 'Both bills', 'Right-size tips'].map(
              (label, index) => (
                <div key={label} className='bl-card aspect-[1.5] p-4'>
                  <div className='flex gap-1'>
                    <i className='h-1.5 w-1.5 rounded-full bg-ink/30' />
                    <i className='h-1.5 w-1.5 rounded-full bg-ink/30' />
                    <i className='h-1.5 w-1.5 rounded-full bg-ink/30' />
                  </div>
                  <div className='mt-5 flex h-[calc(100%-1.5rem)] items-center justify-center border border-dashed border-ink/25 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,hsl(var(--ink)/0.04)_5px,hsl(var(--ink)/0.04)_8px)]'>
                    <span className='font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                      {index === 0
                        ? 'See usage'
                        : index === 1
                          ? 'See cost'
                          : 'See fixes'}
                    </span>
                  </div>
                  <p className='mt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em]'>
                    {label}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className='bl-section bl-rule bg-background'>
        <div className='bl-container'>
          <div className='grid gap-8 lg:grid-cols-[0.7fr_1.3fr]'>
            <div>
              <p className='bl-kicker'>Your data</p>
              <TextReveal
                as='h2'
                text='Your data stays your business.'
                accentWords={[2, 3, 4]}
                className='bl-display mt-5 max-w-[12ch] text-display-lg'
              />
            </div>
            <div className='grid gap-4 sm:grid-cols-3'>
              {[
                'Data minimisation',
                'Retention & deletion',
                'Confidentiality',
              ].map((item) => (
                <div
                  key={item}
                  className='border-t border-ink pt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground'
                >
                  <Check className='mb-3 h-4 w-4 text-brand-text' />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Reveal className='bl-card-ink mt-12 flex min-h-72 flex-col items-center justify-center p-8 text-center'>
            <Sparkles className='h-6 w-6 text-brand-2' />
            <h2 className='bl-display mt-6 max-w-[13ch] text-display-lg text-white'>
              Bring one workflow.{' '}
              <span className='bl-accent text-brand-2'>
                We’ll bring the scissors.
              </span>
            </h2>
            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <ContactButton>Book a time with us</ContactButton>
              <ContactButton tone='secondary'>
                Talk to real humans
              </ContactButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

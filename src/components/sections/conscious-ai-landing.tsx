import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { BookCallButton } from '@/components/contact/book-call-button';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import type { Faq } from '@/data/faqs';
import type { Dictionary } from '@/i18n/dictionaries/en';

const teamHref = `${paths.contact}?service=team`;

/**
 * The planet's tab, printed. The same example as the home hero's map:
 * contract summaries for one team over a year, the usual way against ours.
 */
const receipt = {
  task: 'Contract summaries · one team · one year',
  usual: {
    label: 'The usual way',
    route: 'Large model · full context',
    rows: [
      ['tokens', '288,000,000'],
      ['money', '$ 4,320'],
      ['carbon', '58 kg CO₂'],
    ],
  },
  conscious: {
    label: 'Conscious AI',
    route: 'Need AI? · Lean model · You check',
    rows: [
      ['tokens', '9,600,000'],
      ['money', '$ 96'],
      ['carbon', '1.9 kg CO₂'],
    ],
  },
  saved: '98%',
};

function ReceiptBlock({
  label,
  route,
  rows,
  tone,
  delay,
}: {
  label: string;
  route: string;
  rows: string[][];
  tone: 'usual' | 'conscious';
  delay: number;
}) {
  const conscious = tone === 'conscious';
  return (
    <Reveal delay={delay} className='border-t border-dashed border-ink/40 pt-3'>
      <div className='flex items-baseline justify-between gap-3'>
        <span
          className={`shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${conscious ? 'text-brand-text' : 'text-muted-foreground'}`}
        >
          {label}
        </span>
        <span className='min-w-0 truncate font-mono text-[10px] text-muted-foreground'>
          {route}
        </span>
      </div>
      <dl className='mt-2 space-y-1'>
        {rows.map(([key, value]) => (
          <div
            key={key}
            className='flex items-baseline gap-2 font-mono text-[12px] sm:text-[13px]'
          >
            <dt className='text-muted-foreground'>{key}</dt>
            <span
              aria-hidden='true'
              className='flex-1 border-b border-dotted border-ink/35'
            />
            <dd
              className={`tabular-nums ${conscious ? 'font-semibold text-brand-text' : 'text-foreground line-through decoration-ink/40'}`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/** A till receipt for one year of AI, the usual way and ours. */
function PlanetReceipt() {
  return (
    <div className='relative mx-auto w-full max-w-sm lg:mr-0'>
      <div className='bl-card bl-receipt rotate-[-1.5deg] bg-surface'>
        <div className='flex items-center justify-between gap-3 border-b border-ink px-4 py-2.5'>
          <span className='flex items-center gap-1.5' aria-hidden='true'>
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
          </span>
          <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
            Receipt · the planet's tab
          </span>
        </div>
        <div className='space-y-4 px-5 pb-6 pt-5'>
          <Reveal>
            <p className='bl-display text-xl text-foreground'>{receipt.task}</p>
            <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
              Paid by: the planet · Settled by: you
            </p>
          </Reveal>
          <ReceiptBlock {...receipt.usual} tone='usual' delay={0.15} />
          <ReceiptBlock {...receipt.conscious} tone='conscious' delay={0.3} />
          <Reveal
            delay={0.45}
            className='flex items-center justify-between gap-3 border-t-2 border-ink pt-3'
          >
            <span className='font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground'>
              Saved
            </span>
            <span className='bl-display text-3xl text-brand-text'>
              {receipt.saved}
            </span>
          </Reveal>
        </div>
        <div aria-hidden='true' className='bl-receipt-edge' />
      </div>
      <span
        aria-hidden='true'
        className='bl-stamp-in absolute -right-3 -top-4 rotate-[12deg] border-2 border-brand bg-background/80 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text shadow-[3px_3px_0_0_hsl(var(--brand))] sm:-right-6'
      >
        Better AI
      </span>
    </div>
  );
}

/**
 * The opening: the essence in one headline, the tagline, both calls to
 * action, and the planet's tab printed beside them.
 */
export function ConsciousAiHero() {
  return (
    <section className='bl-grid-surface relative overflow-hidden border-b border-line bg-background'>
      <div className='bl-container grid gap-12 pb-16 pt-28 sm:pt-36 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16 lg:pb-24 lg:pt-40'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>Conscious AI · Our vision</p>
          </Reveal>
          <TextReveal
            as='h1'
            text='Not more AI. Better AI.'
            accentWords={[3, 4]}
            className='bl-display mt-6 max-w-[10ch] text-[clamp(2.9rem,7.2vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-ink'
          />
          <Reveal delay={0.2}>
            <p className='mt-7 max-w-lg text-lg leading-snug text-foreground sm:text-xl'>
              AI isn't free. The planet's picking up the tab. Use it where it
              counts, not just for token maxing.
            </p>
          </Reveal>
          <Reveal delay={0.3} className='mt-8 flex flex-wrap gap-3'>
            <Link
              href={teamHref}
              className='bl-btn bl-btn-primary inline-flex h-12 items-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]'
            >
              Book a time with us <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
            <a
              href='#community'
              className='bl-btn bl-btn-secondary inline-flex h-12 items-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]'
            >
              <Users className='h-3.5 w-3.5' aria-hidden='true' />
              Talk to real humans
            </a>
          </Reveal>
          <Reveal delay={0.4}>
            <a href='#ai-profile' className='bl-action mt-8 inline-flex'>
              <ArrowDown className='h-3.5 w-3.5' aria-hidden='true' />
              Start here
            </a>
          </Reveal>
        </div>
        <PlanetReceipt />
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

type Instructor = {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  /** Where the portrait is cropped to, as an object-position class. */
  focus: string;
  school: string;
  facts: [label: string, body: string][];
};

const instructors: Instructor[] = [
  {
    name: 'M. Umair Khan',
    firstName: 'Umair',
    role: 'Lead Instructor & Learning Advisor',
    tagline: 'Teacher of teachers.',
    bio: "Harvard-trained, Fulbright scholar, teacher of teachers. Umair co-founded ed-tech startup Quva and has worked in Pakistan's education sector since 2016. He makes sure our Conscious AI lessons actually stick.",
    image: '/images/umair-khan.jpg',
    focus: 'object-[center_18%]',
    school: 'Harvard Graduate School of Education',
    facts: [
      [
        'Before Bullah Labs',
        'Co-founded Quva (2018), ed-tech for teacher training; designed maths-pedagogy courses for teacher education in Pakistan',
      ],
      [
        'Education',
        "Master's in International Education Policy, Harvard Graduate School of Education · Mechanical engineer by training",
      ],
      [
        'Off the clock',
        'Calligraphy, poetry and classical music. Zero GPUs involved.',
      ],
    ],
  },
  {
    name: 'Umer Sohail',
    firstName: 'Umer',
    role: 'Instructor & Product Advisor',
    tagline: 'Picks problems worth solving.',
    bio: "Umer has spent 10+ years in tech, building and marketing B2B SaaS products. A mechanical engineer with a management master's from TUM, he picks problems worth solving, without creating new ones.",
    image: '/images/umer-sohail.jpg',
    focus: 'object-[center_30%]',
    school: 'Technical University of Munich',
    facts: [
      [
        'Before Bullah Labs',
        '10+ years in B2B SaaS product development and marketing',
      ],
      [
        'Education',
        'BSc Mechanical Engineering · MSc Management, Technical University of Munich',
      ],
    ],
  },
];

/** One instructor: portrait, role, short bio and a fold-out with the facts. */
function InstructorCard({
  name,
  role,
  tagline,
  bio,
  image,
  focus,
  school,
  facts,
}: Instructor) {
  return (
    <Reveal className='bl-card flex flex-col p-5 sm:p-6'>
      <div className='flex flex-wrap items-center gap-5'>
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          width={800}
          height={960}
          sizes='96px'
          className={`h-24 w-24 shrink-0 border border-ink object-cover shadow-[3px_3px_0_0_hsl(var(--brand))] ${focus}`}
        />
        <div className='min-w-0 flex-1 basis-48'>
          <span className='inline-block bg-ink px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white'>
            {role}
          </span>
          <h3 className='bl-display mt-3 text-2xl text-foreground sm:text-3xl'>
            {name}
          </h3>
          <p className='bl-accent font-display text-lg text-brand-text'>
            {tagline}
          </p>
        </div>
      </div>

      <div className='mt-5 flex items-center gap-3 border border-ink bg-brand-soft/60 px-4 py-3 shadow-[3px_3px_0_0_hsl(var(--ink))]'>
        <GraduationCap
          className='h-6 w-6 shrink-0 text-brand-text'
          aria-hidden='true'
        />
        <span className='min-w-0'>
          <span className='block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground'>
            Alumnus
          </span>
          <span className='block font-display text-lg font-semibold leading-tight text-foreground'>
            {school}
          </span>
        </span>
      </div>

      <p className='mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]'>
        {bio}
      </p>

      <dl className='mt-5 grid gap-3 border-t border-ink/20 pt-4'>
        {facts.map(([label, body]) => (
          <div key={label}>
            <dt className='font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-brand-text'>
              {label}
            </dt>
            <dd className='mt-1 text-sm font-semibold leading-snug text-foreground'>
              {body}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/** Who teaches the course: a heading of its own, then one card per instructor. */
export function CourseInstructor() {
  return (
    <div className='mt-10 border-t border-ink/20 pt-8 sm:mt-14 sm:pt-10'>
      <Reveal>
        <p className='bl-kicker'>Your instructors</p>
      </Reveal>
      <TextReveal
        as='h3'
        text='A teacher and a builder.'
        accentWords={[4]}
        className='bl-display mt-4 text-3xl text-foreground sm:text-4xl'
      />
      <div className='mt-7 grid gap-6 md:grid-cols-2'>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </div>
  );
}

const values = [
  ['01', 'Question the crowd.', "Popular isn't proof."],
  ['02', 'Substance over shiny.', "What matters beats what's new."],
  ['03', 'Hard problems first.', 'Tech for what actually needs fixing.'],
];

/** Where the name comes from: Bulleh Shah, and the three values we keep. */
export function OurRoots() {
  return (
    <section id='roots' className='bl-section bl-rule bl-band-ink text-white'>
      <div className='bl-container'>
        <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16'>
          <div>
            <Reveal>
              <p className='bl-kicker text-brand-2'>Our roots</p>
            </Reveal>
            <TextReveal
              as='h2'
              text='Ignoring the hype since the 1700s.'
              accentWords={[3, 4, 5]}
              className='bl-display mt-5 max-w-[14ch] text-display-lg text-white [&_.bl-accent]:text-brand-2'
            />
            <Reveal delay={0.2}>
              <p className='mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg'>
                Bulleh Shah, the Punjabi Sufi poet, refused to follow the crowd.
                He questioned what everyone repeated and chose what mattered
                over what was in fashion. We're doing the same with AI.
              </p>
              <Link
                href={paths.about}
                className='bl-btn bl-btn-primary mt-8 inline-flex h-12 items-center gap-3 px-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]'
              >
                Read our DNA
                <span
                  className='h-2 w-2 shrink-0 bg-white'
                  aria-hidden='true'
                />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <figure className='flex flex-wrap items-center gap-6 border border-white/30 p-6 shadow-[4px_4px_0_0_hsl(var(--brand))]'>
              <Image
                src='/images/bulleh-shah-portrait.webp'
                alt='Illustrated portrait of Bulleh Shah'
                width={320}
                height={320}
                sizes='(max-width: 640px) 96px, 128px'
                className='h-24 w-24 shrink-0 object-contain sm:h-32 sm:w-32'
              />
              <div className='min-w-0 flex-1 basis-56'>
                <blockquote className='bl-accent font-display text-xl leading-snug text-white sm:text-2xl'>
                  “Parh parh ilm hazaar kitaabaan, kade apne aap nu parhiya
                  nai.”
                </blockquote>
                <p className='mt-3 text-sm leading-relaxed text-white/65'>
                  Read a thousand books, yet never read yourself.
                </p>
                <figcaption className='mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50'>
                  Bulleh Shah · 1680–1757
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
        <div className='mt-10 grid border border-white/30 md:grid-cols-3'>
          {values.map(([number, title, body]) => (
            <article
              key={number}
              className='border-b border-white/20 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0'
            >
              <p className='font-mono text-[10px] font-semibold tracking-[0.18em] text-brand-2'>
                {number}
              </p>
              <h3 className='bl-display mt-3 text-2xl text-white'>{title}</h3>
              <p className='mt-2 text-sm text-white/65'>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Each offer links to its own card on the teams page. */
const teamOffers = [
  [
    '01',
    'For every team',
    'Workshops',
    'Turn AI anxiety into AI confidence, on your real tasks.',
    `${paths.teams}#workshops`,
  ],
  [
    '02',
    'For leadership',
    'Guidance',
    'Shared rules for tools, data, cost and carbon.',
    `${paths.teams}#guidance`,
  ],
  [
    '03',
    'For product & tech',
    'Audits',
    'We find the wasted compute in one workflow. Then we cut it.',
    `${paths.teams}#audits`,
  ],
];

const teamSteps = ['Audit', 'Plan', 'Fix & train', 'Repeat'];

/** The bridge to the teams page, kept short: three ways in, one strip of how it runs. */
export function ForTeamsBridge() {
  return (
    <section id='teams' className='bl-section bl-rule bg-background'>
      <div className='bl-container'>
        <div className='grid gap-4 md:grid-cols-[1fr_auto] md:items-end'>
          <div>
            <Reveal>
              <p className='bl-kicker'>For teams &amp; businesses</p>
            </Reveal>
            <TextReveal
              as='h2'
              text='Rolled out AI? Make it count.'
              accentWords={[3, 4, 5]}
              className='bl-display mt-4 text-3xl text-foreground sm:text-4xl lg:text-5xl'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base md:text-right'>
              Anxious teams. Growing AI bills. A footprint nobody's measuring.
              We tackle all three.
            </p>
          </Reveal>
        </div>

        <Reveal className='bl-card mt-6 grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
          {teamOffers.map(([number, tag, title, body, href]) => (
            <Link
              key={title}
              href={href}
              className='group flex flex-col gap-2 p-5 transition-colors hover:bg-brand-soft/40'
            >
              <span className='flex items-center justify-between gap-3'>
                <span className='font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground'>
                  {number} · {tag}
                </span>
                <ArrowUpRight
                  className='h-4 w-4 shrink-0 text-brand-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  aria-hidden='true'
                />
              </span>
              <span className='bl-display text-xl text-foreground sm:text-2xl'>
                {title}
              </span>
              <span className='text-sm leading-relaxed text-muted-foreground'>
                {body}
              </span>
            </Link>
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className='bl-card bl-card-ink mt-4 flex flex-col gap-5 p-5 text-white lg:flex-row lg:items-center lg:justify-between'
        >
          <ol className='flex flex-wrap items-center gap-x-5 gap-y-2'>
            <li className='font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-2'>
              How it goes
            </li>
            {teamSteps.map((title, index) => (
              <li key={title} className='flex items-center gap-2'>
                <span className='flex h-6 w-6 items-center justify-center border border-brand/70 font-mono text-[10px] font-semibold text-brand-2'>
                  {index + 1}
                </span>
                <span className='bl-display text-base text-white'>{title}</span>
              </li>
            ))}
          </ol>
          <div className='flex flex-wrap gap-3'>
            <Link
              href={teamHref}
              className='bl-btn bl-btn-primary inline-flex h-11 items-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]'
            >
              Book a time with us <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
            <Link
              href={`${paths.teams}#how`}
              className='inline-flex h-11 items-center gap-2 border border-white/25 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-brand'
            >
              How we work with teams <ArrowRight className='h-3.5 w-3.5' />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const consciousAiFaqs: Faq[] = [
  {
    question: 'Is this an anti-AI thing?',
    answer:
      'No. We use AI every day and we build with it. Conscious AI means using it on purpose: the right tool for the task, only the context it needs, and a person who checks the result. That usually gives better work, and it costs less money and energy along the way.',
  },
  {
    question: 'Will AI replace me?',
    answer:
      'AI replaces tasks much faster than it replaces people. The person at risk is the one who pastes in a prompt and trusts whatever comes back. Learn when AI helps, which tool fits and how to check the output, and you become the person your team relies on. The five-step profile above shows where you stand today and what to work on next.',
  },
  {
    question: 'Can one prompt really hurt the planet?',
    answer:
      'A single prompt costs very little. The problem is scale and habit: billions of prompts a day, often sent to the largest model with far more context than the task needs. A smaller model, a tighter prompt, or no AI at all where a formula or a search does the job cuts that footprint many times over. The receipt at the top of this page shows what that adds up to for one team over a year.',
  },
  {
    question: 'Do I need to be technical?',
    answer:
      'No. This is made for people in marketing, HR, finance, operations, sales and teaching, not for developers. Everything is shown on everyday work: emails, summaries, spreadsheets, research and planning. If you can describe your task, you can follow along.',
  },
  {
    question: 'What does it cost?',
    answer:
      'The AI profile, the course and the community are free. For teams, workshops, guidance and audits are scoped to your team and priced per engagement. Book a time and we will tell you what fits and what it costs before anything starts.',
  },
  {
    question: 'When does the course drop?',
    answer:
      'It is in production now. Join the waitlist in the course section and you will get the first lesson the day it is published. We only email you about the course, nothing else.',
  },
  {
    question: 'What happens to my answers and email?',
    answer:
      'Your profile answers are used to build your result and to shape the lessons. Your email is used only for the update you signed up for. We do not sell or share either, and you can ask us to delete them at any time. The details are in our privacy policy.',
  },
  {
    question: 'Why "Bullah"?',
    answer:
      'Bullah Labs is named after Bulleh Shah, the 18th-century Punjabi Sufi poet who questioned what the crowd repeated and chose substance over fashion. That is the attitude we bring to AI: question the hype, keep what works, and stay the one who decides.',
  },
];

/** Eight quick answers, in the page's own voice. */
export function ConsciousAiFaq() {
  return (
    <FaqSection
      items={consciousAiFaqs}
      kicker='FAQs'
      title='Ask away. No prompt engineering needed.'
      accentWords={[2, 3, 4, 5]}
      description='Still stuck? Ask a real human in the community below.'
      className='bl-rule bl-band-mint'
    />
  );
}

/** The closing panel: book a time, or talk to the humans. */
export function ConsciousAiClosing({ dict }: { dict: Dictionary }) {
  const buttonClassName =
    'inline-flex h-14 items-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]';

  return (
    <CtaBanner
      dict={dict}
      kicker='Conscious AI'
      title='Less FOMO. Fewer watts.'
      accentWords={[2, 3]}
      body='Bring a question, a workflow or a worry. A real person answers, within a business day.'
    >
      {siteConfig.calHandle ? (
        <BookCallButton
          calHandle={siteConfig.calHandle}
          hideIcon
          className={`bl-btn bl-btn-primary ${buttonClassName}`}
        >
          Book a time with us
          <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
        </BookCallButton>
      ) : (
        <Link
          href={teamHref}
          className={`bl-btn bl-btn-primary ${buttonClassName}`}
        >
          Book a time with us
          <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
        </Link>
      )}
      <a
        href='#community'
        className='inline-flex h-14 items-center gap-2 border border-white/25 px-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:border-brand'
      >
        <Users className='h-4 w-4' aria-hidden='true' />
        Talk to real humans
      </a>
    </CtaBanner>
  );
}

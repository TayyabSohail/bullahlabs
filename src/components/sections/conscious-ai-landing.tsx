import { ArrowUpRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { BookCallButton } from '@/components/contact/book-call-button';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import type { Faq } from '@/data/faqs';
import { type Instructor, instructors } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

const teamHref = paths.contact;

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
    <Reveal
      delay={delay}
      className='border-t border-dashed border-ink/40 pt-2.5 sm:pt-3'
    >
      <div className='flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3'>
        <span
          className={`shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${conscious ? 'text-brand-text' : 'text-muted-foreground'}`}
        >
          {label}
        </span>
        <span className='min-w-0 font-mono text-[10px] text-muted-foreground sm:truncate'>
          {route}
        </span>
      </div>
      <dl className='mt-1.5 space-y-0.5 sm:mt-2 sm:space-y-1'>
        {rows.map(([key, value]) => (
          <div
            key={key}
            className='flex items-baseline gap-2 font-mono text-[11px] sm:text-[13px]'
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
    <div className='relative mx-auto w-full max-w-[17.5rem] sm:max-w-sm md:mr-0'>
      <div className='bl-card bl-receipt rotate-[-1.5deg] bg-surface'>
        <div className='flex items-center justify-between gap-3 border-b border-ink px-3 py-2 sm:px-4 sm:py-2.5'>
          <span className='flex items-center gap-1.5' aria-hidden='true'>
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
            <span className='h-2 w-2 rounded-full border border-ink' />
          </span>
          <span className='font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
            Receipt · the planet's tab
          </span>
        </div>
        <div className='space-y-3 px-4 pb-5 pt-4 sm:space-y-4 sm:px-5 sm:pb-6 sm:pt-5'>
          <Reveal>
            <p className='bl-display text-base text-foreground sm:text-xl md:text-lg lg:text-xl'>
              {receipt.task}
            </p>
            <p className='mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] sm:tracking-[0.16em]'>
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
            <span className='bl-display text-2xl text-brand-text sm:text-3xl'>
              {receipt.saved}
            </span>
          </Reveal>
        </div>
        <div aria-hidden='true' className='bl-receipt-edge' />
      </div>
      {/* The stamp wears the SPOILER plate: a skewed ink bar with a diagonal
          stripe texture, white bold type, the key word lit in green, on a
          hard green shadow. The rotation lives on the wrapper so the
          stamp-in animation does not overwrite the skew. */}
      <span
        aria-hidden='true'
        className='bl-stamp-in absolute -right-3 -top-5 rotate-[12deg] sm:-right-6'
      >
        <span className='inline-block -skew-x-6 bg-ink bg-[repeating-linear-gradient(45deg,transparent_0_6px,hsl(0_0%_100%/0.07)_6px_8px)] px-3 py-1.5 shadow-[3px_3px_0_0_hsl(var(--brand))]'>
          <span className='inline-block skew-x-6 font-display text-lg font-bold leading-none text-white sm:text-xl'>
            Better <span className='bl-accent text-brand-2'>AI</span>
          </span>
        </span>
      </span>
    </div>
  );
}

/**
 * The opening: the essence in one headline, the tagline, one call to
 * action, and the planet's tab printed beside them.
 */
export function ConsciousAiHero() {
  return (
    <section className='bl-grid-surface relative overflow-hidden border-b border-line bg-background'>
      <div className='bl-container grid gap-10 pb-16 pt-28 sm:pt-36 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:pb-24 lg:pt-40'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>Our vision</p>
          </Reveal>
          {/* The page's name is the headline: one line, as large as the
              column allows, with "AI" in the emerald italic accent. */}
          <TextReveal
            as='h1'
            text='Conscious AI'
            accentWords={[1]}
            className='bl-display mt-5 text-[clamp(3.5rem,12.5vw,8.5rem)] leading-[0.9] tracking-[-0.035em] text-ink md:text-[7.4vw] lg:text-[clamp(5rem,8.2vw,8.5rem)]'
          />
          <TextReveal
            as='p'
            text='Not more AI. Better AI.'
            accentWords={[3, 4]}
            delay={0.25}
            className='bl-display mt-5 text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.05] text-foreground'
          />
          <Reveal delay={0.35}>
            <p className='mt-6 max-w-lg text-lg leading-snug text-foreground sm:text-xl'>
              AI isn't free. The planet's picking up the tab. Use it where it
              counts, not just for token maxing.
            </p>
          </Reveal>
          <Reveal
            delay={0.3}
            className='mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start'
          >
            <Link
              href={teamHref}
              className='bl-btn bl-btn-primary inline-flex h-12 w-full max-w-[16rem] items-center justify-center gap-2 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:w-auto sm:max-w-none'
            >
              Book a time with us <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          </Reveal>
        </div>
        <PlanetReceipt />
      </div>
    </section>
  );
}

/* Cells of the problem-and-fix ledger. Both columns live in one grid, so
   the classes are shared too: the same padding, type and number gutter on
   each side, and a static row-start lookup so Tailwind sees every class. */
const CELL_HEAD =
  'border-b px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em]';
const CELL_ROW =
  'grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 border-b px-5 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)]';
const CELL_NUMBER =
  'pt-1.5 font-mono text-[10px] font-semibold tracking-[0.18em]';
const ROW_START = ['md:row-start-2', 'md:row-start-3', 'md:row-start-4'];

export function ConsciousAiPrinciples() {
  const principles = [
    [
      '01',
      'FOMO, weekly.',
      'A new model every Monday. Homework every Tuesday.',
    ],
    ['02', 'Faster. Cheaper. You?', 'The boss just discovered AI. Awkward.'],
    [
      '03',
      'Hot and thirsty.',
      'Data centres guzzle power and water. You never see the receipt.',
    ],
  ];
  const moves = [
    ['01', 'Use it on purpose', 'If a formula can do it, let it.'],
    ['02', 'Pick the right size', 'Smaller model, smaller footprint.'],
    ['03', 'Stay the expert', 'AI drafts. You decide.'],
  ];

  /* The problem and the fix share one section: a two-column ledger, the
     three complaints on the left and the three moves that answer them on
     the right, so neither half takes a page of its own. */
  return (
    <section id='principles' className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container'>
        <div className='grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end'>
          <div>
            <p className='bl-kicker'>The problem, and the fix</p>
            <TextReveal
              as='h2'
              text='Everyone says use AI. Nobody says how.'
              accentWords={[2, 3]}
              className='bl-display mt-5 max-w-3xl text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='font-display text-2xl text-foreground sm:text-3xl md:text-right'>
              We panic-prompt.{' '}
              <span className='bl-accent text-brand-text'>
                The planet pays.
              </span>
            </p>
          </Reveal>
        </div>

        {/* One grid for both columns, every cell placed explicitly, so each
            complaint sits level with the move that answers it at any width.
            On phones the DOM order stacks the problems, then the moves. */}
        <div className='mt-8 grid border border-ink bg-surface md:grid-cols-2'>
          <p
            className={`${CELL_HEAD} border-ink/20 text-muted-foreground md:col-start-1 md:row-start-1 md:border-r md:border-r-ink`}
          >
            The problem
          </p>
          {principles.map(([number, title, body], index) => (
            <article
              key={number}
              className={`${CELL_ROW} ${ROW_START[index]} border-ink/20 md:col-start-1 md:border-r md:border-r-ink ${
                index === principles.length - 1
                  ? 'border-b-ink md:border-b-0'
                  : ''
              }`}
            >
              <p className={`${CELL_NUMBER} text-muted-foreground`}>{number}</p>
              <div className='min-w-0'>
                <h3 className='bl-display text-xl text-foreground'>{title}</h3>
                <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                  {body}
                </p>
              </div>
            </article>
          ))}

          <p
            className={`${CELL_HEAD} border-white/15 bg-ink text-brand md:col-start-2 md:row-start-1`}
          >
            The fix · Better AI, in three moves
          </p>
          {moves.map(([number, title, body], index) => (
            <article
              key={number}
              className={`${CELL_ROW} ${ROW_START[index]} border-white/15 bg-ink text-white md:col-start-2 ${
                index === moves.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <p className={`${CELL_NUMBER} text-brand`}>{number}</p>
              <div className='min-w-0'>
                <h3 className='bl-display text-xl'>{title}</h3>
                <p className='mt-1 text-sm leading-relaxed text-white/70'>
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** One instructor: portrait, role, short bio and a fold-out with the facts. */
function InstructorCard({
  name,
  firstName,
  role,
  tagline,
  bio,
  image,
  focus,
  school,
  facts,
}: Instructor) {
  return (
    <Reveal className='bl-card w-full p-5 sm:p-8 lg:p-10'>
      <div className='grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12'>
        {/* Portrait: a square on phones, a tall plate beside the text on desktop. */}
        <div className='flex justify-center lg:block'>
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            width={800}
            height={960}
            sizes='(min-width: 1024px) 240px, (min-width: 640px) 160px, 128px'
            className={`h-32 w-32 border border-ink object-cover shadow-[4px_4px_0_0_hsl(var(--brand))] sm:h-40 sm:w-40 lg:aspect-[5/6] lg:h-auto lg:w-full ${focus}`}
          />
        </div>

        <div className='min-w-0 text-center lg:text-left'>
          <span className='inline-block bg-ink px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px]'>
            {role}
          </span>
          <h3 className='bl-display mt-4 text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]'>
            {name}
          </h3>
          <p className='bl-accent mt-1 font-display text-xl text-brand-text sm:text-2xl'>
            {tagline}
          </p>

          <div className='mt-6 flex items-center gap-4 border border-ink bg-brand-soft/60 px-4 py-3.5 text-left shadow-[3px_3px_0_0_hsl(var(--ink))] sm:gap-5 sm:px-5 sm:py-4'>
            <HarvardShield className='h-14 w-auto shrink-0 sm:h-16' />
            <span className='min-w-0'>
              <span className='block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]'>
                Alumnus
              </span>
              <span className='mt-0.5 block font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl'>
                {school}
              </span>
            </span>
          </div>

          <p className='mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg'>
            {bio}
          </p>
        </div>
      </div>

      <details className='group mt-7 border-t border-ink/20 pt-5 text-center lg:mt-8 lg:text-left'>
        <summary className='bl-action cursor-pointer list-none text-xs sm:text-[13px] [&::-webkit-details-marker]:hidden'>
          More about {firstName}
          <Plus
            className='h-4 w-4 transition-transform duration-200 group-open:rotate-45'
            aria-hidden='true'
          />
        </summary>
        <dl className='mt-5 grid gap-5 text-left sm:grid-cols-3 sm:gap-8'>
          {facts.map(([label, body]) => (
            <div key={label} className='sm:border-l sm:border-ink/20 sm:pl-4'>
              <dt className='font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand-text sm:text-[11px]'>
                {label}
              </dt>
              <dd className='mt-1.5 text-[15px] font-semibold leading-snug text-foreground sm:text-base'>
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </details>
    </Reveal>
  );
}

/** Who teaches the course: a heading of its own, then one card per instructor. */
export function CourseInstructor() {
  return (
    <div className='mt-10 border-t border-ink/20 pt-8 text-center sm:mt-14 sm:pt-10'>
      <Reveal>
        <p className='bl-kicker'>Your instructor</p>
      </Reveal>
      <TextReveal
        as='h3'
        text='Taught by a teacher of teachers.'
        accentWords={[5]}
        className='bl-display mx-auto mt-4 max-w-2xl text-3xl text-foreground sm:text-4xl'
      />
      <div className='mx-auto mt-8 grid w-full max-w-4xl gap-6 text-left sm:mt-10'>
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
            <figure className='border border-white/30 p-6 shadow-[4px_4px_0_0_hsl(var(--brand))] sm:p-8'>
              <div className='flex items-center gap-5'>
                <Image
                  src='/images/bulleh-shah-portrait.webp'
                  alt='Illustrated portrait of Bulleh Shah'
                  width={320}
                  height={320}
                  sizes='(max-width: 640px) 72px, 96px'
                  className='h-[72px] w-[72px] shrink-0 object-contain sm:h-24 sm:w-24'
                />
                <figcaption className='font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/60'>
                  Bulleh Shah
                  <br />
                  <span className='text-white/40'>1680–1757</span>
                </figcaption>
              </div>
              <blockquote className='mt-6 border-t border-white/20 pt-6'>
                <p
                  lang='pa-Arab'
                  dir='rtl'
                  className='urdu-khatati text-right text-xl text-white sm:text-2xl'
                >
                  پڑھ پڑھ علم ہزار کتاباں، کدے اپنے آپ نوں پڑھیا نئیں
                </p>
                <p
                  lang='pa-Guru'
                  className='gurmukhi-lipi mt-5 text-lg text-white/80 sm:text-xl'
                >
                  ਪੜ੍ਹ ਪੜ੍ਹ ਇਲਮ ਹਜ਼ਾਰ ਕਿਤਾਬਾਂ, ਕਦੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪੜ੍ਹਿਆ ਨਈਂ
                </p>
              </blockquote>
              <p className='bl-accent mt-6 font-display text-lg leading-snug text-white/85 sm:text-xl'>
                Read a thousand books, yet never read yourself.
              </p>
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
    </CtaBanner>
  );
}

/** Three ways in for teams; each links to its own card on the teams page. */
const teamOffers = [
  [
    '01',
    'Workshops',
    'Turn AI anxiety into AI confidence, on your real tasks.',
    `${paths.teams}#workshops`,
  ],
  [
    '02',
    'Guidance',
    'Shared rules for tools, data, cost and carbon.',
    `${paths.teams}#guidance`,
  ],
  [
    '03',
    'Audits',
    'We find the wasted compute in one workflow. Then we cut it.',
    `${paths.teams}#audits`,
  ],
] as const;

/** Three ways in for people who build: each row leads to /services. */
const buildOffers = [
  [
    '01',
    'Product development',
    'From a rough idea to a product people pay for.',
    paths.services,
  ],
  [
    '02',
    'Engineering',
    'Web, mobile and backend, built to last and to be measured.',
    paths.services,
  ],
  [
    '03',
    'AI automation & integrations',
    'The boring work, automated. Only where it actually pays.',
    paths.services,
  ],
] as const;

type Offer = (typeof teamOffers)[number] | (typeof buildOffers)[number];

/** One shared button measure so the two cards' actions line up. */
const nextStepButton =
  'bl-btn inline-flex h-11 items-center gap-2 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]';

const inkGhostButton = `${nextStepButton} border border-white/45 text-white hover:border-white hover:bg-white/10`;

/**
 * One offer per row: number, title and a half-line of body on the same
 * baseline, so three rows read as a list rather than three paragraphs.
 */
function OfferRows({
  offers,
  ink,
}: {
  offers: readonly Offer[];
  ink: boolean;
}) {
  return (
    <ul
      className={
        ink
          ? 'mt-6 divide-y divide-white/15 border-y border-white/15'
          : 'mt-6 divide-y divide-ink/15 border-y border-ink/15'
      }
    >
      {offers.map(([number, title, body, href]) => (
        <li key={title}>
          <Link
            href={href}
            className={`group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 py-3.5 transition-colors ${
              ink ? 'hover:bg-white/5' : 'hover:bg-brand-soft'
            }`}
          >
            <span
              className={`font-mono text-[10px] font-semibold ${
                ink ? 'text-brand-2' : 'text-brand-text'
              }`}
            >
              {number}
            </span>
            <span className='min-w-0'>
              <span
                className={`bl-display mr-2 text-lg sm:text-xl ${
                  ink ? 'text-white' : 'text-foreground'
                }`}
              >
                {title}
              </span>
              <span
                className={`text-sm leading-relaxed ${
                  ink ? 'text-white/65' : 'text-muted-foreground'
                }`}
              >
                {body}
              </span>
            </span>
            <ArrowUpRight
              className={`h-4 w-4 shrink-0 self-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                ink ? 'text-brand-2' : 'text-brand-text'
              }`}
              aria-hidden='true'
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Two doors out of the Conscious AI page, built on the same skeleton: kicker,
 * title, one line of body, three offer rows, then the same pair of buttons.
 * Teams and business leads on ink; Services is the lighter second card.
 */
export function ConsciousAiNextSteps() {
  const bookCall = (className: string) =>
    siteConfig.calHandle ? (
      <BookCallButton
        calHandle={siteConfig.calHandle}
        hideIcon
        className={className}
      >
        Book a time
      </BookCallButton>
    ) : (
      <Link href={teamHref} className={className}>
        Book a time
      </Link>
    );

  return (
    <section id='next-steps' className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container'>
        <div className='grid gap-4 md:grid-cols-[1fr_auto] md:items-end'>
          <div>
            <Reveal>
              <p className='bl-kicker'>Where next</p>
            </Reveal>
            <TextReveal
              as='h2'
              text='Two ways we can help.'
              accentWords={[0, 1]}
              className='bl-display mt-4 text-3xl text-foreground sm:text-4xl lg:text-5xl'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base md:text-right'>
              Get your team using AI well, or build something with us. Most
              people start with the first.
            </p>
          </Reveal>
        </div>

        <div className='mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2'>
          <Reveal>
            <article
              id='teams'
              className='bl-card bl-card-ink flex h-full flex-col p-6 text-white sm:p-7'
            >
              <p className='font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-2'>
                01 · For teams &amp; businesses
              </p>
              <h3 className='bl-display mt-4 text-2xl text-white sm:text-3xl'>
                Get your team using AI well
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-white/70 sm:text-base'>
                Anxious staff, a growing bill, a footprint nobody measures. We
                fix all three on your real tasks and show you the numbers.
              </p>

              <OfferRows offers={teamOffers} ink />

              <div className='mt-auto flex flex-wrap gap-3 pt-6'>
                <Link
                  href={paths.teams}
                  className={`${nextStepButton} bl-btn-primary`}
                >
                  How we work with teams
                  <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
                </Link>
                {bookCall(inkGhostButton)}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className='bl-card flex h-full flex-col p-6 sm:p-7'>
              <p className='font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-text'>
                02 · For your product
              </p>
              <h3 className='bl-display mt-4 text-2xl text-foreground sm:text-3xl'>
                Build something with us
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
                Need something built instead? A small senior team, lean by
                default, honest about what it costs and what it burns.
              </p>

              <OfferRows offers={buildOffers} ink={false} />

              <div className='mt-auto flex flex-wrap gap-3 pt-6'>
                <Link
                  href={paths.services}
                  className={`${nextStepButton} bl-btn-ink`}
                >
                  See what we build
                  <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
                </Link>
                {bookCall(`${nextStepButton} bl-btn-secondary`)}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

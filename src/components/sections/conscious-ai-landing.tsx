import { ArrowUpRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HarvardShield } from '@/components/brand/harvard-shield';
import { BookCallButton } from '@/components/contact/book-call-button';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';
import { OfferCard, TeamsOfferCard } from '@/components/sections/offer-card';
import { PlanetReceipt } from '@/components/sections/planet-receipt';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import { getInstructors, type Instructor } from '@/data/instructors';
import type { Dictionary } from '@/i18n/dictionaries/en';

const teamHref = paths.contact;

interface SectionProps {
  dict: Dictionary;
}

/**
 * The opening: the essence in one headline, the tagline, one call to
 * action, and the planet's tab printed beside them.
 */
export function ConsciousAiHero({ dict }: SectionProps) {
  const t = dict.consciousAiPage.hero;

  return (
    <section className='bl-grid-surface relative overflow-hidden border-b border-line bg-background'>
      <div className='bl-container grid gap-10 pb-16 pt-28 sm:pt-36 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:pb-24 lg:pt-40'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          {/* The page's name is the headline: one line, as large as the
              column allows, with "AI" in the emerald italic accent. */}
          <TextReveal
            as='h1'
            text={t.title}
            accentWords={[...t.titleAccent]}
            className='bl-display mt-5 text-[clamp(3.5rem,12.5vw,8.5rem)] leading-[0.9] tracking-[-0.035em] text-ink md:text-[7.4vw] lg:text-[clamp(5rem,8.2vw,8.5rem)]'
          />
          <TextReveal
            as='p'
            text={t.tagline}
            accentWords={[...t.taglineAccent]}
            delay={0.25}
            className='bl-display mt-5 text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.05] text-foreground'
          />
          <Reveal delay={0.35}>
            <p className='mt-6 max-w-lg text-lg leading-snug text-foreground sm:text-xl'>
              {t.body}
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
              {t.cta} <ArrowUpRight className='h-3.5 w-3.5' />
            </Link>
          </Reveal>
        </div>
        <PlanetReceipt copy={dict.hero.receipt} className='md:mr-0' />
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

export function ConsciousAiPrinciples({ dict }: SectionProps) {
  const t = dict.consciousAiPage.principles;
  const principles = t.problems;
  const moves = t.moves;

  /* The problem and the fix share one section: a two-column ledger, the
     three complaints on the left and the three moves that answer them on
     the right, so neither half takes a page of its own. */
  return (
    <section id='principles' className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container'>
        <div className='grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end'>
          <div>
            <p className='bl-kicker'>{t.kicker}</p>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-5 max-w-3xl text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='font-display text-2xl text-foreground sm:text-3xl md:text-right'>
              {t.asideLead}{' '}
              <span className='bl-accent text-brand-text'>{t.asideAccent}</span>
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
            {t.problemHead}
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
            {t.fixHead}
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

type InstructorLabels = Dictionary['consciousAiPage']['instructor'];

/** One instructor: portrait, role, short bio and a fold-out with the facts. */
function InstructorCard({
  instructor,
  labels,
}: {
  instructor: Instructor;
  labels: InstructorLabels;
}) {
  const { name, firstName, role, tagline, bio, image, focus, school, facts } =
    instructor;
  return (
    <Reveal className='bl-card w-full p-5 sm:p-8 lg:p-10'>
      <div className='grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12'>
        {/* Portrait: a square on phones, a tall plate beside the text on desktop. */}
        <div className='flex justify-center lg:block'>
          <Image
            src={image}
            alt={labels.portraitAlt.replace('{name}', name)}
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
                {labels.alumnus}
              </span>
              <span className='mt-0.5 block font-display text-xl font-bold leading-tight text-foreground sm:text-2xl'>
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
          {labels.moreAbout.replace('{name}', firstName)}
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
export function CourseInstructor({ dict }: SectionProps) {
  const t = dict.consciousAiPage.instructor;
  return (
    <div className='mt-10 border-t border-ink/20 pt-8 text-center sm:mt-14 sm:pt-10'>
      <Reveal>
        <p className='bl-kicker'>{t.kicker}</p>
      </Reveal>
      <TextReveal
        as='h3'
        text={t.title}
        accentWords={[...t.accent]}
        className='bl-display mx-auto mt-4 max-w-2xl text-3xl text-foreground sm:text-4xl'
      />
      <div className='mx-auto mt-8 grid w-full max-w-4xl gap-6 text-left sm:mt-10'>
        {getInstructors(dict.locale).map((instructor) => (
          <InstructorCard
            key={instructor.name}
            instructor={instructor}
            labels={t}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Where the name comes from: Bulleh Shah, and the three values we keep.
 * The verse stays in its own scripts in every language; only the reading
 * under it follows the dictionary.
 */
export function OurRoots({ dict }: SectionProps) {
  const t = dict.consciousAiPage.roots;
  return (
    <section id='roots' className='bl-section bl-rule bl-band-ink text-white'>
      <div className='bl-container'>
        <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16'>
          <div>
            <Reveal>
              <p className='bl-kicker text-brand-2'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-5 max-w-[14ch] text-display-lg text-white [&_.bl-accent]:text-brand-2'
            />
            <Reveal delay={0.2}>
              <p className='mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg'>
                {t.body}
              </p>
              <Link
                href={paths.about}
                className='bl-btn bl-btn-primary mt-8 inline-flex h-12 items-center gap-3 px-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]'
              >
                {t.cta}
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
                  alt={t.portraitAlt}
                  width={320}
                  height={320}
                  sizes='(max-width: 640px) 72px, 96px'
                  className='h-[72px] w-[72px] shrink-0 object-contain sm:h-24 sm:w-24'
                />
                <figcaption className='font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/60'>
                  {t.name}
                  <br />
                  <span className='text-white/40'>{t.years}</span>
                </figcaption>
              </div>
              <blockquote className='mt-6 border-t border-white/20 pt-6'>
                <p
                  lang='pa-Arab'
                  dir='rtl'
                  className='urdu-khatati text-right text-xl leading-[2.6] text-white sm:text-2xl sm:leading-[2.6]'
                >
                  پڑھ پڑھ علم ہزار کتاباں، کدے اپنے آپ نوں پڑھیا نئیں
                </p>
                <p
                  lang='pa-Guru'
                  className='gurmukhi-lipi mt-5 text-lg leading-[1.8] text-white/80 sm:text-xl sm:leading-[1.8]'
                >
                  ਪੜ੍ਹ ਪੜ੍ਹ ਇਲਮ ਹਜ਼ਾਰ ਕਿਤਾਬਾਂ, ਕਦੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪੜ੍ਹਿਆ ਨਈਂ
                </p>
              </blockquote>
              <p className='bl-accent mt-6 font-display text-lg leading-snug text-white/85 sm:text-xl'>
                {t.translation}
              </p>
            </figure>
          </Reveal>
        </div>
        <div className='mt-10 grid border border-white/30 md:grid-cols-3'>
          {t.values.map(([number, title, body]) => (
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

/** Five quick answers, in the page's own voice. Kept short so the block fits one screen. */
export function ConsciousAiFaq({ dict }: SectionProps) {
  const t = dict.consciousAiPage.faq;
  return (
    <FaqSection
      items={[...t.items]}
      kicker={t.kicker}
      title={t.title}
      accentWords={[...t.accent]}
      description={t.description}
      className='bl-rule bl-band-mint'
    />
  );
}

/** The closing panel: book a time, or talk to the humans. */
export function ConsciousAiClosing({ dict }: SectionProps) {
  const t = dict.consciousAiPage.closing;
  const buttonClassName =
    'inline-flex h-14 items-center gap-3 px-8 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]';

  return (
    <CtaBanner
      dict={dict}
      kicker={t.kicker}
      title={t.title}
      accentWords={[...t.accent]}
      body={t.body}
    >
      {siteConfig.calHandle ? (
        <BookCallButton
          calHandle={siteConfig.calHandle}
          hideIcon
          className={`bl-btn bl-btn-primary ${buttonClassName}`}
        >
          {t.cta}
          <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
        </BookCallButton>
      ) : (
        <Link
          href={teamHref}
          className={`bl-btn bl-btn-primary ${buttonClassName}`}
        >
          {t.cta}
          <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
        </Link>
      )}
    </CtaBanner>
  );
}

/**
 * Two doors out of the Conscious AI page, built on the same skeleton: kicker,
 * title, three short offer rows, then one button. No blurbs: the rows say it.
 * Teams and business leads on ink; Services is the lighter second card.
 */
export function ConsciousAiNextSteps({ dict }: SectionProps) {
  const t = dict.consciousAiPage.nextSteps;
  return (
    <section id='next-steps' className='bl-section bl-rule bl-band-stone'>
      <div className='bl-container'>
        <Reveal>
          <p className='bl-kicker'>{t.kicker}</p>
        </Reveal>
        <TextReveal
          as='h2'
          text={t.title}
          accentWords={[...t.accent]}
          className='bl-display mt-4 text-3xl text-foreground sm:text-4xl lg:text-5xl'
        />

        <div className='mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2'>
          <Reveal>
            <TeamsOfferCard dict={dict} id='teams' number='01' ink />
          </Reveal>

          <Reveal delay={0.1}>
            <OfferCard
              number='02'
              kicker={t.build.kicker}
              title={t.build.title}
              offers={dict.offers.build}
              href={paths.services}
              cta={t.build.cta}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

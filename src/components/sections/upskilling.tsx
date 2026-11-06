import {
  ArrowRight,
  CircleDollarSign,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

import { BookCallButton } from '@/components/contact/book-call-button';
import { CourseSignup } from '@/components/course/course-signup';
import { Reveal } from '@/components/motion/reveal';
import { TextReveal } from '@/components/motion/text-reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqSection } from '@/components/sections/faq';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface SectionProps {
  dict: Dictionary;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Brackets lit in the light emerald, for kickers that sit on ink. Arbitrary
 * variants, not before:/after:, which would reset the bracket content. */
const inkKicker =
  'text-white/60 [&::after]:text-brand-2 [&::before]:text-brand-2';

/**
 * The page's buttons. The type (mono, small caps) and the hard shadow come
 * from `.bl-btn*` in globals.css; this only sets the measure and the fill.
 * `ghost` is the quiet second action on an ink panel.
 */
const ctaClass = (tone: 'primary' | 'secondary' | 'ghost') =>
  cn(
    'inline-flex min-h-14 items-center justify-center gap-2.5 px-6 py-3 text-center',
    tone === 'primary' && 'bl-btn bl-btn-primary',
    tone === 'secondary' && 'bl-btn bl-btn-secondary bg-surface',
    tone === 'ghost' &&
      'border border-white/40 font-mono text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white',
  );

/** A page button that navigates. Enquiries default to the contact page. */
function CtaLink({
  children,
  href = paths.contact,
  tone = 'primary',
  className,
}: {
  children: React.ReactNode;
  href?: string;
  tone?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <Link href={href} className={cn(ctaClass(tone), className)}>
      {children}
      <ArrowRight
        className='h-4 w-4 shrink-0'
        strokeWidth={1.5}
        aria-hidden='true'
      />
    </Link>
  );
}

/**
 * "Upskill your team" and "Make your team AI-fluent": the same Cal.com booking modal as the Conscious AI
 * page. Falls back to the contact page when no Cal.com link is configured.
 */
function CallButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const content = (
    <>
      {children}
      <ArrowRight
        className='h-4 w-4 shrink-0'
        strokeWidth={1.5}
        aria-hidden='true'
      />
    </>
  );
  return siteConfig.calHandle ? (
    <BookCallButton
      calHandle={siteConfig.calHandle}
      hideIcon
      className={className}
    >
      {content}
    </BookCallButton>
  ) : (
    <Link href={paths.contact} className={className}>
      {content}
    </Link>
  );
}

/** The opening: the problem in one headline, two doors, and the familiar complaints as a numbered list. */
export function UpskillingHero({ dict }: SectionProps) {
  const t = dict.upskillingPage.hero;
  const familiar = dict.upskillingPage.familiar;

  return (
    <section className='bl-hero relative overflow-hidden border-b border-line'>
      <div className='bl-container grid gap-8 pb-12 pt-24 sm:pt-32 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16 lg:pb-20 lg:pt-40'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h1'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[13ch] text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.98] tracking-[-0.02em] text-ink'
          />
          <Reveal delay={0.3}>
            <p className='mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {t.body}
            </p>
          </Reveal>
          <Reveal
            delay={0.4}
            className='mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap'
          >
            <CallButton className={ctaClass('primary')}>
              {t.primaryCta}
            </CallButton>
            <CtaLink href={paths.contactForm} tone='secondary'>
              {t.secondaryCta}
            </CtaLink>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className='w-full rounded-[2rem] bg-ink p-6 text-white shadow-[8px_8px_0_0_hsl(var(--brand))] sm:p-8'
        >
          <p className={cn('bl-kicker', inkKicker)}>{familiar.kicker}</p>
          <ul className='mt-6 space-y-3'>
            {familiar.items.map((item) => (
              <li
                key={item}
                className='flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-4 sm:px-5'
              >
                <span
                  aria-hidden='true'
                  className='h-2.5 w-2.5 shrink-0 rounded-full bg-brand-2'
                />
                <span className='font-display text-lg leading-snug text-white sm:text-xl'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** A quiet, editorial overview of the training: promise, outcomes and method. */
export function UpskillingTrainings({ dict }: SectionProps) {
  const t = dict.upskillingPage.trainings;

  return (
    <>
      <section className='border-y border-ink/15 !bg-none bg-[hsl(var(--band-peach))] py-12 sm:py-16 lg:py-20'>
        <div className='bl-container'>
          <div className='grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14'>
            <div>
              <Reveal>
                <p className='bl-kicker'>{t.kicker}</p>
              </Reveal>
              <TextReveal
                as='h2'
                text={t.title}
                accentWords={[...t.accent]}
                className='bl-display mt-4 max-w-[13ch] text-display-lg text-foreground'
              />
              <Reveal delay={0.15}>
                <p className='mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg'>
                  {t.lead}
                </p>
                <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
                  <CallButton className={ctaClass('primary')}>
                    {t.cta}
                  </CallButton>
                </div>
              </Reveal>
            </div>

            <Reveal className='rounded-2xl border border-white/10 bg-ink p-6 text-white shadow-[0_20px_50px_hsl(var(--ink)/0.18)] sm:p-8'>
              <div>
                <div>
                  <p className={cn('bl-kicker', inkKicker)}>For your team</p>
                  <h3 className='bl-display mt-3 text-3xl text-white sm:text-4xl'>
                    What changes
                  </h3>
                </div>
              </div>
              <div className='mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4'>
                {t.benefits.map(([title, description], index) => {
                  const BenefitIcon = [
                    Sparkles,
                    CircleDollarSign,
                    ShieldCheck,
                    TrendingUp,
                  ][index];

                  return (
                    <div
                      key={title}
                      className={cn(
                        'group min-h-32 rounded-xl bg-white/[0.045] p-5 transition-colors hover:bg-white/[0.075] sm:min-h-36 sm:p-6',
                      )}
                    >
                      <BenefitIcon className='h-4 w-4 text-brand-2' aria-hidden='true' />
                      <h3 className='bl-display mt-5 text-xl leading-tight text-white sm:text-2xl'>
                        {title}
                      </h3>
                      <p className='mt-2 max-w-[24ch] text-sm leading-relaxed text-white/60'>
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/** The team's AI bill as a printed receipt: before and after, line by line. */
export function UpskillingBill({ dict }: SectionProps) {
  const t = dict.upskillingPage.bill;
  const r = t.receipt;

  return (
    <section className='bl-section bl-rule bg-[hsl(var(--band-sky))]'>
      <div className='bl-container grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:items-center md:gap-12 lg:gap-16'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-4 max-w-[10ch] text-[clamp(2.85rem,11vw,5.5rem)] leading-[0.91] tracking-[-0.03em] text-foreground sm:max-w-[11ch]'
          />
          <Reveal delay={0.2}>
            <p className='mt-5 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {t.body}
            </p>
            {/* One solid offer strip at every size; it simply gains columns when room allows. */}
            <ol className='mt-8 overflow-hidden rounded-2xl border border-ink/15 bg-surface shadow-[0_1.25rem_3rem_-2.5rem_hsl(var(--ink)/0.32)] sm:grid sm:grid-cols-3'>
              {t.steps.map((step, index) => (
                <li
                  key={step}
                  className='group relative flex min-h-[5.5rem] items-center gap-4 border-b border-ink/10 px-4 py-4 last:border-b-0 sm:block sm:min-h-[10.5rem] sm:border-b-0 sm:border-l sm:border-ink/15 sm:px-5 sm:py-5 sm:first:border-l-0'
                >
                  <span className='bl-num flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-[hsl(var(--brand-soft))] sm:mb-5'>
                    {pad(index + 1)}
                  </span>
                  <span className='block font-display text-xl leading-[1.02] text-foreground sm:text-2xl'>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <div className='mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <CallButton
                className={cn(ctaClass('primary'), 'w-full sm:w-auto')}
              >
                {t.primaryCta}
              </CallButton>
            </div>
          </Reveal>
        </div>

        {/* The receipt: a till slip with the sawtooth tear of the home page's receipt. */}
        <Reveal
          delay={0.15}
          className='relative mx-auto w-full max-w-sm pb-3 md:mr-0'
        >
          <div className='bl-card bl-receipt p-5 sm:p-6'>
            <div className='flex flex-col gap-0.5'>
              <span className='font-mono text-xs font-medium text-ink'>
                {r.title}
              </span>
              <span className='bl-label'>{r.payer}</span>
            </div>
            <table className='mt-4 w-full border-collapse text-left'>
              <caption className='sr-only'>{r.caption}</caption>
              <thead>
                <tr className='border-b border-ink/15'>
                  <th scope='col' className='bl-label pb-2 font-normal'>
                    {r.item}
                  </th>
                  <th
                    scope='col'
                    className='bl-label w-14 pb-2 text-right font-normal'
                  >
                    {r.before}
                  </th>
                  <th
                    scope='col'
                    className='bl-label w-14 pb-2 text-right font-normal'
                  >
                    {r.after}
                  </th>
                </tr>
              </thead>
              <tbody>
                {r.rows.map(([item, before, after]) => (
                  <tr
                    key={item}
                    className='border-b border-dotted border-ink/30'
                  >
                    <th
                      scope='row'
                      className='py-2.5 pr-4 text-sm font-normal leading-5 text-foreground'
                    >
                      {item}
                    </th>
                    <td className='py-2.5 text-right font-mono text-xs tabular-nums text-muted-foreground'>
                      {before}
                    </td>
                    <td className='py-2.5 text-right font-mono text-xs font-medium tabular-nums text-brand-text'>
                      {after}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className='border-t-2 border-ink'>
                  <th
                    scope='row'
                    className='pt-4 text-left font-mono text-xs font-medium text-foreground'
                  >
                    {r.totalLabel}
                  </th>
                  <td
                    colSpan={2}
                    className='bl-accent pt-4 text-right font-display text-xl'
                  >
                    {r.total}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className='mt-5 border-t border-dashed border-ink/40 pt-4 text-center'>
              <p className='font-display text-xl text-foreground sm:text-2xl'>
                {r.stamp[0]} <span className='bl-accent'>{r.stamp[1]}</span>
              </p>
              <p className='bl-label mt-1'>{r.note}</p>
            </div>
            <div aria-hidden='true' className='bl-receipt-edge' />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The free audit and three paid formats, arranged as one clear offer list. */
export function UpskillingPricing({ dict }: SectionProps) {
  const t = dict.upskillingPage.pricing;
  const audit = t.audit;

  return (
    <section
      id='pricing'
      className='bl-section bl-rule scroll-mt-24 bg-[hsl(var(--band-peach))]'
    >
      <div className='bl-container'>
        <div className='grid gap-4 md:grid-cols-[1fr_auto] md:items-end'>
          <div>
            <Reveal>
              <p className='bl-kicker'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-4 text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='text-sm text-muted-foreground md:pb-2'>{t.aside}</p>
          </Reveal>
        </div>

        <Reveal className='mt-6 bg-ink p-5 text-white sm:mt-8 sm:p-8'>
          <div className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-10'>
            <div>
              <p className={cn('bl-kicker', inkKicker)}>{audit.kicker}</p>
              <TextReveal
                as='h3'
                text={audit.title}
                accentWords={[...audit.accent]}
                className='bl-display mt-2 text-2xl text-white sm:text-3xl [&_.bl-accent]:text-brand-2'
              />
              <p className='mt-2 max-w-2xl text-sm leading-relaxed text-white/70'>
                {audit.body}
              </p>
            </div>
            <p className='font-display text-5xl tabular-nums text-brand-2'>
              {audit.price}
            </p>
            <CtaLink
              href={paths.contactForm}
              className='self-start lg:self-auto'
            >
              {audit.cta}
            </CtaLink>
          </div>
        </Reveal>

        <ol className='mt-5 grid gap-4 sm:mt-6'>
          {t.plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={0.08 * index}
              className={cn(
                'grid gap-4 border border-ink/25 bg-surface px-5 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(10rem,0.75fr)_minmax(0,1.35fr)_auto_auto] lg:items-center lg:gap-8',
                plan.recommended && 'border-l-4 border-l-brand',
              )}
            >
              <div>
                <p className='bl-label'>
                  {plan.recommended ? t.recommended : `0${index + 1}`}
                </p>
                <h3 className='bl-display mt-1 text-2xl text-foreground sm:text-3xl'>
                  {plan.name}
                </h3>
              </div>
              <div>
                <p className='font-medium text-foreground'>{plan.lead}</p>
                <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                  {plan.items.slice(0, 2).join(' · ')}
                </p>
              </div>
              <p className='font-display text-3xl tabular-nums text-foreground sm:text-4xl'>
                {plan.from && <span className='bl-label mr-1'>{t.from}</span>}
                {plan.price}
              </p>
              <CtaLink
                tone={plan.recommended ? 'primary' : 'secondary'}
                className='self-start lg:self-auto'
              >
                {plan.cta}
              </CtaLink>
            </Reveal>
          ))}
        </ol>

        <p className='bl-label mt-4'>{t.note}</p>
      </div>
    </section>
  );
}

/**
 * Two other doors, in one ruled card: the free course for readers not ready
 * to book (ivory, one email field) and the way to Services for readers who
 * need software, not training (ink). One section, not two stacked strips.
 */
export function UpskillingCourse({ dict }: SectionProps) {
  const t = dict.upskillingPage.course;
  const services = dict.upskillingPage.services;

  return (
    <section
      id='course'
      className='bl-section bl-rule bl-band-stone bl-band-sky scroll-mt-24'
    >
      <div className='bl-container'>
        <Reveal className='bl-card grid lg:grid-cols-[3fr_2fr]'>
          <div className='flex flex-col justify-between gap-8 p-5 sm:p-8 lg:p-10'>
            <div>
              <p className='bl-kicker'>{t.kicker}</p>
              <TextReveal
                as='h2'
                text={t.title}
                accentWords={[...t.accent]}
                className='bl-display mt-4 max-w-[17ch] text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] text-foreground'
              />
              <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
                {t.body}
              </p>
            </div>
            <div className='max-w-xl'>
              {/* The field's own label is read by screen readers; this one is for the eye. */}
              <p aria-hidden='true' className='bl-label mb-2'>
                {t.label}
              </p>
              <CourseSignup
                dict={dict}
                source='upskilling:course'
                variant='inline'
                tone='light'
                submitLabel={t.submit}
                consent={false}
              />
              <p className='bl-label mt-2'>{t.note}</p>
            </div>
          </div>
          {/* The ink cell: ruled off from the course on the left at lg, below it on smaller screens. */}
          <div className='flex flex-col justify-between gap-8 border-t border-ink bg-ink p-5 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10'>
            <div>
              <p className={cn('bl-kicker', inkKicker)}>{services.kicker}</p>
              <TextReveal
                as='h2'
                text={`${services.lead} ${services.accent}`}
                accentWords={Array.from(
                  { length: services.accent.split(' ').length },
                  (_, index) => services.lead.split(' ').length + index,
                )}
                className='bl-display mt-4 max-w-[17ch] text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] text-white [&_.bl-accent]:text-brand-2'
              />
            </div>
            <CtaLink
              href={paths.services}
              tone='ghost'
              className='min-h-16 px-7 py-4 text-sm tracking-[0.12em] sm:min-w-56'
            >
              {services.cta}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The team questions, in the same FAQ block as the home and Conscious AI pages. */
export function UpskillingFaq({ dict }: SectionProps) {
  const t = dict.upskillingPage.faq;
  return (
    <FaqSection
      items={[...t.items]}
      kicker={t.kicker}
      title={t.title}
      accentWords={[...t.accent]}
      className='bl-rule bl-band-mint'
    />
  );
}

/** The closing panel: the free audit first, the training second. */
export function UpskillingClosing({ dict }: SectionProps) {
  const t = dict.upskillingPage.closing;

  return (
    <CtaBanner
      dict={dict}
      kicker={t.kicker}
      title={t.title}
      accentWords={[...t.accent]}
      body={t.body}
    >
      {/* One grid, two equal cells: the buttons share width and height at every size. */}
      <div className='grid w-full gap-3 sm:w-auto sm:grid-cols-2'>
        <CtaLink href={paths.contactForm} className='sm:min-w-60'>
          {t.primaryCta}
        </CtaLink>
        <CallButton className={cn(ctaClass('ghost'), 'sm:min-w-60')}>
          {t.secondaryCta}
        </CallButton>
      </div>
    </CtaBanner>
  );
}

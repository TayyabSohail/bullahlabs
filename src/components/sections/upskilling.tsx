import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  CirclePlay,
  Clock,
  Cloud,
  Code,
  Coins,
  Droplet,
  Flag,
  Lock,
  RefreshCw,
  RotateCw,
  SearchCheck,
  ShieldCheck,
  Signpost,
  TrendingUp,
  Zap,
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

/** Icons in copy order: one per "Sound familiar?" row, benefit and step. */
const FAMILIAR_ICONS = [TrendingUp, Lock, RefreshCw, CircleHelp];
const BENEFIT_ICONS = [Clock, Coins, ShieldCheck, Flag];
const STEP_ICONS = [Signpost, Code, Zap, Lock, SearchCheck];
const PLANET_ICONS = [Zap, Droplet, Cloud];

const pad = (n: number) => String(n).padStart(2, '0');

/** Brackets lit in the light emerald, for kickers that sit on ink. */
const inkKicker = 'text-brand-2 before:text-brand-2 after:text-brand-2';

/** The page's button: one measure, a hard offset shadow, primary or secondary fill. */
const ctaClass = (tone: 'primary' | 'secondary') =>
  cn(
    'bl-btn inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]',
    tone === 'primary'
      ? 'bl-btn-primary shadow-[3px_3px_0_0_hsl(var(--ink))]'
      : 'bl-btn-secondary bg-surface shadow-[3px_3px_0_0_hsl(var(--ink))]',
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
  tone?: 'primary' | 'secondary';
  className?: string;
}) {
  return (
    <Link href={href} className={cn(ctaClass(tone), className)}>
      {children}
      <ArrowRight className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
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
      <ArrowRight className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
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

/** The opening: the problem in one headline, two doors, and the familiar complaints. */
export function UpskillingHero({ dict }: SectionProps) {
  const t = dict.upskillingPage.hero;
  const familiar = dict.upskillingPage.familiar;

  return (
    <section className='bl-band-stone relative overflow-hidden border-b border-line'>
      <div className='bl-container grid gap-10 pb-16 pt-28 sm:pt-36 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16 lg:pb-24 lg:pt-40'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h1'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-6 max-w-[13ch] text-[clamp(3rem,7vw,5.75rem)] leading-[0.95] tracking-[-0.03em] text-ink'
          />
          <Reveal delay={0.3}>
            <p className='mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground'>
              {t.body}
            </p>
          </Reveal>
          <Reveal
            delay={0.4}
            className='mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap'
          >
            <CallButton className={ctaClass('primary')}>
              {t.primaryCta}
            </CallButton>
            <CtaLink href={paths.contactForm} tone='secondary'>
              {t.secondaryCta}
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={0.2} className='bl-card w-full'>
          <div className='flex items-center justify-between gap-4 border-b border-ink/15 px-5 py-4'>
            <p className='bl-kicker text-[11px] text-brand-text sm:text-xs'>
              {familiar.kicker}
            </p>
            <span className='font-mono text-[10px] text-muted-foreground'>
              {pad(familiar.items.length)}
            </span>
          </div>
          <ul className='divide-y divide-ink/15'>
            {familiar.items.map((item, index) => {
              const Icon = FAMILIAR_ICONS[index];
              return (
                <li key={item} className='flex items-center gap-4 px-5 py-4'>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center border border-brand/25 bg-brand-soft text-brand-text'>
                    <Icon className='h-4 w-4' aria-hidden='true' />
                  </span>
                  <span className='font-display text-lg text-foreground'>
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * What the training is: an ink pitch beside four benefits, the five steps
 * the team learns under them, then the two things it protects: the planet
 * and the company's data.
 */
export function UpskillingTrainings({ dict }: SectionProps) {
  const t = dict.upskillingPage.trainings;
  const learns = dict.upskillingPage.learns;
  const planet = dict.upskillingPage.planet;
  const security = dict.upskillingPage.security;

  return (
    <section className='bl-section bl-rule bl-band-stone bl-band-peach'>
      <div className='bl-container'>
        <Reveal className='bl-card'>
          <div className='grid lg:grid-cols-2'>
            <div className='bl-grid-surface relative isolate overflow-hidden bg-ink p-6 text-white sm:p-10'>
              {/* The faint letters behind the pitch. */}
              <span
                aria-hidden='true'
                className='bl-display pointer-events-none absolute -bottom-12 right-0 -z-10 select-none text-[14rem] leading-none text-white/[0.05] sm:text-[20rem]'
              >
                AI
              </span>
              <p className={cn('bl-kicker text-[11px] sm:text-xs', inkKicker)}>
                {t.kicker}
              </p>
              <TextReveal
                as='h2'
                text={t.title}
                accentWords={[...t.accent]}
                className='bl-display mt-6 text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.02] text-white [&_.bl-accent]:text-brand-2'
              />
              <p className='mt-6 text-lg text-white/90'>{t.lead}</p>
              <ul className='mt-4 space-y-2'>
                {t.points.map((point) => (
                  <li
                    key={point}
                    className='flex items-start gap-3 text-sm text-white/80'
                  >
                    <Check
                      className='mt-0.5 h-4 w-4 shrink-0 text-brand-2'
                      aria-hidden='true'
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                <CallButton className='bl-btn bl-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[3px_3px_0_0_hsl(var(--brand-2))]'>
                  {t.cta}
                </CallButton>
                <a
                  href='#how'
                  className='inline-flex min-h-12 items-center justify-center border border-white/30 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white'
                >
                  {t.how}
                </a>
              </div>
            </div>

            <div className='grid border-t border-ink/85 sm:grid-cols-2 lg:border-l lg:border-t-0'>
              {t.benefits.map(([title, body], index) => {
                const Icon = BENEFIT_ICONS[index];
                return (
                  <article
                    key={title}
                    className={cn(
                      'border-ink/15 p-6 sm:p-8',
                      index < 3 && 'border-b',
                      index >= 2 && 'sm:border-b-0',
                      index % 2 === 0 && 'sm:border-r',
                    )}
                  >
                    <div className='flex items-center justify-between border-b border-ink/15 pb-4'>
                      <span className='font-mono text-[10px] tracking-[0.16em] text-muted-foreground'>
                        {pad(index + 1)} / {pad(t.benefits.length)}
                      </span>
                      <span className='flex h-8 w-8 items-center justify-center border border-brand/25 bg-brand-soft text-brand-text'>
                        <Icon className='h-4 w-4' aria-hidden='true' />
                      </span>
                    </div>
                    <h3 className='bl-display mt-6 text-2xl text-foreground'>
                      {title}
                    </h3>
                    <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                      {body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            id='how'
            className='scroll-mt-28 border-t border-ink/85 bg-surface p-6 sm:p-8'
          >
            <p className='bl-kicker text-[11px] text-brand-text sm:text-xs'>
              {learns.kicker}
            </p>
            <ol className='mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0'>
              {learns.steps.map(([title, body], index) => {
                const Icon = STEP_ICONS[index];
                const last = index === learns.steps.length - 1;
                return (
                  <li key={title} className='min-w-0 lg:pr-6'>
                    <div className='flex items-center gap-3'>
                      <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink bg-brand-soft/60 text-ink shadow-[2px_2px_0_0_hsl(var(--ink))]'>
                        <Icon className='h-4 w-4' aria-hidden='true' />
                      </span>
                      {last ? (
                        <span className='flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground'>
                          <RotateCw className='h-3 w-3' aria-hidden='true' />
                          {learns.repeat}
                        </span>
                      ) : (
                        <span
                          aria-hidden='true'
                          className='hidden h-px flex-1 border-t border-dashed border-ink/40 lg:block'
                        />
                      )}
                    </div>
                    <p className='mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-text'>
                      {learns.step} {pad(index + 1)}
                    </p>
                    <h3 className='bl-display mt-1.5 text-xl text-foreground'>
                      {title}
                    </h3>
                    <p className='mt-1.5 text-sm leading-snug text-muted-foreground'>
                      {body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <div className='mt-8 grid gap-6 lg:grid-cols-2'>
          <Reveal className='border border-ink/50 bg-brand-soft/70 p-6 sm:p-8'>
            <p className='bl-kicker text-[11px] text-brand-text sm:text-xs'>
              {planet.kicker}
            </p>
            <TextReveal
              as='h3'
              text={planet.title}
              accentWords={[...planet.accent]}
              className='bl-display mt-4 text-3xl text-foreground'
            />
            <p className='mt-3 text-sm text-muted-foreground'>{planet.body}</p>
            <ul className='mt-4 flex flex-wrap gap-2'>
              {planet.chips.map((chip, index) => {
                const Icon = PLANET_ICONS[index];
                return (
                  <li
                    key={chip}
                    className='inline-flex items-center gap-2 border border-ink/70 bg-surface px-3 py-2 text-sm text-foreground'
                  >
                    <Icon className='h-3.5 w-3.5' aria-hidden='true' />
                    {chip}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className='bl-card p-6 sm:p-8'>
            <p className='bl-kicker text-[11px] text-brand-text sm:text-xs'>
              {security.kicker}
            </p>
            <TextReveal
              as='h3'
              text={security.title}
              accentWords={[...security.accent]}
              className='bl-display mt-4 text-3xl text-foreground'
            />
            <p className='mt-3 text-sm leading-relaxed text-foreground/80'>
              {security.body}
            </p>
            <ul className='mt-4 space-y-2'>
              {security.items.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-sm text-muted-foreground'
                >
                  <Lock
                    className='mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-text'
                    aria-hidden='true'
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className='mt-4 text-xs text-muted-foreground'>{security.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** The team's AI bill as a printed receipt: before and after, line by line. */
export function UpskillingBill({ dict }: SectionProps) {
  const t = dict.upskillingPage.bill;
  const r = t.receipt;

  return (
    <section className='bl-section bl-rule bg-background'>
      <div className='bl-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16'>
        <div className='min-w-0'>
          <Reveal>
            <p className='bl-kicker'>{t.kicker}</p>
          </Reveal>
          <TextReveal
            as='h2'
            text={t.title}
            accentWords={[...t.accent]}
            className='bl-display mt-5 max-w-[12ch] text-display-lg text-foreground'
          />
          <Reveal delay={0.2}>
            <p className='mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {t.body}
            </p>
            <ol className='mt-6 flex flex-wrap items-center gap-2'>
              {t.steps.map((step, index) => (
                <li key={step} className='flex items-center gap-2'>
                  <span className='inline-flex items-center gap-2 border border-ink/50 bg-surface px-3 py-2 text-sm text-foreground'>
                    <span className='font-mono text-[10px] text-brand-text'>
                      {pad(index + 1)}
                    </span>
                    {step}
                  </span>
                  {index < t.steps.length - 1 && (
                    <ArrowRight
                      className='h-3.5 w-3.5 text-muted-foreground'
                      aria-hidden='true'
                    />
                  )}
                </li>
              ))}
            </ol>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <CallButton className={ctaClass('primary')}>
                {t.primaryCta}
              </CallButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className='bl-card p-6 sm:p-8'>
          <div className='flex flex-wrap items-baseline justify-between gap-2'>
            <span className='font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-text'>
              {r.title}
            </span>
            <span className='font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground'>
              {r.payer}
            </span>
          </div>
          <table className='mt-6 w-full border-collapse text-left'>
            <caption className='sr-only'>{r.caption}</caption>
            <thead>
              <tr className='border-b border-ink/15 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
                <th scope='col' className='pb-3 font-normal'>
                  {r.item}
                </th>
                <th scope='col' className='pb-3 text-right font-normal'>
                  {r.before}
                </th>
                <th scope='col' className='w-16 pb-3 text-right font-normal'>
                  {r.after}
                </th>
              </tr>
            </thead>
            <tbody>
              {r.rows.map(([item, before, after]) => (
                <tr key={item} className='border-b border-ink/15'>
                  <th
                    scope='row'
                    className='py-3 pr-4 text-sm font-normal text-foreground'
                  >
                    {item}
                  </th>
                  <td className='py-3 text-right font-mono text-xs uppercase text-muted-foreground'>
                    {before}
                  </td>
                  <td className='py-3 text-right font-mono text-xs font-semibold uppercase text-brand-text'>
                    {after}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className='border-t-2 border-ink'>
                <th
                  scope='row'
                  className='pt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground'
                >
                  {r.totalLabel}
                </th>
                <td
                  colSpan={2}
                  className='bl-accent pt-5 text-right font-display text-xl sm:text-2xl'
                >
                  {r.total}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className='mt-6 border-t border-ink/15 pt-5 text-center'>
            <p className='font-display text-xl text-foreground sm:text-2xl'>
              {r.stamp[0]} <span className='bl-accent'>{r.stamp[1]}</span>
            </p>
            <p className='mt-1 text-xs text-muted-foreground'>{r.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The free audit and the three paid formats, priced per team. */
export function UpskillingPricing({ dict }: SectionProps) {
  const t = dict.upskillingPage.pricing;
  const audit = t.audit;

  return (
    <section
      id='pricing'
      className='bl-section bl-rule bl-band-stone bl-band-sky scroll-mt-24'
    >
      <div className='bl-container'>
        <div className='grid gap-5 md:grid-cols-[1fr_auto] md:items-end'>
          <div>
            <Reveal>
              <p className='bl-kicker'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-5 text-display-lg text-foreground'
            />
          </div>
          <Reveal delay={0.15}>
            <p className='text-sm text-muted-foreground md:pb-2'>{t.aside}</p>
          </Reveal>
        </div>

        <div className='mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          <Reveal className='bl-card bl-card-ink bl-grid-surface flex flex-col p-6 sm:p-7'>
            <div className='flex items-center justify-between gap-3'>
              <p className={cn('bl-kicker text-[11px] sm:text-xs', inkKicker)}>
                {audit.kicker}
              </p>
              <span className='bg-brand-2 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink'>
                {audit.price}
              </span>
            </div>
            <TextReveal
              as='h3'
              text={audit.title}
              accentWords={[...audit.accent]}
              className='bl-display mt-6 text-3xl leading-tight text-white [&_.bl-accent]:text-brand-2'
            />
            <p className='mt-4 text-sm text-white/70'>{audit.body}</p>
            <ul className='mt-6 space-y-2.5 border-t border-white/15 pt-5'>
              {audit.items.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-sm text-white/85'
                >
                  <Check
                    className='mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-2'
                    aria-hidden='true'
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className='mt-auto pt-8'>
              <Link
                href={paths.contactForm}
                className='bl-btn bl-btn-primary inline-flex min-h-12 items-center gap-2 px-5 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[3px_3px_0_0_hsl(var(--brand-2))]'
              >
                {audit.cta}
                <ArrowRight className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
              </Link>
            </div>
          </Reveal>

          {t.plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={0.08 * (index + 1)}
              className={cn(
                'relative flex flex-col p-6 sm:p-7',
                plan.recommended
                  ? 'bl-card overflow-visible bg-white'
                  : 'border border-ink/50 bg-surface',
              )}
            >
              {plan.recommended && (
                <span className='absolute -top-3 right-4 bg-brand-text px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white'>
                  {t.recommended}
                </span>
              )}
              <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
                {plan.name}
              </p>
              <p className='mt-5 flex items-baseline gap-2 font-display text-5xl text-foreground'>
                {plan.from && (
                  <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
                    {t.from}
                  </span>
                )}
                {plan.price}
              </p>
              <p className='mt-4 text-sm font-semibold text-foreground'>
                {plan.lead}
              </p>
              <ul className='mt-5 space-y-2.5 border-t border-ink/15 pt-5'>
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-3 text-sm text-muted-foreground'
                  >
                    <Check
                      className='mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-text'
                      aria-hidden='true'
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='mt-auto pt-8'>
                <CtaLink
                  tone={plan.recommended ? 'primary' : 'secondary'}
                  className='justify-start text-left'
                >
                  {plan.cta}
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className='mt-6 text-xs text-muted-foreground'>{t.note}</p>
      </div>
    </section>
  );
}

/** For readers not ready to book: the free course, one email field. */
export function UpskillingCourse({ dict }: SectionProps) {
  const t = dict.upskillingPage.course;

  return (
    <section
      id='course'
      className='bl-section bl-rule bl-band-stone bl-band-sky scroll-mt-24'
    >
      <div className='bl-container'>
        <Reveal className='bl-card grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-end lg:gap-16'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='flex h-8 w-8 items-center justify-center border border-brand/25 bg-brand-soft text-brand-text'>
                <CirclePlay className='h-4 w-4' aria-hidden='true' />
              </span>
              <p className='bl-kicker text-[11px] text-brand-text sm:text-xs'>
                {t.kicker}
              </p>
            </div>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-6 max-w-[17ch] text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] text-foreground'
            />
            <p className='mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
              {t.body}
            </p>
          </div>
          <div>
            {/* The field's own label is read by screen readers; this one is for the eye. */}
            <p
              aria-hidden='true'
              className='mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'
            >
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
            <p className='mt-2.5 text-xs text-muted-foreground'>{t.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Our DNA in four lines, and the way to Services for readers who need software. */
export function UpskillingDna({ dict }: SectionProps) {
  const t = dict.upskillingPage.dna;
  const services = dict.upskillingPage.services;

  return (
    <section className='bl-section bl-rule bg-background'>
      <div className='bl-container'>
        <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end'>
          <div>
            <Reveal>
              <p className='bl-kicker'>{t.kicker}</p>
            </Reveal>
            <TextReveal
              as='h2'
              text={t.title}
              accentWords={[...t.accent]}
              className='bl-display mt-5 text-display-lg text-foreground'
            />
            <Reveal delay={0.15}>
              <p className='mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
                {t.body}
              </p>
            </Reveal>
          </div>
          <Link href={paths.about} className='bl-action'>
            {t.cta} <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
          </Link>
        </div>

        <ol className='mt-10 grid gap-x-8 gap-y-6 border-t border-ink/60 sm:grid-cols-2 lg:grid-cols-4'>
          {t.values.map(([title, body], index) => (
            <li key={title} className='pt-5'>
              <p className='font-mono text-[10px] text-brand-text'>
                {pad(index + 1)}
              </p>
              <h3 className='bl-display mt-2 text-xl text-foreground'>
                {title}
              </h3>
              <p className='mt-1 text-sm text-muted-foreground'>{body}</p>
            </li>
          ))}
        </ol>

        <Reveal className='bl-card bl-card-ink mt-14 flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <p className='font-display text-2xl text-white'>
            {services.lead}{' '}
            <span className='bl-accent text-brand-2'>{services.accent}</span>
          </p>
          <Link
            href={paths.services}
            className='inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border border-white/40 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white'
          >
            {services.cta}
            <ArrowRight className='h-3.5 w-3.5' aria-hidden='true' />
          </Link>
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
      <Link
        href={paths.contactForm}
        className='bl-btn bl-btn-primary inline-flex min-h-12 items-center gap-2 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[3px_3px_0_0_hsl(var(--brand-2))]'
      >
        {t.primaryCta}
        <ArrowRight className='h-3.5 w-3.5' aria-hidden='true' />
      </Link>
      <CallButton className='inline-flex min-h-12 items-center gap-2 border border-white/30 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white'>
        {t.secondaryCta}
      </CallButton>
    </CtaBanner>
  );
}

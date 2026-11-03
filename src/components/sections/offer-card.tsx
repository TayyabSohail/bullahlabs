import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** One row: number, title, a half-line of body. The copy lives in `dict.offers`. */
type Offer = readonly string[];

/** One shared button measure (the course signup row's 3rem) so sibling cards' actions line up. */
const offerButton =
  'bl-btn inline-flex h-12 items-center gap-2 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]';

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
      {offers.map(([number, title, body]) => (
        <li
          key={title}
          className='grid grid-cols-[2rem_1fr] items-baseline gap-x-3 py-3.5'
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
        </li>
      ))}
    </ul>
  );
}

interface OfferCardProps {
  id?: string;
  /** Pair index ("01", "02") when the card sits beside a sibling door; omit for a lone card. */
  number?: string;
  kicker: string;
  title: string;
  offers: readonly Offer[];
  href: string;
  cta: string;
  /** Ink plate (white type, brand shadow). Off: whatever card tone `className` sets. */
  ink?: boolean;
  className?: string;
}

/**
 * One door card: kicker, title, three short offer rows, then one button.
 * No blurbs: the rows say it. The same skeleton serves the Conscious AI
 * "Where next" pair and the teams plate on the home page.
 */
export function OfferCard({
  id,
  number,
  kicker,
  title,
  offers,
  href,
  cta,
  ink = false,
  className,
}: OfferCardProps) {
  return (
    <article
      id={id}
      className={cn(
        'bl-card flex h-full flex-col p-6 sm:p-7',
        ink && 'bl-card-ink text-white',
        className,
      )}
    >
      {/* The same bracketed kicker every section uses, so sibling plates match. */}
      <p className={cn('bl-kicker', ink && 'text-white/60')}>
        {number ? `${number} · ${kicker}` : kicker}
      </p>
      <h3
        className={`bl-display mt-4 text-3xl leading-tight lg:text-4xl ${
          ink ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h3>
      <OfferRows offers={offers} ink={ink} />

      <div className='mt-auto flex flex-wrap gap-3 pt-6'>
        <Link
          href={href}
          className={`${offerButton} ${ink ? 'bl-btn-primary' : 'bl-btn-ink'}`}
        >
          {cta}
          <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
        </Link>
      </div>
    </article>
  );
}

/** The teams door, as it appears on the Conscious AI page and the home page. */
export function TeamsOfferCard({
  dict,
  id,
  number,
  ink = false,
  className,
}: Pick<OfferCardProps, 'id' | 'number' | 'ink' | 'className'> & {
  dict: Dictionary;
}) {
  const t = dict.offers.teams;
  return (
    <OfferCard
      id={id}
      number={number}
      kicker={t.kicker}
      title={t.title}
      offers={t.rows}
      href={paths.upskilling}
      cta={t.cta}
      ink={ink}
      className={className}
    />
  );
}

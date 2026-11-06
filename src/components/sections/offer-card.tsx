import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** One compact offer row. The copy lives in `dict.offers`. */
type Offer = readonly string[];

/** One shared button measure so sibling cards' actions line up. */
const offerButton = 'bl-btn inline-flex h-12 items-center gap-2 px-5';

/**
 * One offer per row, with a title and a short supporting line.
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
          ? 'mt-5 divide-y divide-white/15 border-y border-white/15'
          : 'mt-5 divide-y divide-ink/15 border-y border-ink/15'
      }
    >
      {offers.map(([, title, body]) => (
        <li key={title} className='py-3'>
          <span
            className={cn(
              'bl-display mr-2 text-lg sm:text-xl',
              ink ? 'text-white' : 'text-foreground',
            )}
          >
            {title}
          </span>
          <span
            className={cn(
              'text-sm leading-relaxed',
              ink ? 'text-white/65' : 'text-muted-foreground',
            )}
          >
            {body}
          </span>
        </li>
      ))}
    </ul>
  );
}

interface OfferCardProps {
  id?: string;
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
        'bl-card flex h-full flex-col p-5 sm:p-6',
        ink && 'bl-card-ink text-white',
        className,
      )}
    >
      {/* The same bracketed kicker every section uses, so sibling plates match. */}
      <p className={cn('bl-kicker', ink && 'text-white/60')}>
        {kicker}
      </p>
      <h3
        className={cn(
          'bl-display mt-3 text-2xl leading-tight sm:text-3xl',
          ink ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h3>
      <OfferRows offers={offers} ink={ink} />

      <div className='mt-auto flex flex-wrap gap-3 pt-5'>
        <Link
          href={href}
          className={cn(offerButton, ink ? 'bl-btn-primary' : 'bl-btn-ink')}
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
  ink = false,
  className,
}: Pick<OfferCardProps, 'id' | 'ink' | 'className'> & {
  dict: Dictionary;
}) {
  const t = dict.offers.teams;
  return (
    <OfferCard
      id={id}
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

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';

type Offer = readonly [number: string, title: string, body: string];

/** Three ways in for teams. */
export const teamOffers: readonly Offer[] = [
  ['01', 'Workshops', 'AI confidence, on your real tasks.'],
  ['02', 'Guidance', 'One set of rules for tools, cost and carbon.'],
  ['03', 'Audits', 'Find the waste in one workflow. Cut it.'],
];

/** Three ways in for people who build. */
export const buildOffers: readonly Offer[] = [
  ['01', 'Product development', 'Rough idea to paying product.'],
  ['02', 'Engineering', 'Web, mobile, backend. Built to last.'],
  ['03', 'AI automation & integrations', 'The boring work, automated.'],
];

/** One shared button measure so sibling cards' actions line up. */
const offerButton =
  'bl-btn inline-flex h-11 items-center gap-2 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]';

/**
 * One offer per row: number, title and a half-line of body on the same
 * baseline, so three rows read as a list rather than three paragraphs.
 */
function OfferRows({ offers, ink }: { offers: readonly Offer[]; ink: boolean }) {
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
        'bl-card flex h-full flex-col p-6 sm:p-7',
        ink && 'bl-card-ink text-white',
        className,
      )}
    >
      <p
        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
          ink ? 'text-brand-2' : 'text-brand-text'
        }`}
      >
        {kicker}
      </p>
      <h3
        className={`bl-display mt-4 text-2xl sm:text-3xl ${
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
  id,
  ink = false,
  className,
}: Pick<OfferCardProps, 'id' | 'ink' | 'className'>) {
  return (
    <OfferCard
      id={id}
      kicker='01 · For teams & businesses'
      title='Get your team using AI well'
      offers={teamOffers}
      href={paths.teams}
      cta='How we work with teams'
      ink={ink}
      className={className}
    />
  );
}

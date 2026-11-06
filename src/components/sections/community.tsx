import { ArrowUpRight } from 'lucide-react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** The two places the conversation continues. */
const communities = [
  {
    key: 'reddit',
    icon: FaRedditAlien,
    href: siteConfig.community.reddit,
    iconClassName: 'border-[#ff4500] bg-[#ff4500]',
  },
  {
    key: 'discord',
    icon: FaDiscord,
    href: siteConfig.community.discord,
    iconClassName: 'border-[#5865f2] bg-[#5865f2]',
  },
] as const;

/**
 * A shared invitation to continue the Conscious AI conversation off-site:
 * two ruled cards, each one link, icon and name on one row so a card is
 * four short lines on a phone, not a screen.
 */
export function CommunitySection({
  dict,
  className = 'bg-background',
}: {
  dict: Dictionary;
  className?: string;
}) {
  const t = dict.community;

  return (
    <section id='community' className={`bl-section bl-rule ${className}`}>
      <div className='bl-container'>
        <div className='grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-8'>
          <div className='max-w-xl'>
            <p className='bl-kicker'>{t.kicker}</p>
            <h2 className='bl-display mt-4 text-display-lg text-foreground'>
              {t.title}
            </h2>
          </div>
          <p className='max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:pb-1'>
            {t.description}
          </p>
        </div>

        <div className='mt-6 grid gap-4 sm:mt-8 md:grid-cols-2 md:gap-6'>
          {communities.map(({ key, href, icon: Icon, iconClassName }) => {
            const community = t.links[key];

            return (
              <a
                key={key}
                href={href}
                target='_blank'
                rel='noreferrer'
                className='bl-card bl-card-link group flex flex-col p-5 sm:p-6'
              >
                <span className='flex items-center gap-3'>
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border text-white ${iconClassName}`}
                  >
                    <Icon className='h-5 w-5' aria-hidden='true' />
                  </span>
                  <span className='bl-display text-2xl text-foreground sm:text-3xl'>
                    {community.label}
                  </span>
                </span>
                <span className='mt-3 block max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
                  {community.description}
                </span>
                <span className='bl-action mt-4 w-fit group-hover:text-foreground'>
                  {community.cta}
                  <ArrowUpRight className='h-3.5 w-3.5' aria-hidden='true' />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

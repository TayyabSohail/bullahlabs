import { ArrowUpRight } from 'lucide-react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

const communities = [
  {
    key: 'reddit',
    icon: FaRedditAlien,
    href: siteConfig.community.reddit,
    cardClassName:
      'border-[#ff4500] bg-[#fff7f2] shadow-[4px_4px_0_0_#ff4500] hover:bg-[#fff0e8]',
    iconClassName: 'bg-[#ff4500] text-white',
    actionClassName: 'text-[#c93a00] group-hover:text-[#8f2900]',
  },
  {
    key: 'discord',
    icon: FaDiscord,
    href: siteConfig.community.discord,
    cardClassName:
      'border-[#5865f2] bg-[#f5f5ff] shadow-[4px_4px_0_0_#5865f2] hover:bg-[#eeeeff]',
    iconClassName: 'bg-[#5865f2] text-white',
    actionClassName: 'text-[#4651ca] group-hover:text-[#303993]',
  },
] as const;

/** A shared invitation to continue the Conscious AI conversation off-site. */
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
        <div className='grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end'>
          <div className='max-w-xl'>
            <p className='bl-kicker'>{t.kicker}</p>
            <h2 className='bl-display mt-5 text-display-lg text-foreground'>
              {t.title}
            </h2>
          </div>
          <p className='max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:pb-1'>
            {t.description}
          </p>
        </div>

        <div className='mt-9 grid gap-5 md:grid-cols-2'>
          {communities.map(
            ({
              key,
              href,
              icon: Icon,
              cardClassName,
              iconClassName,
              actionClassName,
            }) => {
              const community = t.links[key];

              return (
                <a
                  key={key}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className={`bl-card bl-card-link group flex min-h-60 flex-col justify-between p-6 sm:p-8 ${cardClassName}`}
                >
                  <div>
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${iconClassName}`}
                    >
                      <Icon className='h-7 w-7' aria-hidden='true' />
                    </span>
                    <h3 className='bl-display mt-8 text-3xl text-foreground'>
                      {community.label}
                    </h3>
                    <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
                      {community.description}
                    </p>
                  </div>
                  <span className={`bl-action mt-8 w-fit ${actionClassName}`}>
                    {community.cta}
                    <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
                  </span>
                </a>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

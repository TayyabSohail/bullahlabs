import { ArrowUpRight } from 'lucide-react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

const communities = [
  {
    key: 'reddit',
    icon: FaRedditAlien,
    href: siteConfig.community.reddit,
    handle: 'r/BullahLabs',
    cardClassName:
      'border-[#ff4500] bg-[#fff7f2] shadow-[4px_4px_0_0_#ff4500] hover:bg-[#fff0e8]',
    iconClassName: 'bg-[#ff4500] text-white',
    handleClassName: 'border-[#ff4500]/25 bg-[#ff4500]/10 text-[#b93400]',
    actionClassName: 'text-[#c93a00] group-hover:text-[#8f2900]',
  },
  {
    key: 'discord',
    icon: FaDiscord,
    href: siteConfig.community.discord,
    handle: 'Bullah Labs server',
    cardClassName:
      'border-[#5865f2] bg-[#f5f5ff] shadow-[4px_4px_0_0_#5865f2] hover:bg-[#eeeeff]',
    iconClassName: 'bg-[#5865f2] text-white',
    handleClassName: 'border-[#5865f2]/25 bg-[#5865f2]/10 text-[#3f48b7]',
    actionClassName: 'text-[#4651ca] group-hover:text-[#303993]',
  },
] as const;

/** A shared invitation to continue the Conscious AI conversation off-site. */
export function CommunitySection({ dict }: { dict: Dictionary }) {
  const t = dict.community;

  return (
    <section className='bl-section bl-rule bg-background'>
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
              handle,
              cardClassName,
              iconClassName,
              handleClassName,
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
                    <div className='flex items-center justify-between gap-4'>
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${iconClassName}`}
                      >
                        <Icon className='h-7 w-7' aria-hidden='true' />
                      </span>
                      <span
                        className={`border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${handleClassName}`}
                      >
                        {handle}
                      </span>
                    </div>
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

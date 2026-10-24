import { FaDiscord, FaRedditAlien } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

const links = [
  {
    key: 'reddit',
    href: siteConfig.community.reddit,
    icon: FaRedditAlien,
    colors: 'border-[#ff4500] bg-[#ff4500] hover:bg-[#e03d00]',
  },
  {
    key: 'discord',
    href: siteConfig.community.discord,
    icon: FaDiscord,
    colors: 'border-[#5865f2] bg-[#5865f2] hover:bg-[#4752c4]',
  },
] as const;

/**
 * Reddit and Discord as square icon buttons in their brand colours, for the
 * header and the mobile menu; hover darkens them a shade. `data-cta` puts
 * clicks in PostHog's `cta_clicked`.
 */
export function CommunityLinks({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ key, href, icon: Icon, colors }) => (
        <a
          key={key}
          href={href}
          target='_blank'
          rel='noreferrer'
          data-cta={`community-${key}`}
          aria-label={dict.community.links[key].label}
          title={dict.community.links[key].label}
          className={cn(
            // Same height and hard offset shadow as the bl-btn CTA beside
            // them: lift on hover, press on click.
            'flex h-10 w-10 items-center justify-center border text-white shadow-[3px_3px_0_0_hsl(var(--ink))] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_0_hsl(var(--ink))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
            colors,
          )}
        >
          <Icon className='h-5 w-5' aria-hidden='true' />
        </a>
      ))}
    </div>
  );
}

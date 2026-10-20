import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

export interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
}

/**
 * Primary navigation always leads to a standalone page. The mobile menu and
 * footer share this list, so none of them silently turn into homepage anchors.
 * Contact remains the header button rather than a navigation item.
 */
export function primaryNav(dict: Dictionary): NavItem[] {
  return [
    { label: dict.nav.about, href: paths.about },
    { label: dict.nav.services, href: paths.services },
    { label: dict.nav.approach, href: paths.approach },
    { label: dict.nav.work, href: paths.work },
    { label: dict.nav.program, href: paths.program, featured: true },
  ];
}

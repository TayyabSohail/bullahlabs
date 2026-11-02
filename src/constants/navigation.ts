import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Primary navigation always leads to a standalone page. The mobile menu and
 * footer share this list, so none of them silently turn into homepage anchors.
 * Contact is appended by the header, mobile menu and footer themselves, so it
 * always sits last; the header's "Let's talk" button opens the booking modal.
 */
export function primaryNav(dict: Dictionary): NavItem[] {
  return [
    { label: dict.nav.program, href: paths.program },
    { label: dict.nav.about, href: paths.about },
    { label: dict.nav.work, href: paths.work },
    { label: dict.nav.services, href: paths.services },
  ];
}

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

export interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
}

/**
 * The primary links follow the landing-page story. The mobile menu and the
 * footer's Company column build on this same list, so the three never drift
 * apart. Contact is the header button rather than a navigation item.
 */
export function primaryNav(_dict: Dictionary): NavItem[] {
  return [
    { label: 'Our DNA', href: `${paths.home}#our-dna` },
    { label: 'Studio', href: `${paths.home}#studio` },
    { label: 'Projects', href: `${paths.home}#projects` },
    { label: 'Conscious AI ↗', href: paths.program, featured: true },
  ];
}

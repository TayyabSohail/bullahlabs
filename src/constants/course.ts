import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import { DEFAULT_INTEREST } from '@/schema/contact';

/** Contact form, with the course already chosen. */
export const requestAccessHref =
  `${paths.contact}?service=${DEFAULT_INTEREST}` as const;

/** True once NEXT_PUBLIC_COURSE_URL is set and the course can be opened. */
export const courseIsLive = siteConfig.courseUrl !== null;

/** The course itself, or the contact form until the course is published. */
export const courseHref: string = siteConfig.courseUrl ?? requestAccessHref;

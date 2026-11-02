import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';

/** The contact page; the form has no course option any more. */
export const requestAccessHref = paths.contact;

/** True once NEXT_PUBLIC_COURSE_URL is set and the course can be opened. */
export const courseIsLive = siteConfig.courseUrl !== null;

/** The course itself, or the contact form until the course is published. */
export const courseHref: string = siteConfig.courseUrl ?? requestAccessHref;

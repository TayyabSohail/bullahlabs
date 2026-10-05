export const paths = {
  home: '/',
  work: '/work',
  caseStudy: (slug: string) => `/work/${slug}` as const,
  about: '/about',
  program: '/conscious-ai',
  /** A tier on the program page, by its id in data/program.ts. */
  programTier: (id: string) => `/conscious-ai#${id}` as const,
  programTracks: '/conscious-ai#role-tracks-list',
  contact: '/contact',
  legal: {
    index: '/legal',
    privacy: '/legal/privacy',
    terms: '/legal/terms',
    cookies: '/legal/cookies',
    imprint: '/legal/imprint',
  },
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
} as const;

/** True for a link into a section of a page (/conscious-ai#team) rather than a page. */
export const isSectionLink = (href: string) => href.includes('#');

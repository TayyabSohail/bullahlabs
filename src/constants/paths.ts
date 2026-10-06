export const paths = {
  home: '/',
  work: '/work',
  caseStudy: (slug: string) => `/work/${slug}` as const,
  about: '/about',
  program: '/conscious-ai',
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

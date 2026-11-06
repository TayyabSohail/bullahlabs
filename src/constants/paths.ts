export const paths = {
  home: '/',
  work: '/work',
  caseStudy: (slug: string) => `/work/${slug}` as const,
  about: '/our-dna',
  services: '/services',
  approach: '/approach',
  program: '/conscious-ai',
  teams: '/conscious-ai/teams',
  upskilling: '/upskilling',
  pricing: '/pricing',
  contact: '/contact',
  /** The contact page opened on its "Write to us" form instead of the calendar. */
  contactForm: '/contact?channel=form',
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

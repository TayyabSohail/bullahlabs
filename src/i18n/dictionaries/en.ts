import type { Locale } from '../config';

export const en = {
  locale: 'en' as Locale,
  nav: {
    program: 'Conscious AI',
    work: 'Projects',
    about: 'About',
    contact: 'Contact',
    home: 'Home',
    cta: 'Get in touch',
    bookCall: 'Book a call',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
  },
  hero: {
    badge: 'AI enablement & optimization',
    title: 'Stop using AI by default.\nStart using it on purpose.',
    body: 'Conscious AI is a practical program that teaches non-technical teams to pick the right tool for each task, check what comes back, and use AI without waste.',
    primary: 'See the program',
    secondary: 'Request early access',
    /** Three facts under the hero; the two counts come from the program data. */
    facts: {
      free: { value: 'Free', label: 'Fundamentals course, for any AI tool' },
      tiers: 'Tiers, from one person to a whole team',
      tracks: 'Role tracks, built around real jobs',
    },
    /** The map beside the hero copy: a team goes through the program's three
        pillars and comes out using AI well. A newline splits a tile label. */
    map: {
      kicker: 'A team goes through the program and comes out using AI well',
      nodes: {
        team: 'Your team',
        program: 'Conscious\nAI',
        use: 'Conscious\nuse',
        teams: 'Trained\nteams',
        usage: 'Optimized\nusage',
        result: 'AI used\nwell',
      },
    },
  },
  /** One everyday task done out of habit and done deliberately, side by side. */
  compare: {
    kicker: 'In practice',
    title: 'The same task, two ways',
    accent: [3, 4],
    description:
      'Turning a long report into a short client update. Nothing here needs a technical background.',
    defaultLabel: 'By default',
    consciousLabel: 'On purpose',
    rows: [
      {
        step: 'Tool',
        default: 'The most powerful model, because it is the one already open.',
        conscious:
          'A lighter model. A summary is easy to check against the source.',
      },
      {
        step: 'Context',
        default: 'The whole 40-page report, pasted in.',
        conscious: 'Only the two sections the client asked about.',
      },
      {
        step: 'Prompt',
        default:
          '"Summarise this." Then four follow-ups to fix the tone and the length.',
        conscious:
          'Task, audience, length and format, all in the first prompt.',
      },
      {
        step: 'Finish',
        default: 'Regenerate until one version feels right.',
        conscious: 'Edit the first usable draft, check the figures, send.',
      },
    ],
    defaultResult: 'More rounds and more computation, for the same update.',
    consciousResult:
      'Fewer rounds, less computation, and a result you checked.',
    note: 'An illustration of the habits taught in the free course, not a measured result.',
    cta: 'See what the free course covers',
  },
  /** Where the name comes from, and why the program is called conscious. */
  origin: {
    kicker: 'The name',
    title: 'Bullah, after Bulleh Shah',
    accent: [2, 3],
    verse: 'Parh parh aalim faazil hoya, kadi apne aap nu parhya ee nahin.',
    translation:
      'You read and read and became a scholar, but you never read yourself.',
    attribution: 'Bulleh Shah, Punjabi poet, c. 1680 to 1757',
    body: [
      'Bulleh Shah, remembered for his verse and his whirling dance, held that learning counts for little without awareness of what you are doing and why.',
      'That is what conscious means here: not more tools and more prompts, but knowing what the task needs and stopping there. Our mark is that dancer drawn as a neural network: every joint a node, every limb a link, and the skirt two layers of nodes fanning out as the figure turns.',
    ],
  },
  work: {
    kicker: 'Proof in production',
    title: 'What we built, and how it is optimized',
    description:
      'Fourteen products in production. Each case study says what the product is, then shows the optimization behind it: the right tool for the task, only the needed context, nothing done twice, checked before trusted.',
    all: 'All projects',
    view: 'Read the case study',
    filterLabel: 'Filter projects',
    filters: {
      All: 'All work',
      'right-tool': 'Right tool',
      'lean-context': 'Needed context',
      'no-repeat': 'Nothing twice',
      checked: 'Checked',
      SaaS: 'SaaS',
      Marketplace: 'Marketplaces',
      AI: 'AI',
      Mobile: 'Mobile',
      Website: 'Websites',
    },
    /** The four efficiency lenses a case study can lead with. */
    lenses: {
      'right-tool': {
        label: 'Right tool for the task',
        principle:
          'Rules and ordinary software before AI. A model only where it earns its place.',
      },
      'lean-context': {
        label: 'Only the needed context',
        principle:
          'Each request, user or agent gets the data it needs and nothing more.',
      },
      'no-repeat': {
        label: 'Nothing done twice',
        principle:
          'Caching, batching and reuse instead of regenerating the same work.',
      },
      checked: {
        label: 'Checked before trusted',
        principle:
          'Output is grounded, traceable or approved by a person where the risk requires it.',
      },
    },
    count: '{n} projects',
    /** Homepage pointer to the projects page; the work itself lives there. */
    teaser: {
      kicker: 'Projects',
      title: 'Real products, built to waste nothing',
      accent: [4, 5],
      body: 'Marketplaces, SaaS platforms, AI systems and websites in production. Each one says what it is, and how it was optimized.',
      cta: 'Browse all projects',
      listLabel: 'Featured projects',
      more: '{n} more on the projects page',
    },
  },
  pillars: {
    kicker: 'What we stand for',
    title: 'Three pillars of using AI well',
  },
  program: {
    kicker: 'Conscious AI',
    title: 'One program, four ways in',
    accent: [2, 3, 4],
    description:
      'Start with the free course. Go deeper in your own tools, your own role, then your whole team. You can stop at any tier with a complete, usable result.',
    cta: 'See the full program',
    tracksCta: 'See what each track builds',
    tier: 'Tier',
    audience: 'For',
    outcome: 'You leave with',
    modules: 'Modules',
    output: 'Output',
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'Use AI well. Not just more.',
    accent: [3, 4, 5],
    description:
      'A practical program for non-technical knowledge workers: when AI helps, how to reach a reliable result in fewer rounds, and how to stop paying for usage nobody needed.',
    primary: 'Request early access',
    secondary: 'See the four tiers',
    principle:
      'AI literacy is knowing when, why and how to use AI well, not just how to operate the tools.',
    tiersKicker: 'The tiers',
    tiersTitle: 'Stop at any tier with something that works',
    tiersDescription:
      'The free course teaches the principles. Three paid tiers apply them to your own tools, your job and your whole team.',
    tracksKicker: 'Role tracks',
    tracksTitle: 'Built around the job you actually do',
    tracksDescription:
      'Each track builds three real workflows for one role and comes with a ready-to-use template pack.',
    flagship: 'Flagship',
    technical: 'Technical',
    audienceKicker: 'Who it is for',
    audienceTitle: 'Knowledge workers, not engineers',
    audienceDescription:
      'Written for people who want better work out of AI without becoming technical experts.',
    employee: {
      label: 'For you',
      title: 'More productive, more confident, ready for what changes',
      body: 'Skills you use the same day: fewer rounds to a usable answer, a clear sense of when AI is the wrong tool, and the judgement to check what it gives you.',
    },
    employer: {
      label: 'For your company',
      title: 'An AI-capable workforce, with usage you can account for',
      body: 'Consistent, measurable AI use across non-technical teams: shared standards, a one-page policy, human review where it matters and less spend on computation that changed nothing.',
    },
    ctaTitle: 'Start with the free course.',
    ctaAccent: [3, 4],
    ctaBody:
      'Tell us who you are and how you use AI today. We reply within one business day, with access details for you or a plan for your team.',
  },
  contactForm: {
    name: 'Full name',
    namePlaceholder: 'Jane Doe',
    email: 'Work email',
    emailPlaceholder: 'jane@company.com',
    company: 'Company',
    optional: 'optional',
    companyPlaceholder: 'Company or team name',
    service: 'What are you interested in?',
    serviceOther: 'Something else',
    serviceOtherTagline: 'A question, a partnership or anything not listed.',
    message: 'Your message',
    messagePlaceholder:
      'How do you or your team use AI today, and what would you like to get better at?',
    consentBefore:
      'I agree that Bullah Labs may store and process this enquiry to respond to me, as described in the',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Send enquiry',
    replyNote: 'We reply {time}.',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    sentTitle: 'Message received.',
    sentBody:
      'Thank you. We read every enquiry personally and reply {time}, straight to the address you gave us.',
    sentAgain: 'Send another',
    // Multi-step wizard
    stepLabel: 'Step {current} of {total}',
    next: 'Continue',
    back: 'Back',
    steps: {
      service: {
        title: 'Where would you like to start?',
        subtitle: 'Pick the closest match. You can move between tiers later.',
      },
      message: {
        title: 'Tell us a little more.',
        subtitle:
          'Your role, the AI tools you use and what you want to improve.',
      },
      details: {
        title: 'Where do we send the reply?',
        subtitle: 'Last step. We only use this to answer your enquiry.',
      },
    },
    charactersLeft: '{count} characters left',
    minChars: 'At least 20 characters',
  },
  workPage: {
    back: 'All projects',
    anonymised: 'Client project, name changed on request',
    private: 'Private deployment, client project',
    category: 'Category',
    year: 'Year',
    capabilities: 'Capabilities',
    lens: 'Optimization',
    efficiencyKicker: 'How it is optimized',
    techniques: 'What keeps it lean',
    industry: 'Industry',
    problem: 'The problem',
    approach: 'Our approach',
    architecture: 'How it is built',
    keyFeatures: 'Key features',
    challengesKicker: 'Challenges & solutions',
    challenge: 'Challenge',
    solution: 'Solution',
    resultsKicker: 'Results',
    resultsTitle: 'What shipping it changed.',
    gallery: 'Inside the product',
    onThePhone: 'On the phone',
    galleryTitle: 'More than one screen.',
    galleryAnonymised:
      "The product name and data have been changed at the client's request; these screens recreate {title} as it was built.",
    galleryMore: '{n} more screens from {title}, captured at device size.',
    homeScreen: 'Home',
    stack: 'Stack',
    more: 'More case studies',
    previous: 'previous',
    next: 'next',
    notFound: 'Case study not found',
    ctaTitle: 'Want your team to work this way?',
    ctaAccent: [4, 5, 6],
    ctaBody:
      'The principles behind this build are the ones Conscious AI teaches. Tell us how your team uses AI today and we reply within one business day.',
  },
  aboutPage: {
    kicker: 'About Bullah Labs',
    title: 'A company built around using AI well.',
    accent: [4, 5, 6],
    description:
      'We teach non-technical teams to use AI effectively and responsibly.',
    story: [
      'Bullah Labs started as a software studio. Years of building products taught us one rule: use the smallest system that reliably does the job.',
      'When AI arrived in every tool, we saw the opposite everywhere: the strongest model for every task, whole documents pasted where a paragraph would do, answers regenerated instead of reused. So we turned the rule into a program. Conscious AI is now the whole company.',
    ],
    facts: [
      {
        label: 'What we do',
        value: 'The Conscious AI program: a free course and three paid tiers',
      },
      {
        label: 'Who for',
        value:
          'Non-technical knowledge workers and the companies that employ them',
      },
      {
        label: 'How',
        value:
          'Practical, role-specific, measured before and after, with human oversight where risk requires it',
      },
      {
        label: 'Where',
        value: 'Islamabad and Fellbach, with overlapping working hours',
      },
    ],
    principlesKicker: 'Principles',
    principlesTitle: 'Four rules we teach and work by.',
    principlesAccent: [0, 1],
    whereKicker: 'Where we are',
    whereTitle: 'Two offices, one working day.',
    whereAccent: [3, 4],
    whereDescription:
      'An Asian office in Islamabad and a European office in Fellbach. Write to whichever is closer; the same team answers.',
    ctaTitle: 'Want to see where your team is wasting AI?',
    ctaAccent: [7, 8],
    ctaBody:
      'Tell us how your team uses AI today. We reply within one business day with where the program fits.',
  },
  legal: {
    kicker: 'Legal',
    title: 'The paperwork, in plain language.',
    accent: [3, 4],
    description:
      'Everything that governs how we run this website and how we work with clients, written to be read rather than skimmed. Questions go straight to a person, not a form.',
    reviewed: 'All documents last reviewed {date}',
    updatedLabel: 'Last updated',
    read: 'Read',
    contents: 'Contents',
    onThisPage: 'On this page',
    otherPolicies: 'Other policies:',
    backToLegal: 'All legal documents',
    policies: {
      privacy: {
        title: 'Privacy Policy',
        summary:
          'What personal data this website collects, why, who processes it and the rights you have under the GDPR.',
        audience: 'Visitors, enquirers and clients',
      },
      terms: {
        title: 'Terms of Service',
        summary:
          'The general terms for using this site and for engaging Bullah Labs, covering scope, payment, intellectual property and liability.',
        audience: 'Business clients',
      },
      cookies: {
        title: 'Cookie Policy',
        summary:
          'The two preference entries the site stores and the single analytics cookie that loads only if you accept it.',
        audience: 'Visitors',
      },
      imprint: {
        title: 'Imprint',
        summary:
          'Legal notice (Impressum) with the company details, contact information and responsible persons required under German law.',
        audience: 'Everyone',
      },
    },
    intros: {
      privacy:
        'What we collect, why, and what you can ask us to do about it. Written for people, not for lawyers.',
      terms:
        'The terms that govern this website and our client engagements, in language you can actually read.',
      cookies:
        'Two small pieces of storage to remember your preferences, and one analytics cookie only if you say yes.',
      imprint:
        'Who runs this website, where we are registered and how to reach a responsible person.',
    },
    commitmentsKicker: 'How we contract',
    commitmentsTitle: 'Four commitments in every engagement.',
    commitments: [
      {
        title: 'You own what we build',
        body: 'Custom code, designs and documentation are assigned to you on payment. We work in repositories and accounts registered to your company.',
      },
      {
        title: 'GDPR by default',
        body: 'A data processing agreement is provided for every project that touches personal data, and our own site collects the minimum needed to reply to you.',
      },
      {
        title: 'NDA before discovery',
        body: 'We sign a mutual non-disclosure agreement on request before any scoping conversation, and treat every brief as confidential regardless.',
      },
      {
        title: 'Two contracting entities',
        body: 'Clients can contract with our German office under German law or with our Asian office under Pakistani law. The statement of work names which.',
      },
    ],
    requestsKicker: 'Legal and data requests',
    requestsBody:
      'To exercise a data right, request a data processing agreement or NDA, report a security issue, or ask anything about these documents, email us. A person replies within five business days; data requests are answered within one month as the GDPR requires.',
  },
  notFound: {
    kicker: 'Error 404',
    title: 'This page was never engineered.',
    accent: [4],
    body: 'The address may have changed, or the link was wrong. The program is one click away.',
    home: 'Back home',
    program: 'See the program',
  },
  cookies: {
    label: 'Cookie consent',
    kicker: 'Cookies',
    bodyBefore:
      'We use a privacy-friendly analytics cookie to understand which pages are useful. No advertising, no cross-site tracking. Read the',
    link: 'cookie policy',
    bodyAfter: '.',
    accept: 'Accept',
    decline: 'Decline',
  },
  contact: {
    kicker: 'Contact',
    title: 'Tell us where AI should help.',
    accent: [3, 4, 5],
    description:
      'A few sentences are enough. Tell us how you or your team use AI today. We reply within one business day.',
    direct: 'How to reach us',
    formNote:
      'The form is the fastest way in. It comes straight to us and we answer every enquiry personally.',
    book: 'Book a 30-minute intro call',
    callNote: 'Prefer a call? Mention it and we will send a booking link.',
    /** Two ways to start: write to us, or book a slot straight away. */
    choose: {
      formTab: 'Write to us',
      callTab: 'Book a call',
      callHint: '30-minute intro call',
    },
    faqKicker: 'Before you write',
    faqTitle: 'The questions we get most.',
    faqAccent: [4],
    /** Closing section of the homepage: the same form, without leaving. */
    home: {
      kicker: 'Contact',
      title: 'Tell us where AI should help.',
      accent: [3, 4, 5],
      description:
        'A few sentences are enough. Tell us how you or your team use AI today. We reply within one business day.',
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Straight answers, before you commit.',
    description: 'About the program, who it is for and how it works.',
    accent: [0, 1],
  },
  cta: {
    kicker: "Let's talk",
    title: 'Ready to use AI on purpose?',
    accent: [4, 5],
    body: 'Tell us about your team and how it uses AI today. We reply within one business day with where Conscious AI fits.',
    button: 'Get in touch',
  },
  footer: {
    pitch: 'AI enablement for non-technical knowledge workers.',
    quote: 'Get in touch',
    program: 'The program',
    company: 'Company',
    offices: 'Offices',
    legal: 'Legal',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export type Dictionary = typeof en;

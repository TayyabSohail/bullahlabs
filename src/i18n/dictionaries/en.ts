import type { Locale } from '../config';

export const en = {
  locale: 'en' as Locale,
  nav: {
    program: 'Conscious AI',
    services: 'Services',
    work: 'Projects',
    about: 'About',
    contact: 'Contact',
    home: 'Home',
    careers: 'Careers',
    cta: 'Get in touch',
    bookCall: 'Book a call',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    next: 'Next',
    top: 'Back to top',
  },
  hero: {
    badge: 'AI enablement for knowledge workers',
    title: 'Work smarter with AI.\nUse it on purpose.',
    accent: [4, 5, 6, 7],
    body: 'Bullah Labs helps non-technical teams use AI effectively, build skills that stay relevant and cut the usage nobody needed. We teach it in Conscious AI, and we build it into every system we ship.',
    primary: 'Explore Conscious AI',
    secondary: 'See it in our work',
    /** The living map beside the hero copy: a task routed to the lightest thing that can do it. */
    map: {
      kicker: 'The smallest reliable system for each task',
      nodes: {
        web: 'Task',
        mobile: 'Context',
        api: 'Route',
        db: 'Rules',
        ai: 'Full model',
        cloud: 'Light model',
      },
    },
  },
  work: {
    kicker: 'Proof in production',
    title: 'Efficiency you can inspect',
    description:
      'Fourteen products in production. Each one is read through a principle we teach: the right tool for the task, only the needed context, nothing done twice, checked before trusted.',
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
      title: 'Every project, by what it saves',
      accent: [3, 4, 5],
      body: 'We build the way we teach. Each product below is in production, and each case study opens with the principle that keeps it lean.',
      cta: 'Browse all projects',
      listLabel: 'Featured projects',
      more: '{n} more on the projects page',
    },
  },
  services: {
    kicker: 'Build with us',
    title: 'We build the way we teach',
    explore: 'See the service',
    groups: {
      capability: {
        label: 'Lean systems, end to end',
      },
    },
    meta: {
      timeline: 'Timeline',
      team: 'Team',
      pricing: 'Quote',
      support: 'After launch',
    },
  },
  pillars: {
    kicker: 'What we stand for',
    title: 'Three pillars of using AI well',
    description:
      'Productivity first, career resilience with it, and responsible, efficient use as the standard.',
  },
  program: {
    kicker: 'Conscious AI',
    title: 'One program, four ways in',
    accent: [2, 3, 4],
    description:
      'Start with the free course. Go deeper in your own tools, your own role, then your whole team. You can stop at any tier with a complete, usable result.',
    cta: 'See the full program',
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
      'A practical program for non-technical knowledge workers. Learn when AI helps, how to reach a reliable result in fewer rounds, and how to stop paying, in money and in computation, for usage nobody needed.',
    primary: 'Request early access',
    secondary: 'See the four tiers',
    principle:
      'AI literacy is knowing when, why and how to use AI well, not just how to operate the tools.',
    themesKicker: 'Five themes',
    themesTitle: 'The same five themes, deeper at every tier',
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
    sustainabilityKicker: 'On sustainability',
    sustainabilityTitle: 'Less waste, added up',
    sustainabilityBody:
      'We do not put a number on a single prompt, because nobody honestly can. What adds up is unnecessary usage repeated across teams, workflows and whole organisations. The program reduces it at the source, and the Team tier reports estimated energy use next to cost and time.',
    ctaTitle: 'Start with the free course.',
    ctaAccent: [3, 4],
    ctaBody:
      'Tell us who you are and how you use AI today. We reply within one business day, with access details for you or a plan for your team.',
  },
  technologies: {
    kicker: 'Trusted technology',
    statement: 'Built on the tools that matter.',
    statementMuted: 'Proven tools. No experiments on your budget.',
    stackLabel: 'The stack, by layer',
    layers: [
      { label: 'Interface', note: 'What your users see and touch.' },
      { label: 'Mobile', note: 'iOS and Android, native or cross-platform.' },
      { label: 'Backend & data', note: 'Where the truth lives.' },
      {
        label: 'AI systems',
        note: 'Models, retrieval and agents on your data.',
      },
      {
        label: 'Automation',
        note: 'Work that runs without a human in the loop.',
      },
      { label: 'Cloud & delivery', note: 'Where it runs and keeps running.' },
    ],
  },
  industries: {
    kicker: 'Industries',
    title: 'Who we build for',
    description:
      'Products where a wrong number costs money. Every industry below has a shipped case study behind it.',
    shipped: 'Shipped',
    items: {
      fintech: {
        name: 'Fintech',
        blurb: 'Wallets, ledgers and payouts that reconcile to the last unit.',
      },
      realEstate: {
        name: 'Real estate',
        blurb: 'Marketplaces, rental platforms and agency operations.',
      },
      ecommerce: {
        name: 'Ecommerce',
        blurb:
          'Multi-seller storefronts, checkout, shipping and support automation.',
      },
      hr: {
        name: 'HR & payroll',
        blurb: 'Attendance, leave and payroll that pass an audit.',
      },
      healthcare: {
        name: 'Healthcare',
        blurb:
          'Rehabilitation and patient-facing assistants with clinical guardrails.',
      },
      recruiting: {
        name: 'Recruiting',
        blurb: 'Structured voice interviews, scoring and transcripts at scale.',
      },
      martech: {
        name: 'Marketing technology',
        blurb: 'SEO and content platforms that generate, publish and measure.',
      },
      compliance: {
        name: 'Compliance',
        blurb: 'Clause-level document review with an audit trail.',
      },
    },
  },
  globalReach: {
    kicker: 'Offices',
    title: 'Delivering worldwide, from Germany and Pakistan.',
    description:
      'Clients across Europe, North America, the Middle East, Africa and Asia, served from Fellbach and Islamabad.',
    legend: 'Offices and client locations',
  },
  numbers: {
    kicker: 'By the numbers',
    title: 'Proof, not promises',
    description: 'Figures from projects we have delivered.',
    items: [
      { value: '150+', label: 'Projects delivered' },
      { value: '40+', label: 'Clients on four continents' },
      { value: '6 wks', label: 'Typical time to first release' },
    ],
  },
  howItWorks: {
    kicker: 'Working with us',
    title: 'How a build runs',
    stepLabel: 'Step',
    cta: 'Start with a call',
    steps: [
      {
        title: 'Know the cost before the code',
        when: 'Kick-off',
        summary:
          'A short call about the product and its deadline. Within a week you have a written scope, a price and a launch date.',
      },
      {
        title: 'Shape the first release',
        when: 'Scope',
        summary:
          'We cut the brief down to the smallest product that is useful on day one.',
      },
      {
        title: 'See it before it is built',
        when: 'Design',
        summary:
          'Clickable screens of the main flows, reviewed together before any production code exists.',
      },
      {
        title: 'Use it while it is being built',
        when: 'Build',
        summary:
          'Every sprint ends with a staging link and a short note on what comes next.',
      },
      {
        title: 'Launch with confidence',
        when: 'Launch',
        summary:
          'We test the paths that matter, set up monitoring and rehearse the handover.',
      },
      {
        title: 'Ownership stays with you',
        when: 'Live',
        summary:
          'We watch production and fix what breaks. Keep us on retainer, or take over the code and accounts in full.',
      },
    ],
  },
  testimonials: {
    kicker: 'Client voices',
    title: 'What it is like to work with us',
    accent: [6],
    caseStudy: 'View project',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
  },
  servicesPage: {
    kicker: 'Build with us',
    title: 'Systems sized to the job.',
    accent: [1, 2, 3, 4],
    description:
      'Our engineering team builds what the program teaches: the smallest system that reliably does the work. Five capabilities and two ways to engage, each scoped in writing and maintained by us after launch.',
    deliverables: 'What you get',
    useCases: 'Typical engagements',
    stack: 'Tools we use',
    proof: 'Proof',
    faqTitle: 'Questions about this service',
  },
  servicePage: {
    back: 'All services',
    kindEngagement: 'Engagement model',
    kindCapability: 'Capability',
    discuss: 'Discuss this service',
    engagement: 'Engagement',
    coreStack: 'Core stack',
    included: 'What is included',
    useCases: 'Typical use cases',
    proof: 'Proof',
    proofTitle: 'Where we have done this before.',
    allCaseStudies: 'All case studies',
    faqKicker: 'Questions',
    faqTitle: 'About this service.',
    faqAccent: [1, 2],
    others: 'Other services',
    notFound: 'Service not found',
  },
  contactForm: {
    name: 'Full name',
    namePlaceholder: 'Jane Doe',
    email: 'Work email',
    emailPlaceholder: 'jane@company.com',
    company: 'Company',
    optional: 'optional',
    companyPlaceholder: 'Company or product name',
    service: 'What do you need?',
    serviceProgram: 'Conscious AI program',
    serviceProgramTagline: 'Training for you or your whole team.',
    servicePlaceholder: 'Choose a service',
    serviceOther: 'Something else',
    budget: 'Budget range',
    budgetPlaceholder: 'Choose a range',
    budgetHeading: 'Rough budget',
    budgetHint:
      'A range is enough. It tells us what shape of team fits - it is not a quote.',
    message: 'Your message',
    messagePlaceholder:
      'How does your team use AI today, or what do you need built, and by when?',
    consentBefore:
      'I agree that Bullah Labs may store and process this enquiry to respond to me, as described in the',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Send enquiry',
    replyNote: 'We reply {time}.',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    sentTitle: 'Message received.',
    sentToast: 'Your enquiry has been sent. We reply {time}.',
    sentBody:
      'Thank you. We read every enquiry personally and reply {time}, straight to the address you gave us.',
    sentAgain: 'Send another',
    // Multi-step wizard
    stepLabel: 'Step {current} of {total}',
    next: 'Continue',
    back: 'Back',
    steps: {
      service: {
        title: 'What can we help with?',
        subtitle: 'Pick the closest match. We will refine it together.',
        kicker: 'The need',
      },
      message: {
        title: 'Tell us a little more.',
        subtitle:
          'How does your team use AI today, or what do you need built, and by when?',
        kicker: 'The brief',
      },
      details: {
        title: 'Where do we send the reply?',
        subtitle: 'Last step. We only use this to answer your enquiry.',
        kicker: 'Your details',
      },
    },
    reviewTitle: 'Your enquiry',
    notProvided: 'Not provided',
    charactersLeft: '{count} characters left',
    minChars: 'At least 20 characters',
    budgets: {
      'under-10k': 'Under €10k',
      '10k-25k': '€10k - €25k',
      '25k-50k': '€25k - €50k',
      '50k-100k': '€50k - €100k',
      'over-100k': '€100k+',
      retainer: 'Monthly retainer',
      unsure: 'Not sure yet',
    },
  },
  workPage: {
    back: 'All projects',
    anonymised: 'Client project, name changed on request',
    private: 'Private deployment, client project',
    category: 'Category',
    year: 'Year',
    capabilities: 'Capabilities',
    lens: 'Efficiency lens',
    efficiencyKicker: 'Why it is efficient',
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
    servicesInvolved: 'Services involved',
    more: 'More case studies',
    previous: 'previous',
    next: 'next',
    notFound: 'Case study not found',
    ctaTitle: 'Building something similar?',
    ctaAccent: [1, 2],
    ctaBody:
      'We can usually tell within one call whether the approach above transfers to your problem, and what would need to change.',
  },
  aboutPage: {
    kicker: 'About Bullah Labs',
    title: 'A company built around using AI well.',
    accent: [4, 5, 6],
    description:
      'We teach non-technical teams to use AI effectively and responsibly, and we build lean systems for the companies that need them.',
    story: [
      'Bullah Labs started as a software studio. Years of building products taught us the thing clients rarely ask for and always need: the smallest system that reliably does the job.',
      'When AI arrived in every tool, we saw the same waste at a larger scale. The strongest model for every task. Whole documents pasted where a paragraph would do. Answers regenerated instead of reused. Most of it comes from people who were handed a tool and no training.',
      'So we turned what we practise into a program. Conscious AI teaches knowledge workers when, why and how to use AI well, and our engineering team still builds for companies that need a system rather than a course. Our offices are in Islamabad and Fellbach.',
    ],
    facts: [
      {
        label: 'What we do',
        value:
          'The Conscious AI program, and lean web, AI and automation builds',
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
    principlesTitle: 'Four rules every project is held to.',
    principlesAccent: [0, 1],
    whereKicker: 'Where we are',
    whereTitle: 'Two offices, one working day.',
    whereAccent: [3, 4],
    whereDescription:
      'An Asian office in Islamabad and a European office in Fellbach. Call whichever is closer; the same team answers.',
    careersKicker: 'Careers',
    careersTitle: 'No open positions right now.',
    careersBody:
      'We are not hiring at the moment. When that changes, roles will be listed on the careers page.',
    careersLink: 'Careers',
    ctaTitle: 'Want to see where your team is wasting AI?',
    ctaAccent: [7, 8],
    ctaBody:
      'Tell us how your team uses AI today. We reply within one business day with where the program fits, or with a written scope if you need something built.',
  },
  careersPage: {
    kicker: 'Careers',
    title: 'No open positions right now.',
    accent: [1, 2],
    description:
      'Bullah Labs is a small studio that hires slowly. We are not recruiting at the moment, and there are no vacancies to apply for. When that changes, the roles will be listed on this page.',
    badge: '0 open positions',
    statusKicker: 'Current status',
    statusTitle: 'We are not accepting applications.',
    statusBody:
      'There are no vacancies for engineers, designers or any other role, in Islamabad, in Fellbach or remote.',
    notifyBefore: 'Want to hear when this changes? Send us a note through',
    notifyAfter:
      'mentioning “Future roles” and we will let you know once a position opens.',
    ctaTitle: 'Rather hire us than join us?',
    ctaAccent: [1, 2],
    ctaBody:
      'Our dedicated team service embeds senior engineers in your roadmap, in your tools, on your schedule.',
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
    body: 'The address may have changed, or the link was wrong. The program and our work are one click away.',
    home: 'Back home',
    work: 'See the work',
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
      'A few sentences are enough. Tell us how your team uses AI today, or what you need built. We reply within one business day.',
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
        'A few sentences are enough. Tell us how your team uses AI today, or what you need built. We reply within one business day.',
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Straight answers, before you commit.',
    description: 'About the program, our builds and how we work.',
    accent: [0, 1],
  },
  cta: {
    kicker: "Let's talk",
    title: 'Ready to use AI on purpose?',
    accent: [4, 5],
    body: 'Tell us about your team and how it uses AI today. We reply within one business day with where Conscious AI fits, or with a written scope if you need something built.',
    button: 'Get in touch',
  },
  footer: {
    pitch:
      'AI enablement for knowledge workers, and lean systems for the teams that need them built.',
    quote: 'Get in touch',
    services: 'Build with us',
    company: 'Company',
    offices: 'Offices',
    legal: 'Legal',
    connect: 'Connect',
    caseStudies: 'Projects',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export type Dictionary = typeof en;

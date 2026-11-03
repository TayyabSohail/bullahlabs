import type { ReceiptCopy } from '@/components/sections/planet-receipt';

import type { Locale } from '../config';

/** One answer in the AI profile quiz. The value is stored and analysed; the words are read. */
export interface SnapshotOptionCopy {
  value: string;
  label: string;
  detail?: string;
}

/** One of the five quiz questions, in words; the field and kind live in the component. */
export interface SnapshotQuestionCopy {
  rail: string;
  title: string;
  options: SnapshotOptionCopy[];
}

export const en = {
  locale: 'en' as Locale,
  nav: {
    about: 'Our DNA',
    program: 'Conscious AI',
    services: 'Services',
    work: 'Work',
    approach: 'Approach',
    contact: 'Contact',
    home: 'Home',
    cta: "Let's talk",
    bookCall: 'Book a call',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    primary: 'Primary',
    language: 'Language',
    community: 'Community',
  },
  hero: {
    title: 'Technology that solves problems.\nBuilt with conscience.',
    /** Words (0-based, across both lines) in the accent colour: the second line. */
    accent: [4, 5, 6],
    /** What we do, AI first: one strong line in ink, then one quiet line. The problem people arrive with is the next section. */
    lead: 'We make AI do more with less.',
    body: 'Less cost, less energy, less complexity. For the AI your team already uses, and for the products we build.',
    /** One button only: Conscious AI. The studio's own "start a project" call waits for the sections below. */
    primary: 'Explore Conscious AI',
    /**
     * The three ways in under the buttons, three ruled cards, each one link:
     * course (/conscious-ai), team training (/conscious-ai/teams), services
     * (/services). Order is fixed by the hero's STEP_PATHS. Kicker under
     * about 20 characters, title under about 20, body one or two lines.
     */
    steps: [
      {
        kicker: 'Free · self-paced',
        title: 'Learn it yourself.',
        body: 'A free course for non-developers. Use AI well in your own work.',
        cta: 'Open the course',
      },
      {
        kicker: 'For teams',
        title: 'Train your team.',
        body: 'Hands-on sessions around your real workflows. Measured before and after.',
        cta: 'See team training',
      },
      {
        kicker: 'The studio',
        title: 'Hire us to build.',
        body: 'AI optimisation and lean digital products. Right model, less waste.',
        cta: 'See our services',
      },
    ],
    /**
     * The bill beside the hero copy: one piece of work, a team's contract
     * summaries over a year, printed the usual way and ours. Same example
     * and figures as the Conscious AI hero.
     */
    receipt: {
      header: "Receipt · the planet's tab",
      task: 'Contract summaries · one team · one year',
      payer: 'Paid by: the planet · Settled by: you',
      usual: {
        label: 'The usual way',
        route: 'Large model · full context',
        rows: [
          ['tokens', '288,000,000'],
          ['money', '$ 4,320'],
          ['carbon', '58 kg CO₂'],
        ],
      },
      conscious: {
        label: 'Conscious AI',
        route: 'Need AI? · Lean model · You check',
        rows: [
          ['tokens', '9,600,000'],
          ['money', '$ 96'],
          ['carbon', '1.9 kg CO₂'],
        ],
      },
      savedLabel: 'Saved',
      saved: '98%',
      stamp: ['Better', 'AI'],
    } satisfies ReceiptCopy,
    /**
     * The animated map that preceded the receipt, kept for reuse: Conscious AI shown as the
     * difference it makes, on one piece of work: a team's contract
     * summaries over a year. The work is sent down two lanes at the same
     * time. The usual way: straight into a large model, the full context,
     * five rounds, and the token, money and carbon meters fill up, figures
     * counting beside them. Our switch diverts the work to the conscious
     * lane: need AI at all, a lean model, minimal context, a check by you,
     * and the meters barely move. The panel between the lanes' meters is
     * the saving: the share saved, then money, tokens and carbon, each
     * arriving its own way. Box labels stay under about twelve characters.
     * `usual` and `lean` are what the work costs each way, rounded orders
     * of magnitude, not measurements: twenty people, twenty contracts a
     * month each, sixty thousand tokens a summary the usual way against two
     * thousand done consciously, a large model at about fifteen dollars and
     * a fifth of a kilogram of CO₂ per million tokens against a lean one at
     * about a tenth of that.
     */
    map: {
      lanes: {
        usual: 'The usual way',
        conscious: 'Conscious AI',
      },
      nodes: {
        largeModel: 'Large model',
        fullContext: 'Full context',
        minimalContext: 'Minimal context',
        round: 'Round',
        guide: 'Bullah Labs',
        guideNote: 'we step in here',
        decide: 'Need AI?',
        tool: 'Lean model',
        check: 'You check',
      },
      saved: {
        label: 'Saved',
        locale: 'en',
        currency: 'USD',
        tokens: 'tokens',
        co2: 'kg CO₂',
      },
      scenarios: [
        {
          task: 'Contract summaries, one team, one year',
          ai: true,
          usual: { tokens: 288000000, cost: 4320, co2: 58 },
          lean: { tokens: 9600000, cost: 96, co2: 1.9 },
        },
      ],
    },
  },
  /** Homepage: the pressure to keep up with AI, and the free resources. */
  consciousAi: {
    kicker: 'Conscious AI',
    title: 'AI is moving fast. Where do you start?',
    accent: [4, 5, 6, 7],
    paragraphs: [
      "New tools every week. Pressure to work smarter. Little clarity on which tools to trust, what to learn or whether you're using AI well, and at what cost in time, money and energy.",
      'AI literacy is a skill, not a subscription.',
      "Short, practical modules show you how to pick the right tool for the task, set up your AI workspace, write prompts that work first time and skip the AI you don't need. No technical background required.",
    ],
    closingKicker: 'Free resources',
    closing: 'Work smarter with AI. Waste less. Stay in control.',
    cta: 'Explore Conscious AI',
    notifyNote:
      "The free modules are in the making. Leave your email and we'll tell you the day they open.",
    notify: 'Notify me',
  },
  community: {
    kicker: 'Join our community',
    mobileJoin: 'Join community',
    dockOpen: 'Join the conversation',
    closeMenu: 'Close community menu',
    title: 'Better AI decisions are better together.',
    description:
      'Meet people who want to use AI thoughtfully, share what works and keep the human judgement in the work.',
    links: {
      reddit: {
        label: 'Reddit',
        description:
          'Join the discussion, share practical questions and learn from the wider community.',
        cta: 'Join the subreddit',
      },
      discord: {
        label: 'Discord',
        description:
          'Take part in focused conversations, new resources and community updates.',
        cta: 'Join the server',
      },
    },
  },
  consciousTech: {
    kicker: 'Conscious technology',
    title: 'Technology is never just technology.',
    accent: [3, 4],
    paragraphs: [
      'Every product shapes how people work and decide. Every system consumes resources. Every technical choice has a consequence.',
      'We weigh those consequences from the first sketch: cost, energy, maintainability and who it affects.',
      'Better technology does more than work. It is understood, affordable to run and worth keeping.',
    ],
  },
  /** The problem people arrive with, right after the hero. The body copy and the free-resources card come from `consciousAi`. */
  problem: {
    kicker: 'The problem',
    title: 'Too many AIs.\nWhich ones actually matter?',
    /** Words (0-based, across both lines) in the accent colour: the decision. */
    accent: [3, 4, 5, 6],
    impact: {
      kicker: 'The environmental cost of AI',
      intro:
        'AI runs in data centres: buildings full of powerful computers that need electricity and cooling. AI is not the only thing they do, but it is the fastest-growing part.',
      stats: [
        {
          value: '1.5%',
          eyebrow: 'Fact',
          label:
            'In 2025, data centres used 1.5% of all the electricity in the world — and AI is the fastest-growing reason for it.',
        },
        {
          value: '3%',
          eyebrow: 'Alert',
          label:
            'By 2030, they could use as much electricity as Japan uses today. More demand puts extra pressure on power grids.',
        },
        {
          value: '3×',
          eyebrow: 'Alert',
          label:
            'Electricity use from AI-focused data centres is expected to triple by 2030 — which can mean more pollution where power still comes from fossil fuels.',
        },
      ],
      sourceLabel: 'Source: International Energy Agency, 2026',
      sourceUrl:
        'https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary',
      water: {
        value: '600 billion litres',
        eyebrow: 'Water used',
        title:
          'That’s up to 1.2 trillion 500 ml bottles that could evaporate from AI in 2027.',
        body: 'This GPT-3 estimate is not a fixed price per prompt. It changes with the model, response length, weather, cooling system and electricity grid.',
      },
      powerStats: [
        {
          value: '1 in every 67 units',
          eyebrow: 'Electricity used',
          label:
            'of electricity generated worldwide was used by data centres in 2024.',
        },
        {
          value: 'Japan’s annual use',
          eyebrow: 'Projected for 2030',
          label:
            'AI-focused data centres could need this much electricity each year.',
        },
        {
          value: '65 million cars',
          eyebrow: 'CO₂ emissions',
          label:
            'The same yearly emissions as all of them driving for one year.',
        },
      ],
    },
  },
  technologies: {
    kicker: 'Our toolkit',
    statement: 'The right technology for the work.',
    statementMuted:
      'We choose dependable tools that fit your product, your team and your budget. The stack below is a starting point, not a fixed recipe.',
    stripLabel: 'Selected tools',
    stackLabel: 'How we use technology',
    layers: [
      {
        label: 'Websites and web apps',
        note: 'What people open in a browser. Fast, accessible and easy to keep current.',
      },
      {
        label: 'Mobile apps',
        note: 'iOS and Android, native or one codebase for both.',
      },
      {
        label: 'Logic and data',
        note: 'Where your business rules and records live. Kept consistent, private and safe.',
      },
      {
        label: 'AI, used with care',
        note: 'The models we build with and the assistants we teach people to use. Only where it genuinely helps.',
      },
      {
        label: 'Automation',
        note: 'Repetitive work that runs itself, with a person checking what matters.',
      },
      {
        label: 'Hosting and running',
        note: 'Where it runs, how updates ship and how we know it is healthy.',
      },
    ],
  },
  /** How we work, in four steps. */
  howItWorks: {
    kicker: 'How we work',
    title: 'Clear thinking. Deliberate building.',
    accent: [2, 3],
    description:
      'Four steps, from the first conversation to a product that keeps improving.',
    stepLabel: 'Step',
    cta: 'Discuss your project',
    steps: [
      {
        title: 'Understand the problem',
        when: 'Discover',
        summary:
          'We learn what people need, what gets in the way and what success looks like, before anything is built.',
      },
      {
        title: 'Choose the right approach',
        when: 'Decide',
        summary:
          'We compare options on complexity, cost, resource use and consequences, and pick the simplest that does the job.',
      },
      {
        title: 'Build and learn',
        when: 'Build',
        summary:
          'We ship in short cycles, test with real users and adjust priorities as we learn.',
      },
      {
        title: 'Improve with purpose',
        when: 'Improve',
        summary:
          'We measure what matters and keep improving where it creates value. Sometimes that means simplifying, not adding.',
      },
    ],
  },
  testimonials: {
    kicker: 'Client voices',
    title: 'Good work, in their words.',
    accent: [2, 3, 4],
    caseStudy: 'View project',
    /** Heading of the testimonials strip on /services and /work. */
    pageTitle: 'What people say.',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
  },
  work: {
    kicker: 'Selected work',
    title: 'Real products, real results.',
    description:
      'Products we designed, built or improved, each with the problem, the work and what changed. Filter by type.',
    view: 'Read the case study',
    /** Heading over the filterable project grid on /work. */
    grid: {
      kicker: 'Our work',
      title: 'Projects we have shipped.',
      accent: [1, 2],
    },
    filterLabel: 'Filter projects',
    /** Visible label before the filter chips. */
    filterBy: 'Filter by',
    /** Project categories, as filter chips on /work and labels elsewhere. */
    filters: {
      All: 'All work',
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
    /** Homepage pointer to the projects page; the work itself lives there. */
    teaser: {
      kicker: 'Selected work',
      title: 'Every project should make a difference.',
      accent: [3, 4, 5],
      cta: 'Browse all projects',
      /** Secondary link to /services next to the projects link. */
      servicesCta: 'Explore our services',
      listLabel: 'Featured projects',
      previous: 'Previous featured project',
      next: 'Next featured project',
      progress: 'Featured project rotation progress',
      featured: 'Featured work',
      more: '{n} more on the projects page',
    },
    /** "View our work" section on /services: three case studies and a link to all of them. */
    showcase: {
      kicker: 'View our work',
      title: 'Real products, built this way.',
      accent: [2, 3, 4],
      description:
        'Three products of three kinds, each with the problem, the work and what changed. The rest are on the work page.',
      cta: 'View all work',
      more: 'More case studies, with filters by product type.',
    },
  },
  services: {
    kicker: 'Services',
    title: 'From first idea to a product that lasts.',
    accent: [5, 6, 7],
    description:
      "Seven ways we help, under one roof: product thinking, solid engineering and honest advice on where technology, including AI, pays off and where it doesn't.",
    promise: 'Build it right the first time, or fix what already exists.',
    cta: 'Start a conversation',
    /** "View our services" section on /work: the seven services and a link to the page. */
    teaser: {
      kicker: 'View our services',
      title: 'Seven ways we can help.',
      accent: [3, 4, 5],
      description:
        'Every project here drew on one or more of these. Pick the one that fits, or let us help you choose.',
      cta: 'View all services',
    },
  },
  whoWeAre: {
    kicker: 'Who we are',
    title: 'Engineers who ask why before how.',
    accent: [3, 4, 5],
    paragraphs: [
      'Bullah Labs is a product and engineering studio in Stuttgart and Islamabad. We turn ideas into digital products people rely on, and help teams use technology, including AI, with care.',
      'Good technology solves a real problem, uses no more than it needs and leaves people better off. That is the standard we build to, and the one we teach.',
    ],
    cta: 'More about us',
  },
  principles: {
    kicker: 'Engineering principles',
    title: "Build what matters. Avoid what doesn't.",
    accent: [3, 4, 5],
    description: 'Seven rules behind every technical decision we make.',
  },
  program: {
    watch: 'Watch the full course',
    request: 'Training for a team',
    /** Labels in the course player and the module list. */
    player: {
      courses: 'Courses',
      course: 'Course',
      modules: 'Modules',
      module: 'Module',
      lesson: 'Lesson',
      lessons: 'lessons',
      watched: 'watched',
      watchedTag: 'Watched',
      minutes: 'min',
      comingSoon: 'Coming soon',
      nothingYet:
        "This lesson is being recorded. We'll tell you the moment it's live.",
      listLabel: 'Course modules and lessons',
      search: 'Search lessons',
      clearSearch: 'Clear search',
      noResults: 'No lesson matches',
      previous: 'Previous lesson',
      next: 'Next lesson',
      play: 'Play',
      pause: 'Pause',
      mute: 'Mute',
      unmute: 'Unmute',
      speed: 'Playback speed',
      fullscreen: 'Watch full screen',
      fullscreenShort: 'Full screen',
      exitFullscreen: 'Exit full screen',
      pip: 'Picture in picture',
      back: 'Back 10 seconds',
      forward: 'Forward 10 seconds',
      loadEmbed: 'Play the lesson',
      seek: 'Seek',
    },
    /** The "tell me when the modules open" form. */
    signup: {
      kicker: 'Stay in the loop',
      title: 'Be first to know.',
      body: "The free modules are in the making. Leave your email and we'll tell you the day they open.",
      email: 'Email address',
      placeholder: 'Your email address',
      submit: 'Notify me',
      consentBefore:
        'By signing up, you agree that we store your address for this update, as described in our',
      consentLink: 'Privacy Policy',
      consentAfter: '.',
      doneTitle: "Thank you, you're on the waitlist.",
      alreadyTitle: "You're already on the waitlist.",
      doneBody: 'Your journey to better AI habits starts here.',
      doneClose: 'Close',
      errorGeneric: 'Something went wrong. Please try again in a moment.',
      teamLink: 'Training for a whole team?',
    },
    /** The free-course card in the page corner, above the community dock. */
    popup: {
      pill: 'Free course',
      pillHint: 'Join the waitlist',
      open: 'Open the free course card',
      minimise: 'Minimise',
      tag: 'Free · Coming soon',
      kicker: 'Free course',
      title: 'Use AI on your terms.',
      body: 'Short lessons on when AI helps, which tool fits and what it really costs.',
      taughtBy: 'Taught by',
      cta: 'Join the waitlist',
    },
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'Use AI on your terms.',
    accent: [2, 3, 4],
    description:
      'Everyone expects you to use AI. Few show you how. Free, practical lessons on when it helps, which tool fits, and what it really costs.',
    audience: 'For people who work with AI, not people who build it.',
    heroCta: 'Tell me when it opens',
    principle: 'Practical skills. Conscious choices. No coding required.',
    course: {
      kicker: 'Join the waitlist',
      title: 'Better AI habits start here.',
      accent: [3, 4],
      preview: {
        instructorLabel: 'Your instructor',
        alumnus: 'Alumnus',
        moreAbout: 'More about {name}',
        title: 'Learn to use AI with more care and less waste.',
        audience: 'For people who work with AI, not people who build it.',
        /** What the course is, as three short chips. Shared with the corner card. */
        points: ['Free', 'No coding', 'Built on real tasks'],
        waitlistCta: 'Join the waitlist',
      },
    },
    problem: {
      kicker: 'The problem',
      title: 'Start with AI. Start where?',
      accent: [3, 4],
      lines: [
        'New tools every week. Pressure to use them for everything. No word on which tool fits, or how to check what comes back. And a quiet worry about what it all costs.',
        "You shouldn't have to choose between doing your job well and using AI responsibly.",
      ],
    },
    approach: {
      kicker: 'Our answer',
      title: 'Not more AI. Better AI.',
      accent: [3, 4],
      lines: [
        'Use it where it helps. Skip it where a formula or a search does the job. Pick the right tool and give it only what it needs.',
        'Check the output. Know the cost. Keep your judgement in charge.',
      ],
    },
    modules: {
      kicker: 'Learn by doing',
      title: 'Six habits. Real work.',
      accent: [2, 3],
      description: 'Every lesson starts with a task you already do.',
      habits: [
        {
          title: 'Set up once.',
          body: 'Save your instructions. Stop retyping them.',
        },
        {
          title: 'Prompt clearly.',
          body: 'Usable answers, fewer follow-ups.',
        },
        {
          title: 'Choose wisely.',
          body: 'Big model, small model, or no AI at all.',
        },
        {
          title: 'Keep context lean.',
          body: 'Give AI what it needs, not everything you have.',
        },
        {
          title: 'Think critically.',
          body: 'AI drafts. You decide. Keep your skills sharp.',
        },
        {
          title: 'Know the impact.',
          body: 'Time, money, energy, water. See what each choice costs.',
        },
      ],
    },
    whoFor: {
      kicker: 'Made for non-developers',
      title: 'AI landed on your desk. Now what?',
      accent: [5, 6],
      paragraphs: [
        'Marketing, ops, finance, HR, sales, projects. If you’re expected to use AI and nobody showed you how, this is for you. Skills you can use the same day.',
      ],
      questions: [
        'Told to use AI, but not how?',
        'Not sure which model to pick?',
        'Worried it is dulling your skills?',
        'Uneasy about what it costs the planet?',
      ],
      closing: 'Start with the work you already do.',
    },
    business: {
      kicker: 'For teams',
      title: 'Rolled out AI? Make it count.',
      accent: [3, 4, 5],
      paragraphs: [
        'Giving people AI tools is easy. Helping them use those tools well takes practice. We train teams around their real workflows, so the value shows up in the work, not just on the licence bill.',
      ],
      offers: [
        {
          title: 'Training and workshops',
          body: "Hands-on sessions built around your team's everyday tasks.",
        },
        {
          title: 'Skills and workflows',
          body: 'Find where AI helps. Prompt better. Judge the results.',
        },
        {
          title: 'Conscious AI guidance',
          body: 'Clear rules on tools, data, costs and resource use.',
        },
        {
          title: 'AI optimisation',
          body: 'Cut wasted compute and complexity. Keep quality and safety.',
        },
      ],
      cta: 'Discuss team training',
    },
    vision: {
      kicker: 'Why we do this',
      title: 'Faster, sure. But towards what?',
      accent: [2, 3, 4],
      paragraphs: [
        'We believe technology should expand what people can achieve while respecting its impact on people, budgets and the environment. This means choosing efficient solutions and using only the computing power each task requires.',
      ],
    },
    comingSoon: {
      kicker: 'Something new is in the works',
      title: 'Learn it free. Put it to work.',
      accent: [3, 4, 5, 6],
      body: "The free course is step one. We're also building a product that brings Conscious AI into everyday work. Hear about both first.",
      cta: 'Stay in the loop',
    },
  },
  contactForm: {
    name: 'Full name',
    namePlaceholder: 'Jane Doe',
    email: 'Work email',
    emailPlaceholder: 'jane@company.com',
    optional: 'optional',
    /** Two headings so the card reads as a short, guided form. */
    sections: {
      setup: {
        title: 'Your AI setup',
        body: 'Three quick questions so we can prepare a useful reply.',
      },
      reach: {
        title: 'Personal info',
        body: 'Where the reply should go. A person writes back.',
      },
    },
    /** The three picks; keys mirror CONTACT_TOOLS / CONTACT_TEAM_SIZES / CONTACT_GOALS. */
    tools: {
      label: 'Which AI tool does your team mainly use?',
      options: {
        chatgpt: 'ChatGPT',
        claude: 'Claude',
        copilot: 'Copilot',
        gemini: 'Gemini',
        api: 'Own build / API',
        other: 'Other or not sure',
      },
    },
    teamSize: {
      label: 'Number of people using it',
      options: {
        '1-10': '1 to 10',
        '11-50': '11 to 50',
        '51-200': '51 to 200',
        '200+': 'More than 200',
      },
    },
    goals: {
      label: 'What should improve first?',
      options: {
        cost: 'Monthly cost',
        quality: 'Quality of output',
        privacy: 'Data and privacy',
        adoption: 'Adoption and speed',
        carbon: 'Energy and carbon',
      },
    },
    message: 'Anything else?',
    messagePlaceholder:
      'Rough monthly spend, a workflow that hurts, a deadline.',
    submit: 'Send enquiry',
    replyNote: 'We reply {time}.',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    /** Field errors, in the order the schema checks them. */
    errors: {
      tool: 'Pick your main tool',
      teamSize: 'Pick a team size',
      goal: 'Pick what should improve first',
      nameRequired: 'Your name is required',
      nameShort: 'Please enter your full name',
      nameLong: 'That name is a little long',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      messageLong: 'Please keep it under 4,000 characters',
    },
    sentTitle: 'Thank you.',
    sentBody:
      'Your enquiry is in. A person reads every one and replies {time}, straight to the address you gave us.',
    sentHome: 'Back to home',
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
    problem: 'The challenge',
    approach: 'The work',
    architecture: 'How it is built',
    keyFeatures: 'Key features',
    challengesKicker: 'Challenges & solutions',
    challenge: 'Challenge',
    solution: 'Solution',
    resultsKicker: 'The impact',
    resultsTitle: 'What became easier, better or more effective.',
    learning: 'The learning',
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
    ctaTitle: 'Building something similar?',
    ctaAccent: [1, 2],
    ctaBody:
      "Tell us where you are. We'll say plainly what we would do next, and whether we're the right team for it.",
  },
  aboutPage: {
    kicker: 'Our DNA',
    title:
      'We build technology with purpose, and believe progress comes with responsibility.',
    accent: [7, 8, 9, 10],
    description:
      'Bullah Labs is a product and engineering studio with offices in Stuttgart and Islamabad. We build digital products, and we help the people who use technology, including AI, use it well.',
    story: [
      'Too much technology is built to impress rather than to help. We ask a different set of questions first: what should this product do, what does it cost to run, and who does it affect?',
      'That shapes everything we ship. Simpler systems. Fewer moving parts. AI only where it earns its place. Products that are cheap to keep and easy to hand over.',
      'It also shapes what we teach. Through Conscious AI we help people and teams use AI with confidence and less waste, because the best technology decision is usually the one you understand.',
    ],
    facts: [
      {
        label: 'What we do',
        value:
          'Digital products, designed, built and improved. Guidance on technology and AI.',
      },
      {
        label: 'Who for',
        value:
          'Startups and established companies building something new, fixing something old or deciding what comes next',
      },
      {
        label: 'Reach',
        value:
          'Clients across five continents. Two offices: Stuttgart and Islamabad.',
      },
      {
        label: 'Since',
        value: '2024, with 150+ projects delivered',
      },
    ],
    whereKicker: 'Where we are',
    whereTitle: 'Two offices, one working day.',
    whereAccent: [3, 4],
    whereDescription:
      'A European office in Stuttgart and an Asian office in Islamabad. Write to whichever is closer. The same team answers.',
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
    body: 'The address may have changed, or the link was wrong. Home is one click away.',
    home: 'Back home',
    program: 'Conscious AI',
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
    title: "Let's talk about your project.",
    accent: [3, 4],
    description:
      'Book an intro call or write to us. A person replies within one business day.',
    book: 'Book an intro call',
    /** Two ways to start: book a slot straight away, or write to us. */
    choose: {
      formTab: 'Write to us',
      callTab: 'Book a call',
      callHint: 'Short intro call',
    },
    /** Closing section of the homepage: the same form, without leaving. */
    home: {
      kicker: "Let's talk",
      title: 'Got a problem worth solving? Tell us.',
      accent: [5, 6],
      description:
        "Tell us what you're building, fixing, or losing sleep over. We reply within one business day, with a next step, not a sales deck.",
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Straight answers to important questions.',
    description: 'What we do, how we work and where AI fits in.',
    accent: [0, 1],
  },
  cta: {
    kicker: "Let's talk",
    title: 'Have a problem worth solving?',
    accent: [2, 3, 4],
    body: "Tell us what you're building, what needs improving or where technology is getting in the way. We'll suggest a practical next step.",
    button: 'Tell us about your project',
  },
  footer: {
    pitch:
      'Bullah Labs builds technology for hard problems, conscience included. Stuttgart and Islamabad.',
    program: 'Conscious AI',
    company: 'Company',
    offices: 'Offices',
    community: 'Community',
    legal: 'Legal',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  /** The Conscious AI page (/conscious-ai), top to bottom. */
  consciousAiPage: {
    hero: {
      kicker: 'Our vision',
      /** The page's name is the headline; "AI" takes the accent. */
      title: 'Conscious AI',
      titleAccent: [1],
      tagline: 'Not more AI. Better AI.',
      taglineAccent: [3, 4],
      body: "AI isn't free. The planet's picking up the tab. Use it where it counts, not just for token maxing.",
      cta: 'Book a time with us',
    },
    /** The problem and the fix, as one two-column ledger. */
    principles: {
      kicker: 'The problem, and the fix',
      title: 'Everyone says use AI. Nobody says how.',
      accent: [2, 3],
      asideLead: 'We panic-prompt.',
      asideAccent: 'The planet pays.',
      problemHead: 'The problem',
      fixHead: 'The fix · Better AI, in three moves',
      problems: [
        [
          '01',
          'FOMO, weekly.',
          'A new model every Monday. Homework every Tuesday.',
        ],
        [
          '02',
          'Faster. Cheaper. You?',
          'The boss just discovered AI. Awkward.',
        ],
        [
          '03',
          'Hot and thirsty.',
          'Data centres guzzle power and water. You never see the receipt.',
        ],
      ],
      moves: [
        ['01', 'Use it on purpose', 'If a formula can do it, let it.'],
        ['02', 'Pick the right size', 'Smaller model, smaller footprint.'],
        ['03', 'Stay the expert', 'AI drafts. You decide.'],
      ],
    },
    /** Two doors out: the teams card (shared, see `offers.teams`) and the build card. */
    nextSteps: {
      kicker: 'Where next',
      title: 'Two ways we can help.',
      accent: [0, 1],
      build: {
        kicker: 'For your product',
        title: 'Build something with us',
        cta: 'See what we build',
      },
    },
    /** The auto-advancing figure card: 13 third-party figures, a line each. */
    numbers: {
      kicker: 'The numbers',
      title:
        'Less time lost. Fewer tokens wasted. Smaller bill, smaller footprint.',
      accent: [6, 7, 8, 9],
      source: 'Source: {name}',
      ownExample: 'Our own worked example.',
      note: 'Third-party data, not our client results.',
      previous: 'Previous figure',
      next: 'Next figure',
      cards: [
        {
          topic: 'Training pays off',
          figure: '14 hours',
          body: 'a week gained by staff with 81+ hours of AI training a year.',
          source: 'ey2025',
        },
        {
          topic: 'Training pays off',
          figure: 'Up to 19x',
          body: 'more likely to say AI makes them productive, once trained.',
          source: 'slack2024',
        },
        {
          topic: 'What slop costs',
          figure: 'Nearly 40%',
          body: 'of the time AI saves goes on fixing bad output.',
          source: 'workday2026',
        },
        {
          topic: 'What slop costs',
          figure: '~2 hours',
          body: 'to deal with each piece of sloppy AI work a colleague hands over.',
          source: 'betterup2025',
        },
        {
          topic: 'KPIs we track',
          figure: '7 KPIs',
          body: 'before and after: hours saved, AI spend per task, tokens, do-overs, licenses, output quality, AI fluency.',
        },
        {
          topic: 'KPIs we track · example',
          figure: '≈ €4,700',
          body: 'a month lost to rework in a 12-person team, at €45 an hour.',
        },
        {
          topic: 'Smarter set-up',
          figure: '90%+',
          body: 'less spent on repeated instructions, with prompt caching.',
          source: 'anthropic2026',
        },
        {
          topic: 'Smarter set-up',
          figure: '85%+',
          body: 'cheaper when easy jobs go to a smaller model, at 95% of the quality.',
          source: 'routellm2024',
        },
        {
          topic: 'People, not models',
          figure: '70%',
          body: 'of AI problems are about people and process, not algorithms.',
          source: 'bcg2024',
        },
        {
          topic: 'People, not models',
          figure: '12%',
          body: 'of staff get enough AI training.',
          source: 'ey2025',
        },
        {
          topic: 'Hidden footprint',
          figure: '2x',
          body: 'data-centre electricity by 2030. More than Japan uses today.',
          source: 'iea2025',
        },
        {
          topic: 'Hidden footprint',
          figure: '4–6x Denmark',
          body: "the water AI is projected to withdraw in 2027, against Denmark's yearly total.",
          source: 'ucr2025',
        },
        {
          topic: 'Hidden footprint · the fix',
          figure: 'Up to 90%',
          body: 'less energy on repetitive tasks, with small models and shorter prompts.',
          source: 'unesco2025',
        },
      ],
      /** The cited sources, keyed by the `source` on each card. Links live in the component. */
      sources: {
        ey2025: 'EY Work Reimagined Survey, 2025',
        slack2024: 'Slack Workforce Index, 2024',
        workday2026: 'Workday, 2026',
        betterup2025: 'BetterUp & Stanford, 2025',
        anthropic2026: 'Anthropic pricing, 2026',
        routellm2024: 'UC Berkeley, RouteLLM, 2024',
        bcg2024: 'BCG, 2024',
        iea2025: 'IEA, Energy and AI, 2025',
        ucr2025: 'Li et al., UC Riverside, 2025',
        unesco2025: 'UNESCO & UCL, 2025',
      },
    },
    /** Heading over the live AI profile quiz. */
    aiProfile: {
      kicker: 'Try it · Live',
      title: 'Feeling like AI will replace you?',
      accent: [4, 5],
      description: 'Five quick steps to find out.',
      /** The redaction-style plate beside the heading. */
      spoiler: {
        tag: 'Spoiler',
        lead: 'You’re',
        accent: 'harder to replace',
        tail: 'than you think.',
      },
    },
    /** The instructor heading and card labels under the course. */
    instructor: {
      kicker: 'Your instructor',
      title: 'Taught by a teacher of teachers.',
      accent: [5],
      alumnus: 'Alumnus',
      moreAbout: 'More about {name}',
      portraitAlt: 'Portrait of {name}',
    },
    /** Where the name comes from: Bulleh Shah, the verse, and the three values we keep. */
    roots: {
      kicker: 'Our roots',
      title: 'Ignoring the hype since the 1700s.',
      accent: [3, 4, 5],
      body: "Bulleh Shah, the Punjabi Sufi poet, refused to follow the crowd. He questioned what everyone repeated and chose what mattered over what was in fashion. We're doing the same with AI.",
      cta: 'Read our DNA',
      portraitAlt: 'Illustrated portrait of Bulleh Shah',
      name: 'Bulleh Shah',
      years: '1680–1757',
      /** The reading of the verse printed above it in Shahmukhi and Gurmukhi. */
      translation: 'Read a thousand books, yet never read yourself.',
      values: [
        ['01', 'Question the crowd.', "Popular isn't proof."],
        ['02', 'Substance over shiny.', "What matters beats what's new."],
        ['03', 'Hard problems first.', 'Tech for what actually needs fixing.'],
      ],
    },
    faq: {
      kicker: 'FAQs',
      title: 'Ask away. No prompt engineering needed.',
      accent: [2, 3, 4, 5],
      description: 'Still stuck? Ask a real human in the community below.',
      items: [
        {
          question: 'Is this an anti-AI thing?',
          answer:
            'No. We use AI every day and we build with it. Conscious AI means using it on purpose: the right tool for the task, only the context it needs, and a person who checks the result. That gives better work for less money and energy.',
        },
        {
          question: 'Will AI replace me?',
          answer:
            'AI replaces tasks much faster than it replaces people. The person at risk is the one who pastes in a prompt and trusts whatever comes back. Learn when AI helps, which tool fits and how to check the output, and you become the person your team relies on.',
        },
        {
          question: 'Can one prompt really hurt the planet?',
          answer:
            'A single prompt costs very little. The problem is scale and habit: billions of prompts a day, often sent to the largest model with far more context than the task needs. A smaller model, a tighter prompt, or no AI at all where a search does the job cuts that footprint many times over.',
        },
        {
          question: 'Do I need to be technical?',
          answer:
            'No. This is made for people in marketing, HR, finance, operations, sales and teaching, not for developers. Everything is shown on everyday work: emails, summaries, spreadsheets, research and planning.',
        },
        {
          question: 'What does it cost?',
          answer:
            'The AI profile, the course and the community are free. For teams, workshops, guidance and audits are scoped to your team and priced per engagement. Book a time and we will tell you what fits before anything starts.',
        },
      ],
    },
    closing: {
      kicker: 'Conscious AI',
      title: 'Less FOMO. Fewer watts.',
      accent: [2, 3],
      body: 'Bring a question, a workflow or a worry. A real person answers, within a business day.',
      cta: 'Book a time with us',
    },
  },
  /** The offer doors: three rows each for teams and for people who build. */
  offers: {
    teams: {
      kicker: 'For teams & businesses',
      title: 'Get your team using AI well',
      cta: 'How we work with teams',
      rows: [
        ['01', 'Workshops', 'AI confidence, on your real tasks.'],
        ['02', 'Guidance', 'One set of rules for tools, cost and carbon.'],
        ['03', 'Audits', 'Find the waste in one workflow. Cut it.'],
      ],
    },
    build: [
      ['01', 'Product development', 'Rough idea to paying product.'],
      ['02', 'Engineering', 'Web, mobile, backend. Built to last.'],
      ['03', 'AI automation & integrations', 'The boring work, automated.'],
    ],
  },
  /** The Conscious AI preview on the home page: the course plate, the teams plate, the rail. */
  consciousAiHome: {
    kicker: 'Conscious AI',
    title: 'Using AI well is a skill. Not a subscription.',
    accent: [6, 7, 8],
    description:
      'Free AI guidance for better tool choices. Team training for real work.',
    course: {
      kicker: 'Free course · coming soon',
      title: 'Learn AI that helps.',
      body: 'Choose the right tool, use it well, and skip AI when simpler works.',
      submit: 'Add to waitlist',
      portraitAlt: 'Portrait of {name}',
    },
    rail: {
      kicker: 'Conscious AI',
      title: 'The course, the numbers, and your AI profile.',
    },
  },
  /** Our DNA: the origin of the name, the verse card and the office clocks. */
  ourDna: {
    kicker: 'Our DNA',
    title: 'Our values are 300 years old. Still in production.',
    accent: [6, 7, 8],
    portraitAlt: 'Illustrated portrait of Bulleh Shah',
    origin:
      'Bullah is a nod to Bulleh Shah, the Punjabi Sufi poet who preached love, challenged hypocrisy, and stood with ordinary people across the lines of caste and class.',
    verse: {
      name: 'Bulleh Shah',
      place: 'Kasur, Punjab',
      translation: '“Bulleh, what do I know of who I am?”',
      note: 'A refusal to be boxed in by religion, caste, or anyone else’s expectations.',
    },
    meaning: {
      kicker: 'What it means for us',
      title: 'Make progress work for people, not just systems.',
      body: 'In that spirit, we build useful technology that gives people more capability, lowers unnecessary cost and environmental impact, and keeps human judgment where it matters.',
    },
    office: {
      open: 'Office hours',
      closed: 'After hours',
      localTime: 'Local time in {city}: {time}',
    },
  },
  /** Conscious AI for teams (/conscious-ai/teams), top to bottom. */
  teamsPage: {
    breadcrumb: 'For teams',
    hero: {
      kicker: 'Conscious AI for teams',
      title: 'Your team uses AI. Is it paying off?',
      accent: [6, 7],
      body: 'We cut wasted compute from your AI. Off the bill. Off the footprint. Never off the quality.',
      cta: 'Talk through your workflow',
    },
    familiar: {
      kicker: 'Sound familiar?',
      title: 'AI everywhere. A plan nowhere.',
      accent: [2, 3],
      items: [
        ['AI everywhere.', "Half the team quietly wonders if they're next."],
        ['Which model for what?', 'Shrugs all round.'],
        ['The AI bill grows.', 'The results, not so much.'],
        ['Your sustainability report', 'has an AI-shaped hole.'],
      ],
    },
    how: {
      kicker: 'How we work',
      title: 'One workflow at a time.',
      accent: [2, 3, 4],
      steps: [
        ['01', 'Audit', 'Map it. Measure it. Footprint included.'],
        ['02', 'Plan', 'Rank fixes by impact and risk.'],
        ['03', 'Fix & train', 'Big wins first. Quality checked.'],
        ['04', 'Repeat', 'Next workflow, please.'],
      ],
    },
    offers: {
      kicker: 'Any size',
      title: 'Pick your starting point.',
      accent: [2, 3, 4],
      /** Tag, title, body, call to action; one card each, the third on ink. */
      items: [
        [
          'First steps',
          'Workshops',
          'Turn AI anxiety into confidence, on your real tasks. Which tool when, and how to check it.',
          'Book a workshop',
        ],
        [
          'First steps',
          'Guidance',
          'Shared rules for tools, data, cost and carbon. So using AI finally comes with instructions.',
          'Ask about guidance',
        ],
        [
          'For grown-ups',
          'Audit & optimise',
          'AI that fits your workflow. We map the workflow, find wasted compute and cut it. Measured before and after.',
          'Start an audit',
        ],
      ],
    },
    waste: {
      kicker: 'Things an audit finds',
      title: 'Waste we hunt for.',
      accent: [2, 3],
      body: 'Prompts, models, retrieval, tools, steps. Plus cost, speed and estimated energy.',
      items: [
        ['A lorry delivering a letter', 'Oversized model'],
        ['A filing cabinet at every meeting', 'Too much context'],
        ['Ordering the whole menu for one dish', 'Over-eager retrieval'],
        ['A novelist adding up a receipt', 'AI doing simple jobs'],
        ['Circling the block after arriving', 'Extra steps'],
      ],
    },
    changes: {
      kicker: 'What changes',
      title: 'Useful AI, with a plan behind it.',
      accent: [2, 3, 4, 5, 6],
      body: 'You leave with decisions your team can use tomorrow, not another dashboard to maintain.',
      items: [
        [
          'A shared way of working',
          'Clear choices on tools, prompting, checking work and when not to use AI.',
        ],
        [
          'A smaller, smarter stack',
          'The models and steps that earn their place, and the expensive clutter that does not.',
        ],
        [
          'A written next-step plan',
          'Prioritised improvements, owners and a realistic way to measure the result.',
        ],
      ],
      privacy:
        'We use the minimum access needed to understand a workflow. Your data stays your business.',
      closing: {
        lead: 'Bring one workflow.',
        accent: "We'll bring the scissors.",
        body: "Start with one honest conversation. We'll tell you whether a workshop, guidance or an audit is the right next move.",
      },
    },
  },
  /** The live AI profile quiz on /conscious-ai: five questions, an email gate, the result. */
  snapshot: {
    errors: {
      role: 'Choose the field closest to your work.',
      option: 'Choose the answer that feels closest.',
      email: 'Enter a valid email address.',
      emailSave: 'Could not save your email. Try again.',
    },
    questions: [
      {
        rail: 'Your job',
        title: 'Which role is closest to yours?',
        options: [
          { value: 'operations', label: 'Operations & Admin' },
          { value: 'sales', label: 'Sales & Support' },
          { value: 'marketing', label: 'Marketing & Content' },
          { value: 'hr', label: 'HR & Recruiting' },
          { value: 'education', label: 'Student or Teacher' },
          { value: 'technical', label: 'Developer or Technical' },
          { value: 'research', label: 'Research & Analysis' },
          { value: 'freelance', label: 'Freelancer or Small Business' },
          { value: 'developer', label: 'Software Developer or Engineer' },
          { value: 'data', label: 'Data or AI Specialist' },
          { value: 'designer', label: 'Designer or UX Researcher' },
          { value: 'project_manager', label: 'Project or Program Manager' },
          {
            value: 'customer_success',
            label: 'Customer Success or Account Manager',
          },
          { value: 'recruiter', label: 'Recruiter or Talent Specialist' },
          { value: 'accountant', label: 'Accountant or Bookkeeper' },
          { value: 'writer', label: 'Writer, Editor, or Copywriter' },
          { value: 'manager', label: 'Manager, Director, or Executive' },
          { value: 'analyst', label: 'Business or Data Analyst' },
          { value: 'product', label: 'Product & Design' },
          { value: 'finance', label: 'Finance & Accounting' },
          { value: 'legal', label: 'Legal & Compliance' },
          { value: 'healthcare', label: 'Healthcare & Care' },
          { value: 'consulting', label: 'Consulting & Client Services' },
          { value: 'logistics', label: 'Logistics & Supply Chain' },
          { value: 'hospitality', label: 'Hospitality & Events' },
          { value: 'nonprofit', label: 'Nonprofit & Community' },
          { value: 'government', label: 'Public Service' },
          { value: 'founder', label: 'Founder & Leadership' },
          { value: 'creator', label: 'Creative & Media' },
          { value: 'other', label: 'Something else' },
        ],
      },
      {
        rail: 'How often',
        title: 'How often does AI show up in your work?',
        options: [
          { value: 'rarely', label: 'Rarely', detail: 'Only now and then' },
          {
            value: 'weekly',
            label: 'A few times a week',
            detail: 'Useful when needed',
          },
          { value: 'daily', label: 'Most days', detail: 'Part of my workflow' },
          {
            value: 'constant',
            label: 'Throughout the day',
            detail: 'Always within reach',
          },
        ],
      },
      {
        rail: 'How useful',
        title:
          'How often does AI give you a useful answer without much rework?',
        options: [
          { value: '1', label: 'Rarely' },
          { value: '2', label: 'Sometimes' },
          { value: '3', label: 'Often' },
          { value: '4', label: 'Usually' },
          { value: '5', label: 'Almost always' },
        ],
      },
      {
        rail: 'How easy',
        title: 'When you use AI, how smooth is the workflow?',
        options: [
          {
            value: '1',
            label: 'I keep re-explaining',
            detail: 'The same context has to be pasted or clarified again.',
          },
          {
            value: '2',
            label: 'I often restart',
            detail: 'Useful work gets lost across several attempts.',
          },
          {
            value: '3',
            label: 'Mostly one clear pass',
            detail: 'I usually get to a useful result without much repetition.',
          },
          {
            value: '4',
            label: 'My context carries through',
            detail: 'The workflow feels clear, connected and easy to continue.',
          },
        ],
      },
      {
        rail: 'What you need',
        title: 'What would make AI more useful for you?',
        options: [
          {
            value: 'output',
            label: 'Better output',
            detail: 'Clearer, more useful first drafts',
          },
          {
            value: 'choice',
            label: 'Clearer choices',
            detail: 'Knowing when AI is the right tool',
          },
          {
            value: 'system',
            label: 'A repeatable system',
            detail: 'Less friction every week',
          },
          {
            value: 'team',
            label: 'A stronger team approach',
            detail: 'More consistency across the work',
          },
        ],
      },
    ] as SnapshotQuestionCopy[],
    rail: {
      brand: 'Conscious AI',
      title: 'Use AI better.',
      body: 'Answer a few questions about how you use AI at work.',
      answers: 'Your answers',
    },
    mobile: {
      progress: 'Your progress',
      step: 'Step {n} of {total}',
    },
    gate: {
      kicker: 'Your results are ready',
      title: 'Add your email.',
      body: 'We’ll prepare your results and send the course update there too.',
      email: 'Email address',
      placeholder: 'Your email address',
      preparing: 'Preparing...',
      submit: 'Show results',
      restart: 'Start again',
    },
    result: {
      preparing: 'Preparing your results.',
      confidence: 'Confidence',
      efficiency: 'Efficiency',
      confidenceHigh: 'You usually reach useful answers.',
      confidenceLow: 'Clearer context will improve your results.',
      efficiencyHigh: 'Your workflow is already fairly lean.',
      efficiencyLow: 'Reusable setup can remove extra rounds.',
      headings: {
        both: 'AI is already helping.',
        confidence: 'You’re getting useful answers.',
        workflow: 'AI fits smoothly into your work.',
        neither: 'AI can work better for you.',
      },
      helpTitle: 'Need help putting AI to work?',
      helpCta: 'Work with us',
      courseTitle: 'Free course launching soon.',
      courseCta: 'See the course',
      community: 'Join the community',
      restart: 'Start again',
    },
    intro: {
      title: 'Take the test.',
      kicker: 'A quick reality check',
      heading: 'Are you using AI well, or just using more of it?',
      body: 'Answer five quick questions and leave with one useful next move for your real work.',
      cta: 'Take the test',
      score: 'Your score',
      waiting: 'waiting for you',
      bars: ['Confidence', 'Workflow', 'Judgement'],
    },
    form: {
      badge: 'AI profile',
      option: 'Option {n}',
      yourRole: 'Your role',
      change: 'Change',
      moreRoles: 'More roles, please ({n} more)',
      findRole: 'Find your role.',
      findRoleBody:
        'Pick the closest match. This is only to make the next questions more useful.',
      searchPlaceholder: 'Search roles...',
      noMatch: 'Nothing there yet. Try a broader word.',
      back: 'Back',
      next: 'Next',
      finish: 'See my snapshot',
    },
  },
  /** The studio offer on the home page: three ways we help, then the services door. */
  studio: {
    kicker: 'Studio',
    title: 'Digital products built right.',
    accent: [2, 3],
    description:
      'From first idea to better everyday work, we build technology that earns its place.',
    /** Title, body, typical engagements; the icons live in the component, in this order. */
    services: [
      {
        title: 'Build',
        body: 'From idea to launch, digital products built to last.',
        typical: 'New product · MVP · Platform',
      },
      {
        title: 'Fix',
        body: 'Simpler, stronger software with less waste.',
        typical: 'Rebuild · Rescue · Integration',
      },
      {
        title: 'Optimise AI',
        body: 'Smarter AI systems. Lower cost. Better results.',
        typical: 'AI audit · Workflow design · Team training',
      },
    ],
    wantTitle: 'Want our services?',
    wantCta: 'Visit services',
  },
  /** The figures and the two offices in one ink band on the home page. */
  locationsHome: {
    kicker: 'Where we are',
    title: 'Two offices. One team.',
    cta: 'Start a project',
    stats: [
      ['150+', 'Projects delivered'],
      ['40+', 'Clients served'],
      ['5', 'Continents reached'],
    ],
  },
};

export type Dictionary = typeof en;

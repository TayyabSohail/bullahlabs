import type { Locale } from '../config';

export const en = {
  locale: 'en' as Locale,
  nav: {
    about: 'About',
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
    language: 'Language',
    next: 'Next',
    top: 'Back to top',
  },
  hero: {
    badge: 'Digital products & Conscious AI',
    title: 'Technology that solves problems.\nBuilt with conscience.',
    /** Words (0-based, across both lines) in the accent colour: line two. */
    accent: [4, 5, 6],
    body: 'We build digital products that solve real problems, run lean and hold up over time. The same discipline shapes how we use AI, and how we teach others to.',
    primary: 'Discuss your project',
    secondary: 'See our work',
    /**
     * The living graphic beside the hero copy: Conscious AI shown as the
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
      kicker:
        'Conscious AI: use it where it helps, as little as it needs, checked by you.',
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
      'Using AI well is a skill, not a subscription. We teach it, free.',
      "Short, practical modules show you how to pick the right tool for the task, set up your AI workspace, write prompts that work first time and skip the AI you don't need. No technical background required.",
    ],
    closingKicker: 'Free resources',
    closing: 'Work smarter with AI. Waste less. Stay in control.',
    cta: 'Explore Conscious AI',
    notifyNote:
      "The free modules are in the making. Leave your email and we'll tell you the day they open.",
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
  numbers: {
    kicker: 'Track record',
    title: 'Numbers that back it up.',
    description:
      'Shipped products, long-term clients and a team that spans two continents.',
    items: [
      { value: '150+', label: 'Projects delivered' },
      { value: '40+', label: 'Clients on four continents' },
      { value: '2', label: 'Offices, Germany and Pakistan' },
    ],
  },
  technologies: {
    kicker: 'Tools and technology',
    statement: 'Proven tools. Chosen with care, not by habit.',
    statementMuted:
      'We pick established technology that fits the problem, the team and the budget. Nothing is added because it is trending. Every tool has to earn its place and stay cheap to run, in time, money and energy.',
    stackLabel: 'What we build with, in plain words',
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
  globalReach: {
    kicker: 'Working worldwide',
    title: 'One team. Wherever the work happens.',
    description:
      'Clients on four continents, served from Stuttgart and Islamabad. Whenever your day starts, someone on the team is already online.',
    legend: 'Offices and client locations',
  },
  testimonials: {
    kicker: 'Client voices',
    title: 'Good work, in their words.',
    accent: [2, 3, 4],
    caseStudy: 'View project',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
  },
  work: {
    kicker: 'Selected work',
    title: 'Real products, real results.',
    description:
      'Products we designed, built or improved, each with the problem, the work and what changed. Filter by type, or by the efficiency principle it leads with.',
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
      kicker: 'Selected work',
      title: 'Every project should make a difference.',
      accent: [3, 4, 5],
      body: [
        'New products, rebuilt ones and systems that finally talk to each other. Each case study shows the problem, the work and what changed.',
        'Clients range from early-stage startups to established companies on four continents.',
      ],
      cta: 'Browse all projects',
      listLabel: 'Featured projects',
      more: '{n} more on the projects page',
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
        'By signing up you agree that we store your address to send this notice, as described in the',
      consentLink: 'privacy policy',
      consentAfter: '.',
      doneTitle: 'You are on the list.',
      alreadyTitle: 'You were already on the list.',
      doneBody: "One email when it's ready, nothing else.",
      errorGeneric: 'Something went wrong. Please try again in a moment.',
      teamLink: 'Training for a whole team?',
    },
  },
  programPage: {
    kicker: 'Conscious AI',
    title: 'Use AI with purpose.',
    accent: [2, 3],
    description:
      'Free, practical modules that teach you to get more from AI while using less of it. For people who work with AI, not people who build it.',
    heroCta: 'Tell me when it opens',
    principle: 'Practical skills. Conscious choices. No coding required.',
    course: {
      kicker: 'Coming soon',
      title: 'Better AI habits start here.',
      accent: [0, 1, 2],
    },
    problem: {
      kicker: 'The problem',
      title: 'Everyone expects you to use AI. Few show you how.',
      accent: [6, 7, 8, 9],
      lines: [
        'New tools every week, more pressure to keep up, and no clear way to tell what is worth your time.',
        "You shouldn't have to choose between doing your job well and using AI responsibly.",
      ],
    },
    approach: {
      kicker: 'Our answer',
      title: 'Not more AI. Better AI.',
      accent: [3, 4],
      lines: [
        'Use AI only where it helps. Pick the right model. Give it clear instructions and only the context it needs.',
        'Check the output. Know the cost. Keep your own judgement in the loop.',
      ],
    },
    modules: {
      kicker: 'Learn by doing',
      title: 'Six habits. Real work.',
      accent: [2, 3],
      description:
        'Each module takes a task you already do and shows a better way to do it with AI.',
      habits: [
        {
          title: 'Set up once.',
          body: 'Reusable instructions for the tasks you repeat.',
        },
        {
          title: 'Prompt clearly.',
          body: 'Better results, fewer follow-ups.',
        },
        {
          title: 'Choose wisely.',
          body: 'Match the model to the task, not the hype.',
        },
        {
          title: 'Keep context lean.',
          body: 'Give AI what it needs, not everything you have.',
        },
        {
          title: 'Think critically.',
          body: 'Check outputs. Know when not to use AI at all.',
        },
        {
          title: 'Know the impact.',
          body: 'See how everyday choices affect time, cost, energy and water.',
        },
      ],
    },
    whoFor: {
      kicker: 'Made for non-developers',
      title: 'Curious about AI. No coding required.',
      accent: [3, 4, 5],
      paragraphs: [
        'Marketing, operations, finance, HR, sales, project management: if AI has landed on your desk, this is for you. Skills you can use the same day.',
      ],
      questions: [
        'Unsure where to start?',
        'Struggling to keep up?',
        'Want better results with less effort?',
        "Concerned about AI's impact?",
      ],
      closing: 'Start with the work you already do.',
    },
    business: {
      kicker: 'For teams',
      title: 'Help your team use AI well.',
      accent: [4, 5],
      paragraphs: [
        'Handing out AI tools is easy. Using them well takes practice. We train teams on their real workflows, so the gains show up in the work, not just on the licence bill.',
      ],
      offers: [
        {
          title: 'Training and workshops',
          body: "Hands-on sessions built around your team's everyday tasks.",
        },
        {
          title: 'Skills and workflows',
          body: 'Find the useful applications, improve prompts, judge results.',
        },
        {
          title: 'Conscious AI guidance',
          body: 'Tool choices, costs, resource use and responsible adoption, explained.',
        },
        {
          title: 'AI optimisation',
          body: 'Cut unnecessary complexity and compute without losing quality or safety.',
        },
      ],
      cta: 'Discuss team training',
    },
    vision: {
      kicker: 'Why we do this',
      title: 'Technology should move us forward, thoughtfully.',
      accent: [5],
      paragraphs: [
        'Progress means solving real problems, not building more for its own sake.',
        'We want technology that extends what people can do without losing sight of what it costs.',
      ],
    },
    comingSoon: {
      kicker: 'Something new is in the works',
      title: 'Learn consciously. Put it into practice.',
      accent: [2, 3, 4, 5],
      body: "The free course is only the start. We're building a product that brings Conscious AI into everyday work. Leave your email and you'll hear about both.",
      cta: 'Stay in the loop',
    },
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
    serviceOtherTagline:
      'A project, a question, a partnership or anything not listed.',
    interests: {
      course: {
        title: 'The free course',
        description: 'Access to the Conscious AI learning modules.',
      },
      team: {
        title: 'Training for my team',
        description: 'Conscious AI for a whole team or organisation.',
      },
    },
    message: 'Your message',
    messagePlaceholder:
      'What are you building, what needs improving, or where is technology getting in the way?',
    consentBefore:
      'I agree that Bullah Labs may store and process this enquiry to respond to me, as described in the',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Send enquiry',
    replyNote: 'We reply {time}.',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    sentTitle: 'Message received.',
    sentBody:
      'Thank you. A person reads every enquiry and replies {time}, straight to the address you gave us.',
    sentAgain: 'Send another',
    // Multi-step wizard
    stepLabel: 'Step {current} of {total}',
    next: 'Continue',
    back: 'Back',
    steps: {
      service: {
        title: 'Where would you like to start?',
        subtitle: 'Pick the closest match.',
      },
      message: {
        title: 'Tell us a little more.',
        subtitle: 'A few lines are enough. We ask the rest when we reply.',
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
    kicker: 'About',
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
        label: 'Since',
        value: '2024, with 150+ projects and clients on four continents',
      },
      {
        label: 'Where',
        value: 'Stuttgart and Islamabad, with overlapping working hours',
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
      'Write to us or book a 30-minute intro call. A person replies within one business day.',
    book: 'Book a 30-minute intro call',
    /** Two ways to start: write to us, or book a slot straight away. */
    choose: {
      formTab: 'Write to us',
      callTab: 'Book a call',
      callHint: '30-minute intro call',
    },
    /** Closing section of the homepage: the same form, without leaving. */
    home: {
      kicker: 'Contact',
      title: 'Have a problem worth solving?',
      accent: [2, 3, 4],
      description:
        "Tell us what you're building, what needs improving or where technology is getting in the way. We'll suggest a practical next step.",
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Straight answers to important questions.',
    description: 'What we do, how we work and where AI fits.',
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
      'A product and engineering studio in Stuttgart and Islamabad. We build digital products that last, and teach people to use AI well.',
    program: 'Conscious AI',
    company: 'Company',
    offices: 'Offices',
    legal: 'Legal',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export type Dictionary = typeof en;

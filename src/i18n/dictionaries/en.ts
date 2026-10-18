import type { Locale } from '../config';

export const en = {
  locale: 'en' as Locale,
  nav: {
    about: 'Who We Are',
    program: 'Conscious AI',
    services: 'Services',
    work: 'Selected Work',
    approach: 'Our Approach',
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
    badge: 'Thoughtful technology. Practical impact.',
    title: 'Technology that solves problems.\nBuilt with conscience.',
    /** Words (0-based, across both lines) in the accent colour: line two. */
    accent: [4, 5, 6],
    body: 'We design, build and improve digital products with care for their real-world impact. From the systems we create to the AI we use, we focus on what is useful, what is responsible and what is worth building.',
    primary: 'Discuss your project',
    secondary: 'See the projects',
    /** The living map beside the hero copy: real tasks, decided on purpose. */
    map: {
      kicker: 'Every task, decided before AI is opened.',
      taskLabel: 'Task',
      /** A newline splits a tile label over two lines. */
      nodes: {
        task: 'The task',
        decide: 'Does AI\nhelp?',
        tool: 'Smallest\ntool',
        context: 'Needed\ncontext',
        check: 'Checked',
        result: 'The result',
      },
      /**
       * Played one after another. A task with `tool` and `context` takes
       * the AI route; one without goes from the question straight to the
       * check. Each caption is read in about two seconds: keep it to one
       * short sentence or two.
       */
      scenarios: [
        {
          task: 'Summarise a 40-page contract for the board',
          decide: 'AI helps here. A first draft is quick to judge.',
          tool: 'A light model is enough. Not the biggest one.',
          context: 'The three clauses that matter go in. Not forty pages.',
          check: 'Read and corrected before it leaves your hands.',
          result: 'Done in one round. Nothing confidential shared.',
        },
        {
          task: 'Work out the margin on 200 order lines',
          decide: 'AI does not help here. A spreadsheet formula is exact.',
          check: 'Still checked, like everything else.',
          result: 'Exact numbers. No AI run, no data shared.',
        },
        {
          task: 'Reply to an angry customer',
          decide: 'AI helps with the tone. The facts stay yours.',
          tool: 'A light model, three sentences. No heavy reasoning needed.',
          context: 'The complaint and your policy. Nothing else.',
          check: 'Read once and signed off by you.',
          result: 'Sent in one round, in your own words.',
        },
      ],
    },
  },
  /** Homepage: the pressure to keep up with AI, and the free resources. */
  consciousAi: {
    kicker: 'Conscious AI',
    title:
      "AI is moving fast. You're expected to keep up. But where do you start?",
    accent: [9, 10, 11, 12, 13],
    paragraphs: [
      "New tools appear every day. You want to work smarter, build skills and stay relevant, but it's hard to know what to learn, which tools to trust or whether you're using AI well. You may also worry about its environmental and social impact.",
      "You shouldn't have to choose between doing your job well and using AI responsibly.",
      'We offer free resources and practical guidance to help you use AI with more confidence and less waste. Learn how to choose the right tool for the task, set up your AI workspace, write clearer prompts and avoid unnecessary usage.',
      "You'll discover where AI genuinely helps, where it falls short, and how everyday choices affect time, cost, energy and water use. No technical background needed. No need to chase every new trend.",
    ],
    closingKicker: 'Free resources',
    closing:
      'Work smarter with AI. Feel more confident. Make more conscious choices.',
    cta: 'Explore free AI resources',
    notifyNote:
      "The free learning modules are in the making. Leave your email and we'll tell you when they open.",
  },
  consciousTech: {
    kicker: 'Conscious technology',
    title: 'Technology is never just technology.',
    accent: [3, 4],
    paragraphs: [
      'Every product shapes how people work, live and make decisions. Every system uses resources. Every technical choice has consequences.',
      'We build technology with these consequences in mind, considering environmental impact, social responsibility and ethical questions from the start.',
      'Better technology means more than making it work. It means understanding what it changes, what it consumes and who it affects.',
    ],
  },
  numbers: {
    kicker: 'Proof and outcomes',
    title: 'Built to deliver real outcomes.',
    description:
      'We turn ideas into useful products, combining thoughtful engineering with a focus on lasting value.',
    items: [
      { value: '150+', label: 'Projects delivered' },
      { value: '40+', label: 'Clients on four continents' },
      { value: '2', label: 'Offices, Germany and Pakistan' },
    ],
  },
  technologies: {
    kicker: 'Tools and technology',
    statement: 'Proven tools. Chosen for a reason.',
    statementMuted:
      'We use established technologies that fit the problem, the team and the product. The goal is not to chase trends or add tools for their own sake. It is to build systems that work well and remain practical to operate and improve.',
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
  /** How we work, in four steps. */
  howItWorks: {
    kicker: 'How we work',
    title: 'Clear thinking. Deliberate building.',
    accent: [2, 3],
    description: 'From understanding the problem to improving what we built.',
    stepLabel: 'Step',
    cta: 'Discuss your project',
    steps: [
      {
        title: 'Understand the problem',
        when: 'Discover',
        summary:
          'We learn what people need, what is getting in the way and what success should look like.',
      },
      {
        title: 'Choose the right approach',
        when: 'Decide',
        summary:
          'We evaluate possible solutions, including their complexity, costs, resource needs and consequences.',
      },
      {
        title: 'Build and learn',
        when: 'Build',
        summary:
          'We develop, test and refine the solution with regular feedback and clear priorities.',
      },
      {
        title: 'Improve with purpose',
        when: 'Improve',
        summary:
          'We measure what matters and keep improving where it creates real value. Sometimes the right next step is to simplify, not add more.',
      },
    ],
  },
  globalReach: {
    kicker: 'Working worldwide',
    title: 'One team. Wherever the work happens.',
    description:
      'We collaborate with teams across locations, combining clear communication with hands-on product and engineering work. Served from Fellbach near Stuttgart and from Islamabad, so whenever you work, someone on the team is online.',
    legend: 'Offices and client locations',
  },
  testimonials: {
    kicker: 'Client voices',
    title: 'Good work, built together.',
    accent: [2, 3],
    caseStudy: 'View project',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
  },
  work: {
    kicker: 'Selected work',
    title: 'Every project should make a difference.',
    description:
      'We work on digital products and systems that solve real problems. That includes building new products, improving existing ones and helping teams make more informed technology decisions.',
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
      kicker: 'Selected work',
      title: 'Every project should make a difference.',
      accent: [4, 5, 6],
      body: [
        'We work on digital products and systems that solve real problems. That includes building new products, improving existing ones and helping teams make more informed technology decisions.',
        'Our work also creates opportunities to share knowledge, helping people understand the tools they use, make better choices and recognise the wider impact of technology.',
      ],
      cta: 'Browse all projects',
      listLabel: 'Featured projects',
      more: '{n} more on the projects page',
    },
  },
  services: {
    kicker: 'Services',
    title: 'Thoughtful technology, from idea to improvement.',
    accent: [2, 3, 4, 5, 6],
    description:
      'We bring product thinking, engineering and responsible technology choices together. We also help clients build the knowledge to make better decisions beyond a single project.',
    promise:
      'Product thinking, engineering and responsible technology choices, together.',
    cta: 'Discuss your project',
  },
  whoWeAre: {
    kicker: 'Who we are',
    title:
      'We build technology with purpose, and believe progress comes with responsibility.',
    accent: [7, 8, 9, 10],
    paragraphs: [
      'Bullah Labs is a product and engineering team helping turn ideas into useful digital products. We combine thoughtful engineering with a conscious approach to how technology is designed, built and used.',
      'We believe technology should solve real problems, not create complexity for its own sake. That means looking beyond what a product can do and asking what it should do, what resources it requires, and how it affects people and the world around us.',
      'Our vision goes beyond building software or adopting AI. We want to help shape a future where technology advances human capabilities without losing sight of its environmental, social and ethical consequences.',
      'That starts with understanding. We help people and organisations make informed choices, use technology effectively and recognise when less is more.',
      'For us, better technology is not simply more powerful. It is more useful, more thoughtful and more responsible.',
    ],
    cta: 'More about us',
  },
  principles: {
    kicker: 'Engineering principles',
    title: "Build what matters. Avoid what doesn't.",
    accent: [3, 4, 5],
    description: 'The rules behind every technical decision we make.',
  },
  program: {
    watch: 'Watch the full course',
    request: 'Training for a team',
    /** Labels in the course player and the module list. */
    player: {
      modules: 'Modules',
      module: 'Module',
      lesson: 'Lesson',
      lessons: 'lessons',
      published: 'published',
      watched: 'watched',
      watchedTag: 'Watched',
      minutes: 'min',
      comingSoon: 'Coming soon',
      nothingYet:
        'This lesson is being recorded. Leave your email and we will tell you the moment it is live.',
      listLabel: 'Course modules and lessons',
      previous: 'Previous lesson',
      next: 'Next lesson',
      upNext: 'Up next',
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
      body: "The free learning modules are in the making. Leave your email and we'll let you know when they're ready.",
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
      "AI is moving fast. Feel like you're falling behind? Not sure where to start, what to trust or how to use it responsibly?",
    promise:
      "We're creating free, practical learning modules to help you use AI confidently, work smarter and reduce unnecessary waste.",
    heroCta: 'Tell me when it opens',
    principle: 'Practical skills. Conscious choices. No coding required.',
    course: {
      kicker: 'Coming soon',
      title: 'Better AI habits start here.',
      accent: [0, 1, 2],
      learnKicker: 'Learn to',
      learn: [
        'Choose the right tool for the task.',
        'Write better prompts and get useful results.',
        'Set up reusable AI workflows.',
        "Understand AI's costs, energy and water use.",
        'Recognise limitations and check outputs.',
      ],
      facts: [
        { label: 'Format', value: 'Coming soon' },
        { label: 'Enrolment', value: 'Not open yet' },
      ],
      cta: 'Get notified',
    },
    problem: {
      kicker: 'The problem',
      title: 'Everyone expects you to use AI. Few show you how.',
      accent: [6, 7, 8, 9],
      lines: [
        'New tools. New trends. More pressure to keep up.',
        "You want to work smarter and stay relevant. But you also want to make informed choices about AI's environmental and social impact.",
        "You shouldn't have to choose between doing your job well and using AI responsibly.",
      ],
    },
    approach: {
      kicker: 'Use AI better',
      title: 'Not more AI. Better AI.',
      accent: [3, 4],
      lines: [
        'Use AI when it helps. Choose the right model. Give clear instructions. Skip unnecessary steps.',
        'Small changes can save time, improve results and reduce unnecessary computation.',
        'Use what you need. Understand the impact. Keep human judgement in the loop.',
      ],
    },
    modules: {
      kicker: 'Learn by doing',
      title: 'Practical skills. Real work.',
      accent: [2, 3],
      description:
        'Free resources to help you build better AI habits, one task at a time.',
      habits: [
        {
          title: 'Set up once.',
          body: 'Create reusable instructions for recurring tasks.',
        },
        {
          title: 'Prompt clearly.',
          body: 'Get better results with fewer follow-ups.',
        },
        { title: 'Choose wisely.', body: 'Match the model to the task.' },
        {
          title: 'Keep context relevant.',
          body: 'Give AI what it needs, not everything you have.',
        },
        {
          title: 'Think critically.',
          body: 'Check outputs and know when not to use AI.',
        },
        {
          title: 'Understand the impact.',
          body: 'Learn how everyday choices affect resource use.',
        },
      ],
      cta: 'Notify me when it launches',
    },
    whoFor: {
      kicker: 'Made for non-developers',
      title: 'Curious about AI. No coding required.',
      accent: [3, 4, 5],
      paragraphs: [
        'For people who want to use AI at work without becoming technical experts.',
        'Whether you work in marketing, operations, finance, HR, sales or project management, learn skills you can put to use straight away.',
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
      kicker: 'For teams and organisations',
      title: 'Help your team use AI well.',
      accent: [4, 5],
      paragraphs: [
        'Giving people AI tools is easy. Helping them use those tools effectively and responsibly takes practice.',
        'We help teams build confidence, improve workflows and make more conscious choices.',
      ],
      offers: [
        {
          title: 'Group training and workshops',
          body: 'Practical sessions tailored to everyday tasks and team needs.',
        },
        {
          title: 'AI skills and workflows',
          body: 'Help people find useful applications, improve prompts and evaluate results.',
        },
        {
          title: 'Conscious AI guidance',
          body: 'Understand tool choices, costs, resource use and responsible adoption.',
        },
        {
          title: 'AI optimisation',
          body: 'Identify unnecessary complexity and computation while maintaining quality, reliability and safety.',
        },
      ],
      cta: 'Discuss team training',
      note: 'Free learning for individuals. Practical training and guidance for teams.',
    },
    vision: {
      kicker: 'Why we do this',
      title: 'Technology should move us forward, thoughtfully.',
      accent: [5],
      paragraphs: [
        'At Bullah Labs, we build digital products and help people make better technology decisions.',
        'We believe progress means solving real problems, not building more for its own sake.',
        "That means considering technology's environmental footprint, social consequences and ethical implications.",
        'Our vision: technology that advances human capabilities without losing sight of its impact.',
      ],
    },
    notify: {
      kicker: 'Stay in the loop',
      title: 'Be first to know.',
      body: "The free learning modules are in the making. Leave your email and we'll let you know when they're ready.",
      cta: 'Notify me',
      note: "One email when it's ready.",
    },
    comingSoon: {
      kicker: 'Something new is in the works',
      title: 'Learn consciously. Put it into practice.',
      accent: [2, 3, 4, 5],
      body: "Free learning is just the beginning. We're building a new product to bring more conscious technology into everyday use. More soon. Built with purpose.",
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
      'What are you building, what do you want to improve, or where is technology getting in the way?',
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
        subtitle: 'Pick the closest match.',
      },
      message: {
        title: 'Tell us a little more.',
        subtitle:
          'What you are building, what you want to improve or where technology is getting in the way.',
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
    ctaTitle: 'Have a problem worth solving?',
    ctaAccent: [2, 3, 4],
    ctaBody:
      "Tell us what you are building, what you want to improve or where technology is getting in the way. We'll help you find a practical next step.",
  },
  aboutPage: {
    kicker: 'Who we are',
    title:
      'We build technology with purpose, and believe progress comes with responsibility.',
    accent: [7, 8, 9, 10],
    description:
      'Bullah Labs is a product and engineering team helping turn ideas into useful digital products. We combine thoughtful engineering with a conscious approach to how technology is designed, built and used.',
    story: [
      'We believe technology should solve real problems, not create complexity for its own sake. That means looking beyond what a product can do and asking what it should do, what resources it requires, and how it affects people and the world around us.',
      'Our vision goes beyond building software or adopting AI. We want to help shape a future where technology advances human capabilities without losing sight of its environmental, social and ethical consequences.',
      'That starts with understanding. We help people and organisations make informed choices, use technology effectively and recognise when less is more.',
      'For us, better technology is not simply more powerful. It is more useful, more thoughtful and more responsible.',
    ],
    facts: [
      {
        label: 'What we do',
        value:
          'Digital products, designed, built and improved, with guidance on using technology and AI well',
      },
      {
        label: 'Who for',
        value:
          'Teams building a new product, improving an existing one or making technology decisions',
      },
      {
        label: 'How',
        value:
          'Understand the problem, choose the right approach, build and learn, improve with purpose',
      },
      {
        label: 'Where',
        value: 'Islamabad and Fellbach, with overlapping working hours',
      },
    ],
    whereKicker: 'Where we are',
    whereTitle: 'Two offices, one working day.',
    whereAccent: [3, 4],
    whereDescription:
      'An Asian office in Islamabad and a European office in Fellbach. Write to whichever is closer; the same team answers.',
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
    title: 'Have a problem worth solving?',
    accent: [2, 3, 4],
    description:
      "Tell us what you are building, what you want to improve or where technology is getting in the way. We'll help you find a practical next step.",
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
      title: 'Have a problem worth solving?',
      accent: [2, 3, 4],
      description:
        "Tell us what you are building, what you want to improve or where technology is getting in the way. We'll help you find a practical next step.",
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
    body: "Tell us what you are building, what you want to improve or where technology is getting in the way. We'll help you find a practical next step.",
    button: 'Tell us about your project',
  },
  footer: {
    pitch:
      'We build digital products and help people use technology with greater care, clarity and responsibility.',
    program: 'Conscious AI',
    company: 'Company',
    offices: 'Offices',
    legal: 'Legal',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    status: 'Online',
  },
};

export type Dictionary = typeof en;

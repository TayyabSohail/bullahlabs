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
    next: 'Next',
    top: 'Back to top',
  },
  hero: {
    badge: 'AI enablement & optimization',
    title: 'Stop using AI by default.\nStart using it on purpose.',
    /** Words (0-based, across both lines) in the accent colour: line two. */
    accent: [5, 6, 7, 8, 9],
    body: 'Conscious AI is a way of working, not just a course: know when AI helps, use the smallest tool that does the job, check what comes back. Less waste, lower bills, a cleaner footprint.',
    primary: 'See the program',
    secondary: 'See the projects',
    /** The card beside the hero copy: everyday tasks decided in four steps.
        Each answer shows the habit first, then the deliberate choice that
        replaces it. Answers follow the order of `questions`. */
    decision: {
      kicker:
        'Four everyday tasks, each decided before AI is opened: whether it helps, which tool, how much context, and who checks the result.',
      live: 'Live',
      taskLabel: 'Task',
      defaultLabel: 'By default',
      consciousLabel: 'On purpose',
      outcomeLabel: 'Outcome',
      questions: [
        'Does AI help?',
        'Which tool?',
        'How much context?',
        'Who checks?',
      ],
      tasks: [
        {
          task: 'Write the launch email for a new feature.',
          answers: [
            {
              byDefault: 'Open the chatbot. It is already there.',
              onPurpose: 'Yes, for a first draft. The voice stays yours.',
            },
            {
              byDefault: 'The most powerful model.',
              onPurpose: 'A lighter one. A draft is easy to judge.',
            },
            {
              byDefault: 'The whole product wiki, pasted in.',
              onPurpose: 'The one-page brief and the last launch email.',
            },
            {
              byDefault: 'Nobody. Regenerate until it feels right.',
              onPurpose: 'You. Edit the first usable draft, then send.',
            },
          ],
          outcome:
            'One round instead of six. The same email, a fraction of the computation.',
        },
        {
          task: "Total last quarter's invoices by client.",
          answers: [
            {
              byDefault: 'Paste the sheet into a chat and ask.',
              onPurpose: 'No. A formula does this exactly, every time.',
            },
            {
              byDefault: 'A chatbot doing arithmetic.',
              onPurpose: 'SUMIF. Instant, exact, free.',
            },
            {
              byDefault: 'The whole workbook, client names included.',
              onPurpose: 'Nothing leaves the spreadsheet.',
            },
            {
              byDefault: 'Nobody. The number looked plausible.',
              onPurpose: 'The formula is the check. It does not guess.',
            },
          ],
          outcome: 'No AI run at all, and no client data shared.',
        },
        {
          task: 'Reply to a frustrated customer.',
          answers: [
            {
              byDefault: 'Ask for a reply and send what comes back.',
              onPurpose: 'Yes, for the structure. The tone has to be yours.',
            },
            {
              byDefault: 'The most powerful model.',
              onPurpose: 'A lighter model, for an outline only.',
            },
            {
              byDefault: 'The whole ticket history.',
              onPurpose: 'The last two messages and what you fixed.',
            },
            {
              byDefault: 'Nobody. It read fine.',
              onPurpose: 'You. Every promise in it is yours to keep.',
            },
          ],
          outcome: 'One outline, your own words, one read-through.',
        },
        {
          task: 'Answer the same onboarding question. Again.',
          answers: [
            {
              byDefault: 'Ask the chatbot each time it comes up.',
              onPurpose: 'Once. Write the answer, then reuse it.',
            },
            {
              byDefault: 'A new conversation every time.',
              onPurpose: 'One saved answer. AI only tidies the wording.',
            },
            {
              byDefault: 'The full handbook, pasted in again.',
              onPurpose: 'The one policy paragraph that applies.',
            },
            {
              byDefault: 'Nobody. Ten slightly different answers go out.',
              onPurpose: 'You, once. Then everyone gets the same answer.',
            },
          ],
          outcome: 'Ten questions, one AI run, one consistent answer.',
        },
      ],
    },
  },
  numbers: {
    kicker: 'By the numbers',
    title: 'Proof, not promises',
    description: 'Figures from the work we have delivered.',
    items: [
      { value: '150+', label: 'Projects delivered' },
      { value: '40+', label: 'Clients on four continents' },
      { value: '2', label: 'Offices, Germany and Pakistan' },
    ],
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
  /** The way of working, step by step through one task. */
  howItWorks: {
    kicker: 'The way of working',
    title: 'How conscious use works',
    stepLabel: 'Step',
    cta: 'Start with the free course',
    steps: [
      {
        title: 'Ask whether AI belongs here',
        when: 'Before',
        summary:
          'Many tasks that go to a chatbot are better served by a rule, a formula or a search. Decide first, type second.',
      },
      {
        title: 'Pick the smallest tool that does the job',
        when: 'Choose',
        summary:
          'A light model for a draft, a heavy one only when the result is hard to check. Right-sizing is where most of the saving sits.',
      },
      {
        title: 'Say it once, properly',
        when: 'Prompt',
        summary:
          'State what you need, for whom and in what shape in the first prompt. Share only the part of the document that matters.',
      },
      {
        title: 'Stop when it meets the requirement',
        when: 'Work',
        summary:
          'Every extra round, step or hand-off has to earn its place. The goal is a checked result that does the job, not a perfect one.',
      },
      {
        title: 'Check what comes back',
        when: 'Review',
        summary:
          'Verify the figures, sources and claims before anything leaves your hands. AI drafts. You decide.',
      },
      {
        title: 'Measure, then make it a habit',
        when: 'After',
        summary:
          'Record a baseline, change one thing, compare. Less waste, lower bills, a cleaner footprint, and a workflow you can teach.',
      },
    ],
  },
  globalReach: {
    kicker: 'Offices',
    title: 'One mindset, from Stuttgart to Islamabad.',
    description:
      'Teams across Europe, North America, the Middle East, Africa and Asia, served from Fellbach near Stuttgart and from Islamabad. Whenever you work, someone on the team is online.',
    legend: 'Offices and client locations',
  },
  testimonials: {
    kicker: 'Client voices',
    title: 'What it is like to work with us',
    accent: [6],
    caseStudy: 'View project',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
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
    description: 'How we work, what we build and how the program runs.',
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

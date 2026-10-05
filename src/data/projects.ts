import type { Locale } from '@/i18n/config';

import { projectsDe } from './projects.de';

/**
 * Single source of truth for every case study on the site.
 *
 * To add one: append a `Project` to `projects` and drop its cover into
 * `/public/work/`. The /work grid, each /work/[slug] page, the homepage
 * showcase, the sitemap and the service "proof" links all read from here.
 */

/** What the product is. Shown as context; also drives the /work filter. */
export type ProjectCategory =
  | 'SaaS'
  | 'Marketplace'
  | 'AI'
  | 'Mobile'
  | 'Website';

export const CATEGORY_ORDER: ProjectCategory[] = [
  'SaaS',
  'Marketplace',
  'AI',
  'Mobile',
  'Website',
];

/** What the work was. Mirrors the services offered. */
export type ProjectCapability =
  | 'Full-Stack'
  | 'AI'
  | 'Cloud & Automation'
  | 'Web'
  | 'Mobile';

export const CAPABILITY_ORDER: ProjectCapability[] = [
  'Full-Stack',
  'AI',
  'Cloud & Automation',
  'Web',
  'Mobile',
];

/** Whether the product is shown on a laptop with a phone, or on phones only. */
export type ProjectPlatform = 'web' | 'app';

/**
 * Real captures of the product at device resolution, stored in
 * `/public/work/screens/`. Desktop is a 16:10 capture (2160x1350), mobile a
 * 390x844 phone capture at 2x. Regenerate with `scripts/capture-screens.mjs`.
 */
export interface ProjectScreens {
  desktop: string;
  mobile: string;
  /** Second phone screen, shown behind the first on app projects. */
  mobileAlt?: string;
}

/**
 * One more screen of the product for the case-study gallery, captured the
 * same way as `ProjectScreens`. App projects only have the phone capture.
 */
export interface ProjectGalleryScreen {
  /** Short name of the screen, e.g. "Vault". */
  title: string;
  /** One sentence on what the screen does. */
  caption: string;
  desktop?: string;
  mobile: string;
}

/** One headline figure in the results section of a case study. */
export interface ProjectResult {
  /** The figure, e.g. "70%", "200 ms", "1,000+". */
  value: string;
  /** What the figure measures, a few words that read on from the value. */
  label: string;
  /** One sentence on what changed for the client behind that figure. */
  detail: string;
}

export interface TechGroup {
  category: string;
  tools: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Client or product owner, shown on cards. */
  client: string;
  /** Short label under the title on cards. */
  tagline: string;
  /** One line for the hero and SEO description. */
  summary: string;
  /** Paragraph of context for the case-study lede. */
  description: string;
  /** Social share image; usually the desktop screen. */
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  platform: ProjectPlatform;
  screens: ProjectScreens;
  /** Further screens shown on the case-study page, in this order. */
  gallery: ProjectGalleryScreen[];
  /** Dominant colour used for glows and the plate tint behind the devices. */
  accent: string;
  /** Flat list, used for chips and quick scanning. */
  tech: string[];
  /** Grouped stack, rendered on the case study. */
  techStack: TechGroup[];
  category: ProjectCategory;
  capabilities: ProjectCapability[];
  /** Service slugs from data/services.ts this project demonstrates. */
  services: string[];
  industry: string;
  year: string;
  /**
   * Product name changed and live link withheld at the client's request.
   * Screens are recreations of the product, not captures of it.
   */
  anonymised?: boolean;
  /** Featured projects appear in the homepage showcase, in this order. */
  featured?: number;
  /**
   * Smaller builds, apps and side projects. Kept out of the main showcase on
   * the homepage and /work; each still gets a full case-study page.
   */
  notable?: boolean;
  /** Headline metric for cards and the homepage showcase. */
  headline: { value: string; label: string };
  problem: string;
  approach: string;
  /** One paragraph on what changed for the client after launch. Opens the results section. */
  resultsSummary: string;
  /** Headline figures for the results section, three per project. */
  results: ProjectResult[];
  architecture: string;
  keyFeatures: string[];
  challenges: { challenge: string; solution: string }[];
}

export const projects: Project[] = [
  {
    slug: 'brickfold',
    title: 'Brickfold',
    client: 'Confidential (property members club)',
    tagline: 'Fractional property ownership for East Africa',
    summary:
      'A members club where Ugandans co-own income-producing apartments from 1,000,000 UGX.',
    description:
      'Property is sold in one indivisible lump, and that lump costs more than most people will ever have in the bank at once. Brickfold breaks the lump. Vetted members pool capital to co-own real, income-producing apartments in Uganda, earn their proportional share of monthly rent, and sell their stake to other members when they want out.',
    coverImage: '/work/screens/brickfold-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/brickfold-desktop.webp',
      mobile: '/work/screens/brickfold-mobile.webp',
    },
    gallery: [
      {
        title: 'Apartment marketplace',
        caption:
          'Units open for ownership with funding progress, yield and the minimum stake.',
        desktop: '/work/screens/brickfold-listings-desktop.webp',
        mobile: '/work/screens/brickfold-listings-mobile.webp',
      },
      {
        title: 'Vault',
        caption:
          'Every deposit, investment, rent credit and withdrawal in one exact ledger.',
        desktop: '/work/screens/brickfold-vault-desktop.webp',
        mobile: '/work/screens/brickfold-vault-mobile.webp',
      },
      {
        title: 'Approval desk',
        caption:
          'Admins approve every money movement and change platform rules without a release.',
        desktop: '/work/screens/brickfold-admin-desktop.webp',
        mobile: '/work/screens/brickfold-admin-mobile.webp',
      },
    ],
    accent: '#22c55e',
    tech: [
      'Next.js',
      'TypeScript',
      'React',
      'TanStack',
      'TailwindCSS',
      'ShadCN',
      'Supabase',
      'PostgreSQL',
      'Zod',
      'Resend',
      'pdf-lib',
      'PostHog',
    ],
    techStack: [
      {
        category: 'Frontend',
        tools: ['Next.js', 'React', 'TypeScript', 'TanStack'],
      },
      { category: 'Styling', tools: ['TailwindCSS', 'ShadCN'] },
      { category: 'Backend', tools: ['Supabase', 'PostgreSQL', 'Zod'] },
      { category: 'Messaging & Documents', tools: ['Resend', 'pdf-lib'] },
      { category: 'Analytics', tools: ['PostHog'] },
    ],
    category: 'Marketplace',
    capabilities: ['Full-Stack', 'Cloud & Automation'],
    services: ['product-engineering', 'team-extension'],
    industry: 'Fintech / Real estate',
    year: '2025-2026',
    anonymised: true,
    featured: 1,
    headline: { value: '1M UGX', label: 'to start owning property' },
    problem:
      'Most people in East Africa will never own an apartment, not for lack of savings, but because property sells in one indivisible lump. Capital is locked up for years, rental income means becoming a landlord, and there is no transparency on what a building actually earns.',
    approach:
      'We built a two-sided members club: a vetted application and onboarding funnel, a wallet every shilling passes through, three ways to own, and an internal resale market for exits. Every financial decision routes through a real admin.',
    resultsSummary:
      'Brickfold launched as a working members club, not a waitlist. Members apply, fund a wallet, buy into apartments, collect their share of the rent and exit through the secondary market, and every shilling of it reconciles to the ledger.',
    results: [
      {
        value: '1M UGX',
        label: 'minimum stake to co-own an apartment',
        detail:
          'Property that only ever sold as one indivisible lump now opens at a price ordinary savers can reach.',
      },
      {
        value: '3',
        label: 'ownership products on one ledger',
        detail:
          'Fractional, Live and Prime share the same wallet, rent distribution and secondary market.',
      },
      {
        value: '100%',
        label: 'of money movements approved by a person',
        detail:
          'Every deposit, investment, rent credit and withdrawal passes the admin desk before it settles.',
      },
    ],
    architecture:
      'Next.js and React with TanStack and typed server actions, over Supabase and PostgreSQL with Zod at the boundaries. Roughly 72,600 lines across 416 files and 211 reusable components. Wallet balances are enforced to always equal deposits minus investments minus withdrawals, and UGX is handled as whole shillings throughout, never floats.',
    keyFeatures: [
      'Apartment marketplace with search, filters and sorting',
      'Vault wallet for deposits, deployments and withdrawals',
      'Monthly rent distribution, split by exact stake',
      'Exit-window resale market with a 1.5% platform fee',
      'Admin approval desk for every money movement',
      'Broadcast composer with 6 audience segments',
      'Referrals, 4 member ranks and 35 automated emails',
    ],
    challenges: [
      {
        challenge:
          'Ownership had to stay exact across primary purchases, monthly rent splits and secondary trades, with no member ever short-changed by rounding.',
        solution:
          'Percentages are derived from actual amounts on every read rather than stored, and every split rounds down to the whole shilling so the platform never rounds in its own favour.',
      },
      {
        challenge:
          'A wallet holding real money can never drift, and no member could be allowed to see or reach an admin screen.',
        solution:
          'The ledger invariant, where balance equals deposits minus investments minus withdrawals, is enforced rather than assumed. The member and admin worlds are strictly separated in the product.',
      },
      {
        challenge:
          'Membership fees, minimums and resale fees needed to change with the business, not with the release cycle.',
        solution:
          'Every rule became an operational setting behind an admin panel, so the team adjusts the platform economics instantly.',
      },
    ],
  },

  {
    slug: 'rankloom',
    title: 'Rankloom',
    client: 'Confidential (SEO platform)',
    tagline: 'AI-driven platform for smarter SEO growth',
    summary: 'AI-powered SEO and content platform.',
    description:
      'One platform for keyword research, AI content generation and rank tracking, replacing the tool-hopping that ate up SEO teams’ days.',
    coverImage: '/work/screens/rankloom-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/rankloom-desktop.webp',
      mobile: '/work/screens/rankloom-mobile.webp',
    },
    gallery: [
      {
        title: 'Keyword research',
        caption:
          'Live volume, difficulty and intent, with local insights from Google Maps.',
        desktop: '/work/screens/rankloom-keywords-desktop.webp',
        mobile: '/work/screens/rankloom-keywords-mobile.webp',
      },
      {
        title: 'Content assistant',
        caption:
          'Batch article generation as a resumable job, with an SEO score per draft.',
        desktop: '/work/screens/rankloom-editor-desktop.webp',
        mobile: '/work/screens/rankloom-editor-mobile.webp',
      },
      {
        title: 'Rank tracking',
        caption:
          'Daily positions, movers and the background jobs that refresh them.',
        desktop: '/work/screens/rankloom-tracking-desktop.webp',
        mobile: '/work/screens/rankloom-tracking-mobile.webp',
      },
    ],
    accent: '#8b5cf6',
    tech: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'ShadCN',
      'Supabase',
      'PostgreSQL',
      'Trigger.dev',
      'OpenRouter',
      'DataForSEO',
      'Google Maps API',
      'Stripe',
      'PostHog',
      'AWS EC2',
      'AWS Lambda',
    ],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS', 'ShadCN'] },
      { category: 'Backend', tools: ['Supabase', 'PostgreSQL', 'Trigger.dev'] },
      {
        category: 'APIs & AI',
        tools: ['OpenRouter', 'DataForSEO', 'Google Maps API'],
      },
      { category: 'Payments', tools: ['Stripe'] },
      { category: 'Deployment', tools: ['AWS EC2', 'AWS Lambda'] },
      { category: 'Analytics', tools: ['PostHog'] },
    ],
    category: 'SaaS',
    capabilities: ['AI', 'Cloud & Automation', 'Full-Stack'],
    services: ['ai-automation', 'cloud-devops', 'product-engineering'],
    industry: 'Marketing technology',
    year: '2024-2025',
    anonymised: true,
    featured: 2,
    headline: { value: '3x', label: 'lower cost per article' },
    problem:
      'SEO teams switched between five different tools just to get from keyword discovery to tracking, wasting hours and risking inconsistent data. Most tools also lean on stale keyword and ranking data, so teams react slowly to search trends.',
    approach:
      'One platform: an AI content engine on OpenRouter wired to live DataForSEO and Google Maps data, with Trigger.dev running bulk jobs and caching in the background.',
    resultsSummary:
      'Rankloom replaced five separate SEO tools with one platform. Keyword research, drafting and rank tracking run as automated workflows the team reviews rather than operates, and the largest cost line in the business fell by half.',
    results: [
      {
        value: '3x',
        label: 'lower cost per article',
        detail:
          'Drafting, optimisation and publishing run as one automated workflow instead of a chain of tools and hand-offs.',
      },
      {
        value: '30',
        label: 'articles generated in 10 minutes',
        detail:
          'A batch that previously cost the content team hours, now a resumable background job with an SEO score per draft.',
      },
      {
        value: '50%',
        label: 'lower keyword tracking spend',
        detail:
          'From $0.18 to $0.09 per tracked keyword, with no loss of data freshness.',
      },
    ],
    architecture:
      'Next.js App Router with server components for data-heavy views, Supabase and PostgreSQL for storage, and Trigger.dev for durable background jobs. Generation is proxied through OpenRouter so models swap without touching product code.',
    keyFeatures: [
      'AI content generation with multi-locale support',
      'Real-time keyword and rank tracking',
      'Location-based insights via Google Maps API',
      'Bulk processing pipelines with caching',
      'Stripe-backed subscription billing',
    ],
    challenges: [
      {
        challenge:
          'Keyword API costs scaled linearly with users and quickly became the largest line item.',
        solution:
          'Introduced request batching and a caching layer keyed by keyword and locale, cutting tracking spend in half without reducing data freshness.',
      },
      {
        challenge:
          'Bulk content jobs exceeded serverless execution limits and failed midway.',
        solution:
          'Moved generation onto Trigger.dev as durable, resumable jobs that checkpoint progress and retry individual items rather than the whole batch.',
      },
    ],
  },

  {
    slug: 'bidnest',
    title: 'Bidnest',
    client: 'Confidential (student housing marketplace)',
    tagline: 'Off-campus home rentals, on your terms',
    summary: 'Bidding-based off-campus rental marketplace.',
    description:
      'Students bid on off-campus housing in real time, with role-scoped dashboards for students, parents and landlords.',
    coverImage: '/work/screens/bidnest-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/bidnest-desktop.webp',
      mobile: '/work/screens/bidnest-mobile.webp',
    },
    gallery: [
      {
        title: 'Listing and live bid',
        caption:
          'Bid history updates in under 200 ms, with a parent co-signer on the bid.',
        desktop: '/work/screens/bidnest-listing-desktop.webp',
        mobile: '/work/screens/bidnest-listing-mobile.webp',
      },
      {
        title: 'Student dashboard',
        caption:
          'Active bids, lease progress and services booked from partners.',
        desktop: '/work/screens/bidnest-dashboard-desktop.webp',
        mobile: '/work/screens/bidnest-dashboard-mobile.webp',
      },
      {
        title: 'Messaging',
        caption:
          'Students, landlords and providers in one thread, with bookings on the record.',
        desktop: '/work/screens/bidnest-messages-desktop.webp',
        mobile: '/work/screens/bidnest-messages-mobile.webp',
      },
    ],
    accent: '#38bdf8',
    tech: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'ShadCN',
      'Supabase',
      'PostgreSQL',
      'WebSockets',
      'Stripe',
      'Resend',
      'Twilio',
      'PostHog',
    ],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS', 'ShadCN'] },
      { category: 'Backend', tools: ['Supabase', 'PostgreSQL'] },
      { category: 'Real-time', tools: ['WebSockets'] },
      { category: 'Payments', tools: ['Stripe'] },
      { category: 'Notifications', tools: ['Resend', 'Twilio'] },
      { category: 'Analytics', tools: ['PostHog'] },
    ],
    category: 'Marketplace',
    capabilities: ['Full-Stack', 'Cloud & Automation'],
    services: ['product-engineering', 'mvp-sprint'],
    industry: 'Property technology',
    year: '2024',
    anonymised: true,
    featured: 3,
    headline: { value: '1,000+', label: 'people bidding at once' },
    problem:
      'Student housing is dominated by fixed-price listings with no room to negotiate, scattered across unreliable platforms. Parents fund most of these rentals but have no way into the process at all.',
    approach:
      'We designed a live bidding system over WebSockets with sub-200 ms updates, backed by data models tuned for listings, bids and notifications, and separate dashboards scoped to each role.',
    resultsSummary:
      'Bidnest went live for a semester rush and held. A thousand students can bid on the same listing at once, every bidder sees the same price within a fifth of a second, and students, parents and landlords each work from a view built for their role.',
    results: [
      {
        value: '1,000+',
        label: 'concurrent bidders without a conflict',
        detail:
          'Bid acceptance is serialised on the server, so there is one authoritative order and no listing is ever awarded twice.',
      },
      {
        value: '200 ms',
        label: 'from a bid to every screen updating',
        detail:
          'Live updates keep students, parents and landlords looking at the same number.',
      },
      {
        value: '3',
        label: 'dashboards, one per role',
        detail:
          'Students, parents and landlords each get the actions and information that matter to them, and nothing else.',
      },
    ],
    architecture:
      'Next.js over Supabase and PostgreSQL. Bids flow through a WebSocket channel and are validated server-side before commit, so a client can never post a winning bid it did not earn. Role access is enforced by row-level security.',
    keyFeatures: [
      'Bidding marketplace for verified off-campus rentals',
      'Parent access to bid and message on a student’s behalf',
      'Service booking for moving, cleaning and repairs',
      'Built-in messaging between students, landlords and providers',
      'In-app, email and SMS notifications',
      'Listings filtered by proximity to partner schools',
    ],
    challenges: [
      {
        challenge:
          'Simultaneous bids on the same listing raced each other and could both be accepted.',
        solution:
          'Moved bid acceptance into a serialised server-side transaction so ordering is decided authoritatively, with clients reconciling to the committed result.',
      },
      {
        challenge:
          'Broadcasting every bid to every connected client saturated the socket layer at peak.',
        solution:
          'Scoped subscriptions per listing so clients only receive updates for what they are watching.',
      },
    ],
  },

  {
    slug: 'curio-market',
    title: 'Curio Market',
    client: 'Confidential (ecommerce marketplace)',
    tagline: 'A personalised multi-seller marketplace',
    summary: 'Personalised multi-seller ecommerce marketplace.',
    description:
      'A multi-seller marketplace with personalised recommendations, Stripe Connect payouts and automated DHL tracking.',
    coverImage: '/work/screens/curio-market-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/curio-market-desktop.webp',
      mobile: '/work/screens/curio-market-mobile.webp',
    },
    gallery: [
      {
        title: 'Taste quiz',
        caption: 'Eight questions turn a shopper’s taste into a personal feed.',
        desktop: '/work/screens/curio-market-quiz-desktop.webp',
        mobile: '/work/screens/curio-market-quiz-mobile.webp',
      },
      {
        title: 'Personalised marketplace',
        caption:
          'Products from many sellers ranked by match and filtered by mood.',
        desktop: '/work/screens/curio-market-market-desktop.webp',
        mobile: '/work/screens/curio-market-market-mobile.webp',
      },
      {
        title: 'Seller dashboard',
        caption:
          'Orders with DHL tracking and scheduled Stripe Connect payouts.',
        desktop: '/work/screens/curio-market-seller-desktop.webp',
        mobile: '/work/screens/curio-market-seller-mobile.webp',
      },
    ],
    accent: '#a3a3a3',
    tech: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'Stripe Connect',
      'DHL API',
      'PostHog',
    ],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS'] },
      { category: 'Backend', tools: ['Supabase'] },
      { category: 'Payments', tools: ['Stripe Connect'] },
      { category: 'Logistics', tools: ['DHL API'] },
      { category: 'Analytics', tools: ['PostHog'] },
    ],
    category: 'Marketplace',
    capabilities: ['Full-Stack', 'Cloud & Automation', 'AI'],
    services: ['product-engineering', 'team-extension'],
    industry: 'Ecommerce',
    year: '2024-2025',
    anonymised: true,
    featured: 4,
    headline: { value: '70%', label: 'fewer support requests' },
    problem:
      'Most ecommerce shows a generic feed, burying shoppers in options that do not match their style. Sellers get basic tools with no view of orders or payouts, and manual payment handling plus opaque delivery erodes trust at checkout.',
    approach:
      'We built a server-rendered recommendation engine over a multi-tenant Supabase architecture with strict data isolation, then automated the money and logistics paths end to end with Stripe Connect and the DHL API.',
    resultsSummary:
      'Curio Market went from a generic storefront to a marketplace that learns what each shopper likes and gets out of the way at checkout. Sellers are paid on schedule, parcels track themselves, and the support inbox went quiet.',
    results: [
      {
        value: '40%',
        label: 'increase in shopper engagement',
        detail:
          'An eight-question taste quiz turns a generic feed into a personal one for every returning visitor.',
      },
      {
        value: '70%',
        label: 'fewer support tickets',
        detail:
          'Automated Stripe Connect payouts and DHL tracking removed the two questions that filled the inbox.',
      },
      {
        value: '1',
        label: 'checkout across every seller',
        detail:
          'Shoppers pay once; Stripe Connect splits the payment and settles each seller on schedule.',
      },
    ],
    architecture:
      'Next.js App Router, server-rendering the recommendation surfaces. Supabase provides multi-tenant storage with row-level security per seller. Stripe Connect handles split payments and payouts; DHL webhooks drive tracking.',
    keyFeatures: [
      'Personality test driving product recommendations',
      'Multi-seller marketplace in one shopping experience',
      'Seller dashboard for products, orders and payouts',
      'Stripe payments with automated seller payouts',
      'DHL integration for automated delivery tracking',
    ],
    challenges: [
      {
        challenge:
          'Multi-tenancy risked one seller’s queries reaching another seller’s data.',
        solution:
          'Enforced isolation with row-level security policies at the database rather than in application code, so a missed check in the app cannot leak data.',
      },
      {
        challenge:
          'Manual payout and shipping enquiries dominated the support queue.',
        solution:
          'Automated both paths, using Stripe Connect for scheduled payouts and DHL webhooks for tracking, then surfaced status directly in the order view.',
      },
    ],
  },

  {
    slug: 'bitsmiths-hrm',
    title: 'Bitsmiths HRM',
    client: 'Bitsmiths Studio',
    tagline: 'HR and payroll system, fully auditable',
    summary:
      'Onboarding, leave, medical claims, overtime and payroll for Bitsmiths Studio.',
    description:
      'An internal HR platform where employees are invited, onboarded and activated; they file leave, medical claims and overtime; admins approve each one, and approved items sweep into a monthly payroll run that calculates payslips, locks them, and exports to Payoneer.',
    coverImage: '/work/screens/bitsmiths-hrm-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/bitsmiths-hrm-desktop.webp',
      mobile: '/work/screens/bitsmiths-hrm-mobile.webp',
    },
    gallery: [
      {
        title: 'Leave requests',
        caption:
          'Requests routed to the lead and admin, with balances that update on approval.',
        desktop: '/work/screens/bitsmiths-hrm-leave-desktop.webp',
        mobile: '/work/screens/bitsmiths-hrm-leave-mobile.webp',
      },
      {
        title: 'Payroll cycle',
        caption:
          'The monthly register with overtime and deductions, approved in two steps.',
        desktop: '/work/screens/bitsmiths-hrm-payroll-desktop.webp',
        mobile: '/work/screens/bitsmiths-hrm-payroll-mobile.webp',
      },
      {
        title: 'Payslip',
        caption:
          'Earnings, deductions and the audit trail of who generated, reviewed and paid it.',
        desktop: '/work/screens/bitsmiths-hrm-payslip-desktop.webp',
        mobile: '/work/screens/bitsmiths-hrm-payslip-mobile.webp',
      },
    ],
    accent: '#10b981',
    tech: [
      'Next.js',
      'TypeScript',
      'React',
      'TailwindCSS',
      'Supabase',
      'PostgreSQL',
      'Zod',
      'TanStack',
      'Resend',
      'pg_cron',
    ],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'React', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS'] },
      { category: 'Backend', tools: ['Supabase', 'PostgreSQL', 'Zod'] },
      { category: 'Data Fetching', tools: ['TanStack'] },
      { category: 'Email', tools: ['Resend'] },
      { category: 'Scheduling', tools: ['pg_cron'] },
    ],
    category: 'SaaS',
    capabilities: ['Cloud & Automation', 'Full-Stack'],
    services: ['product-engineering', 'cloud-devops'],
    industry: 'HR technology',
    year: '2026',
    featured: 5,
    headline: { value: '0', label: 'manual payroll calculations' },
    problem:
      'People operations were scattered across email, chat and paper: onboarding by email, leave and overtime in messages, medical claims on paper, and payroll assembled by hand each month from all of it. Nothing reconciled, and nothing was auditable.',
    approach:
      'One system where every request is a row with a status. Employees submit; admins approve; approved leave, medical and overtime then sweep into a monthly payroll run that computes payslips and locks them.',
    resultsSummary:
      'Bitsmiths Studio now runs its people operations from one system instead of email, chat and paper. Every request is a row with a status, every approval is traceable, and payroll is a locked run that computes itself.',
    results: [
      {
        value: '0',
        label: 'manual payroll calculations',
        detail:
          'Approved leave, medical claims and overtime sweep into the monthly run automatically, then lock so nothing is paid twice.',
      },
      {
        value: '5',
        label: 'workflows in one system',
        detail:
          'Onboarding, leave, medical claims, overtime and payroll replaced five separate channels.',
      },
      {
        value: '12',
        label: 'automated emails',
        detail:
          'Status changes notify people on their own, so nobody chases an approval over chat.',
      },
    ],
    architecture:
      'Next.js 15 App Router with next-safe-action server actions over Supabase, using Postgres, Auth, Storage and pg_cron. Business logic lives in the database: leave and medical balances, payroll calculation and locking are Postgres functions, guarded by row-level security. Roles mirror into the JWT via trigger so middleware can route on them. Resend sends 12 React Email templates, and a monthly cron job opens each payroll period.',
    keyFeatures: [
      'Employee dashboard with live balances and latest payslip',
      'Leave, medical and overtime requests with approval trails',
      'Admin approvals queue across every request type',
      'Monthly payroll runs, locked once finalised',
      'Payslips, released to employees only after lock',
      'Payoneer export and a policies document store',
    ],
    challenges: [
      {
        challenge:
          'Employees could not see their own locked payslips. The visibility policy subqueried an admin-only table, and that subquery runs with the caller’s privileges, so it silently returned nothing.',
        solution:
          'Moved the check into a SECURITY DEFINER helper that answers only "is this run locked?", so the policy resolves without exposing the company-wide payroll totals on that table.',
      },
      {
        challenge:
          'Approved medical and overtime could be double-counted, paid once in the run that swept them and again in the next.',
        solution:
          'Locking a run stamps each approved item with that run id in the same transaction, so every item feeds exactly one payroll and late approvals roll forward instead of duplicating.',
      },
      {
        challenge:
          'Admin overrides on a payslip, such as days worked, overtime multiplier and custom adjustments, were wiped whenever payroll was recalculated.',
        solution:
          'Made calculation idempotent: it upserts derived figures while preserving admin-entered overrides, so a recalc can be run safely at any point before the period locks.',
      },
    ],
  },

  {
    slug: 'bitsmiths-studio',
    title: 'Bitsmiths Studio',
    client: 'Bitsmiths Studio',
    tagline: 'Agency marketing site and CMS',
    summary: 'Marketing site for a studio that ships MVPs in 30 days.',
    description:
      'The studio marketing site, built on a CMS so case studies, articles and testimonials publish without a deploy.',
    coverImage: '/work/screens/bitsmiths-studio-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/bitsmiths-studio-desktop.webp',
      mobile: '/work/screens/bitsmiths-studio-mobile.webp',
    },
    gallery: [
      {
        title: 'Blog',
        caption: 'Posts and updates published from the CMS onto the homepage.',
        desktop: '/work/screens/bitsmiths-studio-blogs-desktop.webp',
        mobile: '/work/screens/bitsmiths-studio-blogs-mobile.webp',
      },
      {
        title: 'Services',
        caption:
          'The service catalogue, written and ordered by the team in the CMS.',
        desktop: '/work/screens/bitsmiths-studio-services-desktop.webp',
        mobile: '/work/screens/bitsmiths-studio-services-mobile.webp',
      },
      {
        title: 'Pricing',
        caption: 'Plans and the enquiry path at the end of the page.',
        desktop: '/work/screens/bitsmiths-studio-pricing-desktop.webp',
        mobile: '/work/screens/bitsmiths-studio-pricing-mobile.webp',
      },
    ],
    accent: '#22c55e',
    tech: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Directus'],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'React', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS'] },
      { category: 'CMS', tools: ['Directus'] },
    ],
    category: 'Website',
    capabilities: ['Web'],
    services: ['web-design-development', 'mvp-sprint'],
    industry: 'Software agency',
    year: '2025',
    featured: 6,
    headline: { value: '30 days', label: 'from idea to shipped MVP' },
    problem:
      'The studio pitches production-ready MVPs in 30 days to founders comparing it against agencies charging many times more. That claim needs visible proof, and the team needed to publish it without a developer in the loop.',
    approach:
      'Next.js over a Directus CMS, so every content surface is editable. The page is ordered as an argument: promise, proof, objections, one call to action.',
    resultsSummary:
      'The site does the studio’s selling. Case studies, articles, testimonials and FAQs publish from the CMS without a developer in the loop, and the page walks a founder from the 30-day promise to the proof to a single call to action.',
    results: [
      {
        value: '30 days',
        label: 'from brief to shipped MVP',
        detail:
          'The promise the site makes, backed by the case studies it publishes.',
      },
      {
        value: '4',
        label: 'content types publishable without a deploy',
        detail:
          'Case studies, posts, testimonials and FAQs are edited in Directus and go live on save.',
      },
      {
        value: '1',
        label: 'call to action per visit',
        detail:
          'Promise, proof and objections come first, so the enquiry at the end is an informed one.',
      },
    ],
    architecture:
      'Next.js App Router over a Directus headless CMS. Case studies, posts, testimonials and FAQs are CMS collections rendered through shared templates, with media served as WebP via request-time transforms.',
    keyFeatures: [
      'CMS-driven case studies with a shared detail template',
      'Engineering blog',
      'Client testimonials carousel',
      'Pricing and process FAQ',
      'Per-page SEO and OpenGraph metadata',
    ],
    challenges: [
      {
        challenge:
          'Marketing copy, case studies and articles needed to change frequently without a developer in the loop.',
        solution:
          'Modelled every content surface in Directus and rendered it through shared templates, so publishing is a CMS action rather than a deploy.',
      },
      {
        challenge:
          'Case-study imagery is heavy and would otherwise dominate page weight on a marketing site where first impression speed matters.',
        solution:
          'Served all media through Directus with WebP transforms applied per request, so pages ship modern formats without a manual export step.',
      },
    ],
  },

  {
    slug: 'real-estate-management-system',
    title: 'Real Estate Operating System',
    client: 'Confidential (real estate group)',
    tagline: 'Multi-tenant AI platform automating agency operations',
    summary:
      'Multi-tenant AI platform automating real estate agency operations.',
    description:
      'A unified operating system for real estate agencies, bringing CRM, compliance, marketing, document generation and e-signing into one multi-tenant platform.',
    coverImage: '/work/screens/real-estate-management-system-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/real-estate-management-system-desktop.webp',
      mobile: '/work/screens/real-estate-management-system-mobile.webp',
    },
    gallery: [
      {
        title: 'Leasing pipeline',
        caption:
          'Leads scored by the CRM agent and moved through viewing, offer and contract.',
        desktop: '/work/screens/real-estate-management-system-crm-desktop.webp',
        mobile: '/work/screens/real-estate-management-system-crm-mobile.webp',
      },
      {
        title: 'Agreement generation',
        caption:
          'Tenancy agreements generated from templates and sent for e-signature.',
        desktop:
          '/work/screens/real-estate-management-system-documents-desktop.webp',
        mobile:
          '/work/screens/real-estate-management-system-documents-mobile.webp',
      },
      {
        title: 'AI agents',
        caption:
          'CRM, compliance and knowledge agents scoped to each agency’s own data.',
        desktop:
          '/work/screens/real-estate-management-system-agents-desktop.webp',
        mobile:
          '/work/screens/real-estate-management-system-agents-mobile.webp',
      },
    ],
    accent: '#3b82f6',
    tech: [
      'React',
      'Python',
      'FastAPI',
      'LangGraph',
      'OpenAI',
      'Multi-tenant Architecture',
    ],
    techStack: [
      { category: 'Frontend', tools: ['React'] },
      { category: 'Backend', tools: ['Python', 'FastAPI'] },
      { category: 'AI', tools: ['LangGraph', 'OpenAI'] },
      { category: 'Architecture', tools: ['Multi-tenant Architecture'] },
    ],
    category: 'SaaS',
    capabilities: ['AI', 'Cloud & Automation', 'Full-Stack'],
    services: ['ai-automation', 'product-engineering'],
    industry: 'Real estate',
    year: '2025',
    headline: { value: '70%', label: 'less paperwork' },
    problem:
      'Real estate agencies managed CRM, compliance, marketing and document workflows across disconnected tools and manual processes. They had no unified system for client and property management or agreement generation.',
    approach:
      'We built a multi-tenant AI system with specialised CRM, compliance and knowledge agents, then connected them to a marketing module and a complete document generation and e-signing pipeline.',
    resultsSummary:
      'More than thirty agencies now run CRM, compliance, marketing and paperwork on one platform. Agreements generate from templates and go straight to e-signature, and the specialised agents handle the work that used to sit in inboxes.',
    results: [
      {
        value: '30+',
        label: 'agencies on one platform',
        detail:
          'Each with its own CRM integration and workflows, served from a single multi-tenant deployment.',
      },
      {
        value: '70%',
        label: 'less time on documents and agreements',
        detail:
          'Tenancy agreements generate from templates and are sent for e-signature without a person retyping them.',
      },
      {
        value: '3',
        label: 'specialised AI agents',
        detail:
          'CRM, compliance and knowledge agents scoped to each agency’s own data and coordinated by LangGraph.',
      },
    ],
    architecture:
      'A React frontend talks to a Python and FastAPI backend, while LangGraph orchestrates specialised multi-agent workflows powered by OpenAI models. The multi-tenant architecture serves more than 30 agencies from one platform while supporting each agency’s own CRM and workflows.',
    keyFeatures: [
      'CRM agent syncing with agency-specific CRMs',
      'Compliance agent for regulatory workflows',
      'Knowledge agent for pipeline and workflow Q&A',
      'Marketing module for photography booking and brochure ordering',
      'Vendor reporting',
      'Automated document generation and e-signing',
    ],
    challenges: [
      {
        challenge:
          'Each agency used its own CRM and operating workflow, so one fixed integration could not serve every tenant.',
        solution:
          'Put the differences behind agency-specific CRM integrations while keeping the agent workflow and product experience shared across tenants.',
      },
      {
        challenge:
          'CRM, compliance, knowledge and document tasks had to cooperate without turning one long workflow into a fragile chain.',
        solution:
          'Split the work into specialised agents and used LangGraph to coordinate their responsibilities and hand-offs.',
      },
    ],
  },

  {
    slug: 'qa-compliance-agent',
    title: 'Compliance Review Agent',
    client: 'Confidential (audit firm)',
    tagline: 'Clause-level tracked-change findings, generated by AI',
    summary:
      'AI compliance agent generating clause-level tracked-change findings.',
    description:
      'An AI review workflow that checks uploaded reports against established standards and returns clause-level tracked changes with a clear explanation for every finding.',
    coverImage: '/work/screens/qa-compliance-agent-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/qa-compliance-agent-desktop.webp',
      mobile: '/work/screens/qa-compliance-agent-mobile.webp',
    },
    gallery: [
      {
        title: 'Review queue',
        caption:
          'Documents split into clauses and checked against the selected standards.',
        desktop: '/work/screens/qa-compliance-agent-queue-desktop.webp',
        mobile: '/work/screens/qa-compliance-agent-queue-mobile.webp',
      },
      {
        title: 'Findings report',
        caption:
          'Findings by severity, exported as tracked changes and margin comments.',
        desktop: '/work/screens/qa-compliance-agent-report-desktop.webp',
        mobile: '/work/screens/qa-compliance-agent-report-mobile.webp',
      },
      {
        title: 'Standards library',
        caption:
          'The paragraphs every finding cites, with the firm’s own guidance alongside.',
        desktop: '/work/screens/qa-compliance-agent-standards-desktop.webp',
        mobile: '/work/screens/qa-compliance-agent-standards-mobile.webp',
      },
    ],
    accent: '#f59e0b',
    tech: ['Python', 'FastAPI', 'AWS', 'Claude (Anthropic)'],
    techStack: [
      { category: 'Backend', tools: ['Python', 'FastAPI'] },
      { category: 'Cloud', tools: ['AWS'] },
      { category: 'AI', tools: ['Claude (Anthropic)'] },
    ],
    category: 'AI',
    capabilities: ['AI', 'Cloud & Automation'],
    services: ['ai-automation', 'cloud-devops'],
    industry: 'Audit and compliance',
    year: '2025',
    headline: { value: '2x', label: 'faster document review' },
    problem:
      'Manual compliance and audit reviews against established standards were slow and inconsistent between reviewers, with each report taking about a week to complete.',
    approach:
      'We built an agent that checks uploaded reports against an established standards dataset, then generates a findings report with clause-level tracked changes and AI-written comments explaining every flagged issue.',
    resultsSummary:
      'Reviews that took a week now take half that, and every finding cites the clause and the standard behind it. Reviewers spend their time on judgement calls instead of hunting for the paragraph that triggered an issue.',
    results: [
      {
        value: '2x',
        label: 'faster document review',
        detail:
          'Turnaround on a compliance report fell from about a week to roughly half.',
      },
      {
        value: '100%',
        label: 'of findings tied to a clause',
        detail:
          'Each one arrives as a tracked change with the standard it cites and a written explanation.',
      },
      {
        value: '1',
        label: 'review standard for every report',
        detail:
          'The same agent workflow evaluates every document, so results are consistent between reviewers and comparable across reports.',
      },
    ],
    architecture:
      'A Python and FastAPI backend deployed on AWS handles report ingestion and comparison against the standards dataset. Claude powers the review and comment generation, returning findings tied to individual clauses for a traceable review workflow.',
    keyFeatures: [
      'Report upload and comparison against a standards dataset',
      'Clause-level tracked-change findings',
      'AI-generated comments for every finding',
      'Consistent, repeatable review logic across reports',
    ],
    challenges: [
      {
        challenge:
          'Broad AI feedback was not precise enough for reviewers who needed to see exactly which clause triggered a finding.',
        solution:
          'Grounded each check in the standards dataset and returned findings as clause-level tracked changes with an explanation attached.',
      },
      {
        challenge:
          'Reviewer judgement varied between reports, making outcomes difficult to compare and slowing final sign-off.',
        solution:
          'Encoded the review as one repeatable agent workflow so every report is evaluated against the same standards and output structure.',
      },
    ],
  },

  {
    slug: 'ai-interview-assistant',
    title: 'Realtime Voice Interview Assistant',
    client: 'Confidential (recruitment)',
    tagline: 'Live AI voice interviews with automatic transcripts',
    summary:
      'End-to-end AI interview platform with live voice and transcription.',
    description:
      'An end-to-end interview platform that plans, schedules and conducts live AI voice interviews, then delivers the transcript automatically when the session ends.',
    coverImage: '/work/screens/ai-interview-assistant-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/ai-interview-assistant-desktop.webp',
      mobile: '/work/screens/ai-interview-assistant-mobile.webp',
    },
    gallery: [
      {
        title: 'Candidates',
        caption:
          'Every round scored on the same rubric, with live sessions one click away.',
        desktop: '/work/screens/ai-interview-assistant-candidates-desktop.webp',
        mobile: '/work/screens/ai-interview-assistant-candidates-mobile.webp',
      },
      {
        title: 'Interview report',
        caption:
          'Rubric scores, timestamped highlights and a recommendation to review.',
        desktop: '/work/screens/ai-interview-assistant-report-desktop.webp',
        mobile: '/work/screens/ai-interview-assistant-report-mobile.webp',
      },
      {
        title: 'Role setup',
        caption:
          'Question structure, adaptive follow-ups and voice settings per role.',
        desktop: '/work/screens/ai-interview-assistant-roles-desktop.webp',
        mobile: '/work/screens/ai-interview-assistant-roles-mobile.webp',
      },
    ],
    accent: '#ec4899',
    tech: ['Next.js', 'OpenAI Realtime API'],
    techStack: [
      { category: 'Frontend & Backend', tools: ['Next.js'] },
      { category: 'AI', tools: ['OpenAI Realtime API'] },
    ],
    category: 'AI',
    capabilities: ['AI', 'Full-Stack'],
    services: ['ai-automation', 'mvp-sprint'],
    industry: 'Recruitment',
    year: '2025',
    headline: { value: '30+', label: 'interviews completed' },
    problem:
      'Running structured general, podcast-style or recruitment interviews at scale required manual scheduling, live facilitation and transcript handling for every session.',
    approach:
      'We built a platform where users choose an interview type, description, style and custom intro or outro. It conducts the interview live through the OpenAI Realtime API, handles transcription, meeting links and invitations, then delivers the transcript automatically.',
    resultsSummary:
      'Interviews that needed a scheduler, a facilitator and someone to handle the transcript now run end to end on their own. The recruiter picks the format and the questions; the platform books, conducts and documents the session.',
    results: [
      {
        value: '30+',
        label: 'interviews completed on the platform',
        detail:
          'Intern recruitment rounds run live through the AI interviewer, each scored on the same rubric.',
      },
      {
        value: '3',
        label: 'interview formats',
        detail:
          'General, podcast-style and recruitment sessions, each with a custom description, style, intro and outro.',
      },
      {
        value: '0',
        label: 'manual steps after a session ends',
        detail:
          'The transcript is generated live and emailed automatically when the interview closes.',
      },
    ],
    architecture:
      'Next.js powers both the frontend and backend, keeping interview setup, invitations and post-session delivery in one application. The OpenAI Realtime API runs the live voice conversation and transcription, including recruitment sessions with multiple candidates and CVs.',
    keyFeatures: [
      'General, podcast-style and recruitment interview types',
      'Custom interview description, style, intro and outro',
      'Live voice interview with real-time transcription',
      'Multi-candidate and CV support for recruitment sessions',
      'Automated meeting link generation and invitations',
      'Automatic post-interview transcript email',
    ],
    challenges: [
      {
        challenge:
          'A live interview had to keep the spoken conversation and transcript aligned throughout the session.',
        solution:
          'Used the OpenAI Realtime API for both the voice interview and live transcription so they run within the same real-time session.',
      },
      {
        challenge:
          'Recruitment interviews needed to support several candidates and CVs without mixing their context.',
        solution:
          'Structured recruitment sessions around candidate-specific inputs while keeping scheduling, invitations and transcript delivery in one workflow.',
      },
    ],
  },

  {
    slug: 'snobbots',
    title: 'SnobBots',
    client: 'SnobBots',
    tagline: 'Multi-tenant AI support agents for online shops',
    summary: 'Multi-tenant AI chatbot platform.',
    description:
      'Resellers provision AI support agents for their shops in bulk, with each tenant isolated and each answer grounded in that shop’s own content.',
    coverImage: '/work/screens/snobbots-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/snobbots-desktop.webp',
      mobile: '/work/screens/snobbots-mobile.webp',
    },
    gallery: [
      {
        title: 'Handover inbox',
        caption:
          'Conversations the bot could not close, with the order and customer beside them.',
        desktop: '/work/screens/snobbots-inbox-desktop.webp',
        mobile: '/work/screens/snobbots-inbox-mobile.webp',
      },
      {
        title: 'Knowledge base',
        caption:
          'The catalogue, orders API and policies each bot is allowed to answer from.',
        desktop: '/work/screens/snobbots-knowledge-desktop.webp',
        mobile: '/work/screens/snobbots-knowledge-mobile.webp',
      },
      {
        title: 'Shop widget',
        caption:
          'The customer-facing chat as it appears on a client’s storefront.',
        desktop: '/work/screens/snobbots-widget-desktop.webp',
        mobile: '/work/screens/snobbots-widget-mobile.webp',
      },
    ],
    accent: '#06b6d4',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Pinecone', 'RAG', 'LLM'],
    techStack: [
      { category: 'Frontend', tools: ['React'] },
      { category: 'Backend', tools: ['Node.js', 'Express'] },
      { category: 'Database', tools: ['MongoDB', 'Pinecone'] },
      { category: 'AI', tools: ['RAG', 'LLM'] },
    ],
    category: 'AI',
    capabilities: ['AI', 'Cloud & Automation'],
    services: ['ai-automation'],
    industry: 'Ecommerce / Customer support',
    year: '2023-2024',
    headline: { value: '60%', label: 'faster shop setup' },
    problem:
      'Resellers wanted to offer AI support agents to their own customers, but every deployment was bespoke, so onboarding a new shop took days of manual setup.',
    approach:
      'We built a multi-tenant MERN architecture where each shop runs an independent, context-aware agent, and layered automated provisioning on top so resellers could stand up bots in bulk rather than one at a time.',
    resultsSummary:
      'Resellers now stand up AI support agents for their shops in bulk instead of one bespoke deployment at a time. Each bot answers only from its own shop’s catalogue, orders and policies, and hands over to a person when it cannot close a conversation.',
    results: [
      {
        value: '60%',
        label: 'faster shop onboarding',
        detail:
          'Automated provisioning turned a multi-day manual setup into a bulk operation.',
      },
      {
        value: '1',
        label: 'isolated namespace per shop',
        detail:
          'Embeddings are partitioned per tenant in Pinecone, so no bot can ever surface another shop’s content.',
      },
      {
        value: '100%',
        label: 'of answers grounded in the shop’s own content',
        detail:
          'Retrieval runs over the catalogue, orders API and policies the reseller has allowed for that bot.',
      },
    ],
    architecture:
      'MERN: React, an Express and Node.js API, and MongoDB for tenant and conversation data. Pinecone holds per-tenant embeddings so retrieval is scoped to one shop’s knowledge base, and provisioning runs without manual setup.',
    keyFeatures: [
      'Multi-tenant architecture with isolated agents',
      'RAG for context-aware, business-specific answers',
      'Automated bulk bot provisioning',
      'Reseller management dashboard',
      'Embeddable support widget',
    ],
    challenges: [
      {
        challenge:
          'Retrieval across a shared vector index surfaced one shop’s content in another shop’s answers.',
        solution:
          'Partitioned embeddings per tenant in Pinecone so retrieval can only ever reach the requesting shop’s namespace.',
      },
      {
        challenge:
          'Manual per-shop setup made reseller onboarding the bottleneck on growth.',
        solution:
          'Automated provisioning end to end, turning a multi-day manual process into a bulk operation.',
      },
    ],
  },

  {
    slug: 'ai-physiotherapy',
    title: 'AI Physiotherapy Assistant',
    client: 'Confidential (healthcare)',
    tagline: 'Adaptive rehabilitation guided by AI',
    summary: 'Full-stack AI platform for adaptive rehabilitation.',
    description:
      'A connected rehabilitation journey spanning intake, movement assessment, adaptive exercise planning, daily progress and AI-assisted video feedback.',
    coverImage: '/work/screens/ai-physiotherapy-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/ai-physiotherapy-desktop.webp',
      mobile: '/work/screens/ai-physiotherapy-mobile.webp',
    },
    gallery: [
      {
        title: 'Movement assessment',
        caption:
          'Pose analysis on an uploaded clip, with joint angles and form feedback.',
        desktop: '/work/screens/ai-physiotherapy-assessment-desktop.webp',
        mobile: '/work/screens/ai-physiotherapy-assessment-mobile.webp',
      },
      {
        title: 'Eight-week plan',
        caption:
          'Phases, this week’s sessions and every adaptation with its reason.',
        desktop: '/work/screens/ai-physiotherapy-plan-desktop.webp',
        mobile: '/work/screens/ai-physiotherapy-plan-mobile.webp',
      },
      {
        title: 'Clinician view',
        caption:
          'Patients by attention needed and AI plan changes waiting for approval.',
        desktop: '/work/screens/ai-physiotherapy-clinician-desktop.webp',
        mobile: '/work/screens/ai-physiotherapy-clinician-mobile.webp',
      },
    ],
    accent: '#14b8a6',
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'OpenAI'],
    techStack: [
      { category: 'Frontend', tools: ['React'] },
      { category: 'Backend', tools: ['Python', 'FastAPI'] },
      { category: 'AI', tools: ['LangChain', 'OpenAI'] },
    ],
    category: 'AI',
    capabilities: ['AI', 'Full-Stack'],
    services: ['ai-automation'],
    industry: 'Healthcare',
    year: '2024',
    headline: { value: '90%+', label: 'accurate movement checks' },
    problem:
      'The rehabilitation journey was fragmented across manual intake, movement assessment, generic exercise plans and infrequent follow-up. Patients had little guidance between supervised sessions, and plans did not respond quickly to performance.',
    approach:
      'We built the journey around an intake agent, guided movement assessment and automatic exercise plan generation. Daily logs drive plan progression or regression, while uploaded exercise videos receive AI feedback and injury articles inform future plans.',
    resultsSummary:
      'Patients now have guidance every day, not just at supervised sessions. Intake, movement assessment, plan generation and video feedback run as one connected journey, and the plan adapts to how the patient actually performed.',
    results: [
      {
        value: '90%+',
        label: 'accuracy on movement and form checks',
        detail:
          'Pose analysis on uploaded clips returns joint angles and corrective feedback the clinician can review.',
      },
      {
        value: '8 weeks',
        label: 'of plan, adapting daily',
        detail:
          'Daily logs drive progression or regression automatically instead of waiting for the next appointment.',
      },
      {
        value: '1',
        label: 'connected journey from intake to recovery',
        detail:
          'Intake agent, assessment, plan, daily logging and AI video feedback replace four disconnected steps.',
      },
    ],
    architecture:
      'A React frontend connects to a Python and FastAPI backend. LangChain coordinates intake, assessment context and plan generation, with OpenAI producing adaptive guidance. Video uploads feed the form-analysis workflow, and uploaded injury articles provide source material for plan generation.',
    keyFeatures: [
      'Intake agent starting the patient journey',
      'Movement assessment with instructional videos and tutorials',
      'Automatic exercise plan generation',
      'Daily logging with automatic plan progression or regression',
      'Uploaded-video form analysis with AI feedback',
      'Plan generation informed by uploaded injury articles',
    ],
    challenges: [
      {
        challenge:
          'Static exercise plans could not respond when a patient’s daily performance improved or declined.',
        solution:
          'Connected daily logs to progression and regression rules so the plan adapts automatically instead of waiting for manual review.',
      },
      {
        challenge:
          'Plan generation needed injury-specific context rather than relying on generic model knowledge.',
        solution:
          'Made uploaded articles on common injuries available to the generation workflow so recommendations can use relevant source material.',
      },
    ],
  },

  {
    slug: 'new-web-order',
    title: 'New Web Order',
    client: 'New Web Order',
    tagline: 'Company website rebuilt for speed and SEO',
    summary: 'Company website built for performance and SEO.',
    description:
      'A company site rebuilt on Next.js for speed and search. 40% faster, and finally ranking.',
    coverImage: '/work/screens/new-web-order-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/new-web-order-desktop.webp',
      mobile: '/work/screens/new-web-order-mobile.webp',
    },
    gallery: [
      {
        title: 'Projects',
        caption: 'The project index, rebuilt as static pages.',
        desktop: '/work/screens/new-web-order-projects-desktop.webp',
        mobile: '/work/screens/new-web-order-projects-mobile.webp',
      },
      {
        title: 'Services',
        caption: 'Service pages generated from structured content.',
        desktop: '/work/screens/new-web-order-services-desktop.webp',
        mobile: '/work/screens/new-web-order-services-mobile.webp',
      },
      {
        title: 'About',
        caption: 'The company page on the same layout system.',
        desktop: '/work/screens/new-web-order-about-desktop.webp',
        mobile: '/work/screens/new-web-order-about-mobile.webp',
      },
    ],
    accent: '#f97316',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS'] },
    ],
    category: 'Website',
    capabilities: ['Web'],
    services: ['web-design-development'],
    industry: 'Professional services',
    year: '2024',
    headline: { value: '40%', label: 'faster-loading pages' },
    problem:
      'The existing site loaded slowly and ranked poorly, costing the company inbound leads before visitors ever saw the offering.',
    approach:
      'We rebuilt the site on Next.js with TypeScript for type safety and Tailwind for styling, then worked through the performance budget: code splitting, image optimisation and tuned rendering strategies per route.',
    resultsSummary:
      'The rebuilt site loads faster, ranks for the terms the company sells on and puts an enquiry within one scroll on every route. Inbound leads no longer bounce before they see the offering.',
    results: [
      {
        value: '40%',
        label: 'faster page loads',
        detail:
          'Static-first rendering, route-level code splitting and optimised imagery across the site.',
      },
      {
        value: '100%',
        label: 'of routes reach a call to action in one scroll',
        detail:
          'Every page is built to move a visitor from the offering to an enquiry without hunting.',
      },
      {
        value: '0',
        label: 'layout shift from imagery',
        detail:
          'All images serve through next/image with explicit dimensions and modern formats.',
      },
    ],
    architecture:
      'Static-first Next.js App Router build. Routes are pre-rendered where content allows, images are served through next/image with explicit dimensions, and JavaScript is code-split per route to keep the initial payload small.',
    keyFeatures: [
      'Static-first rendering for fast first paint',
      'Route-level code splitting',
      'Optimised, layout-shift-free imagery',
      'SEO metadata across all routes',
      'Fully responsive layout',
    ],
    challenges: [
      {
        challenge:
          'Large marketing imagery dominated the page weight and delayed first paint.',
        solution:
          'Moved all imagery to next/image with explicit dimensions and modern formats, prioritising only the above-the-fold hero.',
      },
    ],
  },
  {
    slug: 'bank-islami-pep',
    title: 'BankIslami PEP Screening',
    client: 'BankIslami, delivered with Aawaz AI',
    tagline: 'Daily adverse-media screening for politically exposed persons',
    summary:
      'An internal web and mobile platform that reads the news every morning and turns it into a risk report for the bank’s compliance team.',
    description:
      'Banks must monitor politically exposed persons and their associates continuously, not just at onboarding. At BankIslami that meant analysts opening dozens of news sites every morning and searching for hundreds of names by hand. We built an end-to-end screening platform: a crawler that fetches the day’s financial and political news, a matching engine that ties articles to the bank’s PEP records, and a review workflow that ends in a signed daily risk report. It ships as a MERN web application for analysts at their desks and a native mobile app for compliance officers on the move.',
    coverImage: '/work/screens/bank-islami-pep-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'app',
    screens: {
      desktop: '/work/screens/bank-islami-pep-desktop.webp',
      mobile: '/work/screens/bank-islami-pep-mobile.webp',
      mobileAlt: '/work/screens/bank-islami-pep-alt.webp',
    },
    gallery: [
      {
        title: 'Review queue',
        caption:
          'Client record and article side by side, so a name match is confirmed or dismissed in seconds.',
        mobile: '/work/screens/bank-islami-pep-review-mobile.webp',
      },
      {
        title: 'Daily risk report',
        caption:
          'The morning’s findings as a signed PDF, with score movement and delivery to Compliance and Risk.',
        mobile: '/work/screens/bank-islami-pep-report-mobile.webp',
      },
      {
        title: 'Sources',
        caption:
          'Every news feed, regulator and court list the crawler reads, with last-run health.',
        mobile: '/work/screens/bank-islami-pep-sources-mobile.webp',
      },
    ],
    accent: '#059669',
    tech: [
      'React',
      'React Native',
      'Vite',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Puppeteer',
      'BullMQ',
      'Redis',
      'JWT',
    ],
    techStack: [
      { category: 'Web app', tools: ['React', 'Vite', 'TypeScript'] },
      { category: 'Mobile app', tools: ['React Native', 'Expo'] },
      { category: 'Styling', tools: ['TailwindCSS'] },
      { category: 'Backend', tools: ['Node.js', 'Express', 'MongoDB'] },
      { category: 'Crawling', tools: ['Puppeteer', 'Cheerio'] },
      { category: 'Jobs', tools: ['BullMQ', 'Redis'] },
      { category: 'Auth & reports', tools: ['JWT', 'PDFKit'] },
    ],
    category: 'Mobile',
    capabilities: ['Mobile', 'Full-Stack', 'AI', 'Cloud & Automation'],
    services: [
      'mobile-app-development',
      'product-engineering',
      'ai-automation',
    ],
    industry: 'Banking / Compliance',
    year: '2025',
    featured: 7,
    headline: { value: '38', label: 'news sources screened daily' },
    problem:
      'Regulators expect banks to keep screening politically exposed persons for as long as the relationship lasts. The compliance team did this by hand: a morning spent across news sites, court lists and gazettes, searching for over a thousand names, then pasting findings into a spreadsheet. Stories were missed, the report landed late, and nobody could show an auditor how a name had been checked.',
    approach:
      'We started with the sources, not the interface: a scheduled crawler that fetches every relevant Pakistani and international outlet at 06:00, normalises the articles and stores them in MongoDB. A matching engine scores each article against the bank’s PEP list using name variants, roles and locations, and only credible matches reach an analyst. The review queue, risk profiles and the generated report were then built once as a component library and shipped to the browser and to iOS and Android.',
    resultsSummary:
      'The compliance team now starts the day with a finished report instead of a morning of searching. Every relevant outlet is read before anyone arrives, only credible matches reach an analyst, and every decision on a name is recorded well enough to show an auditor.',
    results: [
      {
        value: '38',
        label: 'sources screened before the team arrives',
        detail:
          'Roughly 200 articles a day are crawled, normalised and matched against the PEP list from 06:00.',
      },
      {
        value: '30 min',
        label: 'of morning triage, down from four hours',
        detail:
          'Analysts confirm or dismiss scored matches with the client record and article side by side, instead of searching by hand.',
      },
      {
        value: '07:30',
        label: 'daily risk report delivered',
        detail:
          'Where it used to land mid-afternoon, now with a full audit trail per name and delivery to Compliance and Risk.',
      },
      {
        value: '1,240',
        label: 'accounts monitored continuously',
        detail:
          'PEP and related-party accounts screened every day across web and mobile.',
      },
    ],
    architecture:
      'A MERN stack: React with Vite and Tailwind for the analyst dashboard, React Native for the mobile app, and one Express API over MongoDB serving both. A BullMQ worker on Redis runs the crawl at 06:00, fetching sources with Puppeteer where pages are rendered client-side and Cheerio where they are not. Matching is a scoring pipeline over name variants, transliterations, role and city, with a confidence threshold that routes matches to the review queue. Confirmed findings roll into a PDF report generated server-side and delivered by email and push notification.',
    keyFeatures: [
      'Scheduled daily crawl of news, regulator and court sources',
      'Name matching with transliteration and alias handling',
      'Risk score per person with adverse media, litigation and sanctions signals',
      'Review queue with client record and article side by side',
      'Escalation to the MLRO with a full audit trail',
      'Generated daily risk report as a signed PDF',
      'Mobile app with push alerts for high-risk matches',
      'Role-based access for analysts, reviewers and management',
    ],
    challenges: [
      {
        challenge:
          'Names in Urdu and English transliterate many ways, so a strict match missed real stories and a loose one buried analysts in false positives.',
        solution:
          'A scoring pipeline weighs name variants against role, city and known associates, and every match above the threshold shows the analyst exactly which fields agreed.',
      },
      {
        challenge:
          'News sites change their markup without notice, and one silent failure meant a source was missing from the morning report.',
        solution:
          'Each source has a health check and an article-count baseline; a crawl that returns far fewer than usual retries and flags the feed as delayed on the dashboard instead of passing quietly.',
      },
      {
        challenge:
          'The bank needed the same screening on phones for officers who are rarely at a desk, without maintaining two products.',
        solution:
          'Screens were designed once as a shared component set and served by one API, so the web dashboard and the React Native app always show the same data and the same decisions.',
      },
    ],
  },
  {
    slug: 'bidnest-mobile',
    title: 'Bidnest Mobile App',
    client: 'Confidential (student housing marketplace)',
    tagline: 'The bidding marketplace, packaged for iOS and Android',
    summary:
      'The Bidnest marketplace wrapped with Capacitor so students and parents can bid from their phones.',
    description:
      'The same codebase that runs the Bidnest web platform, wrapped with Capacitor into native iOS and Android apps. One team ships the web platform and both app stores from a single repository, and every marketplace flow works inside the native shell without being rebuilt.',
    coverImage: '/work/screens/bidnest-mobile-mobile.webp',
    coverWidth: 780,
    coverHeight: 1688,
    platform: 'app',
    screens: {
      desktop: '/work/screens/bidnest-desktop.webp',
      mobile: '/work/screens/bidnest-mobile-mobile.webp',
      mobileAlt: '/work/screens/bidnest-mobile-alt.webp',
    },
    gallery: [
      {
        title: 'Student dashboard',
        caption: 'Bids, lease steps and services inside the native shell.',
        mobile: '/work/screens/bidnest-mobile-dashboard-mobile.webp',
      },
      {
        title: 'Messaging',
        caption:
          'Threads with landlords and providers, opened by deep link from notifications.',
        mobile: '/work/screens/bidnest-mobile-messages-mobile.webp',
      },
      {
        title: 'Browse',
        caption: 'The map and search from the web platform, tuned for touch.',
        mobile: '/work/screens/bidnest-mobile-browse-mobile.webp',
      },
    ],
    accent: '#38bdf8',
    tech: [
      'Capacitor',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'ShadCN',
      'Supabase',
      'PostgreSQL',
      'WebSockets',
      'Stripe',
      'Resend',
      'Twilio',
      'PostHog',
    ],
    techStack: [
      { category: 'Native shell', tools: ['Capacitor', 'iOS', 'Android'] },
      { category: 'Frontend', tools: ['Next.js', 'TypeScript'] },
      { category: 'Styling', tools: ['TailwindCSS', 'ShadCN'] },
      { category: 'Backend', tools: ['Supabase', 'PostgreSQL'] },
      { category: 'Real-time', tools: ['WebSockets'] },
      { category: 'Payments', tools: ['Stripe'] },
      { category: 'Notifications', tools: ['Resend', 'Twilio'] },
      { category: 'Analytics', tools: ['PostHog'] },
    ],
    category: 'Mobile',
    capabilities: ['Mobile', 'Full-Stack', 'Cloud & Automation'],
    services: ['mobile-app-development', 'product-engineering', 'mvp-sprint'],
    industry: 'Property technology',
    year: '2024',
    anonymised: true,
    headline: { value: '3', label: 'platforms from one build' },
    problem:
      'Students live on their phones. A bid placed from a laptop can be outbid while they are in a lecture, and a browser tab does not wake anyone up. Building two native apps from scratch would have doubled the work for a marketplace that already existed.',
    approach:
      'Rather than rebuild the product natively, we wrapped the existing Next.js application with Capacitor, tuned the bidding and messaging screens for touch and safe areas, and shipped the result to both stores from the same repository as the website.',
    resultsSummary:
      'Bidnest reached the App Store and Google Play without a second codebase or a second team. Students bid, message and pay from their phones with the same flows as the web platform, and a fix ships to all three at once.',
    results: [
      {
        value: '3',
        label: 'platforms from one build',
        detail:
          'The website, the iOS app and the Android app ship from a single repository and release branch.',
      },
      {
        value: '0',
        label: 'features rebuilt for native',
        detail:
          'Real-time bids, messaging and Stripe checkout are the same code that serves the web platform.',
      },
      {
        value: '2',
        label: 'app stores from the same release branch',
        detail:
          'Native navigation, safe-area layouts and an offline screen, so the app behaves like an app rather than a website in a frame.',
      },
    ],
    architecture:
      'Capacitor hosts the production web build inside a native WebView on iOS and Android. Native plugins cover what the browser cannot; everything else, from real-time bids to Stripe checkout, is the same code that serves the web platform, so a fix ships to three platforms at once.',
    keyFeatures: [
      'Native iOS and Android builds from the web codebase',
      'Same bidding, messaging and payment flows as the web platform',
      'Touch-first layouts with safe-area handling',
      'Session kept on device between launches',
      'Deep links from notifications into the exact listing',
      'Offline screen instead of a browser error',
    ],
    challenges: [
      {
        challenge:
          'WebSocket connections drop when the app moves to the background, so bids could arrive late after resume.',
        solution:
          'Reconnect on resume with a full state re-sync, so the listing shows the committed bid history the moment the app returns.',
      },
      {
        challenge:
          'Store review rejects apps that behave like a website in a frame.',
        solution:
          'Native navigation gestures, safe-area layouts and an offline screen, with the web chrome removed inside the shell.',
      },
    ],
  },
  {
    slug: 'tayyab-sohail-portfolio',
    title: 'Tayyab Sohail Portfolio',
    client: 'Tayyab Sohail',
    tagline: 'Case-study portfolio for a senior engineer',
    summary:
      'A personal site where every project is a full case study, generated from one typed data file.',
    description:
      'The portfolio of our founder: a Next.js site where the project grid, every case-study page, the sitemap and the social previews are generated from a single typed data file. It ships as static HTML, animates without hurting load time and books calls through an embedded calendar.',
    coverImage: '/work/screens/tayyab-sohail-portfolio-desktop.webp',
    coverWidth: 2160,
    coverHeight: 1350,
    platform: 'web',
    screens: {
      desktop: '/work/screens/tayyab-sohail-portfolio-desktop.webp',
      mobile: '/work/screens/tayyab-sohail-portfolio-mobile.webp',
    },
    gallery: [
      {
        title: 'Tech stack',
        caption: 'Tools and frameworks, grouped by layer.',
        desktop: '/work/screens/tayyab-sohail-portfolio-stack-desktop.webp',
        mobile: '/work/screens/tayyab-sohail-portfolio-stack-mobile.webp',
      },
      {
        title: 'Contact',
        caption:
          'A message form and an embedded Cal.com booking on one screen.',
        desktop: '/work/screens/tayyab-sohail-portfolio-contact-desktop.webp',
        mobile: '/work/screens/tayyab-sohail-portfolio-contact-mobile.webp',
      },
    ],
    accent: '#10b981',
    tech: [
      'Next.js',
      'TypeScript',
      'React',
      'TailwindCSS',
      'Framer Motion',
      'Cal.com',
      'Vercel',
    ],
    techStack: [
      { category: 'Frontend', tools: ['Next.js', 'TypeScript', 'React'] },
      { category: 'Styling & motion', tools: ['TailwindCSS', 'Framer Motion'] },
      { category: 'Booking', tools: ['Cal.com'] },
      { category: 'Hosting', tools: ['Vercel'] },
    ],
    category: 'Website',
    capabilities: ['Web'],
    services: ['web-design-development', 'mvp-sprint'],
    industry: 'Software engineering',
    year: '2025',
    notable: true,
    headline: { value: '12', label: 'projects in one portfolio' },
    problem:
      'A CV lists technologies; it does not show how a product was built or what changed after it shipped. Most portfolio sites are a grid of thumbnails with nothing behind them, and keeping a dozen project pages consistent by hand is where they fall apart.',
    approach:
      'We treated the portfolio like a product. Every project is a typed record with problem, approach, architecture, features, challenges and outcomes, and the site renders the grid, the case-study pages, the sitemap and the social previews from that one array.',
    resultsSummary:
      'Every project on the site is a full case study rather than a thumbnail, and all of them share one structure because they come from one typed data file. The site ships as static HTML, so the motion costs nothing on load, and a call is one click from any page.',
    results: [
      {
        value: '12',
        label: 'case studies from one typed data file',
        detail:
          'The grid, every case-study page, the sitemap and the social previews render from a single array.',
      },
      {
        value: '0',
        label: 'CMS or database to maintain',
        detail:
          'Every page is built statically at deploy time, and the type checker refuses a build if a section is missing.',
      },
      {
        value: '1',
        label: 'click from any case study to a booked call',
        detail:
          'An embedded Cal.com calendar sits on the contact screen alongside the message form.',
      },
    ],
    architecture:
      'Next.js App Router with static generation for every case-study route. Project data lives in one TypeScript array so the type checker refuses a build when a section is missing. Motion runs on Framer Motion after first paint; call booking is an embedded Cal.com widget.',
    keyFeatures: [
      'Filterable project grid by category and capability',
      'Case-study page generated per project',
      'Previous and next navigation across projects',
      'Sitemap and social images derived from the same data',
      'Embedded call booking',
      'Downloadable résumé',
    ],
    challenges: [
      {
        challenge:
          'Twelve hand-written case studies drifted apart in structure and tone.',
        solution:
          'One typed schema for all projects, with the compiler failing the build when a field is missing.',
      },
      {
        challenge:
          'Animated pages tend to score badly on load and layout stability.',
        solution:
          'Static generation, fonts loaded through next/font and motion that starts only after the first paint.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Homepage showcase, in `featured` order. */
export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured !== undefined)
    .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
}

export function getProjectsBySlugs(slugs: readonly string[]): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

/** Main products: every project not flagged `notable`. */
export function getShowcaseProjects(): Project[] {
  return projects.filter((project) => !project.notable);
}

/** Categories present in `list`, in display order. */
export function getCategories(
  list: readonly Project[] = projects,
): ProjectCategory[] {
  const present = new Set(list.map((project) => project.category));
  return CATEGORY_ORDER.filter((category) => present.has(category));
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length] ?? null,
    next: projects[(index + 1) % projects.length] ?? null,
  };
}

/** Merge German copy over a project, preserving images, tech and ordering. */
function localiseProject(project: Project, locale: Locale): Project {
  if (locale !== 'de') return project;
  const t = projectsDe[project.slug];
  if (!t) return project;

  const { gallery, techStackCategories, ...rest } = t;

  return {
    ...project,
    ...rest,
    gallery: project.gallery.map((screen, index) => {
      const copy = gallery?.[index];
      return copy ? { ...screen, ...copy } : screen;
    }),
    techStack: project.techStack.map((group, index) => {
      const category = techStackCategories?.[index];
      return category ? { ...group, category } : group;
    }),
  };
}

export function getProjects(locale: Locale): Project[] {
  return projects.map((project) => localiseProject(project, locale));
}

export function getProjectBySlugLocalised(
  slug: string,
  locale: Locale,
): Project | undefined {
  const project = getProjectBySlug(slug);
  return project ? localiseProject(project, locale) : undefined;
}

export function getFeaturedProjectsLocalised(locale: Locale): Project[] {
  return getFeaturedProjects().map((project) =>
    localiseProject(project, locale),
  );
}

export function getProjectsBySlugsLocalised(
  slugs: readonly string[],
  locale: Locale,
): Project[] {
  return getProjectsBySlugs(slugs).map((project) =>
    localiseProject(project, locale),
  );
}

export function getShowcaseProjectsLocalised(locale: Locale): Project[] {
  return getShowcaseProjects().map((project) =>
    localiseProject(project, locale),
  );
}

export function getAdjacentProjectsLocalised(
  slug: string,
  locale: Locale,
): { previous: Project | null; next: Project | null } {
  const { previous, next } = getAdjacentProjects(slug);
  return {
    previous: previous ? localiseProject(previous, locale) : null,
    next: next ? localiseProject(next, locale) : null,
  };
}

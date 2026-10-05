import type { Locale } from '@/i18n/config';

import { programDe } from './program.de';

/**
 * The Conscious AI program: three pillars, five themes, four tiers and the
 * role tracks. Drives /conscious-ai and the program sections on the homepage.
 * Background and the full technique split live in
 * `docs/brand/positioning-and-program.md`.
 */

export type PillarId = 'conscious-use' | 'trained-teams' | 'optimized-usage';

export interface Pillar {
  id: PillarId;
  title: string;
  /** One line that reads on from the title. */
  tagline: string;
  body: string;
}

/** One of the five themes every tier follows. */
export interface ProgramTheme {
  title: string;
  body: string;
}

export interface ProgramModule {
  /** Module code, e.g. "T1.3". */
  code: string;
  title: string;
  /** What the lessons cover. */
  focus: string;
  /** What the learner leaves the module with. */
  output: string;
}

export type TierId = 'fundamentals' | 'practitioner' | 'role-tracks' | 'team';

export interface ProgramTier {
  id: TierId;
  name: string;
  /** "Free", "Paid", ... No prices are published. */
  access: string;
  audience: string;
  summary: string;
  /** What a learner has when they stop at this tier. */
  outcome: string;
  /** Short facts for the tier card. */
  highlights: string[];
  modules: ProgramModule[];
}

export interface RoleTrack {
  id: string;
  name: string;
  audience: string;
  /** The three workflows built in the track. */
  workflows: string[];
  flagship?: boolean;
  /** The Builder track is for developers, not knowledge workers. */
  technical?: boolean;
}

export interface Program {
  pillars: Pillar[];
  themes: ProgramTheme[];
  tiers: ProgramTier[];
  roleTracks: RoleTrack[];
  /** Job functions the program is written for. */
  roles: string[];
}

export const program: Program = {
  pillars: [
    {
      id: 'conscious-use',
      title: 'Conscious Use',
      tagline: 'Know when AI helps, and when it does not.',
      body: 'Understand when AI is the right choice, use it deliberately and judge what it gives back before you rely on it.',
    },
    {
      id: 'trained-teams',
      title: 'Trained Teams',
      tagline: 'Practical skill, in every non-technical role.',
      body: 'Role-relevant learning that builds real AI literacy and confidence in marketing, sales, operations, HR, finance and product teams.',
    },
    {
      id: 'optimized-usage',
      title: 'Optimized Usage',
      tagline: 'The smallest system that is still reliable.',
      body: 'The right tool and model for each task, lean workflows and less unnecessary computation, without giving up quality, reliability or safety.',
    },
  ],
  themes: [
    {
      title: 'Why efficiency matters',
      body: 'AI has two bills, a financial one and an environmental one. Both rise with computation nobody needed.',
    },
    {
      title: 'Choosing the right tool',
      body: 'Rules, formulas and search before AI. A lighter model when the result is easy to check.',
    },
    {
      title: 'Prompts and context',
      body: 'Say what you need in the first prompt, and share only the part of the document that matters.',
    },
    {
      title: 'Lean workflows',
      body: 'Every extra AI step or handoff has to earn its place. Stop when the result meets the requirement.',
    },
    {
      title: 'Measurement',
      body: 'Record a baseline, change one thing, compare. A cheaper result is not better if it misses the requirement.',
    },
  ],
  tiers: [
    {
      id: 'fundamentals',
      name: 'AI Fundamentals',
      access: 'Free',
      audience: 'Anyone using AI',
      summary:
        'The entry point. Works with any AI tool and needs no technical background. You see where AI use carries cost, learn to spot waste and leave with one improved workflow.',
      outcome: 'An audited workflow and a personal optimization checklist',
      highlights: ['5 modules', 'Self-paced', 'Any AI tool'],
      modules: [
        {
          code: 'T1.1',
          title: 'Why AI Optimization Matters',
          focus:
            'The two bills of AI, hidden computation, the default trap and tokens as a mental model.',
          output: 'A lean workspace setup and a personal efficiency principle',
        },
        {
          code: 'T1.2',
          title: 'The Right AI for the Task',
          focus:
            'Deterministic logic, lighter and more capable models, modes by purpose and the verifiability principle.',
          output: 'A personal tool and model selection guide',
        },
        {
          code: 'T1.3',
          title: 'Understanding AI Workflow Waste',
          focus:
            'Vague prompts, long chats, whole documents, repeated requests and handoffs nobody owns.',
          output: 'A workflow waste audit and a revised process',
        },
        {
          code: 'T1.4',
          title: 'Designing the Smallest Reliable System',
          focus:
            'Designing around the outcome, a different model per step, stopping once the requirement is met.',
          output: 'A documented lean workflow and a reusable template',
        },
        {
          code: 'T1.5',
          title: 'Measure, Evaluate, Improve',
          focus:
            'Cost, latency, quality and reliability, and the loop of observing, changing one thing and comparing.',
          output: 'An optimization checklist and a measured improvement',
        },
      ],
    },
    {
      id: 'practitioner',
      name: 'Practitioner',
      access: 'Paid',
      audience: 'Daily AI users',
      summary:
        'For people who use AI every day and want measurable savings in their own work. Shows exactly how to apply the principles in ChatGPT, Claude, Gemini and Microsoft Copilot.',
      outcome: 'A personal AI toolkit and the Practitioner certificate',
      highlights: ['6 modules', 'Reviewed capstone', 'Certificate'],
      modules: [
        {
          code: 'T2.1',
          title: 'Know Your Tools and Usage',
          focus:
            'The tool landscape, what counts against plan limits, where to read usage and when an upgrade is cheaper.',
          output: 'A personal usage baseline',
        },
        {
          code: 'T2.2',
          title: 'Workspace Engineering',
          focus:
            'Projects, Custom GPTs and Gems, the instruction formula, and the cut test for every instruction line.',
          output: 'Two working workspaces and 15 instruction templates',
        },
        {
          code: 'T2.3',
          title: 'Advanced Prompt Patterns',
          focus:
            'Showing instead of describing, ask-me-first prompts, chaining, output control, editing instead of regenerating.',
          output: 'A personal library of 10 reusable prompts',
        },
        {
          code: 'T2.4',
          title: 'Files, Data and Knowledge',
          focus:
            'Why files cost more, extracting before asking, reference summaries, and when a formula beats AI.',
          output: 'A reusable reference file and a file-handling checklist',
        },
        {
          code: 'T2.5',
          title: 'Verification and Privacy',
          focus:
            'Where AI goes wrong, how much checking each task deserves, quick checks and what never to paste.',
          output: 'Personal verification and privacy rules',
        },
        {
          code: 'T2.6',
          title: 'Automation for Non-Coders',
          focus:
            'Scheduled prompts, connectors only where they save steps, no-code tools and automation waste.',
          output: 'One working automation with a stopping rule',
        },
        {
          code: 'Capstone',
          title: 'Your Optimized Week',
          focus:
            'Audit three of your real workflows, redesign them and submit a before/after scorecard for review.',
          output: 'The Practitioner certificate',
        },
      ],
    },
    {
      id: 'role-tracks',
      name: 'Role Tracks',
      access: 'Paid add-on',
      audience: 'Specific job roles',
      summary:
        'The techniques applied to one job. Each track finds where AI is wasted in the role, builds three real workflows end to end and closes with a before/after case study.',
      outcome: 'Three working workflows for your role and the role badge',
      highlights: ['9 tracks', '5 modules each', 'Template pack'],
      modules: [
        {
          code: 'T3.1',
          title: 'Find the waste',
          focus: 'Where AI is wasted in this role today.',
          output: 'A role-specific waste map',
        },
        {
          code: 'T3.2 - T3.4',
          title: 'Build three workflows',
          focus:
            'Three real workflows, end to end, each scoped to one job with only the data it needs.',
          output: 'Three working workflows and their templates',
        },
        {
          code: 'T3.5',
          title: 'Prove the change',
          focus: 'A before/after case study on your own work.',
          output: 'The role badge',
        },
      ],
    },
    {
      id: 'team',
      name: 'Team',
      access: 'Paid, for companies',
      audience: 'Companies and team leads',
      summary:
        'Brings the program into an organisation. Staff complete Practitioner and their role tracks while team leads work through six team modules, starting with a live workshop.',
      outcome: 'A team playbook, a one-page AI policy and an ROI report',
      highlights: ['6 team modules', 'Live workshop', 'Monthly scorecard'],
      modules: [
        {
          code: 'T4.1',
          title: 'Team Baseline (live workshop)',
          focus:
            'Which tools and plans each role uses, one week of usage data, and the five biggest waste hotspots.',
          output: 'A team baseline report',
        },
        {
          code: 'T4.2',
          title: 'Shared Standards',
          focus:
            'One library for prompts and workspaces, with owners and versions, where each task loads only its own instructions.',
          output: 'A team prompt and workspace library',
        },
        {
          code: 'T4.3',
          title: 'AI Usage Policy',
          focus:
            'Approved tools, data rules and the outputs a person must check before use.',
          output: 'A one-page AI usage policy',
        },
        {
          code: 'T4.4',
          title: 'Team Workflow Design',
          focus:
            'Who does what between people and AI, when a task escalates, and ending repeated work between colleagues.',
          output: 'Two redesigned team workflows',
        },
        {
          code: 'T4.5',
          title: 'Measurement and ROI',
          focus:
            'A team scorecard for usage, time saved, quality, reliability and estimated energy use, reviewed monthly.',
          output: 'An ROI report template and the first report',
        },
        {
          code: 'T4.6',
          title: 'AI Champions',
          focus:
            'Internal staff who onboard new colleagues and re-audit workflows each quarter as tools change.',
          output: 'A champion guide and re-audit schedule',
        },
      ],
    },
  ],
  roleTracks: [
    {
      id: 'sustainability-esg',
      name: 'Sustainability & ESG',
      audience: 'Sustainability, ESG and compliance teams',
      workflows: [
        'Sustainability report drafting',
        'Supplier and material data checks',
        'Regulation and certification tracking',
      ],
      flagship: true,
    },
    {
      id: 'operations-admin',
      name: 'Operations & Admin',
      audience: 'Operations, office and admin staff',
      workflows: [
        'Email triage and replies',
        'Meeting notes to action items',
        'SOP and process documentation',
      ],
    },
    {
      id: 'sales-support',
      name: 'Sales & Customer Support',
      audience: 'Sales reps, account managers, support agents',
      workflows: [
        'Lead research and outreach',
        'Support reply library',
        'Call notes to CRM',
      ],
    },
    {
      id: 'marketing-content',
      name: 'Marketing & Content',
      audience: 'Marketers, content and social media teams',
      workflows: [
        'Campaign brief to content calendar',
        'One piece into five formats',
        'Brand-voice workspace',
      ],
    },
    {
      id: 'hr-recruiting',
      name: 'HR & Recruiting',
      audience: 'HR teams, recruiters, people managers',
      workflows: [
        'Job descriptions and criteria',
        'CV shortlisting with human review',
        'Onboarding and policy materials',
      ],
    },
    {
      id: 'research-analysis',
      name: 'Research & Analysis',
      audience: 'Analysts, researchers, finance staff',
      workflows: [
        'Source summaries with citations',
        'Spreadsheet analysis, formulas first',
        'Report drafting and review',
      ],
    },
    {
      id: 'freelancers-small-business',
      name: 'Freelancers & Small Business',
      audience: 'Freelancers, solo founders, small teams',
      workflows: [
        'Proposals and quotes',
        'Client communication',
        'Invoices, FAQs and admin',
      ],
    },
    {
      id: 'students-educators',
      name: 'Students & Educators',
      audience: 'Students, teachers, trainers',
      workflows: [
        'Study notes and revision',
        'Practice questions and quizzes',
        'Feedback within integrity rules',
      ],
    },
    {
      id: 'builder',
      name: 'Builder Track',
      audience: 'Developers and teams building AI products',
      workflows: [
        'Token costs, lean architecture and prompt caching',
        'RAG, compression, routing and output control',
        'Semantic caching, batching and energy impact',
      ],
      technical: true,
    },
  ],
  roles: [
    'Marketing & Communications',
    'Sales & Revenue Operations',
    'Customer Success',
    'Operations & HR',
    'Finance & Administration',
    'Product & Project Management',
  ],
};

export function getProgram(locale: Locale): Program {
  return locale === 'de' ? programDe : program;
}

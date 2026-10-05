# Positioning and the Conscious AI program

Reference for anyone writing copy, adding pages or reframing case studies. It
merges the two source documents behind the 2026 repositioning: the positioning
brief and the "AI Optimization Program" course structure.

> **Naming.** The source documents call the company "Feinwerks". The site and
> this repository use **Bullah Labs**. The program is published on the site as
> **Conscious AI** (internal name: AI Optimization Program).

## What changed

Bullah Labs is no longer positioned as a client-services studio that builds
MVPs. It is an **AI enablement company for non-technical knowledge workers**,
with one product, the Conscious AI program. It no longer sells builds: there
is no services page and no careers page. The site is deliberately short:
home, the program, about and contact. The earlier case studies under `/work`
are still routable but are not linked from the nav, homepage, footer or
sitemap.

| Before | Now |
| --- | --- |
| "Products engineered from MVP to scale" | "Work smarter with AI. Stay relevant. Use it responsibly." |
| Pricing plans for builds | No pricing on the site; the program has a free tier and paid tiers without public prices |
| Projects described by features and delivery | Projects described by how little computation, rework and manual effort they need |
| Services lead the site | The program is the only offer; `/services` and `/careers` redirect |

## Where it lives in the code

| Concern | File |
| --- | --- |
| Program content (tiers, modules, role tracks, pillars, themes) | `src/data/program.ts`, German in `src/data/program.de.ts` |
| Program page | `src/app/conscious-ai/page.tsx` |
| Program sections (pillars, tiers, themes, role tracks, audience) | `src/components/sections/conscious-ai.tsx` |
| Home: the problem and the side-by-side task | `src/components/sections/gap.tsx`, `compare.tsx` |
| Contact form interests (the four tiers) | `src/schema/contact.ts` |
| Efficiency lens per case study | `efficiency` on each project in `src/data/projects.ts` and `projects.de.ts` |
| Page copy | `src/i18n/dictionaries/en.ts`, `de.ts` |
| Logo | `src/components/brand/mark.ts`, `logo.tsx`; static files via `scripts/build-brand-assets.mjs` |

`/pricing`, `/services` and `/services/*` redirect to `/conscious-ai`, and
`/careers` to `/about` (see `next.config.ts`).

---

## 1. Positioning

Bullah Labs helps non-technical knowledge workers use AI effectively, build
future-ready skills and reduce unnecessary AI waste. It is industry-agnostic,
with an initial focus on software and SaaS companies.

**Core value**

- **Productivity:** improve efficiency and work quality.
- **Career resilience:** build the confidence and skills to stay professionally relevant.
- **Sustainability:** encourage responsible AI use and avoid unnecessary computation.

**Core promise:** help people use AI effectively, adapt to change and avoid
unnecessary AI waste.

## 2. Target audience

Non-technical and semi-technical knowledge workers who want to use AI to
improve their work without becoming technical experts.

Roles: Marketing and Communications, Sales and Revenue Operations, Customer
Success, Operations and HR, Finance and Administration, Product and Project
Management.

They are curious about AI but unsure how to apply it, want to save time and
improve quality, worry about keeping their skills relevant, prefer practical
guidance over theory, and care about responsible, efficient use.

## 3. Persona: the AI-curious knowledge worker

| | |
| --- | --- |
| Role | Non-technical knowledge worker |
| Industry | Software and SaaS first, other sectors later |
| AI proficiency | Beginner to intermediate |
| Motivation | Improve productivity and remain professionally relevant |
| Main concern | Falling behind or being replaced by AI |
| Learning preference | Practical, accessible, role-specific |

- **Goals:** work more efficiently, improve output quality, build practical AI
  skills and confidence, stay adaptable, use AI responsibly.
- **Pain points:** unsure which tools to use, information overload, little
  practical training or guidance, inconsistent workflows, worries about job
  security, accuracy and responsible use.
- **Needs:** jargon-free education, role-specific examples and workflows,
  guidance on choosing tools, skills to evaluate AI output, practical advice on
  privacy and verification.
- **Success looks like:** more efficient daily workflows, more confidence,
  better work with appropriate human oversight, knowing when AI is useful and
  when it is not.

## 4. Ideal customer profile

Software, SaaS and technology-enabled companies with roughly 100 to 5,000
employees (a starting range to validate), experimenting with or actively
adopting AI, with non-technical knowledge-work teams.

- **Buyers:** L&D, HR, People, Operations and Digital Transformation leaders.
- **Challenges:** uneven AI knowledge, tools available but adoption
  inconsistent, no role-specific training, unrealised productivity, need for
  responsible usage and human oversight.
- **Buying triggers:** rolling out or expanding AI tools, upskilling
  initiatives, low or inconsistent adoption, preparing for workflow change,
  looking for productivity or more efficient AI usage.
- **Buyer priorities:** practical and accessible training, relevance across
  non-technical roles, measurable improvement, scalable rollout, alignment with
  responsible AI policy.

## 5. Market strategy

Start focused, expand broadly.

1. **Initial market:** validate with software and SaaS companies.
2. **Adjacent markets:** consulting, professional services, finance,
   technology-enabled services.
3. **Broader market:** knowledge workers across industries.

Segment by job function, AI maturity, workflow needs, organisational readiness
and business objectives. Industry informs examples; it does not define the
audience.

## 6. Differentiation: three pillars

| Pillar | Meaning |
| --- | --- |
| **Conscious Use** | Know when AI is appropriate, use it deliberately, assess its output. |
| **Trained Teams** | Practical AI literacy and confidence across non-technical roles, through role-relevant learning. |
| **Optimized Usage** | Efficient tool and model selection, lean workflows and less unnecessary computation, without losing quality, reliability or safety. |

**Sustainability rule.** Sustainability is grounded in responsible use and
computational efficiency. Never claim an environmental impact for an
individual prompt. Talk about the cumulative effect of unnecessary usage
across teams, workflows and organisations.

## 7. Messaging

- **Core message:** Work smarter with AI. Stay relevant. Use it responsibly.
- **To employees:** become more productive, confident and future-ready through
  practical AI skills and responsible usage.
- **To employers:** build an AI-capable workforce, improve productivity,
  support responsible adoption and reduce unnecessary AI cost and
  environmental impact.
- **Supporting principle:** AI literacy is knowing when, why and how to use AI
  well, not just how to operate the tools.

Order of emphasis: lead with productivity and practical skills, connect to
career resilience, differentiate through responsible and sustainable use.

## 8. Assumptions still to validate

- Practical AI skills are a meaningful employee priority.
- Career resilience motivates employees to build AI capability.
- Employers need more than tool access to achieve adoption.
- Software and SaaS is a suitable first market.
- Sustainability strengthens the proposition when tied to efficiency.
- Role-specific training beats generic AI education.
- Organisations will invest in structured AI enablement for non-technical teams.

Until these are validated, site copy should not state adoption figures,
savings percentages or learner numbers for the program.

---

## 9. The program

Every tier follows the same five themes: **why efficiency matters, choosing
the right tool, prompts and context, lean workflows, measurement.** Each tier
goes deeper, and a learner can stop at any tier with a complete, usable result.

| Tier | Price | Audience | Outcome |
| --- | --- | --- | --- |
| 1. AI Fundamentals | Free | Anyone using AI | Audited workflow and optimization checklist |
| 2. Practitioner | Paid | Daily AI users | Personal AI toolkit and certificate |
| 3. Role Tracks | Paid add-on | Specific job roles | Three working workflows for the role |
| 4. Team | Paid (B2B) | Companies and team leads | Team playbook, AI policy and ROI report |

### How the techniques are split

Each technique has one home tier. Later tiers build on earlier ones.

- **Tier 1 (free):** habits with instant, visible results in any chat tool.
- **Tier 2:** techniques that need setup in your own tools and pay back weekly.
- **Tier 3:** techniques that only make sense inside a full workflow, plus the
  technical ones in the Builder track.
- **Tier 4:** techniques that matter at company scale.

| Home tier | Technique | How it is taught |
| --- | --- | --- |
| 1 | Token economics | T1.1: what tokens are, why long answers cost more than long questions |
| 1 | Deterministic logic | T1.2: formulas, search and ordinary software before AI |
| 1 | Model routing | T1.2: the verifiability principle; lighter models for easy-to-check tasks |
| 1 | Prompt engineering | T1.3: task, context, constraints and format in the first prompt |
| 1 | Output optimization | T1.3: ask for the length and format you need |
| 1 | Context pruning | T1.3: a new chat for each task |
| 1 | Conversation summarization | T1.3: summarize and restart long threads |
| 1 | Selective retrieval | T1.3: share only the relevant section of a document |
| 1 | Early termination | T1.4: stop once the result meets the requirement |
| 2 | Observability | T2.1: personal usage log and baseline |
| 2 | Prompt optimization | T2.2: lean workspace instructions and the cut test |
| 2 | Prompt caching | T2.2: stable context kept in projects and reused |
| 2 | Semantic caching | T2.3: a saved-answer library instead of regenerating |
| 2 | Efficient data formats | T2.4: Markdown and plain tables instead of full PDFs or JSON |
| 2 | Tool-call optimization | T2.6: connectors only where they save steps |
| 2 | Batching | T2.6: grouping non-urgent tasks |
| 3 | Use-case-specific architecture | Every track: each workflow scoped to one job with only the data it needs |
| 3 | Agent workflow optimization | Every track: end-to-end workflows with no redundant steps |
| 3 | Parallel processing | Every track: independent steps run together |
| 3 | Context compaction | Every track: long projects kept in a running summary |
| 3 | Cascading and verification | Every track: quick first draft, then a check before escalating |
| 3 | RAG optimization | Builder T3.B4: chunking, filters, reranking, limits |
| 3 | Automated compression | Builder T3.B4: filter-then-compress pipeline |
| 3 | Embedding dimension reduction | Builder T3.B4: shorter embeddings, benchmarked |
| 4 | Dynamic prompt retrieval | T4.2: a shared library where each task loads only its own instructions |
| 4 | Team observability and ROI | T4.5: team scorecard, dashboards and savings report |
| 4 | Energy and environmental impact | T4.3 and T4.5: energy-aware procurement, AI Energy Score, footprint reporting |

### Tier 1: AI Fundamentals (free)

Works with any AI tool, no technical background. Five self-paced modules; each
lesson runs problem, example, technique, practice, takeaway.

| Module | Focus | Exercise | Takeaway |
| --- | --- | --- | --- |
| T1.1 Why AI Optimization Matters | The two bills of AI (financial, environmental), hidden computation, the default trap, tokens, setting up before prompting | Set up your AI workspace | A lean workspace setup and a personal efficiency principle |
| T1.2 The Right AI for the Task | Deterministic logic, smaller, specialized and more capable models, modes, the verifiability principle | Match the AI to the task | A personal tool and model selection guide |
| T1.3 Understanding AI Workflow Waste | Prompt, context and retrieval inefficiency, redundant calls, agent steps, human and AI handoffs | Audit your AI workflow | A workflow waste audit and a revised process |
| T1.4 Designing the Smallest Reliable System | Architecture, model routing, parallel execution, early termination, reliability constraints | Build a lean workflow | A documented lean workflow and a reusable template |
| T1.5 Measure, Evaluate, Improve | Cost, latency, quality, reliability, optimization loops, environmental impact | Measure, reflect, improve | An AI optimization checklist and a measured improvement |

Key lines worth reusing in copy:

- Use the minimum computation needed for a reliable result.
- Rules, formulas, spreadsheets and search often beat generative AI for predictable work.
- Easy-to-check, low-risk tasks can use lighter options; high-risk tasks need more care.
- Every extra AI step or handoff must earn its place.
- Efficiency must not reduce quality, accuracy or safety.
- A cheaper result is not better if it misses the requirement.

**Bridge to paid:** a short self-assessment scores the learner on each theme
and recommends the Tier 2 module for their weakest area.

### Tier 2: Practitioner (paid)

For people who use AI every day. Applies the principles in ChatGPT, Claude,
Gemini and Microsoft Copilot, and adds file handling, verification, privacy
and no-code automation.

| Module | Lessons | Exercise | Output |
| --- | --- | --- | --- |
| T2.1 Know Your Tools and Usage | Tool landscape, plan limits, usage screens, when to upgrade | One-week usage log | Usage baseline |
| T2.2 Workspace Engineering | Projects, Custom GPTs, Gems, the instruction formula, memory, the cut test | Build and test 2 workspaces | Workspace template library (15 templates) |
| T2.3 Advanced Prompt Patterns | Examples, ask-first prompts, chaining, output control, edit instead of regenerate | Rewrite 3 real prompts | Personal library of 10 prompts |
| T2.4 Files, Data and Knowledge | File costs, extract-then-ask, reference summaries, spreadsheets, transcripts | Convert one repeat-upload task | Reusable reference file |
| T2.5 Verification and Privacy | Common AI errors, error-cost matrix, quick checks, data safety | Verification rules for 5 tasks | Verification and privacy rules |
| T2.6 Automation for Non-Coders | Scheduled tasks, connectors, no-code tools, automation waste | Automate one weekly task | One working automation |
| Capstone: Your Optimized Week | Audit and redesign 3 real workflows | Before/after scorecard | Practitioner certificate |

### Tier 3: Role Tracks (paid add-on)

Five modules per track plus a template pack: T3.1 finds where AI is wasted in
the role, T3.2 to T3.4 build three real workflows end to end, T3.5 is a
before/after case study and the role badge.

| Track | For | Three workflows |
| --- | --- | --- |
| Sustainability & ESG (flagship) | Sustainability, ESG and compliance teams | Sustainability report drafting; supplier and material data checks; regulation and certification tracking |
| Operations & Admin | Operations, office and admin staff | Email triage and replies; meeting notes to action items; SOP and process documentation |
| Sales & Customer Support | Sales reps, account managers, support agents | Lead research and outreach; support reply library; call notes to CRM |
| Marketing & Content | Marketers, content and social teams | Campaign brief to content calendar; one piece into five formats; brand-voice workspace |
| HR & Recruiting | HR teams, recruiters, people managers | Job descriptions and criteria; CV shortlisting with human review; onboarding and policy materials |
| Research & Analysis | Analysts, researchers, finance staff | Source summaries with citations; spreadsheet analysis; report drafting and review |
| Freelancers & Small Business | Freelancers, solo founders, small teams | Proposals and quotes; client communication; invoices, FAQs and admin |
| Students & Educators | Students, teachers, trainers | Study notes and revision; practice questions and quizzes; feedback within integrity rules |
| Builder (technical) | Developers and teams building AI products | Seven modules: token costs, lean architecture, context and prompt caching, RAG and compression, routing and output control, semantic caching and batching, energy impact; ends in an optimization audit and the Builder certificate |

### Tier 4: Team (paid, B2B)

Staff complete Tier 2 and the relevant role tracks; team leads work through
six team modules, starting with a live workshop. The aim is a consistent,
measurable way of using AI across the team.

| Module | Lessons | Output |
| --- | --- | --- |
| T4.1 Team Baseline (live) | Tools in use, team usage, top waste areas | Baseline report |
| T4.2 Shared Standards | Shared prompt and workspace library, ownership | Team library |
| T4.3 AI Usage Policy | Approved tools, data rules, human review points | One-page policy |
| T4.4 Team Workflow Design | Handoffs, escalation rules, removing duplicate work | 2 redesigned workflows |
| T4.5 Measurement and ROI | Team scorecard, monthly review, reporting savings | ROI report |
| T4.6 AI Champions | Onboarding new staff, quarterly re-audits | Champion guide |

---

## 10. How projects are described

Case studies stay. Each one first **says what the product is**, with the
optimization built into the same sentence, and then names its **optimization
lens**: the one program principle the build demonstrates most clearly.

- `tagline` (cards, homepage showcase): what it is plus the optimization, in
  one line. "AI SEO and content platform that never buys the same data twice."
- `summary` (case-study hero, SEO): one sentence on what it is, one on the
  optimization and its result.
- `efficiency` (panel at the top of the case study): the lens, the claim, the
  mechanism and three techniques.


Four lenses, each tied to a program theme:

| Lens | Principle | Program theme |
| --- | --- | --- |
| Right tool for the task | Rules and ordinary software before AI; a model only where it earns its place | Choosing the right tool |
| Only the needed context | Each request, user or agent gets the data it needs and nothing more | Prompts and context |
| Nothing done twice | Caching, batching, reuse and one source of truth instead of regenerating | Lean workflows |
| Checked before trusted | Output is grounded, traceable or approved by a person where the risk requires it | Measurement and reliability |

Rules for writing a tagline, summary or `efficiency` entry:

1. Use only facts already in the case study. Do not invent savings.
2. Do not imply a project used AI when it did not. A payroll system that is
   pure rules is a "right tool" story precisely because it has no model in it.
3. One claim in the title, the mechanism in the body, three short techniques.

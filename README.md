# Bullah Labs

Company website for **Bullah Labs**: AI enablement for non-technical knowledge
workers through the Conscious AI program, plus lean builds to the same
principles. Offices in Islamabad, Pakistan and Fellbach, Germany.

Positioning, the program structure and the rules for describing projects are
in [docs/brand/positioning-and-program.md](docs/brand/positioning-and-program.md).

Built on Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui,
Framer Motion, Lenis and cobe (globe). Single light theme with a WebGL silk
backdrop, English and German UI (flag switch in the header, cookie-based), works
with zero environment variables; email, database storage, analytics and booking
light up as keys are added.

---

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then fill in what you have
pnpm dev                      # http://localhost:3000
```

Other scripts:

| Script           | What it does                        |
| ---------------- | ----------------------------------- |
| `pnpm build`     | Production build (also typechecks)  |
| `pnpm start`     | Serve the production build          |
| `pnpm typecheck` | `tsc --noEmit`                      |
| `pnpm lint`      | ESLint with auto-fix                |
| `pnpm format`    | Prettier                            |

---

## Environment variables

All optional except `NEXT_PUBLIC_APP_URL`. See [`.env.example`](./.env.example).

| Variable                                             | Enables                                               |
| ---------------------------------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL`                                | Canonical URLs, sitemap, Open Graph, structured data  |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact form delivery by email via Resend        |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Contact form storage in `contact_messages` (see `supabase/migrations`) |
| `NEXT_PUBLIC_CAL_LINK`                               | "Book a call" link on the contact page (`user/event`) |
| `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` | Analytics, loaded only after cookie consent          |

Without Resend or Supabase, contact submissions are validated and logged on
the server so nothing is lost during development.

---

## Where the content lives

Everything visible on the site is data-driven from a handful of typed files.
Edit these; the pages update themselves.

| File                          | Controls                                                                 |
| ----------------------------- | ------------------------------------------------------------------------ |
| `src/config/site.ts`          | Company name, tagline, email, offices, founder, booking link |
| `src/data/projects.ts`        | Every case study: copy, cover image, metrics, stack. Drives `/work`, `/work/[slug]`, the homepage showcase, outcomes and sitemap |
| `src/data/program.ts`         | The Conscious AI program: pillars, themes, tiers, modules and role tracks. Drives `/conscious-ai`, the homepage program sections, the footer and the contact form choices |
| `src/data/values.ts`          | The four principles on the about page                                    |
| `src/data/faqs.ts`            | Questions, tagged `studio` (homepage) or `program` (program page)        |
| `src/data/testimonials.ts`    | Client quotes attributed by role and company, linked to their case studies    |
| `src/app/legal/*/page.tsx`    | Privacy, Terms, Cookie policy, Imprint                                   |
| `src/i18n/dictionaries/*.ts` | UI and marketing copy in English and German (nav, hero, sections, footer) |

### Adding a case study

1. Drop the cover into `public/work/` (keep it under ~1800px wide).
2. Append a `Project` to `src/data/projects.ts`. Set `visual` to
   `render` (3D device render), `screenshot` (gets a browser-frame mockup),
   `mark` (logo on a plate) or `poster` (wide art).
3. Give it a `featured` number to place it in the homepage stack.

### Brand

- Source artwork: `public/brand/logo.jpg`. Run `node scripts/build-brand-assets.mjs` after replacing it to regenerate the square mark and every icon.
- Logo mark and wordmark: `src/components/brand/logo.tsx`
- Favicon frames (rotate every 10 s, plain and ringed): `src/components/brand/favicon-frames.ts`
- Static icons and Open Graph image: `public/icon*.png`, `src/app/opengraph-image.tsx`
- Colour tokens, clipped-corner panels and fill-animation buttons: `src/app/globals.css`
- Motion: `src/components/motion/` (reveal on scroll, text reveal). The preloader, custom cursor, side rail and shader backgrounds were removed.
- Device mockups: `src/components/mockups/` (laptop, phone, browser)

---

## Pages

| Route                         | Notes                                              |
| ----------------------------- | -------------------------------------------------- |
| `/`                           | Hero, figures, project showcase, pillars, one task two ways, stack, globe, how a project runs, testimonials, tiers, FAQ, contact form |
| `/conscious-ai`               | The program: tiers with modules, role tracks, FAQ   |
| `/work`, `/work/[slug]`       | Case studies, each read through an efficiency lens; filterable by lens and category |
| `/about`                      | Story, principles, how a project runs, locations   |
| `/contact`                    | Form (server action, rate limited, honeypot), offices with live clocks |
| `/legal` plus `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/imprint` | Legal hub and policies |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image` | Generated |

---

## Before launch

- Add the full postal address of the Fellbach office plus any register or VAT
  number to `src/app/legal/imprint/page.tsx` once they exist; German law
  requires them for a business site.
- Replace the testimonial `author` roles in `src/data/testimonials.ts` with
  the real names once each client has approved their quote.
- Replace `hello@bullahlabs.com` in `src/config/site.ts` with the real
  inbox once it exists, and set `CONTACT_TO_EMAIL`.
- Have the Terms of Service and Privacy Policy reviewed by counsel; they are
  written as a solid starting point, not legal advice.
- Set `NEXT_PUBLIC_APP_URL` to the production domain, `https://bullahlabs.com`.

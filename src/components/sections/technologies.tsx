import { Marquee } from '@/components/motion/marquee';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { ScrollHighlight } from '@/components/motion/scroll-highlight';

import { getTechMeta } from '@/lib/tech-icons';

import type { Dictionary } from '@/i18n/dictionaries/en';

/** The marquee: a mix of what we build with and what we teach. */
const TOOLS = [
  'Next.js',
  'React',
  'TypeScript',
  'React Native',
  'Flutter',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Supabase',
  'OpenAI',
  'Claude',
  'Google Gemini',
  'Perplexity',
  'GitHub Copilot',
  'Ollama',
  'LangGraph',
  'Hugging Face',
  'n8n',
  'Zapier',
  'Notion',
  'Slack',
  'AWS',
  'Vercel',
  'Docker',
  'Stripe',
  'PostHog',
];

/**
 * Tools per layer, in the same order as `dict.technologies.layers`. Kept to
 * what a non-technical reader may recognise or can look up in one search;
 * deep infrastructure (orchestration, IaC, task queues) stays out on purpose.
 */
const LAYERS = [
  // Websites and web apps
  [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'ShadCN',
    'Framer Motion',
    'Directus',
    'Vercel',
  ],
  // Mobile apps
  [
    'React Native',
    'Expo',
    'Flutter',
    'Swift',
    'Kotlin',
    'iOS',
    'Android',
    'Firebase',
  ],
  // Logic and data
  [
    'Python',
    'FastAPI',
    'Django',
    'Node.js',
    'PostgreSQL',
    'Supabase',
    'Redis',
    'Stripe',
    'Resend',
    'WebSockets',
  ],
  // AI, used with care
  [
    'OpenAI',
    'Claude',
    'Google Gemini',
    'Perplexity',
    'GitHub Copilot',
    'Ollama',
    'OpenRouter',
    'LangGraph',
    'Hugging Face',
    'Pinecone',
  ],
  // Automation
  [
    'n8n',
    'Zapier',
    'Make',
    'Trigger.dev',
    'Notion',
    'Slack',
    'Airtable',
    'Twilio',
  ],
  // Hosting and running
  [
    'AWS',
    'Google Cloud',
    'Vercel',
    'Docker',
    'CI/CD',
    'Monitoring',
    'PostHog',
    'Cal.com',
  ],
];

/**
 * A small tile with the logo in ink, like a printed catalogue. Fifty logos
 * in fifty brand colours read as a rainbow; in one ink they read as a list.
 * Used in the stack list on the services page.
 */
function TechTile({ name }: { name: string }) {
  const { icon: Icon } = getTechMeta(name);

  return (
    <span
      aria-hidden='true'
      className='hidden h-6 w-6 shrink-0 items-center justify-center border border-ink/15 bg-ink/[0.04] text-ink/80 sm:inline-flex'
    >
      <Icon className='h-3.5 w-3.5' />
    </span>
  );
}

/**
 * One entry in the logo strip: glyph and wordmark in a single ink, like a
 * printed client list. Full ink on hover, never colour.
 */
function TechMark({ name }: { name: string }) {
  const { icon: Icon } = getTechMeta(name);

  return (
    <span className='mx-6 inline-flex items-center gap-3 text-ink/55 transition-colors duration-500 hover:text-ink sm:mx-9'>
      <Icon aria-hidden='true' className='h-6 w-6 shrink-0 sm:h-7 sm:w-7' />
      <span className='bl-display whitespace-nowrap text-xl sm:text-2xl'>
        {name}
      </span>
    </span>
  );
}

interface TechnologiesProps {
  dict: Dictionary;
  /** Keep the landing page focused on the tool carousel. */
  carouselOnly?: boolean;
}

/**
 * Tool marquee, optionally followed by a short statement and the stack laid
 * out by layer. Each layer is a hairline cell whose
 * heading, note and tool list sit on shared rows (CSS subgrid), so the rules
 * run straight across the whole grid no matter how long a label wraps.
 */
export function Technologies({
  dict,
  carouselOnly = false,
}: TechnologiesProps) {
  const t = dict.technologies;

  return (
    <section className='bl-rule bg-surface'>
      <div className='bl-container pt-8 sm:pt-12'>
        <Reveal>
          {carouselOnly ? (
            <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8'>
              <h2 className='bl-display text-2xl text-foreground sm:text-3xl'>
                {t.statement}
              </h2>
              <p className='bl-label'>{t.stripLabel}</p>
            </div>
          ) : (
            <p className='bl-kicker'>{t.kicker}</p>
          )}
        </Reveal>
      </div>

      {/* The heading and tools share one paper surface; the carousel is not a
          separate panel with its own fill or dividers. */}
      <div className='mt-4 py-5 sm:mt-6 sm:py-8'>
        <Marquee duration={70}>
          {TOOLS.map((name) => (
            <TechMark key={name} name={name} />
          ))}
        </Marquee>
      </div>

      {!carouselOnly && (
        <>
          <div className='bl-container py-8 sm:py-12'>
            <ScrollHighlight
              text={t.statement}
              className='bl-display max-w-4xl text-display-lg text-ink'
            />
            <Reveal delay={0.15}>
              <p className='mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {t.statementMuted}
              </p>
            </Reveal>
          </div>

          <div className='bl-container pb-8 sm:pb-12'>
            <Reveal>
              <h2 className='bl-display text-2xl text-ink sm:text-3xl'>
                {t.stackLabel}
              </h2>
            </Reveal>

            <Stagger
              stagger={0.07}
              className='mt-5 grid gap-px border bg-line sm:mt-6 sm:grid-cols-2 lg:grid-cols-3'
            >
              {t.layers.map((layer, index) => (
                <StaggerItem
                  key={layer.label}
                  className='grid grid-rows-[auto_auto_1fr] gap-0 bg-surface p-4 sm:row-span-3 sm:grid-rows-subgrid sm:p-6'
                >
                  <div>
                    <h3 className='bl-display text-xl leading-tight text-ink sm:text-2xl'>
                      {layer.label}
                    </h3>
                  </div>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                    {layer.note}
                  </p>
                  <ul className='mt-4 flex flex-wrap content-start gap-x-3 gap-y-1 self-stretch border-t pt-4 sm:gap-1.5'>
                    {LAYERS[index].map((name) => (
                      <li
                        key={name}
                        className='inline-flex max-w-full items-center gap-2 font-mono text-xs text-ink/85 sm:border sm:border-ink/20 sm:bg-surface sm:py-0.5 sm:pl-0.5 sm:pr-2.5 sm:font-sans'
                      >
                        <TechTile name={name} />
                        <span className='truncate'>{name}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </>
      )}
    </section>
  );
}

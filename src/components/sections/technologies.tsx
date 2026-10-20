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
 * Brand colours that are too pale to read on cream paper (yellows, sky
 * blues) get a deeper shade of the same hue. Everything else keeps its
 * official colour.
 */
const PAPER_SAFE: Record<string, string> = {
  React: '#0E8FB8',
  'React Native': '#0E8FB8',
  JavaScript: '#A88F00',
  'Hugging Face': '#B98A00',
  Firebase: '#D9890A',
  'DHL API': '#B88E00',
  Airtable: '#0E8FC9',
  'Tailwind CSS': '#0E93C4',
  TailwindCSS: '#0E93C4',
  Capacitor: '#0E7FD0',
  AWS: '#D9780A',
  'AWS EC2': '#D9780A',
  'AWS Lambda': '#D9780A',
  Claude: '#B8743F',
  'Claude (Anthropic)': '#B8743F',
  Android: '#1FA85E',
  Supabase: '#1FA062',
  LangGraph: '#15976B',
  Automation: '#C58A00',
};

/** The icon and the colour a tech is drawn in on this paper. */
function paperMeta(name: string) {
  const { icon, color } = getTechMeta(name);
  const tint = PAPER_SAFE[name] ?? color;
  return { icon, color: tint === 'currentColor' ? null : tint };
}

/**
 * A small ruled tile with the logo in its brand colour on a wash of the same
 * colour. Logos without a brand colour (Next.js, Vercel, Notion) stay in ink.
 * Used in the stack list on the services page.
 */
function TechTile({ name }: { name: string }) {
  const { icon: Icon, color } = paperMeta(name);

  return (
    <span
      aria-hidden='true'
      className='inline-flex h-7 w-7 shrink-0 items-center justify-center border border-ink/15 bg-ink/[0.05] text-ink'
      style={
        color
          ? {
              color,
              backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)`,
              borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
            }
          : undefined
      }
    >
      <Icon className='h-4 w-4' />
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
export function Technologies({ dict, carouselOnly = false }: TechnologiesProps) {
  const t = dict.technologies;

  return (
    <section className='bl-rule bg-surface'>
      <div className='bl-container pt-10 sm:pt-14'>
        <Reveal>
          {carouselOnly ? (
            <div className='flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8'>
              <h2 className='bl-display text-2xl text-foreground sm:text-3xl'>
                {t.statement}
              </h2>
              <p className='font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground'>
                {t.stripLabel}
              </p>
            </div>
          ) : (
            <p className='bl-kicker'>{t.kicker}</p>
          )}
        </Reveal>
      </div>

      {/* The strip sits on plain paper, not on the band, so the ink marks read as one row. */}
      <div className='mt-6 border-y border-line/70 bg-ink/[0.03] py-6 sm:mt-8 sm:py-8'>
        <Marquee duration={70}>
          {TOOLS.map((name) => (
            <TechMark key={name} name={name} />
          ))}
        </Marquee>
      </div>

      {!carouselOnly && (
        <>
          <div className='bl-container py-10 sm:py-14'>
            <ScrollHighlight
              text={t.statement}
              className='bl-display max-w-4xl text-display-lg text-ink'
            />
            <Reveal delay={0.15}>
              <p className='mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {t.statementMuted}
              </p>
            </Reveal>
          </div>

          <div className='bl-container pb-10 sm:pb-14'>
            <Reveal>
              <h2 className='bl-display text-2xl text-ink sm:text-3xl'>
                {t.stackLabel}
              </h2>
            </Reveal>

            <Stagger
              stagger={0.07}
              className='mt-6 grid gap-px border bg-line sm:mt-8 sm:grid-cols-2 lg:grid-cols-3'
            >
              {t.layers.map((layer, index) => (
                <StaggerItem
                  key={layer.label}
                  className='grid grid-rows-[auto_auto_1fr] gap-0 bg-surface p-5 sm:row-span-3 sm:grid-rows-subgrid sm:p-7'
                >
                  <div className='flex items-baseline justify-between gap-4'>
                    <h3 className='bl-display text-xl leading-tight text-ink sm:text-2xl'>
                      {layer.label}
                    </h3>
                    <span className='shrink-0 font-mono text-[11px] font-semibold tracking-[0.18em] text-brand-text'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                    {layer.note}
                  </p>
                  <ul className='mt-5 flex flex-wrap content-start gap-2 self-stretch border-t pt-5'>
                    {LAYERS[index].map((name) => (
                      <li
                        key={name}
                        className='inline-flex max-w-full items-center gap-2 border border-ink/20 bg-surface py-1 pl-1 pr-3 text-[13px] font-medium text-ink/85'
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

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
 */
function TechTile({ name, size = 'sm' }: { name: string; size?: 'sm' | 'lg' }) {
  const { icon: Icon, color } = paperMeta(name);
  const box = size === 'lg' ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-7 w-7';
  const glyph = size === 'lg' ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4';

  return (
    <span
      aria-hidden='true'
      className={`${box} inline-flex shrink-0 items-center justify-center border border-ink/15 bg-ink/[0.05] text-ink`}
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
      <Icon className={glyph} />
    </span>
  );
}

interface TechnologiesProps {
  dict: Dictionary;
}

/**
 * Tool marquee, then a short statement that fills with ink as you scroll,
 * then the stack laid out by layer. Each layer is a hairline cell whose
 * heading, note and tool list sit on shared rows (CSS subgrid), so the rules
 * run straight across the whole grid no matter how long a label wraps.
 */
export function Technologies({ dict }: TechnologiesProps) {
  const t = dict.technologies;

  return (
    <section className='bl-rule bl-band-stone' data-rail={t.kicker}>
      <div className='bl-container pt-10 sm:pt-14'>
        <Reveal>
          <p className='bl-kicker'>{t.kicker}</p>
        </Reveal>
      </div>

      <div className='mt-6 border-y py-5 sm:mt-8 sm:py-7'>
        <Marquee duration={60}>
          {TOOLS.map((name) => (
            <span
              key={name}
              className='mx-5 inline-flex items-center gap-3 text-ink/75 transition-colors duration-500 hover:text-ink sm:mx-8'
            >
              <TechTile name={name} size='lg' />
              <span className='bl-display whitespace-nowrap text-xl sm:text-2xl'>
                {name}
              </span>
            </span>
          ))}
        </Marquee>
      </div>

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
    </section>
  );
}

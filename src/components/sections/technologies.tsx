import { Marquee } from '@/components/motion/marquee';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { ScrollHighlight } from '@/components/motion/scroll-highlight';

import { getTechMeta } from '@/lib/tech-icons';
import { cn } from '@/lib/utils';

import type { Dictionary } from '@/i18n/dictionaries/en';

/** The dimmed marquee: a mix of what we build with and what we teach. */
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
 * Hairline borders for a grid that is 1 column by default, 2 from `sm`
 * and 3 from `lg`. Later breakpoints override the earlier ones.
 */
function cellClasses(index: number) {
  return cn(
    'flex flex-col py-7 sm:py-9',
    index > 0 && 'border-t',
    // two columns
    index < 2 ? 'sm:border-t-0' : 'sm:border-t',
    index % 2 === 1 ? 'sm:border-l sm:pl-8 sm:pr-0' : 'sm:pl-0 sm:pr-8',
    // three columns
    index < 3 ? 'lg:border-t-0' : 'lg:border-t',
    index % 3 === 0 && 'lg:border-l-0 lg:pl-0 lg:pr-8',
    index % 3 === 1 && 'lg:border-l lg:px-8',
    index % 3 === 2 && 'lg:border-l lg:pl-8 lg:pr-0',
  );
}

interface TechnologiesProps {
  dict: Dictionary;
}

/**
 * Dimmed tool marquee, then a short statement that fills with ink as you
 * scroll, then the stack laid out by layer in hairline columns.
 */
export function Technologies({ dict }: TechnologiesProps) {
  const t = dict.technologies;

  return (
    <section className='bl-rule bl-band-stone' data-rail={t.kicker}>
      <div className='bl-container pt-12 text-center sm:pt-14'>
        <Reveal>
          <p className='bl-kicker bl-kicker-numbered'>{t.kicker}</p>
        </Reveal>
      </div>

      <div className='mt-6 border-b py-6 sm:mt-10 sm:py-8'>
        <Marquee duration={60}>
          {TOOLS.map((name) => {
            const { icon: Icon, color } = getTechMeta(name);
            return (
              <span
                key={name}
                className='mx-9 inline-flex items-center gap-3 text-ink/35 transition-colors duration-500 hover:text-ink'
              >
                <Icon
                  className='h-7 w-7'
                  style={{
                    color: color === 'currentColor' ? undefined : `${color}99`,
                  }}
                />
                <span className='bl-display text-2xl'>{name}</span>
              </span>
            );
          })}
        </Marquee>
      </div>

      <div className='bl-container py-10 sm:py-14'>
        <ScrollHighlight
          text={t.statement}
          className='bl-display max-w-3xl text-display-md text-ink'
        />
        <Reveal delay={0.15}>
          <p className='mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {t.statementMuted}
          </p>
        </Reveal>
      </div>

      <div className='bl-container pb-10 sm:pb-14'>
        <Reveal>
          <p className='bl-kicker'>{t.stackLabel}</p>
        </Reveal>
        <Stagger className='mt-6 grid border-y sm:grid-cols-2 lg:grid-cols-3'>
          {t.layers.map((layer, index) => (
            <StaggerItem key={layer.label} className={cellClasses(index)}>
              <h3 className='bl-display text-2xl text-ink'>{layer.label}</h3>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                {layer.note}
              </p>
              <ul className='mt-4 flex flex-wrap gap-x-5 gap-y-2.5 border-t pt-4 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 sm:pt-6'>
                {LAYERS[index].map((name) => {
                  const { icon: Icon, color } = getTechMeta(name);
                  return (
                    <li
                      key={name}
                      className='flex items-center gap-2.5 text-sm font-medium text-ink/80'
                    >
                      <Icon
                        aria-hidden='true'
                        className='h-4 w-4 shrink-0'
                        style={{
                          color: color === 'currentColor' ? undefined : color,
                        }}
                      />
                      <span className='truncate'>{name}</span>
                    </li>
                  );
                })}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

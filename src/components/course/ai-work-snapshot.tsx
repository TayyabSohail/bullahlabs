'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { joinCourseList } from '@/actions/course-signup';
import { siteConfig } from '@/config/site';
import { PosthogEventKeys } from '@/constants/posthog-events';

const snapshotSchema = z
  .object({
    role: z.string().min(1, 'Choose the field closest to your work.'),
    roleOther: z.string().trim().max(120),
    frequency: z.string().min(1, 'Choose the answer that feels closest.'),
    confidence: z.coerce.number().min(1).max(5),
    efficiency: z.coerce.number().min(1).max(4),
    goal: z.string().min(1, 'Choose the answer that feels closest.'),
  })
  .superRefine((data, context) => {
    if (data.role === 'other' && data.roleOther.length < 2) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['roleOther'],
        message: 'Tell us a little about your field.',
      });
    }
  });

const emailSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address').max(200),
});

type SnapshotValues = z.infer<typeof snapshotSchema>;
type FieldName = keyof SnapshotValues;

const roleTracks: Record<string, string> = {
  operations: 'Operations & Admin',
  sales: 'Sales & Customer Support',
  marketing: 'Marketing & Content',
  hr: 'HR & Recruiting',
  research: 'Research & Analysis',
  education: 'Students & Educators',
  freelance: 'Freelancers & Small Business',
  technical: 'AI Builder',
  other: 'AI Practitioner',
};

const optionMarks: Record<string, string> = {
  operations: '⚙️',
  sales: '💬',
  marketing: '✨',
  hr: '🫶',
  research: '🔎',
  education: '📚',
  freelance: '🚀',
  technical: '⌘',
  other: '🪄',
  rarely: '🌱',
  weekly: '🌤️',
  daily: '⚡',
  constant: '🔥',
  output: '✍️',
  choice: '🧭',
  system: '🧩',
  team: '🤝',
};

const questions: Array<{
  field: FieldName;
  rail: string;
  note: string;
  title: string;
  options: Array<{
    value: string;
    label: string;
    detail?: string;
    emoji?: string;
  }>;
  kind?: 'scale' | 'workflowCards';
}> = [
  {
    field: 'role',
    rail: 'Your work',
    note: '01',
    title: 'Which field is closest to your work?',
    options: [
      { value: 'operations', label: 'Operations & Admin' },
      { value: 'sales', label: 'Sales & Support' },
      { value: 'marketing', label: 'Marketing & Content' },
      { value: 'hr', label: 'HR & Recruiting' },
      { value: 'research', label: 'Research & Analysis' },
      { value: 'education', label: 'Student or Teacher' },
      { value: 'freelance', label: 'Freelancer or Small Business' },
      { value: 'technical', label: 'Developer or Technical' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    field: 'frequency',
    rail: 'Your AI rhythm',
    note: '02',
    title: 'How often does AI show up in your work?',
    options: [
      { value: 'rarely', label: 'Rarely', detail: 'Only now and then' },
      {
        value: 'weekly',
        label: 'A few times a week',
        detail: 'Useful when needed',
      },
      { value: 'daily', label: 'Most days', detail: 'Part of my workflow' },
      {
        value: 'constant',
        label: 'Throughout the day',
        detail: 'Always within reach',
      },
    ],
  },
  {
    field: 'confidence',
    rail: 'Your confidence',
    note: '03',
    title: 'How often does AI give you a useful answer without much rework?',
    kind: 'scale',
    options: [
      { value: '1', label: 'Rarely' },
      { value: '2', label: 'Sometimes' },
      { value: '3', label: 'Often' },
      { value: '4', label: 'Usually' },
      { value: '5', label: 'Almost always' },
    ],
  },
  {
    field: 'efficiency',
    rail: 'Your workflow',
    note: '04',
    title: 'When you use AI, how smooth is the workflow?',
    // Keep this scale deliberately different from confidence above: people
    // should make a fresh choice about workflow friction, not feel as though
    // they are adjusting the same slider twice.
    kind: 'workflowCards',
    options: [
      {
        value: '1',
        label: 'I keep re-explaining',
        detail: 'The same context has to be pasted or clarified again.',
        emoji: '🔁',
      },
      {
        value: '2',
        label: 'I often restart',
        detail: 'Useful work gets lost across several attempts.',
        emoji: '↩️',
      },
      {
        value: '3',
        label: 'Mostly one clear pass',
        detail: 'I usually get to a useful result without much repetition.',
        emoji: '✅',
      },
      {
        value: '4',
        label: 'My context carries through',
        detail: 'The workflow feels clear, connected and easy to continue.',
        emoji: '✨',
      },
    ],
  },
  {
    field: 'goal',
    rail: 'Your next move',
    note: '05',
    title: 'What would make AI more useful for you?',
    options: [
      {
        value: 'output',
        label: 'Better output',
        detail: 'Clearer, more useful first drafts',
      },
      {
        value: 'choice',
        label: 'Clearer choices',
        detail: 'Knowing when AI is the right tool',
      },
      {
        value: 'system',
        label: 'A repeatable system',
        detail: 'Less friction every week',
      },
      {
        value: 'team',
        label: 'A stronger team approach',
        detail: 'More consistency across the work',
      },
    ],
  },
];

function Rail({ step }: { step: number }) {
  return (
    <aside className='bl-card-ink relative hidden px-5 py-3 sm:px-7 sm:py-8 lg:block'>
      <span
        aria-hidden='true'
        className='absolute -right-16 -top-16 h-48 w-48 animate-pulse rounded-full bg-brand/30 blur-3xl'
      />
      <span
        aria-hidden='true'
        className='absolute -bottom-20 -left-12 h-40 w-40 animate-pulse rounded-full bg-brand-2/20 blur-3xl [animation-delay:700ms]'
      />
      <p className='relative font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-2'>
        <span className='mr-2 inline-block h-1.5 w-1.5 animate-ping rounded-full bg-brand' />{' '}
        Conscious AI
      </p>
      <h2 className='bl-display relative mt-4 hidden max-w-[9ch] text-3xl leading-[1.05] text-white sm:block'>
        Work smarter. Stay in charge.
      </h2>
      <p className='relative mt-4 hidden max-w-xs text-xs leading-relaxed text-white/65 sm:block'>
        A quick look at the habits that can make AI work better for you.
      </p>
      <div className='relative mt-4 hidden border border-white/15 bg-white/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 sm:inline-flex sm:mt-6'>
        Building your signal profile
      </div>
      <ol className='relative mt-2 flex gap-1 sm:mt-6 sm:block sm:space-y-1'>
        {questions.map((question, index) => {
          const done = index < step;
          const active = index === step;
          return (
            <li
              key={question.field}
              className={cn(
                'relative flex flex-1 gap-3 px-1 py-1 transition-all duration-300 sm:px-2 sm:py-2',
                active && 'bg-white/[0.08] sm:-translate-x-1',
              )}
            >
              {index < questions.length - 1 && (
                <span
                  className={cn(
                    'absolute left-[17px] top-8 hidden h-[calc(100%-10px)] w-px sm:block',
                    done ? 'bg-brand' : 'bg-white/20',
                  )}
                />
              )}
              <span
                className={cn(
                  'relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px]',
                  active
                    ? 'border-brand bg-brand text-brand-foreground ring-4 ring-brand/15'
                    : done
                      ? 'border-brand bg-brand text-brand-foreground'
                      : 'border-white/30 bg-transparent text-white/45',
                )}
              >
                {done ? <Check className='h-3 w-3' /> : index + 1}
              </span>
              <span
                className={cn(
                  'sr-only pt-0.5 text-xs sm:not-sr-only',
                  active
                    ? 'font-semibold text-white'
                    : done
                      ? 'text-white/75'
                      : 'text-white/40',
                )}
              >
                {question.rail}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

function MobileRail({ step }: { step: number }) {
  const progress = (step / (questions.length - 1)) * 100;

  return (
    <aside className='bl-card-ink px-4 py-3.5 lg:hidden'>
      <div className='flex items-center justify-between gap-4'>
        <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-2'>
          Your progress
        </p>
        <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-white/55'>
          Step {step + 1} of {questions.length}
        </p>
      </div>
      <ol
        aria-label={`Step ${step + 1} of ${questions.length}`}
        className='relative mx-auto mt-3 flex w-full max-w-xs justify-between'
      >
        <li
          aria-hidden='true'
          className='absolute left-3.5 right-3.5 top-3.5 h-0.5 bg-white/20'
        >
          <span
            className='block h-full bg-brand transition-[width] duration-500'
            style={{ width: `${progress}%` }}
          />
        </li>
        {questions.map((question, index) => {
          const done = index < step;
          const active = index === step;
          return (
            <li
              key={question.field}
              className='relative z-10 flex h-7 w-7 items-center justify-center'
            >
              <span
                aria-current={active ? 'step' : undefined}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] font-semibold transition-colors',
                  active
                    ? 'border-brand bg-brand text-brand-foreground ring-4 ring-brand/20'
                    : done
                      ? 'border-brand bg-brand text-brand-foreground'
                      : 'border-white/30 bg-[#1d1a17] text-white/55',
                )}
              >
                {done ? <Check className='h-3.5 w-3.5' /> : index + 1}
              </span>
            </li>
          );
        })}
      </ol>
      <p className='mt-3 text-center text-xs font-medium text-white/75'>
        {questions[step].rail}
      </p>
    </aside>
  );
}

function EmailGate({
  values,
  onComplete,
  restart,
}: {
  values: SnapshotValues;
  onComplete: () => void;
  restart: () => void;
}) {
  const signupId = useId();
  const searchParams = useSearchParams();
  const signup = useForm<z.infer<typeof emailSchema>>({
    resolver: standardSchemaResolver(emailSchema),
    mode: 'onChange',
    defaultValues: { email: '' },
  });
  const { execute, isExecuting } = useAction(joinCourseList, {
    onSuccess: onComplete,
    onError: () =>
      signup.setError('email', {
        message: 'We could not process your email. Please try again.',
      }),
  });
  const enrol = (data: z.infer<typeof emailSchema>) => {
    const result = emailSchema.safeParse(data);
    if (!result.success) {
      void signup.trigger();
      return;
    }
    execute({
      email: result.data.email,
      source: 'conscious-ai:snapshot',
      utmCampaign: searchParams.get('utm_campaign')?.trim() || undefined,
      assessment: values,
      website: '',
    });
  };
  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail step={questions.length - 1} />
      <div className='bg-surface p-5 sm:p-7 sm:py-10'>
        <p className='font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-text'>
          One last step
        </p>
        <h2 className='bl-display mt-4 max-w-xl text-4xl text-foreground sm:text-5xl'>
          Your AI snapshot is ready.
        </h2>
        <p className='mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground'>
          Add your email to reveal your personalised scores and get the free
          Conscious AI lessons when they open.
        </p>
        <form
          id={signupId}
          onSubmit={signup.handleSubmit(enrol)}
          className='mt-7 flex max-w-xl flex-col gap-3 sm:flex-row'
        >
          <label htmlFor={`${signupId}-email`} className='sr-only'>
            Email address
          </label>
          <input
            id={`${signupId}-email`}
            type='email'
            autoComplete='email'
            placeholder='Your email address'
            disabled={isExecuting}
            {...signup.register('email')}
            className='!h-14 min-h-14 w-full min-w-0 flex-1 rounded-2xl border-2 border-line bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-brand focus:ring-2 focus:ring-brand/20'
          />
          <button
            type='submit'
            disabled={!signup.formState.isValid || isExecuting}
            className='bl-btn bl-btn-primary inline-flex h-14 items-center justify-center gap-2 rounded-full px-6 text-[10px] font-semibold uppercase tracking-[0.14em] disabled:opacity-45'
          >
            {isExecuting ? 'Calculating your results...' : 'Reveal my snapshot'}{' '}
            <ArrowRight className='h-4 w-4' />
          </button>
        </form>
        {signup.formState.errors.email && (
          <p className='mt-2 text-sm text-red-600'>
            {signup.formState.errors.email.message}
          </p>
        )}
        <div className='mt-5 flex flex-wrap items-center justify-between gap-4'>
          <button
            type='button'
            onClick={restart}
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground'
          >
            <RotateCcw className='h-3.5 w-3.5' /> Start again
          </button>
        </div>
      </div>
    </div>
  );
}

function ScoreCard({
  label,
  value,
  text,
  delay,
}: {
  label: string;
  value: number;
  text: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;
    let startTime: number | undefined;
    const timeout = window.setTimeout(() => {
      const animate = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / 900, 1);
        setDisplayValue(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = window.requestAnimationFrame(animate);
      };
      frame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [delay, reduceMotion, value]);

  return (
    <div className='rounded-2xl border border-line bg-background p-3 text-center shadow-[0_14px_30px_hsl(var(--ink)_/_0.06)] sm:rounded-3xl sm:p-5'>
      <motion.div
        aria-label={`${label}: ${value} out of 100`}
        className='mx-auto grid h-24 w-24 place-items-center rounded-full p-2 shadow-inner sm:h-36 sm:w-36'
        initial={
          reduceMotion
            ? false
            : {
                background:
                  'conic-gradient(hsl(var(--brand)) 0%, hsl(var(--muted)) 0% 100%)',
              }
        }
        animate={{
          background: `conic-gradient(hsl(var(--brand)) ${value}%, hsl(var(--muted)) ${value}% 100%)`,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.9,
          delay: reduceMotion ? 0 : delay / 1000,
          ease: 'easeOut',
        }}
      >
        <div className='grid h-full w-full place-items-center rounded-full bg-background'>
          <span className='bl-display text-3xl text-foreground sm:text-5xl'>
            {displayValue}
          </span>
        </div>
      </motion.div>
      <p className='mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:mt-4'>
        {label}
      </p>
      <p className='mt-1 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm'>
        {text}
      </p>
    </div>
  );
}

function Result({
  values,
  restart,
}: {
  values: SnapshotValues;
  restart: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [isCalculating, setIsCalculating] = useState(!reduceMotion);
  const track = roleTracks[values.role] ?? 'AI Practitioner';
  const scores = [
    {
      label: 'Confidence',
      value: values.confidence * 20,
      text:
        values.confidence >= 4
          ? 'You usually reach useful answers.'
          : 'Clearer context will improve your results.',
    },
    {
      label: 'Efficiency',
      value: values.efficiency * 25,
      text:
        values.efficiency >= 4
          ? 'Your workflow is already fairly lean.'
          : 'Reusable setup can remove extra rounds.',
    },
  ];

  useEffect(() => {
    if (reduceMotion) return;
    const timeout = window.setTimeout(() => setIsCalculating(false), 1300);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail step={questions.length} />
      <div className='bg-surface p-4 sm:p-7'>
        {isCalculating ? (
          <div className='flex min-h-[320px] flex-col items-center justify-center text-center sm:min-h-[390px]'>
            <motion.div
              aria-hidden='true'
              className='h-20 w-20 rounded-full border-[5px] border-brand/15 border-t-brand'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
            />
            <p className='mt-7 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-text'>
              Calculating results
            </p>
            <p className='mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              Turning your answers into a practical AI work profile.
            </p>
          </div>
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className='font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-text'>
              Your AI snapshot
            </p>
            <h2 className='bl-display mt-3 text-3xl text-foreground sm:mt-4 sm:text-5xl'>
              {track}
            </h2>
            <div className='mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-5'>
              {scores.map(({ label, value, text }, index) => (
                <ScoreCard
                  key={label}
                  label={label}
                  value={value}
                  text={text}
                  delay={index * 180}
                />
              ))}
            </div>
            <div className='mt-5 border-t border-line pt-4 sm:mt-7 sm:pt-5'>
              <div
                role='status'
                className='flex items-start gap-3 rounded-2xl bg-brand-soft/35 p-4'
              >
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground'>
                  <CheckCircle2 className='h-5 w-5' />
                </span>
                <div>
                  <p className='font-semibold text-foreground'>
                    Your AI course is coming.
                  </p>
                  <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                    Better results. Smoother workflows. We&apos;ll email you
                    when it launches.
                  </p>
                </div>
              </div>
              <div className='mt-5'>
                <p className='text-sm font-semibold text-foreground'>
                  Join the community
                </p>
                <div className='mt-3 grid grid-cols-2 gap-2 sm:gap-4'>
                  <a
                    href={siteConfig.community.reddit}
                    target='_blank'
                    rel='noreferrer'
                    className='bl-card group flex min-h-32 flex-col justify-between border-[#ff4500] bg-[#fff7f2] p-2.5 shadow-[3px_3px_0_0_#ff4500] transition-colors hover:bg-[#fff0e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:min-h-48 sm:p-5 sm:shadow-[4px_4px_0_0_#ff4500]'
                  >
                    <span>
                      <span className='flex items-center justify-between gap-3'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4500] text-white sm:h-10 sm:w-10'>
                          <FaRedditAlien className='h-5 w-5 sm:h-6 sm:w-6' />
                        </span>
                        <span className='border border-[#ff4500]/25 bg-[#ff4500]/10 px-1.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-[#b93400] sm:px-2 sm:text-[9px] sm:tracking-[0.12em]'>
                          r/BullahLabs
                        </span>
                      </span>
                      <span className='bl-display mt-2 block text-lg text-foreground sm:mt-5 sm:text-2xl'>
                        Reddit
                      </span>
                      <span className='mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block'>
                        Share ideas and join the conversation.
                      </span>
                    </span>
                    <span className='mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#c93a00] sm:mt-5 sm:gap-2 sm:text-sm'>
                      Visit <ArrowRight className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
                    </span>
                  </a>
                  <a
                    href={siteConfig.community.discord}
                    target='_blank'
                    rel='noreferrer'
                    className='bl-card group flex min-h-32 flex-col justify-between border-[#5865f2] bg-[#f5f5ff] p-2.5 shadow-[3px_3px_0_0_#5865f2] transition-colors hover:bg-[#eeeeff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:min-h-48 sm:p-5 sm:shadow-[4px_4px_0_0_#5865f2]'
                  >
                    <span>
                      <span className='flex items-center justify-between gap-3'>
                        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#5865f2] text-white sm:h-10 sm:w-10'>
                          <FaDiscord className='h-5 w-5 sm:h-6 sm:w-6' />
                        </span>
                        <span className='border border-[#5865f2]/25 bg-[#5865f2]/10 px-1.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-[#3f48b7] sm:px-2 sm:text-[9px] sm:tracking-[0.12em]'>
                          Bullah Labs
                        </span>
                      </span>
                      <span className='bl-display mt-2 block text-lg text-foreground sm:mt-5 sm:text-2xl'>
                        Discord
                      </span>
                      <span className='mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block'>
                        Meet others building better AI habits.
                      </span>
                    </span>
                    <span className='mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#4651ca] sm:mt-5 sm:gap-2 sm:text-sm'>
                      Join <ArrowRight className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
                    </span>
                  </a>
                </div>
              </div>
              <div className='mt-6 border-t border-line pt-4'>
                <button
                  type='button'
                  onClick={restart}
                  className='inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground'
                >
                  <RotateCcw className='h-3.5 w-3.5' /> Start again
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/** Mirrors the supplied assessment reference: an anchored left rail and a calm question workspace. */
export function AiWorkSnapshot() {
  const formId = useId();
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [emailGate, setEmailGate] = useState(false);
  const [complete, setComplete] = useState(false);
  const posthog = usePostHog();
  const searchParams = useSearchParams();
  const form = useForm<SnapshotValues>({
    resolver: standardSchemaResolver(snapshotSchema),
    mode: 'onChange',
    defaultValues: {
      role: '',
      roleOther: '',
      frequency: '',
      confidence: 3,
      efficiency: 3,
      goal: '',
    },
  });
  const question = questions[step];

  useEffect(() => {
    if (
      (question.field === 'confidence' || question.field === 'efficiency') &&
      !form.getValues(question.field)
    ) {
      form.setValue(question.field, 3, { shouldValidate: true });
    }
  }, [form, question.field]);

  const next = async () => {
    const valid = await form.trigger(
      question.field === 'role' ? ['role', 'roleOther'] : question.field,
    );
    if (!valid) return;
    if (step < questions.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    const result = snapshotSchema.safeParse(form.getValues());
    if (!result.success) {
      await form.trigger();
      return;
    }
    setEmailGate(true);
  };

  const revealSnapshot = () => {
    const values = form.getValues();
    posthog?.capture(PosthogEventKeys.AI_SNAPSHOT_COMPLETED, {
      source: 'conscious-ai:snapshot',
      role: values.role,
      role_track: roleTracks[values.role] ?? 'AI Practitioner',
      frequency: values.frequency,
      goal: values.goal,
      confidence_score: values.confidence * 20,
      efficiency_score: values.efficiency * 25,
      utm_campaign: searchParams.get('utm_campaign')?.trim() || undefined,
    });
    setEmailGate(false);
    setComplete(true);
  };

  const restart = () => {
    form.reset();
    setStep(0);
    setStarted(false);
    setEmailGate(false);
    setComplete(false);
  };

  if (complete) return <Result values={form.getValues()} restart={restart} />;

  if (emailGate)
    return (
      <EmailGate
        values={form.getValues()}
        onComplete={revealSnapshot}
        restart={restart}
      />
    );

  if (!started)
    return (
      <div className='bl-card mx-auto w-full max-w-3xl overflow-hidden bg-surface'>
        <div className='relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden p-6 text-center sm:min-h-[390px] sm:p-10'>
          <span
            aria-hidden='true'
            className='absolute -left-20 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl'
          />
          <span
            aria-hidden='true'
            className='absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-brand-2/10 blur-3xl'
          />
          <div className='relative inline-flex w-fit items-center gap-2 border border-brand/30 bg-brand-soft/35 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text'>
            <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-brand' />
            Your AI work stats
          </div>
          <h2 className='bl-display relative mt-5 max-w-lg text-4xl leading-[1.02] text-foreground sm:text-5xl'>
            What&apos;s your AI work score?
          </h2>
          <p className='relative mt-4 text-sm text-muted-foreground sm:text-base'>
            Five quick taps reveal your Confidence and Workflow scores.
          </p>
          <div className='relative mt-8'>
            <motion.button
              type='button'
              onClick={() => setStarted(true)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className='bl-btn bl-btn-primary inline-flex h-14 items-center gap-3 px-8 text-base font-semibold shadow-[6px_6px_0_hsl(var(--brand)_/_0.34)]'
            >
              Reveal my scores <ArrowRight className='h-5 w-5' />
            </motion.button>
          </div>
        </div>
      </div>
    );

  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail step={step} />
      <MobileRail step={step} />
      <form
        id={formId}
        onSubmit={(event) => {
          event.preventDefault();
          void next();
        }}
        className='flex flex-col bg-surface p-4 sm:p-7'
      >
        <div className='flex items-start justify-between gap-5'>
          <div>
            <div className='hidden items-center gap-2 border border-brand/30 bg-brand-soft/35 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text lg:inline-flex'>
              <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-brand' />{' '}
              Live AI profile
            </div>
            <h2 className='bl-display max-w-2xl text-2xl leading-tight text-foreground lg:mt-4 lg:text-4xl'>
              {question.title}
            </h2>
          </div>
          <span className='hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand via-brand to-brand-2 font-mono text-[10px] font-semibold text-brand-foreground shadow-[0_0_0_5px_hsl(var(--brand)_/_0.12)] lg:flex'>
            <span>{question.note}</span>
          </span>
        </div>
        <Controller
          name={question.field}
          control={form.control}
          render={({ field, fieldState }) => {
            const isScale = question.kind === 'scale';
            const isWorkflowCards = question.kind === 'workflowCards';
            if (question.kind === 'scale') {
              const selected = Math.min(
                5,
                Math.max(1, Number(field.value) || 3),
              );
              const selectedOption = question.options[selected - 1];
              const selectedPercent = ((selected - 1) / 4) * 100;
              return (
                <div className='mt-6 max-w-2xl duration-500 animate-in fade-in slide-in-from-bottom-3'>
                  <div className='border border-brand/25 bg-brand-soft/30 p-5 sm:p-6'>
                    <div className='flex items-center justify-between gap-4'>
                      <p className='bl-display text-2xl text-foreground sm:text-3xl'>
                        {selectedOption.label}
                      </p>
                      <span className='font-mono text-xs font-semibold text-brand-text'>
                        {selected}/5
                      </span>
                    </div>
                    <input
                      type='range'
                      min='1'
                      max='5'
                      step='1'
                      value={selected}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                      className='bl-snapshot-slider mt-7 w-full'
                      style={{
                        background: `linear-gradient(to right, hsl(var(--brand)) 0%, hsl(var(--brand)) ${selectedPercent}%, hsl(var(--line)) ${selectedPercent}%, hsl(var(--line)) 100%)`,
                      }}
                      aria-label={question.title}
                    />
                    <div className='mt-5 grid grid-cols-5 gap-1.5'>
                      {question.options.map((option) => {
                        const value = Number(option.value);
                        const active = value === selected;
                        return (
                          <button
                            key={option.value}
                            type='button'
                            aria-pressed={active}
                            onClick={() => field.onChange(value)}
                            className={cn(
                              'min-h-12 border px-1.5 py-2 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
                              active
                                ? 'border-brand bg-brand text-brand-foreground'
                                : 'border-line bg-background text-muted-foreground hover:border-brand hover:text-foreground',
                            )}
                          >
                            <span className='block font-mono text-xs font-semibold'>
                              {value}
                            </span>
                            <span className='mt-0.5 hidden text-[10px] leading-tight sm:block'>
                              {option.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {fieldState.error && (
                    <p className='mt-3 text-sm font-medium text-red-600'>
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <div
                key={question.field}
                className={cn(
                  'mt-4 grid grid-cols-2 gap-2 duration-500 animate-in fade-in slide-in-from-bottom-3 sm:mt-6 sm:gap-3',
                  isWorkflowCards ? 'sm:grid-cols-2' : 'sm:grid-cols-2',
                  !isWorkflowCards &&
                    question.options.length > 4 &&
                    'grid-cols-3 lg:grid-cols-3',
                )}
              >
                {question.options.map((option) => {
                  const active = String(field.value) === option.value;
                  return (
                    <motion.button
                      key={option.value}
                      type='button'
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.32,
                        delay: question.options.indexOf(option) * 0.055,
                      }}
                      whileHover={{ y: -6, rotate: active ? 0 : -0.4 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        field.onChange(
                          isScale || isWorkflowCards
                            ? Number(option.value)
                            : option.value,
                        )
                      }
                      className={cn(
                        'group relative overflow-hidden border border-line bg-background p-2.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:p-4',
                        isScale
                          ? 'min-h-16 p-2 text-center'
                          : isWorkflowCards
                            ? 'min-h-[5.25rem] sm:min-h-28 sm:p-5'
                            : 'min-h-[5.25rem] sm:min-h-24',
                        active
                          ? 'border-brand bg-brand-soft/55 shadow-[5px_5px_0_hsl(var(--brand)_/_0.2)] ring-2 ring-brand/40'
                          : 'hover:border-brand/60 hover:bg-brand-soft/20 hover:shadow-[4px_4px_0_hsl(var(--brand)_/_0.16)]',
                      )}
                    >
                      <span
                        aria-hidden='true'
                        className={cn(
                          'absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/0 blur-2xl transition-colors duration-500',
                          active ? 'bg-brand/25' : 'group-hover:bg-brand/10',
                        )}
                      />
                      {!isScale && !isWorkflowCards && (
                        <span
                          className={cn(
                            'mb-2 flex h-7 w-7 items-center justify-center text-sm sm:mb-3 sm:h-8 sm:w-8',
                            active
                              ? 'bg-gradient-to-br from-brand to-brand-2 text-brand-foreground shadow-lg'
                              : 'bg-muted text-muted-foreground group-hover:bg-brand-soft group-hover:text-brand-text',
                          )}
                        >
                          {active ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <span className='text-base leading-none'>
                              {optionMarks[option.value] ?? '✦'}
                            </span>
                          )}
                        </span>
                      )}
                      {isWorkflowCards && (
                        <span
                          className={cn(
                            'mb-2 flex h-7 w-7 items-center justify-center rounded-full text-sm sm:mb-4 sm:h-9 sm:w-9 sm:text-lg',
                            active
                              ? 'bg-brand text-brand-foreground'
                              : 'bg-muted text-muted-foreground',
                          )}
                        >
                          <span aria-hidden='true'>{option.emoji}</span>
                          <span className='sr-only'>Option {option.value}</span>
                        </span>
                      )}
                      <span
                        className={cn(
                          'block text-xs font-semibold leading-tight sm:text-sm',
                          isScale
                            ? 'text-sm text-foreground'
                            : 'text-sm text-foreground',
                        )}
                      >
                        {isScale ? option.value : option.label}
                      </span>
                      {isScale && (
                        <span className='mt-1 hidden text-[10px] text-muted-foreground sm:block'>
                          {option.label}
                        </span>
                      )}
                      {option.detail && (
                        <span className='mt-2 hidden text-xs leading-relaxed text-muted-foreground sm:block'>
                          {option.detail}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
                {question.field === 'role' &&
                  String(field.value) === 'other' && (
                    <div className='col-span-full border border-brand/30 bg-brand-soft/25 p-4'>
                      <label
                        htmlFor={`${formId}-role-other`}
                        className='text-sm font-semibold text-foreground'
                      >
                        What field are you in?
                      </label>
                      <Controller
                        name='roleOther'
                        control={form.control}
                        render={({
                          field: otherField,
                          fieldState: otherState,
                        }) => (
                          <>
                            <input
                              id={`${formId}-role-other`}
                              {...otherField}
                              placeholder='e.g. Legal, healthcare, design...'
                              className='mt-3 h-11 w-full border border-line bg-surface px-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'
                            />
                            {otherState.error && (
                              <p className='mt-2 text-sm font-medium text-red-600'>
                                {otherState.error.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    </div>
                  )}
                {fieldState.error && (
                  <p className='col-span-full text-sm font-medium text-red-600'>
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            );
          }}
        />
        <div className='sticky bottom-0 z-10 -mx-4 mt-4 flex items-center justify-between gap-5 border-t border-line bg-surface/95 px-4 py-3 backdrop-blur lg:static lg:mx-0 lg:mt-6 lg:bg-transparent lg:px-0 lg:pt-5 lg:backdrop-blur-none'>
          {step > 0 ? (
            <button
              type='button'
              onClick={() => setStep((current) => current - 1)}
              className='inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground'
            >
              <ArrowLeft className='h-4 w-4' /> Back
            </button>
          ) : (
            <span />
          )}
          <button
            type='submit'
            disabled={
              !form.watch(question.field) || form.formState.isSubmitting
            }
            className='bl-btn bl-btn-ink inline-flex h-11 items-center gap-3 px-5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45'
          >
            {step === questions.length - 1 ? 'See my snapshot' : 'Next'}{' '}
            <ArrowRight className='h-4 w-4' />
          </button>
        </div>
      </form>
    </div>
  );
}

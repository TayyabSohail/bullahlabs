'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Radar, RotateCcw } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useId, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaDiscord, FaRedditAlien } from 'react-icons/fa';
import * as z from 'zod';

import { joinCourseList } from '@/actions/course-signup';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import { PosthogEventKeys } from '@/constants/posthog-events';
import type { Dictionary } from '@/i18n/dictionaries/en';

type SnapshotCopy = Dictionary['snapshot'];

/** The answers, with the field errors in the visitor's language. */
const createSnapshotSchema = (m: SnapshotCopy['errors']) =>
  z.object({
    role: z.string().min(1, m.role),
    frequency: z.string().min(1, m.option),
    confidence: z.coerce.number().min(1).max(5),
    efficiency: z.coerce.number().min(1).max(4),
    goal: z.string().min(1, m.option),
  });

const createEmailSchema = (m: SnapshotCopy['errors']) =>
  z.object({ email: z.string().trim().email(m.email) });

type SnapshotSchema = ReturnType<typeof createSnapshotSchema>;
type SnapshotValues = z.infer<SnapshotSchema>;
type FieldName = keyof SnapshotValues;
type EmailValues = z.infer<ReturnType<typeof createEmailSchema>>;

const roleTracks: Record<string, string> = {
  operations: 'Operations & Admin',
  sales: 'Sales & Customer Support',
  marketing: 'Marketing & Content',
  hr: 'HR & Recruiting',
  research: 'Research & Analysis',
  education: 'Students & Educators',
  freelance: 'Freelancers & Small Business',
  technical: 'AI Builder',
  product: 'Product & Design',
  finance: 'Finance & Accounting',
  legal: 'Legal & Compliance',
  healthcare: 'Healthcare & Care',
  consulting: 'Consulting & Client Services',
  logistics: 'Logistics & Supply Chain',
  hospitality: 'Hospitality & Events',
  nonprofit: 'Nonprofit & Community',
  government: 'Public Service',
  founder: 'Founder & Leadership',
  creator: 'Creative & Media',
  developer: 'AI Builder',
  data: 'Research & Analysis',
  designer: 'Product & Design',
  project_manager: 'Operations & Admin',
  customer_success: 'Sales & Customer Support',
  recruiter: 'HR & Recruiting',
  accountant: 'Finance & Accounting',
  writer: 'Creative & Media',
  manager: 'Founder & Leadership',
  analyst: 'Research & Analysis',
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

interface Question {
  field: FieldName;
  note: string;
  kind?: 'scale' | 'workflowCards';
  rail: string;
  title: string;
  options: Array<{
    value: string;
    label: string;
    detail?: string;
    emoji?: string;
  }>;
}

/** What each step is. The words come from `dict.snapshot.questions`, in this order. */
const QUESTION_SHAPE: Array<Pick<Question, 'field' | 'note' | 'kind'>> = [
  { field: 'role', note: '01' },
  { field: 'frequency', note: '02' },
  { field: 'confidence', note: '03', kind: 'scale' },
  // Keep this scale deliberately different from confidence above: people
  // should make a fresh choice about workflow friction, not feel as though
  // they are adjusting the same slider twice.
  { field: 'efficiency', note: '04', kind: 'workflowCards' },
  { field: 'goal', note: '05' },
];

/** The emoji on the four workflow cards, by answer value. */
const workflowMarks: Record<string, string> = {
  '1': '🔁',
  '2': '↩️',
  '3': '→',
  '4': '✨',
};

function buildQuestions(copy: SnapshotCopy): Question[] {
  return QUESTION_SHAPE.map((shape, index) => {
    const words = copy.questions[index];
    return {
      ...shape,
      rail: words.rail,
      title: words.title,
      options: words.options.map((option) =>
        shape.kind === 'workflowCards'
          ? { ...option, emoji: workflowMarks[option.value] }
          : { ...option },
      ),
    };
  });
}

function Rail({
  step,
  questions,
  copy,
}: {
  step: number;
  questions: Question[];
  copy: SnapshotCopy['rail'];
}) {
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
        {copy.brand}
      </p>
      <h2 className='bl-display relative mt-4 hidden max-w-[9ch] text-3xl leading-[1.05] text-white sm:block'>
        {copy.title}
      </h2>
      <p className='relative mt-4 hidden max-w-xs text-xs leading-relaxed text-white/65 sm:block'>
        {copy.body}
      </p>
      <div className='relative mt-4 hidden border border-white/15 bg-white/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 sm:mt-6 sm:inline-flex'>
        {copy.answers}
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

function MobileRail({
  step,
  questions,
  copy,
}: {
  step: number;
  questions: Question[];
  copy: SnapshotCopy['mobile'];
}) {
  const progress = (step / (questions.length - 1)) * 100;
  const stepLabel = copy.step
    .replace('{n}', String(step + 1))
    .replace('{total}', String(questions.length));

  return (
    <aside className='bl-card-ink px-4 py-3.5 lg:hidden'>
      <div className='flex items-center justify-between gap-4'>
        <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-2'>
          {copy.progress}
        </p>
        <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-white/55'>
          {stepLabel}
        </p>
      </div>
      <ol
        aria-label={stepLabel}
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
  questions,
  copy,
}: {
  values: SnapshotValues;
  onComplete: () => void;
  restart: () => void;
  questions: Question[];
  copy: SnapshotCopy;
}) {
  const formId = useId();
  const searchParams = useSearchParams();
  const emailSchema = useMemo(
    () => createEmailSchema(copy.errors),
    [copy.errors],
  );
  const emailForm = useForm<EmailValues>({
    resolver: standardSchemaResolver(emailSchema),
    mode: 'onChange',
    defaultValues: { email: '' },
  });
  const { execute, isExecuting } = useAction(joinCourseList, {
    onSuccess: onComplete,
    onError: ({ error }) => {
      emailForm.setError('email', {
        message:
          error.validationErrors?.fieldErrors?.email?.[0] ??
          error.serverError ??
          copy.errors.emailSave,
      });
    },
  });

  const submit = (data: EmailValues) => {
    const parsed = emailSchema.safeParse(data);
    if (!parsed.success) {
      void emailForm.trigger();
      return;
    }
    execute({
      email: parsed.data.email,
      source: 'conscious-ai:snapshot',
      utmCampaign: searchParams.get('utm_campaign')?.trim() || undefined,
      assessment: values,
      trap: '',
    });
  };

  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail
        step={questions.length - 1}
        questions={questions}
        copy={copy.rail}
      />
      <div className='flex min-h-[360px] items-center bg-surface p-5 sm:p-10'>
        <div className='w-full max-w-lg'>
          <p className='font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand-text'>
            {copy.gate.kicker}
          </p>
          <h2 className='bl-display mt-4 text-4xl leading-[0.95] text-foreground sm:text-5xl'>
            {copy.gate.title}
          </h2>
          <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
            {copy.gate.body}
          </p>
          <form
            id={formId}
            onSubmit={emailForm.handleSubmit(submit)}
            className='mt-7 flex flex-col gap-3 sm:flex-row'
          >
            <label className='sr-only' htmlFor={`${formId}-email`}>
              {copy.gate.email}
            </label>
            <input
              id={`${formId}-email`}
              type='email'
              autoComplete='email'
              placeholder={copy.gate.placeholder}
              disabled={isExecuting}
              aria-invalid={Boolean(emailForm.formState.errors.email)}
              {...emailForm.register('email')}
              style={{ minHeight: '3.5rem' }}
              className='min-w-0 flex-1 border border-line bg-surface px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-brand/60 disabled:opacity-60'
            />
            <button
              type='submit'
              disabled={!emailForm.formState.isValid || isExecuting}
              className='h-14 border-2 border-ink bg-brand px-6 font-mono text-xs font-black uppercase tracking-[0.12em] text-brand-foreground shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isExecuting ? copy.gate.preparing : copy.gate.submit}
            </button>
          </form>
          {emailForm.formState.errors.email && (
            <p className='mt-2 text-sm text-red-600'>
              {emailForm.formState.errors.email.message}
            </p>
          )}
          <button
            type='button'
            onClick={restart}
            className='mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground'
          >
            <RotateCcw className='h-3.5 w-3.5' /> {copy.gate.restart}
          </button>
        </div>
      </div>
    </div>
  );
}

function Result({
  values,
  restart,
  questions,
  copy,
}: {
  values: SnapshotValues;
  restart: () => void;
  questions: Question[];
  copy: SnapshotCopy;
}) {
  const t = copy.result;
  const reduceMotion = useReducedMotion();
  const [isCalculating, setIsCalculating] = useState(!reduceMotion);
  const confidenceScore = values.confidence * 20;
  const workflowScore = values.efficiency * 25;
  const scores = [
    {
      label: t.confidence,
      score: confidenceScore,
      description: values.confidence >= 4 ? t.confidenceHigh : t.confidenceLow,
    },
    {
      label: t.efficiency,
      score: workflowScore,
      description: values.efficiency >= 4 ? t.efficiencyHigh : t.efficiencyLow,
    },
  ];
  const resultHeading =
    confidenceScore >= 80 && workflowScore >= 75
      ? t.headings.both
      : confidenceScore >= 60
        ? t.headings.confidence
        : workflowScore >= 75
          ? t.headings.workflow
          : t.headings.neither;

  useEffect(() => {
    if (reduceMotion) return;
    const timeout = window.setTimeout(() => setIsCalculating(false), 1100);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail step={questions.length} questions={questions} copy={copy.rail} />
      <div className='bg-surface p-4 sm:p-5'>
        {isCalculating ? (
          <div className='flex min-h-[340px] items-center justify-center bg-surface p-6 text-center sm:min-h-[390px]'>
            <div>
              <span
                className='mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand border-t-transparent motion-safe:animate-spin'
                aria-hidden
              />
              <p className='bl-display mt-6 text-3xl text-foreground sm:text-4xl'>
                {t.preparing}
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className='bl-display text-3xl text-foreground sm:text-4xl'>
              {resultHeading}
            </h2>
            <div className='mt-5 grid grid-cols-2 gap-3'>
              {scores.map(({ label, score, description }) => (
                <ScoreCard
                  key={label}
                  label={label}
                  score={score}
                  description={description}
                />
              ))}
            </div>
            <div className='mt-4 space-y-2'>
              <a
                href={paths.contact}
                className='group flex items-center justify-between gap-4 border-2 border-ink bg-ink px-4 py-3 text-white transition-colors hover:bg-ink/90'
              >
                <span className='text-sm font-semibold'>{t.helpTitle}</span>
                <span className='inline-flex shrink-0 items-center font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-brand-2'>
                  {t.helpCta}{' '}
                  <ArrowRight className='ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
                </span>
              </a>
              <a
                href='#course'
                className='group flex items-center justify-between gap-4 border border-line bg-background px-4 py-3 transition-colors hover:bg-brand-soft/35'
              >
                <span>
                  <span className='text-sm font-semibold text-foreground'>
                    {t.courseTitle}
                  </span>
                </span>
                <span className='inline-flex shrink-0 items-center font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-brand-text'>
                  {t.courseCta}{' '}
                  <ArrowRight className='ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
                </span>
              </a>
            </div>
            <div className='mt-4 border-t border-line pt-4'>
              <div>
                <p className='text-sm font-semibold text-foreground'>
                  {t.community}
                </p>
                <div className='mt-2 grid grid-cols-2 gap-2'>
                  <a
                    href={siteConfig.community.reddit}
                    target='_blank'
                    rel='noreferrer'
                    className='group flex h-11 items-center justify-between border border-[#ff4500] bg-[#fff7f2] px-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#fff0e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60'
                  >
                    <span className='inline-flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#ff4500] text-white'>
                        <FaRedditAlien className='h-4 w-4' />
                      </span>
                      Reddit
                    </span>
                    <span className='text-[#c93a00]'>
                      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                    </span>
                  </a>
                  <a
                    href={siteConfig.community.discord}
                    target='_blank'
                    rel='noreferrer'
                    className='group flex h-11 items-center justify-between border border-[#5865f2] bg-[#f5f5ff] px-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#eeeeff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60'
                  >
                    <span className='inline-flex items-center gap-2'>
                      <span className='flex h-6 w-6 items-center justify-center rounded-full bg-[#5865f2] text-white'>
                        <FaDiscord className='h-4 w-4' />
                      </span>
                      Discord
                    </span>
                    <span className='text-[#4651ca]'>
                      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                    </span>
                  </a>
                </div>
              </div>
              <div className='mt-4 border-t border-line pt-3'>
                <button
                  type='button'
                  onClick={restart}
                  className='inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground'
                >
                  <RotateCcw className='h-3.5 w-3.5' /> {copy.result.restart}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ScoreCard({
  label,
  score,
  description,
}: {
  label: string;
  score: number;
  description: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - score / 100);

  return (
    <div className='border-2 border-ink bg-background p-3 text-center shadow-[3px_3px_0_0_hsl(var(--brand)/.7)] sm:p-4'>
      <div className='relative mx-auto grid h-24 w-24 place-items-center sm:h-28 sm:w-28'>
        <svg
          viewBox='0 0 100 100'
          className='h-full w-full -rotate-90'
          aria-hidden
        >
          <circle
            cx='50'
            cy='50'
            r={radius}
            fill='none'
            stroke='hsl(var(--line))'
            strokeWidth='7'
          />
          <motion.circle
            cx='50'
            cy='50'
            r={radius}
            fill='none'
            stroke='hsl(var(--brand))'
            strokeWidth='7'
            strokeLinecap='square'
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          />
        </svg>
        <div className='absolute inset-0 grid place-items-center'>
          <p className='bl-display text-3xl leading-none text-foreground sm:text-4xl'>
            {score}
            <span className='ml-0.5 text-sm text-muted-foreground'>%</span>
          </p>
        </div>
      </div>
      <p className='mt-3 text-xs font-bold text-foreground sm:text-sm'>
        {label}
      </p>
      <p className='mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs'>
        {description}
      </p>
    </div>
  );
}

/** Mirrors the supplied assessment reference: an anchored left rail and a calm question workspace. */
export function AiWorkSnapshot({ dict }: { dict: Dictionary }) {
  const copy = dict.snapshot;
  const questions = useMemo(() => buildQuestions(copy), [copy]);
  const snapshotSchema = useMemo(
    () => createSnapshotSchema(copy.errors),
    [copy.errors],
  );
  const formId = useId();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [emailGate, setEmailGate] = useState(false);
  const [complete, setComplete] = useState(false);
  const [roleCatalogOpen, setRoleCatalogOpen] = useState(false);
  const [roleSearch, setRoleSearch] = useState('');
  const [efficiencyChosen, setEfficiencyChosen] = useState(false);
  const posthog = usePostHog();
  const searchParams = useSearchParams();
  const form = useForm<SnapshotValues>({
    resolver: standardSchemaResolver(snapshotSchema),
    mode: 'onChange',
    defaultValues: {
      role: '',
      frequency: '',
      confidence: 3,
      goal: '',
    },
  });
  const question = questions[step];

  useEffect(() => {
    if (question.field === 'confidence' && !form.getValues(question.field)) {
      form.setValue(question.field, 3, { shouldValidate: true });
    }
  }, [form, question.field]);

  const next = async () => {
    const valid = await form.trigger(question.field);
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
    setRoleCatalogOpen(false);
    setRoleSearch('');
    setEfficiencyChosen(false);
  };

  if (complete)
    return (
      <Result
        values={form.getValues()}
        restart={restart}
        questions={questions}
        copy={copy}
      />
    );

  if (emailGate)
    return (
      <EmailGate
        values={form.getValues()}
        onComplete={revealSnapshot}
        restart={restart}
        questions={questions}
        copy={copy}
      />
    );

  if (!started)
    return (
      <div className='bl-card mx-auto grid w-full overflow-hidden lg:grid-cols-[0.72fr_1.28fr]'>
        <div className='group relative overflow-hidden bg-ink p-7 text-left text-white sm:p-10 lg:p-12'>
          <span
            aria-hidden='true'
            className='absolute -left-24 -top-20 h-64 w-64 rounded-full border border-brand/30 shadow-[0_0_0_3rem_hsl(var(--brand)/0.06),0_0_0_6rem_hsl(var(--brand)/0.03)]'
          />
          <span className='relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand bg-brand/10 text-brand-2 shadow-[0_0_0_7px_hsl(var(--brand)/0.10),3px_3px_0_0_hsl(var(--brand-2))] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'>
            <span
              aria-hidden='true'
              className='absolute inset-1 rounded-full border border-dashed border-brand/60 transition-transform duration-700 group-hover:rotate-180'
            />
            <Radar className='relative h-7 w-7' aria-hidden />
          </span>
          <h2 className='bl-display relative mt-7 max-w-sm text-5xl leading-[0.94] text-white sm:text-6xl'>
            {copy.intro.title}
          </h2>
        </div>
        <div className='flex flex-col justify-center bg-surface p-7 sm:p-10 lg:p-12'>
          <p className='font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-text'>
            {copy.intro.kicker}
          </p>
          <h2 className='bl-display mt-5 max-w-xl text-4xl leading-[0.98] text-foreground sm:text-5xl'>
            {copy.intro.heading}
          </h2>
          <p className='mt-5 max-w-lg text-base leading-relaxed text-muted-foreground'>
            {copy.intro.body}
          </p>
          <motion.button
            type='button'
            onClick={() => setStarted(true)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className='group relative mx-auto mt-8 inline-flex h-16 w-full items-center justify-center gap-4 overflow-hidden border-2 border-ink bg-brand px-7 font-mono text-[13px] font-black uppercase tracking-[0.16em] text-brand-foreground shadow-[6px_6px_0_hsl(var(--ink)_/_0.9)] transition-[box-shadow,background-color] hover:bg-brand-2 hover:shadow-[8px_8px_0_hsl(var(--ink)_/_0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 sm:mx-0 sm:w-auto sm:min-w-80'
          >
            <span className='relative'>{copy.intro.cta}</span>
            <ArrowRight className='relative h-5 w-5 transition-transform group-hover:translate-x-1' />
          </motion.button>
        </div>
        <div className='hidden'>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className='relative w-full overflow-hidden border border-ink bg-background p-5 shadow-[5px_5px_0_0_hsl(var(--ink)/0.85)]'
          >
            <div
              aria-hidden='true'
              className='absolute -right-9 -top-9 h-28 w-28 rounded-full border border-brand/40'
            />
            <div className='relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em]'>
              <span className='text-muted-foreground'>{copy.intro.score}</span>
              <span className='flex h-2 w-2 rounded-full bg-brand motion-safe:animate-pulse' />
            </div>
            <div className='relative mt-6 flex items-end gap-3 border-b border-ink/15 pb-5'>
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='bl-display text-7xl leading-none text-brand-text'
              >
                ?
              </motion.span>
              <span className='pb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>
                {copy.intro.waiting}
              </span>
            </div>
            <div className='relative mt-5 space-y-4'>
              {copy.intro.bars.map((label, index) => (
                <div key={label}>
                  <div className='flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-foreground'>
                    <span>{label}</span>
                    <span className='text-brand-text'>?</span>
                  </div>
                  <div className='mt-2 h-1.5 overflow-hidden bg-ink/10'>
                    <motion.span
                      animate={
                        reduceMotion
                          ? { width: '62%' }
                          : { width: ['28%', '82%', '48%', '68%'] }
                      }
                      transition={{
                        duration: 3.4 + index * 0.45,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className='block h-full bg-brand'
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );

  return (
    <div className='bl-card mx-auto w-full max-w-5xl overflow-hidden lg:grid lg:grid-cols-[0.3fr_0.7fr]'>
      <Rail step={step} questions={questions} copy={copy.rail} />
      <MobileRail step={step} questions={questions} copy={copy.mobile} />
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
              {copy.form.badge}
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
            const visibleOptions =
              question.field === 'role'
                ? question.options.slice(0, 6)
                : question.options;
            const selectedRole = question.options.find(
              (option) => option.value === field.value,
            );
            const normalizedRoleSearch = roleSearch.trim().toLowerCase();
            const extraRoles = (
              normalizedRoleSearch
                ? question.options
                : question.options.slice(6)
            )
              .filter(
                (option) =>
                  !normalizedRoleSearch ||
                  option.label.toLowerCase().includes(normalizedRoleSearch),
              )
              .sort((first, second) => {
                if (!normalizedRoleSearch) return 0;

                const matchRank = (label: string) => {
                  const normalizedLabel = label.toLowerCase();

                  if (normalizedLabel === normalizedRoleSearch) return 0;
                  if (normalizedLabel.startsWith(normalizedRoleSearch))
                    return 1;
                  if (
                    normalizedLabel
                      .split(/[^a-z0-9]+/)
                      .some((word) => word.startsWith(normalizedRoleSearch))
                  ) {
                    return 2;
                  }
                  return 3;
                };

                return matchRank(first.label) - matchRank(second.label);
              });
            return (
              <div
                key={question.field}
                className={cn(
                  'mt-4 grid grid-cols-2 gap-2 duration-500 animate-in fade-in slide-in-from-bottom-3 sm:mt-6 sm:gap-3',
                  isWorkflowCards ? 'sm:grid-cols-2' : 'sm:grid-cols-2',
                  !isWorkflowCards &&
                    visibleOptions.length > 4 &&
                    'grid-cols-3 lg:grid-cols-3',
                )}
              >
                {visibleOptions.map((option) => {
                  const active =
                    String(field.value) === option.value &&
                    (!isWorkflowCards || efficiencyChosen);
                  return (
                    <motion.button
                      key={option.value}
                      type='button'
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.32,
                        delay: visibleOptions.indexOf(option) * 0.055,
                      }}
                      whileHover={{ y: -6, rotate: active ? 0 : -0.4 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        if (isWorkflowCards) setEfficiencyChosen(true);
                        field.onChange(
                          isScale || isWorkflowCards
                            ? Number(option.value)
                            : option.value,
                        );
                      }}
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
                          {active ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <span aria-hidden='true'>{option.emoji}</span>
                          )}
                          <span className='sr-only'>
                            {copy.form.option.replace('{n}', option.value)}
                          </span>
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
                {question.field === 'role' && (
                  <>
                    {selectedRole &&
                      !visibleOptions.some(
                        (option) => option.value === selectedRole.value,
                      ) && (
                        <div className='col-span-full flex items-center justify-between gap-4 border-2 border-brand bg-brand-soft/30 px-4 py-3 shadow-[3px_3px_0_hsl(var(--brand))]'>
                          <span>
                            <span className='block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-text'>
                              {copy.form.yourRole}
                            </span>
                            <span className='mt-1 block text-sm font-semibold text-foreground'>
                              {selectedRole.label}
                            </span>
                          </span>
                          <button
                            type='button'
                            onClick={() => setRoleCatalogOpen(true)}
                            className='font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-text hover:text-foreground'
                          >
                            {copy.form.change}
                          </button>
                        </div>
                      )}
                    <button
                      type='button'
                      onClick={() => {
                        setRoleSearch('');
                        setRoleCatalogOpen(true);
                      }}
                      className='col-span-full mt-2 border border-dashed border-ink/45 bg-surface px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-text transition-colors hover:border-brand hover:bg-brand-soft/35'
                    >
                      {copy.form.moreRoles.replace(
                        '{n}',
                        String(question.options.length - visibleOptions.length),
                      )}
                    </button>
                    <Sheet
                      open={roleCatalogOpen}
                      onOpenChange={setRoleCatalogOpen}
                    >
                      <SheetContent
                        side='bottom'
                        onOpenAutoFocus={(event) => event.preventDefault()}
                        className='grid h-[min(72svh,36rem)] max-h-[72svh] grid-rows-[auto_auto_auto_auto_minmax(0,1fr)] overflow-hidden border-2 border-ink bg-ink p-5 text-white shadow-[0_-6px_0_hsl(var(--brand))] data-[state=closed]:duration-1000 data-[state=open]:duration-1000 data-[state=closed]:ease-in data-[state=open]:ease-out md:bottom-auto md:left-[50%] md:right-auto md:top-[50%] md:h-auto md:max-h-[85vh] md:w-[min(92vw,72rem)] md:max-w-none md:translate-x-[-50%] md:translate-y-[-50%] md:grid-rows-none md:overflow-y-auto md:p-10 md:shadow-[10px_10px_0_hsl(var(--brand))] md:data-[state=closed]:duration-300 md:data-[state=open]:duration-500 md:data-[state=closed]:ease-out md:data-[state=open]:ease-out md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95 md:data-[state=closed]:slide-out-to-bottom-0 md:data-[state=closed]:slide-out-to-left-1/2 md:data-[state=closed]:slide-out-to-top-[48%] md:data-[state=open]:slide-in-from-bottom-0 md:data-[state=open]:slide-in-from-left-1/2 md:data-[state=open]:slide-in-from-top-[48%]'
                      >
                        <span className='mx-auto mb-5 block h-1 w-14 bg-white/30 md:hidden' />
                        <SheetTitle className='bl-display pr-10 text-3xl text-white md:text-4xl'>
                          {copy.form.findRole}
                        </SheetTitle>
                        <SheetDescription className='max-w-xl text-sm leading-relaxed text-white/65'>
                          {copy.form.findRoleBody}
                        </SheetDescription>
                        <input
                          value={roleSearch}
                          onChange={(event) =>
                            setRoleSearch(event.target.value)
                          }
                          placeholder={copy.form.searchPlaceholder}
                          className='h-12 w-full border border-white/30 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-brand focus:ring-2 focus:ring-brand/30'
                        />
                        <div className='grid min-h-0 grid-cols-1 content-start gap-2 overflow-y-auto overscroll-contain pr-1 md:grid-cols-2 md:overflow-visible md:pr-0'>
                          {extraRoles.map((option) => {
                            const active = String(field.value) === option.value;
                            return (
                              <button
                                key={option.value}
                                type='button'
                                onClick={() => {
                                  field.onChange(option.value);
                                  setRoleCatalogOpen(false);
                                }}
                                className={cn(
                                  'flex min-h-14 items-center justify-between border p-4 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
                                  active
                                    ? 'border-brand bg-brand-soft text-foreground'
                                    : 'border-white/25 bg-white/5 text-white hover:border-brand hover:bg-brand/15',
                                )}
                              >
                                {option.label}
                                {active && (
                                  <Check className='h-4 w-4 text-brand-2' />
                                )}
                              </button>
                            );
                          })}
                          {extraRoles.length === 0 && (
                            <p className='col-span-full py-6 text-center text-sm text-white/60'>
                              {copy.form.noMatch}
                            </p>
                          )}
                        </div>
                      </SheetContent>
                    </Sheet>
                  </>
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
              <ArrowLeft className='h-4 w-4' /> {copy.form.back}
            </button>
          ) : (
            <span />
          )}
          <button
            type='submit'
            disabled={
              !form.watch(question.field) ||
              (question.field === 'efficiency' && !efficiencyChosen) ||
              form.formState.isSubmitting
            }
            className='bl-btn bl-btn-ink inline-flex h-11 items-center gap-3 px-5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45'
          >
            {step === questions.length - 1 ? copy.form.finish : copy.form.next}{' '}
            <ArrowRight className='h-4 w-4' />
          </button>
        </div>
      </form>
    </div>
  );
}

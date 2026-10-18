'use client';

import { ArrowRight, BellRing, CheckCircle2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks';
import { useId, useState } from 'react';
import { toast } from 'sonner';

import { joinCourseList } from '@/actions/course-signup';

import { cn } from '@/lib/utils';

import { paths } from '@/constants/paths';
import type { Dictionary } from '@/i18n/dictionaries/en';

interface CourseSignupProps {
  dict: Dictionary;
  /** Which page the form is on, stored with the signup. */
  source: string;
  /** `panel` is the full card with heading; `inline` is just the field. */
  variant?: 'panel' | 'inline';
  /** For the inline field: the surface it sits on. */
  tone?: 'light' | 'dark';
  /** Button label, when the surrounding copy asks for a different verb. */
  submitLabel?: string;
  /** Panel heading overrides, for a page that frames the sign-up its own way. */
  kicker?: string;
  title?: string;
  body?: string;
  /** Hide the "training for a team" link under the panel. */
  teamLink?: boolean;
  className?: string;
}

/**
 * "Tell me when the modules open": one email field. The address goes to
 * `course_signups` and the inbox; the thank-you replaces the form in place.
 */
export function CourseSignup({
  dict,
  source,
  variant = 'panel',
  tone = 'light',
  submitLabel,
  kicker,
  title,
  body,
  teamLink = true,
  className,
}: CourseSignupProps) {
  const t = dict.program.signup;
  const id = useId();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState<null | { alreadyOnList: boolean }>(null);
  const [error, setError] = useState<string | null>(null);

  const { execute, isExecuting } = useAction(joinCourseList, {
    onSuccess: ({ data }) => {
      setDone({ alreadyOnList: Boolean(data?.alreadyOnList) });
      setEmail('');
    },
    onError: ({ error: actionError }) => {
      const fieldError = actionError.validationErrors?.fieldErrors?.email?.[0];
      const message = fieldError ?? actionError.serverError ?? t.errorGeneric;
      setError(message);
      if (!fieldError) toast.error(message);
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    execute({
      email,
      locale: dict.locale,
      source,
      website: String(form.get('website') ?? ''),
    });
  };

  const inline = variant === 'inline';
  // The panel is always ink; the inline field follows its surface.
  const dark = !inline || tone === 'dark';

  if (done) {
    return (
      <div
        role='status'
        className={cn(
          'flex items-start gap-4',
          !inline && 'bl-card bl-card-ink p-6 text-white sm:p-8',
          inline && dark && 'text-white',
          className,
        )}
      >
        <span className='flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-brand-foreground'>
          <CheckCircle2 className='h-5 w-5' />
        </span>
        <div>
          <p className='bl-display text-xl'>
            {done.alreadyOnList ? t.alreadyTitle : t.doneTitle}
          </p>
          <p
            className={cn(
              'mt-1.5 text-sm leading-relaxed',
              dark ? 'text-white/65' : 'text-muted-foreground',
            )}
          >
            {t.doneBody}
          </p>
        </div>
      </div>
    );
  }

  const field = (
    <form onSubmit={onSubmit} noValidate className='w-full'>
      <label htmlFor={`${id}-email`} className='sr-only'>
        {t.email}
      </label>
      <div className='flex flex-col gap-2 sm:flex-row sm:items-stretch'>
        <input
          id={`${id}-email`}
          type='email'
          name='email'
          autoComplete='email'
          inputMode='email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : `${id}-consent`}
          className={cn(
            'h-12 min-w-0 flex-1 border px-4 text-[15px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand/60',
            dark
              ? 'border-white/20 bg-white/[0.06] text-white placeholder:text-white/40'
              : 'border-line bg-surface text-ink placeholder:text-muted-foreground',
            error && 'border-red-400',
          )}
        />
        {/* Honeypot */}
        <input
          type='text'
          name='website'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
          className='absolute -left-[9999px] h-0 w-0 opacity-0'
        />
        <button
          type='submit'
          disabled={isExecuting}
          className='bl-btn bl-btn-primary inline-flex h-12 shrink-0 items-center justify-center gap-2.5 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] disabled:opacity-60'
        >
          {isExecuting ? (
            <Loader2 className='h-4 w-4 animate-spin' />
          ) : (
            <BellRing className='h-4 w-4' />
          )}
          {submitLabel ?? t.submit}
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} className='mt-2 text-xs text-red-400'>
          {error}
        </p>
      ) : (
        <p
          id={`${id}-consent`}
          className={cn(
            'mt-2.5 text-xs leading-relaxed',
            dark ? 'text-white/55' : 'text-muted-foreground',
          )}
        >
          {t.consentBefore}{' '}
          <Link
            href={paths.legal.privacy}
            className={cn(
              'underline underline-offset-2',
              dark ? 'hover:text-white' : 'hover:text-ink',
            )}
          >
            {t.consentLink}
          </Link>
          {t.consentAfter}
        </p>
      )}
    </form>
  );

  if (inline) return <div className={className}>{field}</div>;

  return (
    <div
      className={cn(
        'bl-card bl-card-ink bl-grid-surface relative p-6 text-white sm:p-8',
        className,
      )}
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/25 blur-[80px]'
      />
      <div className='relative'>
        <p className='bl-kicker text-white/60'>{kicker ?? t.kicker}</p>
        <h3 className='bl-display mt-4 text-2xl text-white sm:text-3xl'>
          {title ?? t.title}
        </h3>
        <p className='mt-3 max-w-md text-sm leading-relaxed text-white/65'>
          {body ?? t.body}
        </p>
        <div className='mt-6'>{field}</div>
        {teamLink && (
          <Link
            href={`${paths.contact}?service=team`}
            className='bl-action mt-5 text-brand-2 hover:text-white'
          >
            {t.teamLink}
            <ArrowRight className='h-3.5 w-3.5' />
          </Link>
        )}
      </div>
    </div>
  );
}

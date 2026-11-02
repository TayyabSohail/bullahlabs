'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { submitContact } from '@/actions/contact';

import { PickSelect } from '@/components/contact/pick-select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { track } from '@/lib/analytics';

import { siteConfig } from '@/config/site';
import { paths } from '@/constants/paths';
import { PosthogEventKeys } from '@/constants/posthog-events';
import type { Dictionary } from '@/i18n/dictionaries/en';
import {
  CONTACT_GOALS,
  CONTACT_SERVICE,
  CONTACT_TEAM_SIZES,
  CONTACT_TOOLS,
  type ContactGoal,
  type ContactInput,
  contactSchema,
  type ContactTeamSize,
  type ContactTool,
} from '@/schema/contact';

/* Text fields share the pickers' language: a ruled box on the ink card,
   brighter rule on hover, brand rule plus a hard brand shadow on focus. */
const FIELD =
  'h-12 rounded-none border-white/30 bg-transparent px-4 text-[15px] text-white transition-[border-color,box-shadow] duration-150 placeholder:text-white/45 hover:border-white/70 focus-visible:border-brand focus-visible:shadow-[3px_3px_0_0_hsl(var(--brand))] focus-visible:ring-0 focus-visible:ring-offset-0';
const MESSAGE_MAX = 4000;

const TOOL_KEYS = Object.keys(CONTACT_TOOLS) as ContactTool[];
const SIZE_KEYS = Object.keys(CONTACT_TEAM_SIZES) as ContactTeamSize[];
const GOAL_KEYS = Object.keys(CONTACT_GOALS) as ContactGoal[];

interface ContactFormProps {
  dict: Dictionary;
}

/**
 * One step and nothing decorative. The page heading above the card already
 * says what this is and what comes back, so the card holds only what we
 * need to reply: three selects on one row, a name and an email, an
 * optional note, the consent line and the button. The selects replaced a
 * field of fifteen chips; the same facts, one answer each, far less ink.
 */
export function ContactForm({ dict }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const t = dict.contactForm;
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      tool: undefined,
      teamSize: undefined,
      goal: undefined,
      name: '',
      email: '',
      company: '',
      message: '',
      consent: undefined,
      website: '',
    },
  });

  const { execute, isExecuting } = useAction(submitContact, {
    onSuccess: () => {
      const values = form.getValues();
      track(PosthogEventKeys.CONTACT_FORM_SUBMITTED, {
        interest: CONTACT_SERVICE.value,
        tool: values.tool,
        teamSize: values.teamSize,
        goal: values.goal,
      });
      setSent(true);
      form.reset();
    },
    onError: ({ error }) => {
      toast.error(error.serverError ?? t.errorGeneric);
    },
  });

  if (sent) {
    return (
      <div className='bl-card flex flex-col items-start bg-surface p-8 text-foreground sm:p-10'>
        <span className='flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground'>
          <CheckCircle2 className='h-6 w-6' />
        </span>
        <h3 className='bl-display mt-6 text-display-sm text-foreground'>
          {t.sentTitle}
        </h3>
        <p className='mt-3 max-w-md text-base leading-relaxed text-muted-foreground'>
          {t.sentBody.replace('{time}', siteConfig.responseTime)}
        </p>
        <div className='mt-6'>
          <Button variant='outline' onClick={() => setSent(false)}>
            {t.sentAgain}
          </Button>
        </div>
      </div>
    );
  }

  const replyNote = t.replyNote.replace('{time}', siteConfig.responseTime);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => execute(values))}
        className='bl-card overflow-hidden rounded-2xl border border-white/10 bg-ink text-white shadow-[0_30px_80px_-40px_hsl(var(--ink)/0.8)] [clip-path:none]'
        noValidate
      >
        <div aria-hidden='true' className='absolute -left-[9999px] top-0'>
          <label htmlFor='contact-website'>Website</label>
          <input
            id='contact-website'
            tabIndex={-1}
            autoComplete='off'
            {...form.register('website')}
          />
        </div>

        <div className='space-y-6 px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-9'>
          <div className='grid gap-5 sm:grid-cols-3'>
            <PickField
              control={form.control}
              name='tool'
              label={t.tools.label}
              placeholder={t.pick}
              options={TOOL_KEYS.map((key) => [key, t.tools.options[key]])}
            />
            <PickField
              control={form.control}
              name='teamSize'
              label={t.teamSize.label}
              placeholder={t.pick}
              options={SIZE_KEYS.map((key) => [key, t.teamSize.options[key]])}
            />
            <PickField
              control={form.control}
              name='goal'
              label={t.goals.label}
              placeholder={t.pick}
              options={GOAL_KEYS.map((key) => [key, t.goals.options[key]])}
            />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <ContactInputField
              control={form.control}
              name='name'
              label={t.name}
              placeholder={t.namePlaceholder}
              autoComplete='name'
            />
            <ContactInputField
              control={form.control}
              name='email'
              label={t.email}
              placeholder={t.emailPlaceholder}
              autoComplete='email'
              type='email'
            />
          </div>

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>
                  {t.message}
                  <span className='font-normal text-white/60'>
                    {' '}
                    ({t.optional})
                  </span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={2}
                    maxLength={MESSAGE_MAX}
                    placeholder={t.messagePlaceholder}
                    className={`${FIELD} mt-2 h-auto min-h-[4.5rem] py-3`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='consent'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-start gap-3'>
                  <FormControl>
                    <Checkbox
                      checked={field.value === true}
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true ? true : undefined)
                      }
                      className='mt-0.5 h-5 w-5 rounded-none border-white/30 data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-brand-foreground'
                    />
                  </FormControl>
                  <FormLabel className='text-sm font-normal leading-relaxed text-white/70'>
                    {t.consentBefore}{' '}
                    <Link
                      href={paths.legal.privacy}
                      className='text-white underline underline-offset-4'
                    >
                      {t.consentLink}
                    </Link>
                    {t.consentAfter}
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-xs text-white/60'>{replyNote}</p>
            <Button
              type='submit'
              variant='brand'
              size='xl'
              icon={ArrowUpRight}
              isLoading={isExecuting}
            >
              {t.submit}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

type Control = ReturnType<typeof useForm<ContactInput>>['control'];

function PickField({
  control,
  name,
  label,
  placeholder,
  options,
}: {
  control: Control;
  name: 'tool' | 'teamSize' | 'goal';
  label: string;
  placeholder: string;
  options: Array<[value: string, label: string]>;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-white'>{label}</FormLabel>
          <FormControl>
            <PickSelect
              value={field.value ?? ''}
              onValueChange={(value) => field.onChange(value)}
              placeholder={placeholder}
              options={options}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ContactInputField({
  control,
  name,
  label,
  placeholder,
  autoComplete,
  type = 'text',
}: {
  control: Control;
  name: 'name' | 'email';
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-white'>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className={FIELD}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

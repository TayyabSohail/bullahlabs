'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { submitContact } from '@/actions/contact';

import { PickRow } from '@/components/contact/pick-row';
import { Button } from '@/components/ui/button';
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
 * need to reply: three ruled rows of answers, a name and an email, an
 * optional note, the consent line and the button. The rows replaced a set
 * of dropdowns, which hid the answers; here every answer is in view and
 * the three picks take three clicks.
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
      trap: '',
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
      // The form stays on screen: every field clears and a confirmation
      // appears beside the button, where the person is already looking.
      form.reset();
      setSent(true);
    },
    onError: ({ error }) => {
      toast.error(error.serverError ?? t.errorGeneric);
    },
  });

  const replyNote = t.replyNote.replace('{time}', siteConfig.responseTime);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          setSent(false);
          execute(values);
        })}
        className='bl-card overflow-hidden rounded-2xl border border-white/10 bg-ink text-white shadow-[0_30px_80px_-40px_hsl(var(--ink)/0.8)] [clip-path:none]'
        noValidate
      >
        <div aria-hidden='true' className='absolute -left-[9999px] top-0'>
          <label htmlFor='contact-trap'>Leave this field empty</label>
          <input
            id='contact-trap'
            tabIndex={-1}
            autoComplete='off'
            {...form.register('trap')}
          />
        </div>

        <div className='space-y-8 px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-9'>
          {/* Part one: three numbered questions, every answer in view. */}
          <section aria-labelledby='contact-setup-heading'>
            <SectionHeading
              id='contact-setup-heading'
              title={t.sections.setup.title}
              body={t.sections.setup.body}
            />
            <div className='mt-6 space-y-7'>
              <PickField
                control={form.control}
                name='tool'
                index={1}
                label={t.tools.label}
                options={TOOL_KEYS.map((key) => [key, t.tools.options[key]])}
              />
              <PickField
                control={form.control}
                name='teamSize'
                index={2}
                label={t.teamSize.label}
                options={SIZE_KEYS.map((key) => [key, t.teamSize.options[key]])}
              />
              <PickField
                control={form.control}
                name='goal'
                index={3}
                label={t.goals.label}
                options={GOAL_KEYS.map((key) => [key, t.goals.options[key]])}
              />
            </div>
          </section>

          {/* Part two: where the reply goes. */}
          <section
            aria-labelledby='contact-reach-heading'
            className='border-t border-white/10 pt-8'
          >
            <SectionHeading
              id='contact-reach-heading'
              title={t.sections.reach.title}
              body={t.sections.reach.body}
            />
            <div className='mt-6 space-y-5'>
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
            </div>
          </section>

          {sent && (
            <div
              role='status'
              aria-live='polite'
              className='flex items-start gap-3 rounded-lg border border-brand/60 bg-brand/10 px-4 py-3.5'
            >
              <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-brand' />
              <div className='min-w-0'>
                <p className='font-display text-base font-semibold leading-tight text-white'>
                  {t.sentTitle}
                </p>
                <p className='mt-1 text-sm leading-relaxed text-white/70'>
                  {t.sentBody.replace('{time}', siteConfig.responseTime)}
                </p>
              </div>
            </div>
          )}

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

/** A small heading over each part of the form, so people know where they are. */
function SectionHeading({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <h3
        id={id}
        className='font-display text-lg font-semibold leading-tight text-white sm:text-xl'
      >
        {title}
      </h3>
      <p className='mt-1.5 text-sm leading-relaxed text-white/55'>{body}</p>
    </div>
  );
}

function PickField({
  control,
  name,
  index,
  label,
  options,
}: {
  control: Control;
  name: 'tool' | 'teamSize' | 'goal';
  index: number;
  label: string;
  options: Array<[value: string, label: string]>;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <PickRow
              name={name}
              index={index}
              label={label}
              value={field.value ?? ''}
              onValueChange={(value) => field.onChange(value)}
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

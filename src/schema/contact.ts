import { z } from 'zod';

/**
 * What the enquiry is about: one of the four program tiers, or something
 * else. The values match the tier ids in data/program.ts, so a link such as
 * /contact?service=team opens the form with that tier already chosen. The
 * field is still called `service` because that is the column it is stored in.
 */
export const INTEREST_OPTIONS = [
  { value: 'fundamentals', label: 'AI Fundamentals (free course)' },
  { value: 'practitioner', label: 'Practitioner' },
  { value: 'role-tracks', label: 'Role Tracks' },
  { value: 'team', label: 'Team' },
  { value: 'other', label: 'Something else' },
] as const;

export type InterestValue = (typeof INTEREST_OPTIONS)[number]['value'];

/** The free course: where "request early access" links point. */
export const DEFAULT_INTEREST: InterestValue = 'fundamentals';

const interestValues = INTEREST_OPTIONS.map((option) => option.value) as [
  InterestValue,
  ...InterestValue[],
];

export function isInterestValue(value: unknown): value is InterestValue {
  return interestValues.includes(value as InterestValue);
}

export const contactSchema = z.object({
  name: z
    .string({ message: 'Your name is required' })
    .trim()
    .min(2, 'Please enter your full name')
    .max(100, 'That name is a little long'),
  email: z
    .string({ message: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(200),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  service: z.enum(interestValues, { message: 'Pick the closest match' }),
  message: z
    .string({ message: 'Tell us a little about how you use AI' })
    .trim()
    .min(20, 'A couple of sentences help us reply usefully')
    .max(4000, 'Please keep it under 4,000 characters'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the privacy policy' }),
  }),
  /** Honeypot: must stay empty. Bots fill every field. */
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Fields validated at each step of the wizard, so "Next" can block on the
 * current step only. Keep in sync with the steps rendered in ContactForm.
 */
export const CONTACT_STEP_FIELDS = [
  ['service'],
  ['message'],
  ['name', 'email', 'company', 'consent'],
] as const satisfies ReadonlyArray<ReadonlyArray<keyof ContactInput>>;

export const CONTACT_STEP_COUNT = CONTACT_STEP_FIELDS.length;

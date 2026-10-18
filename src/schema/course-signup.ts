import { z } from 'zod';

/** The "tell me when a lesson is live" form under the course player. */
export const courseSignupSchema = z.object({
  email: z
    .string({ message: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(200),
  /** The language the visitor signed up in, so the notice can match it. */
  locale: z.enum(['en', 'de']).optional(),
  /** Which page the form was on. */
  source: z.string().trim().max(80).optional(),
  /** Honeypot: must stay empty. Bots fill every field. */
  website: z.string().max(0).optional().or(z.literal('')),
});

export type CourseSignupInput = z.infer<typeof courseSignupSchema>;

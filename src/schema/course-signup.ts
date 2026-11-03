import { z } from 'zod';

const aiSnapshotSchema = z.object({
  role: z.string().trim().min(1).max(80),
  roleOther: z.string().trim().max(120).optional(),
  frequency: z.string().trim().min(1).max(40),
  confidence: z.number().int().min(1).max(5),
  efficiency: z.number().int().min(1).max(4),
  goal: z.string().trim().min(1).max(80),
});

/** The email field errors. The dictionary carries each language's set. */
export interface CourseSignupErrorMessages {
  emailRequired: string;
  emailInvalid: string;
}

export const COURSE_SIGNUP_ERRORS_EN: CourseSignupErrorMessages = {
  emailRequired: 'Email is required',
  emailInvalid: 'Please enter a valid email address',
};

/**
 * The email check with its messages in one language. The server validates
 * with the English set; the form runs one built from the visitor's
 * dictionary first, so a bad address reads back in their language.
 */
export const createCourseEmailSchema = (
  m: CourseSignupErrorMessages = COURSE_SIGNUP_ERRORS_EN,
) =>
  z
    .string({ message: m.emailRequired })
    .trim()
    .min(1, m.emailRequired)
    .email(m.emailInvalid)
    .max(200, m.emailInvalid);

/** The "tell me when a lesson is live" form under the course player. */
export const courseSignupSchema = z.object({
  email: createCourseEmailSchema(),
  /** The language the visitor signed up in, so the notice can match it. */
  locale: z.enum(['en', 'de']).optional(),
  /** Which page the form was on. */
  source: z.string().trim().max(80).optional(),
  /** utm_campaign the visit arrived with, e.g. "sticker-01". */
  utmCampaign: z.string().trim().max(120).optional(),
  /** Optional assessment data, stored on its own Google Sheet tab. */
  assessment: aiSnapshotSchema.optional(),
  /** Honeypot: must stay empty. Bots fill every field. */
  /** Honeypot. Not validated: a filled trap is dropped quietly server-side. */
  trap: z.string().optional(),
});

export type CourseSignupInput = z.infer<typeof courseSignupSchema>;
export type AiSnapshotInput = z.infer<typeof aiSnapshotSchema>;

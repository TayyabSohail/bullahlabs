'use server';

import { createClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';

import { isMailConfigured, sendInternalMail } from '@/lib/server/mail';
import { isRateLimited } from '@/lib/server/rate-limit';
import { safeActionClient } from '@/lib/server/safe-action';
import Logger from '@/utils/logger';

import { env, isSupabaseConfigured } from '@/env';
import { courseSignupSchema } from '@/schema/course-signup';

/** Postgres: unique constraint violated. The address is already on the list. */
const UNIQUE_VIOLATION = '23505';

/**
 * Puts an email address on the list of people to tell when a lesson is
 * published. Layered like the contact form so the visitor always gets a
 * truthful answer:
 *
 * 1. Row in `course_signups`, when Supabase is configured. A repeat
 *    signup is a success, not an error.
 * 2. Email to the inbox via Resend, when configured, so the signup is
 *    noticed even if nobody checks the table.
 * 3. Server log, always.
 */
export const joinCourseList = safeActionClient
  .schema(courseSignupSchema)
  .action(async ({ parsedInput }) => {
    // Honeypot filled: pretend success, drop silently.
    if (parsedInput.website) return { joined: true };

    const headerStore = await headers();
    const ip =
      headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headerStore.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(`course-signup:${ip}`, { limit: 8 })) {
      throw new Error(
        'Too many sign-ups from this connection. Please try again in a few minutes.',
      );
    }

    const email = parsedInput.email.toLowerCase();
    const summary = [
      `Email: ${email}`,
      `Locale: ${parsedInput.locale ?? '-'}`,
      `Source: ${parsedInput.source ?? '-'}`,
    ].join('\n');

    let stored = false;
    let alreadyOnList = false;

    if (isSupabaseConfigured && env.SUPABASE_SERVICE_ROLE_KEY) {
      const admin = createClient(
        env.NEXT_PUBLIC_SUPABASE_URL!,
        env.SUPABASE_SERVICE_ROLE_KEY,
        { auth: { persistSession: false } },
      );
      const { error } = await admin.from('course_signups').insert({
        email,
        locale: parsedInput.locale ?? null,
        source: parsedInput.source ?? null,
        ip,
      });
      if (!error) stored = true;
      else if (error.code === UNIQUE_VIOLATION) {
        stored = true;
        alreadyOnList = true;
      } else Logger.error('course_signups insert failed', error.message);
    }

    let mailed = false;
    if (isMailConfigured && !alreadyOnList) {
      try {
        await sendInternalMail({
          subject: `Course signup: ${email}`,
          text: `Someone asked to be told when a Conscious AI lesson goes live.\n\n${summary}`,
          replyTo: email,
        });
        mailed = true;
      } catch (error) {
        Logger.error(
          'Course signup email failed',
          error instanceof Error ? error.message : String(error),
        );
      }
    }

    if (!stored && !mailed) {
      // Nothing accepted it. Log so the address is not lost, and only claim
      // success when there is genuinely nothing configured yet (development).
      Logger.info('Course signup (undelivered)\n' + summary);
      if (isMailConfigured || isSupabaseConfigured) {
        throw new Error(
          'We could not save your email just now. Please try again in a moment.',
        );
      }
    }

    return { joined: true, alreadyOnList };
  });

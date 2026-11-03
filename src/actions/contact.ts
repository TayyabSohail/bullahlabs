'use server';

import { createClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';

import {
  renderAcknowledgementHtml,
  renderEnquiryHtml,
} from '@/lib/server/enquiry-email';
import {
  isMailConfigured,
  sendInternalMail,
  sendVisitorMail,
} from '@/lib/server/mail';
import { isRateLimited } from '@/lib/server/rate-limit';
import { safeActionClient } from '@/lib/server/safe-action';
import {
  appendSheetRow,
  isSheetsConfigured,
  SHEET_TABS,
  sheetTimestamp,
} from '@/lib/server/sheets';
import Logger from '@/utils/logger';

import { siteConfig } from '@/config/site';
import { env, isSupabaseConfigured } from '@/env';
import {
  composeContactBrief,
  CONTACT_GOALS,
  CONTACT_SERVICE,
  CONTACT_TEAM_SIZES,
  CONTACT_TOOLS,
  contactSchema,
} from '@/schema/contact';

/**
 * Handles the contact form. Delivery is layered so the form always
 * succeeds for the visitor:
 *
 * 1. Email via Resend, when configured.
 * 2. Row in `contact_messages`, when Supabase is configured.
 * 3. Row on the "Enquiries" tab of the Google Sheet, when configured
 *    (one column per pick, then the notes).
 * 4. Server log, always.
 */
export const submitContact = safeActionClient
  .schema(contactSchema)
  .action(async ({ parsedInput }) => {
    // Honeypot filled: pretend success, drop silently.
    if (parsedInput.trap) {
      Logger.info('Contact enquiry dropped: honeypot filled');
      return { delivered: true };
    }

    const headerStore = await headers();
    const ip =
      headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headerStore.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(`contact:${ip}`)) {
      throw new Error(
        'Too many messages from this connection. Please try again in a few minutes or email us directly.',
      );
    }

    const service = CONTACT_SERVICE.label;
    const brief = composeContactBrief(parsedInput);
    const notes = parsedInput.message?.trim() || '';

    const summary = [
      `Name: ${parsedInput.name}`,
      `Email: ${parsedInput.email}`,
      `Company: ${parsedInput.company || '-'}`,
      `Interest: ${service}`,
      '',
      brief,
    ].join('\n');

    let delivered = false;
    let mailError: unknown = null;

    if (isMailConfigured) {
      try {
        await sendInternalMail({
          subject: `New enquiry: ${parsedInput.name} (${service})`,
          text: summary,
          html: renderEnquiryHtml({
            name: parsedInput.name,
            email: parsedInput.email,
            company: parsedInput.company,
            service,
            facts: [
              ['Tool', CONTACT_TOOLS[parsedInput.tool]],
              ['Team', CONTACT_TEAM_SIZES[parsedInput.teamSize]],
              ['Focus', CONTACT_GOALS[parsedInput.goal]],
            ],
            message: notes,
          }),
          replyTo: parsedInput.email,
        });
        delivered = true;

        // Acknowledgement to the visitor. Best effort: the enquiry is
        // already delivered, so a failure here must not fail the action.
        try {
          const firstName = parsedInput.name.split(' ')[0] || parsedInput.name;
          await sendVisitorMail({
            to: parsedInput.email,
            subject: `We have your message - ${siteConfig.name}`,
            text: [
              `Hi ${firstName},`,
              '',
              `Thanks for getting in touch about ${service}. A real person reads`,
              `every enquiry and you will hear back ${siteConfig.responseTime}.`,
              '',
              'What you sent:',
              brief,
            ].join('\n'),
            html: renderAcknowledgementHtml({
              name: parsedInput.name,
              service,
              message: brief,
              responseTime: siteConfig.responseTime,
            }),
          });
        } catch (error) {
          Logger.error(
            'Contact acknowledgement failed',
            error instanceof Error ? error.message : String(error),
          );
        }
      } catch (error) {
        // Remember it, but let the Supabase fallback below still run.
        mailError = error;
        Logger.error(
          'Contact email failed',
          error instanceof Error ? error.message : String(error),
        );
      }
    }

    if (isSupabaseConfigured && env.SUPABASE_SERVICE_ROLE_KEY) {
      const admin = createClient(
        env.NEXT_PUBLIC_SUPABASE_URL!,
        env.SUPABASE_SERVICE_ROLE_KEY,
        { auth: { persistSession: false } },
      );
      const { error } = await admin.from('contact_messages').insert({
        name: parsedInput.name,
        email: parsedInput.email,
        company: parsedInput.company || null,
        service: CONTACT_SERVICE.value,
        // The form no longer asks for a budget, but the column is NOT NULL.
        budget: 'n/a',
        message: brief,
        ip,
      });
      if (error) Logger.error('contact_messages insert failed', error.message);
      else delivered = true;
    }

    if (isSheetsConfigured) {
      try {
        // One column per question, headed with the question itself, so the
        // sheet reads like the form and can be filtered on each answer.
        // Header: Submitted at, Name, Email, Company, Interest, the three
        // questions, "Anything else? (notes)", Replied.
        await appendSheetRow(SHEET_TABS.enquiries, [
          sheetTimestamp(),
          parsedInput.name,
          parsedInput.email,
          parsedInput.company || '',
          service,
          CONTACT_TOOLS[parsedInput.tool],
          CONTACT_TEAM_SIZES[parsedInput.teamSize],
          CONTACT_GOALS[parsedInput.goal],
          notes,
          '', // Replied: filled in by hand
        ]);
        delivered = true;
      } catch (error) {
        Logger.error(
          'Contact sheet append failed',
          error instanceof Error ? error.message : String(error),
        );
      }
    }

    if (mailError && delivered) {
      // Stored in Supabase or the sheet, but nothing reached the inbox.
      // Nobody watches those, so log the enquiry where it will be noticed.
      Logger.error(
        'Contact enquiry stored but NOT emailed - check Resend config\n' +
          summary,
      );
    }

    if (!delivered) {
      // Nothing accepted the message. Always log it so it is not lost, then
      // tell the visitor the truth instead of showing a false success screen.
      Logger.info('Contact enquiry (undelivered)\n' + summary);

      if (mailError || isMailConfigured) {
        throw new Error(
          'We could not send your message just now. Please try again in a moment.',
        );
      }
    }

    return { delivered };
  });

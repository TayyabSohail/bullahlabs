import { JWT } from 'google-auth-library';

import { env } from '@/env';

/**
 * Google Sheets as a lightweight CRM. Every form appends one row to a tab
 * of the sheet named by GOOGLE_SHEETS_ID, using a service account that the
 * sheet has been shared with as Editor. No-op until all three vars are set.
 */
export const isSheetsConfigured = Boolean(
  env.GOOGLE_SHEETS_ID &&
    env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    env.GOOGLE_SERVICE_ACCOUNT_KEY,
);

/** Tab names in the sheet. Must match the tabs exactly, or the append fails. */
export const SHEET_TABS = {
  courseSignups: 'Course signups',
  aiSnapshots: 'AI snapshots',
  enquiries: 'Enquiries',
} as const;

export type SheetTab = (typeof SHEET_TABS)[keyof typeof SHEET_TABS];

const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

let client: JWT | undefined;

function getClient() {
  if (!client) {
    client = new JWT({
      email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // Vercel and .env files store the PEM on one line with literal "\n".
      key: env.GOOGLE_SERVICE_ACCOUNT_KEY!.replace(/\\n/g, '\n'),
      scopes: [SCOPE],
    });
  }
  return client;
}

/** "2026-10-19 14:32" in the studio's time zone, so the column sorts as text. */
export function sheetTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * Appends one row under the header of `tab`. Values are written RAW, so a
 * message that starts with "=" lands as text instead of a formula.
 */
export async function appendSheetRow(
  tab: SheetTab,
  values: Array<string | number | null | undefined>,
) {
  if (!isSheetsConfigured) return { skipped: true as const };

  const range = encodeURIComponent(`'${tab.replace(/'/g, "''")}'!A:A`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEETS_ID}` +
    `/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const { token } = await getClient().getAccessToken();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      majorDimension: 'ROWS',
      values: [values.map((value) => value ?? '')],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Sheets append to "${tab}" failed (${response.status}): ${body}`,
    );
  }

  return { skipped: false as const };
}

import { paths } from '@/constants/paths';
import { env } from '@/env';

/**
 * Asccepts "username" or "username/event-slug" only. Rejects API keys
 * (cal_live_..., cal_test_...), and tolerates a pasted full cal.com URL.
 */
function parseCalHandle(value: string | undefined) {
  if (!value) return null;
  const handle = value.trim().replace(/^https?:\/\/(www\.)?cal\.com\//i, '');
  if (/^cal_(live|test)_/i.test(handle)) return null;
  return /^[a-z0-9._-]+(\/[a-z0-9._-]+)?$/i.test(handle) ? handle : null;
}

const calHandle = parseCalHandle(env.NEXT_PUBLIC_CAL_LINK);

/**
 * Single source of truth for company facts that appear across the site:
 * header, footer, contact page, legal pages, structured data and metadata.
 */
export const siteConfig = {
  name: 'Bullah Labs',
  shortName: 'Bullah Labs',
  legalName: 'Bullah Labs',
  tagline: 'Work smarter with AI. Use it responsibly.',
  description:
    'Bullah Labs helps non-technical knowledge workers use AI effectively, build future-ready skills and reduce unnecessary AI usage, through the Conscious AI program.',
  url: env.NEXT_PUBLIC_APP_URL,
  founded: 2024,
  /** Company inbox that receives enquiries. */
  email: 'hello@bullahlabs.com',
  /**
   * The address shown publicly. When `null`, every surface points at the
   * contact form instead of a mailto link.
   */
  publicEmail: 'hello@bullahlabs.com' as string | null,
  responseTime: 'within one business day',
  availability: 'Open for early access',
  locations: [
    {
      id: 'islamabad',
      city: 'Islamabad',
      country: 'Pakistan',
      countryCode: 'PK',
      label: 'Asian Office',
      timezone: 'Asia/Karachi',
      utc: 'UTC+5',
    },
    {
      id: 'fellbach',
      city: 'Fellbach',
      country: 'Germany',
      countryCode: 'DE',
      label: 'European Office',
      timezone: 'Europe/Berlin',
      utc: 'UTC+1 / UTC+2',
    },
  ],
  founder: {
    name: 'Tayyab Sohail',
    role: 'Founder & Lead Engineer',
  },
  /**
   * Cal.com booking link, built from NEXT_PUBLIC_CAL_LINK.
   *
   * That variable must hold the booking handle - "username" or
   * "username/event", e.g. bullah-labs/intro - never a Cal.com API key. A key
   * was set here once and produced a dead https://cal.com/cal_live_... URL
   * that still rendered as a working button, so anything that does not look
   * like a handle is now ignored instead of linked.
   */
  calLink: calHandle ? `https://cal.com/${calHandle}` : null,
  /** The bare handle, for the inline embed. Null when not configured. */
  calHandle,
  /**
   * Where the Conscious AI course is hosted, from NEXT_PUBLIC_COURSE_URL.
   * Null until it is set; the site then sends people to the contact form.
   */
  courseUrl: env.NEXT_PUBLIC_COURSE_URL ?? null,
  footerNav: {
    legal: [
      { label: 'Privacy Policy', href: paths.legal.privacy },
      { label: 'Terms of Service', href: paths.legal.terms },
      { label: 'Cookie Policy', href: paths.legal.cookies },
      { label: 'Imprint', href: paths.legal.imprint },
      { label: 'All legal documents', href: paths.legal.index },
    ],
  },
} as const;

export type SiteLocation = (typeof siteConfig.locations)[number];

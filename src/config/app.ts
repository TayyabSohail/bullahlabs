import { Metadata } from 'next';

import { env } from '@/env';

import { siteConfig } from './site';

export const appConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords:
    'digital product development, product engineering, AI and automation, systems integration, architecture optimisation, conscious technology, Conscious AI, technology education, Germany, Pakistan',
  logo: '/brand/logo-mark.png',
  defaultLocale: 'en-US',
  defaultCurrency: 'EUR',
  defaultCountryCode: 'DE',
  appUrl: env.NEXT_PUBLIC_APP_URL,
  appName: env.NEXT_PUBLIC_APP_NAME,
  emails: {
    support: siteConfig.email,
    sender: env.CONTACT_FROM_EMAIL ?? `Bullah Labs <${siteConfig.email}>`,
  },
} as const;

export default function getMetadata(): Metadata {
  return {
    metadataBase: new URL(appConfig.appUrl),
    title: {
      template: `%s | ${appConfig.title}`,
      default: `${appConfig.title} | ${siteConfig.tagline}`,
    },
    description: appConfig.description,
    applicationName: appConfig.title,
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/icon-64.png', type: 'image/png', sizes: '64x64' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: '/apple-icon.png',
    },
    // No title, description or url here on purpose: Next fills og:title,
    // og:description and twitter:* from each page's own title and
    // description. Set explicitly, they were inherited by every page, so a
    // shared /services link previewed as the home page.
    openGraph: {
      siteName: appConfig.title,
      type: 'website',
      locale: appConfig.defaultLocale.replace('-', '_'),
    },
    twitter: {
      card: 'summary_large_image',
    },
    keywords: appConfig.keywords.split(', '),
    creator: siteConfig.founder.name,
    category: 'technology',
  };
}

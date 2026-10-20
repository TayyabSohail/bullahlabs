import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';

import './globals.css';

import { Cursor } from '@/components/effects/cursor';
import { SpotlightEffect } from '@/components/effects/spotlight';
import { Backdrop } from '@/components/layout/backdrop';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { DynamicFavicon } from '@/components/layout/dynamic-favicon';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Preloader } from '@/components/layout/preloader';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { SmoothScroll } from '@/components/layout/smooth-scroll';
import PosthogAnalytics from '@/components/posthog/analytics';
import { OrganizationJsonLd } from '@/components/seo/json-ld';

import getMetadata from '@/config/app';
import { getDictionary } from '@/i18n/server';

import AppProviders from './providers';

/* Old-school type: IBM Plex for the running text and the mono, like a
   1980s technical manual, and Fraunces, an old-style serif with its optical
   size and "wonk" axes exposed, for the headlines and italic accents.
   The latin woff2 slices live in ./fonts and are self-hosted, so the build
   never has to reach Google Fonts (whose CDN occasionally hands Vercel
   extensionless file URLs that next/font/google cannot parse). */
const plexSans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './fonts/IBMPlexSans-Variable-latin.woff2',
      weight: '100 700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const fraunces = localFont({
  variable: '--font-display',
  src: [
    {
      path: './fonts/Fraunces-Variable-latin.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Fraunces-VariableItalic-latin.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
});

const plexMono = localFont({
  variable: '--font-mono',
  src: [
    {
      path: './fonts/IBMPlexMono-Regular-latin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IBMPlexMono-Medium-latin.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/IBMPlexMono-SemiBold-latin.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = getMetadata();

export const viewport: Viewport = {
  themeColor: '#ebf5fa',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary();

  return (
    <html lang={dict.locale}>
      <body
        className={`${plexSans.variable} ${fraunces.variable} ${plexMono.variable} font-sans`}
      >
        <AppProviders>
          <SmoothScroll>
            <PosthogAnalytics />
            <DynamicFavicon />
            <OrganizationJsonLd />
            <Toaster richColors position='bottom-center' />
            <Preloader />
            <ScrollProgress />
            <Backdrop />
            <SpotlightEffect />
            <Cursor />
            <Header dict={dict} />
            <main id='main' className='relative'>
              {children}
            </main>
            <Footer dict={dict} />
            <CookieConsent dict={dict} />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}

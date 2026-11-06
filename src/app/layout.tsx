import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';

import './globals.css';

import { Cursor } from '@/components/effects/cursor';
import { SpotlightEffect } from '@/components/effects/spotlight';
import { Backdrop } from '@/components/layout/backdrop';
import { CampaignCapture } from '@/components/layout/campaign-capture';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { CornerDock } from '@/components/layout/corner-dock';
import { DynamicFavicon } from '@/components/layout/dynamic-favicon';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { SmoothScroll } from '@/components/layout/smooth-scroll';
import PosthogAnalytics from '@/components/posthog/analytics';
import { OrganizationJsonLd } from '@/components/seo/json-ld';

import getMetadata from '@/config/app';
import { getDictionary } from '@/i18n/server';

import AppProviders from './providers';

/* Human, bookish type: Source Sans for running text and Source Serif for
   headlines. The mono face remains only for data and code-like details.
   The latin woff2 slices live in ./fonts and are self-hosted, so the build
   never has to reach Google Fonts (whose CDN occasionally hands Vercel
   extensionless file URLs that next/font/google cannot parse). */
const sourceSans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './fonts/SourceSans3-Variable.ttf',
      weight: '200 900',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const sourceSerif = localFont({
  variable: '--font-display',
  src: [
    {
      path: './fonts/SourceSerif4-Variable.ttf',
      weight: '200 900',
      style: 'normal',
    },
    {
      path: './fonts/SourceSerif4-Italic-Variable.ttf',
      weight: '200 900',
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

/* Bulleh Shah's verse on /conscious-ai. Only the Arabic and Gurmukhi
   slices are shipped and neither is preloaded: the files are fetched the
   first time a page actually sets the script. Regular weight only, so no
   browser ever synthesises a bold Nastaliq. */
const nastaliq = localFont({
  variable: '--font-urdu',
  src: './fonts/NotoNastaliqUrdu-Regular-arabic.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  preload: false,
});

const gurmukhi = localFont({
  variable: '--font-gurmukhi',
  src: './fonts/NotoSerifGurmukhi-Regular-gurmukhi.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  preload: false,
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
        className={`${sourceSans.variable} ${sourceSerif.variable} ${plexMono.variable} ${nastaliq.variable} ${gurmukhi.variable} font-sans`}
      >
        <AppProviders>
          <SmoothScroll>
            <PosthogAnalytics />
            <CampaignCapture />
            <DynamicFavicon />
            <OrganizationJsonLd />
            <Toaster richColors position='bottom-center' />
            <ScrollProgress />
            <Backdrop />
            <SpotlightEffect />
            <Cursor />
            <Header dict={dict} />
            <main id='main' className='relative'>
              {children}
            </main>
            <Footer dict={dict} />
            <CornerDock dict={dict} />
            <CookieConsent dict={dict} />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}

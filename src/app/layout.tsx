import type { Metadata, Viewport } from 'next';
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
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
import { SectionRail } from '@/components/layout/section-rail';
import { SmoothScroll } from '@/components/layout/smooth-scroll';
import PosthogAnalytics from '@/components/posthog/analytics';
import { OrganizationJsonLd } from '@/components/seo/json-ld';

import getMetadata from '@/config/app';
import { getDictionary } from '@/i18n/server';

import AppProviders from './providers';

/* Old-school type: IBM Plex for the running text and the mono, like a
   1980s technical manual, and Fraunces, an old-style serif with its optical
   size and "wonk" axes exposed, for the headlines and italic accents. */
const plexSans = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = getMetadata();

export const viewport: Viewport = {
  themeColor: '#f3eee1',
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
            <SectionRail next={dict.nav.next} top={dict.nav.top} />
            <CookieConsent dict={dict} />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}

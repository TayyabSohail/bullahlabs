'use client';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useLayoutEffect } from 'react';

import { COOKIE_CONSENT_EVENT, readCookieConsent } from '@/lib/cookie-consent';

import { env } from '@/env';

/**
 * Cookies and local storage only with consent; analytics for everyone.
 * Until the visitor accepts, PostHog keeps its identifier in memory, so
 * nothing is stored on the device and each page load is a new anonymous
 * visitor. Accepting switches to cookie persistence (keeping the identifier),
 * declining switches back and clears what was stored.
 */
function persistenceFor(consent: ReturnType<typeof readCookieConsent>) {
  return consent === 'accepted' ? 'localStorage+cookie' : 'memory';
}

function initPosthog() {
  if (
    typeof window === 'undefined' ||
    posthog.__loaded ||
    !env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  )
    return;
  posthog.init(env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
    // Events go through the /ingest rewrite in next.config.ts, which
    // points at the EU region; ui_host is the dashboard, for links.
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    capture_pageleave: true,
    persistence: persistenceFor(readCookieConsent()),
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // A layout effect runs after hydration (init injects a script tag, which
  // during render breaks hydration) but before any child's useEffect, so the
  // first pageview isn't captured before init and dropped.
  useLayoutEffect(() => {
    initPosthog();
  }, []);

  useEffect(() => {
    if (!env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
    // The consent banner dispatches this, so a decision takes effect at once.
    const onConsent = () =>
      posthog.set_config({ persistence: persistenceFor(readCookieConsent()) });
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

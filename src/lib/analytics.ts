import posthog from 'posthog-js';

import { PosthogEventKeys } from '@/constants/posthog-events';

type EventKey = (typeof PosthogEventKeys)[keyof typeof PosthogEventKeys];

/**
 * Records an event in PostHog. A no-op when PostHog isn't configured, so
 * call sites don't need to check. Never pass names, emails or message text.
 */
export function track(event: EventKey, properties?: Record<string, unknown>) {
  if (!posthog.__loaded) return;
  posthog.capture(event, properties);
}

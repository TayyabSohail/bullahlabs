import type { Instrumentation } from 'next';

/** PostHog's EU capture endpoint; the browser reaches it via the /ingest rewrite. */
const POSTHOG_CAPTURE_URL = 'https://eu.i.posthog.com/i/v0/e/';

export function register() {}

/**
 * Server-side errors (page renders, server actions, route handlers, the
 * middleware) as `$exception` events in PostHog Error tracking, next to the
 * browser errors `capture_exceptions` sends. A plain fetch keeps it free of
 * extra packages, and a failed report never adds an error of its own.
 */
export const onRequestError: Instrumentation.onRequestError = async (
  error,
  request,
  context,
) => {
  // Production builds only: errors from `pnpm dev` must not become issues.
  if (process.env.NODE_ENV !== 'production') return;
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  if (!token) return;

  const err = error instanceof Error ? error : new Error(String(error));
  // Next tags each server error with a digest, the same id the visitor sees.
  const digest = (error as { digest?: string }).digest;

  try {
    await fetch(POSTHOG_CAPTURE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: token,
        event: '$exception',
        distinct_id: 'server',
        properties: {
          $exception_list: [
            {
              type: err.name,
              value: err.message,
              mechanism: { handled: false, synthetic: false },
            },
          ],
          $exception_stack_trace_raw: err.stack,
          $current_url: request.path,
          source: 'server',
          method: request.method,
          route: context.routePath,
          route_type: context.routeType,
          router_kind: context.routerKind,
          digest,
          // Server events are not about a person; keep them off profiles.
          $process_person_profile: false,
        },
      }),
    });
  } catch {
    // Reporting is best effort.
  }
};

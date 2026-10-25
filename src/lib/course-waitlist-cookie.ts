export const COURSE_WAITLIST_COOKIE = 'bl-course-waitlist';

const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

/** Whether this browser has successfully joined the course waitlist. */
export function hasJoinedCourseWaitlist(): boolean {
  if (typeof document === 'undefined') return false;

  return document.cookie
    .split('; ')
    .some((cookie) => cookie === `${COURSE_WAITLIST_COOKIE}=1`);
}

/**
 * Store only the fact that this browser joined, never the visitor's email.
 * This is a functional preference cookie, scoped to the whole site.
 */
export function markCourseWaitlistJoined() {
  if (typeof document === 'undefined') return;

  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COURSE_WAITLIST_COOKIE}=1; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

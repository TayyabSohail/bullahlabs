export const PosthogEventKeys = {
  PAGE_VIEW: '$pageview',
  LOGIN: 'login',
  // * your custom events
  CTA_CLICKED: 'cta_clicked',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  COURSE_SIGNUP: 'course_signup',
  BOOK_CALL_CLICKED: 'book_call_clicked',
  CALL_BOOKED: 'call_booked',
  LESSON_STARTED: 'lesson_started',
  LESSON_COMPLETED: 'lesson_completed',
  AI_SNAPSHOT_COMPLETED: 'ai_snapshot_completed',
} as const;

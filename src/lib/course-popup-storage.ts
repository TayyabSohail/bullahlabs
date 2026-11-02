const STORAGE_KEY = 'bl-course-popup-seen';

/**
 * Whether the free-course card has already introduced itself in this
 * browser. It opens on its own exactly once; afterwards it waits, folded,
 * beside the community dock.
 */
export function hasSeenCoursePopup(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    // No storage (private mode, blocked site data): treat as seen so the
    // card never nags on every load.
    return true;
  }
}

export function markCoursePopupSeen() {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // Ignore: the card simply stays folded.
  }
}

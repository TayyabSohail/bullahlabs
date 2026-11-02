import { FreeCoursePopup } from '@/components/course/free-course-popup';
import { CommunityDock } from '@/components/layout/community-dock';

import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The bottom-right corner on every page: the free-course pill stacked above
 * the community control. The column has one fixed width and both controls
 * fill it, so the two always read as a matched pair, at every screen size,
 * whatever their labels or the dock's open state.
 */
export function CornerDock({ dict }: { dict: Dictionary }) {
  return (
    <div className='fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 flex w-[min(19rem,calc(100vw-1.5rem))] flex-col items-stretch gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3'>
      <FreeCoursePopup dict={dict} />
      <CommunityDock dict={dict} />
    </div>
  );
}

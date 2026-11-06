import { FreeCoursePopup } from '@/components/course/free-course-popup';
import { CommunityDock } from '@/components/layout/community-dock';

import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * The bottom-right corner on every page: the free-course pill stacked above
 * the community control. The deliberately compact column keeps both actions
 * easy to reach without obscuring the page on smaller screens.
 */
export function CornerDock({ dict }: { dict: Dictionary }) {
  return (
    <div className='fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3'>
      <FreeCoursePopup dict={dict} />
      <CommunityDock dict={dict} />
    </div>
  );
}

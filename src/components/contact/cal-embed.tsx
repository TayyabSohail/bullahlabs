'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import { track } from '@/lib/analytics';

import { PosthogEventKeys } from '@/constants/posthog-events';

const NAMESPACE = 'bullahlabs-intro';

interface CalEmbedProps {
  calLink: string;
}

export function CalEmbed({ calLink }: CalEmbedProps) {
  useEffect(() => {
    let cancelled = false;
    const onBooked = () =>
      track(PosthogEventKeys.CALL_BOOKED, { surface: 'inline' });
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;
      cal('on', { action: 'bookingSuccessfulV2', callback: onBooked });
    })();
    return () => {
      cancelled = true;
      getCalApi({ namespace: NAMESPACE }).then((cal) =>
        cal('off', { action: 'bookingSuccessfulV2', callback: onBooked }),
      );
    };
  }, []);

  return (
    <Cal
      calLink={calLink}
      namespace={NAMESPACE}
      config={{
        layout: 'month_view',
        theme: 'dark',
        useSlotsViewOnSmallScreen: 'true',
      }}
      className='min-h-[38rem] w-full'
    />
  );
}

'use client';

import { useEffect } from 'react';

import { rememberCampaign } from '@/lib/campaign';

/** Notes the landing page's utm_campaign before the visitor navigates on. */
export function CampaignCapture() {
  useEffect(() => {
    rememberCampaign();
  }, []);

  return null;
}

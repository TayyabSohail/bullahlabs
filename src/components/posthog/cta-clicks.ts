'use client';

import { useEffect } from 'react';

import { track } from '@/lib/analytics';

import { PosthogEventKeys } from '@/constants/posthog-events';

/**
 * One listener for every CTA on the site, so new ones are tracked without
 * touching them. A CTA is a link styled as a button (`bl-btn`) or as a text
 * action (`bl-action`), or anything marked `data-cta`. Plain `bl-btn`
 * buttons (carousel arrows, form steps, the cookie banner) are UI controls
 * and are skipped.
 *
 * Where it sits comes from the nearest `data-section`, then a section id,
 * then the header or footer.
 */
export default function CtaClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const el = event.target.closest<HTMLElement>(
        '.bl-btn, .bl-action, [data-cta]',
      );
      if (!el) return;
      const link = el.closest<HTMLAnchorElement>('a[href]');
      if (!link && !el.hasAttribute('data-cta')) return;

      const section =
        el.closest<HTMLElement>('[data-section]')?.dataset.section ??
        (el.closest('section[id]')?.id ||
          (el.closest('header') && 'header') ||
          (el.closest('footer') && 'footer') ||
          'page');

      track(PosthogEventKeys.CTA_CLICKED, {
        cta: el.dataset.cta,
        cta_text: el.innerText.trim().slice(0, 80),
        cta_href: link?.getAttribute('href'),
        cta_section: section,
      });
    };

    // Capture phase: runs before the click navigates or opens a modal.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

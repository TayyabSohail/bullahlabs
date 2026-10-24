/**
 * The `utm_campaign` a visitor arrived with, e.g. "sticker-01" from a QR
 * sticker. Held in memory for the visit, so it survives moving between pages
 * (client-side navigation) without cookies or storage, and therefore without
 * needing consent. A full reload of a page without the parameter forgets it.
 */
let landingCampaign: string | undefined;

const MAX_LENGTH = 100;

function fromSearch(search: string) {
  const value = new URLSearchParams(search).get('utm_campaign')?.trim();
  return value ? value.slice(0, MAX_LENGTH) : undefined;
}

/** Call once on the first page load. */
export function rememberCampaign() {
  if (typeof window === 'undefined') return;
  landingCampaign = fromSearch(window.location.search) ?? landingCampaign;
}

/** The campaign in the current URL, else the one the visit started with. */
export function getCampaign() {
  if (typeof window === 'undefined') return undefined;
  return fromSearch(window.location.search) ?? landingCampaign;
}

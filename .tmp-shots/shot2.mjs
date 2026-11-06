import { chromium } from 'playwright-core';
import { homedir } from 'node:os';
import { join } from 'node:path';
const exe = join(homedir(), 'AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe');
const out = process.argv[2];
const locales = (process.argv[3] || 'en').split(',');
const widths = (process.argv[4] || '390,768,1024,1440').split(',').map(Number);
const pages = (process.argv[5] || '/,/conscious-ai,/upskilling,/work,/services,/approach,/contact,/legal/privacy,/nope').split(',');
const browser = await chromium.launch({ executablePath: exe });
for (const loc of locales) for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 700 ? 844 : 900 }, deviceScaleFactor: 1 });
  await ctx.addCookies([{ name: 'bl-locale', value: loc, domain: 'localhost', path: '/' }, { name: 'bl-cookie-consent', value: 'declined', domain: 'localhost', path: '/' }]);
  await ctx.addInitScript(() => { try { localStorage.setItem('bl-cookie-consent', 'rejected'); } catch {} });
  for (const p of pages) {
    const page = await ctx.newPage();
    try {
      await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle', timeout: 120000 });
      await page.waitForTimeout(p === '/' ? 8500 : 2500);
      await page.addStyleTag({ content: '[data-cookie-banner],[class*="cookie"]{display:none!important}' });
      await page.screenshot({ path: join(out, `${loc}-${w}-${p.replace(/\W/g, '') || 'home'}.png`) });
    } catch (e) { console.log('fail', p, String(e).slice(0, 120)); }
    await page.close();
  }
  await ctx.close();
}
await browser.close();

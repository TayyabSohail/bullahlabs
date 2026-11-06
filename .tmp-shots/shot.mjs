import { chromium } from 'playwright-core';
import { readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
const root = join(homedir(), 'AppData/Local/ms-playwright');
const dir = readdirSync(root).find((d) => d.startsWith('chromium-'));
const exe = join(root, dir, 'chrome-win64/chrome.exe');
const out = process.argv[2];
const pages = ['/conscious-ai', '/upskilling'];
const browser = await chromium.launch({ executablePath: exe });
for (const vp of [{ w: 1440, h: 900 }, { w: 390, h: 844 }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: 1 });
  for (const p of pages) {
    const page = await ctx.newPage();
    await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(p === '/' ? 8500 : 2500);
    await page.screenshot({ path: join(out, `${vp.w}-${p.replace(/\W/g, '') || 'home'}.png`) });
    await page.close();
  }
  await ctx.close();
}
await browser.close();

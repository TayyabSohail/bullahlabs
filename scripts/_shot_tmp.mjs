import { chromium } from 'playwright-core';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { readdirSync } from 'node:fs';
const base = join(homedir(), 'AppData/Local/ms-playwright');
const dir = readdirSync(base).find(d => d.startsWith('chromium-'));
const exe = join(base, dir, 'chrome-win64', 'chrome.exe');
const out = process.argv[2];
const browser = await chromium.launch({ executablePath: exe });
for (const [name, w, h] of [['desk', 1280, 900], ['mobile', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 90000 });
  const el = page.locator('#conscious-ai');
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await el.screenshot({ path: `${out}/${name}.png` });
  await page.close();
}
await browser.close();

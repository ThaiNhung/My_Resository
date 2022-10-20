import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {

  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click text=Get started
await page.locator('text=Get started').click();
await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  // :visible pseudo-class in CSS selectors
  await page.locator('button:visible').nth(5).click();

  //visible= selector engine
  await page.locator('button >> visible=true').nth(1).click();

  await page.goto('https://code.visualstudio.com/');

  //text=Installing Playwright >> visible=true
});
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {

  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  await page.locator('_react=a[className="getStarted_Sjon"]').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  await page.locator('_react=a[href="https://stackoverflow.com/questions/tagged/playwright"]').click();
//updated
});
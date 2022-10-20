import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click text=Get started
  await page.locator('text=Get started').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  // Click article a:has-text("What's Installed")
  await page.locator('article a:has-text("What\'s Installed")').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro#whats-installed');

  // Click code:has-text("npx playwright test")
  await page.locator('code:has-text("npx playwright test")').click();

  // Click [aria-label="Copy code to clipboard"] >> nth=3
  await page.locator('[aria-label="Copy code to clipboard"]').nth(3).click();

});
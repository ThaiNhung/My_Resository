import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://playwright.dev/
  await page.goto('http://playwright.dev/');

  // Click text=Get started
  await page.locator('text=Get started').click();
  await expect(page).toHaveURL('http://playwright.dev/docs/intro');

  // Click text=How to install Playwright
  await page.locator('text=How to install Playwright').click();
  await expect(page).toHaveURL('http://playwright.dev/docs/intro#installing-playwright');

  // Click [aria-label="Docs pages navigation"] >> text=Writing Tests
  await page.locator('[aria-label="Docs pages navigation"] >> text=Writing Tests').click();
  await expect(page).toHaveURL('http://playwright.dev/docs/writing-tests');

});
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click text=Get started
  await page.locator('text=Get started').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  // Click text=SearchK
  await page.locator('text=SearchK').click();

  await page.locator('[placeholder="Search docs"]').selectText()
  // Fill [placeholder="Search docs"]
  await page.locator('[placeholder="Search docs"]').fill('Text Selector');

  await page.locator('li[role="option"] >> nth=0').selectOption();

  // Click div[role="button"]:has-text("CancelGuidesText selector​SelectorsSelecting elements by label text​SelectorsFil")
//   await page.locator('div[role="button"]:has-text("CancelGuidesText selector​SelectorsSelecting elements by label text​SelectorsFil")').click();
//   await expect(page).toHaveURL('https://playwright.dev/docs/selectors#css-selector');

});
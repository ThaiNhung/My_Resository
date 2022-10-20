import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');
  //text selector
  await page.locator('text=Get started').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  //use :right-of(inner > selector) for find element in right corner. usually use incase have more value with the same name of element, so we suggest use it
  await page.locator('div.footer__title:right-of(:text("Community"))').innerText();
  await page.locator('div.footer__title:left-of(:text("Community"))').innerText();
  await page.locator("a.footer__link-item:below(:text('Community')) >> nth=0").innerText();
  await page.locator("div.pagination-nav__label:above(:text('Community'))").innerText();

});
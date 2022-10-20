import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://playwright.dev/');

// Click text=Get started
await page.locator('text=Get started').click();
await expect(page).toHaveURL('https://playwright.dev/docs/intro');

 // Click text=How to install Playwright
 await page.locator('a:has-text("How to install Playwright")').click();
 await expect(page).toHaveURL('https://playwright.dev/docs/intro#installing-playwright');

 //css selector by id 
 await page.locator('#installing-playwright').click();

 //catch text by parent relationship - format: parentHagtag.class 
 await page.locator('div.theme-doc-markdown.markdown a:has-text("VS Code Extension")').click();
 //correctly
 //await page.locator('div a:has-text("VS Code Extension")').click();
 await expect(page).toHaveURL('https://playwright.dev/docs/getting-started-vscode');

 //click on text search 
 await page.locator('span:has-text("Search")').nth(1).click();

  // Click [placeholder="Search docs"]
  await page.locator('[placeholder="Search docs"]').click();
  // Fill [placeholder="Search docs"]
  await page.locator('[placeholder="Search docs"]').fill('selectors');

  //use xpath 
  await page.locator('xpath = //li[@id="docsearch-item-1"]').click();

  await page.screenshot({ path: 'test-screenshot.png' });

  //use chaining locator - css & xpath
  //await page.locator("#chaining-selectors > a").click();
  await page.locator('#chaining-selectors >> xpath=//a[@title="Direct link to heading"]').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/selectors#chaining-selectors');

  //use chaining locator - css & xpath
  await page.locator('h3:has-text("Intermediate matches") >> xpath=//a[@title="Direct link to heading"]'.click);
  await expect(page).toHaveURL('https://playwright.dev/docs/selectors#intermediate-matches');
});
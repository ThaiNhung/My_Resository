import { test, expect, chromium } from '@playwright/test';
test('test', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    
    // Click text=Get started
    //await page.locator('text=Get started').click();
    //await page.locator('a:text("Get started")').first().click();

    // Correct, only matches the <a> element - a element is hagtag or parent hagtag
    await page.locator('a:text("Get started")').first().click();

    // Wrong, will match many elements including <body>
     await page.locator(':has-text("Get started")').click();

    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

});
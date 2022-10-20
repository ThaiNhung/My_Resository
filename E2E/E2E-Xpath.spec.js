import { test, expect, chromium } from '@playwright/test';
test('test', async ({ page }) => {

    await page.goto('https://playwright.dev/');
  
    //xpath
    await page.locator('//a[contains(text(), "Get started")]').click();
    
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

});
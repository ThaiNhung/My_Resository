import { test, expect, chromium } from '@playwright/test';
test('test', async ({ page }) => {

    await page.goto('http://www.londonfreelance.org/courses/frames/index.html');
  
    await page.frameLocator('frame[name="main"]').locator('h2').innerText();
});
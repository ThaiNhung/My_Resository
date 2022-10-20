import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.orangehrm.com/orangehrm-30-day-trial/?
  await page.goto('https://www.orangehrm.com/orangehrm-30-day-trial/?');
});
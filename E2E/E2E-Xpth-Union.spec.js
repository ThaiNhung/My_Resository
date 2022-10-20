
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://playwright.dev/
//   await page.goto('https://playwright.dev/');

//   // Click text=Get started
//   await page.locator('text=Get started').click();
//   await expect(page).toHaveURL('https://playwright.dev/docs/intro');

//   //if first exists, then 2nd and 3rd xpath will result to nothing, if class 2 exists then 3rd xpath will result to nothing..
//   await page.locator("//a[contains(text(), 'playwright.config file1')] | //strong[contains(text(), 'You will learn')]").click();

  await page.goto('https://academy.naveenautomationlabs.com');
  //XPath union
  await page.locator("//a[text()='signin'] | //a[text()='Login']").click();
  await page.locator('xpath=//a[@aria-label="Close"]').nth(1).click();
  //CSS selector list- Wait until one of three locators are visible
  await page.locator('span:has-text("Store"), a:has-text("EXPLORE COURSES"),span:has-text("signin")').waitFor();
});
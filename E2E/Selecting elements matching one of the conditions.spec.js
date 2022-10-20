import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.orangehrm.com/orangehrm-30-day-trial/?
  await page.goto('https://academy.naveenautomationlabs.com/');

  //CSS selector list - choose one of selector of that list, usually chọn the first locator. It will run if have one locator in list correct
  await page.locator('a:has-text("Login"), a:has-text("Signin1")').click();

  //xpath union -will match all elements that can be selected by one of the selectors in that list.
  await page.locator('xpath=//a[text()="Courses"] | //a[text()="Cheat Sheet"]').click();

//for css selector and xpath union, when we use one of both? in case use css or xpath, we need to prepare data before and after comma character is correct or not?
//assume that we have 4 data display for each action, so how to catch exactly the data we want to catch with conditions?

});
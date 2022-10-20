import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {

// Go to https://www.programsbuzz.com/ask-doubt
await page.goto('https://www.programsbuzz.com/ask-doubt');

// Use Nth Selector with CSS 
await page.locator('#search-block-form>div>input >> nth=2').fill('Search');

//Use Nth Selector with XPath - click on OK button
await page.locator('xpath=//form[@id="search-block-form"]/div/input[@value="Go"] >> nth=1').click();

//Use Nth Method - fill on last element with id=edit-keys
await page.locator('#edit-keys').nth(-1).fill('test');

//Use Nth method - click on the first element with id=edit-submit
await page.locator('#edit-submit').nth(-1).click();
});
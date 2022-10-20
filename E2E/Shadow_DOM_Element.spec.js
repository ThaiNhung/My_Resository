//shadow-root closed > cannot automate something under shadow-root, if shadow-root open, we can automate them
//need to check who the parent shadow root element of this > use shadow root element in shadow root, we can go to the element directly which we want > fast
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://books-pwakit.appspot.com/
  await page.goto('https://books-pwakit.appspot.com/');

  await page.locator('book-app[apptitle="BOOKS"] input#input').fill('book');
  await page.locator('book-app[apptitle="BOOKS"] div.books-desc').innerText();

  //xpath union -will match all elements that can be selected by one of the selectors in that list.
 // await page.locator('xpath=//a[text()="Courses"] | //a[text()="Cheat Sheet"]').click();

//? when we use shadow dom?
//? 

});
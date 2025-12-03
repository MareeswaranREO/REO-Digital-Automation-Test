import {test,expect} from '@playwright/test'

test('test' , async ({page})=> {
await page.goto('https://www.arcinclusion.com/');
await page.getByRole('button', { name: 'Accept cookies' }).click();

await page.getByRole('menuitem', { name: 'About' }).click();
await expect (page.locator ('//div[@data-id="3b9558"]')).toHaveText('Our mission');
await expect (page.locator ('//div[@data-id="7569afcb"]')).toHaveText('Our values');
await expect (page.locator ('//div[@data-id="4e545854"]')).toHaveText('Our culture');
await expect (page.locator ('//div[@data-id="2f77b962"]')).toHaveText('Why choose Arc Inclusion?');

await console.log('test');

await page.close();

});

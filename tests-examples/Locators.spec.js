import {test, expect } from "@playwright/test";

//const {test, expect} = require ('@playwright/test')


test ('Locators', async ({page})=>{

    await page.goto ('https://www.arcinclusion.com/');

   // await page.locator ('id=t-cli-accept-btn').click();

    await page.locator ('id=welcome-cta').click();

    await page.close();

})
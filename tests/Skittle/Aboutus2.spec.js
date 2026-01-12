import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  await page.locator('//div[@id="cookie-law-info-again"]').click
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.locator('.elementor-element.elementor-element-be6eff5 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
  await page.goto('https://www.skittledigital.com/about/');
  await page.locator('.elementor-element.elementor-element-fb3618f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
  //await page.getByRole('link', { name: 'Together, let\'s do something' }).click();
  //await page.goto('https://www.skittledigital.com/about/');
});
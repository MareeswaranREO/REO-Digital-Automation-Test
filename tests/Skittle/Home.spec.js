import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(5000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.getByRole('link', { name: 'Find out more' }).first().click();
  await page.goto('https://www.skittledigital.com/');
  const img = await page.locator('//div[@data-id="5cd35fa"]/div[@class="elementor-widget-container"]/img');
  await expect(img).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.elementor-element.elementor-element-7247b55').click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Join our team' }).click();
  await page.waitForTimeout(2500);
  await page.getByRole('link', { name: 'Skittle Logo' }).click();

});
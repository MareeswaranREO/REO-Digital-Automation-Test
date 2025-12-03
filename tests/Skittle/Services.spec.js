import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.hover('//div[@id="e-n-menu-title-1513"]/a[@class="e-n-menu-title-container e-focus e-link"]');
  await page.getByRole('tab', { name: 'Organic Social' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Learn more' }).click();
  await page.waitForTimeout(3000);
  console.log("sucess1");
  await page.hover('//div[@id="e-n-menu-title-1513"]/a[@class="e-n-menu-title-container e-focus e-link"]');
  await page.getByRole('tab', { name: 'PPC' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Begin your journey' }).click();
  await page.waitForTimeout(3000);
  console.log("sucess2");
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(3000);
  await page.locator('//div[@id="e-n-menu-title-1513"]/a[@class="e-n-menu-title-container e-focus e-link"]').click();
  await page.getByRole('tab', { name: 'Paid Social' }).getByRole('link').click();
  await page.getByRole('link', { name: 'About Skittle Spyglass' }).click();
  await page.goto('https://www.skittledigital.com/paid-social/');
  console.log("sucess3");
  await page.waitForTimeout(3000);
  await page.locator('//div[@id="e-n-menu-title-1513"]/a[@class="e-n-menu-title-container e-focus e-link"]').click();
  await page.getByRole('tab', { name: 'SEO' }).getByRole('link').click();
  await page.getByRole('link', { name: 'How we work' }).first().click();
});
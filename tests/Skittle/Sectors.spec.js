import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.hover('//div[@id="e-n-menu-title-1514"]/a[@class="e-n-menu-title-container e-focus e-link"]');
  await page.getByRole('tab', { name: 'Insurance' }).getByRole('link').click();
  const img= await page.getByAltText('Business meeting');
  await expect(img).toBeVisible();
  await page.locator('//div[@id="e-n-menu-title-1514"]/a[@class="e-n-menu-title-container e-focus e-link"]').click();
  await page.getByRole('tab', { name: 'Banking' }).getByRole('link').click();
  await page.locator('//div[@id="e-n-menu-title-1514"]/a[@class="e-n-menu-title-container e-focus e-link"]').click();
  await page.getByRole('tab', { name: 'Legal' }).getByRole('link').click();
  await page.close();

  });
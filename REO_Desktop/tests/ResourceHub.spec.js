import { test, expect } from '@playwright/test';

test('Resource hub smoke flow', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.hover('//li[@id="menu-item-27"]/a[@class="ekit-menu-nav-link"]');
  await page.getByRole('link', { name: 'Podcasts' }).click();
  await page.waitForURL(/podcast|news|resource/i);

  await page.getByLabel('Search by type A/B Testing (').selectOption('experimentation');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('.e-loop-item').first()).toBeVisible();
});

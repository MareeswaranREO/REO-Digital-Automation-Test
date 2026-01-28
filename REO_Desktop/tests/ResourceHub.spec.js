import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.hover('//li[@id="menu-item-27"]/a[@class="ekit-menu-nav-link"]');
  await page.getByRole('link', { name: 'Podcasts' }).click();
  await page.locator('//img[@alt="Webtrends Content e1663674509212 1"]').click();
  await page.locator('//span[contains(text(),"Back to news")]').click();
  await page.getByLabel('Search by type A/B Testing (').selectOption('experimentation');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.elementor.elementor-1004.e-loop-item.e-loop-item-10140 > .elementor-element.elementor-element-8ecc62e > .elementor-element.elementor-element-ade943c > .elementor-widget-container > a').click();
  await page.getByRole('link', { name: 'Back to news' }).click();
  await page.getByLabel('Search by type A/B Testing (').selectOption('insights');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(3000);
  await page.locator('a:has(img.wp-image-16706)').click();

  await page.getByRole('link', { name: 'Back to news' }).click();
  await page.getByRole('button', {name: 'See more posts'}).click();
});
import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 7'],
  browserName: 'chromium',
});

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'Resource Hub' }).click();
  await page.getByRole('link', { name: 'See all posts', exact: true }).click();
  await page.goto('https://www.reodigital.com/resource-hub/');
  await page.getByLabel('Search by type A/B Testing (').selectOption('experimentation');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'The benefits of investing in' }).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link', { name: 'Back to news' }).click();
  await page.getByLabel('Search by type A/B Testing (').selectOption('cro');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'See more posts' }).click();
  await page.getByRole('link', { name: 'Custom metrics in Adobe' }).click();
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'Resource Hub' }).click();
  await page.getByRole('link', { name: 'Podcasts' }).click();
  await page.getByRole('link', { name: 'Browse Resources' }).click();
});
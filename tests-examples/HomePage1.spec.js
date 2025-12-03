import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.getByRole('link', { name: 'Our approach to accessibility' }).click();
  const img = await page.getByAltText('Three people engaged in inclusive user testing, smiling and interacting with a computer screen.');
  expect (img).toBeVisible();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('link', { name: 'Start your stay accessible' }).click();
  await page.getByRole('link', { name: 'Learn why sustainable' }).click();
  await page.locator('#arc-header').getByRole('link', { name: 'Arc logo with arc letter in' }).click();
});
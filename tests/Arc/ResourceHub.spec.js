import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.getByRole('menuitem', { name: 'Resource Hub' }).click();
  await page.getByLabel('Category').selectOption('17');
  await page.getByRole('button', { name: 'See more posts' }).click();
  await page.getByRole('link', { name: 'The Importance of Digital' }).click();
  await page.getByRole('link', { name: 'Back to search' }).click();
  await page.getByRole('textbox', { name: 'Search by keyword' }).click();
  await page.getByRole('textbox', { name: 'Search by keyword' }).fill('accessibility');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(3000);
  await page.locator('#arc-header').getByRole('link', { name: 'Arc logo with arc letter in' }).click();
  await page.waitForTimeout(3000);
  await page.close();
});
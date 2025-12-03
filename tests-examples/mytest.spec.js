import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.getByRole('link', { name: 'Start your stay accessible' }).click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('menuitem', { name: 'Resource Hub' }).click();
  await page.getByLabel('Category').selectOption('17');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Why Empathy Must Drive' }).click();
});
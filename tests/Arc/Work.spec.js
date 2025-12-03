import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1440
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.getByRole('menuitem', { name: 'Work' }).click();
  await page.getByLabel('Challenge', { exact: true }).selectOption('143');
  await page.getByLabel('Industry').selectOption('144');
  await page.getByRole('textbox', { name: 'Search by keyword' }).click();
  await page.getByRole('textbox', { name: 'Search by keyword' }).fill('esure');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('link', { name: 'Accessibility Auditing and' }).click();
  await page.waitForTimeout(3000);
  await page.close();
});
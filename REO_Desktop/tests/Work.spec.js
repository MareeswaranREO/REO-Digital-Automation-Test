import { test, expect } from '@playwright/test';

test('Work listing smoke flow', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await page.waitForURL('**/works/');

  await page.getByLabel('Services CRO &').selectOption('cro-experimentation');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('.e-loop-item').first()).toBeVisible();

  await page.getByRole('link', { name: 'Reset' }).click();
});

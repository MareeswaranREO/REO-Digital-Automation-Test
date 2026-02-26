import { test, expect } from '@playwright/test';

test('Services smoke flow', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();

  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Personalisation' }).click();
  await page.waitForURL(/personalisation/i);
  await page.getByRole('button', { name: 'I don\'t need a brand' }).click();
  await page.getByRole('button', { name: 'Are your rates competitive?' }).click();

  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'User research' }).click();
  await page.waitForURL(/user-research/i);
  await page.locator('button:nth-child(3)').click();

  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Digital analytics' }).click();
  await page.waitForURL(/digital-analytics/i);
  await expect(page.getByRole('link', { name: /We are very pleased/i }).first()).toBeVisible();
});

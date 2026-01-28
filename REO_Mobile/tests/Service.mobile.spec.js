import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 7'],
  browserName: 'chromium',
});

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Full service CRO' }).click();
  await page.waitForTimeout(3000);
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').first().click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'Speak to a consultant' }).click();
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'User research' }).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Digital analytics' }).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').first().click();
  await page.locator('section').filter({ hasText: '"We had a fascinating and' }).getByRole('button').first().click();
});
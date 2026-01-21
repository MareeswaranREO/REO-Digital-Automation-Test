import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Mission & values' }).click();
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('.icon.icon-cross-circle').click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'First' }).click();
  await page.getByRole('textbox', { name: 'First' }).fill('marees');
  await page.getByRole('textbox', { name: 'Last' }).click();
  await page.getByRole('textbox', { name: 'Last' }).fill('ramar');
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).fill('mareeswaran.ramar@reodigital.com');
  await page.getByRole('textbox', { name: 'Phone (Required)' }).click();
  await page.getByRole('textbox', { name: 'Phone (Required)' }).fill('8220184644');
  await page.getByRole('textbox', { name: 'Company' }).click();
  await page.getByRole('textbox', { name: 'Company' }).fill('reodigital');
  await page.getByRole('textbox', { name: 'Your message (Required)' }).click();
  await page.getByRole('textbox', { name: 'Your message (Required)' }).fill('testing');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('There was a problem with your submission. Please review the fields below.')).toBeVisible();
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Our culture' }).click();
  await page.getByRole('link', { name: 'Browse Resources' }).click();
});
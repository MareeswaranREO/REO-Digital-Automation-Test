import { test, expect } from '@playwright/test';

test('Homepage smoke flow', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await expect(page.locator('//img[@fetchpriority="high"]')).toBeVisible();

  await page.getByRole('link', { name: 'See more work' }).click();
  await page.waitForURL('**/works/');

  await page.goto('https://www.reodigital.com/');
  await page.getByRole('link', { name: 'Speak to a consultant' }).click();
  await page.waitForURL('**/contact/');

  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('#input_4_1_3').fill('Mareeswaran');
  await page.locator('#input_4_1_6').fill('Ramar');
  await page.locator('#input_4_3').fill('mareeswaran.ramar@reodigital.com');
  await page.locator('.icon.icon-cross-circle').click();
});

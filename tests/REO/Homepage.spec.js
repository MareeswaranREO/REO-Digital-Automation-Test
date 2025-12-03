import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('list').filter({ hasText: 'February 4, 2025 GA4 Agony' }).getByRole('link').first().click();
  await page.getByRole('link', { name: 'Back to search' }).click();
  await page.locator('.elementor-widget-container > a').first().click();
  await page.getByRole('link', { name: 'See more work' }).click();
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('link', { name: 'GA4 Agony Aunt: “Help! Why Is' }).click();
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('link', { name: '"Working with REO has allowed' }).click();
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('link', { name: 'Speak to a consultant' }).click();
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('#input_4_1_3').click();
  await page.locator('#input_4_1_3').fill('Mareeswaran');
  await page.locator('#input_4_1_6').click();
  await page.locator('#input_4_1_6').fill('Ramar');
  await page.locator('#input_4_3').click();
  await page.locator('#input_4_3').fill('mareeswaran.ramar@reodigital.com');
  await page.locator('.icon.icon-cross-circle').click();
});
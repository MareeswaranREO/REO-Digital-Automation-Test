import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Accept' }).click();
  await expect (page.locator('//img[@fetchpriority="high"]')).toBeVisible();
  await page.getByRole('link', { name: 'GA4 Agony Aunt: “Help! My GA4' }).click();
  await page.getByRole('link', { name: 'Back to search' }).click();
  await page.locator('.elementor-widget-container > a').first().click();
  await page.getByRole('link', { name: 'See more work' }).click();
  //await page.waitForURL('**/works/');
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('link', { name: 'GA4 Agony Aunt: “Help! Why Is' }).click();
  await page.waitForTimeout(2000);
  await page.goto("https://www.reodigital.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator('.owl-dot').first().click();
  await page.locator('button:nth-child(5)').click();
  await page.getByRole('link', { name: 'Speak to a consultant' }).click();
  await page.goto("https://www.reodigital.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('#input_4_1_3').click();
  await page.locator('#input_4_1_3').fill('Mareeswaran');
  await page.locator('#input_4_1_6').click();
  await page.locator('#input_4_1_6').fill('Ramar');
  await page.locator('#input_4_3').click();
  await page.locator('#input_4_3').fill('mareeswaran.ramar@reodigital.com');
  await page.locator('.icon.icon-cross-circle').click();
  await page.close();

});
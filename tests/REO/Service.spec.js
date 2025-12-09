import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Personalisation' }).click();
  await page.getByRole('button', { name: 'I don\'t need a brand' }).click();
  await page.getByRole('button', { name: 'I don\'t need a brand' }).click();
  await page.getByRole('button', { name: 'Are your rates competitive?' }).click();
  await page.getByRole('button', { name: 'Are your rates competitive?' }).click();
  await page.getByRole('button', { name: 'Why do you have a monthly' }).click();
  await page.getByRole('button', { name: 'Why do you have a monthly' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'User research' }).click();
  await page.locator('button:nth-child(3)').click();
  await page.locator('button:nth-child(4)').click();
  await page.locator('section').filter({ hasText: '"Our goal to swiftly elevate' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"Our goal to swiftly elevate' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '"Our goal to swiftly elevate' }).getByRole('button').first().click();
  await page.getByRole('button', { name: 'Alright, but what exactly do' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Digital analytics' }).click();
  await page.getByRole('link', { name: '"We are very pleased with the' }).first().click();
});
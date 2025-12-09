import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link',{name: 'About'}).hover();

  await page.getByRole('link', { name: 'Our culture' }).click();
  await page.waitForURL('**/culture/');

  await page.getByRole('link', { name: 'Get in touch' }).click();
  await page.waitForURL('**/contact/');
  await page.goto('https://www.reodigital.com/culture/');
  const h1Text =page.locator('//h1[@class="elementor-heading-title elementor-size-default"]/span[@class="single_dot"]');
  await expect(h1Text).toHaveText('Culture');
  await page.getByRole('link',{name: 'About'}).hover();
  await page.waitForTimeout(2000);
  await page.getByRole('link', {name: 'Careers'}).click();
  await page.getByRole('link', { name: 'Apply' }).first().click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/careers/');
  await page.getByRole('link', { name: 'Apply' }).nth(2).click();
  });
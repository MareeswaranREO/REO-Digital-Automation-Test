import { test, expect } from '@playwright/test';

test('About page smoke flow', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'About' }).hover();

  await page.getByRole('link', { name: 'Our culture' }).click();
  await page.waitForURL('**/culture/');
  await expect(page.getByRole('heading', { name: /Culture\.?/ }).first()).toBeVisible();

  await page.getByRole('link', { name: 'About' }).hover();
  await page.getByRole('link', { name: 'Careers' }).click();
  await page.waitForURL('**/careers/');
  await page.getByRole('link', { name: 'Apply' }).first().click();
  await expect(page).toHaveURL(/careers|boards|job/i);
});

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
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/works/');
  await page.waitForTimeout(5000);
  await page.getByLabel('Services CRO &').selectOption('cro-experimentation');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.elementor.elementor-8710.e-loop-item.e-loop-item-21088 > .elementor-element.elementor-element-a36a73e > .elementor-element.elementor-element-2f1ed0a > .elementor-widget-container > a').click();
  await page.goto('https://www.reodigital.com/project_type/cro-experimentation/');
  await page.getByLabel('Services CRO &').selectOption('user-experience');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.elementor-element.elementor-element-2f1ed0a > .elementor-widget-container > a').first().click();
});
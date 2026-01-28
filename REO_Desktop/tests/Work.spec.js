import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await page.getByLabel('Services CRO &').selectOption('cro-experimentation');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('//div[@class="elementor-widget-container"]/a[@href="https://www.reodigital.com/works/penhaligon/"]').click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/project_type/cro-experimentation/', { waitUntil: "domcontentloaded" });
  await page.getByRole('link', { name: 'Reset' }).click();
  //await page.locator('.elementor.elementor-8710.e-loop-item.e-loop-item-8554 > .elementor-element.elementor-element-a36a73e > .elementor-element.elementor-element-2f1ed0a > .elementor-widget-container > a').click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/works/');
  await page.getByLabel('Services CRO &').selectOption('data-analytics');
  await page.getByLabel('Industry Finance (3) Retail (').selectOption('finance');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.elementor.elementor-8710.e-loop-item.e-loop-item-10284 > .elementor-element.elementor-element-a36a73e > .elementor-element.elementor-element-2f1ed0a > .elementor-widget-container > a').click();
});
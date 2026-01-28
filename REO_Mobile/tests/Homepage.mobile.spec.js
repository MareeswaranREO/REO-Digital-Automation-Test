
import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 7'],
  browserName: 'chromium',
});

test('test', async ({ page }) => {
  await page.goto('https://www.reodigital.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForTimeout(5000);
 
  await page.getByRole('button', { name: 'hamburger-icon' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Resource Hub' }).click();
  await page.getByRole('link', { name: 'Resource Hub' }).click();
  await page.getByRole('button', { name: 'X' }).click();
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  window.scrollBy({
    top: document.body.scrollHeight * 0.25,
    behavior: "smooth"
  });
  });
  await page.waitForTimeout(3000);

  await page.locator('//img[@class="attachment-large size-large wp-image-21665 lazyloaded"]').click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.reodigital.com/', { waitUntil: "domcontentloaded" });
  
  
});
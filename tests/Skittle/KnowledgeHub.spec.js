import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.hover('//div[@id="e-n-menu-title-1515"]/div[@class="e-n-menu-title-container"]');
  await page.waitForTimeout(3000);
  await page.locator('//div[@class="e-n-menu-content e-active"]//span[@class="elementor-button-text"][normalize-space()="View all posts"]').click();
  await page.getByPlaceholder('Search …').fill('PPC');
  await page.waitForTimeout(3000);
  await page.locator('//input[@name="_sf_submit"]').click();
  await page.evaluate(() => {
  window.scrollBy({
    top: document.body.scrollHeight * 0.25,
    behavior: "smooth"
  });
  });
  await page.waitForTimeout(5000);
  await page.getByAltText('CTA Bar.jpg').click();
  await page.waitForTimeout(5000);
  await expect(page.locator('//div[@class="elementor-widget-container"]/img[@alt="CTA Bar.jpg"]')).toBeVisible();
  await page.close();
  

 
});
import { test, expect } from '@playwright/test';
test.use({
  viewport: {
    height: 900,
    width: 1440
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.skittledigital.com/');
  await page.waitForTimeout(5000);
  await page.evaluate(() => {
  document.querySelectorAll(".elementor-heading-title")[6].click();
  });
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('textbox', { name: 'First name*' }).click();
  await page.getByRole('textbox', { name: 'First name*' }).fill('mareeswaran');
  await page.getByRole('textbox', { name: 'Last name*' }).click();
  await page.getByRole('textbox', { name: 'Last name*' }).fill('ramar');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('mareeswaran.ramar@reodigital.com');
  await page.getByRole('textbox', { name: 'Phone*' }).click();
  await page.getByRole('textbox', { name: 'Phone*' }).fill('8220184644');
  await page.getByRole('textbox', { name: 'Company' }).click();
  await page.getByRole('textbox', { name: 'Company' }).fill('reo');
  await page.getByRole('textbox', { name: 'Your message*' }).click();
  await page.getByRole('textbox', { name: 'Your message*' }).fill('test');

 const checkbox=  await page.frameLocator("//iframe[@title='reCAPTCHA']").locator('//div[@class="recaptcha-checkbox-border"]');
 await checkbox.click();
 await page.waitForTimeout(5000);
});
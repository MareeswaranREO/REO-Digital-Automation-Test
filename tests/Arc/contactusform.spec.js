import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  //Fill form
  await page.getByRole('menuitem', { name: 'Contact' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('mareeswaran');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('ramar');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mareeswaran.ramar@reodigital.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('8220184644');
  await page.getByRole('textbox', { name: 'Organisation' }).click();
  await page.getByRole('textbox', { name: 'Organisation' }).fill('reo');
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('qa');
  await page.getByRole('button', { name: 'Book a meeting to start your' }).click();
  await page.waitForTimeout(3000);
  //confirmation text validtion
  const msgText = await page.locator('#gform_confirmation_message_1');
  await expect (msgText).toHaveText('Thanks for contacting us! We will get in touch with you shortly.');
  await page.waitForTimeout(3000);
  await page.close();
});
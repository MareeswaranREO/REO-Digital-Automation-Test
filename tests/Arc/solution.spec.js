import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 900,
    width: 1440
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.hover("#solutions-button");
  await page.getByLabel('Become Compliant').getByRole('link', { name: 'Audits & Inclusive User' }).click();
  await page.getByRole('link', { name: 'Learn more about design' }).click();

  //page flow validation
  await page.goto('https://www.arcinclusion.com/solutions/audits-inclusive-user-testing/');

  //form validation
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
  await page.getByRole('textbox', { name: 'Comments (Optional)' }).click();
  await page.getByRole('textbox', { name: 'Comments (Optional)' }).fill('testing');
  await page.getByRole('button', { name: 'Book a meeting to start your' }).click();
  await page.hover("#solutions-button");
  await page.getByLabel('Main menu').getByRole('link', { name: 'Leadership Development' }).click();
  await page.waitForTimeout(3000);
  
  //image validation
  const imgL = await page.getByAltText("An older man wearing a blue jumper gestures expressively while smiling during a conversation, seated at a table in a modern office setting.");
  await page.waitForTimeout(5000);
  await expect(imgL).toBeVisible();
  await page.waitForTimeout(3000);
  await page.close();

  
});
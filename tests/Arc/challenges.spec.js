import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcinclusion.com/');
  await page.getByRole('button', { name: 'Accept cookies' }).click();

  await page.hover ('#challenges-button');
  await page.waitForTimeout(3000);
  await page.locator('//span[contains(text(),"With our tools and training, design system experti")]').click();
  
  
  await page.waitForTimeout(3000);
  await page.hover ('#challenges-button');
  await page.getByText('Become Compliant');
  await page.getByRole('link', { name: 'Become Compliant With our' }).click();
  await page.waitForTimeout(3000);
  //image validation

  await expect(page.getByAltText('A person wearing red glasses and a dark jacket is talking to someone in a brightly lit indoor setting with green plants and blurred lights in the background.')).toBeVisible();
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
  window.scrollBy({
    top: document.body.scrollHeight * 0.5,
    behavior: "smooth"
  });
  });

  await expect (page.locator ('//img[@alt="Two colleagues collaborate at a wall of sticky notes while mapping out an accessibility strategy."]')).toBeVisible();
  await page.getByRole('link', { name: 'Booking a free consultation' }).click();
  await page.goto('https://www.arcinclusion.com/challenges/become-accessibility-compliant/');
  await page.getByRole('link', { name: 'Learn more about website' }).click();
  await page.getByRole('link', { name: 'Learn more about workflow' }).click();
  await page.waitForTimeout(3000);
  await page.close();

}); 
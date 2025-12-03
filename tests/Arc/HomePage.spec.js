const {test, expect} = require ('@playwright/test');

test ('Home page', async ({page})=>{

  await page.goto ('https://www.arcinclusion.com/');

//page title validation
  const pageTitle = page.title();
  console.log ('Page title is:', pageTitle);
  await expect(page).toHaveTitle('Arc Inclusion | Accessibility Services | Digital Accessibility Agency');

  await page.getByRole('button', { name: 'Accept cookies' }).click();
  await page.getByRole('link', { name: 'Our approach to accessibility' }).click();
  await page.waitForTimeout(3000);

  //image validation
  const img1 = await page.getByAltText('Three people engaged in inclusive user testing, smiling and interacting with a computer screen.');
  expect (img1).toBeVisible();
  const img2 = await page.getByAltText('Person on a video call with an accessibility consultant, shown on a laptop screen during a remote pair programming session.');
  expect (img2).toBeVisible();
  await page.waitForTimeout(3000);

  //Accordion validation
  await page.getByText('Is an accessibility audit a').click();
  await page.getByText('Is an accessibility audit a').click();
  await page.getByText('What is the difference').click();
  await page.getByText('What is the difference').click();
  await page.waitForTimeout(3000);

  //CTA click validation
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('link', { name: 'Start your stay accessible' }).click();
  await page.getByRole('link', { name: 'Learn why sustainable' }).click();
  await page.locator('#arc-header').getByRole('link', { name: 'Arc logo with arc letter in' }).click();
  await page.waitForTimeout(3000);
  //footer validation
  await expect (page.getByText("info@arcinclusion.com")).toBeVisible();
  await expect (page.getByText("Quick links")).toBeVisible();
  await page.waitForTimeout(3000);
  await page.close();

} )

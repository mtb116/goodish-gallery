import { test, expect, devices } from '@playwright/test';
test.use({
  ...devices['iPhone 12'],
});
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Buy Me a Coffee at ko-fi.com' }).click()
  ]);
});
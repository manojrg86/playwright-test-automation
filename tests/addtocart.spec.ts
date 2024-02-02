import { expect } from '@playwright/test';
import { test } from './fixtures/page.factory';

test.beforeEach('Launch the website', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Add and remove item from cart', async ({ page, homePage }) => {
  await homePage.login();
  await test.step('Add item to cart and view cart', async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
  });
  await test.step('Remove item from cart', async () => {
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  });
  await test.step('Log out from website', async () => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  });
});
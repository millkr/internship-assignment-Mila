import { test, expect } = require('@playwright/test');
test('Валидация email', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.fill('#email', 'некорректный');
  await page.click('#submit');
  await expect(page.locator('.error-message')).toHaveText('Введите корректный email');
});
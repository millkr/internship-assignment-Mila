import { test, expect } = require('@playwright/test');
test('Проверка обязательных полей', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.click('#submit');
  await expect(page.locator('.error-message')).toHaveText('Заполните это поле');
});
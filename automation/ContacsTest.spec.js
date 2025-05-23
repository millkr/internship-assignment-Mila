import { test, expect } = require('@playwright/test');
test('Проверка блока контактов', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await expect(page.locator('.contacts')).toContainText('Телефон:');
});
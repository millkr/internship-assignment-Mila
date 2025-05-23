import { test, expect } = require('@playwright/test');
test('Успешная отправка формы', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.fill('#name', 'Иван Иванов');
  await page.fill('#email', 'ivan@example.com');
  await page.fill('#message', 'Тестовое сообщение');
  await page.click('#agree');
  await page.click('#submit');
  await expect(page.locator('.success-message')).toBeVisible();
});
import { test, expect } = require('@playwright/test');
test('Проверка обязательного чекбокса', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html', {
  });
  await page.waitForSelector('#name', { state: 'visible' });
  await page.fill('#name', 'пётр(тест)');
  await page.fill('#email', 'test@example.com');
  const checkbox = page.locator('#agreement');
  await expect(checkbox).toBeVisible();
  await page.click('#submit');
  const error = page.locator('.error-message');
  await expect(error).toBeVisible();
  await expect(error).toHaveText("Нужно нажать галочку на согласие");
});
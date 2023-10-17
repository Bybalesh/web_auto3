const { describe, afterEach } = require("node:test");
const user = require("../user");
const { test, expect } = require("@playwright/test");

describe("Авторизация", async ({page}) => {
test("Успешная авторизация", async ({page}) => {
    
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('input[name="email"]', user.mail);
  await page.fill('input[name="password"]', user.passw);
  await page.click('[data-testid="login-submit-btn"]');
  await page.waitForSelector("text=Моё обучение");

  await page.waitForURL("https://netology.ru/profile", { timeout: 5000 });
  expect(page).toHaveURL("https://netology.ru/profile");
  });
  

  test("Неуспешная авторизация", async ({page}) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('input[name="email"]', "bybal@gmail.com");
  await page.fill('input[name="password"]', "9876poem");
  await page.click('[data-testid="login-submit-btn"]');
  await page.waitForSelector('[data-testid="login-error-hint"]');

  const errorHint = await page.textContent('[data-testid="login-error-hint"]');
  expect(errorHint).toContain("Вы ввели неправильно логин или пароль");
  });

  afterEach(async ({ browser }) => {
    if (browser) {
      await browser.close();
    }
  });
});
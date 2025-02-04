import { test, expect } from '@playwright/test';
const {chromium} = require('@playwright/test');


test("Test",async () => {
   const browser = await chromium.launch({headless: false});

const context = await browser.newContext();

const Page = await context.newPage();

let pwd = "secret_sauce";
let usr = "standard_user";

await Page.goto('https://www.saucedemo.com');

await Page.fill('[data-test="username"]', usr);

await Page.locator("//*[@name ='password']").fill(pwd);

await Page.click('[data-test="login-button"]');

await context.close();
await browser.close();
})
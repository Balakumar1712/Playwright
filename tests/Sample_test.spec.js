import { test, expect } from '@playwright/test';

    test("Login Test",async ({browser}) => {
const context = await browser.newContext({ headless: false });
const page = await context.newPage();

let pwd = "secret_sauce";
let usr = "standard_user";

await page.goto('https://www.saucedemo.com');
await page.pause();

// using object locator
//await expect(page.locator("//*[@id='root']//div[contains(text(),'Swag Labs')]")).toHaveText('Swag Labs');
if(page.$('text=Swag Labs')){

await page.fill('[data-test="username"]', usr);

await page.locator('[data-test="username"]').press('Tab');
 
await page.locator("//*[@name ='password']").fill(pwd);

await page.locator('input:has-text("LOGIN")').click();

await page.waitForTimeout(3000);

await expect(page.locator('input:has-text("LOGIN")')).toBeHidden();

await expect(page.locator('//*[text()="Products"]')).toBeVisible();

await expect(page).toHaveScreenshot();

} 
else {
    console.log("Not Found");
}

});


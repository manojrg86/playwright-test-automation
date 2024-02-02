import { test, expect, Page } from "@playwright/test";

export default class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async login() {
        await test.step('Login to the website', async () => {
            await this.page.locator('[data-test="username"]').click();
            await this.page.locator('[data-test="username"]').fill('standard_user');
            await this.page.locator('[data-test="password"]').click();
            await this.page.locator('[data-test="password"]').fill('secret_sauce');
            await this.page.locator('[data-test="login-button"]').click();
        });
    }


}
import { test as base, expect } from "@playwright/test";
import HomePage from "../pages/home.page";


// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  homePage: HomePage;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  //addComputerPage: async ({ page }, use) => {
 //   await use(new AddComputerPage(page));
  //},
});
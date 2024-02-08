import { test as base, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import ApiHelpers from "../pages/api.helpers";


// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  homePage: HomePage;
  apiHelpers: ApiHelpers;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  apiHelpers: async ({  }, use) => {
    await use(new ApiHelpers());
  },
});
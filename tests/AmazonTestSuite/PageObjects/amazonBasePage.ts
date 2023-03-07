import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.verifyUrl()
  }

  getUrl() : string{
    return "";
  }

  verifyUrl() {
    if (this.getUrl().length > 0) {

      const currentUrl = this.page.url();
      expect(
        currentUrl.includes(this.getUrl()),
        {message: `Current url '${currentUrl}' does not contains expected url component ${this.getUrl()}!`})
        .toBeTruthy();
    }
  }
}

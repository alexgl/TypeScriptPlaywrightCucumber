import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './amazonBasePage';
import CommonUtils from "../../../utils/commonUtils";

export class AmazonSignInPage extends BasePage{
  readonly locators: Map<string, Locator>;

  constructor(page: Page) {
    super(page)
    this.locators = this.getLocators();
  }

  getUrl() : string{
    return "ap/signin";
  }

  getRedirectUlr(): string{
    return "?ref_=nav_ya_signin";
  }

  async verifyRedirectedUrlAfterSignIn() {
    await this.locators.get('elementToCheckWhenLoaded')!.waitFor()

    const currentUrl = this.page.url();
    expect(
      currentUrl.includes(this.getRedirectUlr()),
      {message: `Current url '${currentUrl}' does not contains expected url component ${this.getRedirectUlr()} after sign in is complete!`})
      .toBe(true);
  }

  // one place to declare and init locators
  getLocators() : Map<string, Locator> {
    let locatorsMap: Map<string, Locator> = new Map<string, Locator>();

    //signin
    locatorsMap.set('userName', this.page.locator("//input[@id='ap_email']"));
    locatorsMap.set('continue', this.page.locator("//input[@id='continue']"));
    locatorsMap.set('password', this.page.locator("//input[@id='ap_password']"));
    locatorsMap.set('signIn', this.page.locator("//input[@id='signInSubmit']"));

    locatorsMap.set('elementToCheckWhenLoaded', this.page.locator("//div[@id='navbar']/.//div[@id='nav-tools']/.//span[@id='nav-link-accountList-nav-line-1']"));

    return locatorsMap;
  }

  async getCurrentUser(): Promise<string | null> {
    return await this.locators.get('userNameInNav')!.textContent();
  }


}
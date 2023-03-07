import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './amazonBasePage';
import { AmazonHeader } from './amazonHeader';

export class AmazonHomePage extends BasePage {
  readonly locators: Map<string, Locator>;
  readonly amazonHeader: AmazonHeader;

  constructor(page: Page) {
    super(page);
    this.locators = this.getLocators();
    this.amazonHeader = new AmazonHeader(page);
  }

  getUrl() : string{
    return "";
  }

  // one place to declare and init locators
  getLocators() : Map<string, Locator> {
    let locatorsMap: Map<string, Locator> = new Map<string, Locator>();
    
    locatorsMap.set('userNameInNav', this.page.locator("//div[@id='navbar']/.//div[@id='nav-tools']/.//span[@id='nav-link-accountList-nav-line-1']"));
    locatorsMap.set('signInToolTipLink', this.page.locator("//div[@id='nav-signin-tooltip']/.//span[@class='nav-action-inner' and contains(text(), 'Sign in')]"));

    //signin
    locatorsMap.set('helloSignIn', this.page.locator("//div[@id='nav-tools']/.//span[@id='nav-link-accountList-nav-line-1' and contains(text(), 'Hello, sign in')]"));

    return locatorsMap;
  }

  async getCurrentUser(): Promise<string | null> {
    return await this.locators.get('userNameInNav')!.textContent();
  }


}
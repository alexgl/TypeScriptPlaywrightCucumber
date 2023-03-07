import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './amazonBasePage';

export class AmazonHeader extends BasePage {
  readonly locators: Map<string, Locator>;
  
  constructor(page: Page) {
    super(page);
    this.locators = this.getLocators();
  }

  getUrl() : string{
    return "";
  }

  getLocators() : Map<string, Locator> {
    let locatorsMap: Map<string, Locator> = new Map<string, Locator>();
    
    locatorsMap.set('headerLinkTodaysDeals', this.page.locator(`//div[@id="nav-xshop"]/a[text()="Today's Deals"]`));

    return locatorsMap;
  }



}
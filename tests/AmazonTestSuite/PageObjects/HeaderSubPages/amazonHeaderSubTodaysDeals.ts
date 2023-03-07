import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../amazonBasePage';

export class AmazonHeaderSubTodaysDeals extends BasePage {
  readonly locators: Map<string, Locator>;

  constructor(page: Page) {
    super(page);
    this.locators = this.getLocators();
  }

  getUrl() : string{
    return "deals?ref_=nav_cs_gb";
  }

  getLocators() : Map<string, Locator> {
    let locatorsMap: Map<string, Locator> = new Map<string, Locator>();
    
    //filters
    //prime programs
    locatorsMap.set('primeProgramPrime', this.page.locator("//span[@aria-label='Prime free shipping filter']/.//i[@aria-label='Prime eligible']/.."));
    locatorsMap.set('primeProgramPrimeEarlyAccess', this.page.locator("//span[@aria-label='Prime free shipping filter']/.//span[text()='Prime Early Access deals']"));
    locatorsMap.set('primeProgramPrimeExclusive', this.page.locator("//span[@aria-label='Prime free shipping filter']/.//span[text()='Prime Exclusive deals']"));

    //departments
    locatorsMap.set('filterDepartmentBooks', this.page.locator("//span[@aria-label='Departments filter']/.//span[text()='Books']"));
    locatorsMap.set('filterDepartmentElectronics', this.page.locator("//span[@aria-label='Departments filter']/.//span[text()='Electronics']"));
    locatorsMap.set('filterDepartmentFashion', this.page.locator("//span[@aria-label='Departments filter']/.//span[text()='Fashion']"));

    //price
    locatorsMap.set('priceUnder25', this.page.locator("//span[@aria-label='Price filter']/.//span[text()='Under $25']/.."));
    locatorsMap.set('price25to50', this.page.locator("//span[@aria-label='Price filter']/.//span[text()='$25 to $50']/.."));
    locatorsMap.set('price50to100', this.page.locator("//span[@aria-label='Price filter']/.//span[text()='$50 to $100']/.."));

    //results
    //
    locatorsMap.set('resultsDealsGrid', this.page.locator("//div[@aria-label='Deals grid']"));

    return locatorsMap;
  }

  getResultsEntryByText(title:string): Locator {
    console.log(`Log: locator string is ->//div[@aria-label='Deals grid']/.//div[text()='${title}']<-`)
    return this.page.locator(`//div[@aria-label='Deals grid']/.//div[text()='${title}']`);
  }

  async verifyResultsByTextPresentOnPage(title:string): Promise<boolean> {
    return await this.getResultsEntryByText(title).isVisible();
  }
}
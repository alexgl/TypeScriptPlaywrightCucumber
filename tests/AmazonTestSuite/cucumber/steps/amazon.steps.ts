import { Given, When, Then }  from "@cucumber/cucumber";
import { OurWorld } from "../../../../cucumber/world";
import { readFileSync } from 'fs';
import { AmazonHomePage } from "../../PageObjects/amazonHomePage";
import { AmazonSignInPage } from "../../PageObjects/amazonSignInPage";
import { AmazonHeaderSubTodaysDeals } from "../../PageObjects/HeaderSubPages/amazonHeaderSubTodaysDeals";
import userData from '../../Data/userData.json';
import { Encryption } from "../../../../encryption";
var assert = require('cucumber-assert');


Given("I land on Amazon Homepage", async function (this: OurWorld) {
    await this.page.goto(this.parameters.appUrl, {waitUntil: 'load'});

    //init and save homepage in scenario dictionary
    const amazonHomePage: AmazonHomePage = new AmazonHomePage(this.page);
    this.dictionary.set('AmazonHomePage', amazonHomePage);
});

Given("I log into Amazon Homepage", async function (this: OurWorld) {
    let amazonHomePage: AmazonHomePage = this.dictionary.get('AmazonHomePage') as AmazonHomePage;
    await amazonHomePage.locators.get('helloSignIn')!.click();

    const amazonSignInPage: AmazonSignInPage = new AmazonSignInPage(this.page);
    await amazonSignInPage.locators.get('userName')!.type(Encryption.decryptWithAES(userData['userName']));
    await amazonSignInPage.locators.get('continue')!.click();
    await amazonSignInPage.locators.get('password')!.type(Encryption.decryptWithAES(userData['password']));
    await amazonSignInPage.locators.get('signIn')!.click();
    
    await amazonSignInPage.verifyRedirectedUrlAfterSignIn();
    console.log(`Home Page logged in user ${await amazonSignInPage.locators.get('elementToCheckWhenLoaded')!.textContent()}`);
});

/**
 * Attempt to log in via cookies.
 */
Given("Use Amazon User Cookie", async function (this: OurWorld) {
    let amazonHomePage: AmazonHomePage = this.dictionary.get('AmazonHomePage') as AmazonHomePage;

    const amazonCookieJsonFile : string = readFileSync('tests/AmazonTestSuite/Data/Cookies/user.json', 'utf-8');
    // console.log('file content is' + amazonCookieJsonFile);
    await this.context.addCookies([{name:"amazoncookie", value: amazonCookieJsonFile, url: this.parameters.appUrl}]);

    await this.page.reload();
    amazonHomePage = new AmazonHomePage(this.page);
    this.dictionary.set('AmazonHomePage', amazonHomePage);

    console.log(`Home Page logged in user ${await amazonHomePage.getCurrentUser()}`);
});

Given("I click on Today's Deals", async function (this: OurWorld) {
    let amazonHomePage: AmazonHomePage = this.dictionary.get('AmazonHomePage') as AmazonHomePage;
    await amazonHomePage.amazonHeader.locators.get('headerLinkTodaysDeals')!.click();

    const amazonHeaderSubTodaysDeals: AmazonHeaderSubTodaysDeals = new AmazonHeaderSubTodaysDeals(this.page);
    this.dictionary.set('AmazonHeaderSubTodaysDeals', amazonHeaderSubTodaysDeals);
});

When("I select {string} in Prime Program Filter", async function (this: OurWorld, primeProgram: string) {
    let amazonHeaderSubTodaysDeals: AmazonHeaderSubTodaysDeals = this.dictionary.get('AmazonHeaderSubTodaysDeals') as AmazonHeaderSubTodaysDeals;

    switch(primeProgram){
        case "prime": {
            await amazonHeaderSubTodaysDeals.locators.get('primeProgramPrime')!.click();
            break;
        }
        case "early": {
            await amazonHeaderSubTodaysDeals.locators.get('primeProgramPrimeEarlyAccess')!.click();
            break;
        }
        case "exclusive": {
            await amazonHeaderSubTodaysDeals.locators.get('primeProgramPrimeExclusive')!.click();
            break;
        }
        default: {
            throw new Error('Prime Program Filter: Incorrect data entered!'); 
        }
    }
});

When("I select {string} in Deparments Filter", async function (this: OurWorld, department: string) {
    let amazonHeaderSubTodaysDeals: AmazonHeaderSubTodaysDeals = this.dictionary.get('AmazonHeaderSubTodaysDeals') as AmazonHeaderSubTodaysDeals;
    switch(department){
        case "books": {
            await amazonHeaderSubTodaysDeals.locators.get('filterDepartmentBooks')!.click();
            break;
        }
        case "electronics": {
            await amazonHeaderSubTodaysDeals.locators.get('filterDepartmentElectronics')!.click();
            break;
        }
        case "fashion": {
            await amazonHeaderSubTodaysDeals.locators.get('filterDepartmentFashion')!.click();
            break;
        }
        default: {
            throw new Error('Department Filter: Incorrect data entered!');
        }
    }
});

When("I select {string} in Price Filter", async function (this: OurWorld, price: string) {
    let amazonHeaderSubTodaysDeals: AmazonHeaderSubTodaysDeals = this.dictionary.get('AmazonHeaderSubTodaysDeals') as AmazonHeaderSubTodaysDeals;
    switch(price){
        case "priceUnder25": {
            await amazonHeaderSubTodaysDeals.locators.get('priceUnder25')!.click();
            break;
        }
        case "price25to50": {
            await amazonHeaderSubTodaysDeals.locators.get('price25to50')!.click();
            break;
        }
        case "price50to100": {
            await amazonHeaderSubTodaysDeals.locators.get('price50to100')!.click();
            break;
        }
        default: {
            throw new Error('Price Filter: Incorrect data entered!');
        }
    }
});

Then("I should see {string} in Results", async function (this: OurWorld, product: string) {
    //assume page has been refreshed or changed, need to reinit page obj
    let amazonHeaderSubTodaysDeals: AmazonHeaderSubTodaysDeals = new AmazonHeaderSubTodaysDeals(this.page);
    this.dictionary.set('AmazonHeaderSubTodaysDeals', amazonHeaderSubTodaysDeals);

    let productsArray: string[] = product.split(',');

    //multiple asserts
    let assertErrors: string[] = [];
    let assertsFailed: boolean = false;

    for(var index in productsArray)
    { 
        const isProductPresent: boolean = await amazonHeaderSubTodaysDeals.getResultsEntryByText(productsArray[index]).isVisible();
        if(!isProductPresent) {
            assertsFailed = true;
            assertErrors.push(`Product titles ${productsArray[index]} was NOT FOUND in results.`);
        }
    }

    //evaluate all asserts
    assert.equal(assertsFailed, false, assertErrors.join("; "));
});

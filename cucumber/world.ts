import { World as CucumberWorld } from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright";
var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(120000);

export interface OurWorld extends CucumberWorld {
  context: BrowserContext;
  page: Page;
  dictionary: Map<string, any>;
}

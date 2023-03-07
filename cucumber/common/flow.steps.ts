import { Given, When, Then }  from "@cucumber/cucumber";
import { Encryption } from "../../encryption";
import { OurWorld } from "../world";
import CommonUtils from "../../utils/commonUtils";


Given("Pause", async function (this: OurWorld, timout = 3600000) {
    await this.page.pause();
});

Given("Pause for {string} seconds", async function (this: OurWorld, seconds: string, timout = 3600000) {
    await CommonUtils.delay(Number.parseInt(seconds)  * 1000);
});

// Given("I encrypt '{string}' field with value '{string}'", async function (nameOfField: string, value: string) {
Given('I encrypt {string} field with value {string}', async function (nameOfField: string, value: string) {
    console.log(`\n-> Encrypting field name '${nameOfField}' encrypted value is ->${Encryption.encryptWithAES(value)}<-\n`);
});


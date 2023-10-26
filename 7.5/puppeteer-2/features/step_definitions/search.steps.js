const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement, ButtonIsEnabled } = require("../../lib/commands.js");

Before(async function () {
	this.browser = await puppeteer.launch({
		headless: false, slowMo: 500, defaultViewport: null,
		args: ['--start-maximized'],
	});
	this.page = await this.browser.newPage();
	await this.page.setDefaultNavigationTimeout(0);
	await this.page.goto('http://qamid.tmweb.ru/client/index.php');
});

After(async function () {
	if (this.browser) {
		await this.browser.close();
	}
});

Given("user is on the booking page", async function () { //1 сценарий
});
When("user chooses a ticket", async function () {
	await clickElement(this.page, 'body > nav > a:nth-child(5)');
	await clickElement(this.page, 'body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
	await this.page.waitForSelector('body > main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(5)');
});
Then("the booking button for single ticket should be enabled", async function () {
	const isButtonActive = await buttonIsEnabled(this.page, 'body > main > section > button', 'disabled');
	expect(isButtonActive).to.be.false;
});


Given("user is on the booking page", async function () {  //2 сценарий
});
When("user chooses multiple tickets", async function () {
	await clickElement(this.page, 'body > nav > a:nth-child(3)');
	await clickElement(this.page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
	await this.page.waitForSelector('body > main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(8) > span:nth-child(18)');
	await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)');
});
Then("the booking button should be enabled", async function () {
	const isButtonActive = await buttonIsEnabled(this.page, 'body > main > section > button', 'disabled');
	expect(isButtonActive).to.be.false;
});


Given("user is on the booking page", async function () {  //3 сценарий
});
When("user chooses a booked ticket", async function () {
	await clickElement(this.page, 'body > nav > a:nth-child(3)');
	await clickElement(this.page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
	await page.waitForSelector('body > main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken');
});
Then("the booking button should be disabled", async function () {
	const isButtonActive = await buttonIsEnabled(this.page, 'body > main > section > button', 'disabled');
	expect(isButtonActive).to.be.true;
});

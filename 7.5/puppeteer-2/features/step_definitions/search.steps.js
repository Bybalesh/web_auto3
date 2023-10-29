const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given1, When1, Then1, Given2, When2, Then2, Given3, When3, Then3, Before, After } = require("cucumber");
const { getText, clickElement, ButtonIsEnabled } = require("../../lib/commands.js");

Before(async function () {
	this.browser = await puppeteer.launch({
		headless: false, slowMo: 30, defaultViewport: null,
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

Given1("user is on the booking page", async function () { //1 сценарий
});
When1("user chooses a ticket", async function () {
	await clickElement(this.page, 'nav > a:nth-child(5)');
	//await this.page.waitForTimeout(500);
	await clickElement(this.page, 'main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
	await this.page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, '.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(5)');
});
Then1("the booking button for single ticket should be enabled", async function () {
	//await this.page.waitForTimeout(1000);
	const isButtonActive = await buttonIsEnabled(this.page, 'main > section > button', 'disabled');
	expect(isButtonActive).to.be.false;
});


Given2("user is on the booking page", async function () {  //2 сценарий
});
When2("user chooses multiple tickets", async function () {
	await clickElement(this.page, 'nav > a:nth-child(3)');
	//await this.page.waitForTimeout(5000);
	await clickElement(this.page, 'main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
	await this.page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, '.buying-scheme__wrapper > div:nth-child(8) > span:nth-child(18)');
	await clickElement(this.page, '.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)');
});
Then2("the booking button should be enabled", async function () {
	//await this.page.waitForTimeout(1000);
	const isButtonActive = await buttonIsEnabled(this.page, 'main > section > button', 'disabled');
	expect(isButtonActive).to.be.false;
});


Given3("user is on the booking page", async function () {  //3 сценарий
});
When3("user chooses a booked ticket", async function () {
	await clickElement(this.page, 'nav > a:nth-child(2)');
	//await this.page.waitForTimeout(1000);
	await clickElement(this.page, 'main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
	await page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
	await clickElement(this.page, '.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(10)');
});
Then3("the booking button should be disabled", async function () {
	//await this.page.waitForTimeout(1000);
	const isButtonActive = await buttonIsEnabled(this.page, 'main > section > button', 'disabled');
	expect(isButtonActive).to.be.true;
});

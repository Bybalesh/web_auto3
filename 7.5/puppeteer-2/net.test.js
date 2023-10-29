const { clickElement, putText, getText, buttonIsEnabled } = require("./lib/commands.js");
const { expect } = require('chai');

let page;

beforeEach(async () => {
	page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
	page.close();
});

describe("ticket reservations tests", () => {

	test("The first test", async () => { //1 позитивный тест
		await clickElement(page, 'nav > a:nth-child(5)');
		await clickElement(page, 'main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
		await page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
		await clickElement(page, '.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(5)');
		const isButtonActive = await buttonIsEnabled(page, 'main > section > button', 'disabled');
		expect(isButtonActive).to.be.false;
	});

	test("Booking multiple tickets", async () => { //2 позитивный тест
		await clickElement(page, 'nav > a:nth-child(3)');
		await clickElement(page, 'main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
		await page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
		await clickElement(page, '.buying-scheme__wrapper > div:nth-child(8) > span:nth-child(18)');
		await clickElement(page, '.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)');
		const isButtonActive = await buttonIsEnabled(page, 'main > section > button', 'disabled');
		expect(isButtonActive).to.be.false;
	});
	test("reserved place", async () => { //негативный тест
		await clickElement(page, 'nav > a:nth-child(2)');
		await clickElement(page, 'main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
		await page.waitForSelector('main > section > div.buying-scheme > div.buying-scheme__wrapper');
		await clickElement(page, '.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(10)');
		const isButtonActive = await buttonIsEnabled(page, 'main > section > button', 'disabled');
		expect(isButtonActive).to.be.true;
	});
});



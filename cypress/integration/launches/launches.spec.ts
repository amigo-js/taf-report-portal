import LogInPage from "../../support/pages/login.page";
import SideBar from "../../support/pages/sideBar.page";
import LaunchesPage from "../../support/pages/launches.page";


describe('Launches', () => {
	const logInPage = new LogInPage();
	const sideBar = new SideBar();
	const launchesPage = new LaunchesPage();

	beforeEach(function () {
		logInPage.visit();
		logInPage.login();
	})

	it(' 1 Launches tab existing verification', () => {
		sideBar.clickLaunchesButton();
		logInPage.launchesUrlVerification()
	})	

	it('2 Contains specified columns', function () {
		sideBar.clickLaunchesButton();
		const gridHeaderColumns = [
			"",
			"NAME",
			"START TIME",
			"TOTAL",
			"PASSED",
			"FAILED",
			"SKIPPED",
			"PRODUCT BUG",
			"AUTO BUG",
			"SYSTEM ISSUE",
			"TO INVESTIGATE",
		];
		cy.wait(3000)

		const lowerCaseOfGridHeaderColumns = gridHeaderColumns.map(element => {
			return element.toLowerCase();
		  });

		launchesPage.getGridHeader().children('.headerCell__header-cell--hrQit').find('.headerCell__title-full--2CU9W').should('have.length', 11)
		.each((value) => {
			expect(lowerCaseOfGridHeaderColumns).includes(value.text().trim());
		})

	});

});


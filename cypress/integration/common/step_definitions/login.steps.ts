/// <reference types="cypress" />
import LogInPage from "../../../support/pages/login.page";
import SideBar from "../../../support/pages/sideBar.page";
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import LaunchesPage from "../../../support/pages/launches.page";

const logInPage = new LogInPage();
const sideBar = new SideBar();
const launchesPage = new LaunchesPage();

before(function () {
    logInPage.visit();
})

Given('I login as default user', () => {
    logInPage.login();
})

Then('Verify success popup message', () => {
    logInPage.successPopupVerification();
})

And('url content', () => {
    logInPage.dashboardUrlVerification();
})

Then('column headers equals to values', () => {
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
})
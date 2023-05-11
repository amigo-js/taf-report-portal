import LogInPage from "../../support/pages/login.page";
import SideBar from "../../support/pages/sideBar.page";
import LaunchesPage from "../../support/pages/launches.page";
import characterdata from "../../fixtures/launchesDataTables/launchesTableData.json";

characterdata.forEach((c) => {
    describe('Launches', () => {
        const logInPage = new LogInPage();
        const sideBar = new SideBar();
        const launchesPage = new LaunchesPage();
    
        beforeEach( () => {
            logInPage.visit();
            logInPage.login();
        })
    
    it(`Data driven test ${c.name & c.total & c.passed & c.failed & c.skipped & c.productBug & 
        c.autoBug & c.systemIssue & c.toInvestigate }`, () => {
        sideBar.clickLaunchesButton();
        launchesPage.getItemName().should('contain', c.name)
        launchesPage.getItemTotal().should('contain', c.total)
        launchesPage.getItemPassed().should('contain', c.passed)
        launchesPage.getItemFailed().should('contain', c.failed)
        launchesPage.getItemSkipped().should('contain', c.skipped)
        launchesPage.getItemProductBug().should('contain', c.productBug)
        launchesPage.getItemAutoBug().should('contain', c.autoBug)
        launchesPage.getItemSystemIssue().should('contain', c.systemIssue)
        launchesPage.getItemToInvestigate().should('contain', c.toInvestigate)
    })
    
    });
})



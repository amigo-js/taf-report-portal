export default class LaunchesPage {

    getGridHeader(){
        return cy.get('div.gridHeader__grid-header--3qdVQ');
    }

    getGridRow(){
        return cy.get('div.gridRow__grid-row--1pS-5');
    }

    getItemName(){
        return cy.get('div.itemInfo__main-info--2HB9g');
    }

    getItemTotal(){
        return cy.get('div.launchSuiteGrid__total-col--1zT8z');
    }

    getItemPassed(){
        return cy.get('div.launchSuiteGrid__passed-col--2EZNC');
    }

    getItemFailed(){
        return cy.get('div.launchSuiteGrid__failed-col--1LKOb');
    }

    getItemSkipped(){
        return cy.get('div.launchSuiteGrid__skipped-col--1zvap');
    }

    getItemProductBug(){
        return cy.get('div.launchSuiteGrid__pb-col---Q-5f');
    }

    getItemAutoBug(){
        return cy.get('div.launchSuiteGrid__ab-col--1e3O7');
    }

    getItemSystemIssue(){
        return cy.get('div.launchSuiteGrid__si-col--1selD');
    }

    getItemToInvestigate(){
        return cy.get('div.launchSuiteGrid__ti-col--33O72');
    }
}


import {username, password} from  "../../fixtures/credentials/credentialsVAUser.json";

export default class LogInPage {
    
    getEmailInput(){
        return cy.get('input[name="login"]', {timeout: 30000});
    }

    typeEmailInput(value: string){
        return this.getEmailInput().should('be.visible').click({force:true}).type(value);
    }

    getPasswordInput(){
        return cy.get('input[placeholder="Password"]', {timeout: 30000});
    }

    typePasswordInput(value: string){
        return this.getPasswordInput().should('be.visible').click({force:true}).type(value);
    }

    clickSubmitButton(){
        return cy.get('[type="submit"]').click();
    }

    visit = () => {
        cy.visit((Cypress.env('urlLocal') ), {timeout: 30000});
    }

    login = () => {
        cy.wait(3000)
            this.getEmailInput().then(() => {
                this.typeEmailInput(username).then(() => {
                    this.getPasswordInput().then(() => {
                        this.typePasswordInput(password)
                        this.clickSubmitButton()
                    })
                })
            }) 
    }
    
    dashboardUrlVerification = () => {
        cy.url().should('include', '/dashboard');
    }

    launchesUrlVerification = () => {
        cy.url().should('include', '/launches');
    }

    successPopupVerification = () => {
        cy.contains('Signed in successfully');
    }

    }

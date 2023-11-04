Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import RegistrationLocators from './locators/RegistrationLocators.json'

class RegistrationPage{

    visitarPagina = () => { 
        cy.visit('/my-account/');
    };

    doRegistration = (json) => { 
    cy.get(RegistrationLocators.inpEmailReg).type(json.email);
    cy.get(RegistrationLocators.inpPassReg).type(json.pass);
    cy.get(RegistrationLocators.btnRegistration).click();
};

    doRegistrationScenarioOutline = (email,pass) => { 
    cy.get(RegistrationLocators.inpEmailReg).type(email);
    cy.get(RegistrationLocators.inpPassReg).type(pass);
    cy.get(RegistrationLocators.btnRegistration).click();
};
}

export default new RegistrationPage(); 

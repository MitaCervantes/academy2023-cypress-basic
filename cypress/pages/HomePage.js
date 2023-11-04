Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import HomeLocators from './locators/HomeLocators.json'

class HomePage{
    verificarHome = () => {
        cy.get(HomeLocators.divLoginReg).should('be.visible');
        cy.get(HomeLocators.tituloHome).should('contain.text', 'Hello');
    }

    verificarInicioParaLogin = () => {
        cy.get(HomeLocators.divLoginReg).should('be.visible');      
    }

}

export default new HomePage();
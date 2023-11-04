import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import RegistrationPage from '@pages/RegistrationPage'
import HomePage from '@pages/HomePage'



Given('Me registro como usuario correctamente', () => {
    cy.fixture('examples/Registration.json').then((json) => {
        cy.visit("/my-account/");       
        RegistrationPage.doRegistration(json);
       
    })
})

Given('Me registro con datos incorrectos', () => {
    cy.fixture('examples/Registration.json').then((json) => {
        cy.visit("/my-account/");        
        RegistrationPage.doRegistration(json);

    })
})

When('Me registro como usuario con email {string} y pass {string}', (email,pass) => {
    RegistrationPage.doRegistrationScenarioOutline(email,pass);
})

Then('Valido estar en la pagina para loguearme', () => {
    HomePage.verificarInicioParaLogin();     
})




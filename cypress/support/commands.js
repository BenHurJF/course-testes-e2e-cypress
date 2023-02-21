/// <reference types="cypress" />

import locators from '../shared/locators';

Cypress.Commands.add('preencheSubmeteFormulario', (email, senha) => {
    cy.visit('/signup');
    cy.get(locators.login.email).type(email);
    cy.get(locators.login.senha).type(senha, { log: false });
    cy.get(locators.login.confirmarSenha).type(senha, { log: false });
    cy.contains('button', 'Signup').click();
    cy.get(locators.login.confirmarCodigo).should('be.visible');
});

Cypress.Commands.add('login', () => {
    cy.visit('/signin');
    cy.get(locators.login)
});

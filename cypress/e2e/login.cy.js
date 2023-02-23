/// <reference types="cypress" />

describe('Cenários de teste referente ao signin', () => {
    it('Login com sucesso', () => {
        cy.intercept('GET', '**/notes').as('getNotes');
        cy.login(
            Cypress.env('USER_EMAIL'),
            Cypress.env('USER_PASSWORD'),
            { cacheSession: false }
        );

        cy.wait('@getNotes', { timeout: 20000 });
    });
});
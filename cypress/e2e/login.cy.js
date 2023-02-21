/// <reference types="cypress" />

describe('Cenários de teste referente ao signin', () => {
    it('Login com sucesso', () => {
        cy.intercept('GET', '**/notes').as('getNotes');
        cy.login();
        cy.wait('@getNotes', {timeout: 20000});
    });
});
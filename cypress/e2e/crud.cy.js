/// <reference types="cypress"/>

import faker from 'faker-br';

describe('Cenários de teste referente ao CRUD da aplicação', () => {
    it('CRUD successfully', () => {
        const descricao = 'Nota de teste - ' + faker.lorem.words(5)

        cy.intercept('GET', '**/notes').as('getNotes');
        cy.login()
        cy.visit('/notes/new')

        cy.criarNota(descricao)
        cy.wait('@getNotes')

        
    });
});
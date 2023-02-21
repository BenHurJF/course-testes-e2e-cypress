/// <reference types="cypress" />
import faker from 'faker-br';

describe('Cenários de testes referente ao Signup', () => {
  it('Cadastro usando o código de confirmação enviado por e-mail com Sucesso', () => {
    const email = `${faker.random.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`;
    const senha = Cypress.env('USER_PASSWORD');

    cy.intercept('GET', '**/notes').as('getNotes');
    
    cy.preencheSubmeteFormulario(email, senha);

    cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
      sentTo: email
    }).then(message => {
      const confirmationCode = message.html.body.match(/\d{6}/)[0];
      cy.get('#confirmationCode').type(`${confirmationCode}{enter}`);

      cy.wait('@getNotes', { timeout: 18000 });
      cy.contains('h1', 'Your Notes').should('be.visible');
    });
  });
});

/// <reference types="Cypress" />

const LINK = 'http://127.0.0.1:8080';

describe('home', () => {
  beforeEach(() => {
    cy.visit(LINK);
  });

  it('mockea la pagina inicial', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');

    cy.get('h1').contains('PokeDex');
    cy.get('h2').contains('Hay 1279 pokemones, elije el tuyo:');
    cy.get('#grilla-de-pokemones a').should('have.length', 20);
    cy.get('#ir-principio').should('have.class', 'disabled');
    cy.get('#ir-atras').should('have.class', 'disabled');
    cy.get('#ir-adelante').should('have.class', 'abled');
    cy.get('#ir-final').should('have.class', 'abled');
    cy.get('#data-pokemon').should('not.be.visible');
    cy.get('#volver-atras').should('not.be.visible');
  });

  it('cambia a la segunda pagina', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');

    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', {
      fixture: 'pagina-2.json',
    }).as('segunda pagina');

    cy.get('#ir-adelante').click();
    cy.get('h2').contains('Hay 1279 pokemones, elije el tuyo:');
    cy.get('#grilla-de-pokemones a').should('have.length', 20);
    cy.get('#ir-principio').should('have.class', 'abled');
    cy.get('#ir-atras').should('have.class', 'abled');
    cy.get('#ir-adelante').should('have.class', 'abled');
    cy.get('#ir-final').should('have.class', 'abled');
    cy.get('#data-pokemon').should('not.be.visible');
    cy.get('#volver-atras').should('not.be.visible');
  });

  it('cambia a la pagina final', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');

    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=1260&limit=19', {
      fixture: 'pagina-final.json',
    }).as('pagina final');

    cy.get('#ir-final').click();
    cy.get('h2').contains('Hay 1279 pokemones, elije el tuyo:');
    cy.get('#grilla-de-pokemones a').should('have.length', 19);
    cy.get('#ir-principio').should('have.class', 'abled');
    cy.get('#ir-atras').should('have.class', 'abled');
    cy.get('#ir-adelante').should('have.class', 'disabled');
    cy.get('#ir-final').should('have.class', 'disabled');
    cy.get('#data-pokemon').should('not.be.visible');
    cy.get('#volver-atras').should('not.be.visible');
  });

  it('va a ver a charmander', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');

    cy.intercept('https://pokeapi.co/api/v2/pokemon/charmander', {
      fixture: 'charmander.json',
    }).as('pagina charmander');

    cy.get('#grilla-de-pokemones a').eq(3).click();
    cy.get('#data-pokemon').should('be.visible');
    cy.get('#volver-atras').should('be.visible');
    cy.get('h2').should('not.be.visible');
    cy.get('#grilla-de-pokemones').should('not.be.visible');
    cy.get('#flechas').should('not.be.visible');
  });

  it.only('ve los movimientos de charmander y vuelve atras', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');
    cy.intercept('https://pokeapi.co/api/v2/pokemon/charmander', {
      fixture: 'charmander.json',
    }).as('pagina charmander');

    cy.get('#grilla-de-pokemones a').eq(3).click();
    cy.get('#ver-movimientos').click();
    cy.get('#salir').should('be.visible');
    cy.get('#movimientos div span').should('have.length.greaterThan', 0);

    cy.get('#salir').click();
    cy.get('#salir').should('not.be.visible');
    cy.get('#data-pokemon').should('be.visible');
    cy.get('#volver-atras').should('be.visible');
    cy.get('h2').should('not.be.visible');
    cy.get('#grilla-de-pokemones').should('not.be.visible');
    cy.get('#flechas').should('not.be.visible');
  });

  it('clickea volver atras', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {
      fixture: 'pagina-inicial.json',
    }).as('pagina inicial');

    cy.intercept('https://pokeapi.co/api/v2/pokemon/charmander', {
      fixture: 'charmander.json',
    }).as('pagina charmander');

    cy.get('#grilla-de-pokemones a').eq(3).click();
    cy.get('#volver-atras').click();
    cy.get('h2').should('be.visible');
    cy.get('#grilla-de-pokemones').should('be.visible');
    cy.get('#flechas').should('be.visible');
    cy.get('#data-pokemon').should('not.be.visible');
    cy.get('#volver-atras').should('not.be.visible');
  });
});

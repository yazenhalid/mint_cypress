/// <reference types="Cypress" />


describe('test Sign up', () => {

    it('open mintplatform', () => {
        cy.viewport('iphone-x');
        cy.visit('https://webcore.mintplatform.net');
        cy.get('h3 [href="/Account/Register"]').click({ force: true });
        cy.get('[for="fullName"]').type('test cypress');
        cy.get('[for="username"]').type('testcy');
        cy.get('[for="email"]').type('testcy@moakt.cc');
        cy.get('.options li').eq(1).click({ force: true });
        cy.get('.options li').eq(5).click({ force: true });
        cy.get('[style="display: none;"] li').eq(3).click({ force: true });
        cy.get('[role="button"]').click({ force: true });
        cy.get('.ui-autocomplete li').eq(3).click({ force: true });
    })


})

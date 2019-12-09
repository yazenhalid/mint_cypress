/// <reference types="Cypress" />


describe('test Sign in', () => {

    it('open mintplatform', () => {
        cy.viewport('macbook-15')
        cy.visit('https://webcore.mintplatform.net');
        cy.fixture('signin').as('data');
        cy.get('@data').then((testData) => {
            cy.get('#UserName').type(testData.username1);
            cy.get('#Password').type(testData.password1);
            cy.get('[type="submit"]').click();
            cy.get('.dropdown-item > span').click({ force: true });
        })
                     
    })

})

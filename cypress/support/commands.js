// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Sign_in_webcore.mintplatform
Cypress.Commands.add('Sign_in', () => {
        cy.fixture('signin').as('data');
        cy.get('@data').then((testData) => {
                cy.get('#UserName').type(testData.username1);
                cy.get('#Password').type(testData.password1);
                cy.get('[type="submit"]').click();

        })
})
//Sign_out
Cypress.Commands.add('Sign_out', () => {
        cy.get('.dropdown-item > span').click({ force: true });

})

//Sign_in_my-mintplatfprm
Cypress.Commands.add('Sign_in_my', () => {
        cy.fixture('signin').as('data');
        cy.get('@data').then((testData) => {
                cy.get('#UserName').type(testData.my_usernameB2C);
                cy.get('#Password').type(testData.my_passwordB2C);
                cy.get('[type="submit"]').click();

        })
})

//Sign_in_SudanProd
Cypress.Commands.add('Sign_in_SudanProd', () => {
        cy.fixture('signin').as('data');
        cy.get('@data').then((testData) => {
                cy.get('#UserName').type(testData.SudanProd_usernameB2C);
                cy.get('#Password').type(testData.SudanProd_passwordB2C);
                cy.get('[type="submit"]').click();

        })
})

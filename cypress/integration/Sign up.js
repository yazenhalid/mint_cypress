/// <reference types="Cypress" />


// describe('mintplatform', () => {

//     it('moatk email', () => {
//         cy.viewport('macbook-13');
//         cy.visit('https://www.moakt.com/');
//         cy.get('.mail_butt').click( );
//         cy.get('#copy-email > .material-icons').click({ timeout: 5000 });
//         cy.get('#email-address').then((moaktmail) => {
//             var text = moaktmail.text();
//             cy.log(text);
//         })
//     })
/////

describe('test Sign up', () => {
    it('moatk email', () => {
        cy.viewport('macbook-13');
        cy.visit('https://www.moakt.com/');
        cy.get('.mail_butt').click();
        cy.get('#copy-email > .material-icons').click({ timeout: 5000 });
        //cy.get('#email-address').focus();
        //cy.get('#email-address').focused()
        cy.get('#email-address').then((moaktmail) => {
            let text = moaktmail.text()
            // cy.log(text);

            Cypress.env('some_variable', text)


            cy.log(Cypress.env('some_variable'));


        });


    });
    it.only('open mintplatform', () => {
        cy.log(Cypress.env('some_variable'));
        cy.viewport('macbook-13');
        cy.visit('https://webcore.mintplatform.net');
        cy.get('h3 [href="/Account/Register"]').click({ force: true });
        cy.get('[for="fullName"]').type('test cypress');
        //cy.get('[for="username"]').type('testcy');
        //cy.get('[for="email"]').type('{ctrl}'.Cypress.env('some_variable'), { parseSpecialCharSequences: false });
        // cy.get('[for="email"]').type('{ctrl}', { keyCode: 86, which: 86 })
        cy.get('.options li').eq(1).click({ force: true });
        cy.get('.options li').eq(5).click({ force: true });
        cy.get('[style="display: none;"] li').eq(3).click({ force: true });
        cy.get('[role="button"]').click({ force: true });
        cy.get('.ui-autocomplete li').eq(3).click({ force: true });

    });
})

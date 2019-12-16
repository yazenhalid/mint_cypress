/// <reference types="Cypress" />
//
describe('test_All_Pages', () => {
  it('open_All_Pages', () => {
    cy.viewport('macbook-15')
    cy.visit('https://my.mintplatform.net');
    cy.Sign_in_my();
    cy.get('#open-button').click()//side-menu
    cy.get('nav > [href="/"]').click()//Home_Page
    cy.get('#open-button').click()//side-menu
    cy.get('#menu-marketplace').click()//Marketplace_Page
    cy.get('.col-lg-4 > h2').should('be.visible')
    //cy.get('.col-lg-4 > h2').should('be.eq','المتجر الإلكتروني')
    //  cy.get('#open-button').click()//side-menu
    // cy.get('nav > [href="/User/Profile/15863"]').click()//Profile_Page
    //  cy.url().should('include', 'Profile')
    cy.get('#open-button').click()//side-menu
    cy.get('[href="/User/Settings"]').click()//Settings_Page
    cy.url().should('include', 'Settings')
    //cy.get('#open-button').click()//side-menu
    //cy.get('[href="/User/Notifications"]').click()//Notifications_Page
    //cy.url().should('include', 'Notifications')  
    cy.get('#open-button').click()//side-menu
    cy.get('[href="/Home/About"]').click()//About_Page
    cy.url().should('include', 'About')
    // cy.get('#userDropDown').click({ force: true })
    // cy.get('#userDropDown_1').click({ force: true })
    // cy.url().should('include', 'Profile')
    cy.get('.dropdown-item > span').click({ force: true })//Sign_out
  })
  it('open_All_Pages_iphone-x', () => {
    cy.viewport('iphone-x')
    cy.visit('https://my.mintplatform.net');
    cy.Sign_in_my();
    cy.get('#open-button').click()//side-menu
    cy.get('nav > [href="/"]').click()//Home_Page
    cy.get('#open-button').click()//side-menu
    cy.get('#menu-marketplace').click()//Marketplace_Page
    cy.get('.col-lg-4 > h2').should('be.visible')
    //cy.get('.col-lg-4 > h2').should('be.eq','المتجر الإلكتروني')
    //  cy.get('#open-button').click()//side-menu
    // cy.get('nav > [href="/User/Profile/15863"]').click()//Profile_Page
    //  cy.url().should('include', 'Profile')
    cy.get('#open-button').click()//side-menu
    cy.get('[href="/User/Settings"]').click()//Settings_Page
    cy.url().should('include', 'Settings')
    //cy.get('#open-button').click()//side-menu
    //cy.get('[href="/User/Notifications"]').click()//Notifications_Page
    //cy.url().should('include', 'Notifications')  
    cy.get('#open-button').click()//side-menu
    cy.get('[href="/Home/About"]').click()//About_Page
    cy.url().should('include', 'About')
    // cy.get('#userDropDown').click({ force: true })
    // cy.get('#userDropDown_1').click({ force: true })
    // cy.url().should('include', 'Profile')
    cy.get('.dropdown-item > span').click({ force: true })//Sign_out
  })
})


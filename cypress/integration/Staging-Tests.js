/// <reference types="Cypress" />

context('Staging-Test', () => {
    before(() => {
        cy.viewport('macbook-15')
        cy.visit('https://webcore.mintplatform.net')
        cy.Sign_in()
         //count spaces//
        cy.get('[class="btn btn-default"]').its('length').then(numSpace => {
            let num = numSpace
            cy.log('Number of Spaces: '+num)  
          })
        })
    

    describe('test_All_Pages', () => {

        it('open_All_Pages', () => {
            cy.get('#open-button').click()//side-menu
            cy.get('nav > [href="/"]').click()//Home_Page
            cy.get('#open-button').click()//side-menu
            cy.get('#menu-marketplace').click()//Marketplace_Page
            cy.get('.col-lg-4 > h2').should('be.visible')
            //cy.get('.col-lg-4 > h2').should('be.eq','المتجر الإلكتروني')
            cy.get('#open-button').click()//side-menu
            cy.get('nav > [href="/User/Profile/3500"]').click()//Profile_Page
            cy.url().should('include', 'Profile')
            cy.get('#open-button').click()//side-menu
            cy.get('[href="/User/Settings"]').click()//Settings_Page
            cy.url().should('include', 'Settings')
            cy.get('#open-button').click()//side-menu
            cy.get('[href="/User/Notifications"]').click()//Notifications_Page
            //cy.url().should('include', 'Notifications')  
            cy.get('#open-button').click()//side-menu
            cy.get('[href="/Home/About"]').click()//About_Page
            cy.url().should('include', 'About')
            cy.get('#open-button').click()//side-menu
            cy.get('nav > [href="/"]').click()//Home_Page
            cy.get('#userDropDown').click({ force: true })
            cy.get('#userDropDown_1').click({ force: true })
            cy.url().should('include', 'Profile')
            cy.get('.dropdown-item > span').click({ force: true })//Sign_out
        })
    })

    describe('test_open_Space', () => {

        before(() => {
            cy.viewport('macbook-15')
            cy.visit('https://webcore.mintplatform.net')
            cy.Sign_in()
             //count spaces//
            cy.get('[class="btn btn-default"]').its('length').then(numSpace => {
                     let num = numSpace
                     cy.log('Number of Spaces: '+num)  
                   })
            })
        
         it('Assert_content', () => {
            cy.get('[class="btn btn-default"]').first().click()
            cy.get('.active > .nav-link').should('contain', 'المحتوى التعليمي','content')
            })
        it('Assert_assessments', () => {
            
            cy.get(':nth-child(2) > .nav-link').should('contain', 'التدريبات','assessments')
        })
        it('Assert_inquiry', () => {
            
            cy.get(':nth-child(3) > .nav-link').should('contain', 'أسئلة الطلاب','inquiry')
        })
        it('Assert_challenge', () => {
           
            cy.get(':nth-child(4) > .nav-link').should('contain', 'التحديات','challenge')
        })
        it('Assert_community', () => {
          
            cy.get('#nav-item-community > .nav-link').should('contain', 'المجتمع','community')
        })
        it('Assert_report', () => {
          
            cy.get(':nth-child(6) > .nav-link').should('contain', 'تقارير‎','report')
        })

        it('Assert_about', () => {
          
            cy.get('#aAbout').should('contain', 'عن المساحة','about')
        })
    })
})


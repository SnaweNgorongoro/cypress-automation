/// <reference types="cypress" />
describe('login test', () => {

it('visit gallery page', () => {
    cy.visit("/");
});

   // it.only
it('click on the login button', () => {
    cy.visit("/");
    // jos jedan nacin za get-ovanje elementa
    // cy.get('a[href="/login"]').click();
    cy.get('.nav-link').eq(1).click();
    cy.get('#email').type('snawe_2@yahoo.co.uk');
    cy.get('#password').type('misica1304');
    cy.get('button').click();

    });


    // logout
    // cy.wait(1000) zadnja opcija koja se koristi

    it('logout', () => {
    cy.get('.nav-link').should('have.length',4);
    cy.get('.nav-link').eq(3).click();
    });
});
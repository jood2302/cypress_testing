/// <reference types"cypress">


it('goqgle test', function() {

    cy.visit('https://google.com')
    cy.get('.gLFyF').type('Automation Step by Step{enter}')

})
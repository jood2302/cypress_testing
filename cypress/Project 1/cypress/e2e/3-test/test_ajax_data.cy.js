describe('test AJAX Data', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/ajax')
      cy.get('#spinner').should('have.css', 'display', 'none')
      cy.get('#ajaxButton').click().then(() =>{
        cy.get('#spinner').should('have.css', 'display', 'inline-block')
        cy.get('#spinner', {"timeout":15500}).should('have.css', 'display', 'none') ///site doesn't work correct. That's why we should add 0,5 sec for sucsess
      })
      cy.get('#content').contains('Data loaded with AJAX get request.').should('exist')
      cy.log('Success!')
    })
})
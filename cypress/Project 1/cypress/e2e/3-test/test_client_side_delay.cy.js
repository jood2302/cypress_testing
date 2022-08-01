describe('test client side delay', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/clientdelay')
      cy.get('#spinner').should('have.css', 'display', 'none')
      cy.get('#ajaxButton').click().then(() =>{
        cy.get('#spinner').should('have.css', 'display', 'inline-block')
        cy.get('#spinner', {"timeout":15000}).should('have.css', 'display', 'none')
      })
      cy.get('#content').contains('Data calculated on the client side.').should('exist')
      cy.log('Success!')
    })
})
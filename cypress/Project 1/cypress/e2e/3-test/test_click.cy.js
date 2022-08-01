describe('test click button and is change color', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/click')
      cy.get('#badButton')
      .should('have.css', 'background-color').and('eq', 'rgb(0, 123, 255)')
      .then(() => {
        cy.get('#badButton').click().should('have.css', 'background-color').and('eq', 'rgb(40, 167, 69)').then(() => {
          cy.log('Button was found. It was blue. After click it\'s green')
        })
      })
    })
})
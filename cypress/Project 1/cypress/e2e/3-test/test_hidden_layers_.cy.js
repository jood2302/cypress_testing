describe('test DOM caching techniques', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/hiddenlayers')
      cy.get('#greenButton').click()
      if (cy.get('#greenButton').length > 0) {
        cy.get('#greenButton').click()
        cy.log('The green button has been pressed again!')
      } else {
        cy.get('#blueButton').click()
        cy.log('Blue button has been pressed!')
      }
    })
})
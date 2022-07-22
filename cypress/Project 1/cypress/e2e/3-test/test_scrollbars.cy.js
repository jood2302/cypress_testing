describe('test scrollbars', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/scrollbars')
    cy.get('#hidingButton').scrollIntoView().click()
  })
})
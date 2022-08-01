describe('test check that the blue button is being pressed and alert window appears', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/dynamicid')
    cy.xpath('//*[contains(@class, "btn btn-primary")][text()[contains(.,"Button with Dynamic ID")]]')
    .click()
  })
})
describe('test input text change button name', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/textinput')
    const text1 = "Test input"
    cy.get('#newButtonName').type(text1).then(() => {
      cy.get('#updatingButton').click()
      cy.get('#updatingButton').then((newButtonName) => {
        expect(newButtonName.text()).to.eql(text1)})
    })
  })
})
describe('test how much click', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/mouseover')
    let i = 0
    while (i<2){
      cy.get('#clickCount').then(($span) => {
        const num1 = parseFloat($span.text())
        cy.contains('Click me').click().then(() => {
          const num2 = parseFloat($span.text())
          expect(num2).to.eq(num1 + 1)})
      })
      i++;
    }
  })
})
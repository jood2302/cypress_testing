describe('test click start', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/classattr')
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.xpath('//button[contains(concat(" ", normalize-space(@class), " "), " btn-primary ")]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Primary button pressed')      
    })
  })
})
describe('test that text could be found with XPath', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/verifytext')
      cy.xpath('//span[normalize-space(.)="Welcome UserName!"]').then((element) => {
        const result = element.text()
        cy.log('Text "' + result +'" was found')
      })
    })
})
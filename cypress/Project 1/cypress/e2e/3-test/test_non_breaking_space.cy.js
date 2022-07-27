describe('test that XPath from task does not work and change non-breaking space', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/nbsp')

    cy.get('body').then(($body) => {
      if ($body.find('button selector').length > 0) {
        cy.xpath('//button[text()="My Button"]').click()
      } else {
        cy.log('The button was not found. Let\'s try another way.')
        cy.xpath('//button[text()="My\u00a0Button"]').click()
        cy.log(
          'Button found and clicked. But was problem with non-breaking space in XPath.'
        )
      }
    })
  })
})
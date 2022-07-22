describe('test progress bar', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/progressbar')
    cy.get('#startButton').contains('Start').click()
    cy.get('#progressBar').contains('75%').then(($div) => {
      const percentage_result = $div.text()
      expect(percentage_result).to.eq('75%')
      cy.get('#stopButton').contains('Stop').click()
      cy.get('#content').then(($p) => {
        const delta_time_result = parseFloat($p.text()[8])
        expect(delta_time_result).to.eq(0)
      })
    })
  })
})
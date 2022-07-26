describe('test dinamic table and check Chrome CPU', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/dynamictable')
      const test = "1" 
      // cy.get('input[name="email"]')
  // .invoke('val')
  // .then(sometext => cy.log(sometext));

      cy.contains('span', 'Chrome')
      .parent()
      .within(() => {
        cy.contains('[role=cell]', '%')
        .invoke('text')
        .then((text) => {
          cy.log(text)
          const actual_result = text
          cy.xpath('//html/body/section/div/p[2]')
          .invoke('text')
          .then((text) => {
            cy.log(text)
            const expeced_result = text.split(": ").pop()
            expect(expeced_result).to.eq(actual_result)
            cy.log('All fine. CPU for Chrome:' + actual_result)
          })
      })
    })
  })
})
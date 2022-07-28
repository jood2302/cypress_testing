describe('test  Hide button hide buttons in different ways', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/visibility')
      var buttons_id = [
        "hideButton",
        "removedButton",
        "zeroWidthButton",
        "overlappedButton",
        "transparentButton",
        "invisibleButton",
        "notdisplayedButton",
        "offscreenButton",
      ]
      buttons_id.forEach(function(button_id) {
        cy.get('tbody').find('#'+button_id).log('Button with id #' + button_id + ' found')
      })
      cy.get('#hideButton').click()
      cy.get('tbody').find('#'+buttons_id[0]).log('Button with id ' + buttons_id[0] + ' still here')
      cy.get('tbody').find('#'+buttons_id[1])
      .should('not.exist').log('Button with id ' + buttons_id[1] + 'was removed')
      cy.get('tbody').find('#'+buttons_id[2])
      .should('have.class', 'btn btn-warning zerowidth').log('Button with id ' + buttons_id[2] + ' has zero width')
      cy.get('tbody').find('#'+buttons_id[3])
      .should('have.css', 'position', 'static').log('Button with id ' + buttons_id[3] + ' was overlapped')
      cy.get('tbody').find('#'+buttons_id[4])
      .should('have.css', 'opacity', '0').log('Button with id ' + buttons_id[4] + ' has opacity 0')
      cy.get('tbody').find('#'+buttons_id[5])
      cy.get('tbody').find('#'+buttons_id[5])
      .should('have.css', 'visibility', 'hidden').log('Button with id ' + buttons_id[5] + ' was hidden ')
      cy.get('tbody').find('#'+buttons_id[6])
      .should('have.css', 'display', 'none').log('Button with id ' + buttons_id[6] + ' wasn\'t displayed] ')
      cy.get('tbody').find('#'+buttons_id[7])
      .should('have.class', 'btn btn-info offscreen').log('Button with id ' + buttons_id[7] + ' was offscreen] ')
    })
  })
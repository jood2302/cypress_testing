describe('test Log In and Log Out', () => {
    it('passes', () => {
      cy.visit('http://uitestingplayground.com/sampleapp')
      const username = "test_user"
      const password = "pwd"
      cy.get('input[name="UserName"]').click().type(username)
      cy.get('input[name="Password"]').click().type(password)
      cy.get('#login').click()
      cy.get('#loginstatus').then(($label) => {
        expect($label.text()).to.eq("Welcome, " + username + "!")
      })
      cy.get('#login').click()
      cy.get('#loginstatus').then(($label) => {
      expect($label.text()).to.eq("User logged out.")
      })
    })
})
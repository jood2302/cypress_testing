describe('test entering text to partially visivle element', () => {
    it('passes', () => {
        cy.visit('http://uitestingplayground.com/overlapped')
        const expected_id = "test_id"
        const expected_name = "test_name"
        cy.get('#id').type(expected_id)
        cy.get('#name').scrollIntoView().type(expected_name)
    })
})
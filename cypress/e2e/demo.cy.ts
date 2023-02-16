describe('Demo Test', () => {
  it('Should visit ZeroBank Website', () => {
    cy.visitHomePage()
    cy.visitLoginPage()
    cy.visitFeedbackPage()
  })
})
describe('Demo Test', () => {
  it('Should visit ZeroBank Website and login an application', () => {
    cy.visitHomePage()
    cy.visitLoginPage()
    //cy.login('username','password')
    cy.fixture("loginData").then(({username, password})=>{
      cy.login(username,password)
    })
  })
})
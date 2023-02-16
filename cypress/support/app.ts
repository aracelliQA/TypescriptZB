declare namespace Cypress {
    interface Chainable{
        /**
         * Navigates to the ZeroBank website home page  
         */
       visitHomePage(): Chainable<Element>
       /**
         * Navigates to the ZeroBank website login page  
         */
       visitLoginPage(): Chainable<Element>
       /**
         * Navigates to the ZeroBank website feedback page  
         */
       visitFeedbackPage(): Chainable<Element>
    }
}

Cypress.Commands.add('visitHomePage', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})
describe('Feedback test', ()=>{
it('Should submit feedback form', () =>{
    cy.visitFeedbackPage()
    cy.submitFeedback(
        'Ana',
        'test@email.com',
        'My subject',
        'Message for you!'
    )

})

})
describe('Feedback test', ()=>{
it('Should submit feedback form', () =>{
    cy.visitFeedbackPage()
   // cy.submitFeedback(
       // 'Ana',
       // 'test@email.com',
       // 'My subject',
       // 'Message for you!'


    //)
    cy.fixture('feedbackData').then(({name, email, subject, message}) => {
      cy.submitFeedback(name, email, subject, message)  
    })
})

})
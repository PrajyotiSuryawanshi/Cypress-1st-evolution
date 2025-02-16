describe('Login Automation', ()=> {
    it('should navigate to login page', ()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get("#username").type("prajyotisuryawanshi639@gamil.com")
    cy.get("#password").type("avani@123")
    cy.get(".radius").click()
    
    }) 
    
})
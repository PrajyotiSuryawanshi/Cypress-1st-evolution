describe("form submission", ()=>{
 it("should submit the form successfully",()=>{
    cy.visit("https://v1.training-support.net/selenium/simple-form")
    cy.get("#firstName").type("Prajyoti")
    cy.get("#email").type("prajyotisuryawanshi639@gmail.com")
    cy.xpath("//input[@type=textArea]").type("my hobby is playing a chess")
    cy.get(["type=submit"]).click()
 })    
})
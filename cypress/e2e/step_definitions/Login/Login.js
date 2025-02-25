import { Given, When, Then }from 'cypress-cucumber-preprocessor/steps'

Given("que o usuário está na página de login", ()=>{
    cy.visit('https://www.saucedemo.com/')
})
When("o usuário insere um email válido", ()=>{
    cy.wait(2000)
    cy.get("#user-name").clear().type('standard_user')
    cy.get("#password").clear().type('secret_sauce')
    cy.get("#login-button").click()

})
Then("o sistema deve redirecionar o usuário para a página inicial", ()=>{
    cy.url('https://www.saucedemo.com/inventory.html')
    cy.wait(2000)
})

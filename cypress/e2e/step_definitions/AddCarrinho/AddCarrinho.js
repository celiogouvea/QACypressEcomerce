import { Given, When, Then }from 'cypress-cucumber-preprocessor/steps'


//login
Given("que o usuário está com a lista produto da loja", ()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get("#user-name").clear().type('standard_user')
    cy.get("#password").clear().type('secret_sauce')
    cy.get("#login-button").click()
    cy.wait(1000)
    cy.url('https://www.saucedemo.com/inventory.html')
    cy.get('[data-test="inventory-container"]').should('exist');
})

When("o usuário escolhe o produto 'Sauce Labs Onesie'", ()=>{
    cy.get('[data-test="inventory-item-name"]')
      .contains('Sauce Labs Onesie')
      .should('be.visible').click()
    cy.get("#add-to-cart").should('exist').click()

})
Then("o usuario selecona o item", ()=>{
    cy.get("#remove").should('exist')
})
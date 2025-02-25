import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que o usuário verifica o carrinho com o produto escolhido", () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("#user-name").clear().type('standard_user')
    cy.get("#password").clear().type('secret_sauce')
    cy.get("#login-button").click()
    cy.wait(1000)
    cy.url('https://www.saucedemo.com/inventory.html')
    cy.get('[data-test="inventory-container"]').should('exist');
    cy.get('[data-test="inventory-item-name"]')
        .contains('Sauce Labs Onesie')
        .should('be.visible').click()
    cy.get("#add-to-cart").should('exist').click()
})
When("Seleciona a compra e preenche os dados do comprador", () => {
    cy.get('[data-test="shopping-cart-link"]')
        .should('be.visible').click();
    cy.get('[data-test="continue-shopping"]').should('exist')
    cy.get('[data-test="remove-sauce-labs-onesie"]').should('exist')
    cy.get('[data-test="checkout"]').should('exist').click()
    cy.get('[data-test="firstName"]').clear().type('Celio')
    cy.get('[data-test="lastName"]').clear().type('Gomes Gouvea')
    cy.get('[data-test="postalCode"]').clear().type('78840-014')
    cy.get('[data-test="cancel"]').should('exist')
    cy.get('[data-test="continue"]').should('exist').click()

})
Then("Finaliza a compra", () => {
    cy.get('[data-test="inventory-item"]').should('exist')
    cy.get('[data-test="payment-info-label"]').should('exist')
    cy.get('[data-test="payment-info-value"]').should('exist')
    cy.get('[data-test="shipping-info-label"]').should('exist')
    cy.get('[data-test="shipping-info-value"]').should('exist')
    cy.get('[data-test="total-info-label"]').should('exist')
    cy.get('[data-test="subtotal-label"]').should('exist')
    cy.get('[data-test="tax-label"]').should('exist')
    cy.get('[data-test="total-label"]').should('exist')
    cy.get('[data-test="cancel"]').should('exist')
    cy.get('[data-test="finish"]').should('exist').click()
    cy.get('[data-test="complete-header"]').should('exist')
    cy.get('[data-test="back-to-products"]').should('exist')
})

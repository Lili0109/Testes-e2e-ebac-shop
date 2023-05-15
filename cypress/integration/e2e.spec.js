/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
   
    beforeEach(() => {
     cy.visit('produtos/')
        
    })

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       
         cy.AddProdutos ('Abominable Hoodie' ,'S', 'Green', 2)
         
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(4) > a'). click ()    
        cy.get(':nth-child(3) > .page-numbers'). click ()

        cy.AddProdutos ('Lando Gym Jacket' ,'S', 'Green', 1)

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a'). click ()
        cy.get(':nth-child(6) > .page-numbers'). click ()

        cy.AddProdutos ('Stellar Solar Jacket' ,'S', 'Red', 1)
        
        cy.get('.dropdown-toggle > .text-skin'). click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart'). click ()
        cy.get('.checkout-button'). click ()
        cy.get('.showlogin'). click ()
        cy.get('#username'). type ('aluno_ebac@teste.com')
        cy.get('#password') .type ('teste@teste.com')

        cy.get('.woocommerce-button'). click ()
        cy.get("#terms"). should ('be.visible'). click ({force: true})
        cy.get('#place_order'). click ()

        cy.get ('.woocommerce-notice').should ('contain' , 'Obrigado. Seu pedido foi recebido')
    });

})

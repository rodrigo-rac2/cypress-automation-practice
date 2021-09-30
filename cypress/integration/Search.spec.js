/// <reference types="cypress" />

describe('testes de busca', () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it('deve carregar a pagina principal carregou', () => {
        cy.get('#search_query_top', { timeout: 30000 }).should('be.visible')
        cy.get('[name=submit_search]').should('be.visible')
    })

    it('deve realizar busca com sucesso', () => {
        cy.get('#search_query_top').type('shirt')
        cy.get('[name=submit_search]').click()

        cy.get('.lighter', { timeout: 40000 }).contains('shirt')
        cy.get('.product-container').eq(0).contains('shirt')
    })
})
describe('Home Page first test', () => {
  it('Has the correct title and heading', () => {
    cy.visit('/')
    cy.title().should('equal', 'Boilerplate vue-cli 3')
    cy.contains('h1', 'Bem vindo')
  })
})
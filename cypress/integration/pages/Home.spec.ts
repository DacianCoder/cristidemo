// @ts-ignore
describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('will always pass', () => {
    cy.get('body').should('exist')
  })

})

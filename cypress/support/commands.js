import '@percy/cypress'

Cypress.Commands.add("getElement", (selector) => cy.get(`[data-test="${selector}"]`))

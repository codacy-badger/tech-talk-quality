import {
  fillField,
  goHome,
  submitForm
} from './todo.obj'

describe('Tests for Todo page', () => {
  it('Should create a new task successfully', () => {
    const newTask = 'Nova tarefa'
    goHome()

    cy.contains('Tabela vazia').should('be.visible')

    fillField(newTask)
    submitForm()

    cy.getElement(newTask).should('be.visible')
    cy.percySnapshot()
  })
})

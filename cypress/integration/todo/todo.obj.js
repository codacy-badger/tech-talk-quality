const fillField = (newValue) => cy.getElement('todo-field').type(newValue)

const goHome = () => cy.visit('/')

const submitForm = () => cy.getElement('todo-button').click()

export {
  fillField,
  goHome,
  submitForm,
}

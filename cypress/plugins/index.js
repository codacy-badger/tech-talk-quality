/// <reference types="cypress" />
// ***********************************************************
let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on("task", percyHealthCheck);
}

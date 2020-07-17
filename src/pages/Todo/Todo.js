import React, { useState } from 'react'

import App from '../../containers/App'

import styles from './Todo.module.css'

const Todo = () => {
  const [tasks, updateTasks] = useState([])
  const [task, updateTask] = useState('')

  const handleFormSubmit = event => {
    event.preventDefault()
    updateTasks(oldTasks => [...oldTasks, task])
    updateTask('')
  }

  const handleInputChange = event => updateTask(event.target.value)

  return (
    <App>
      <h1 className={styles.title} data-test="todo-title">
        Lista de tarefas
      </h1>
      <form className={styles.form} data-test="todo-form" onSubmit={handleFormSubmit}>
        <input
          className={styles.field}
          data-test="todo-field"
          onChange={handleInputChange}
          value={task}
        />
        <button className={styles.button} data-test="todo-button">
          Adicionar
        </button>
      </form>
      <table className={styles.table} data-test="todo-table">
        <thead>
          <tr>
            <th>Tarefa</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((t, i) => (
              <tr data-test={i} key={i}>
                <td data-test={t}>{t}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Tabela vazia</td>
            </tr>
          )}
        </tbody>
      </table>
    </App>
  )
}

export default Todo

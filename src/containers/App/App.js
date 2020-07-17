import PropTypes from 'prop-types'
import React from 'react'

import styles from './App.module.css'

const App = ({ children }) => (
  <main className={styles.container}>
    <div className={styles.center}>{children}</div>
  </main>
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App

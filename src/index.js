import * as Sentry from '@sentry/react';
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'

import 'normalize.css'
import './index.css'

Sentry.init({dsn: "https://54bd1140220349bf9f117cf80e764a4b@o295229.ingest.sentry.io/5341481"});

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)

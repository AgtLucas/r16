import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import registerServiceWorker from './registerServiceWorker'

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
registerServiceWorker()

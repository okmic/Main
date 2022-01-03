import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle  from './index.styled'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();

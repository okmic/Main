import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import GlobalStyle from './index.styled'
import { store } from './redux/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
  document.getElementById('root')
)

reportWebVitals();

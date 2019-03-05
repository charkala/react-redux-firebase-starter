import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import store from './config/store'

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  
  serviceWorker.unregister()
})

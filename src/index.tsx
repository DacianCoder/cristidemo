import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { SetupWrapper } from './SetupWrapper'

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <SetupWrapper>
    <App />
  </SetupWrapper>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister()
} else {
  serviceWorker.register()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

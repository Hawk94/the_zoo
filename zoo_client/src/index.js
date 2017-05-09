// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// 
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import './index.css';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
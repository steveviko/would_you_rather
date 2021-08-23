import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import middleware from './middleware';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App'


const store = createStore( reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,

document.getElementById('root'));
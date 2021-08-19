import { createStore, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux'


const store = createStore( reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,

document.getElementById('root'));
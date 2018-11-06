import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  )

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import socketIO from './services/socket.service'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ) : applyMiddleware(thunk),
)
socketIO.init(store)
ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('app'));
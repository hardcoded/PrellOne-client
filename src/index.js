import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import socketIO from './services/socket.service'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ) : applyMiddleware(thunk),
)

export default store

socketIO.init(store)
ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('app'));
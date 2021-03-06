import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { countReducer } from './ajaxStore';

const store = createStore(
  combineReducers({ countReducer }),
  {},
  applyMiddleware(promiseMiddleware(), logger),
);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

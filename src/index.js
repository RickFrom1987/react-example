import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from './store/apiMiddleware';
import rootReducer from './store/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch}/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

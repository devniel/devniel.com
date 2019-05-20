// Startup point for the client side application
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const r = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrap">{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);

const render = () => {
  const renderMethod =
    module.hot || process.env.STATIC === 'true'
      ? ReactDOM.render
      : ReactDOM.hydrate;
  renderMethod(r, document.querySelector('#root'));
};

render();

export default render;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import { hot } from 'react-hot-loader/root'

import './App.scss';

const App = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: hot(App),
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};

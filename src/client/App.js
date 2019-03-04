import React from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';

import './App.scss';

const App = ({ route }) => <div>{renderRoutes(route.routes)}</div>;

export default {
  component:
    process.env.NODE_ENV === 'development' && !process.env.STATIC
      ? hot(App)
      : App,
};

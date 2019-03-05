import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import ReactGA from 'react-ga';

import './App.scss';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-135606573-1');
  }

  render() {
    const { route } = this.props;

    return <div>{renderRoutes(route.routes)}</div>;
  }
}

export default {
  component:
    process.env.NODE_ENV === 'development' && !process.env.STATIC
      ? hot(App)
      : App,
};

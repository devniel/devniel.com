import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import ReactGA from 'react-ga';

import './App.scss';

class App extends Component {
  componentDidMount() {
    // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
    if (
      typeof window !== 'undefined' &&
      !(
        navigator.userAgent.includes('Node.js') ||
        navigator.userAgent.includes('jsdom')
      ) &&
      !process.env.STATIC
    ) {
      ReactGA.initialize('UA-135606573-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    const { route } = this.props;
    return <div className="wrap">{renderRoutes(route.routes)}</div>;
  }
}

export default {
  component:
    process.env.NODE_ENV === 'development' && !process.env.STATIC
      ? hot(App)
      : App,
};

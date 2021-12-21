import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import clientSessions from 'client-sessions';
import cookieParser from 'cookie-parser';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import Routes from 'Client/Routes';
import renderer from '../../helpers/renderer';
import createStore from '../../helpers/createStore';

import webpackClientConfig from '../../../webpack.client';

export default app => {
  app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        const newOpts = opts;
        newOpts.headers['x-forwarded-host'] = 'localhost:3000';
        return newOpts;
      },
    })
  );

  app.disable('x-powered-by');

  app.use(
    helmet({
      xssFilter: true,
      noSniff: true,
      hsts: true,
      frameguard: {
        action: 'deny',
      },
    })
  );

  // eslint-disable-next-line no-param-reassign
  app.locals.pretty = false;

  if (process.env.HTTPS_REDIRECT === 'true') {
    app.enable('trust proxy');
    app.use((req, res, next) => {
      if (req.secure) return next();
      if (process.env.NODE_ENV === 'development') {
        res.redirect(`https://localhost:${process.env.HTTPS_PORT}${req.url}`);
      } else {
        res.redirect(`https://${req.headers.host}${req.url}`);
      }
      return true;
    });
  }

  app.use(morgan('dev'));

  app.use(methodOverride());
  app.use(cookieParser());

  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

  app.use(
    clientSessions({
      cookieName: process.env.SESSION_COOKIE_NAME,
      requestKey: 'session',
      secret: process.env.SESSION_SECRET,
      cookie: {
        httpOnly: true,
        secureProxy: true,
      },
    })
  );

  if (process.env.NODE_ENV === 'development') {
    // relative to build/bundle.js because it's run with node build/bundle.js
    // __dirname returns the absolute path of the bundle.
    webpackClientConfig.resolve = {
      alias: {
        Client: path.join(__dirname, '../src/client'),
        Server: path.join(__dirname, '../src/server'),
        Assets: path.join(__dirname, '../src/assets'),
      },
    };

    const compiler = webpack(webpackClientConfig);
    const options = {
      publicPath: webpackClientConfig.output.publicPath,
    };
    app.use(webpackDevMiddleware(compiler, options));
    app.use(webpackHotMiddleware(compiler));
  }

  app.use(
    express.static('public', {
      index: false,
      setHeaders: function(res) {
        res.set('X-Robots-Tag', 'noindex');
      },
    })
  );

  app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => (route.loadData ? route.loadData(store) : null))
      .map(promise => {
        let p;
        if (promise) {
          p = new Promise(resolve => {
            promise.then(resolve).catch(resolve);
          });
        }
        return p;
      });

    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }

      return res.send(content);
    });
  });
};

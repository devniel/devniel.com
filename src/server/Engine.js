import fs from 'fs';
import https from 'https';
import http from 'http';
import express from 'express';

import expressConfig from './config/express';
import Logger from './Logger';

let SERVER = null;

const log = Logger.child({
  module: './Engine.js',
});


export default class Engine {
  static get server() {
    return SERVER;
  }

  static set server(value) {
    SERVER = value;
  }

  static setup() {
    log.info('Engine.setup() | setting up...');
  }

  static check() {}

  static async start(_options) {
    const options = _options || {};

    const p = new Promise(async (fulfill, reject) => {
      log.info({
        options,
      }, 'Engine.start()');

      try {
        // Checking configuration...

        log.info({
          options,
        }, 'Engine.start() | checking setup...');

        Engine.check();

        // Starting server...

        if (options.server === false) {
          return fulfill();
        }

        // Configuring server

        const port = process.env.PORT || 3000;
        let server = null;

        log.info('Engine.start() | starting server...');

        server = express();

        Engine.server = server;

        expressConfig(server);

        if (process.env.HTTPS_EXPRESS === 'true') {
          const opts = {
            key: fs.readFileSync(process.env.SSL_KEY),
            cert: fs.readFileSync(process.env.SSL_CERT),
          };
          server = https.createServer(opts, server);
          log.info(`Engine.start() | starting on port ${process.env.HTTPS_PORT}...`);
          await server.listen(process.env.HTTPS_PORT);
        } else {
          server = http.createServer(server);
          log.info(`Engine.start() | starting on port ${port}...`);
          await server.listen(port);
        }

        log.info('Engine started! ⏤  by IBM');
        return fulfill();
      } catch (e) {
        log.error(e);
        return reject(e);
      }
    });

    return p;
  }
}

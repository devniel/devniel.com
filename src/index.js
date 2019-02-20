import dotenv from 'dotenv';
import Engine from 'Server/Engine';

global.version = process.env.VERSION;
dotenv.config();

global.vcapApp = {};

try {
  global.vcapApp = JSON.parse(process.env.VCAP_APPLICATION);
} catch (e) {
  global.vcapApp.instance_index = 0;
}

process.on('uncaughtException', (err) => {
  console.error(err);
});

// Engine configuration

Engine.setup();
Engine.start();

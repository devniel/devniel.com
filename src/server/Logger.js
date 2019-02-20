import bunyan from 'bunyan';

export default bunyan.createLogger({
  name: 'engine',
  level: 'debug',
});

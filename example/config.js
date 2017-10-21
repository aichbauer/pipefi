const toLowerCase = require('./filters/toLowerCase');
const trim = require('./filters/trim');

module.exports = {
  connection: {
    user: 'guest',
    password: 'guest',
    host: 'localhost',
    port: 5672,
  },
  pipes: [
    {
      from: 'lowercase',
      to: 'trim',
      filter: toLowerCase,
    },
    {
      from: 'trim',
      to: 'result',
      filter: trim,
    },
  ],
};

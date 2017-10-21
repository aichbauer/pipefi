const amqp = require('amqplib');

const Pipe = require('./Pipe.class');

const pipefi = (config = {}) => {
  const pipes = config.pipes;
  const conn = config.connection;

  try {
    pipes.forEach(async (pipe) => {
      const connection = await amqp.connect(`amqp://${conn.user}:${conn.password}@${conn.host}:${conn.port}`);
      const channel = await connection.createChannel();
      const pipeInstance = new Pipe(pipe.from, pipe.to, pipe.filter, channel);

      pipeInstance.start();
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = pipefi;

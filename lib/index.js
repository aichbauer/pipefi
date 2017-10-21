const amqp = require('amqplib');

const Pipe = require('./Pipe.class');

const pipefi = (config) => {
  const pipes = config.pipes;

  try {
    pipes.forEach(async (pipe) => {
      const connection = await amqp.connect(`amqp://${config.user}:${config.password}@${config.host}:${config.port}`);
      const channel = await connection.createChannel();
      const pipeInstance = new Pipe(pipe.from, pipe.to, pipe.filter, channel);

      pipeInstance.start();
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = pipefi;

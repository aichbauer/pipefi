const amqp = require('amqplib');

const config = require('./config');

(async () => {
  try {
    const AMQP_URL = `amqp://${config.connection.user}:${config.connection.password}@${config.connection.host}:${config.connection.port}`;
    const connection = await amqp.connect(AMQP_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue('start');
    await channel.sendToQueue('start', new Buffer('booyaa'));
  } catch (e) {
    console.error(e);
  }
})();


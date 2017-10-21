const amqp = require('amqplib');

const config = require('./config');

(async () => {
  try {
    const queue = 'lowercase';
    const AMQP_URL = `amqp://${config.connection.user}:${config.connection.password}@${config.connection.host}:${config.connection.port}`;
    const connection = await amqp.connect(AMQP_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, new Buffer('THIS is A TEST STrING    '));
  } catch (e) {
    console.error(e);
  }
})();


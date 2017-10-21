const amqp = require('amqplib');

const config = require('./config');

(async () => {
  try {
    const queue = 'lowercase';
    const message = process.argv.slice(2, process.argv.length).join(' ') || 'THIS is A TEST STrING    ';

    const AMQP_URL = `amqp://${config.connection.user}:${config.connection.password}@${config.connection.host}:${config.connection.port}`;
    const connection = await amqp.connect(AMQP_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, new Buffer(message));

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (e) {
    console.error(e);
  }
})();


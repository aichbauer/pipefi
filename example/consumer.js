const amqp = require('amqplib');

const config = require('./config');

const callback = (msg, channel) => {
  if (msg !== null) {
    console.log(msg.content.toString());
    channel.ack(msg);
  }
};

(async () => {
  try {
    const queue = 'result';
    const AMQP_URL = `amqp://${config.connection.user}:${config.connection.password}@${config.connection.host}:${config.connection.port}`;
    const connection = await amqp.connect(AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.consume(queue, (msg) => callback(msg, channel));
  } catch (e) {
    console.error(e);
  }
})();

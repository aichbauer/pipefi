const amqp = require('amqplib');

const pipefi = async (config) => {
  const queueAppendix = config.queueName || 'magic';
  const queueName = `pipefi-${queueAppendix}`;

  try {
    const connection = await amqp.connect(`amqp://${config.user}:${config.password}@${config.host}:${config.port}`);
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName);
    await channel.consume(queueName, msg => console.log(msg.content.toString()));
  } catch (e) {
    console.error(e);
  }
};

module.exports = pipefi;

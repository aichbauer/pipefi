const amqp = require('amqplib');

const pipefi = async (config) => {
  try {
    const connection = await amqp.connect(`amqp://${config.host}`);
    const channel = await connection.createChannel();
    const { queue } = await channel.assertQueue('');

    await channel.consume(`pipefy-${queue}`, msg => console.log(msg.content.toString()));
  } catch (e) {
    console.error(e);
  }
};

module.exports = pipefi;

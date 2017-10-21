class Pipe {
  constructor(from, to, filter, channel) {
    this.from = from;
    this.to = to;
    this.filter = filter;
    this.channel = channel;
  }

  async handleMessage(message) {
    const resultMessage = this.filter.process(message.content);

    await this.channel.publish(this.to, '', new Buffer(resultMessage), { persistent: true });
    await this.channel.ack(message);
  }

  async start() {
    await this.channel.assertQueue(this.from);
    await this.channel.assertExchange(this.from, 'direct');
    await this.channel.bindQueue(this.from, this.from, '');
    await this.channel.consume(this.from, this.handleMessage);
  }
}

module.exports = Pipe;

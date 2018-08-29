module.exports = (message) => (
  Buffer.from(message.toString().trim())
);

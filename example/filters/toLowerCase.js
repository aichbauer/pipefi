module.exports = (message) => (
  Buffer.from(message.toString().toLowerCase())
);

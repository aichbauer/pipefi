module.exports = (message) => (
  new Buffer(message.toString().trim())
);
# pipefi

[![Build Status](https://travis-ci.org/aichbauer/pipefi.svg?branch=master)](https://travis-ci.org/aichbauer/pipefi)

> A library for simple [RabbitMQ](https://www.rabbitmq.com/) filters

## Installation

```sh
$ npm i pipefi
```

## Usage

> *Note:* Only works with `Node v8+`

> Take a look at the [example](./example)

```js
const pipefi = require('pipefi');

const config = require('path/to/config');

pipefi(config);
```

## Config

* [connection](#connection)
* [pipes](#pipes)

### connection

**Type:** `object`

The connection object consists of 4 properties:
* user (`string`)
* password (`string`)
* host (`string`)
* port (`number`)

Example:
```js
{
  connection: {
    user: 'guest',
    password: 'guest',
    host: 'localhost',
    port: 5672,
  },
}
```

### pipes

**Type:** `array`

Pipes consists of an array of objects. One object consists of 3 different properties:
* from (`string`)
* to (`string`)
* filter (`function`)

Example:
```js
{
  pipes: [
    {
      from: 'filterOne',
      to: 'filterTwo',
      filter: (msg) => msg, // do something with the message
    },
  ],
}
```

## LICENSE

MIT © Aichbauer Lukas, Stoecklmair Jan Peer

---
title: Building an API around Bitcoin and LND RPC
date: '2019-03-01'
tags:
  - Bitcoin
  - LND
  - Lightning Network
  - gRPC
  - JavaScript
  - Node
  - Node.js
  - Express
  - API
teaser: /images/tutorials/lnd-api.png
description: |
  I am currently building a dashboard and management application for Bitcoin full nodes with Lightning Network integration.
  This post features how I have build parts of the API layer.
---
# Building an API around Bitcoin and LND RPC

## With Node.js and Express, for fun and convenience

I am currently building a [dashboard and management application](https://github.com/dennisreimann/blitzbank-dashboard) for [Bitcoin full nodes](https://en.bitcoin.it/wiki/Full_node) with Lightning Network integration.
It is supposed to be an easy to use add-on, helping people to run their node and being their own bank.
The plan is to open source an early version during the next weeks and continuously improving it as the Lightning Network matures.
This post features how I have build parts of the API layer.

## Architecture and Motivation

The UI is a [Vue.js](https://vuejs.org/) single page application that receives its data via an API build with Node.js and [Express](https://expressjs.com/).
This makes installing and upgrading easy as the whole app ships as a single npm package.
The Express webserver runs on a self defined port, powers the API and also serves the static files for the UI.

The API is more or less a convenience layer for accessing the underlying Bitcoin Core and LND RPC APIs.
Even though both Bitcoin Core and LND offer REST interfaces, there are two main reasons for doing it this way:
Simply, I have found the RPC interfaces to be nicer to work with and to support more features.
==Practically, when you are building use cases you often want to aggregate and enhance the payloads of the original API calls.==
Wrapping them allows you to hide complexity in your custom API and to finetune the responses to the needs of the UI.

### Client library considerations

I was surprised by the number of [libraries to work with LND](https://www.npmjs.com/search?q=lnd%20rpc) that are already out there.
Most of them are actively worked on and frequently updated;
I chose [ln-service](https://www.npmjs.com/package/ln-service) which not only seems pretty mature, but is also maintained by [Alex Bosworth](https://twitter.com/alexbosworth), who is working for Lightning Labs – the creators of [LND](https://lightning.engineering/technology.html).

Most of the [Bitcoin RPC libraries on npm](https://www.npmjs.com/search?q=bitcoin%20rpc) are not worked on as actively:
Even though this might not be really necessary (Bitcoin development does not move as fast as Lightning), you will want to pick one which supports at least promises and async/await respectively.
For now I have chosen [bitcoind-rpc](https://www.npmjs.com/package/bitcoind-rpc), even though [bitcoin-core](https://www.npmjs.com/package/bitcoin-core) looks like a viable alternative.
Both libraries also support batching requests.

## In Code We Trust

As I said I will try to release a first version as soon as possible.
Until then let's have a look at some implementation details I found nice to work with:
The API is split into different modules, each of the general concerns exposes its particular endpoints:

```js
const { Router } = require('express')

const router = Router()

router.use('/btc', require('./btc')) // Bitcoin
router.use('/lnd', require('./lnd')) // Lightning
router.use('/sys', require('./sys')) // System and general information

module.exports = router
```

All of these are mounted under the `/api` scope; giving us routes like

```sh
/api/btc/blockchaininfo  # How's the blockchain?
/api/lnd/balance         # What's in my purse?
/api/sys                 # Annie, are you ok?
```

### The Bitcoin API

The simplified version of the `btc.js` file, which contains the Bitcoin API, looks like this:

```js
const { Router } = require('express')
const bitcoind = require('./service')
const router = Router()

// RPC method reference: https://git.io/fhAOx
const ROUTES = [
  ['get', '/blockchaininfo', 'getBlockchainInfo'],
  ['get', '/block/:header', 'getBlock', req => req.params.header]
  // other routes would go here …
]

ROUTES.map(([method, route, rpc, getPayload]) => {
  router[method](route, async (req, res) => {
    const payload = getPayload && getPayload(req)
    try {
      const result = await bitcoind(rpc, payload)
      res.json(result)
    } catch (err) {
      console.error('Error:', err)
      res.status(500).send(err.message)
    }
  })
})

module.exports = router
```

There are some things to unpack here: The RPC library details are encapsulated in a service module, which we will have a look at in a minute.

First let's look at the `ROUTES` constant, defining an array of route configurations;
each being itself an array with at least three values: The request method, the API endpoint path, the name of the associated RPC and an optional function to resolve the payload.

Why so seemingly complicated?
==It allows us to process each of the different request uniformly, as we see in the `map` function which defined the actual Express routes:==
`router[method](route, ...)` in the `map` becomes a shorthand for calling `router.get('/blockchaininfo', ...)` and the like individually.<br>
JavaScript's destructuring features let us use the array as a minimalistic data structure for defining the routes and accessing its properties in the `map` call.

#### Keep it simple

As each of the request handlers looks the same, this is a concise way of defining routes by just mapping the request method and path to a particular RPC method:
If the RPC method needs arguments, they are taken from the request via the optional `getPayload` function.
The RPC is invoked – the result or error being sent to the client.

This way adding a new route/RPC mapping becomes a one-liner.
In the upcoming LND API example we will also see how a slight modification allows us to aggregate the result of multiple RPCs into a single response.

### Service modules for encapsulating third-party logic

The RPC modules for Bitcoin Core and LND export a single function, which takes the name of the RPC function and the payload coming from the request params or body as arguments.
The modules contain all the details of working with the particular client library (`bitcoind-rpc` and `ln-service`).
Both modules look mostly the same, here is the LND service example:

```js
const assert = require('assert')
const lnService = require('ln-service')

const {
  LND_RPC_HOST: host = 'localhost',
  LND_RPC_PORT: rpcPort = 10009,
  LND_CERT_BASE64: cert,
  LND_MACAROON_BASE64: macaroon
} = process.env

assert(cert && macaroon, 'Provide the LND_CERT_BASE64 and LND_MACAROON_BASE64 environment variables.')

const socket = `${host}:${rpcPort}`
const options = { socket, cert, macaroon }
const lnd = lnService.lightningDaemon(options)

module.exports = (fnName, opts = {}) =>
  new Promise((resolve, reject) => {
    try {
      opts.lnd = lnd
      const fn = lnService[fnName]
      if (typeof fn === 'function') {
        fn(opts, (err, result) => {
          err ? reject(err) : resolve(result)
        })
      } else {
        reject(new Error(`${fnName} is not a LND service function.`))
      }
    } catch (err) {
      reject(err)
    }
  })
```

The first part configures the service:
As the dashboard app is a third party tool you will need to provide some configuration, in this case via environment variables like `LND_MACAROON_BASE64`.
For the time being the `admin.macaroon` file is needed – 
but I hope in the future there will be more fine grained control over the permissions you entrust third-party apps via macaroons.

The second part does the actual work:
It invokes the RPC method passed as the first argument via the client library and resolves the promise with the result or rejects it with an error.
Even though [ln-service supports promises](https://github.com/alexbosworth/ln-service#using-grpc) I decided to use the callback based functions and promisify them myself.
Each promise-based function is a separate module in ln-service and I found it to be nicer to work with this way, instead of dynamically requiring the individual function modules.

### The LND API

Alright, now that you know the basic structure of the Bitcoin API module, here is a slightly more complex excerpt form the LND API.<br>
Part one of the `lnd.js` contains the route definitions:

```js
const { Router } = require('express')
const lnd = require('./service')
const router = Router()

// RPC Reference: https://git.io/fhAOh
const ROUTES = [
  // Wallet information
  ['get', '/info', 'getWalletInfo'],
  ['get', '/balance', ['getChainBalance', 'getPendingChainBalance']],

  // List of peers
  ['get', '/peers', 'getPeers'],

  // Add a peer
  ['post', '/peers', 'addPeer', req => {
    const [public_key, socket] = req.body.addr.split('@')
    return { public_key, socket }
  }],

  // Remove a peer
  ['delete', '/peers/:public_key', 'removePeer', req => req.params]
]
```

Here are the differences to the Bitcoin example:

- The third entry in the route definition array might be an array, which lists multiple RPCs to be invoked.
  (e.g. `getChainBalance` and `getPendingChainBalance` for the `/balance` route)
- The routes now also contain modifying and destructive API endpoints for adding and removing peer nodes.
  Both of them require user input (e.g. the peers address or public key), which gets provided via the request params or form body.

Again, part two instantiates the Express routes based on the definitions above:

```js
ROUTES.map(([method, route, rpc, getPayload]) => {
  router[method](route, async (req, res) => {
    const payload = getPayload && getPayload(req)
    try {
      let result
      if (typeof rpc === 'object') {
        const calls = await Promise.all(rpc.map(c => lnd(c, payload)))
        result = calls.reduce((res, callRes) => Object.assign(res, callRes), {})
      } else {
        result = await lnd(rpc, payload)
      }
      res.json(result)
    } catch (err) {
      console.error('Error:', err)
      const [status, message, info] = err
      const msg = info ? info.details : (message || err.message)
      res.status(status || 500).send(msg)
    }
  })
})

module.exports = router
```

The `try` block checks whether or not multiple RPC calls need to be invoked.
If so, the results are merged into a single response object, which then gets sent as JSON.

The `catch` block contains the error handling part.
A nice thing about `ln-service` is, that it provides detailed error information and even HTTP status codes:
In case something goes wrong we can leverage that to give the API client and user a better impression of what happened.

## Conclusion

I did not expect this article to become that long, but I hope it helps fellow developers building apps on top of Bitcoin and the Lightning Network.

In case this article has left you wanting to read more code:
Take a look at the [Casa-Node-API repository](https://github.com/Casa/Casa-Node-API), which Casa recently open sourced.
Their approach is similar and they are also using the Node.js/Express plus Vue.js combo, which I have come to love.

In general, the Bitcoin and LND RPC APIs are nice to work with and the third-party libs make it even easier.
I find it exciting to be tinkering with technology that will potentially affect an evergrowing audience of people.
The future for both Bitcoin and Lightning look bright and we can help to shape it for generations to come.
My hope is to contribute on the UX/UI side of this, while I am also delving deeper into the protocol level.

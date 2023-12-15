---
title: BTCPay Server Integration for M5StackSats
date: '2019-12-15'
tags:
  - BTCPay Server
  - M5StackSats
  - Open Source
teaser: /images/m5stacksats/btcpayserver-integration.jpg
description: |
  There was no BTCPay Server integration for the M5StackSats project, yet. So I decided to build it as a way of learning a bit more about the new gadget.
---
# BTCPay Server Integration for M5StackSats

The [M5StackSats](https://github.com/arcbtc/M5StackSats) is a Bitcoin point of sale terminal project by [@BTCSocialist](https://twitter.com/btcsocialist).
As the name implies, it builds on the [M5Stack](https://m5stack.com/):
The [M5 Faces hardware](https://m5stack.com/collections/m5-core/products/face) becomes a PoS terminal, which can be used to sell goods for sats.

The process is straight forward:
The merchant enters the amount, which can be denominated in fiat currency.
The software integrates with one of many defined backends (like a BTCPay Server instance):
It gets the current exchange rate, generates a Lightning invoice and displays its QR code.
Then it polls the backend to check the payment status and shows a confirmation.

I found the idea of building a PoS terminal based on cheap hardware very intriguing and ordered a M5 Faces device.
Astonishingly, there was no BTCPay Server integration for the M5StackSats project, yet.
So I decided to build it as a way of learning a bit more about the new gadget.

It took me a bit of tinkering and familiarizing myself with Arduino and writing C, but [it finally worked out](https://twitter.com/_d11n_/status/1205998709592526848).
Here's a short demo of the [BTCPayServer integration for the M5StackSats](https://github.com/arcbtc/M5StackSats/tree/master/M5StackSatsOther/M5StackSatsBTCPAY) …

<div class="ytEmbed">
  <iframe src="https://www.youtube.com/embed/Rw46PeELTCg" frameborder="0" allow="autoplay;encrypted-media;" allowfullscreen></iframe>
</div>

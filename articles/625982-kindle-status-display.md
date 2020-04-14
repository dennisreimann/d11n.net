---
title: Bitcoin Kindle Status Display
date: '2020-04-14'
tags:
  - Bitcoin
  - Kindle
  - Dashboard
description: |
  Here's a short recap of a personal project I made during the last few days:
  A framed Bitcoin Status display for our living room that is backed by an old and unused Kindle.
---
# Bitcoin Status on an old Kindle

Here's a short recap of a personal project I made during the last few days:
A framed Bitcoin Status display for our living room that is backed by an old and unused Kindle.

<div class="image image--left">

![Framed Bitcoin Status Display](/images/kindle-display/framed.jpg)

</div>

The idea isn't very new and lots of people have build all kinds of dashboards like this.
The basic approach is to use a jailbroken Kindle to poll a greyscale image from a server.

The server takes care of retrieving and assembling the data and composing the data.
In my case the data comes from my full node and BTCPay Server and is rendered on a webpage.
A cronjob updates the data, creates a screenshot of the webpage and converts it to greyscale.
The Kindle fetches this image and displays it in an interval of five minutes.

You can tune this to fit your needs, but even with the short interval of updates the Kindles' battery lasts some days.
This makes it a perfect fit to put it in your living room and raise your families awareness about Bitcoin. 😀

The project [gathered a lot of interest on Twitter](https://twitter.com/DennisReimann/status/1249955251681202176)
and since [Gigi](https://twitter.com/dergigi) also published his [Bitcoin Quotes](https://bitcoin-quotes.com)
project today I spontaneously [integrated the API he added](https://twitter.com/dergigi/status/1250060070039289860)
upon the request for it.
Great collaboration of two projects that were launched on the same day. 🚀

If you want to build something like that yourself, here's the [code and a technical description](https://github.com/dennisreimann/kindle-display/).
Jailbreaking and setting up the Kindle was a bit tricky.
There are good tutorial and resources out there, but it takes some time and I had to erase and rewind once.

The frame is a somewhat fitting one from IKEA, which I cut a notch for the battery cable into.
A bit of cardboard for the passe-partout and it's ready for the living room.

![A look inside: Framing the Kindle](/images/kindle-display/framing.jpg)

Building the interface took some time, as I wasn't sure which data to use.
Initially I wanted it to be more of a dashboard and less of a price display.
As most of the project was almost done and I didn't want it to lose steam and never finishing it, I used the price data anyways.
I had an idea of how to make it look good, the [sat symbol](https://github.com/bitficus/theSat/) makes for a nice background and the quotes go along with all of it nicely.

All in all it was fun building this and I really like to watch it, when chilling out on the couch.
I'm also curious to know how friends and family will react. 😀

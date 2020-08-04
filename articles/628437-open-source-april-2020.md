---
title: My 1st Month of Full-Time Open Source
date: '2020-05-01'
tags:
  - Open Source
  - Full-time
  - BTCPay Server
teaser: /images/open-source-reports/github-summary-2020-04.png
description: |
  It's the first month in on my full-time open source journey and I'm loving it.
---
# My 1st Month of working on Open Source full-time

It's the first month in on [my full-time open source journey](https://twitter.com/DennisReimann/status/1212025650363666439) and I'm loving it. 🎉

It was [Kukks](https://twitter.com/MrKukks) whose story and courage was a huge inspiration for doing the same:
Stopping regular freelance client-work and going full-time open source in the Bitcoin space.
It's great being able to work with people like him now on a daily basis and enjoying the camaraderie of people who are so dedicated.
I'm very grateful for everyone at [BTCPay Server](https://btcpayserver.org) and the opportunity to build something worthwhile and important. 💚

My goal is to do this kind of post each month, to share some of my experiences, talk about the things I'm learning and the projects I'm working on.
There's a lot of stuff happening when you are free to work on whatever you want whenever you want.

## WTF happened in April 2020?

Our daily family rhythm is pretty wild currently:
The circumstances of COVID-19 like home-schooling two kids and them not being able to date friends don't make working from home easier;
nevertheless I got a lot of stuff done and had a good time easing into this new mode.
Fortunately the GitHub contribution activity offers a very good summary of what happened, as I already had trouble recalling everything …

![Github Summary for April 2020](/images/open-source-reports/github-summary-2020-04.png)

As you can see most of my time was spent on BTCPay Server related projects:
We had our [biggest release ever](https://blog.btcpayserver.org/btcpay-server-1-0-4-0/), with the highlight of PayJoin functionality that Kukks and Nicolas worked on.
My contributions were mainly on implementing the new default theme, which now also features the long awaited [dark mode](https://twitter.com/DennisReimann/status/1246860991700271105).
This builds on the UI refactorings I did for the BTCPay Casa theme last year.

I finished up some remaining tasks and released [UIengine v3.0](https://twitter.com/DennisReimann/status/1253626894752382981). 🎉
<br>
The [UIengine](https://uiengine.uix.space) isn't directly Bitcoin related, but we are using it to build the [BTCPay Server Design System](https://design.btcpayserver.org/) I also initiated this month.
It is the codified version of the BTCPay Server design guidelines.
It will help us building new features as well as streamlining all of our user interfaces and keeping them consistent across all apps and websites.

Speaking of, together with the v1.0.4.0 release we also relaunched the [official website](https://btcpayserver.org/) and the [merchant directory](https://directory.btcpayserver.org/).
Those were done by [Ed](https://twitter.com/vswee/) and [Jonathan](https://twitter.com/JonathanErlichL), who did some great work on those sites!

## What else?

The [Kindle Status Display](/kindle-status-display.html) has its own detailed post and I enjoy it showing the halving countdown.
Tick-tock, next block!

It made me really sad to hear that [things have turned bitter for Bittr](https://getbittr.com/press-releases/things-have-turned-bitter-for-bittr). 😢
<br>
Bittr was one of my favorite services in the space, it was a very customer-friendly on-ramp and a great recommendation for beginners.
Now that it is gone I had to come up with [my own stacking sats script](https://github.com/dennisreimann/stacking-sats-kraken).
It uses the Kraken API and can be run cronjob to stack weekly, daily or even hourly.

[Markus](https://twitter.com/MarkusTurm/) and I were guests on the german speaking [Mises Karma](https://miseskarma.de/podcast/episode-34-bitcoin-und-die-oesterreichische-schule-im-gespraech-mit-markus-und-dennis/) podcast.
It was an introduction episode for beginners with an Austrian Economics background.

For May I plan to [rework the BTCPay Server docs](https://github.com/btcpayserver/btcpayserver-doc/issues/495), which I've already started with.
Also I want to help with the new greenfield API where Kukks is mentoring me learning C# and ASP.NET.

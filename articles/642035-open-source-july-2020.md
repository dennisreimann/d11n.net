---
title: My 4th Month of Full-Time Open Source
date: '2020-08-03'
tags:
  - Open Source
  - Full-time
  - BTCPay Server
  - Raspiblitz
description: |
  Summary of my open source contributions in July 2020, which is the forth month of my full-time open source journey.
---
# My 4th Month of Full-Time Open Source

[Last month](/open-source-june-2020.html) was a bit slow code contribution-wise, but luckily this changed in July:
Motivation increased rapidly and there are lots of projects to cover in this review.

## M5StackSats

I [updated the BTCPay Server integration](https://twitter.com/DennisReimann/status/1279867664094171138) of the M5StackSats:
There was an issue with the QR code generation, which lead me to pick up the project again.
The UI and user flow got some improvements and I also added proper error handling in case of network errors.

![](/images/m5stacksats/userflow-error-handling.png)

A few merchants are using the M5StackSats already and there are some more things I plan to add to the integration.
If you want to learn a bit more about this project, see [my initial post on the BTCPay Server integration](/m5stacksats-btcpayserver-integration.html), which alkso contains a quick demo video.

## BTCPay Server UI Rebrushes

Most of my pull requests this month have been updates of the BTCPay Server UI.
I went through the sections and pages one by one and applied some UI improvements.
If you don't want to wait for the next BTCPay Server version, you can get a sneak peek here:

* [Account section](https://github.com/btcpayserver/btcpayserver/pull/1721)
* [Server settings](https://github.com/btcpayserver/btcpayserver/pull/1727)
* [Store section](https://github.com/btcpayserver/btcpayserver/pull/1761)
* [Wallet section](https://github.com/btcpayserver/btcpayserver/pull/1763)

Some bigger changes have been made to the [Login and Register pages](https://github.com/btcpayserver/btcpayserver/pull/1752).
Thanks to [dstrukt](https://github.com/dstrukt) who did the UI design, these pages will be much cleaner in the upcoming release.
I think we made some great progress there and I'm looking forward to tackle upcoming changes with him as well.

Another part of the next update is also the new [recovery phrase page](https://github.com/btcpayserver/btcpayserver/pull/1745):
Our previous way of displaying the seed for a newly generated wallet was insufficient regarding the importance of the matter.
There will be a separate page dedicated to explaining what the recovery phrase is and what to consider in terms of backup.

![The new recovery phrase page](/images/btcpayserver/recovery-phrase.png)

Kukks and I also migrated the [BTCPay Server Foundation](https://foundation.btcpayserver.org/) website to the new design system.
The blog is now the last of our outlets we have to migrate to be consistent there as well.
Overall the design system already paid off, as it makes it so much easier to keep a consistent look and experience.

## UIengine overhaul

Speaking of UI rebrushes: The [UIengine](https://uiengine.uix.space/) received a [major UI overhaul](https://twitter.com/DennisReimann/status/1282297120251355136) too.
Thanks to [Cos Anca](https://twitter.com/cos_anca) the interface looks clean, fresh and sexy.
He not only rebrushed the interface, but also added some new token representations:
`opacity`, `box-shadow` and `border` styles can now also be properly displayed.

![](/images/uiengine/ui-overhaul.png)

The first project I upgraded was the [BTCPay Server Design System](https://design.btcpayserver.org/).
It is a nice test case, because we allow to apply the light/dark theme to the UIengine interface as well.

## Podcasts

The Einundzwanzig podcast [celebrated episode 42](https://twitter.com/_einundzwanzig_/status/1288795449445568512) last week.
It was the last episode of season two and we are looking forward to the next 21 episodes.
Season finals are great, because all five of us come together and rock an episode with the toximalism volume pumped up to 11. 😉

<div class="anchorEmbed">
  <iframe src="https://anchor.fm/einundzwanzig/embed/episodes/42---Bitcoin-ist-die-Antwort-ehdr1d/a-a2qp313" frameborder="0" scrolling="no"></iframe>
</div>

I love being a part of this team and it gives me a big smile to see what we have accomplished so far:
The format has evolved beyond the regular news episodes, we are putting out interviews, personal stories and readings.
Most of this is inspired by other great podcasts in the space and bringing bitcoin-only content to the german-speaking audience is a labour of love for all of us.

Beyond that I've been invited to the [Bitcoin OP_UXUI podcast](https://twitter.com/BitcoinOPUXUI/status/1285273400798257158):
We discussed UI design and development in general, our idea of UI engineering and how all of this related to Bitcoin.
We also covered the new [design initiative by Square Crypto](https://medium.com/@squarecrypto/square-crypto-designer-grants-a9a3982c1921) and what I work on at BTCPay Server and other projects.
Give it a listen …

<div class="anchorEmbed">
  <iframe src="https://anchor.fm/bitcoinopuxui/embed/episodes/Bitcoin-OP_UXUI---Episode-03---Dennis-Reimann--BTCPay-contributor--UI-engineer-eh0bg3/a-a2odtg7" frameborder="0" scrolling="no"></iframe>
</div>

## Bitcoin Donations Portal

[BitcoinDevList.com](https://bitcoindevlist.com/) was by far the project which created the most uproar this month:
[Matt and I launched the Bitcoin Donation Portal](https://twitter.com/matt_odell/status/1288533234867941376), which lists people working on Bitcoin and related projects.
The goal is to increase the visibility of contributors to the space that are accepting donations.

I remember Matt talking about the idea for quite some time now.
He recently discovered GitHub Sponsors and [tweeted about some devs](https://twitter.com/matt_odell/status/1288309398109147136) having a profile there.
This lead to some discussion around the topic and I proposed to act on it:
I envisioned some page similar to the [BTCPay Server Directory](https://directory.btcpayserver.org/), where people can enter their information.
Forked the repo of this website, made some adaptions and four hours later we launched the project.

Donations and grants are important to make the development of Bitcoin as well as related projects and technologies sustainable.
The donation portal has been well received, lots of people applauded us for launching something that can help the community.
It also sparked some good discussions and I'm sure we and others will keep on working on this and [similar projects](https://twitter.com/opensats).

A propos: I pimped [my GitHub sponsors profile](https://github.com/sponsors/dennisreimann) to reflect my current projects.
If you like my work, please consider becoming a sponsor – as I‘m working on open source full-time now it helps a lot.
There is also the option to [donate via bitcoin or lightning](/donate.html).

## GitHub Contribution Summary

Last but not least, here's the summary for the last month.

![Github Summary for July 2020](/images/open-source-reports/github-summary-2020-07.png)

---
title: The 3-Step Guide to Stacking Sats responsibly
date: '2020-03-03'
tags:
  - Bitcoin
  - Stacking Sats
  - Cost Average
  - CoinJoin
description: |
  Bitcoin is a highly volatile asset, yet you might consider it as a long-term saving instrument.
  Cost Averaging enables Bitcoin Zen mode and this post explains how to stack sats responsibly.
---
# The 3-Step Guide to Stacking Sats responsibly

## Cost Averaging enables Bitcoin Zen mode

Bitcoin is a highly volatile asset, yet you might consider it as a long-term saving instrument.
Cost averaging is a strategy that reduces the impact of volatility:
You set up an automated investment plan and regularly buy whatever amount fits your circumstances.
Doing so you gradually increase your bitcoin holdings while enjoying peace of mind and not having to look at price charts.

This is a comparatively responsible way to get started, especially if you are new to the space.
Your initial goal might be to get rich quick, but rest assured: there are way more valuable lessons to be learned here.
Nevertheless, having skin in the game is the best way to get used to bitcoin and engage with it as a new form of money.

<p class="note">
Just to make sure:
You don't have to buy full units, as a bitcoin is divisible down to eight decimal places.
The smallest unit is called satoshi, which we Bitcoiners lovingly abbreviate as "sats".
</p>

Cost averaging does not sound very sexy, but thanks to Matt Odell we have the [#stackingsats](https://twitter.com/matt_odell/status/1117222441867194374) meme.
There is also a [website that illustrates the concept](https://dcabtc.com/) and you can play around with the numbers and see the results.
<br>
Alright, now that you are convinced, let's see how this looks in practice for EU citizens …

## 1. Create a wallet using Wasabi

Wasabi is a wallet that focuses on privacy, which is an important topic when holding and using bitcoin.
Its functionality guides you to not shoot yourself in the foot and maintain a good level of financial privacy.

1. Download, verify and install [Wasabi Wallet](https://wasabiwallet.io/) – see the [installation docs](https://docs.wasabiwallet.io/using-wasabi/InstallPackage.html) for details.
2. [Generate a new wallet](https://docs.wasabiwallet.io/using-wasabi/WalletGeneration.html#generating-the-wallet-step-by-step) and name it "StackingSats".
3. The most important step: ==Write down and [back up the seed](https://docs.wasabiwallet.io/using-wasabi/WalletGeneration.html#backup)!==
4. Open the wallet and copy the "Extended Account Public Key" (starting with `xpub…`) from the "Wallet Info" tab in the Explorer.

![Wasabi Wallet Info: Copy the xpub key, which we need in the next step](/images/stacking-sats/wasabi-wallet-info.png)

## 2. Sign up at Bittr

The Netherlands-based company [Bittr](https://getbittr.com/) offers the simplest way to stack sats in the EU:

1. [Register](https://getbittr.com/save-bitcoin) with your email address and an [xpub key](https://getbittr.com/blog/bittr-implements-extended-public-keys-xpub-ypub-zpub), which we just copied.
2. Everytime you send them money via bank transfer, they convert that amount to bitcoin at the current price.
3. They directly send the funds to a new address of yours (enabled by the xpub key you provided), so you stay in control of the sats you just stacked.
4. Start by sending the minimum amount of 25 &euro; and verify everything works:
   The sats stacked using Bittr should appear in the Wasabi wallet you created and you should get informed about that via email.
5. Set up a recurring bank transfer to reap the benefits of the cost averaging strategy.

## 3. CoinJoin and cold store your funds

Bittr knows the addresses it has sent the funds to and hence could potentially trace where you send those funds next.
Even if Bittr is a great service with no bad intentions, this might not be what you want.
This is where the privacy oriented feature called [CoinJoin](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) offered by Wasabi comes into play.

Once you stacked an amount of 0.1 bitcoin (that's 10 million sats) you can "mix" those.
In very simple terms: In a CoinJoin up to 100 people come together and each provide 0.1 bitcoin.
They exchange their coins and everyone randomly gets back the amount provided, minus a bit of fee that Wasabi takes for coordinating this exchange.
This [breaks and eliminates the links](https://6102bitcoin.com/coinjoin-overview/) the funds previously had.

After you have mixed your precious sats, you should store them very securely.
The easiest and safest way is to do so is using a hardware wallet.
You can [connect your hardware wallet to Wasabi](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html) and manage your funds that way.
As setting up and dealing with a hardware wallet might be another topic in itself, I will leave it at that.
There are a lot of good tutorials out there and the main point here is to think about securing your sats by storing them in an offline wallet.

## More to come

The [upcoming Wasabi release](https://twitter.com/HillebrandMax/status/1235537190970515457) will make the process even easier:
Right now Wasabi mixes into the same wallet and there is an upcoming feature that allows you to directly mix to a separate wallet.
Currently you have to mix and then send in two steps.
I will update this post once this new functionality is released in Wasabi.

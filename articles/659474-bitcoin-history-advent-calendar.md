---
title: My Bitcoin History Advent Calendar
date: '2020-12-01'
tags:
  - Bitcoin
  - History
  - Cypherpunk
teaser: /images/advent-calendar/all-i-want-for-christmas-is-bitcoin.jpg
description: |
  December is a good time to look back and reflect on what happened.
  This year I'm taking a detour into the history of Bitcoin and share my thoughts in the form of this little advent calendar.
---
# My Bitcoin History Advent&nbsp;Calendar

December is a good time to look back and reflect on what happened.
This year I'm taking a detour into the history of Bitcoin and share my thoughts in the form of this little advent calendar. 🎄

The stories have no particular order and are just a reflection of mine from what I find to be interesting.
There are so many exciting tidbits and meaningful insights hidden in the early history of Bitcoin.
I hope you enjoy these as much as I do …

<script>
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  if (y == 2020 && m <= 11) {
    const d = now.getDay()
    const css = `.advent-calendar ol > li:nth-child(n+${d}) { display: none; } `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }
</script>

<div class="advent-calendar">

1. It's a common misconception that Bitcoin is the first "cryptocurrency". There have been multiple attempts before, but all of them involved trade-offs that prevented them from becoming wide-spread solutions:

    - David Chaum worked on [DigiCash](https://www.chaum.com/ecash/), which relied on a central organization as a trusted third-party.
    - Adam Back came up with [hashcash](http://www.hashcash.org/), which brought up the basic proof-of-work idea.
      Though each unit could only be spent once, it lacked the absolute scarcity aspect.
    - Nick Szabo conceptualized Bit Gold, which lead to the famous [Shelling Out](https://nakamotoinstitute.org/shelling-out/) article.
      Yet, it could not fully solve the problem of double-spending, because it remained [vulnerable to Sybil attacks](http://unenumerated.blogspot.com/2009/05/liar-resistant-government.html).
    - Wei Dai proposed [b-money](https://nakamotoinstitute.org/b-money/). It didn't reliable solve the problem of money creation.
    - Hal Finney's [RPOW](https://nakamotoinstitute.org/finney/rpow/index.html) (reusable proofs of work) expanded on Adam Back's hashcash ideas,
      but never left the experimental proof of concept stage.

    As they've seen numerous attempts before, most members of the Cryptography Mailing List received the announcement of Bitcoin rather critically. 🧐
    E.g. John Levine addressed the potential computing power attack vector known as the "51% attack" and [wrote](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014817):

    > Bad guys routinely control zombie farms of 100,000 machines or more. […]<br>
    >
    >  This is the same reason that hashcash can't work on today's Internet -- the good guys have vastly less computational firepower than the bad guys. <br>
    > I also have my doubts about other issues, but this one is the killer.

2. In contrast, [Hal Finney's first response](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014827) on the Cryptography Mailing List sums up the value proposition of our "magic internet money" just nicely:

    > there is potential value in a form of unforgeable token whose production rate is predictable and can't be influenced by corrupt parties.

    He wrote this on November 07, 2008 – one week after after Satoshi published the [Bitcoin whitepaper](http://www.bitcoin.org/bitcoin.pdf).
    This value proposition was apparent to him in conjunction with the global financial crisis, which was just unfolding.
    Bitcoin had been born as a potential antidote – to dismantle the power of centralized institutions, which are known to adjust the monetary supply as they see fit. 🖨💸

    Twelve years later, in the midst of the Corona pandemic and the central bank reactions it entails, this becomes obvious to an ever growing number of people.
    Today, I'm truely thankful for Satoshi and all the cypherpunks like Hal, that have started to work on alternatives at just the right time.

3. Speaking of Hal – he was also the first one to ponder [the question of valuation](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/2/#015004):

    > As an amusing thought experiment, imagine that Bitcoin is successful and becomes the dominant payment system in use throughout the world.
    > Then the total value of the currency should be equal to the total value of all the wealth in the world.
    > Current estimates of total worldwide household wealth that I have found range from $100 trillion to $300 trillion.
    > With 20 million coins, that gives each coin a value of about $10 million.

    Reading this at face value, the thought experiment doesn't fully work out for me.
    Because in that scenario it seems a little weird to relate the price to another currency;
    especially with the current situation where exuberant money printing is debasing every other currency, this feels like measuring with a rubber band.

    If one reads *monetary wealth* as an example of *purchasing power*, I think he was right onto it:
    It makes you realize, that bitcoin would be [Everything there is, divided by 21 million](https://www.youtube.com/watch?v=2pDlaOGA2ac).

4. While we are at the topic of price:
    The first known transaction, which traded bitcoin for fiat currency was [made by Martti Malmi](https://twitter.com/marttimalmi/status/423455561703624704).
    He sold 5,050 BTC for $5,02 on October 12th, 2009.
    From todays perspective – with 1 BTC being priced at ~$19k – these 5050 BTC are worth almost one hundred million US Dollar.
    Yes, that's a 1 and many 0s.

    Another now famous transaction was done by Laszlo Hanyecz on May 18th 2010:
    It was the first purchase of a real-world good with bitcoin, sparked by [Laszlo desiring something tasty](https://bitcointalk.org/index.php?topic=137.0) to eat…

    > I'll pay 10,000 bitcoins for a couple of pizzas.. like maybe 2 large ones so I have some left over for the next day.
    > I like having left over pizza to nibble on later.
    > You can make the pizza yourself and bring it to my house or order it for me from a delivery place,
    > but what I'm aiming for is getting food delivered in exchange for bitcoins where I don't have to order or prepare it myself, […]

    According to the calculation above, that’s now a 2 and many 0s.
    Though this can be seen as a very expensive purchase in retrospective, boths sides of the deal were very happy with the trade back then.
    And for the community, the ["Bitcoin Pizza Day"](https://happybitcoinpizzaday.com/) is a very important milestone, that we celebrate with a delicious feast. 🍕

5. Now that we know that bitcoins can be worth a lot:
   Did you also know that the subsidy of the first Bitcoin block is [not spendable](https://github.com/bitcoin/bitcoin/blob/b549cb1bd2cc4c6d7daeccdd06915bec590e90ca/src/validation.cpp#L1960)?
    The so called [Genesis block](https://en.bitcoin.it/wiki/Genesis_block) is hardcoded into the software.
    As it has no connection to a previous block, validating the [coinbase transaction](https://en.bitcoin.it/wiki/Coinbase) would fail.
    This is most likely the reason it gets deliberately skipped and hence also is not included in the UTXO set.

    Damn, that makes bitcoin even more scarce. 😉

</div>

If you like digging into Bitcoin history as much as I do, you will also enjoy the books
[Digital Gold](https://www.amazon.com/Digital-Gold-Untold-Story-Bitcoin/dp/0241180996/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&qid=1606989130&sr=8-3&linkCode=ll1&tag=innovatedde-21&linkId=7f9b5a88c14b3e7653de934585d38c79) and
[The Book Of Satoshi](https://www.amazon.com/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061312/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&qid=1606989372&sr=8-1&linkCode=ll1&tag=innovatedde-21&linkId=c7cafc40f4ee2125d61bcdeb459128cb), which I can highly recommend.

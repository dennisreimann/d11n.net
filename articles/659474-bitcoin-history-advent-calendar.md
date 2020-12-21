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
  if (y == 2020 && m <= 11 && !location.host.startsWith('localhost')) {
    const d = now.getDate()
    const css = `.advent-calendar ol > li:nth-child(n+${d+1}) { display: none; } `
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

2. As they've seen numerous attempts before, most members of the Cryptography Mailing List received the announcement of Bitcoin rather critically. 🧐
    E.g. John Levine addressed the potential computing power attack vector known as the "51% attack" and [wrote](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014817):

    > Bad guys routinely control zombie farms of 100,000 machines or more. […]<br>
    >
    >  This is the same reason that hashcash can't work on today's Internet -- the good guys have vastly less computational firepower than the bad guys. <br>
    > I also have my doubts about other issues, but this one is the killer.

3. In contrast, [Hal Finney's first response](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014827) on the Cryptography Mailing List sums up the value proposition of our "magic internet money" just nicely:

    > there is potential value in a form of unforgeable token whose production rate is predictable and can't be influenced by corrupt parties.

    He wrote this on November 07, 2008 – one week after after Satoshi published the [Bitcoin whitepaper](http://www.bitcoin.org/bitcoin.pdf).
    This value proposition was apparent to him in conjunction with the global financial crisis, which was just unfolding.
    Bitcoin had been born as a potential antidote – to dismantle the power of centralized institutions, which are known to adjust the monetary supply as they see fit. 🖨💸

    Twelve years later, in the midst of the Corona pandemic and the central bank reactions it entails, this becomes obvious to an ever growing number of people.
    Today, I'm truely thankful for Satoshi and all the cypherpunks like Hal, that have started to work on alternatives at just the right time.

4. Speaking of Hal – he was also the first one to ponder [the question of valuation](https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/2/#015004):

    > As an amusing thought experiment, imagine that Bitcoin is successful and becomes the dominant payment system in use throughout the world.
    > Then the total value of the currency should be equal to the total value of all the wealth in the world.
    > Current estimates of total worldwide household wealth that I have found range from $100 trillion to $300 trillion.
    > With 20 million coins, that gives each coin a value of about $10 million.

    Reading this at face value, the thought experiment doesn't fully work out for me.
    Because in that scenario it seems a little weird to relate the price to another currency;
    especially with the current situation where exuberant money printing is debasing every other currency, this feels like measuring with a rubber band.

    If one reads *monetary wealth* as an example of *purchasing power*, I think he was right onto it:
    It makes you realize, that bitcoin would be [Everything there is, divided by 21 million](https://www.youtube.com/watch?v=2pDlaOGA2ac).

5. While we are at the topic of price:
    The first known transaction, which traded bitcoin for fiat currency was [made by Martti Malmi](https://twitter.com/marttimalmi/status/423455561703624704).
    He sold 5,050 BTC for $5,02 on October 12th, 2009.
    From todays perspective – with 1 BTC being priced at ~$19k – these 5050 BTC are worth almost one hundred million US Dollar.
    Yes, that's a 1 and many 0s.

6. Another now famous transaction was done by Laszlo Hanyecz on May 18th 2010:
    It was the first purchase of a real-world good with bitcoin, sparked by [Laszlo desiring something tasty](https://bitcointalk.org/index.php?topic=137.0) to eat…

    > I'll pay 10,000 bitcoins for a couple of pizzas.. like maybe 2 large ones so I have some left over for the next day.
    > I like having left over pizza to nibble on later.
    > You can make the pizza yourself and bring it to my house or order it for me from a delivery place,
    > but what I'm aiming for is getting food delivered in exchange for bitcoins where I don't have to order or prepare it myself, […]

    According to the calculation above, that’s now a 2 and many 0s.
    Though this can be seen as a very expensive purchase in retrospective, boths sides of the deal were very happy with the trade back then.
    And for the community, the ["Bitcoin Pizza Day"](https://happybitcoinpizzaday.com/) is a very important milestone, that we celebrate with a delicious feast. 🍕

7. Now that we know that bitcoins can be worth a lot:
   Did you also know that the subsidy of the first Bitcoin block is [not spendable](https://github.com/bitcoin/bitcoin/blob/b549cb1bd2cc4c6d7daeccdd06915bec590e90ca/src/validation.cpp#L1960)?
    The so called [Genesis block](https://en.bitcoin.it/wiki/Genesis_block) is hardcoded into the software.
    As it has no connection to a previous block, validating its [coinbase transaction](https://en.bitcoin.it/wiki/Coinbase) would fail.
    This is most likely the reason it gets deliberately skipped and hence also is not included in the UTXO set.

    Damn, that makes bitcoin even more scarce. 😉

8. The [coinbase transaction](https://learnmeabitcoin.com/technical/coinbase-transaction) is a special part of each Bitcoin block:
    It has a blank input (with no previous output) as it is the subsidy for the miner who found the block.
    Miners can sign blocks they found with a blob of arbitrary data.
    The Genesis block famously quotes a headline from 📰 The Times:

    > The Times 03/Jan/2009 Chancellor on brink of second bailout for banks

    Satoshi knew he was onto something here and must have chosen this signature carefully.
    It is both an attestation of the date after which the block was mined and a stab at the economical principles, which Bitcoin opposes.

9. The ideological mindset didn't just appeal to the early cypherpunks.
    Martti Malmi approached Satoshi in May 2009, because he was intruiged by the potential to change the balance of power between governments and their citizens. 🗽

    > A widespread adoption of such a system sounds like something that could have a devastating effect on the state’s ability to feed on its livestock.
    > What do you think about this?
    > I'm really excited about the thought of something practical that could truly bring us closer to freedom in our lifetime.

    Satoshi approved of this and encouraged Martti to help him spread the word:

    > Your understanding of Bitcoin is spot on

    <div style="text-align:right">
      <small class="note">
        Source: Nathaniel Popper, <a href="https://www.amazon.com/Digital-Gold-Untold-Story-Bitcoin/dp/0241180996/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&qid=1606989130&sr=8-3&linkCode=ll1&tag=innovatedde-21&linkId=7f9b5a88c14b3e7653de934585d38c79">Digital Gold</a>, page 30
      </small>
    </div>

10. Martti Malmi entered the scene because of his political motivation and the revolutionary potential he saw in Bitcoin.
    He helped Satoshi by working on the [early bitcoin.org website](https://web.archive.org/web/20100106082749/http://www.bitcoin.org/), which until then was solely focusing on the technical aspects of Bitcoin.
    He articulated a list of advantages, this system has for regular users:

    > - Transfer money easily through the internet, without having to trust third parties.<br>
    > - Third parties can’t prevent or control your transactions.<br>
    > - Be safe from the unstability caused by fractional reserve banking and bad policies of central banks. The limited inflation of the Bitcoin system’s money supply is distributed evenly (by CPU power) throughout the network, not monopolized by the banks.

11. Later Martti Malmi launched the [bitcointalk.org](https://bitcointalk.org/) forums, where users could discuss the technical, economical and political aspects of Bitcoin.
    These forums and their discussions are a valuable archive for the early history of Bitcoin and they are also still very active today.

12. Martti was also the one who came up with the idea of running Bitcoin automatically on computer startup.
    Until then having a relevant number of nodes on the network was still a problem.
    The [autostart feature got introduced in v0.2](https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/29/) alongside with a few other contributions by Martti.

    He was the first developer besides Satoshi and one could say, that Martti was also the first one, to improve Bitcoin from an UX perspective.
    Later on, Martti [gradually withdrew from Bitcoin](https://forum.bitcoin.com/post169130.html) and the community:

    > I found the atmosphere less inspiring and exciting than in the early days, when none of Bitcoin's potential had realized yet.
    > On the other hand, by then Bitcoin already had lots of skilled coders who would keep it running, […]

13. Speaking of firsts – [Hal Finney](https://web.archive.org/web/20140403012916/http://www.finney.org/~hal/) had a lot of those too: 🥇
    - Hal was the first one besides Satoshi [running a bitcoin node](https://twitter.com/halfin/status/1110302988)
    - He was the receiver of the first bitcoin transaction and got [10 BTC from Satoshi](https://www.blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16)
    - Hal was the first employee at the PGP Corporation
    - He was the creator of the first known [anonymous remailer](https://en.wikipedia.org/wiki/Anonymous_remailer#Cypherpunk_remailers.2C_also_called_Type_I)

14. Those firsts list are fun, here's one about Bitcoin blocks: 1️⃣
    - 170 was the first block containing a non-coinbase transaction – that's the one from above, where Satoshi sent Hal the 10 BTC.
    - 481824 was the [first SegWit block](https://twitter.com/conio/status/900722226911219712) and contained the [first SegWit transaction](https://twitter.com/KHS9NE/status/900553902923362304)
    - 481947 was mined by BitFury as the [first SegWit-block with more than 1 MB](https://twitter.com/sysmannet/status/900992234123911168?s=20)
    - 505253 was the [first block with more than 2 MB of size](https://twitter.com/BitGo/status/954998877920247808)

15. In the early days, aquiring bitcoins wasn't easy:
     As there were no exchanges, you either had to find someone to buy from or mine them.
     To give people easy access, Gavin Andresen created a [faucet, that gave away 5 BTC](https://bitcointalk.org/index.php?topic=183.0) for free:

     > Five ฿ per customer, first come first served, I've stocked it with ฿1,100 to start.  I'll add more once I'm sure it is working properly.<br>
     > Why?  Because I want the Bitcoin project to succeed, and I think it is more likely to be a success if people can get a handful of coins to try it out.

    The faucet was replenished with donations.
    Between the launch date in June 2010 and its end in early 2011 [it gave away 19,715 BTC](https://news.bitcoin.com/bitcoin-history-part-3-turning-on-the-faucet/). 🚰

     You can take a look at the [faucet website on the Internet Archive](https://web.archive.org/web/20100703032414/https://freebitcoins.appspot.com/).
     Unfortunately, the opportunity to withdraw doesn't exist anymore. 😉

16. Ten years ago the first [mining pool](https://en.bitcoinwiki.org/wiki/Bitcoin_mining#Mining_in_pools) went live:
    [Block 97834](https://www.blockstream.info/block/000000000000dcaab612dcfd2a7b281c794a6da9006773dab55141ac608bfc86) was the first block found mined by Slush Pool.
    It contained no transaction besides the coinbase:
    Those were their first 50 bitcoin and Slush Pool has [mined over 1.25 million BTC since then](https://bitcoinmagazine.com/articles/the-next-10-years-of-bitcoin-mining).

17. The first media appearance that brought Bitcoin to the attention of the mainstream was an [article on Slashdot](https://news.slashdot.org/story/10/07/11/1747245/bitcoin-releases-version-03).
     It was associated with the release of Bitcoin v0.3 and also featured the ideological and economical aspects:

     > How's this for a disruptive technology?
     > Bitcoin is a peer-to-peer, network-based digital currency with no central bank, and no transaction fees.
     > Using a proof-of-work concept, nodes burn CPU cycles searching for bundles of coins, broadcasting their findings to the network.
     > Analysis of energy usage indicates that the market value of Bitcoins is already above the value of the energy needed to generate them, indicating healthy demand.
     > The community is hopeful the currency will remain outside the reach of any government.

     It appeared on July 11, 2010 and brought the attention the community had hoped for.
     A [surge of new users](https://en.bitcoinwiki.org/wiki/Bitcoin_history#Bitcoin_in_2010) quickly lead to an increase in mining difficulty by 300% the week after the article.
     The exchange rate increased 10 times in ten days, from 0.008 USD per BTC to 0.08 USD per BTC.
     As one can imagine, Gavin Andresen's faucet ran dry quickly.

18. In early 2011 Bitcoin hit two milestones in terms of its monetary policy and capabilities:
    - Block 105000 was mined on January 28th: With this block, 5.24 million bitcoins had been issued.
      This is one quarter of the total ~21 million supply.
    - On February 9th, the value of 1 bitcoin reached parity with the US dollar:
      1 BTC was traded for 1 USD.
      In June that year it reached the 1 BTC = 10 USD mark. 📈

19. In September 2011, [Amir Taaki](https://en.bitcoin.it/wiki/Amir_Taaki) came up with the [BIP process](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki):

    > BIP stands for Bitcoin Improvement Proposal.
    > A BIP is a design document providing information to the Bitcoin community, or describing a new feature for Bitcoin or its processes or environment.
    > The BIP should provide a concise technical specification of the feature and a rationale for the feature.

    It got [revised in 2016](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki).
    From there on, BIPs are the general process to propose, plan and design all changes to Bitcoin.

21. All along its way, Bitcoin raised the attention of critics. 🧐
    At the time of writing this, it has been [reported as dead almost 400 times](https://99bitcoins.com/bitcoin-obituaries/).
    The first obituary appeared on [The Underground Economist blog](https://web.archive.org/web/20181005185752/https://undergroundeconomist.com/post/1528511369) on December 15th, 2010.
    It argues against bitcoin as a currency, because of its deflationary aspect:

    > Negative feedback loops like this are basically homeostasis.
    > In nature, positive feedback loops like exist with Bitcoin are lethal;
    > the only thing that’s even kept Bitcoin alive this long is its novelty.
    > Either it will remain a novelty forever or it will transition from novelty status to dead faster than you can blink.

21. The first mainstream obituary was written on June 20, 2011 by [Forbes](https://www.forbes.com/sites/timworstall/2011/06/20/so-thats-the-end-of-bitcoin-then/?sh=72fca2d85d71), just after the biggest shock until then – the Mt Gox hack:

    > No, ~~the~~ [sic] this doesn't necessarily mean the end of the Bitcoin experiment, but it's a pretty good indication of it.
    > For there are certain things that we want from a currency.
    > A medium of exchange, a store of value, we'd also like to it be liquid and security is important as well.
    > No currency can have all of these features […] to perfection but a currency which doesn't have any of them in appreciable quantities isn't going to last very long. […]
    > <br>
    > It's difficult to see what the currency has going for it.

    Mainstream media still doesn't seem to have learned much.
    But that'll surely give us more rash obituaries to look forward to … 🪦

22. In a similar vein, the Satoshi Nakamoto Intitute collects a list of [The Skeptics](https://nakamotoinstitute.org/the-skeptics/). 🤨

    One of the most vocal sceptics until today is Peter Schiff.
    As a typical gold bug, he falls for the ["intrinsic value" argument](https://twitter.com/DennisReimann/status/1255800924938911746) and I think he will [stick with this](https://twitter.com/PeterSchiff/status/1256634494741856257) forever …

    > What [bitcoins] lack is their own fundamental intrinsic value.
    > You can’t do anything with a bitcoin, other than trade it for something you want.
    > So, intrinsically, the bitcoin itself has no value.

    Yet it is good to have him with us as a vital part of Bitcoin Twitter.
    His tweets are [pure gold as a buy signal](https://www.blockchaincenter.net/tweets-in-charts/?chartid=1).
    The harsher he tweets, the more number go up we see …

23. On December 12th/13th, Satoshi wrote [his last forum post](https://satoshi.nakamotoinstitute.org/posts/bitcointalk/543/) and sent [his last email to the mailing list](https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/16/#26744510), announcing the release of Bitcoin 0.3.19.

    He disappeared from public conversation after a [PCWorld article](https://www.pcworld.com/article/213230/could_wikileaks_scandal_lead_to_new_virtual_currency.html), which proposed WikiLeaks to accept donations via bitcoin after being cut off from PayPal, Visa and Mastercard.
    Satoshi thought of this being too early for Bitcoin and [opposed the idea](https://satoshi.nakamotoinstitute.org/posts/bitcointalk/threads/259/#5):

    > It would have been nice to get this attention in any other context.
    > WikiLeaks has kicked the hornet's nest, and the swarm is headed towards us.

24. Satoshi kept on conversing privately, e.g. with Gavin Andresen, who maintained the project after Satoshi's public disappearance.
    This correspondence stopped after Gavin mentioned that he had been invited to speak at an event hosted by an organization under the CIA.

    The very last post on one of Satoshi's accounts appeared as a [comment on the P2P Foundation's announcement post of Bitcoin](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source?commentId=2003008%3AComment%3A52186).
    Newsweek tried to end the mystery and came up with [the story of Dorian Nakamoto](https://www.newsweek.com/2014/03/14/face-behind-bitcoin-247957.html) – which Satoshi refuted:

    > I am not Dorian Nakamoto.

</div>

If you like digging into Bitcoin history as much as I do, you will also enjoy the books
[Digital Gold](https://www.amazon.com/Digital-Gold-Untold-Story-Bitcoin/dp/0241180996/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&qid=1606989130&sr=8-3&linkCode=ll1&tag=innovatedde-21&linkId=7f9b5a88c14b3e7653de934585d38c79) and
[The Book Of Satoshi](https://www.amazon.com/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061312/ref=as_li_ss_tl?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&qid=1606989372&sr=8-1&linkCode=ll1&tag=innovatedde-21&linkId=c7cafc40f4ee2125d61bcdeb459128cb), which I can highly recommend.
Other than that, the [Satoshi Nakamoto Institute](https://nakamotoinstitute.org/) is a great resource with lots of articles and an archive of the emails.

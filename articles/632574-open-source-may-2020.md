---
title: My 2nd Month of Full-Time Open Source
date: '2020-06-01'
tags:
  - Open Source
  - Full-time
  - BTCPay Server
description: |
  Summary of my open source contributions in May 2020, which is the second month of my full-time open source journey.
---
# My 2nd Month of Full-Time Open Source

As I know from previous time-offs of project work, May is a very good month to set your own schedule:
The weather in Germany starts to be really good, lots of sunshine hours and oftentimes it's one of summers best months.
As we were still mostly locked down, the whole family had the opportunity to set their own pace which brings a lot of relaxation.

We've become better at handling homeschooling and as stressful as it can be, it also has its light moments:
Somehow I must have picked up some math stuff along the way so that I now understand way more concepts and why they are useful.
I dreaded math in school and seeing that I can now even teach things like prime factorization makes me giggle.

## Reworking the BTCPay Server docs

Most of my coding time was spent reworking the [BTCPay Server documentation](https://docs.btcpayserver.org) site.
It was hosted on GitBook before and the previous setup had its limitations:
GitBook is a documentation hosting service which handles everything for you.
They update the docs whenever you push to the repository, but there are no local builds.
This is especially painful when you are doing bigger changes or restructurings.
You need a way to ensure everything works as expected before publishing, which simply wasn't possible.

For us it also makes sense to use something that is open source as well.
Not just that it aligns with our ideals, but we also get the possibility to apply necessary customizations.
Based on the user feedback from the initial version of the docs we wanted to improve on some things.
BTCPay Server is a suite of products living in individual repositories and having multi-repo docs was a requirement for the next version.
We also wanted to improve on the UX side too:
Besides reworking the page structure, having proper video integration offers a more seamless experience for users and simplifies maintenance for the authors.

Last year I've set up the [Wasabi docs](https://docs.wasabiwallet.io/) using [Vuepress](https://vuepress.vuejs.org/) and the experience has been very good:
For the authors almost nothing changes as they continue to write the documentation using Markdown.
The process of doing minor changes directly on GitHub stayed the same, but we gained the option to edit and verify more complex changes locally.
The [setup for the local builds](https://github.com/btcpayserver/btcpayserver-doc#build-the-documentation-locally) is straight foward and we've used it to not just author docs but also build the new features of the documentation site.
We are able to fully customize the layout and design, so we applied our light/dark theme in the docs as well.
One more step to [creating a more unified experience](https://design.btcpayserver.org) across all BTCPay Server touchpoints.

A new feature which I really like is the [multi-repo documentation](https://github.com/btcpayserver/btcpayserver-doc#external-documentation-repos):
We build the documentation site whenever the master branch of one of the involved repositories changes.
The build process of the documentation site combines a bunch of docs by checking out the various repositories.
This process is very straight forward too, because we basically just copy the individual docs to the right places and [massage them a bit](https://github.com/btcpayserver/btcpayserver-doc/blob/master/setup-deps.sh).
External repos can trigger the docs build whenever they change.
We use GitHub's [repository_dispatch](https://help.github.com/en/actions/reference/events-that-trigger-workflows#external-events-repository_dispatch) feature for this, which is exposed via the API.

There are still some more things to improve, which I'm still working on.
All in all I think we've come a long way with this change and it is a massive improvement that will also help us for everything that is yet to come. 😀

## What else?

Besides actively working on the docs I spent a good amount of time familiarizing myself more with C# and ASP.NET.
I'm at the point where I get the hang of how the language and frameworks work, but still struggle with patterns and best practices.
Also, BTCPay Server is a large codebase and has lots of concepts on its own, so I'm just starting to understand how everything relates.
The best option to do so is by coding stuff and I'm very grateful for Mr. Kukks' time and patience reviewing my pull requests:
The [Point of Sale refactoring](https://github.com/btcpayserver/btcpayserver/pull/1605) and the [Server Info API](https://github.com/btcpayserver/btcpayserver/pull/1576).

For learning purposes I've also set up a C# project for myself, which is supposed to help with one's bitcoin bookkeeping.
Other than that it's just been minor stuff here and there.
I like to screenshot the GitHub Contributions Activity, which helps remembering what happened in one month.

![Github Summary for May 2020](/images/open-source-reports/github-summary-2020-05.png)

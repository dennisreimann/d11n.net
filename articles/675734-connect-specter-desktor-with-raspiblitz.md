---
title: How to connect Specter Desktop with the RaspiBlitz
date: '2021-03-22'
tags:
  - Specter Desktop
  - RaspiBlitz
  - Full Node
  - Configuration
  - Wallet
  - Bitcoin
description: |
  This is a walk-through on how to use the Specter Desktop App on your computer with your RaspiBlitz full node.
teaser: /images/specter-desktop-raspiblitz/card.png
---
# How to connect Specter Desktop with the RaspiBlitz

This is a walk-through on how to use the [Specter Desktop App](https://github.com/cryptoadvance/specter-desktop/releases) on your computer with your RaspiBlitz full node.
If you are using the Specter Desktop web interface on your RaspiBlitz, you do not need to follow these steps.
For this case the Specter Desktop integration on the RaspiBlitz is already preconfigured.
Versions used in this tutorial:

- Specter Desktop App: v1.2.2
- RaspiBlitz: v1.6.0

## On your computer

You need to find out your computer's IP address in the local network.
Do this via the network settings or see the list of connected devices on your router.
Depending on you settings this will most likely be an address like `192.168.X.Y`.

If possible, assign a fixed IP to your computer via the router settings, so that it does not change on reconnect.
These instructions assume the following IP addresses:

- Computer: `192.168.0.12`
- RaspiBlitz: `192.168.0.21`

## On the RaspiBlitz

Connect to your RaspiBlitz via SSH and exit the main menu via the last option `Console/Terminal`.
Edit the bitcoind config so that the RPC interface allows connections from your local network:

```bash
sudo nano /mnt/hdd/bitcoin/bitcoin.conf
```

Add and update these options in the connection settings part:

```ini
rpcallowip=127.0.0.1      # Standard for local connection, leave it as is
rpcallowip=192.168.0.12   # Add this with your computer's local network IP
main.rpcport=8332         # This is the standard port, leave it as is
main.rpcbind=0.0.0.0:8332 # Change the 127.0.0.1 to 0.0.0.0 to allow non-local connections
```

If you cannot set a fixed IP for you computer in the router settings, you can also set `rpcallowip=192.168.0.0/24`.
This would grant access to all network devices with IPs in the `192.168.X.Y` range.
Use this only if necessary or if you know what you are doing.

Exit and save the config (`^X`, then `Y` and `Enter`) and restart bitcoind afterwards:

```bash
# restart
sudo systemctl restart bitcoind

# verify it worked, you shoud see "active (running)"
sudo systemctl status bitcoind
```

Now we need open the firewall for non-local connections to the RPC port:

```bash
# allow local network connections
sudo ufw allow from 192.168.0.0/16 to any port 8332 comment 'allow bitcoin RPC from local LAN'

# reload the firewall
sudo ufw reload
```

The last thing on the RaspiBlitz is to get the username and password for the RPC connection.
We need the credentials in the next step to configure the Specter Desktop app:

```bash
cat /mnt/hdd/bitcoin/bitcoin.conf | grep -E "rpc(user|password)"
```

## In the Specter Desktop App

Open Specter Desktop on your computer and click the Bitcoin logo in the top left corner.
Configure the Bitcoin RPC Connection on this screen:

![Configure the Bitcoin RPC Connection](/images/specter-desktop-raspiblitz/configuration.png)

The default username on the RaspiBlitz is `raspibolt`.
Use the credentials you retrieved with the last step on the RaspiBlitz.
As host specify the IP address of your RaspiBlitz, in this case `192.168.0.21` prefixed with `http://`.

Test the connection – if everything works you should see the connection details like this:

![Test the Bitcoin RPC Connection](/images/specter-desktop-raspiblitz/test.png)

In case the connection fails, please consult the [Specter Desktop Connection Issues FAQ](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/connect-your-node.md#potential-connection-issues).
It contains detailed explanations for the most common problems.

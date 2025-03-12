---
sidebar_position: 2
---

# Network Management

Networking management in linux is a crucial to make a robust linux system. well at least we know some essential networking tasks, like configuring interfaces, managing IP addresses, setting up routing, and using firewalls.


## Checking Network Interfaces
To check the available network interfaces, use:

```bash
ip link show
```

Or using the deprecated `ifconfig` (requires installation on some distributions)

```bash
ifconfig -a
```

To display detailed interface information:

```bash
ip addr show
```

## Configuring Network Interfaces
To bring up or down a network interface:

```bash
sudo ip link set eth0 up   # Enable interface
sudo ip link set eth0 down # Disable interface
```

For `ifconfig` users (it's deprecated bro, leave it):

```bash
sudo ifconfig eth0 up
sudo ifconfig eth0 down
```

## Managing IP Addresses
To assign an static IP address to an interface temporarily:

```bash
sudo ip addr add 192.168.1.10/24 dev eth0
```

To make changes persistent, edit the `/etc/network/interfaces` configurations (Debian based).
```bash title='/etc/network/interfaces'
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 8.8.4.4
```
or edit `/etc/sysconfig/network-scripts/ifcfg-eth0` if u use RHEL-based systems.

To remove an IP address:

```bash
sudo ip addr del 192.168.1.10/24 dev eth0
```

To check current IP addresses:

```bash
ip a
```

## Routing and Default Gateway
To check routing information:

```bash
ip route show
```

To add a default gateway:

```bash
sudo ip route add default via 192.168.1.1
```

To remove a default gateway:

```bash
sudo ip route del default
```

## Managing Network Services
To check the status of the networking service:

```bash
sudo systemctl status networking
```

To restart networking:

```bash
sudo systemctl restart networking
```

To enable network services at boot:

```bash
sudo systemctl enable networking
```

For `NetworkManager` users:

```bash
nmcli connection show
nmcli device status
```

## Troubleshooting Network Issues
To check connectivity:

```bash
ping 8.8.8.8
```

To check DNS resolution:

```bash
nslookup google.com
```

To trace network routes:

```bash
traceroute google.com
```

To analyze network traffic:

```bash
tcpdump -i eth0
```

To check open ports:

```bash
sudo netstat -tulnp
```

Or using `ss` (modern alternative):

```bash
ss -tulnp
```
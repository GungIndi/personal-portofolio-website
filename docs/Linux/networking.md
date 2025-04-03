---
sidebar_position: 2
---

# Network Management

Networking management in linux is a crucial to make a robust linux system. well at least we know some essential networking tasks, like configuring interfaces, managing IP addresses, setting up routing, and using firewalls.


## Checking Network Interfaces

```bash
ip link show    # Show interface
ifconfig -a     # Deprecated
ip addr show    # Detail interfaces information  
```

## Configuring Network Interfaces

```bash
# ip command
sudo ip link set eth0 up        # Enable interface
sudo ip link set eth0 down      # Disable interface

# ifconfig (deprecated)
sudo ifconfig eth0 up
sudo ifconfig eth0 down
```

## Managing IP Addresses
```bash
ip a                                            # Check current IP
sudo ip addr add 192.168.1.10/24 dev eth0       # Add static IP (temporal)
sudo ip addr del 192.168.1.10/24 dev eth0       # Remove IP
sudo dhclient eth0                              # Add dynamic IP
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

## Routing and Default Gateway

```bash
ip route show                                   # Check routing information
sudo ip route add default via 192.168.1.1       # Add default gateway
sudo ip route del default                       # Remove default gateway
```

## Managing Network Services

```bash
sudo systemctl status networking        # Check networking service status
sudo systemctl restart networking       # Restart networking service
sudo systemctl enable networking        # Enable networking service at boot
```

For `NetworkManager` users:

```bash
nmcli connection show
nmcli device status
```

## Troubleshooting Network Issues

```bash
ping 8.8.8.8            # Check connectivity
nslookup google.com     # Check DNS resolution
traceroute google.com   # Trace network route
tcpdump -i eth0         # Analyze network traffic
sudo netstat -tulnp     # Check open ports
ss -tulnp               # Check open ports
```
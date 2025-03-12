---
sidebar_position: 5
---

# Firewall

Firewalls are essential for securing Linux systems by controlling network traffic based on defined rules. Linux provides several firewall management tools, including:

- **iptables**: The traditional packet filtering framework.
- **nftables**: A modern replacement for iptables.
- **firewalld**: A user-friendly firewall daemon using nftables/iptables.
- **ufw**: A simplified interface for iptables, common in Ubuntu.

## Managing Firewalls with iptables

### Installing iptables
```bash
sudo apt update && sudo apt install iptables -y  # Debian/Ubuntu
sudo yum install iptables-services -y            # RHEL/CentOS
```

### Basic iptables Commands
- View rules:
  ```bash
  sudo iptables -L -v -n
  ```
- Allow SSH:
  ```bash
  sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
  ```
- Block an IP:
  ```bash
  sudo iptables -A INPUT -s 192.168.1.100 -j DROP
  ```
- Save rules:
  ```bash
  sudo iptables-save > /etc/iptables.rules
  ```

## Managing Firewalls with nftables

### Installing nftables
```bash
sudo apt install nftables -y  # Debian/Ubuntu
sudo yum install nftables -y  # RHEL/CentOS
```

### Basic nftables Commands
- Start nftables:
  ```bash
  sudo systemctl start nftables
  ```
- Create a rule to allow SSH:
  ```bash
  sudo nft add rule ip filter input tcp dport 22 accept
  ```
- List current rules:
  ```bash
  sudo nft list ruleset
  ```
- Save rules:
  ```bash
  sudo nft list ruleset > /etc/nftables.conf
  ```

## Managing Firewalls with firewalld

### Installing firewalld
```bash
sudo apt install firewalld -y  # Debian/Ubuntu
sudo yum install firewalld -y  # RHEL/CentOS
```

### Basic firewalld Commands
- Start and enable firewalld:
  ```bash
  sudo systemctl start firewalld
  sudo systemctl enable firewalld
  ```
- Allow HTTP and HTTPS traffic:
  ```bash
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https
  sudo firewall-cmd --reload
  ```
- Block an IP:
  ```bash
  sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="192.168.1.100" reject'
  ```
- List active rules:
  ```bash
  sudo firewall-cmd --list-all
  ```

## 4. Managing Firewalls with UFW (Uncomplicated Firewall)

### Installing UFW
```bash
sudo apt install ufw -y  # Debian/Ubuntu
```

### Basic UFW Commands
- Enable UFW:
  ```bash
  sudo ufw enable
  ```
- Allow SSH:
  ```bash
  sudo ufw allow 22/tcp
  ```
- Deny an IP:
  ```bash
  sudo ufw deny from 192.168.1.100
  ```
- List rules:
  ```bash
  sudo ufw status numbered
  ```

## Best Practices
- **Use minimal rules**: Keep rules as simple as possible.
- **Limit SSH access**: Allow SSH only from trusted IPs.
- **Enable logging**: Monitor firewall logs for security insights.
- **Regularly update rules**: Review and update rules to reflect current security policies.



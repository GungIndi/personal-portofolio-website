---
sidebar_postition: 10
---

# Setup VPS

What are you waiting for? why log in to your favorite time-wasting game if you just can setup your VPS now? With this step-by-step you can make ur VPS production-ready (nahh it's overclaimed but hopefully). I hope this helps anyone setting up their newly purchased VPS. `CMIIW`

## Update the OS

```bash
sudo apt-get update && sudo apt-get upgrade
```

## Config SSH

1. [Set Up SSH Key](./ssh.md#generate-ssh-key-pair)
2. [SSH Hardening](./ssh.md#ssh-hardening)

##  Config User

In this step, there's couple of things u must do
1. [Add New User](./user.md#add-user)
2. Add User to Sudo Group
```bash
sudo usermod -aG sudo [USERNAME]
```
3. Add SSH Key to User
```bash
ssh-copy-id -i [PUB_KEY_FILE] username@remote_host
```
## Buy Domain

Nothing specific in here, just buy domain from wherever you like or find the cheapest.
Set up DNS Record to point into the VPS IP Address

## Install & Configure Docker

Just follow this docs [Install Docker](https://docs.docker.com/engine/install/ubuntu/)

run docker without sudo

### Firewall

Just in case

```sh
# Update the default deny and allow rule
sudo ufw default deny incoming
sudo ufw default allow outgoing

# allow SSH
sudo ufw allow OpenSSH

# Check rules
sudo ufw show added

# Enable firewall ( do not enable if u haven't set up allow ssh)
sudo ufw enable

# Show status
sudo ufw status
```

## Get SSL/TLS Certificate

I will use `Cloudflare free SSL/TLS` in here. after you buy domain, you can use cloudflare to set up DNS Record and to Configure SSL.

1. Full setup your domain in `Cloudflare`, you can point to this [Full Setup Domain](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/) Docs
2. Create SSL Certificate at `SSL/TLS` > `Origin Server` > `Origin Certificate`. Then create it and copy the certificate into `PEM` and `KEY` file in your VPS

## Run your App
U know how, it's your app not my app

## Add a Reverse-proxy

I'll use NGINX in this case, with the SSL certificate that you copied earlier, u can put it in the NGINX config like in [This Config](./nginx.md#reverse-proxy-with-ssl-certificate) to ensure that any connection only serve is through HTTPS

## Set Up CI/CD

## Set Up Monitoring
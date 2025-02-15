---
sidebar_position: 1
---
# SSH

If you've never heard of SSH before, it stands for Secure Shell. It's basically a secure way to connect to another computer over a network.

## SSH Connection

Before you can established a SSH connection, u must generate a ssh key pair first, `public key` (shared with the remote server) and a `private key` (kept secret on your computer or wherever you think it's save)

### Generate SSH Key Pair
```sh
# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "email or comment"

# Copy SSH Public Key to Remote Server or just copy it manually
ssh-copy-id -i [PUB_KEY_FILE] username@remote_host
```

### Connect with SSH

```sh
# Connect to Remote Server
ssh -i [PRIVATE_KEY_FILE] username@remote_host 
```
## SSH Hardening

There's some steps u can do for hardening ssh, one of them is to modify the sshd_config file, here's how u can do it

```bash
# Open sshd_config file
sudo vim /etc/ssh/sshd_config

# Change the PasswordAuthentication value to No
PasswordAuthentication no

# Change the UsePAM to no
UsePAM no

# Change PermitRootLogin to no
PermitRootLogin no

# Reload ssh
sudo systemctl reload ssh
```
Additionaly on Hostinger there's another file call `50-cloud-init.conf`, u can just set PasswordAuthentication Value to no, or just simply remove it

```sh

# Change PasswordAuthentication Value to No
sudo vim /etc/ssh/sshd_config.d/50-cloud-init.conf
PasswordAuthentication no

# Just simply remove it
sudo rm /etc/ssh/sshd_config.d/50-cloud-init.conf

```

## Transfer file with SCP

Surprise-surprise, u can also transfer file secury from/to your remote server with SCP, but do the generate key part first.

```sh
# Transfer file from remote server to local
scp -i [KEY_FILE] [USERNAME]@[REMOTE_HOST]:[FILE_PATH] [DESTINATION_PATH]

# Transfer file from local to remote server
scp -i [KEY_FILE] [LOCAL_PATH] [USERNAME]@[REMOTE_HOST]:[DESTINATION_PATH]
```


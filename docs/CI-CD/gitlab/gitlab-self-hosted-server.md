---
sidebar_position: 1
description: Self-Hosted Gitlab Server.
---

# Gitlab Self-Hosted Server

U know what? turns out we can host a Gitlab Server in our environment. This allows you to bypass the premium subscription fees by managing the server yourself. Gitlab Self-Hosted Runner can be run on various environment such as Linux and Docker environment. Here's how u can set up your own Gitlab in docker.

1. Make sure to set up ur Own `DNS` and point it into the server u want to host gitlab. You can buy DNS and add SSL. Or set free DNS on [No IP](https://noip.com) and add SSL with `certbot`
 
    - Set up ur TLS with certbot by following the instruction below
    ```bash
      # install certbot
      sudo apt-get update && sudo apt-get install -y certbot

      # generate certs
      sudo certbot certonly --standalone -d <Your DNS> # make sure to free ur 80 port
      
      # from the host check if the files are symbolic links:
      ls -l /etc/letsencrypt/live/<Your DNS>/

      # if so, check permissions on the actual files
      ls -l /etc/letsencrypt/archive/<Your DNS>/

      # the output should look like this
      -rw-r--r-- 1 root root 1801 Aug 23 20:21 cert1.pem
      -rw-r--r-- 1 root root 1801 Aug 23 20:21 chain1.pem
      -rw-r--r-- 1 root root 3602 Aug 23 20:21 fullchain1.pem
      -rw-r--r-- 1 root root 1708 Aug 23 20:21 privkey1.pem

      # if they are not 644, change mod
      chmod 644 /etc/letsencrypt/archive/<Your DNS>/fullchain1.pem


      sudo cp /etc/letsencrypt/archive/<Your DNS>/privkey1.pem /etc/letsencrypt/live/<Your DNS>/privkey1.pem
      sudo cp /etc/letsencrypt/archive/<Your DNS>/fullchain1.pem /etc/letsencrypt/live/<Your DNS>/fullchain1.pem

      sudo rm /etc/letsencrypt/live/<Your DNS>/fullchain.pem
      sudo rm /etc/letsencrypt/live/<Your DNS>/privkey.pem

      sudo mv /etc/letsencrypt/live/<Your DNS>/fullchain1.pem /etc/letsencrypt/live/<Your DNS>/fullchain.pem
      sudo mv /etc/letsencrypt/live/<Your DNS>/privkey1.pem /etc/letsencrypt/live/<Your DNS>/privkey.pem

      sudo chmod 644 /etc/letsencrypt/live/<Your DNS>/privkey.pem

      # Ensure that the /etc/letsencrypt/archive/ and /etc/letsencrypt/live/ directories are readable:
      sudo chmod 755 /etc/letsencrypt/live/
    ```

:::tip A Quick Note
This guide is designed to get you up and running fast. However, it's always a better practice to understand the full process from the official [documentation](https://docs.gitlab.com/install/).
:::

## Run Self-Hosted Gitlab on Linux

Complete Documentation on [self-hosted gitlab linux](https://docs.gitlab.com/install/package/). Below is how to do it in a nutshell

1. Enable firewall (22,80,443)

2. Add Gitlab Package Repository
```shell
curl "https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh" | sudo bash
```
3. Install Gitlab
```shell
# basic installation
sudo EXTERNAL_URL="https://gitlab.gungindikusuma.xyz" apt install gitlab-ce

# install gitlab with custom root credentials
sudo GITLAB_ROOT_EMAIL="admin.example.com" GITLAB_ROOT_PASSWORD="password" EXTERNAL_URL="https://gitlab.gungindikusuma.xyz" apt install gitlab-ce
```

4. Reconfigure SSL
```shell
# Edit gitlab.rb files to set letsecrypt to false. Why? read the docs
sudo nano /etc/gitlab/gitlab.rb
letsencrypt['enable'] = false # set the variable inside gitlab.rb to this

sudo nano /etc/gitlab/ssl/gitlab.gungindikusuma.xyz.crt # pem file
sudo nano /etc/gitlab/ssl/gitlab.gungindikusuma.xyz.key # priv key file

# Reconfigure gitlab
sudo gitlab-ctl reconfigure
```

## Run Self-Hosted Gitlab on Docker

Complete Documentation on [self-hosted gitlab docker](https://docs.gitlab.com/install/docker/). Below is how to do it in a nutshell

1. Install Docker (of course)

2. Create Docker Compose file
```yaml
# docker-compose.yaml
services:
  gitlab:
    image: 'gitlab/gitlab-ce:16.11.2-ce.0'
    restart: always
    hostname: '<Your DNS>'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://<Your DNS>'
        nginx['ssl_certificate'] = "/etc/ssl/<Your DNS>/fullchain.pem"
        nginx['ssl_certificate_key'] = "/etc/ssl/<Your DNS>/privkey.key"
        gitlab_rails['store_initial_root_password'] = true
        gitlab_rails['initial_root_password'] = '<Root Password>'
        gitlab_rails['gitlab_root_email'] = '<Root Email>'
    ports:
      - '443:443'
      - '80:80'
    volumes:
      - '/srv/gitlab/config:/etc/gitlab'
      - '/srv/gitlab/logs:/var/log/gitlab'
      - '/srv/gitlab/data:/var/opt/gitlab'
      - '/etc/ssl/<Your DNS>:/etc/ssl/<Your DNS>'
```

3. Run Docker Compose
```bash
# Run Docker Compose
docker compose up -d

# Stop Docker Compose
docker compose stop

# Delete Container, networks, and volumes
docker compose down -v

# access gitlab root password
docker exec <your container name> cat /etc/gitlab/initial_root_password 
```


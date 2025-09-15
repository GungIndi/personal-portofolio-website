---
sidebar_position: 1
description: Self-Hosted Gitlab Runner.
---

# Gitlab Self-Hosted Runner

## Run Self-Hosted Gitlab Runner on Docker

Gitlab Self-Hosted Runner can be run on various environment such as Linux, Windows, and even in Docker environment. Here's how u can set up your own runner in docker.

### Run the Container
Personally i prefer to use bind volume from local system, just make it easier to change and maintain the config file. Run the following command to start the gitlab-runner container
```sh
docker run -d --name gitlab-runner --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \    # Bind the volume from `/srv/gitlab-runner/config` at local system
  -v /var/run/docker.sock:/var/run/docker.sock \       # Bind the volume from `/var/run/docker.sock` at local system
  gitlab/gitlab-runner:latest
```
make sure to pay attention to the file permission and changes that happen. Try to see the runner status by running:

```sh
docker ps
docker logs gitlab-runner
```

### Register Runner to Project
1. Navigate to your `Project` > `CI/CD Settings` > `Runner` > `New project runner`.
2. Fill the all form in the way u like ur runner to behave, then click `Create runner`.
3. At register runner page, navigate into `Step 1` section and copy the register command.
4. Run command below to register the runner inside your runner container
```sh
docker exec -it gitlab-runner [REGISTER_COMMAND_THAT_YOU_COPIED]
``` 

Then just input some parameters like below
- `Gitlab Url` : usually https://gitlab.com
- `Runner Name` : Anything you like
- `Executor` : docker
- `Default docker image` : you can find your docker base image by running command below
```sh
docker exec -it gitlab-runner cat /etc/os-release
```
5. Check your runner status by running command below
```sh
docker logs gitlab-runner
```
It should have output like below

```sh
Runtime platform arch=amd64 os=linux pid=7 revision=67b2b2db version=17.10.0
Starting multi-runner from /etc/gitlab-runner/config.toml...  builds=0 max_builds=0
Running in system-mode.
```
:::tip pros
Enjoy ur unlimited pipeline time with ur self-hosted Runner
:::
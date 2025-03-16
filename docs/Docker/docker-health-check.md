---
sidebar_position: 4
---

# Docker Health Check

Did you know Docker has a health check feature? So, what's a health check? It's basically a way to monitor the status of a container to see if it's healthy or not. Usually, you set up a command that runs at certain intervals to check on it.


### Dockerfile

So you can just define healthcheck directly in the `Dockerfile`, like below

```docker title='Dockerfile'
FROM nginx:latest
COPY server.js /
EXPOSE 8080
// highlight-next-line
HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl -sS 127.0.0.1:8080 || exit 1
CMD ["node","server.js"]
```

### Docker Compose

You also can define it on the `docker-compose.yaml` file instead of Dockerfile, like below

```yaml title='docker-compose.yaml'
services:
  my-web:
    build:
      context: .
      dockerfile: Dockerfile
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    ports:
      - "80:80
```

### Docker Run

But if you want to try the deadline-friendly method, use this one

```sh
docker run --rm \
--health-cmd=["curl -f http://localhost || exit 1"] \
--health-interval=[DURATION] \(default: 30s)
--health-timeout=[DURATION] \(default: 30s)
--health-retries=[N] \(default: 3)
-p 80:80 \
nginx:latest
```
### Check Container Status

```bash
docker ps 
docker inspect --format "{{ json .State.Health }}" [CONTAINER_NAME] | jq .
```

### Handling Unhealthy Containers

Well if u find ur container is marked unhealthy, You have 2 option, Login to ur favorite game and forget everything, or you can restart it with options like below.

```bash
docker restart [CONTAINER_ID]
```

Or, modify your `docker-compose.yaml` with `restart: always` to make sure the container automatically restart when unhealthy. View the highlighted line

```yaml title='docker-compose.yaml'
services:
  my-web:
    build:
      context: .
      dockerfile: Dockerfile
    // highlight-next-line
    restart: always
    ports:
      - "80:80"
---
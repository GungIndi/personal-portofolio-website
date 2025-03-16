---
sidebar_position: 1
---

# Docker Compose

Docker Compose simply just a tool that helps us to define and manage multi-container Docker applications using a simple YAML file in a single Node.

## Structure

```yaml title='docker-compose.yml'
services:
  service_name:
    image: [IMAGE_NAME]
    build: [BUILD_CONTEXT]
    container_name: [CONTAINER_NAME]
    working_dir: [WORKDIR]
    environment:
      - VAR_NAME=[VALUE]
    volumes:
      - [HOST_PATH]:[CONTAINER_PATH]
    ports:
      - "[HOST_PORT]:[CONTAINER_PORT]"
    networks:
      - [NETWORK_NAME]
    restart: [POLICY]
    depends_on:
      service_dependency:
        condition: [CONDITION]
    healthcheck:
      test: ["CMD", "command"]
      interval: 30s
      retries: 3

networks:
  network_name:
    driver: [DRIVER_NAME]
# if use docker volume
volumes:
  volume_name:
    driver: [DRIVER_NAME]
```

## Common Troubleshooting
### File Permissions
- Check volume type (if bind mount, check the host file permissions)
- Exec to the docker container
```sh
docker compose exec [SERVICE_NAME] ls -lah
docker compose exec -it [SERVICE_NAME] bash # exec as shell into container
```

### Port Binding Issue
Usually occur with this err : `bind() to 0.0.0.0:80 failed (98: Address already in use)`
- Freeing the port
```sh
sudo netstat -tulnp | grep :80  # check if port is being used
sudo lsof -i :80                # check if another process using the port
sudo KILL -9 [PID]             # kill other process
```
- Change the port in docker compose

### Database connection
- Ensure database container is running
```sh
docker compose ps
```
- Ensure correct hostnames (`DB` INSTEAD OF `LOCALHOST`)
- Use `depends_on` to make sure app is start after db is running

### File changes not reflecting
- If using bind mounts, restart the container
```sh
docker compose restart [SERVICE_NAME]
```
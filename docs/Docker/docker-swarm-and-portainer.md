---
sidebar_position: 4
---

# Docker Swarm & Portainer

### Create Docker Swarm
```sh
# Create swarm
docker swarm init --advertise-addr [HOST_IP]
docker node ls

# Join the swarm (other docker nodes)
docker swarm join --token [TOKEN] [HOST_IP]:2377
docker node ls

# Create Service
docker service create --name [SERVICE_NAME] \
--replicas 2 \
--reserve-cpu 1 \
--limit-cpu 1 \
--reserve-memory 256mb \
--limit-memory 128mb \
-p 80:80 \
[APPLICATION_IMAGE]

# Check Service
docker service ls
docker service inspect --pretty [SERVICE_NAME]
docker service ps [SERVICE_NAME]

# Change replica
docker service scale web2=1
```

### Install Portainer
```bash
# Create volume and run Portainer
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name portainer --restart=always \
-v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest

# Access browser
open [IP]:9000
```
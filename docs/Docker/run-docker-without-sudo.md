---
sidebar_position: 10
---

# Run Docker without Sudo

``` bash
# Check if the docker Group Exists
getent group docker

# If it returns nothing, create the group:
sudo groupadd docker

# Add your user to Docker group
sudo usermod -aG docker [USERNAME]

# Apply without restart
newgrp docker
```
---
sidebar_position: 1
---

# Docker Volume

### Create volume using volume Driver

```bash
### **Initial set-up**
docker plugin install --grant-all-permission vieux/sshfs
docker plugin disable [PLUGIN_ID]
docker plugin set vieux/sshfs sshkey.source=/home/student/.ssh/
docker plugin enable [PLUGIN_ID]

### **Create a volume with volume driver**
docker volume create \
  --driver vieux/sshfs \
  -o sshcmd=student@10.7.7.20:/share  \
  -o allow_other sshvolume

### **Start a container which creates a volume using a volume driver**
docker run -d --name sshfs-container \
--mount type=volume,src=sshvolume,target=/app,
volume-driver=rexray,volume-opt=sshcmd=test@node2:/home/test,volume-opt=password=testpassword \
nginx:latest
```


### Backup, restore, or migrate data volumes
```bash
### **Backup a container**
docker run --rm \
  --volumes-from dbstore \
  -v $(pwd):/backup \
  ubuntu \
  tar cvf /backup/backup.tar /dbdata

### **Restore container from backup**
docker run --rm \
  --volumes-from dbstore2 \
  -v $(pwd):/backup \
  ubuntu \
  bash -c "cd /dbdata && tar xvf /backup/backup.tar --strip 1"

## **Remove all unused volumes**
docker volume prune
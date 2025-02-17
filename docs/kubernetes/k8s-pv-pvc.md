---
sidebar_position: 9
---

# Volume and Persistent Volume

## Volume
- A Volume in Kubernetes is a temporary storage resource that exists as long as the Pod is running. Once the Pod is deleted, the data stored in the Volume is also lost.
- Volumes are primarily used for data that does not need to persist beyond the lifecycle of a Pod.

## Persistent Volume
- A Persistent Volume (PV) is a piece of storage that exists independently of Pods and is used for long-term data storage. The data remains intact even if the Pod is deleted or recreated.
- PVs are provisioned by the cluster administrator and can be bound to Persistent Volume Claims (PVCs) made by Pods to request storage resources.

### Persistent Volume Manifest File

```yaml title='pv.yaml'
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mysql-pv
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data/mysql"
```

## Persistent Volume Claim
A Persistent Volume Claim (PVC) allows Pods to claim storage resources from available Persistent Volumes (PVs) without needing to know the underlying storage details.

Types of PVC access:

1. `ReadWriteOnce` (RWO) – The volume can be mounted as read-write by a single node at a time.
2. `ReadOnlyMany` (ROX) – The volume can be mounted as read-only by multiple nodes simultaneously.
3. `ReadWriteMany` (RWX) – The volume can be mounted as read-write by multiple nodes at the same time.
4. `ReadWriteOncePod` (RWOP) (K8s 1.22+) – The volume can be mounted as read-write by only one Pod on a node.

### Persistent Volume Claim Manifest File

```yaml title='pvc.yaml'
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pvc
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

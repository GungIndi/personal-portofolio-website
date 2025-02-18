---
sidebar_position: 17
---

# DaemonSet

- Runs a copy of the pod specified in the yaml file on **all or specified numbers of worker nodes** in the cluster
- Useful for applications such as:
  1. Cluster Storage Daemon
  2. Log Aggregation
  3. Node Monitoring

## DaemonSet Manifest File

```yaml title='daemonset.yaml'
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-minimal
spec:
  selector:
    matchLabels:
      app: fluentd
  template:
    metadata:
      labels:
        app: fluentd
    spec:
      containers:
        - name: fluentd
          image: fluentd:v1.16-1
```

After make the manifest file, we apply the manifest to create the DaemonSet

```bash
kubectl apply -f daemonset.yaml
```

Then check the daemonset that have been created

```bash
# Get cronjobs
kubectl get ds

# Get daemonset pods that spread accross worker node
kubectl get pods -o wide
```
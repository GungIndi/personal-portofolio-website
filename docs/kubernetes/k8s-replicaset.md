---
sidebar_position: 7
---

# ReplicaSet

A ReplicaSet guarantees that a certain number of pod replicas are running at all times. However, a Deployment is a more advanced concept that oversees ReplicaSets and offers declarative updates to Pods, along with many other valuable features. As a result, **it's generally recommended to use Deployments rather than directly working with ReplicaSets**, unless you need specific update control or don't need updates at all.

## ReplicaSet Manifest File

```yaml title='replicaset.yaml'
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
  labels:
    app: guestbook
    tier: frontend
spec:
  # modify replicas according to your case
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: us-docker.pkg.dev/google-samples/containers/gke/gb-frontend:v5

        
```

After make the manifest file, we apply the manifest to create deployment

```bash
kubectl apply -f deployment.yaml
```

Then check the deployment

```bash
# Get pods
kubectl get pods -n [NAMESPACE]
```
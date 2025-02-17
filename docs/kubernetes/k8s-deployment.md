---
sidebar_position: 6
---

# Deployment

A Deployment in Kubernetes manages the lifecycle of a set of Pods, ensuring that the desired number of replicas are running and updated in a controlled manner. It supports rolling updates, rollbacks, and scaling, providing high availability and easy management of applications.

## Deployments Manifest File

```yaml title='deployment.yaml'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-tier
  labels:
    app: microservices
    tier: app
spec:
  replicas: 5
  selector:
    matchLabels:
      tier: app
  template:
    metadata:
      labels:
        app: microservices
        tier: app
    spec:
      containers:
      - name: server
        image: lrakai/microservices:server-v1
        ports:
         - containerPort: 8080
        resources:
          requests:
            cpu: 20m
        env:
          - name: REDIS_URL
            value: redis://$(DATA_TIER_SERVICE_HOST):$(DATA_TIER_SERVICE_PORT_REDIS)
          - name: PASSWORD
            valueFrom:
              secretKeyRef:
                name: app-tier-secret
                key: password
        
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
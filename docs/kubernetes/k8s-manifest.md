---
sidebar_position: 2
---

# Kubernetes Manifest Breakdown

A Kubernetes manifest file is a configuration file written in YAML or JSON that describes the desired state of objects in a Kubernetes cluster. The file defines a wide variety of attributes for managing different resources, such as Pods, Deployments, Services, and more.

## Explanation
### 1. `apiVersion`
- Specifies the Kubernetes API version used to create the object.
```yaml
  apiVersion: apps/v1
```
### 2. `kind`
- Defines the type of resource being created. It could be a Pod, Deployment, Service, ReplicaSet, etc.
``` yaml
  kind: Deployment
```
### 3. `metadata`
- Provides information about the resource, such as name, namespace, labels, and annotations.
``` yaml
  metadata:
    name: my-deployment
    namespace: default
    labels:
      app: my-app
    annotations:
      description: "A deployment for my application"
```
### 4. `spec`
- Specifies the desired state of the object, including configuration details for the resource.
``` yaml
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: my-app
    template:
      metadata:
        labels:
          app: my-app
      spec:
        containers:
        - name: my-container
          image: my-image:latest
          ports:
          - containerPort: 80
```

### 5. `status`
- Contains the current state of the object, such as whether it has been successfully created, running status, and more. This is automatically updated by the Kubernetes system and not typically defined in the manifest file
``` yaml
  status:
    replicas: 3
    availableReplicas: 3
    conditions:
    - type: Available
      status: "True"
```
### 6. `replicas`
- Specifies the number of identical Pods or replicas desired in the case of a Deployment or ReplicaSet
``` yaml
  replicas: 3
```
### 7. `selector`
- Used to identify the Pods that should be controlled by the Deployment or ReplicaSet. This helps Kubernetes decide which Pods match a certain Deployment or ReplicaSet based on their labels
``` yaml
  selector:
    matchLabels:
      app: my-app
```
### 8. `template`
- A template for the Pods that will be created. It includes the metadata and spec for the Pods, such as the containers to run and environment variables
``` yaml
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image:latest
        ports:
        - containerPort: 80
```
### 9. `containers`
- Defines the containers that should run within a Pod. Each container specification includes properties such as name, image, ports, and more
``` yaml
  containers:
    - name: my-container
      image: my-image:latest
      ports:
        - containerPort: 80
```
### 10. `strategy`
- Defines the strategy for deploying Pods in a Deployment, such as RollingUpdate or Recreate
``` yaml
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
```
### 11. `resources`
- Specifies the resource requirements and limits for a container
``` yaml
  resources:
    requests:
      memory: "64Mi"
      cpu: "250m"
    limits:
      memory: "128Mi"
      cpu: "500m"
```

### 12. `affinity`
- Controls where Pods are placed in a cluster based on rules.
```yaml
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
              - key: app
                operator: In
                values:
                  - my-app
          topologyKey: "kubernetes.io/hostname"
```
### 13. `tolerations`
- Allows Pods to be scheduled onto nodes with specific taints.
````yaml
  tolerations:
    - key: "key"
      operator: "Equal"
      value: "value"
      effect: "NoSchedule"
````

### 14. `livenessProbe`
- Specifies how Kubernetes should check if the container is alive and healthy.
  livenessProbe:
    httpGet:
      path: /healthz
      port: 8080
    initialDelaySeconds: 3
    periodSeconds: 5
```yaml```

### 15. `readinessProbe`
- Specifies how Kubernetes checks if a container is ready to accept traffic.
```yaml
  readinessProbe:
    httpGet:
      path: /readiness
      port: 8080
    initialDelaySeconds: 5
    periodSeconds: 5
```
### 16. `nodeSelector`
- Specifies which nodes the Pod can be scheduled on based on node labels.
```yaml
  nodeSelector:
    disktype: ssd
```
### 17. `resources`
- Sets CPU and memory resource requests and limits for containers to define resource utilization.
```yaml
  resources:
    requests:
      memory: "128Mi"
      cpu: "500m"
    limits:
      memory: "256Mi"
      cpu: "1"
```
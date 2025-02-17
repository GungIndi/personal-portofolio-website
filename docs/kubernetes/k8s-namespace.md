---
sidebar_position: 3
---

# Namespace

Namespace in Kubernetes is basically an abstraction to divide cluster into sub-virtual cluster that isolate from each other. We can group resources based on department on team with namespace by creating namespace and then assign any kubernetes objects to it.

## Namespace Manifest File

```yaml title='namespace.yaml'
apiVersion: v1
kind: Namespace
metadata:
  name: prod
  labels:
    app: prod
```

After make the manifest file, we apply the manifest to create namespace

```bash
kubectl apply -f namespace.yaml
```

Then check the namespace

```bash
# Get Namespace
kubectl get namespace

# Gheck object that saved in namespace
kubectl api-resources --namespaced=true
```

We also can see what resource is in the namespace
```bash
# Get Pod
kubectl get pods -n [NAMESPACE]

# Get Service
kubectl get service -n [SERVICE_NAME]

# Get all Resource
kubectl get all -n [NAMESPACE]
```
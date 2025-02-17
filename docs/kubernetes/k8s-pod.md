---
sidebar_position: 4
---

# Pod

A Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process in the cluster. It typically contains one or more containers, shared storage volumes, a unique IP address, and configurations such as environment variables and resource limits.

## Pod Manifest File

```yaml title='pod.yaml'
apiVersion: v1
kind: Pod
metadata:
  name: mypod
  labels:
    app: webserver
spec:
  containers:
  - name: mycontainer
    image: nginx:latest
    resources:
      requests:
        memory: "128Mi"
        cpu: "500m"
      limits:
        memory: "128Mi"
        cpu: "500m"
    ports:
      - containerPort: 80
```

After make the manifest file, we apply the manifest to create the pod

```bash
kubectl apply -f pod.yaml
```

Then check the pod

```bash
# Get pods
kubectl get pods

# Get know more deep
kubectl describe pod [POD_NAME]

# Exec from inside the pod
kubectl exec [POD_NAME] [COMMAND]
```
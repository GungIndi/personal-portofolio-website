---
sidebar_position: 5
---

# Service

In Kubernetes, a Service is an abstraction that defines a logical set of Pods and provides a stable endpoint (IP and DNS) to access them. It enables reliable communication between different Pods or external systems, regardless of changes in the underlying Pods' IPs.

Kubernetes Services have 4 types:

1. **ClusterIP** (default) : The default service type, exposing the service on an internal IP within the cluster. It is used for communication between Pods in the same cluster.

2. **NodePort** : Exposes the service on a static port on each node’s IP, allowing external access to the service by accessing `<NodeIP>`:`<NodePort>`.

3. **LoadBalancer** : Provisions an external load balancer (usually from a cloud provider) to expose the service to the outside world with a public IP.

4. **ExternalName** : Maps the service to an external DNS name (like example.com) instead of exposing a set of Pods, typically used for services outside the cluster.


## Service Manifest File

```yaml title='service.yaml'
apiVersion: v1
kind: Service
metadata:
  labels:
    app: webserver
  name: webserver
spec: 
  ports:
    - targetPort: 80  # (Optional) Port that the backend expose; default will follow what `port:` specified
      port: 80        # Port that the service expose
      nodePort: 30008 # Port that Node will expose (30000 - 32767); default will assign automatic range that available
  selector:           # (Optional) assign app selector to connect with service
    app: webserver
  type: NodePort      # assign the type
```

After make the manifest file, we apply the manifest to create the service

```bash
kubectl apply -f service.yaml
```

Then check the service

```bash
# Get pods
kubectl get pods

# Get know more detail
kubectl describe service [SERVICE_NAME]

# Get Node IP Address to access service (for nodeport type service)
kubectl describe node | grep -i address -A 1
```
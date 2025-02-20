---
sidebar_position: 1
---

# Kubernetes General Commands

### Cluster Information
- Check cluster info:
  ```sh
  kubectl cluster-info
  ```
- View all nodes in the cluster:
  ```sh
  kubectl get nodes
  ```
- Describe a specific node:
  ```sh
  kubectl describe node <node-name>
  ```
- Get the current context:
  ```sh
  kubectl config current-context
  ```
- List all contexts:
  ```sh
  kubectl config get-contexts
  ```
- Switch to a different context:
  ```sh
  kubectl config use-context <context-name>
  ```

### Pod Management
- List all pods in the default namespace:
  ```sh
  kubectl get pods
  ```
- List pods in a specific namespace:
  ```sh
  kubectl get pods -n <namespace>
  ```
- Get detailed information about a pod:
  ```sh
  kubectl describe pod <pod-name>
  ```
- Get logs from a pod:
  ```sh
  kubectl logs <pod-name>
  ```
- Get logs from a specific container in a pod:
  ```sh
  kubectl logs <pod-name> -c <container-name>
  ```
- Execute a command inside a running pod:
  ```sh
  kubectl exec -it <pod-name> -- /bin/sh
  ```

### Deployment Management
- List all deployments:
  ```sh
  kubectl get deployments
  ```
- Describe a deployment:
  ```sh
  kubectl describe deployment <deployment-name>
  ```
- Scale a deployment:
  ```sh
  kubectl scale deployment <deployment-name> --replicas=<num>
  ```
- Rollout status of a deployment:
  ```sh
  kubectl rollout status deployment <deployment-name>
  ```
- Rollback a deployment to a previous version:
  ```sh
  kubectl rollout undo deployment <deployment-name>
  ```

### Service Management
- List all services:
  ```sh
  kubectl get services
  ```
- Describe a service:
  ```sh
  kubectl describe service <service-name>
  ```
- Expose a deployment as a service:
  ```sh
  kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80
  ```
- Port-forward a service to local machine:
  ```sh
  kubectl port-forward svc/<service-name> <local-port>:<service-port>
  ```

### Namespace Management
- List all namespaces:
  ```sh
  kubectl get namespaces
  ```
- Create a namespace:
  ```sh
  kubectl create namespace <namespace-name>
  ```
- Delete a namespace:
  ```sh
  kubectl delete namespace <namespace-name>
  ```

### ConfigMap & Secret Management
- List all ConfigMaps:
  ```sh
  kubectl get configmaps
  ```
- List all Secrets:
  ```sh
  kubectl get secrets
  ```
- Create a Secret from a file:
  ```sh
  kubectl create secret generic <secret-name> --from-file=<path-to-file>
  ```

### Persistent Volume Management
- List all Persistent Volumes (PV):
  ```sh
  kubectl get pv
  ```
- List all Persistent Volume Claims (PVC):
  ```sh
  kubectl get pvc
  ```

### Resource Cleanup
- Delete a pod:
  ```sh
  kubectl delete pod <pod-name>
  ```
- Delete a deployment:
  ```sh
  kubectl delete deployment <deployment-name>
  ```
- Delete a service:
  ```sh
  kubectl delete service <service-name>
  ```
- Delete all resources in a namespace:
  ```sh
  kubectl delete all --all -n <namespace>
  ```

### Debugging & Troubleshooting
- Get events in a namespace:
  ```sh
  kubectl get events -n <namespace>
  ```
- Debug a failing pod:
  ```sh
  kubectl debug pod/<pod-name> --image=busybox -it
  ```
- Show the live resource changes:
  ```sh
  kubectl get pods --watch
  ```


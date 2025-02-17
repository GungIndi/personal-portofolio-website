---
sidebar_position: 8
---

# Horizontal Pod Autoscaler

Horizontal Pod Autoscaler (HPA) in Kubernetes is an API resource and controller that automatically adjusts the number of replicas in a Deployment based on observed metrics, such as average CPU usage. It scales up or down the replicas depending on whether the actual CPU usage exceeds the target percentage, which is based on the Pod's CPU resource request. If no CPU resource request is set, autoscaling will not occur.

## Horizontal Pod Autoscaler Manifest File

```yaml title='hpa.yaml'
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: app-tier
  labels:
    app: microservices
    tier: app
spec:
  maxReplicas: 5
  minReplicas: 1
  scaleTargetRef:         # References the Deployment resource that the HPA will manage
    apiVersion: apps/v1
    kind: Deployment
    name: app-tier
  targetCPUUtilizationPercentage: 70
```

After make the manifest file, we apply the manifest to create Horizontal Pod Autoscaler

```bash
kubectl apply -f hpa.yaml
```

Then check the deployment that HPA being manage

```bash
# Get pods
kubectl get deployment
```
---
sidebar_position: 17
---

# Ingress

- Enable routing traffic to many services via a single LoadBalancer
- In default support layer 7 routing (http/https), extra config needed for layer 4 implementation (tcp/udp)
- Options for Ingress Controller
  1. `Ingress-nginx`
  2. `HAProxy`
  3. `Istio`
  4. `Kong`
  5. `Traefik`

## Ingress Manifest File

```yaml title='ingress.yaml'
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: fuller
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
    nginx.ingress.kubernetes.io/use-regex: "true"
    nginx.ingress.kubernetes.io/proxy-body-size: "50m"
spec:
  ingressClassName: nginx
  defaultBackend:
    service:
      name: default-backend
      port:
        number: 80
  rules:
    - host: "ingress-example.com"
      http:
        paths:
          - path: /foo
            pathType: Prefix
            backend:
              service:
                name: foo-service
                port:
                  number: 80
          - path: /bar
            pathType: ImplementationSpecific
            backend:
              service:
                name: bar-service
                port:
                  number: 8080
          - path: /static/(.*)
            pathType: ImplementationSpecific
            backend:
              service:
                name: static-service
                port:
                  number: 80

```

After make the manifest file, we apply the manifest to create the Ingress

```bash
kubectl apply -f ingress.yaml
```
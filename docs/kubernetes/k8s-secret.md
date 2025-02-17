---
sidebar_position: 12
---

# Secret

Secret is an object used to store sensitive data, such as passwords, OAuth tokens, SSH keys, or any other type of sensitive information. Secrets allow you to keep this data secure and separate from your application code.

## Secret Manifest File
```yaml title='app-secret.yaml'
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
stringData:
  username: admin
data:
  api-key: MWYyZDFlMmU2N2Rm
  password: bmdhcGFpbiBkZWNvZGUsIGdhYnV0IHlhPwo=
```

## Assign Secret in Deployment
```yaml title='app-deployment.yaml'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
  labels:
    app: my-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app-container
          image: my-app-image
          env:
            //highlight-start
            # Referencing the Secret as environment variables
            - name: API_KEY
              valueFrom:
                secretKeyRef:
                  name: app-secret  # Secret Name
                  key: api-key      # The key within the Secret
            - name: PASSWORD
              valueFrom:
                secretKeyRef:
                  name: app-secret  # Secret Name
                  key: password     # The key within the Secret
            //highlight-end
```
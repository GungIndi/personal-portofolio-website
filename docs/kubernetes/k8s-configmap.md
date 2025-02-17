---
sidebar_position: 11
---

# ConfigMap

A ConfigMap in Kubernetes stores configuration data as key-value pairs, allowing applications to separate configuration from code. It can be used to inject environment variables, command-line arguments, or mount configuration files into Pods. This makes applications more portable and easier to manage across different environments.

## ConfigMap Manifest File
#### 1.
```yaml title='configmap.yaml'
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: "production"
  APP_PORT: "8080"
  DATABASE_URL: "postgres://user:password@db:5432/mydatabase"
```
#### 2.
```yaml title='configmap.yaml'
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongo-config 
data:
  mongo.conf: |
    storage:  
      dbPath: /data/db
```

## Assign ConfigMap in Deployment
#### 1.
```yaml title='deployment.yaml'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app-container
          image: my-app:latest
          // highlight-start
          envFrom:
            - configMapRef:
                name: app-config  # Load config from app-config ConfigMap
          // highlight-end
          ports:
            - containerPort: 8080
```

#### 2.
```yaml title='deployment.yaml'
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongo-service
  labels:
    app: mongodb
spec:
  serviceName: mongo-service
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  minReadySeconds: 10
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      terminationGracePeriodSeconds: 10
      containers:
        - name: mongo
          image: mongo:3
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 27017
          env:
            - name: MONGO_INITDB_ROOT_USERNAME_FILE
              value: /etc/mongo-credentials/MONGO_ROOT_USERNAME
            - name: MONGO_INITDB_ROOT_PASSWORD_FILE
              value: /etc/mongo-credentials/MONGO_ROOT_PASSWORD
          volumeMounts:
            - name: mongo-pv-volume
              mountPath: /data/db
              // highlight-start
            - name: mongo-config    # Mount mongo config
              mountPath: /config    # mongo.conf will be in this directory
              //highlight-end
            - name: mongo-secret
              mountPath: /etc/mongo-credentials
      volumes:
        - name: mongo-pv-volume
          persistentVolumeClaim:
            claimName: mongo-pv-claim
        //highlight-start
        - name: mongo-config        # Define a ConfigMap volume that provides a MongoDB configuration file
          configMap:
            name: mongo-config
            items:
              - key: mongo.conf     # The key in the ConfigMap (mongo.conf) that stores configuration data 
                path: mongo.conf    # Inside the container, this file will be named 'mongo.conf'                 
        //highlight-end
        - name: mongo-secret
          secret:
            secretName: mongo-secret

```
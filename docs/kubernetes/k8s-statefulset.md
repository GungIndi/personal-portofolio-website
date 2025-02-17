---
sidebar_position: 13
---

# StatefulSet

A StatefulSet is a Kubernetes resource used to manage stateful applications that require stable, unique network identifiers, persistent storage, and ordered deployment and scaling. Unlike a regular Deployment, which manages stateless applications, a StatefulSet ensures that each pod in the set has a unique, persistent identity and storage that survives pod rescheduling or scaling.

Important features of StatefulSet:

1. `Stable network identity`: Each pod in a StatefulSet gets a unique, consistent name (e.g., mongo-0, mongo-1) and retains its identity even after being rescheduled.
2. `Persistent storage`: It can provision and mount Persistent Volumes for each pod, ensuring that data is retained across restarts.
3. `Ordered deployment and scaling`: Pods are created and deleted in a defined order, which is crucial for applications like databases that need to be deployed or scaled in a specific sequence.
4. `Pod management policy`: StatefulSets provide better control over the number and lifecycle of pods compared to Deployments, particularly for cases requiring stable storage and network connectivity.

## StatefulSet Manifest File
```yaml title='mysql-statefulset.yaml'
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
  labels:
    app: mysql
spec:
  selector:
    matchLabels:
      app: mysql
      tier: backend
  serviceName: mysql                      # Defines the service name for DNS and networking
  replicas: 2                             # Number of replicas for the StatefulSet
  minReadySeconds: 10
  template:                               # defines the pod specification
    metadata:
      labels:
        app: mysql
        tier: backend
    spec:
      terminationGracePeriodSeconds: 10    # Grace period before pod termination
      containers:
      - image: mysql:5.6
        name: mysql
        env:
        - name: MYSQL_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysql-pass
              key: password
        ports:
        - containerPort: 3306
          name: mysql
        volumeMounts:
        - name: mysql-persistent-storage
          mountPath: /var/lib/mysql         # Mounting persistent volume for data storage
      volumes:
      - name: mysql-persistent-storage
        persistentVolumeClaim:
          claimName: mysql-pv-claim         # Reference to a PersistentVolumeClaim
```

Then Apply the StatefulSet

```bash
kubectl apply -f mysql-statefulset.yaml
```

Check the status of the StatefulSet

```bash
kubectl get statefulset
```
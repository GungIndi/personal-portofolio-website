---
sidebar_position: 10
---

# Assign PV and PVC to Deployment

In this example I will use MySQL deployment as an example

### 1. Create Namespace

```yaml title='namespace.yml'
apiVersion: v1
kind: Namespace
metadata:
  name: pv-pvc-ns
  labels:
    app: mysql
```

### 2. Create Service and Deployment Manifest File

```yaml title='mysql-svc-deployment.yaml'
apiVersion: v1
kind: Service
metadata:
  name: mysql
spec:
  ports:
  - port: 3306
  selector:
    app: mysql
  clusterIP: None
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysql
spec:
  selector:
    matchLabels:
      app: mysql
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - image: mysql:5.6
        name: mysql
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: password
        ports:
        - containerPort: 3306
          name: mysql
        volumeMounts:
        - name: mysql-persistent-storage
          mountPath: /var/lib/mysql
      volumes:
      - name: mysql-persistent-storage
        persistentVolumeClaim:
          claimName: mysql-pv-claim
```
### 3. Create PV and PVC Manifest File

```yaml title='mysql-pv-pvc.yaml'
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mysql-pv-volume
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 20Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

### 4. Apply Manifest File

```bash
# Apply namespace
kubectl apply -f namespace.yaml

# Apply Service and Deployment
kubectl apply -f mysql-svc-deployment.yaml -n pv-pvc-ns

# Apply PV & PVC
kubectl apply -f mysql-pv-pvc.yaml -n pv-pvc-ns
```

### 5. Check Status

```bash
kubectl describe deployment mysql -n pv-pvc-ns
kubectl describe pvc mysql-pv-claim -n pv-pvc-ns
kubectl describe pv mysql-pv-volume -n pv-pvc-ns
```
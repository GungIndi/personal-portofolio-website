---
sidebar_position: 15
---

# Job

A Job in Kubernetes is a controller that creates one or more pods and ensures that they run until completion. The primary use case for a Job is to run a batch or parallelized task that is expected to run to completion, such as data processing or running a one-off script. It is typically used for tasks that are not long-lived or that need to run in the background to completion.

## Job Manifest File

```yaml title='job-echo-date.yaml'
apiVersion: batch/v1
kind: Job
metadata:
  name: echo-date-better
spec:
  parallelism: 2
  completions: 2
  activeDeadlineSeconds: 100
  backoffLimit: 1
  template:
    metadata:
      labels:
        app: echo-date
    spec:
      containers:
        - name: echo
          image: cgr.dev/chainguard/busybox:latest
          command: ["date"]
          resources:
            limits:
              memory: "50Mi"
            requests:
              memory: "50Mi"
              cpu: "250m"
      restartPolicy: Never
```

After make the manifest file, we apply the manifest to create the job

```bash
kubectl apply -f job-echo-date.yaml
```

Then check the pod

```bash
# Get jobs
kubectl get jobs

# Get know more deep
kubectl describe jobs [JOB_NAME]
```
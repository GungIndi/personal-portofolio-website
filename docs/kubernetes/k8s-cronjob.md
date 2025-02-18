---
sidebar_position: 16
---

# CronJob

- A CronJob adds the concept of schedule. Similar like CronJob in Linux 
- Used for periodic execution of workloads that run completion

## CronJob Manifest File

```yaml title='cronjob.yaml'
apiVersion: batch/v1
kind: CronJob
metadata:
  name: echo-date-better
spec:
  schedule: "* * * * *"
  jobTemplate:
    spec:
      parallelism: 1
      completions: 1
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
```

After make the manifest file, we apply the manifest to create the cronjob

```bash
kubectl apply -f cronjob.yaml
```

Then check the job u've been created

```bash
# Get cronjobs
kubectl get cronjob

# Get know more deep
kubectl describe cronjob [JOB_NAME]

# Trigger Job Manually to check
kubectl create job --from=cronjob/[CRONJOB_NAME] manually-triggered

# See the jobs that been completed
kubectl get jobs
```
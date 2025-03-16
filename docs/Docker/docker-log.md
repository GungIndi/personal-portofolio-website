---
sidebar_position: 5
---

# Docker Log

Docker supports multiple log drivers for handling container logs. The log driver determines how and where logs are stored.

## Check container logs in the docker directory
```sh
sudo cat /var/lib/docker/containers/[CONTAINER]/*-json.log
```

## Log Rotation

Configuring log rotation can preven your system from running out of storage, docker logs that are generated in fast period of time often created so much log and if u're not aware, it can be multiple times bigger than the size of your apps

Here's how you can configure log rotation for `json-file` log driver.

### Configuring in docker `daemon.json`

  1. Create or edit daemon.json file
```sh
sudo vi /etc/docker/daemon.json
```
  2. Configure daemon.json file
```json title='/etc/docker/daemon.json'
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "100"
  }
}
```

  3. Restart docker
```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
```
### Configuring with Docker Run
  1. Just docker run
```sh
docker run \
// highlight-start
--log-driver=json-file \
--log-opt max-size=10m \
// highlight-end
[IMAGE]
```

### Configuring in `docker-compose.yaml`
```yaml title='docker-compose.yaml'
services:
  app:
    image: [IMAGE]
    // highlight-start
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    // highlight-end
```

## Log Driver in Docker

|**Driver**|**Description**|
|---|---|
|**none**|No logs are available for the container and `docker logs` does not return any output.|
|**local**|Logs are stored in a custom format designed for minimal overhead.|
|**json-file**|The logs are formatted as JSON. The `default` logging driver for Docker.|
|**syslog**|Writes logging messages to the `syslog` facility. The `syslog` daemon must be running on the host machine.|
|**journald**|Writes log messages to `journald`. The `journald` daemon must be running on the host machine.|
|**gelf**|Writes log messages to a Graylog Extended Log Format (GELF) endpoint such as Graylog or Logstash.|
|**fluentd**|Writes log messages to `fluentd` (forward input). The `fluentd` daemon must be running on the host machine.|
|**awslogs**|Writes log messages to Amazon CloudWatch Logs.|
|**splunk**|Writes log messages to `splunk` using the HTTP Event Collector.|
|**etwlogs**|Writes log messages as Event Tracing for Windows (ETW) events. Only available on Windows platforms.|
|**gcplogs**|Writes log messages to Google Cloud Platform (GCP) Logging.|
|**logentries**|Writes log messages to Rapid7 Logentries.|

### Log driver with Splunk Example

```sh
# Run Docker with Splunk Log Driver
docker run \
--log-driver=splunk \
--log-opt splunk-url=https://[splunk-server:8088] \
--log-opt splunk-token=[YOUR_SPLUNK_HEC_TOKEN] \
--log-opt splunk-index=main \
--log-opt splunk-source=docker \
--log-opt splunk-sourcetype=_json \
[IMAGE]
```


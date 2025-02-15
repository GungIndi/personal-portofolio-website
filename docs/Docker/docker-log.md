---
sidebar_position: 3
---

# Docker Log

### Log Driver in Docker

|**Driver**|**Description**|
|---|---|
|**none**|No logs are available for the container and `docker logs` does not return any output.|
|**local**|Logs are stored in a custom format designed for minimal overhead.|
|**json-file**|The logs are formatted as JSON. The default logging driver for Docker.|
|**syslog**|Writes logging messages to the `syslog` facility. The `syslog` daemon must be running on the host machine.|
|**journald**|Writes log messages to `journald`. The `journald` daemon must be running on the host machine.|
|**gelf**|Writes log messages to a Graylog Extended Log Format (GELF) endpoint such as Graylog or Logstash.|
|**fluentd**|Writes log messages to `fluentd` (forward input). The `fluentd` daemon must be running on the host machine.|
|**awslogs**|Writes log messages to Amazon CloudWatch Logs.|
|**splunk**|Writes log messages to `splunk` using the HTTP Event Collector.|
|**etwlogs**|Writes log messages as Event Tracing for Windows (ETW) events. Only available on Windows platforms.|
|**gcplogs**|Writes log messages to Google Cloud Platform (GCP) Logging.|
|**logentries**|Writes log messages to Rapid7 Logentries.|

```sh
# Create and Use Json-file Log Driver
sudo vim /etc/docker/daemon.json
...
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "100"
  }
}
...
sudo systemctl daemon-reload
sudo systemctl restart docker
docker run \
--log-driver json-file \
--log-opt max-size=10m \
[IMAGE]

# Check logs in the docker directory
sudo cat /var/lib/docker/containers/[CONTAINER]/xxx-json.log

# Run Docker with Splunk Log Driver
docker run \
--log-driver=splunk \
--log-opt splunk-url=https://[splunk-server:8088] \
--log-opt splunk-token=[YOUR_SPLUNK_HEC_TOKEN] \
--log-opt splunk-index=main \
--log-opt splunk-source=docker \
--log-opt splunk-sourcetype=_json \
[IMAGE]

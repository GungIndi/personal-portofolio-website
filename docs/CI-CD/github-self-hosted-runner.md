---
sidebar_position: 1
description: Make github self-hosted runner run on the backround.
---

# GitHub Self-Hosted Runner

:::tip Pros
It's cheapp if u use self-hosted runner, well just if u had unused vm instances and want to do an extra work to config 
:::

## Add Self-hosted runner
You can follow from the [Github Docs](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)

## Running the Runner in the Background

To run the GitHub self-hosted runner in the background, you can use the following script:

```bash
nohup ./run.sh &
```

This script uses `nohup` to run the `run.sh` script in the background, allowing it to continue running even after you log out.

## Stopping the Runner

To stop the GitHub self-hosted runner, you can use the following script:

```bash title='stop_runner.sh'
#!/bin/bash

# Find the PIDs of ./run.sh, run-helper.sh, and Runner.Listener processes
run_sh_pid=$(ps aux | grep "[.]\/run.sh" | grep -v grep | awk '{print $2}')
run_helper_pid=$(ps aux | grep "[/]run-helper.sh" | grep -v grep | awk '{print $2}')
runner_listener_pid=$(ps aux | grep "[/]Runner.Listener" | grep -v grep | awk '{print $2}')

# Display results and kill processes if found
echo "Terminating Processes:"

if [ -n "$run_sh_pid" ]; then
  kill -9 "$run_sh_pid"
  echo "  ./run.sh terminated (PID: $run_sh_pid)"
else
  echo "  ./run.sh not running."
fi

if [ -n "$run_helper_pid" ]; then
  kill -9 "$run_helper_pid"
  echo "  run-helper.sh terminated (PID: $run_helper_pid)"
else
  echo "  run-helper.sh not running."
fi

if [ -n "$runner_listener_pid" ]; then
  kill -9 "$runner_listener_pid"
  echo "  Runner.Listener terminated (PID: $runner_listener_pid)"
else
  echo "  Runner.Listener not running."
fi
```

then execute the script 
```bash 
chmod +x stop_runner.sh
./stop_runner.sh
```


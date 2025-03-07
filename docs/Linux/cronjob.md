---
sidebar_position: 3
---

# Linux Cron Jobs and Job Scheduling

## Cron Jobs
Cron is a time-based job scheduler in Unix-like operating systems. It allows users to schedule scripts or commands to run automatically at specified times or intervals.

### How Cron Works:
- The `cron` daemon runs in the background and checks for scheduled jobs.
- Users define their jobs in a `crontab` (cron table) file.
- Cron executes jobs based on the schedule defined in `crontab`.

## Understanding Crontab Syntax
Each cron job follows this syntax:

```bash
* * * * * command-to-execute
| | | | |
| | | | +---- Day of the week (0 - 7, Sunday = 0 or 7)
| | | +------ Month (1 - 12)
| | +-------- Day of the month (1 - 31)
| +---------- Hour (0 - 23)
+------------ Minute (0 - 59)
```
**Examples:**
- Run a script every day at midnight:
  ```bash
  0 0 * * * /path/to/script.sh
  ```
- Run a command every Monday at 9 AM:
  ```bash
  0 9 * * 1 /usr/bin/python3 /path/to/script.py
  ```
- Run a backup script every 6 hours:
  ```bash
  0 */6 * * * /usr/local/bin/backup.sh
  ```

## Managing Cron Jobs
### View Current Cron Jobs:
```bash
crontab -l
```

### Edit Cron Jobs:
```bash
crontab -e
```

### Remove All Cron Jobs:
```bash
crontab -r
```

## Using `at` for One-Time Jobs
The `at` command schedules a task to run once at a specific time.

Example:
```bash
echo "/path/to/script.sh" | at 14:30
```
This runs the script at 2:30 PM today.

## Running Jobs in the Background
Use `&` to run a job in the background:
```bash
/path/to/script.sh &
```

Use `nohup` to keep the process running even after logging out:
```bash
nohup /path/to/script.sh &
```

## Systemd Timers (Alternative to Cron)
Systemd timers offer better logging and reliability compared to cron. Here's how you can set `systemd timers`

1. **Define the service**

```ini title='/etc/systemd/system/backup.service'
[Unit]
Description=Run backup script

[Service]
ExecStart=/path/to/backup.sh
```
2. **Define the timer**
```ini title='/etc/systemd/system/backup.timer'
[Unit]
Description=Run backup script every day

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```
3. **Enable and start the timer**
```bash
sudo systemctl enable --now backup.timer
```


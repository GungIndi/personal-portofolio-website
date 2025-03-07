---
sidebar_position: 2
---

# Process Management

Processes are the fundamental units of execution. A process is an instance of a running program, and it represents the execution of a set of instructions by the computer's CPU. 

A Linux process has a unique process ID (PID), which is used to identify and manage the process. Each process also has a parent process, which is the process that created it. The hierarchy of processes forms a process tree, with the initial process (often called the "init" process) as the root.

## Types of Processes

- `Foreground Processes` – Run interactively in the terminal (e.g., `vim`, `nano`).
- `Background Processes` – Run independently in the background (e.g., `cron` `jobs`).
- `Daemon Processes` – System processes that run in the background, usually started at boot (e.g., `sshd`).
- `Zombie Processes` – Completed processes that still have an entry in the process table.

## Process Management Commands

Linux provides several command-line tools for managing processes, including:

- `ps`: Displays information about running processes
- `top`: Provides a real-time view of the running processes
- `kill`: Sends signals to processes
- `pgrep`: Finds or signals processes based on their name or other attributes



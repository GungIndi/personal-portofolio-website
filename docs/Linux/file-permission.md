---
sidebar_position: 4
---

# File Permissions

In Linux, file permissions are like security guards deciding who gets access to what. You wouldn’t want your house to be public, just like you wouldn’t want your system files to be accessed by anyone.

## Permission Levels & Best Practices

```bash
rw-------	600	Only the owner can read and write (private files).
rw-r--r--	644	Owner can read/write, others can only read.
rwxr-xr-x	755	Owner can read/write/execute, others can read/execute.
rwx------	700	Owner can read/write/execute (private script).
rw-rw-r--	664	Owner and group can read/write, others can read.
```

## How to Set File Permissions

```bash
chmod 600 file.txt   # Only owner can read/write  
chmod 644 file.txt   # Owner can read/write, others can only read  
chmod 755 script.sh  # Owner can read/write/execute, others can read/execute  
chmod 700 secret.sh  # Owner can read/write/execute, no access for others  
chmod 664 shared.txt # Owner and group can read/write, others can read  
```
## Change Ownership
```bash
sudo chown [USER] [FILE] # Change ownership of a file to a specific user
sudo chown :[GROUP] [FILE] # Change group ownership of a file
sudo chown [USER]:[GROUP] [FILE] # Change user and group ownership of a file
```
---
sidebar_position: 4
---

# Permission Management

In Linux, file permissions are like security guards deciding who gets access to what. You wouldn’t want your house to be public, just like you wouldn’t want your system files to be accessed by anyone.

## Permission Levels & Best Practices

```bash
rw-------	600	Only the owner can read and write (private files).
rw-r--r--	644	Owner can read/write, others can only read.
rwxr-xr-x	755	Owner can read/write/execute, others can read/execute.
rwx------	700	Owner can read/write/execute (private script).
rw-rw-r--	664	Owner and group can read/write, others can read.
```

## Set File Permissions

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

## Access Control Lists (ACL)
ACLs provide more **granular** control over file permissions beyond the standard user/group/others model.

### Set ACL Permissions
Use `setfacl` to grant additional user/group permissions:
```bash
setfacl -m u:[USERNAME]:rw [FILENAME]  # Give user read/write access
setfacl -m g:[GROUPNAME]:r [FILENAME]  # Give group read-only access
setfacl -m o::--- [FILENAME]           # Remove all access for others
```

### View ACL Permissions
```bash
getfacl [FILENAME]
```

### Remove ACL Permissions
```bash
setfacl -x u:[USERNAME] [FILENAME]  # Remove a user’s ACL entry
setfacl -b [FILENAME]             # Remove all ACL entries
```

## Sticky Bit (`t` Permission)
The **sticky bit** prevents users from deleting others’ files in a shared directory.

```bash
chmod +t [FILENAME]  # Enable sticky bit  
chmod -t [FILENAME]  # Remove sticky bit  

ls -ld [FILENAME]    # Check sticky bit

# it will output like this (if enabled)
drwxrwxrwt  2 root root 4096 Mar 2 10:30 [FILEPATH or DIR]
```

### Use Cases
- `/tmp` (default Linux temp directory)
- Shared directories to prevent accidental/malicious deletions
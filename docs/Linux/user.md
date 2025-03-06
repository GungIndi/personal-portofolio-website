---
sidebar_position: 2
---

# User Management

In Linux, `users` are like different characters in a multiplayer game, each with their own roles, permissions, and access levels. Some are administrators (`root`), while others are regular `users`, who looks like they can do everything in their own `/home`, but when administrators says u can't, u can't. like many of us in this world. 

regular `users` have limitations imposed by the administrators. Administrators can perform any action on the system, including installing software, changing system settings, and managing other users. Regular `users`, on the other hand, can only perform actions within their own permissions, such as creating files in their home directory and running applications. Even tho the administrators can delete and limit your "life" if they want. Just like many of us in this world.

Here is how administrators (`root`) can manipulate `users` in Linux. 

## Check User
1. List all user in the system
```sh
cat /etc/passwd
```
2. List curently logged-in user
```sh
who # show simple output
w   # include uptime, load, and what users are doing
```
3. Check user group
```sh
groups [USERNAME]
```
4. Show group membership of current user
```sh
id
```
5. Find Logged-In Users History
```sh
last [USERNAME]
```
6. Check if user exist
```sh
genent passwd [USERNAME]
```


## Manipulating User
### Add User

```bash
sudo useradd [USER]
sudo useradd -g [GROUP] [USER] # Add User and Assign Primary Ggoup
sudo useradd -G [GROUP,GROUP] [USER] # Add User and Assign Secondary groups
```

### Modify User
```bash
sudo usermod -g [GROUP] [USER] # Change primary group 
sudo usermod -aG [GROUP,GROUP] [USER] # Append secondary groups 
sudo usermod -d [NEW_HOME] [USER] # Change home directory 
sudo usermod -l [NEW_NAME] [USER] # Change login name 
sudo usermod -L [USER] # Lock the user account 
sudo usermod -U [USER] # Unlock the user account
```

### Delete User
```bash
sudo userdel [USER] # Delete user account
sudo userdel -r [USER] # Delete user and their home directory
```

## Sudoers Management

The `sudoers` file controls which users have permission to run commands as **root** or other privileged users. The file is located at `/etc/sudoers`. To **edit** the sudoers file safely, use:

```bash
sudo visudo
```

### Configuring Passwordless Sudo
Add this line to the sudoers file to make user run commands with sudo without password
```bash
# Allow a specific user to run sudo commands without entering a password
[USER] ALL=(ALL) NOPASSWD: ALL
# Allow a specific user to run specific commands with sudo commands without entering a password
[USER] ALL=(ALL) NOPASSWD: /usr/bin/dnf # example command
# Allow a specific group to run specific commands with sudo without a password:
%devs ALL=(ALL) NOPASSWD: /usr/bin/dnf  # example comand
```

### Checking Sudo Privileges
To check if a user has sudo privileges:
```bash
sudo -l -U [USER]
```


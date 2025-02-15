---
sidebar_position: 2
---

# User Management

In Linux, `users` are like different characters in a multiplayer game, each with their own roles, permissions, and access levels. Some are administrators (`root`), while others are regular `users`, who looks like they can do everything in their own `/home`, but when administrators says u can't, u can't. like many of us in this world. 

regular `users` have limitations imposed by the administrators. Administrators can perform any action on the system, including installing software, changing system settings, and managing other users. Regular `users`, on the other hand, can only perform actions within their own permissions, such as creating files in their home directory and running applications. Even tho the administrators can delete and limit your "life" if they want. Just like many of us in this world.

Here is how administrators (`root`) can manipulate `users` in Linux. 

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

### Change Ownership
```bash
sudo chown [USER] [FILE] # Change ownership of a file to a specific user
sudo chown :[GROUP] [FILE] # Change group ownership of a file
sudo chown [USER]:[GROUP] [FILE] # Change user and group ownership of a file
```
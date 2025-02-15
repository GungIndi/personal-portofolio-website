---
sidebar_position: 2
---

# Git

### Add Local Repo to Remote Repo Gittt
```bash
# Initialize git
git init

# Add remote repo and check
git remote add origin [REMOTE_URL]
git remote -v

# Renames if needed
git branch -M main

# Pull and Rebase (if there's README file)
git pull origin main --rebase

# Set url if want to use SSH (OPTIONAL)
git remote set-url origin [REMOTE_SSH_URL]

# Usual command when wanna push
git add .
git commit -m [comment]
git push origin main
```
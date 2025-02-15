---
sidebar_position: 5
---

# Backup MySQL in Docker

Here's how you can backup mysql data from a running container, without the need to stop your beloved application from serving your beloved user

### Backup

```bash
docker exec CONTAINER /usr/bin/mysqldump --verbose -u root --password=root DATABASE > backup.sql 

```

Now you can do anything u want with that `mysqldump` file. In this case, let's don't make any trouble and just restore it into new container

# Restore 

```bash
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql --verbose -u root --password=root DATABASE
```

Remember, always back up your data. Because losing data is like losing your keys, you won't realize how important it is until it's gone
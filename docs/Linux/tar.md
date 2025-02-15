---
sidebar_position: 3
---
# Tar

Tar in this context is not that sticky nasty residue left in your lungs after you smokes ciggarete, it's a command-line utility used to compress and extract files. It doesn’t damage your lungs, but it can definitely mess up your system if you extract the wrong thing in the wrong place. Unlike cigarette tar, this one actually helps with organization instead of causing long-term problems.

here's how you can use it

```sh
# Compress file into .tar.gz
tar -czvf [ARCHIVE_NAME].tar.gz [DIR_OR_FILENAME]

# Extract file .tar.gz
tar -xzvf [ARCHIVE_NAME].tar.gz
```
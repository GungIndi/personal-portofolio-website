---
sidebar_position: 3
---
# Compress and Extract

Compressing is the process of reducing the size of files or folders to save space, often did to make transfer file/folders easier. Extracting is the opposite of compressing, It's the process of decompressing or unpacking compressed files back to their original form, so you can access and use the data inside.

## Zip

Zip in this context isn’t referring to your pants zipper, but a command used to compress and archive files. Just like how a zipper helps you neatly pack your "stuff" into your pants, the zip command helps you bundle up files and folders into a single compressed file for easy transport. Unlike a zipper, though, it won't get stuck if you try to close it, but keep pay attention, like overstuffing your pants, trying to pack too many files into one zip can make it unwieldy.


```sh
# Compress 
zip [ZIP_NAME] [FILE_NAME]    # Compress file
zip -r [ZIP_NAME] [DIR_NAME]  # Compress directory

# Extract
unzip [ZIP_NAME]
```

## Tar

Tar in this context is not that sticky nasty residue left in your lungs after you smokes ciggarete, it's a command-line utility used to compress and extract files. It doesn’t damage your lungs, but it can definitely mess up your system if you extract the wrong thing in the wrong place. Unlike cigarette tar, this one actually helps with organization instead of causing long-term problems.

here's how you can use it

```sh
# Compress file into .tar.gz
tar -czvf [ARCHIVE_NAME].tar.gz [DIR_OR_FILENAME]

# Extract file .tar.gz
tar -xzvf [ARCHIVE_NAME].tar.gz
```
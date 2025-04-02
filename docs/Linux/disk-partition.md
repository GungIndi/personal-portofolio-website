# Disk Partition Management

In Linux, disk partitioning is the process of dividing a physical disk into separate sections, as you hear it, called partitions, to organize and manage data efficiently (Just like when you use C drive to boot windows and use D drive to store ur pic). Each partition can have its own file system and purpose.

## Types of Partition Tables

A partition table is a structure that contains information about the partitions on a disk. Below are the most common types:

| **Partition Table Type** | **MBR (Master Boot Record)**               | **GPT (GUID Partition Table)**          |
|--------------------------|--------------------------------------------|-----------------------------------------|
| Maximum Disk Size     | 2TB                                        | Practically unlimited (up to 9.4ZB)     |
| Maximum Partitions    | 4 primary partitions (or 3 primary + 1 extended, which can contain multiple logical partitions) | 128 primary partitions (no extended partitions) |
| Boot Mode             | BIOS                                       | UEFI                                    |
| Usage                 | Used in older systems, compatible with most operating systems. | Recommended for modern systems, supports larger disks. |
| Limitation            | Does not support disks larger than 2TB.   | Not supported by older BIOS-based systems. |


## Managing Partitions

### Viewing Disk and Partition Information
```bash
lsblk      # Display all block devices
fdisk -l   # List partitions on all disks
parted -l  # Show partition details with parted
```

### Creating a New Partition Table
1. **fdisk**
```bash
sudo fdisk /dev/sdX                 # Create MBR partition table
sudo gdisk /dev/sdX                 # Create GPT Partition table
```

2. **parted**
```bash
sudo parted /dev/sdX mklabel gpt    # Create a GPT partition table
sudo parted /dev/sdX mklabel msdos  # Create an MBR partition table
```

### Creating and Managing Partitions

1. **fdisk**
```bash
sudo fdisk /dev/sdX   # Launch fdisk
-> p                  # Display the current partition details
-> n                  # Create new partition
-> d                  # Delete partition
-> w                  # Write change to disk and exit
```

2. **parted**
```bash
sudo parted /dev/sdX               # Launch parted
-> mkpart primary ext4 1MiB 10GB   # Create a primary partition (GPT or MBR)
-> print                           # View partition details
-> resizepart 1 15GB               # Resize partition 1 to 15GB

sudo parted /dev/sdX rm 1          # Remove partition 1
```

### Formatting a Partition
```bash
sudo mkfs.ext4 /dev/sdX1  # Format partition as ext4
sudo mkfs.xfs /dev/sdX1   # Format partition as XFS
sudo mkfs.ntfs /dev/sdX1  # Format partition as NTFS
```

### Mounting and Unmounting Partitions
```bash
sudo mkdir /mnt/mydisk               # Create mount point
sudo mount /dev/sdX1 /mnt/mydisk     # Mount partition
sudo umount /mnt/mydisk              # Unmount partition
```

### Checking and Repairing Filesystem
```bash
sudo fsck /dev/sdX1  # Check filesystem integrity
```

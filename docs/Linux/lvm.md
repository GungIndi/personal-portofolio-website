---
sidebar_position: 4
---

# Logical Volume Manager

LVM (Logical Volume Manager) is a storage management solution in Linux that provides a flexible and advanced way to manage disk storage. Instead of using Windows, partitioning disk is a lot easier with linux especially with LVM. Instead partitioning disks into fixed sizes, LVM allows dynamic resizing, snapshot creation, and volume grouping. 

## Physical Volume (PV)
A Physical Volume (PV) is a raw storage device (disk or partition) initialized for LVM use.

- Example: `/dev/sdb`, `/dev/sdc`
- Create a PV:
  ```sh
  sudo pvcreate /dev/sdb
  ```
- View existing PVs:
  ```sh
  sudo pvdisplay
  ```

## Volume Group (VG)
A Volume Group (VG) is a pool of storage combining multiple PVs.

- Create a VG named `my_vg`:
  ```sh
  sudo vgcreate my_vg /dev/sdb
  ```
- View existing VGs:
  ```sh
  sudo vgdisplay
  ```

## Logical Volume (LV)
A Logical Volume (LV) is a resizable virtual partition created from a VG.

- Create an LV named `my_lv` with 5GB size:
  ```sh
  sudo lvcreate -L 5G -n my_lv my_vg
  ```
- View existing LVs:
  ```sh
  sudo lvdisplay
  ```

### Formatting and Mounting an LV
#### 1. Format the LV
- Format with XFS:
  ```sh
  sudo mkfs.xfs /dev/my_vg/my_lv
  ```
- Format with ext4:
  ```sh
  sudo mkfs.ext4 /dev/my_vg/my_lv
  ```

#### 2. Mount the LV
- Create a mount point:
  ```sh
  sudo mkdir /mnt/my_storage
  ```
- Mount the LV:
  ```sh
  sudo mount /dev/my_vg/my_lv /mnt/my_storage
  ```
- Verify:
  ```sh
  df -h
  ```

### Making the Mount Persistent Across Reboots
- Edit `/etc/fstab`:
  ```sh
  sudo nano /etc/fstab
  ```
- Add this line:
  ```sh
  /dev/mapper/my_vg-my_lv /mnt/my_storage xfs defaults 0 0
  ```
- Save and apply changes:
  ```sh
  sudo mount -a
  ```

### Managing Logical Volumes
#### 1. Extend an LV
- Increase LV size by 2GB:
  ```sh
  sudo lvextend -L +2G /dev/my_vg/my_lv
  ```
- Resize filesystem:
  ```sh
  sudo xfs_growfs /mnt/my_storage  # For XFS
  sudo resize2fs /dev/my_vg/my_lv  # For ext4
  ```

#### 2. Remove an LVM Setup (Optional)
- Unmount the LV:
  ```sh
  sudo umount /mnt/my_storage
  ```
- Remove the LV:
  ```sh
  sudo lvremove /dev/my_vg/my_lv
  ```
- Remove the VG:
  ```sh
  sudo vgremove my_vg
  ```
- Remove the PV:
  ```sh
  sudo pvremove /dev/sdb
  ```

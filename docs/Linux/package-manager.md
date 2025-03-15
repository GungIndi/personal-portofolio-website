---
sidebar_position: 2
---

# Package

On Linux, software is typically built as a package, distributed via repositories, and managed by package managers on the user's system. A typical Linux system includes thousands of packages, many of which serve as dependencies for other software. 

**1. Package**
- Software in linux usually distributed as packages, which are archives containing pre-compiled binaries, installation scripts, configuration files, and dependency information.
-  Typically packaged into `.deb` (Debian/Ubuntu), `.rpm` (CentOS/RHEL), or other formats, depending on the Linux distribution.

**2. Repositories**
- Repositories are simply the location where the packages are stored, commonly accessible via the internet. A repository can contain a single package or thousands of packages. 

**3. Dependencies**
-  In Linux, each package contains metadata detailing the additional packages that are required. These additional packages are called dependencies.
- installing, upgrading, or removing packages, these dependencies may also need to installed, upgraded, and optionally removed.

## Package Managers
1. `APT (Advanced Package Tool)` → Debian-based distros (Ubuntu, Debian)
2. `DNF/YUM (Dandified YUM)` → Fedora, RHEL, CentOS
3. `Pacman` → Arch Linux, Manjaro
4. `Zypper` → openSUSE

## APT
### Update & Upgrades Packages
```sh
sudo apt update       # Refreshes package lists from repositories           
sudo apt upgrade      # Safe upgrade (without remove or add dependencies)
sudo apt full-upgrade # Complete upgrade (auto remove or add dependencies)
```
### Download package
```sh
sudo apt download <package-name>  # Download package as a .deb file
```
### List and Show Packages
```sh
# List installed package
dpkg --list | less
sudo apt list --installed

# Show package details
sudo apt show <package-name>
```

### Hold and Unhold Package
```sh
sudo apt-mark hold <package-name>   # Prevent package from being upgraded
sudo apt-mark unhold <package-name> # Allow package to be upgraded
```

### Remove Package
```sh
sudo apt remove <package-name> # Remove packages
sudo apt autoremove            # Remove unused dependencies
```

### Search Packages
```sh
sudo apt search <package>  # Search available packages
```

### Repositories
```sh
cat /etc/apt/sources.list       # Check available repo
sudo nano /etc/apt/sources.list # Edit to add or remove repo
echo "deb http://deb.debian.org/debian bookworm-backports main" | sudo tee -a /etc/apt/sources.list   # Example of add new repo

# Then Update
sudo apt update
```

### Dependencies
```sh
sudo apt-cache depends <package-name>  # Show dependencies of a package
sudo apt-cache rdepends <package-name> # Show reverse dependencies
```
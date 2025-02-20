---
sidebar_position: 1
---

# Terraform
- Tools for building, changing, and versioning infrastructure efficiently in a declarative way
- Automates the creation, modification, and deletion of infrastructure components, making the process more efficient and consistent.
- Enables application software best practices to infrastructure

## Terraform Files and Structure

- **Main Configuration (`.tf` files)**
    - `.tf` files contain Terraform configuration code (e.g., `main.tf`, `variables.tf`, `outputs.tf`).
    - `.tf.json` files are JSON-based configurations (less common).
- **State File (`terraform.tfstate`)**
    - JSON file containing information and the current state of managed infrastructure.
    - Contain sensitive information info (database password).
    - Can be stored locally or remotely for collaboration (`backend "gcs"`, `backend "s3"`).
- **Lock File (`.terraform.lock.hcl`)**
    - Ensures provider versions remain consistent across different environments.
- **Variable Files (`.tfvars`)**
    - Used for defining reusable variables outside of `.tf` files.
    - Example: `terraform.tfvars` containing project-specific values.

## Terraform Core
Terraform Core acts as the **execution engine** responsible for:
- Parsing `.tf` files
- Communicating with providers 
- Managing Terraform State

## Terraform Sequence
1. **Initialize** (`terraform init`) – Sets up and download providers & backends.  
2. **Plan** (`terraform plan`) –  Shows changes that will be applied before execution.  
3. **Apply** (`terraform apply`) – Creates/upgrades resources.  
4. **Destroy** (`terraform destroy`) – Removes infrastructure that specified in config file.
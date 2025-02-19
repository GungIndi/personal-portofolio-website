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

## Terraform Blocks

### Resources
- Defined using `resource` keyword, a **type** (e.g., `google_storage_bucket`), and a **name** (e.g., `example-bucket`).
- Contain arguments like `name` and `location`.

```hcl
resource "google_storage_bucket" "example" {
  name     = "my-bucket"
  location = "US"
}
```

### Data
- References an existing resource within the providers

```hcl
data "aws_vpc" "default_vpc"{
  default = true
}

data "aws_subnet_ids" "default_subnet" {
  vpc_id = data.aws_vpc.default.vpc_id
}
```

### Providers

- Implement resource types and expose APIs.
- Define provider source (e.g., `hashicorp/google`) and arguments like `project` and `region`.

```hcl
provider "google" {
  project = "my-project-id"
  region  = "us-central1"
  version = ">= 4.0"
}
```

### Variables
- Allow flexible configurations without modifying source code.

```hcl
variable "bucket_name" {
  description = "Bucket name"
  type        = string
}

resource "google_storage_bucket" "example" {
  name     = var.bucket_name
  location = "US"
}
```

You can also pass variable at runtime

```bash
terraform apply -var="VAR_NAME=VALUE" -var="VAR_NAME=VALUE"
```

**Best Practices:**  
- Parameterize selectively
- Use `.tfvars` for root modules
- Name descriptively
- Prefer positive boolean names 
- Always add descriptions

### Outputs
- Expose resource attributes for reference.

```hcl
output "bucket_url" {
  value = google_storage_bucket.example.self_link
}
```

### Backend (State Management Storage)

- Stores resource `terraform.tfstate` locally (default)
- Stores remotely `AWS S3`, `GCP GCS`, `Azure Blob`, `Terraform Cloud`, or `GitLab`.
- Enables team collaboration and locking mechanisms

1. **`GCP Remote Backend`**
```hcl
terraform {
  backend "gcs" {
    bucket = "my-bucket"
    prefix = "terraform/state"
  }
}
```
2. **`AWS Remote Backend`**
```hcl
terraform {
  backend "s3" {
    bucket = "my-bucket"
    key = "tf-infra/terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "terraform-state-locking"  # state locking to prevent concurrent modifications
    encrypt = true  
  }
}
```
3. **`Terraform Cloud Remote Backend`**
```hcl
terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "my-org"

    workspaces {
      name = "my-workspace"
    }
  }
}
```




**Best Practices:**  
- Use remote state for teams 
- Encrypt state files 
- Avoid storing secrets 
- Don't manually modify state

### Modules

- Reusable Terraform configurations, local or remote.

```hcl
module "network" {
  source = "./modules/network"
}
```
**Best Practices:**  
- Avoid excessive modularization 
- Use `count` / `for_each` for repetition
- Parameterize meaningfully 
- Organize with local modules
- Use Terraform Registry
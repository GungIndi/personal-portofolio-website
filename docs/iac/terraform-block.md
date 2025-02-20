# Terraform Blocks

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
1. **Defines Variables**
```hcl title='variable.tf'
# String
variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
}
# List
variable "instance_types" {
  type    = list(string)
  default = ["t2.micro", "t3.micro"]
}
# Map
variable "storage_type" {
  type = map(string)
  default = {
    standard = "gp2"
    high     = "io1"
  }
}
# Set
variable "team_members" {
  type    = set(string)
  default = ["alice", "bob", "charlie", "dave"]
}
```
2. **Using Variables**
```hcl
# Use string
resource "aws_s3_bucket" "example" {
  bucket = var.bucket_name
}
# Use map var with for_each 
resource "aws_instance" "example" {
  for_each      = var.storage_type
  ami           = "ami-12345678"
  instance_type = each.value
  tags = {
    Name = each.key
  }
}
# Use set var with for_each 
resource "aws_iam_user" "team" {
  for_each = var.team_members
  name     = each.value
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
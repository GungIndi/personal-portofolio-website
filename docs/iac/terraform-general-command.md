---
sidebar_position: 2
---

# Terraform General Command

### Initialization & Setup
- Initialize a Terraform project:
  ```sh
  terraform init
  ```
- Reinitialize and upgrade providers:
  ```sh
  terraform init -upgrade
  ```
- Validate the Terraform configuration:
  ```sh
  terraform validate
  ```
- Format Terraform files:
  ```sh
  terraform fmt
  ```
- Check the execution plan:
  ```sh
  terraform plan
  ```

### Applying & Destroying Resources
- Apply changes to the infrastructure:
  ```sh
  terraform apply
  ```
- Auto-approve an apply:
  ```sh
  terraform apply -auto-approve
  ```
- Destroy resources:
  ```sh
  terraform destroy
  ```
- Auto-approve a destroy:
  ```sh
  terraform destroy -auto-approve
  ```
- Remove resources that were deleted outside Terraform:
  ```sh
  terraform refresh
  ```

### Resource & State Management
- Show Terraform state:
  ```sh
  terraform show
  ```
- Show state of a specific resource:
  ```sh
  terraform state show <resource_type>.<resource_name>
  ```
- List all resources in state:
  ```sh
  terraform state list
  ```
- Remove a resource from state (without deleting it in the cloud):
  ```sh
  terraform state rm <resource_type>.<resource_name>
  ```
- Import an existing resource into Terraform state:
  ```sh
  terraform import <resource_type>.<resource_name> <resource_id>
  ```
- Refresh terraform state to match real-world infrastructure:
  ```sh
  terraform refresh
  ```

### Output & Variables Management
- View Terraform outputs:
  ```sh
  terraform output
  ```
- Get a specific output:
  ```sh
  terraform output <output_name>
  ```
- Set environment variables for Terraform:
  ```sh
  export TF_VAR_<variable_name>=<value>
  ```
- Use a `.tfvars` file:
  ```sh
  terraform apply -var-file="config.tfvars"
  ```

### Debugging & Logging
- Enable debugging logs:
  ```sh
  export TF_LOG=DEBUG
  ```
- Enable logging to a file:
  ```sh
  export TF_LOG_PATH="terraform.log"
  ```

### Workspace Management
- List all Terraform workspaces:
  ```sh
  terraform workspace list
  ```
- Show the current workspace:
  ```sh
  terraform workspace show
  ```
- Create a new workspace:
  ```sh
  terraform workspace new <workspace_name>
  ```
- Switch to a different workspace:
  ```sh
  terraform workspace select <workspace_name>
  ```
- Delete a workspace:
  ```sh
  terraform workspace delete <workspace_name>
  ```

### Remote State Management
- Enable remote backend configuration:
  ```hcl
  terraform {
    backend "s3" {
      bucket = "my-tf-state-bucket"
      key    = "terraform.tfstate"
      region = "us-east-1"
    }
  }
  ```
- Pull latest remote state:
  ```sh
  terraform state pull
  ```
- Push local state to remote backend:
  ```sh
  terraform state push
  ```

### Cleanup & Maintenance
- Remove all generated files:
  ```sh
  rm -rf .terraform/
  ```
- Remove the state file (use with caution!):
  ```sh
  rm terraform.tfstate*
  ```


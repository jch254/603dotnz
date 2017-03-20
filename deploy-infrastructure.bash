#!/bin/bash -ex

cd infrastructure
terraform init
terraform plan -var-file 603.nu.tfvars
terraform apply -var-file 603.nu.tfvars
cd ..

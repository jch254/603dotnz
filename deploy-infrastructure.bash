export TF_VAR_route53_zone_id=$ROUTE53_ZONE_ID
export TF_VAR_acm_arn=$ACM_ARN

cd infrastructure
terraform remote config -backend=s3 \
  -backend-config="bucket=603-terraform-remote-state" \
  -backend-config="key=603.nu.tfstate" \
  -backend-config="region=ap-southeast-2" \
  -backend-config="encrypt=true"

terraform plan -var-file 603.nu.tfvars
terraform apply -var-file 603.nu.tfvars
cd ..

#!/bin/bash -e

# Local deployment script for 603.nz infrastructure
# This mimics the CodeBuild environment variables for local deployment

echo "Setting up environment variables for local deployment..."

# Export all Terraform variables from buildspec.yml
export TF_VAR_region="ap-southeast-2"
export TF_VAR_name="603dotnz"
export TF_VAR_kms_key_arns='["arn:aws:kms:ap-southeast-2:982898479788:key/0ec9686b-13a1-40fc-8256-86e8d3503e9c"]'
export TF_VAR_ssm_parameter_arns='["arn:aws:ssm:ap-southeast-2:982898479788:parameter/shared/*","arn:aws:ssm:ap-southeast-2:982898479788:parameter/603dotnz/*"]'
export TF_VAR_build_docker_image="jch254/docker-node-terraform-aws"
export TF_VAR_build_docker_tag="22.x"
export TF_VAR_buildspec="buildspec.yml"
export TF_VAR_source_location="https://github.com/jch254/603dotnz.git"
export TF_VAR_cache_bucket="603-codebuild-cache/603dotnz"
export TF_VAR_bucket_name="603.nz"
export TF_VAR_dns_names='["603.nz"]'
export TF_VAR_route53_zone_id="Z18NTUPI1RKRGC"
export TF_VAR_acm_arn="arn:aws:acm:us-east-1:982898479788:certificate/dfff91b1-8a64-41de-91b4-6e469cc15214"
export TF_VAR_privacy_policy_subdomain="privacy.603.nz"
export TF_VAR_privacy_policy_destination="https://www.iubenda.com/privacy-policy/41002114"
export REMOTE_STATE_BUCKET="603-terraform-remote-state"

# Check AWS credentials are set
if [[ -z "$AWS_ACCESS_KEY_ID" || -z "$AWS_SECRET_ACCESS_KEY" ]]; then
    echo "❌ ERROR: AWS credentials not set!"
    echo ""
    echo "Please set your AWS credentials as environment variables:"
    echo "export AWS_ACCESS_KEY_ID=your_access_key_id"
    echo "export AWS_SECRET_ACCESS_KEY=your_secret_access_key"
    echo "export AWS_SESSION_TOKEN=your_session_token  # (if using temporary credentials)"
    echo ""
    echo "Or use AWS CLI profile:"
    echo "export AWS_PROFILE=your_profile_name"
    exit 1
fi

echo "✅ AWS credentials are set"
echo "✅ Environment variables configured"

# Check if GA_ID parameter exists in SSM (this is fetched from parameter store in CodeBuild)
echo "Note: GA_ID parameter will be fetched from SSM Parameter Store during deployment"

echo ""
echo "🚀 Running infrastructure deployment..."
echo ""

# Make the script executable and run it
chmod +x ./infrastructure/deploy-infrastructure.bash
./infrastructure/deploy-infrastructure.bash

echo ""
echo "✅ Local infrastructure deployment completed!"
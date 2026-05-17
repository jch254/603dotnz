# Infrastructure

Infrastructure for [603.nz](https://603.nz), managed with Terraform.
Cloudflare keeps the custom domain pointed at GitHub Pages, and AWS CodeBuild
is the primary deployment runner for the static site.

## What is managed

**DNS records** (`cloudflare_dns_record`)

- `603.nz` CNAME → `jch254.github.io` (proxied)
- `www` CNAME → `jch254.github.io` (proxied)
- `603.nz` MX records → iCloud Mail (mx01/mx02.mail.icloud.com)
- `603.nz` TXT records → SPF (iCloud) and Apple domain verification
- `_7dba64060c909694be0fd5e895a34b2b` CNAME → ACM wildcard validation

DNS records are managed through the shared `cloudflare-dns-records` module in
`terraform-modules`.

**Transform Rules** (`cloudflare_ruleset`)

- HTTP response header rewrite rule `Security Headers - Global` applies generic
  security headers on all requests:

  - `Permissions-Policy`
  - `Referrer-Policy`
  - `Strict-Transport-Security`
  - `X-Content-Type-Options`
  - `X-Frame-Options`

- HTTP response header rewrite rule `CSP - Apex Webapp` applies
  `Content-Security-Policy` only to `603.nz` and `www.603.nz`.

CSP is app-specific and is not applied zone-wide. The apex/www static webapp has
an edge CSP that preserves the existing font, image, embed, and style allowances
and allows Cloudflare Web Analytics (`static.cloudflareinsights.com` script load
and `cloudflareinsights.com` beacon connections). Subdomain apps own CSP at
their origin/backend, so Cloudflare does not override app-generated policies such
as Auth0 allowances.

Response headers are managed directly in `terraform/main.tf` so the generic
security headers and apex-only CSP can live in one Cloudflare ruleset.

**CodeBuild deployment** (`aws_codebuild_project`)

- `603dotnz` applies Terraform, then builds the static site from GitHub
- deploy output is pushed to the `gh-pages` branch
- `GITHUB_TOKEN` is read from SSM Parameter Store by `buildspec.yml`
- `CLOUDFLARE_API_TOKEN` is read from SSM Parameter Store by `buildspec.yml`

**SSM token placeholders** (`ssm-parameter-placeholder`)

- `/603dotnz/github-token`
- `/603dotnz/cloudflare-api-token`

Terraform does not take a plaintext `cloudflare_api_token` variable. CodeBuild
loads `CLOUDFLARE_API_TOKEN` from SSM before running Terraform so the provider can
authenticate without storing the decrypted token in Terraform state.

## State

Remote state is stored in S3: `s3://jch254-terraform-remote-state/603-prod-infrastructure` (ap-southeast-4, encrypted).

## Deployment

`infrastructure/terraform` is the runnable Terraform root. Infrastructure is
applied by CodeBuild using `infrastructure/deploy-infrastructure.bash`.
The root `buildspec.yml` installs dependencies, applies Terraform, then builds
the static site and publishes `dist/` to the GitHub Pages branch.
GitHub Pages must be configured to deploy from the `gh-pages` branch, `/ (root)`.
If Pages is still in GitHub Actions/workflow mode, CodeBuild can update the
branch successfully while the public site continues serving the previous
workflow artifact.
If `codebuild_webhook_enabled` is `true`, the AWS account must already have
CodeBuild GitHub source credentials/connection configured so AWS can create the
repository webhook.

Default SSM token placeholders:

| Parameter | Description |
| --- | --- |
| `/603dotnz/github-token` | GitHub token used by CodeBuild to push `gh-pages` |
| `/603dotnz/cloudflare-api-token` | Cloudflare token used by Terraform |

`codebuild_cache_bucket` defaults to `jch254-codebuild-cache/603dotnz`;
set it to an empty string if that cache bucket should not be used.

The GitHub token should be a fine-grained token scoped to this repository with
`Contents: Read and write`.

The Cloudflare token should have Zone DNS Edit and Transform Rules Edit
permissions for `603.nz`.

GitHub Actions deployment is disabled while the workflow is preserved as a
backup at `.github/workflows/deploy.yml.disabled`.

The disabled backup workflow mirrors the CodeBuild branch-push deployment path:
it builds the site and pushes `dist/` to `gh-pages`. It does not use GitHub
Pages artifacts and does not apply Terraform.

## Local usage

```bash
cd infrastructure/terraform

# Authenticate with AWS (requires access to the S3 state bucket)
aws sso login  # or export AWS_* env vars

# For the first local/bootstrap apply, export a real Cloudflare token directly.
export CLOUDFLARE_API_TOKEN="..."

terraform init
terraform plan
terraform apply

# After Terraform creates the placeholder parameters, overwrite them with real values.
aws ssm put-parameter \
  --region ap-southeast-4 \
  --name /603dotnz/github-token \
  --type SecureString \
  --value "$GITHUB_TOKEN" \
  --overwrite

aws ssm put-parameter \
  --region ap-southeast-4 \
  --name /603dotnz/cloudflare-api-token \
  --type SecureString \
  --value "$CLOUDFLARE_API_TOKEN" \
  --overwrite
```

After the bootstrap apply, CodeBuild reads both tokens from SSM through the
root `buildspec.yml`.

## Migrating existing state

The previous resources are mapped into their current Terraform addresses by
`terraform/moved.tf`:

- `cloudflare_dns_record.www` → `module.dns_records.cloudflare_dns_record.this["www"]`
- `cloudflare_dns_record.icloud_mx_1`/`icloud_mx_2` → `module.dns_records.cloudflare_dns_record.this["icloud_mx_*"]`
- `cloudflare_dns_record.spf` → `module.dns_records.cloudflare_dns_record.this["spf"]`
- `cloudflare_dns_record.apple_verification` → `module.dns_records.cloudflare_dns_record.this["apple_verification"]`
- `cloudflare_dns_record.acm_validation_wildcard` → `module.dns_records.cloudflare_dns_record.this["acm_validation_wildcard"]`
- `module.response_headers.cloudflare_ruleset.this` → `cloudflare_ruleset.response_headers`

The four pre-existing apex `A` records (`apex_github_1`–`apex_github_4`
pointing at GitHub Pages IPs `185.199.108-111.153`) are no longer managed and
will be destroyed on the next apply. They are replaced by a single proxied
apex `CNAME` (`apex_github`) pointing at `jch254.github.io`, matching the
`jch254.com` setup. Cloudflare CNAME flattening serves the apex from the
proxied edge. After apply, ensure the GitHub repository's Pages custom-domain
verification still passes.

### Importing existing resources

If resources already exist in Cloudflare and need to be brought under Terraform management:

```bash
# DNS records - get record IDs from Cloudflare dashboard or API
terraform import 'module.dns_records.cloudflare_dns_record.this["apex_github"]' <zone_id>/<record_id>

# Ruleset - get ruleset ID from Cloudflare dashboard or API
terraform import cloudflare_ruleset.response_headers <zone_id>/<ruleset_id>
```

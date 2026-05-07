# [603dotnz](https://603.nz)

Source code for <https://603.nz>.

## Tech stack

- React 15 (static HTML generation via `static-react`)
- TypeScript 5
- Babel 6 config (for `static-react` compatibility)
- ESLint (Airbnb + TypeScript)
- pnpm for package management
- Docker + nginx for serving built files

## Prerequisites

- Node.js 18+ and pnpm
- Docker (optional, for containerized preview)

## Node.js Version

This project is tested with Node.js 22.x (see `.nvmrc`).

If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install
nvm use
```

Other Node managers: set your version to 22.x for best compatibility.

## Scripts

- build: TypeScript -> JS -> static HTML
- build:ts: TypeScript only
- lint / lint:fix: Lint TypeScript components
- docker:build: Build nginx image
- docker:run: Run container on port 8080
- docker:dev: Build app, build image, run container

## Build

From project root:

```bash
pnpm install
pnpm run build
```

Artifacts are emitted to `dist/index.html`.

## Preview locally

Asset paths are absolute, so `dist/index.html` cannot be opened directly via `file://`. Use Docker to preview:

```bash
pnpm run docker:dev
```

Then open <http://localhost:8080>

## Development

```bash
pnpm install
pnpm run build
```

Use Docker (below) to preview changes.

## Linting

```bash
pnpm run lint
```

## Run with Docker (nginx)

Build and run the site with nginx serving the static files:

```bash
# build the image
pnpm run docker:build

# run the container (host 8080 -> container 80)
pnpm run docker:run
```

Or do both in one step:

```bash
pnpm run docker:dev
```

Then open <http://localhost:8080>

## Why an HTTP server is required

The site references assets with absolute URLs (for example, `/index.css`, `/img/...`). When opening `dist/index.html` directly via `file://`, these paths won't resolve and styling will not load. Use Docker (nginx) to preview correctly.

## Deployment

The site is served by **GitHub Pages** with the custom domain in `dist/CNAME`.
Primary deployment runs through **AWS CodeBuild**. The previous GitHub Actions
workflow is kept as a disabled backup at
`.github/workflows/deploy.yml.disabled`.

Deploys use [`buildspec.yml`](buildspec.yml):

1. CodeBuild clones `jch254/603dotnz`
2. `pnpm install --frozen-lockfile` installs dependencies
3. CodeBuild applies Terraform through `infrastructure/deploy-infrastructure.bash`
4. `pnpm run build` generates `dist/index.html`
5. CodeBuild commits the full `dist/` directory to the `gh-pages` branch
6. GitHub Pages serves the `gh-pages` branch

### CodeBuild setup

The CodeBuild project and service role are managed by Terraform in
`infrastructure/`. In GitHub, set **Settings > Pages > Build and deployment**
to deploy from the `gh-pages` branch, `/ (root)`.
If the live site stays stale while `gh-pages` contains the expected HTML, check
that Pages is not still set to **GitHub Actions** / workflow mode. The minimal
CodeBuild deploy token cannot change this setting; use the GitHub UI or a
temporary admin/Pages-write token for that one-time switch.
If automatic push deploys are enabled, the AWS account also needs CodeBuild's
GitHub source connection/credentials configured for webhook creation.

Terraform-managed CodeBuild environment variables:

| Variable | Type | Description |
| :------- | :--- | :---------- |
| `AWS_DEFAULT_REGION` | Plaintext | Defaults to `ap-southeast-4` |
| `REMOTE_STATE_BUCKET` | Plaintext | Defaults to `jch254-terraform-remote-state` |
| `TF_STATE_KEY` | Plaintext | Defaults to `603-prod-infrastructure` |
| `GITHUB_REPOSITORY` | Plaintext | Defaults to `jch254/603dotnz` |
| `PAGES_BRANCH` | Plaintext | Defaults to `gh-pages` |
| `BUILD_OUTPUT_DIR` | Plaintext | Defaults to `dist` |
| `GIT_COMMITTER_NAME` | Plaintext, optional | Commit author name for deploy commits |
| `GIT_COMMITTER_EMAIL` | Plaintext, optional | Commit author email for deploy commits |

Buildspec-managed SSM environment variables:

| Variable | Parameter | Description |
| :------- | :-------- | :---------- |
| `GITHUB_TOKEN` | `/603dotnz/github-token` | GitHub token used only to push `gh-pages` |
| `CLOUDFLARE_API_TOKEN` | `/603dotnz/cloudflare-api-token` | Cloudflare token used by Terraform |

SSM parameters managed as placeholders by Terraform:

| Parameter | Description |
| :------- | :---------- |
| `/603dotnz/github-token` | GitHub token used by CodeBuild to push `gh-pages` |
| `/603dotnz/cloudflare-api-token` | Cloudflare token used by Terraform |

In CodeBuild, the buildspec loads the Cloudflare token from SSM into
`CLOUDFLARE_API_TOKEN` before running plan/apply; there is no plaintext
Terraform variable for it.

The GitHub token should be a fine-grained token scoped to this repository with
**Contents: Read and write**. No Pages, Actions, admin, package, or workflow
permissions are required for the branch-push deploy.

Update the placeholder values in SSM:

```bash
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

Manual deploy:

```bash
aws codebuild start-build \
  --region ap-southeast-4 \
  --project-name 603dotnz
```

To use the GitHub Actions backup later:

1. Rename `.github/workflows/deploy.yml.disabled` back to `.github/workflows/deploy.yml`
2. Keep **Settings > Pages > Build and deployment** pointed at the `gh-pages` branch, `/ (root)`
3. Pause the CodeBuild trigger/project while the backup workflow is active


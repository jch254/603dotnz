# [603dotnz](https://603.nz)

Source code for <https://603.nz>.

603.nz answers "what has he built?": five live products, then an index of open-source projects and build tooling. The person, the blog and the resume live on its sibling, [jch254.com](https://jch254.com).

## Tech stack

- [Astro](https://astro.build) 6, static output, no client framework
- Plain CSS: custom properties and classes in `src/styles/`
- Sharp for responsive AVIF and WebP screenshots (installed with Astro)
- pnpm for package management
- Docker + nginx for a local preview of the built site

## Project structure

```text
/
├── docs/design/         # Pointer to the shared design docs in the jch254.com repo
├── public/              # CNAME, favicons, og-default.png, avatars, theme.js
│   ├── fonts/           # Schibsted Grotesk and Spline Sans Mono, self-hosted woff2: a small core file per face, then the full Latin files
│   └── licenses/        # Their OFL licences
├── src/
│   ├── assets/shots/    # Product screenshots, 2880 by 1800
│   ├── components/
│   │   ├── site/        # Header, Footer, ThemeScript (copied from jch254.com)
│   │   └── Product.astro
│   ├── data/
│   │   └── projects.ts  # Every project on the site
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro  # The only page
│   │   └── 404.astro
│   ├── styles/          # tokens, fonts, base, primitives (copied from jch254.com)
│   └── site.ts          # Domain, page links and addresses for the header and footer
├── astro.config.mjs
├── Dockerfile           # Local preview
├── nginx.conf           # Local preview
└── buildspec.yml        # Deploy
```

## Adding or changing a project

Everything on the page comes from [`src/data/projects.ts`](src/data/projects.ts): the featured products in order, the two index groups and the closing quote.

- A featured product needs a status, a year, one or two sentences, a stack line, one button, an optional text link and a screenshot.
- Screenshots go in `src/assets/shots/` at 2880 by 1800 (a 1440 by 900 window at a device scale factor of 2). The build writes the responsive AVIF and WebP files.
- An index entry needs a year, a name and one line. Give it a `stack`, or a `command` if it has no interface, plus a `live` link, a `source` link or both.

## Design

603.nz and jch254.com share one design system, taken from Namaste. jch254.com is the source of truth. This repo carries a copy of:

- `src/styles/tokens.css`, `fonts.css`, `base.css`, `primitives.css` and `index.css`
- `src/components/site/`
- `public/fonts/`, `public/licenses/`, `public/theme.js` and the two avatars

Change those in jch254.com first, then copy them here. `src/site.ts` is the one file that differs. See [`docs/design/README.md`](docs/design/README.md) for the direction, the audit and the notes.

The site sends a content security policy with `script-src 'self'`, so there are no inline scripts. The theme script is `public/theme.js`. Inline styles are allowed, and the build inlines the stylesheet (`inlineStylesheets` in `astro.config.mjs`) because there is only one page for it to serve.

## Prerequisites

- Node.js 22.12 or later and pnpm
- Docker (optional, for the nginx preview)

## Node.js version

Astro 6 needs Node.js 22.12 or later (see `.nvmrc`).

If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install
nvm use
```

## Scripts

- dev: Astro dev server at <http://localhost:4321>
- build: build the static site to `dist/`
- preview: serve the built site with Astro
- docker:build: build the nginx image (the build runs inside the image)
- docker:run: run the container on port 8080
- docker:dev: build the image, then run the container

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm install
pnpm run build
```

The site is written to `dist/`. `dist/` is build output only and is not tracked.

## Preview locally

```bash
pnpm run preview
```

Or with Docker and nginx, which serves `404.html` for unknown paths the way GitHub Pages does:

```bash
pnpm run docker:dev
```

Then open <http://localhost:8080>

## Deployment

The site is served by **GitHub Pages** with the custom domain in `public/CNAME`,
which the build copies to `dist/CNAME`.
Primary deployment runs through **AWS CodeBuild**. The previous GitHub Actions
workflow is kept as a disabled backup at
`.github/workflows/deploy.yml.disabled`.

Deploys use [`buildspec.yml`](buildspec.yml):

1. CodeBuild clones `jch254/603dotnz`
2. `pnpm install --frozen-lockfile` installs dependencies
3. CodeBuild applies Terraform through `infrastructure/deploy-infrastructure.bash`
4. `pnpm run build` builds the Astro site into `dist/`
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


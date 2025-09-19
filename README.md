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
- Python 3 (for local static file server)
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
- serve: Serve `dist/` at <http://localhost:8000>
- dev: One-off build (pair with `serve` for preview)
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

Serve the static files from the `dist` directory (required because asset paths are absolute):

```bash
pnpm run serve
```

Then open <http://localhost:8000>

## Development

```bash
pnpm install
pnpm run dev
```

Note: the current `dev` script only builds once. Use `pnpm run serve` (above) or Docker (below) to preview changes.

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

The site references assets with absolute URLs (for example, `/index.css`, `/img/...`). When opening `dist/index.html` directly via `file://`, these paths won’t resolve and styling will not load. Use the local server (`pnpm run serve`) or Docker (nginx) to preview correctly.

## CI/CD (AWS CodeBuild/CodePipeline)

Build is driven by `buildspec.yml` and the scripts in `/infrastructure`:

- install: `./infrastructure/install.bash` (installs pnpm and dependencies)
- build: `./infrastructure/build-artifacts.bash` (runs `pnpm run build`)
- deploy: `./infrastructure/deploy-infrastructure.bash`
- upload: `./infrastructure/upload-artifacts.bash`

Caching highlights:

- pnpm store and node_modules
- TypeScript output `dist-ts/**/*` to speed up rebuilds
- Terraform plugin/module caches under `infrastructure/.terraform`

Output: `dist/` is what gets served (and is what the Docker image copies to nginx).

## Troubleshooting

- docker:build fails with daemon error: Ensure Docker Desktop is running.
- Empty styles when opening the file directly: Use `pnpm run serve` or Docker.
- Build fails writing dist/index.html: Ensure `dist/` exists (handled by script) and permissions are OK.

## Deployment/Infrastructure

Refer to the `/infrastructure` directory for Terraform and deployment scripts.


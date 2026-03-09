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

## Deployment/Infrastructure

Deployed via GitHub Actions.

## Multi-stage build: build the Astro site with a pinned Node version, serve with nginx.
## This is a local preview of what GitHub Pages serves. It is not used to deploy.

# 1) Builder stage: Node 22 LTS. Astro 6 needs 22.12 or later.
FROM node:22-slim AS builder
WORKDIR /app

# Enable pnpm via corepack and pin the version in package.json and buildspec.yml
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

# Install dependencies (leverage Docker layer caching)
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# Copy source and build. .dockerignore keeps the host's node_modules out, so
# the native binaries installed above (sharp, esbuild) are the Linux ones.
COPY . .
RUN pnpm run build

# 2) Runtime stage: lightweight nginx serving static files
FROM nginx:alpine

# Serve 404.html for unknown paths, as GitHub Pages does
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built site to nginx's html directory
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80

# nginx uses its default CMD to start

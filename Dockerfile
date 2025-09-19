## Multi-stage build: build with a pinned Node version, serve with nginx

# 1) Builder stage: use Node 22 LTS to ensure consistent toolchain
FROM node:22-slim AS builder
WORKDIR /app

# Enable pnpm via corepack and pin major version compatible with lockfile v9
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

# Install dependencies (leverage Docker layer caching)
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

# 2) Runtime stage: lightweight nginx serving static files
FROM nginx:alpine

# Copy the built site to nginx's html directory
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80

# nginx uses its default CMD to start
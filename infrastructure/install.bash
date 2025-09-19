#!/bin/bash -ex

echo Installing dependencies...

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    npm install -g pnpm
fi

pnpm install

echo Finished installing dependencies

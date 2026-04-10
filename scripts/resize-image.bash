#!/usr/bin/env bash

for f in "$@"; do
  magick "$f" \
    -gravity center \
    -crop 1024x768+0+0 +repage \
    -resize 512x384 \
    -sharpen 0x1 \
    -normalize \
    "final_$f"
done
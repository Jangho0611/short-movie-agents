#!/bin/zsh
set -euo pipefail
cd "${0:A:h}/.."
runner=../../node_modules/.bin/remotion
for scene in 01 02 03 04 05 06; do
  "$runner" render src/index-v3.tsx "Scene${scene}V3" "public/assets/video/scene${scene}-visual-preview-v3.mp4" --codec=h264 --crf=18 --concurrency=2 --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --log=error
  echo "Scene ${scene} visual render complete"
done
python3 scripts/assemble-preview-v3.py

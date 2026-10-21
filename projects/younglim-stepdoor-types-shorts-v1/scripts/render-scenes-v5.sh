#!/bin/sh
set -eu
for i in 1 2 3 4 5 6 7; do
 test ! -e public/assets/video/scene0$i-v5.mp4
 node_modules/.bin/remotion render src/index-v5.tsx Scene$i public/assets/video/scene0$i-v5.mp4 --codec=h264 --crf=18 --audio-bitrate=192k --concurrency=2 --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
done

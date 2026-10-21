#!/bin/sh
set -eu
for i in 6; do
 test ! -e public/assets/video/scene0$i-v8.mp4
 node_modules/.bin/remotion render src/index-v8.tsx Scene$i public/assets/video/scene0$i-v8.mp4 --codec=h264 --crf=18 --audio-bitrate=192k --concurrency=2 --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
done

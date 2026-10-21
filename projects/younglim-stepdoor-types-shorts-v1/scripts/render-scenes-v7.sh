#!/bin/sh
set -eu
for i in 1 2 4; do
 test ! -e public/assets/video/scene0$i-v7.mp4
 node_modules/.bin/remotion render src/index-v7.tsx Scene$i public/assets/video/scene0$i-v7.mp4 --codec=h264 --crf=18 --audio-bitrate=192k --concurrency=2 --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
done

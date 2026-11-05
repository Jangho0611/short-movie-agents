#!/bin/sh
set -eu
cd "$(dirname "$0")/../.."
ffmpeg -v error -n -framerate 24 -start_number 1 -i public/assets/images/concept-motion-v1/frame-%04d.png -frames:v 120 -c:v libx264 -crf 18 -pix_fmt yuv420p -an -movflags +faststart public/assets/video/scene02-03-concept-motion-test-v1.mp4

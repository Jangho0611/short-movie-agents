#!/bin/zsh
set -euo pipefail

project_dir="${0:A:h:h}"
cd "$project_dir"

ffmpeg_bin="${FFMPEG_BIN:-/opt/homebrew/opt/ffmpeg-full/bin/ffmpeg}"
output_path="${1:-public/assets/video/gypsum-board-installation-final.mp4}"

if [[ -e "$output_path" ]]; then
  print -u2 "Output already exists: $output_path"
  exit 1
fi

"$ffmpeg_bin" -hide_banner \
  -i public/assets/video/scene01-flow-v1.mp4 \
  -i public/assets/video/scene02-flow-v1.mp4 \
  -i public/assets/video/scene03-flow-v1.mp4 \
  -i public/assets/video/scene04-remotion-v1.mp4 \
  -i public/assets/video/scene05-flow-v1.mp4 \
  -i public/assets/video/scene06-daesan-ending-final.mp4 \
  -i public/assets/audio/confirmed-scene01-tts-v1.mp3 \
  -i public/assets/audio/confirmed-scene02-tts-v1.mp3 \
  -i public/assets/audio/confirmed-scene03-tts-v1.mp3 \
  -i public/assets/audio/confirmed-scene04-tts-v2.mp3 \
  -i public/assets/audio/confirmed-scene05-tts-v2.mp3 \
  -i public/assets/audio/confirmed-scene06-tts-v1.mp3 \
  -filter_complex "[0:v]trim=duration=10,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v0];[1:v]trim=duration=6,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v1];[2:v]trim=duration=6,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v2];[3:v]trim=duration=4,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v3];[4:v]trim=duration=6,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v4];[5:v]trim=duration=5.666667,setpts=PTS-STARTPTS,fps=24,format=yuv420p,setsar=1[v5];[v0][v1][v2][v3][v4][v5]concat=n=6:v=1:a=0,ass=public/assets/subtitles/gypsum-board-installation-final.ass[vout];[6:a]aresample=48000,aformat=channel_layouts=stereo,adelay=300|300,apad=whole_dur=10,atrim=duration=10,asetpts=PTS-STARTPTS[a0];[7:a]aresample=48000,aformat=channel_layouts=stereo,adelay=300|300,apad=whole_dur=6,atrim=duration=6,asetpts=PTS-STARTPTS[a1];[8:a]aresample=48000,aformat=channel_layouts=stereo,adelay=300|300,apad=whole_dur=6,atrim=duration=6,asetpts=PTS-STARTPTS[a2];[9:a]aresample=48000,aformat=channel_layouts=stereo,adelay=300|300,apad=whole_dur=4,atrim=duration=4,asetpts=PTS-STARTPTS[a3];[10:a]aresample=48000,aformat=channel_layouts=stereo,apad=whole_dur=6,atrim=duration=6,asetpts=PTS-STARTPTS[a4];[11:a]aresample=48000,aformat=channel_layouts=stereo,adelay=500|500,apad=whole_dur=5.666667,atrim=duration=5.666667,asetpts=PTS-STARTPTS[a5];[a0][a1][a2][a3][a4][a5]concat=n=6:v=0:a=1[aout]" \
  -map "[vout]" -map "[aout]" \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -profile:v high -level 4.0 \
  -g 48 -keyint_min 48 -sc_threshold 0 \
  -color_range tv -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -c:a aac -b:a 192k -ar 48000 -ac 2 -movflags +faststart \
  "$output_path"

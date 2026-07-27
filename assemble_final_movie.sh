#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VIDEO_DIR="$BASE_DIR/output/f63341b4-7228-4d74-8252-1d21937b8b77"
OUT_DIR="$BASE_DIR/output"
mkdir -p "$OUT_DIR"

FONT_PATH="$(fc-list :lang=ko | grep -m1 'Apple SD 산돌고딕 Neo' | cut -d: -f1 || true)"
if [[ -z "$FONT_PATH" ]]; then
  FONT_PATH="$(fc-list :lang=ko | head -n1 | cut -d: -f1 || true)"
fi
if [[ -z "$FONT_PATH" ]]; then
  echo "한글 폰트를 찾을 수 없습니다." >&2
  exit 1
fi

SCENE1="$VIDEO_DIR/scene_1.mp4"
SCENE2="$VIDEO_DIR/scene_2.mp4"
SCENE3="$VIDEO_DIR/scene_3.mp4"
BGM="$OUT_DIR/bgm.mp3"
OUT="$OUT_DIR/final_pf보드.mp4"
SUB1="$OUT_DIR/subtitle_1.png"
SUB2="$OUT_DIR/subtitle_2.png"
OV1="$OUT_DIR/overlay_1.png"
OV2="$OUT_DIR/overlay_2.png"
OV3="$OUT_DIR/overlay_3.png"
OV4="$OUT_DIR/overlay_4.png"

python3 - <<PY
from PIL import Image, ImageDraw, ImageFont
import os
font_path = os.environ['FONT_PATH'] if 'FONT_PATH' in os.environ else None
font_path = font_path or '$FONT_PATH'
base_w, base_h = 720, 1280

def make_text_image(text, fontsize, out_path, height=220):
    font = ImageFont.truetype(font_path, fontsize)
    img = Image.new('RGBA', (base_w, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    bbox = draw.textbbox((0, 0), text, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (base_w - w) // 2
    y = (height - h) // 2
    draw.text((x, y), text, font=font, fill='white', stroke_width=4, stroke_fill='black')
    img.save(out_path)

make_text_image('불날까 조마조마?', 72, '$SUB1', height=220)
make_text_image('대산이라 안심이죠', 72, '$SUB2', height=220)
make_text_image('대량구매는', 48, '$OV1', height=180)
make_text_image('대산', 160, '$OV2', height=240)
make_text_image('GS건설 3년 연속 납품업체', 48, '$OV3', height=180)
make_text_image('www.daesan.ai', 48, '$OV4', height=160)
PY

# Fixed overlay canvas y positions and visible glyph bounds (720x1280):
#   line 1: y=430, image h=180, glyph h~46  -> visible y~497..543
#   line 2: y=590, image h=240, glyph h~153 -> visible y~633..786
#   line 3: y=840, image h=180, glyph h~51  -> visible y~905..956
#   line 4: y=1030,image h=160, glyph h~46  -> visible y~1087..1133
# Image-box gaps are 60, 10, and 10 px; actual visible-glyph gaps are
# at least 90 px (90, 109, 123), so no rendered text can overlap.

ffmpeg -y \
  -i "$SCENE1" \
  -i "$SCENE2" \
  -i "$SCENE3" \
  -loop 1 -t 3.0 -i "$OV1" \
  -loop 1 -t 2.7 -i "$OV2" \
  -loop 1 -t 2.4 -i "$OV3" \
  -loop 1 -t 2.1 -i "$OV4" \
  -i "$SUB1" \
  -i "$SUB2" \
  -i "$BGM" \
  -filter_complex "
[3:v]format=rgba,fade=in:st=0:d=0.3:alpha=1,setpts=PTS+0/TB[ov1];
[4:v]format=rgba,fade=in:st=0:d=0.3:alpha=1,setpts=PTS+0.3/TB[ov2];
[5:v]format=rgba,fade=in:st=0:d=0.3:alpha=1,setpts=PTS+0.6/TB[ov3];
[6:v]format=rgba,fade=in:st=0:d=0.3:alpha=1,setpts=PTS+0.9/TB[ov4];
[0:v]trim=start=0:end=5,setpts=PTS-STARTPTS[scene1];
[1:v]trim=start=0:end=7,setpts=PTS-STARTPTS[scene2];
[2:v]trim=start=5:end=8,setpts=PTS-STARTPTS[scene3base];
[scene1][7:v]overlay=x=0:y=960:format=auto[v1];
[scene2][8:v]overlay=x=0:y=960:format=auto[v2];
[scene3base][ov1]overlay=x=0:y=430:eof_action=pass[tmp1];
[tmp1][ov2]overlay=x=0:y=590:eof_action=pass[tmp2];
[tmp2][ov3]overlay=x=0:y=840:eof_action=pass[tmp3];
[tmp3][ov4]overlay=x=0:y=1030:eof_action=pass[v3];
[v1][v2][v3]concat=n=3:v=1:a=0[outv];
[9:a]atrim=start=0:end=15,asetpts=PTS-STARTPTS,loudnorm=I=-18:LRA=7:TP=-2,afade=t=out:st=13:d=2,aresample=48000[outa]" \
  -map "[outv]" -map "[outa]" \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k \
  "$OUT"

echo "최종 파일 생성: $OUT"

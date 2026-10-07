import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';

export const SCENE02_DURATION = 103; // 4.296s @ 24fps (scene02-v3.mp3)

const CANVAS_BG = '#FFFFFF';
const INK = '#111111';
const HAIRLINE = '#CCCCCC';
const ACCENT = '#123628'; // Daesan logo measured green (daesanlogo2.png)

const INACTIVE_TEXT = '#B0B0B0';
const INACTIVE_LINE = '#DDDDDD';

const FILM_BASE_FILL = '#D8B98C';
const FILM_STROKE = '#B99A6B';
const GRAIN_COLORS = ['#C9A876', '#DEBF91', '#C2A06E', '#E3C89A', '#CBA97C'];
const HDF_FILL = '#E4CBA1';
const HDF_STROKE = '#C7A876';
const CORE_FILL = '#DEC190';
const CORE_STROKE = '#B6935C';

const DIAGRAM_LEFT = 190;
const DIAGRAM_TOP = 560;
const DIAGRAM_HEIGHT = 800;

const FILM_WIDTH = 34;
const HDF_WIDTH = 90;
const CORE_WIDTH = 380;
const TOTAL_WIDTH = FILM_WIDTH + HDF_WIDTH + CORE_WIDTH;

const LABEL_X = DIAGRAM_LEFT + TOTAL_WIDTH + 48;
const LABELS = [
  {t: 0.2, text: '허니컴 코어', color: CORE_FILL, stroke: CORE_STROKE},
  {t: 0.55, text: 'HDF 보드', color: HDF_FILL, stroke: HDF_STROKE},
  {t: 0.85, text: '필름 / 시트지', color: FILM_BASE_FILL, stroke: FILM_STROKE},
];

function mixColor(c1: string, c2: string, t: number): string {
  const clamp = Math.max(0, Math.min(1, t));
  const p1 = parseInt(c1.slice(1), 16);
  const p2 = parseInt(c2.slice(1), 16);
  const r1 = (p1 >> 16) & 255;
  const g1 = (p1 >> 8) & 255;
  const b1 = p1 & 255;
  const r2 = (p2 >> 16) & 255;
  const g2 = (p2 >> 8) & 255;
  const b2 = p2 & 255;
  const r = Math.round(r1 + (r2 - r1) * clamp);
  const g = Math.round(g1 + (g2 - g1) * clamp);
  const b = Math.round(b1 + (b2 - b1) * clamp);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Activation windows follow the covering animation's own timeline:
// core exposed first (0-18), then HDF gets covered by the growing film (16-28 in / 68-80 out),
// then film/sheet finish takes over once the wood-grain fades in (68-80 in, stays on).
function activationCore(frame: number): number {
  return interpolate(frame, [0, 18, 28], [1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}
function activationHdf(frame: number): number {
  return interpolate(frame, [16, 28, 68, 80], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}
function activationFilm(frame: number): number {
  return interpolate(frame, [68, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}
const ACTIVATIONS = [activationCore, activationHdf, activationFilm];

function hexPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(' ');
}

const HEX_R = 22;

const HoneycombField: React.FC<{x: number; y: number; width: number; height: number}> = ({
  x,
  y,
  width,
  height,
}) => {
  const r = HEX_R;
  const hexW = Math.sqrt(3) * r;
  const hexH = 2 * r;
  const vertSpacing = hexH * 0.75;
  const cols = Math.ceil(width / hexW) + 2;
  const rows = Math.ceil(height / vertSpacing) + 2;
  const cells: React.ReactNode[] = [];
  for (let row = 0; row < rows; row++) {
    const rowOffset = row % 2 === 0 ? 0 : hexW / 2;
    for (let col = 0; col < cols; col++) {
      const cx = x + col * hexW + rowOffset - hexW;
      const cy = y + row * vertSpacing - hexH;
      cells.push(
        <polygon
          key={`${row}-${col}`}
          points={hexPoints(cx, cy, r)}
          fill={CORE_FILL}
          stroke={CORE_STROKE}
          strokeWidth={2}
        />
      );
    }
  }
  return <g clipPath="url(#coreClip)">{cells}</g>;
};

const WoodGrain: React.FC<{opacity: number}> = ({opacity}) => {
  if (opacity <= 0) return null;
  const count = 34;
  const lines: React.ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    const yBase = DIAGRAM_TOP + (i / count) * DIAGRAM_HEIGHT;
    const amp = 6 + 4 * Math.sin(i * 1.7);
    const freq = 0.02 + 0.005 * Math.sin(i * 0.9);
    const color = GRAIN_COLORS[i % GRAIN_COLORS.length];
    const strokeW = 1.4 + 2.1 * Math.abs(Math.sin(i * 2.3));
    const lineOpacity = 0.22 + 0.3 * Math.abs(Math.sin(i * 1.1));
    const steps = 24;
    let d = `M ${DIAGRAM_LEFT} ${yBase.toFixed(1)}`;
    for (let s = 1; s <= steps; s++) {
      const px = DIAGRAM_LEFT + (s / steps) * TOTAL_WIDTH;
      const py = yBase + amp * Math.sin(px * freq + i);
      d += ` L ${px.toFixed(1)} ${py.toFixed(1)}`;
    }
    lines.push(
      <path key={i} d={d} fill="none" stroke={color} strokeWidth={strokeW} opacity={lineOpacity} />
    );
  }
  return (
    <g clipPath="url(#fullClip)" opacity={opacity}>
      <rect x={DIAGRAM_LEFT} y={DIAGRAM_TOP} width={TOTAL_WIDTH} height={DIAGRAM_HEIGHT} fill="#DDBD8F" />
      {lines}
    </g>
  );
};

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const frameOpacity = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  const filmWidth = interpolate(frame, [15, 78], [FILM_WIDTH, TOTAL_WIDTH], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const grainOpacity = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: CANVAS_BG}}>
      <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{position: 'absolute', top: 0, left: 0}}>
        <defs>
          <clipPath id="coreClip">
            <rect
              x={DIAGRAM_LEFT + FILM_WIDTH + HDF_WIDTH}
              y={DIAGRAM_TOP}
              width={CORE_WIDTH}
              height={DIAGRAM_HEIGHT}
            />
          </clipPath>
          <clipPath id="fullClip">
            <rect x={DIAGRAM_LEFT} y={DIAGRAM_TOP} width={TOTAL_WIDTH} height={DIAGRAM_HEIGHT} />
          </clipPath>
        </defs>

        <rect
          x={DIAGRAM_LEFT}
          y={DIAGRAM_TOP}
          width={TOTAL_WIDTH}
          height={DIAGRAM_HEIGHT}
          fill="none"
          stroke={HAIRLINE}
          strokeWidth={2}
          opacity={frameOpacity}
        />

        <HoneycombField
          x={DIAGRAM_LEFT + FILM_WIDTH + HDF_WIDTH}
          y={DIAGRAM_TOP}
          width={CORE_WIDTH}
          height={DIAGRAM_HEIGHT}
        />

        <rect
          x={DIAGRAM_LEFT + FILM_WIDTH}
          y={DIAGRAM_TOP}
          width={HDF_WIDTH}
          height={DIAGRAM_HEIGHT}
          fill={HDF_FILL}
          stroke={HDF_STROKE}
          strokeWidth={2}
        />

        <rect
          x={DIAGRAM_LEFT}
          y={DIAGRAM_TOP}
          width={filmWidth}
          height={DIAGRAM_HEIGHT}
          fill={FILM_BASE_FILL}
          stroke={FILM_STROKE}
          strokeWidth={2}
        />

        <WoodGrain opacity={grainOpacity} />

        <rect x={DIAGRAM_LEFT} y={DIAGRAM_TOP - 24} width={16} height={16} fill={ACCENT} opacity={frameOpacity} />
        <text x={DIAGRAM_LEFT + 24} y={DIAGRAM_TOP - 10} fontFamily={PRETENDARD} fontWeight={700} fontSize={26} fill={INK}>멤브레인 도어 단면</text>

        {LABELS.map((label, i) => {
          const activation = ACTIVATIONS[i](frame);
          const textColor = mixColor(INACTIVE_TEXT, INK, activation);
          const accentColor = mixColor(INACTIVE_LINE, ACCENT, activation);
          const boxY = DIAGRAM_TOP + DIAGRAM_HEIGHT * label.t - 30;
          const lineY = DIAGRAM_TOP + DIAGRAM_HEIGHT * label.t;
          return (
            <g key={i} opacity={frameOpacity}>
              <line
                x1={DIAGRAM_LEFT + TOTAL_WIDTH + 4}
                y1={lineY}
                x2={LABEL_X}
                y2={lineY}
                stroke={accentColor}
                strokeWidth={activation > 0.5 ? 3 : 2}
              />
              <rect
                x={LABEL_X}
                y={boxY}
                width={260}
                height={60}
                fill="none"
                stroke={accentColor}
                strokeDasharray="6 6"
                strokeWidth={activation > 0.5 ? 3 : 2}
              />
              <rect x={LABEL_X + 14} y={boxY + 24} width={12} height={12} fill={label.color} stroke={label.stroke} strokeWidth={1} />
              <text x={LABEL_X + 36} y={boxY + 36} fontFamily={PRETENDARD} fontWeight={700} fontSize={26} fill={textColor}>
                {label.text}
              </text>
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

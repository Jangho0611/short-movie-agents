import { interpolate, useCurrentFrame } from 'remotion';

const FADE_FRAMES = 5;

type Segment = { text: string; start: number; end: number };

// Splits `lines` across [0, totalFrames) proportional to character length.
// No STT/phoneme analysis -- simple, deterministic, good enough for a
// shorts caption cadence tied to TTS duration.
function distribute(lines: string[], totalFrames: number): Segment[] {
  const weights = lines.map((l) => l.length);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let cursor = 0;
  return lines.map((text, i) => {
    const start = cursor;
    const share = Math.round((weights[i] / totalWeight) * totalFrames);
    const end = i === lines.length - 1 ? totalFrames : Math.min(totalFrames, start + share);
    cursor = end;
    return { text, start, end };
  });
}

export const SceneCaptions: React.FC<{ lines: string[]; totalFrames: number }> = ({ lines, totalFrames }) => {
  const frame = useCurrentFrame();
  const segments = distribute(lines, totalFrames);
  const active = segments.find((s) => frame >= s.start && frame < s.end);
  const top =
    lines[0] === '뒤틀린 하지재를 그대로 사용하면' || lines[0] === '명칭 규격과 실제 치수는' ? 65 : 130;

  if (!active) return null;

  const opacity = interpolate(
    frame,
    [active.start, active.start + FADE_FRAMES, active.end - FADE_FRAMES, active.end],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: active.text.includes('\n') ? 10 : 60,
        right: active.text.includes('\n') ? 10 : 60,
        top,
        display: 'flex',
        justifyContent: 'center',
        opacity,
      }}
    >
      <div
        style={{
          color: '#1e1e1e',
          // Sosong final captions used 34px in a 720px-wide composition.
          // 51px preserves the same visual size at this composition's 1080px width.
          fontSize: 51,
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.35,
          whiteSpace: 'pre-line',
          textShadow: '0 1px 2px rgba(0,0,0,0.15)',
        }}
      >
        {active.text}
      </div>
    </div>
  );
};

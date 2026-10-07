import {interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';

const FADE_FRAMES = 5;

type Segment = {text: string; start: number; end: number};

const distribute = (lines: string[], totalFrames: number): Segment[] => {
  const weights = lines.map((line) => line.length);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = 0;

  return lines.map((text, index) => {
    const start = cursor;
    const share = Math.round((weights[index] / totalWeight) * totalFrames);
    const end = index === lines.length - 1 ? totalFrames : Math.min(totalFrames, start + share);
    cursor = end;
    return {text, start, end};
  });
};

export const SceneCaptionsV2: React.FC<{lines: string[]; totalFrames: number}> = ({lines, totalFrames}) => {
  const frame = useCurrentFrame();
  const active = distribute(lines, totalFrames).find((segment) => frame >= segment.start && frame < segment.end);

  if (!active) return null;

  const opacity = interpolate(
    frame,
    [active.start, active.start + FADE_FRAMES, active.end - FADE_FRAMES, active.end],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: active.text.includes('\n') ? 10 : 60,
        right: active.text.includes('\n') ? 10 : 60,
        top: 130,
        display: 'flex',
        justifyContent: 'center',
        opacity,
      }}
    >
      <div
        style={{
          color: '#1e1e1e',
          fontFamily: PRETENDARD,
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

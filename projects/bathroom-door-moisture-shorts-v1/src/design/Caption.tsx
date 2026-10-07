import {interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './fonts';

type CaptionProps = {
  lines: string[];
  durationInFrames: number;
  bg?: string;
  color?: string;
};

export const Caption: React.FC<CaptionProps> = ({
  lines,
  durationInFrames,
  bg = 'rgba(0,0,0,0.82)',
  color = '#FFFFFF',
}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [durationInFrames - 8, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = Math.min(fadeIn, fadeOut);
  const translateY = interpolate(frame, [0, 8], [12, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const transformStyle = 'translate(-50%, 0) translateY(' + translateY + 'px)';

  return (
    <div
      style={{
        position: 'absolute',
        top: 220,
        left: '50%',
        transform: transformStyle,
        opacity,
        backgroundColor: bg,
        borderRadius: 24,
        padding: '20px 32px',
        maxWidth: 920,
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: PRETENDARD,
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

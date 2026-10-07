import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {SCENE6} from './brief';
import {PRETENDARD} from '../design/fonts';
import {COLORS, MOTION, TYPOGRAPHY} from '../design/tokens';

const emphasisScale = (
  frame: number,
  startFrame: number,
  peakFrame: number,
  endFrame: number,
) =>
  interpolate(
    frame,
    [startFrame, peakFrame, endFrame],
    [1, MOTION.subtleScale, 1],
    {
      easing: Easing.inOut(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

const ComparisonSide: React.FC<{
  src: string;
  label: string;
  scale: number;
  baseScale?: number;
  translateY?: number;
  frame: number;
}> = ({src, label, scale, baseScale = 1, translateY = 0, frame}) => {
  const entryScale = interpolate(frame, [0, 17], [1.02, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
  <div
    style={{
      position: 'relative',
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#66635f',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: `scale(${baseScale * entryScale * scale})`,
          transformOrigin: 'top center',
        }}
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: 410,
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '12px 22px 14px',
        borderRadius: 14,
        backgroundColor: 'rgba(246, 245, 244, 0.97)',
        border: `1px solid ${COLORS.hairline}`,
        color: COLORS.daesanGreen,
        fontFamily: PRETENDARD,
        fontSize: TYPOGRAPHY.comparisonLabel.fontSize,
        fontWeight: TYPOGRAPHY.comparisonLabel.fontWeight,
        lineHeight: TYPOGRAPHY.comparisonLabel.lineHeight,
        letterSpacing: TYPOGRAPHY.comparisonLabel.letterSpacing,
        whiteSpace: 'nowrap',
        boxShadow: '0 3px 14px rgba(0, 0, 0, 0.22)',
      }}
    >
      {label}
    </div>
  </div>
  );
};

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const leftScale = emphasisScale(frame, 24, 38, 52);
  const rightScale = emphasisScale(frame, 58, 72, 86);
  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#202020',
      }}
    >
      <ComparisonSide
        src="references/scene06-wallpaper-nevari-v3.png"
        label={SCENE6.leftLabel}
        scale={leftScale}
        frame={frame}
      />
      <ComparisonSide
        src="references/scene06-paint-mesh-putty-v3.png"
        label={SCENE6.rightLabel}
        scale={rightScale}
        frame={frame}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: 2,
          transform: 'translateX(-1px)',
          backgroundColor: 'rgba(255, 255, 255, 0.42)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

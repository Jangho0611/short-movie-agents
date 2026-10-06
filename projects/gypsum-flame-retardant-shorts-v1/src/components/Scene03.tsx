import {
  AbsoluteFill,
  Audio,
  Easing,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, MOTION, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

// Measured from public/assets/audio/tts-scene3.mp3.
export const SCENE03_DURATION_SECONDS = 3.36;
// Integer-frame rounding for the existing 30 fps compositions (101 frames).
export const SCENE03_DURATION = Math.round(SCENE03_DURATION_SECONDS * 30);

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const underlineProgress = interpolate(
    frame,
    [Math.round(0.9 * fps), Math.round(0.9 * fps) + MOTION.entryFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.25, 1, 0.5, 1),
    },
  );

  return (
    <AbsoluteFill
      style={{backgroundColor: COLORS.canvas, color: COLORS.ink, fontFamily: PRETENDARD}}
    >
      <Audio src={staticFile('assets/audio/tts-scene3.mp3')} />
      <div
        style={{
          position: 'absolute',
          top: SAFE_AREA.topBoundary + 96,
          left: SAFE_AREA.horizontal,
          right: SAFE_AREA.horizontal,
          ...TYPOGRAPHY.caption,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <div>방화석고와 방염은</div>
        <div style={{marginTop: 28}}>
          확인하는 기준이{' '}
          <span style={{position: 'relative', display: 'inline-block'}}>
            다릅니다
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -12,
                height: 6,
                borderRadius: 3,
                backgroundColor: COLORS.daesanGreen,
                transform: `scaleX(${underlineProgress})`,
                transformOrigin: 'left center',
              }}
            />
          </span>
        </div>
      </div>
      <OffthreadVideo
        src={staticFile('assets/video/scene02-daesan-gesture-alpha.webm')}
        transparent
        muted
        trimAfter={Math.ceil(SCENE03_DURATION_SECONDS * fps)}
        style={{
          position: 'absolute',
          bottom: 180,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 560,
          width: 403.2,
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

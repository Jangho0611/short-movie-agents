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

export const SCENE02_DURATION_SECONDS = 4.656;
// The existing 30 fps compositions require integer frames: 140 = 4.667 s.
// Keep the narration at its original speed and duration.
export const SCENE02_DURATION = Math.round(SCENE02_DURATION_SECONDS * 30);

const TRANSITION_SECONDS = 1.5;
const EASE = Easing.bezier(0.25, 1, 0.5, 1);
const DefinitionIcon: React.FC<{firewall: boolean}> = ({firewall}) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    stroke={COLORS.daesanGreen}
    strokeWidth={2.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{flexShrink: 0}}
  >
    {firewall ? (
      <>
        <path d="M32 5 54 14v17c0 13-10 22-22 28C20 53 10 44 10 31V14Z" />
        <path d="M32 18c2 9 12 12 12 21a12 12 0 0 1-24 0c0-5 3-9 6-12 0 5 2 7 4 8-1-6 3-10 2-17Z" />
      </>
    ) : (
      <>
        <path d="M6 8h42M10 8v44l7-4 7 4 7-4M20 10v29M30 10v23M40 10v15" />
        <path d="M44 25c1 6 11 10 11 18a11 11 0 0 1-22 0c0-4 2-7 5-10 0 4 2 6 4 7-1-5 3-8 2-15Z" />
        <path d="m34 37 23 21m0-21L34 58" />
      </>
    )}
  </svg>
);

const definitions = [
  {term: '방화', description: '불이 번지지 않게 막는 것'},
  {term: '방염', description: '불이 옮겨붙는 걸 늦추고\n잘 꺼지게 하는 것'},
] as const;

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const transitionFrame = Math.round(TRANSITION_SECONDS * fps);
  const showDefinitions = frame >= transitionFrame;
  const transitionProgress = interpolate(
    frame - transitionFrame,
    [0, MOTION.opacityFrames - 1],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE},
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.canvas,
        color: COLORS.ink,
        fontFamily: PRETENDARD,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: SAFE_AREA.horizontal,
        paddingRight: SAFE_AREA.horizontal,
      }}
    >
      <Audio src={staticFile('assets/audio/tts-scene2.mp3')} />
      <OffthreadVideo
        src={staticFile('assets/video/scene02-daesan-gesture-alpha.webm')}
        transparent
        muted
        trimAfter={Math.ceil(SCENE02_DURATION_SECONDS * fps)}
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
      {showDefinitions ? (
        <div
          style={{
            width: '100%',
            padding: '36px 24px',
            borderRadius: 20,
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.hairline}`,
            ...TYPOGRAPHY.caption,
            fontSize: TYPOGRAPHY.caption.fontSize * 0.8,
            textAlign: 'center',
            opacity: 0.92 + 0.08 * transitionProgress,
            transform: `translateY(${12 * (1 - transitionProgress)}px) scale(${MOTION.entryScale - (MOTION.entryScale - 1) * transitionProgress})`,
          }}
        >
          {definitions.map(({term, description}, index) => (
            <div
              key={term}
              style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 18, whiteSpace: 'normal', marginTop: index === 0 ? 0 : 32}}
            >
              <DefinitionIcon firewall={term === '방화'} />
              <span style={{whiteSpace: 'pre-line'}}>
                <span style={{color: COLORS.daesanGreen}}>{term}</span>
                {` = `}
                {description}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            ...TYPOGRAPHY.caption,
            fontSize: TYPOGRAPHY.caption.fontSize * 1.5,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          아닙니다
        </div>
      )}
    </AbsoluteFill>
  );
};

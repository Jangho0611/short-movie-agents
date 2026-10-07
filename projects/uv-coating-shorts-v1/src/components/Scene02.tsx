import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS} from '../design/tokens';

export const SCENE02_DURATION = 196;

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

const enter = (frame: number, start: number, end: number, from = 12) => ({
  opacity: interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  }),
  translateY: interpolate(frame, [start, end], [from, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  }),
});

const ProcessStep: React.FC<{
  label: string;
  start: number;
  activeUntil?: number;
}> = ({label, start, activeUntil}) => {
  const frame = useCurrentFrame();
  const motion = enter(frame, start, start + 15, 10);
  const activeProgress = activeUntil
    ? interpolate(frame, [activeUntil, activeUntil + 6], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  return (
    <div
      style={{
        width: 172,
        opacity: motion.opacity,
        transform: `translateY(${motion.translateY}px)`,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 45,
          fontWeight: 700,
          color: activeUntil
            ? `color-mix(in srgb, ${COLORS.daesanGreen} ${100 - activeProgress * 72}%, ${COLORS.inkSecondary})`
            : COLORS.daesanGreen,
          letterSpacing: '-0.035em',
          lineHeight: 1,
        }}
      >
        {label}
      </div>
      <div
        style={{
          width: 48,
          height: 3,
          margin: '16px auto 0',
          borderRadius: 99,
          background: activeUntil ? '#B8C8BD' : COLORS.daesanGreen,
        }}
      />
    </div>
  );
};

const Connector: React.FC<{start: number; end: number}> = ({start, end}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <div
      style={{
        position: 'relative',
        width: 154,
        height: 2,
        marginTop: 26,
        background: 'rgba(49, 48, 46, 0.12)',
        overflow: 'hidden',
      }}
    >
      <Sequence from={6}>
        <Audio src={staticFile('assets/audio/scene02-tts-v5.wav')} />
      </Sequence>

      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(20, 99, 53, 0.48)',
          transform: `scaleX(${progress})`,
          transformOrigin: 'left center',
        }}
      />
    </div>
  );
};

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const board = enter(frame, 0, 15, 16);
  const caption = enter(frame, 17, 30, 8);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F8F7F3 0%, #F3F2ED 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          display: 'flex',
          justifyContent: 'center',
          opacity: caption.opacity,
          transform: `translateY(${caption.translateY}px)`,
        }}
      >
        <div
          style={{
            width: 'fit-content',
            maxWidth: 900,
            padding: '24px 38px 28px',
            borderRadius: 20,
            background: 'rgba(250, 241, 234, 0.96)',
            border: '1px solid rgba(173, 143, 122, 0.28)',
            boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)',
            textAlign: 'center',
            fontSize: 50,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.2,
          }}
        >
          <div style={{whiteSpace: 'nowrap'}}>일반 원판은 산 뒤에도,</div>
          <div style={{marginTop: 7, whiteSpace: 'nowrap'}}>
            <span style={{color: COLORS.daesanGreen}}>샌딩하고, 칠하고, 말리는</span>
          </div>
          <div style={{marginTop: 7, whiteSpace: 'nowrap'}}>
            과정이 남습니다.
          </div>
        </div>
      </div>

      <Img
        src={staticFile('assets/images/scene01-raw-birch-plywood.png')}
        style={{
          position: 'absolute',
          left: 260,
          top: 520,
          width: 560,
          height: 780,
          objectFit: 'contain',
          opacity: board.opacity,
          transform: `translateY(${board.translateY}px)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 1390,
          left: 90,
          right: 90,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <ProcessStep label="샌딩" start={70} activeUntil={105} />
        <Connector start={82} end={94} />
        <ProcessStep label="도장" start={105} activeUntil={135} />
        <Connector start={116} end={128} />
        <ProcessStep label="건조" start={135} />
      </div>
    </AbsoluteFill>
  );
};

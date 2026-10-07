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

export const SCENE06_DURATION = 175;

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

const enter = (frame: number, start: number, end: number, from = 10) => ({
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

const Conclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const caption = enter(frame, 8, 22, 8);
  const board = enter(frame, 34, 52, 14);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F8F7F3 0%, #F3F2ED 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <Sequence from={6}>
        <Audio src={staticFile('assets/audio/scene06-tts-v2.wav')} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          zIndex: 2,
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
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.18,
          }}
        >
          <div>사양과 물량에 따라서는</div>
          <div style={{marginTop: 8}}>
            <span style={{color: COLORS.daesanGreen}}>UV코팅판</span>이 더 합리적일 수 있습니다.
          </div>
        </div>
      </div>

      <Img
        src={staticFile('assets/images/scene01-uv-coated-birch-plywood.png')}
        style={{
          position: 'absolute',
          left: 175,
          top: 510,
          width: 730,
          height: 980,
          objectFit: 'contain',
          opacity: board.opacity,
          transform: `translateY(${board.translateY}px)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 408,
          top: 1230,
          width: 264,
          height: 440,
        }}
      >
        <Img
          src={staticFile('assets/images/scene01-small-daesan.png')}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const Scene06: React.FC = () => <Conclusion />;

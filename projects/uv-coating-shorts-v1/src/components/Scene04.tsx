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

export const SCENE04_DURATION = 197;

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();
  const captionOpacity = interpolate(frame, [6, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const captionY = interpolate(frame, [6, 20], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const imageOpacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const imageScale = interpolate(frame, [0, SCENE04_DURATION - 1], [1.015, 1.04], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const imageX = interpolate(frame, [0, SCENE04_DURATION - 1], [7, -7], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

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
        <Audio src={staticFile('assets/audio/scene04-tts-v2.wav')} />
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
          opacity: captionOpacity,
          transform: `translateY(${captionY}px)`,
        }}
      >
        <div
          style={{
            width: 'fit-content',
            maxWidth: 936,
            padding: '24px 38px 28px',
            borderRadius: 20,
            background: 'rgba(250, 241, 234, 0.96)',
            border: '1px solid rgba(173, 143, 122, 0.28)',
            boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)',
            textAlign: 'center',
            fontSize: 55,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.2,
          }}
        >
          <div>반면 UV코팅은 필요한 평면 마감의</div>
          <div style={{marginTop: 7}}>
            상당 부분을 <span style={{color: COLORS.daesanGreen}}>공장에서 미리</span>{' '}
            처리합니다.
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 470,
          left: 72,
          width: 936,
          height: 1280,
          overflow: 'hidden',
          borderRadius: 28,
          background: '#D8D8D4',
          boxShadow: '0 18px 48px rgba(49, 48, 46, 0.16)',
          opacity: imageOpacity,
        }}
      >
        <Img
          src={staticFile('assets/images/scene04-uv-line-v2.png')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '49% center',
            transform: `translateX(${imageX}px) scale(${imageScale})`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

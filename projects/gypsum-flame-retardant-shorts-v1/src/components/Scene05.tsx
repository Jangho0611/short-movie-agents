import {AbsoluteFill, Audio, Img, interpolate, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

export const SCENE05_AUDIO_SECONDS = 4.368;
export const SCENE05_SECONDS = SCENE05_AUDIO_SECONDS + 0.3;
export const SCENE05_DURATION = Math.ceil(SCENE05_SECONDS * 30);

const KenBurnsImage: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENE05_DURATION], [1.0, 1.1], {
    extrapolateRight: 'clamp',
  });
  return (
    <Img
      src={staticFile('assets/images/scene05-start-v3.png')}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}
    />
  );
};

export const Scene05: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, fontFamily: PRETENDARD}}>
    <KenBurnsImage />
    <Audio src={staticFile('assets/audio/tts-scene5.mp3')} />
    <div
      style={{
        position: 'absolute',
        left: SAFE_AREA.horizontal,
        right: SAFE_AREA.horizontal,
        top: SAFE_AREA.captionTop,
        backgroundColor: COLORS.surface,
        borderRadius: 32,
        padding: '40px 48px',
      }}
    >
      <div
        style={{
          ...TYPOGRAPHY.caption,
          fontSize: TYPOGRAPHY.caption.fontSize * 0.7,
          color: COLORS.ink,
          textAlign: 'center',
          letterSpacing: '-0.04em',
        }}
      >
        <div>네, 11층 이상 오피스텔이라면</div>
        <div style={{marginTop: 16}}>벽지·커튼·카펫 모두 방염 기준 확인 대상입니다</div>
      </div>
    </div>
    <OffthreadVideo
      src={staticFile('assets/video/scene02-daesan-gesture-alpha.webm')}
      transparent
      muted
      style={{
        position: 'absolute',
        bottom: 40,
        left: 40,
        width: '30%',
        height: 'auto',
      }}
    />
  </AbsoluteFill>
);

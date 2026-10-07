import {
  AbsoluteFill,
  Audio,
  Easing,
  Freeze,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {COLORS} from '../design/tokens';
import {PRETENDARD} from '../design/fonts';

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

export const Green: React.FC<React.PropsWithChildren> = ({children}) => (
  <span style={{color: COLORS.daesanGreen}}>{children}</span>
);

export const EpisodeScene: React.FC<{
  media: string;
  kind: 'video' | 'image';
  caption: React.ReactNode;
  audio: string;
  durationInFrames: number;
  fontSize?: number;
  videoDurationInFrames?: number;
}> = ({
  media,
  kind,
  caption,
  audio,
  durationInFrames,
  fontSize = 58,
  videoDurationInFrames = 120,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [6, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const translateY = interpolate(frame, [6, 20], [8, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const mediaStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F8F7F3 0%, #F3F2ED 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <Audio src={staticFile(audio)} />

      {kind === 'video' ? (
        <>
          <Sequence durationInFrames={Math.min(durationInFrames, videoDurationInFrames)}>
            <OffthreadVideo src={staticFile(media)} muted style={mediaStyle} />
          </Sequence>
          {durationInFrames > videoDurationInFrames ? (
            <Sequence from={videoDurationInFrames}>
              <Freeze frame={videoDurationInFrames - 1}>
                <OffthreadVideo src={staticFile(media)} muted style={mediaStyle} />
              </Freeze>
            </Sequence>
          ) : null}
        </>
      ) : (
        <Img src={staticFile(media)} style={mediaStyle} />
      )}

      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          opacity,
          transform: `translateY(${translateY}px)`,
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
            fontSize,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.18,
            wordBreak: 'keep-all',
          }}
        >
          {caption}
        </div>
      </div>
    </AbsoluteFill>
  );
};

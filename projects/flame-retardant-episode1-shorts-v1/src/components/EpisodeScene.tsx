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
  videoScale?: number;
  imageZoomTo?: number;
}> = ({
  media,
  kind,
  caption,
  audio,
  durationInFrames,
  fontSize = 58,
  videoDurationInFrames = 120,
  videoScale = 1,
  imageZoomTo = 1,
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
  const videoStyle: React.CSSProperties = {
    ...mediaStyle,
    transform: `scale(${videoScale})`,
    transformOrigin: 'center center',
  };
  const imageScale = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [1, imageZoomTo], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F5F6 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <Audio src={staticFile(audio)} />

      {kind === 'video' ? (
        <>
          <Sequence durationInFrames={Math.min(durationInFrames, videoDurationInFrames)}>
            <OffthreadVideo src={staticFile(media)} muted style={videoStyle} />
          </Sequence>
          {durationInFrames > videoDurationInFrames ? (
            <Sequence from={videoDurationInFrames}>
              <Freeze frame={videoDurationInFrames - 1}>
                <OffthreadVideo src={staticFile(media)} muted style={videoStyle} />
              </Freeze>
            </Sequence>
          ) : null}
        </>
      ) : (
        <Img
          src={staticFile(media)}
          style={{...mediaStyle, transform: `scale(${imageScale})`, transformOrigin: 'center center'}}
        />
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
            padding: '16px 24px',
            borderRadius: 8,
            background: '#F5D9D4',
            border: '1px solid #E7BDB5',
            color: '#000000',
            boxShadow: 'none',
            textAlign: 'center',
            fontSize,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.22,
            wordBreak: 'keep-all',
          }}
        >
          {caption}
        </div>
      </div>
    </AbsoluteFill>
  );
};

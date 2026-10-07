import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';

export const SCENE05_DURATION = 177;

const fade = (frame: number, start: number, end: number, from: number, to: number) =>
  interpolate(frame, [start, end], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

const imageStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const captionOpacity = fade(frame, 6, 20, 0, 1);
  const captionY = fade(frame, 6, 20, 8, 0);

  return (
    <AbsoluteFill style={{backgroundColor: '#DDE1E5', overflow: 'hidden', fontFamily: PRETENDARD}}>
      <Audio src={staticFile('assets/audio/scene05-v2.wav')} />
      <Img
        src={staticFile('assets/images/scene05-start-v2.png')}
        style={{...imageStyle, opacity: fade(frame, 41, 49, 1, 0)}}
      />
      <Img
        src={staticFile('assets/images/scene05-place-v2.png')}
        style={{...imageStyle, opacity: Math.min(fade(frame, 41, 49, 0, 1), fade(frame, 87, 94, 1, 0))}}
      />
      <Img
        src={staticFile('assets/images/scene05-place-v3.png')}
        style={{...imageStyle, opacity: fade(frame, 87, 94, 0, 1)}}
      />
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
            maxWidth: 900,
            padding: '16px 24px',
            borderRadius: 8,
            background: '#F5D9D4',
            border: '1px solid #E7BDB5',
            color: '#000000',
            boxShadow: 'none',
            textAlign: 'center',
            fontSize: 54,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.22,
            wordBreak: 'keep-all',
          }}
        >
          <div>의원·카페·회의실</div>
          <div>정해진 곳엔 방염 의무</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

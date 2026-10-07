import {AbsoluteFill, Audio, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';

export const SCENE05_DURATION_IN_FRAMES = 137;

const CAPTION_TEXT = '우리 아이가 지낼 공간,\n석고보드 원료도 확인해보세요';

export const Scene05Static: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENE05_DURATION_IN_FRAMES - 1], [1, 1.004], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const leftPulse = interpolate(frame, [18, 32, 46], [1, 1.02, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rightPulse = interpolate(frame, [58, 72, 86], [1, 1.02, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Img
        src={staticFile('assets/images/scene05-final.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      />
      {[
        {left: 105, top: 565, size: 245, pulse: leftPulse},
        {left: 430, top: 565, size: 245, pulse: rightPulse},
      ].map(({left, top, size, pulse}) => (
        <div key={left} style={{position: 'absolute', left, top, width: size, height: size, overflow: 'hidden', borderRadius: '50%'}}>
          <Img
            src={staticFile('assets/images/scene05-final.png')}
            style={{
              position: 'absolute',
              left: -left,
              top: -top,
              width: 1080,
              height: 1890,
              transform: `scale(${pulse})`,
              transformOrigin: `${left + size / 2}px ${top + size / 2}px`,
            }}
          />
        </div>
      ))}
      <Audio src={staticFile('assets/audio/scene05-tts-final-v4.mp3')} />
      <div style={{position: 'absolute', top: 1600, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION_TEXT]} totalFrames={SCENE05_DURATION_IN_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};

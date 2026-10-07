import {AbsoluteFill, Audio, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';

export const SCENE04_DURATION_IN_FRAMES = 122;

const CAPTION_TEXT = '자이 천연석고보드\n천연석고 100% 사용';

export const Scene04Static: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENE04_DURATION_IN_FRAMES - 1], [1, 1.003], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Img
        src={staticFile('assets/images/scene04-final.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      />
      <Audio src={staticFile('assets/audio/scene04-tts-final-v4.mp3')} />
      <div style={{position: 'absolute', top: 1600, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION_TEXT]} totalFrames={SCENE04_DURATION_IN_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};

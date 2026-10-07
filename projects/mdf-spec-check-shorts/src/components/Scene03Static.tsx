import {AbsoluteFill, Audio, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';

export const SCENE03_DURATION_IN_FRAMES = 142;

const CAPTION_TEXT = '벽 속에 들어가면\n원료 차이는 보이지 않습니다';

export const Scene03Static: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENE03_DURATION_IN_FRAMES - 1], [1, 1.003], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Img
        src={staticFile('assets/images/scene03-final.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      />
      <Audio src={staticFile('assets/audio/scene03-tts-final-v5.mp3')} />
      <div style={{position: 'absolute', top: 1450, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION_TEXT]} totalFrames={SCENE03_DURATION_IN_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};

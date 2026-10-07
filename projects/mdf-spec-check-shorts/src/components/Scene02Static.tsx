import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';

export const SCENE02_DURATION_IN_FRAMES = 207;

const CAPTION_TEXT = '천연광물과 배연탈황석고\n원료의 출발점이 다릅니다';

export const Scene02Static: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene02-veo-v1.mp4')}
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
        }}
      />
      <Audio src={staticFile('assets/audio/scene02-tts-final-v4.mp3')} />
      <div style={{position: 'absolute', top: 1600, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION_TEXT]} totalFrames={SCENE02_DURATION_IN_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};

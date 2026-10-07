import {AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';

export const SCENE01_DURATION_IN_FRAMES = 144;

const CAPTION_TEXT = '겉보기엔 똑같아 보여도\n속은 다를 수 있어요';

export const Scene01Video: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene01-hook-veo-v2.mp4')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
        }}
      />
      <Audio src={staticFile('assets/audio/scene01-tts-final-v8-part1.mp3')} />
      <Sequence from={54} layout="none">
        <Audio src={staticFile('assets/audio/scene01-tts-final-v8-part2.mp3')} />
      </Sequence>
      <div style={{position: 'absolute', top: 1600, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION_TEXT]} totalFrames={SCENE01_DURATION_IN_FRAMES} />
      </div>
    </AbsoluteFill>
  );
};

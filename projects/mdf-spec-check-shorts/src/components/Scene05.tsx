import {AbsoluteFill, Video, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {SceneCaptionsV2} from './SceneCaptionsV2';
import {PRETENDARD} from '../scene5/fonts';

const CAPTION = '다음번 MDF 사실 땐\n밀도가 540급이 맞는지 물어보세요';

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacity = interpolate(frame, [0, 5, durationInFrames - 5, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Video muted src={staticFile('assets/video/scene05-flow-final.mp4')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      <div style={{position: 'absolute', top: 220, left: '50%', transform: 'translateX(-50%)',
        width: 'max-content', padding: 32, borderRadius: 24, backgroundColor: '#c8e6cd', opacity}}>
        {/* Invisible text sizes the background to the unchanged caption typography. */}
        <div aria-hidden style={{visibility: 'hidden', fontFamily: PRETENDARD, fontSize: 51,
          fontWeight: 700, lineHeight: 1.35, whiteSpace: 'pre-line', textAlign: 'center'}}>{CAPTION}</div>
      </div>
      <div style={{position: 'absolute', top: 122, left: 0, right: 0}}>
        <SceneCaptionsV2 lines={[CAPTION]} totalFrames={durationInFrames} />
      </div>
    </AbsoluteFill>
  );
};

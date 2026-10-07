import {AbsoluteFill, Sequence, Video, staticFile} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {SCENE1} from './brief';

// Scene 1: Flow 훅
// Duration: 4초 (96 frames @ 24fps)
// Message: "천연석고, 먹어도 되는 걸까요?"
// Uses original Flow MP4 file as-is (no re-encoding)

export const Scene1: React.FC = () => {
  return (
    <AbsoluteFill>
      <Video muted src={staticFile('assets/video/scene01-flow-trimmed-v1.mp4')} />
      <Sequence durationInFrames={57}>
        <TopTitle><div>단열 시공 후</div><div>석고보드까지?</div></TopTitle>
      </Sequence>
      <Sequence from={57} durationInFrames={SCENE1.durationInFrames - 57}>
        <TopTitle><div>이보드는</div><div>조금 다릅니다</div></TopTitle>
      </Sequence>
    </AbsoluteFill>
  );
};

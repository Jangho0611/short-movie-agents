import { AbsoluteFill, Video, staticFile } from 'remotion';

// Scene 1: Flow 훅
// Duration: 4초 (96 frames @ 24fps)
// Message: "천연석고, 먹어도 되는 걸까요?"
// Uses original Flow MP4 file as-is (no re-encoding)

export const Scene1: React.FC = () => {
  return (
    <AbsoluteFill>
      <Video muted src={staticFile('assets/video/scene01-flow-v1.mp4')} />
    </AbsoluteFill>
  );
};

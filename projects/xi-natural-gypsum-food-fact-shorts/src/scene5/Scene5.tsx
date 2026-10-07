import { AbsoluteFill, Video, staticFile } from 'remotion';

// Scene 5: 천연석고 원석 → 작은 대산이 → 실제 자이 천연석고보드
// Duration: 6.0초 (144 frames @ 24fps)
// Uses original Flow MP4 file as-is (no re-encoding)

export const Scene5: React.FC = () => {
  return (
    <AbsoluteFill>
      <Video muted src={staticFile('assets/video/scene05-flow-v1.mp4')} />
    </AbsoluteFill>
  );
};

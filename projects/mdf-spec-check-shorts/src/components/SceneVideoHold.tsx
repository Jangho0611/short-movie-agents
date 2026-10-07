import { Freeze, OffthreadVideo, staticFile, useCurrentFrame } from 'remotion';

// Plays a scene's confirmed video source at its native length, then holds
// (freezes) its last frame for the remainder of the scene's TTS-driven
// duration. Never loops back to the start (which would re-expose a
// trimmed-out problem region for Scene 2/4).
export const SceneVideoHold: React.FC<{ src: string; nativeFrames: number }> = ({ src, nativeFrames }) => {
  const frame = useCurrentFrame();
  const clamped = Math.min(frame, nativeFrames - 1);

  return (
    <Freeze frame={clamped}>
      <OffthreadVideo
        src={staticFile(src)}
        muted
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Freeze>
  );
};

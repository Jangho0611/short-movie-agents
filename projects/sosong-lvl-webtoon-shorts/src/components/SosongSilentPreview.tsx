import { AbsoluteFill, OffthreadVideo, Series, staticFile } from 'remotion';
import { Scene5Ending } from '../scene5/Scene5Ending';

// Silent flow-check preview: Scene 1-5 confirmed sources, back to back, no
// audio and no captions. Native frame length per source, no hold-frame
// extension (nothing to sync against yet).
const SCENE1_FRAMES = 96; // public/assets/video/scene01-veo-test-v2.mp4 (no confirmed "-final-" file exists yet)
const SCENE2_FRAMES = 60; // scene02-veo-final-v1-trimmed.mp4
const SCENE3_FRAMES = 96; // scene03-veo-final-fixed-v2.mp4
const SCENE4_FRAMES = 57; // scene04-veo-final-trimmed.mp4
const SCENE5_FRAMES = 136; // Scene5Ending (ported, 24fps-scaled)

export const SosongSilentPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#ffffff' }}>
      <Series>
        <Series.Sequence durationInFrames={SCENE1_FRAMES}>
          <OffthreadVideo
            src={staticFile('assets/video/scene01-veo-test-v2.mp4')}
            muted
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE2_FRAMES}>
          <OffthreadVideo
            src={staticFile('assets/video/scene02-veo-final-v1-trimmed.mp4')}
            muted
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE3_FRAMES}>
          <OffthreadVideo
            src={staticFile('assets/video/scene03-veo-final-fixed-v2.mp4')}
            muted
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE4_FRAMES}>
          <OffthreadVideo
            src={staticFile('assets/video/scene04-veo-final-trimmed.mp4')}
            muted
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE5_FRAMES}>
          <Scene5Ending />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export const SOSONG_SILENT_PREVIEW_TOTAL_FRAMES =
  SCENE1_FRAMES + SCENE2_FRAMES + SCENE3_FRAMES + SCENE4_FRAMES + SCENE5_FRAMES;

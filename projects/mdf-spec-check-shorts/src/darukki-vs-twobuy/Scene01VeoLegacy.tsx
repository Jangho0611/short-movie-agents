import {AbsoluteFill, Audio, interpolate, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';

// Adopted Scene 1 final candidate: generated via the sosong 1탄/2탄 legacy
// Veo call structure (scripts/generate-vertex-video.mjs), single-shot,
// image-locked on public/references/scene01-veo-simple-start-v1.png.
// See 26.08.13수정.md ("Scene 1 최종 방식 갱신") for the adoption record.
// Caption/TTS updated 2026-08-14 to match the finalized 6-scene story
// (see 26.08.14작업기록.md, "최종 6씬 스토리 구조 확정").
export const SCENE01_VEO_LEGACY_FPS = 30;
// Source clip is 4.0s @ 24fps. At the 30fps composition rate that spans 120 frames.
export const SCENE01_VEO_LEGACY_DURATION_IN_FRAMES = 120;

export const Scene01VeoLegacy: React.FC = () => {
  const frame = useCurrentFrame();
  const captionOpacity = interpolate(
    frame,
    [0, 6, SCENE01_VEO_LEGACY_DURATION_IN_FRAMES - 7, SCENE01_VEO_LEGACY_DURATION_IN_FRAMES - 1],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene01-veo-claude-legacy-test-v1.mp4')}
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 130,
          left: 60,
          right: 60,
          color: '#1e1e1e',
          fontFamily: PRETENDARD,
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.3,
          textAlign: 'center',
          whiteSpace: 'pre-line',
          textShadow: '0 1px 2px rgba(0,0,0,0.15)',
          opacity: captionOpacity,
        }}
      >
        {'다루끼랑 투바이,\n크기만 다른 걸까?'}
      </div>

      <Audio src={staticFile('assets/audio/scene01-tts-final-v5.mp3')} />
    </AbsoluteFill>
  );
};

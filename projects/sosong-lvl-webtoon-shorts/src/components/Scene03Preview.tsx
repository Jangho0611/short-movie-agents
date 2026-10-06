import {AbsoluteFill, Img, OffthreadVideo, staticFile} from 'remotion';

// Fixed patch location matching the flickering exclamation mark inside
// scene03-veo-test-v1.mp4, measured in the video's native 720x1280 space.
const MARK_LEFT = 438;
const MARK_TOP = 453;
const MARK_WIDTH = 44;
const MARK_HEIGHT = 60;

export const Scene03Preview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene03-veo-test-v1.mp4')}
        muted
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
      />

      {/* Mask: a clean patch cloned from a later (mark-free) frame of the
          same clip, covering the flickering original mark for the whole scene. */}
      <Img
        src={staticFile('assets/images/scene03-exclaim-patch.png')}
        style={{
          position: 'absolute',
          left: MARK_LEFT,
          top: MARK_TOP,
          width: MARK_WIDTH,
          height: MARK_HEIGHT,
        }}
      />

      {/* Fixed hand-drawn-style red exclamation mark, static for the whole scene. */}
      <svg
        viewBox="0 0 20 60"
        style={{
          position: 'absolute',
          left: MARK_LEFT + 6,
          top: MARK_TOP + 2,
          width: 18,
          height: 46,
          overflow: 'visible',
        }}
      >
        <path
          d="M 8,2 C 6,2 4.6,3.6 4.8,7.5 L 6.6,30 C 6.8,33.5 9.4,33.5 9.6,30 L 11.8,7 C 12,3.4 10,2 8,2 Z"
          fill="#df432c"
        />
        <ellipse cx="8.2" cy="40" rx="3.4" ry="3.8" fill="#df432c" />
      </svg>
    </AbsoluteFill>
  );
};

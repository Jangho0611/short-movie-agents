import {AbsoluteFill, OffthreadVideo, staticFile} from 'remotion';

// Fixed patch/mark locations for the two flickering symbols inside
// scene03-veo-final-v1.mp4, measured in the video's native 720x1280 space.
// EXCLAIM box re-measured directly from pixel clusters across 32 sampled
// frames (0-4s) of the source video; perimeter confirmed pure white on
// every sampled frame, well clear of both characters and the batten edge.
const EXCLAIM_LEFT = 328;
const EXCLAIM_TOP = 282;
const EXCLAIM_WIDTH = 44;
const EXCLAIM_HEIGHT = 106;

const QUESTION_LEFT = 575;
const QUESTION_TOP = 382;
const QUESTION_WIDTH = 55;
const QUESTION_HEIGHT = 52;

export const Scene03FinalPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene03-veo-final-v1.mp4')}
        muted
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
      />

      {/* Mask 1: the "!" region sits on plain white background for its
          entire bounding box (verified across 32 sampled frames spanning
          0-4s, perimeter pure white on every frame), so a solid white
          patch is enough to cover the flickering original mark -- no
          cloned texture needed since there is no wood grain here. */}
      <div
        style={{
          position: 'absolute',
          left: EXCLAIM_LEFT,
          top: EXCLAIM_TOP,
          width: EXCLAIM_WIDTH,
          height: EXCLAIM_HEIGHT,
          backgroundColor: '#ffffff',
        }}
      />

      {/* Fixed hand-drawn-style red exclamation mark, static for the whole scene. */}
      <svg
        viewBox="0 0 20 60"
        style={{
          position: 'absolute',
          left: EXCLAIM_LEFT + 8,
          top: EXCLAIM_TOP + 4,
          width: 29,
          height: 94,
          overflow: 'visible',
        }}
      >
        <path
          d="M 8,2 C 6,2 4.6,3.6 4.8,7.5 L 6.6,30 C 6.8,33.5 9.4,33.5 9.6,30 L 11.8,7 C 12,3.4 10,2 8,2 Z"
          fill="#df432c"
        />
        <ellipse cx="8.2" cy="40" rx="3.4" ry="3.8" fill="#df432c" />
      </svg>

      {/* Mask 2: the "?" sits on plain white background for its entire
          bounding box (verified across the clip), so a solid white patch
          is enough to cover the flickering original mark. */}
      <div
        style={{
          position: 'absolute',
          left: QUESTION_LEFT,
          top: QUESTION_TOP,
          width: QUESTION_WIDTH,
          height: QUESTION_HEIGHT,
          backgroundColor: '#ffffff',
        }}
      />

      {/* Fixed hand-drawn-style black question mark, static for the whole scene. */}
      <svg
        viewBox="0 0 45 52"
        style={{
          position: 'absolute',
          left: QUESTION_LEFT + 6,
          top: QUESTION_TOP + 2,
          width: 40,
          height: 46,
          overflow: 'visible',
        }}
      >
        <path
          d="M 15,11 C 14,3 30,2 34,10 C 38,18 29,20 25,25 C 22,28.5 22,32 22,35"
          stroke="#141414"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="22" cy="45" rx="3.4" ry="3.7" fill="#141414" />
      </svg>
    </AbsoluteFill>
  );
};

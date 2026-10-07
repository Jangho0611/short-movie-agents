import {AbsoluteFill, OffthreadVideo, staticFile} from 'remotion';

// scene04-veo-final-v1.mp4 grew an extra black dashed/curved effect line
// floating in the white margin to the left of the caliper's left jaw
// (not present in the reference image). Measured directly against 32
// sampled frames spanning the whole 4s clip; this box's 2px perimeter
// stayed pure white/near-white on every sampled frame (worst pixel value
// 96, a hair of the dash's own antialiased tip, not real content), so a
// solid white patch safely covers it without touching the caliper.
const DASH_LEFT = 195;
const DASH_TOP = 660;
const DASH_WIDTH = 73;
const DASH_HEIGHT = 133;

export const Scene04FinalPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene04-veo-final-v1.mp4')}
        muted
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
      />

      {/* Mask: covers only the stray dashed/curved effect line in the open
          white margin left of the caliper jaw. Deliberately does not reach
          the caliper's structural outline to avoid damaging it. */}
      <div
        style={{
          position: 'absolute',
          left: DASH_LEFT,
          top: DASH_TOP,
          width: DASH_WIDTH,
          height: DASH_HEIGHT,
          backgroundColor: '#ffffff',
        }}
      />
    </AbsoluteFill>
  );
};

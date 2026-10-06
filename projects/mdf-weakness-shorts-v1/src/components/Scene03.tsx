import {AbsoluteFill, Easing, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const SCENE03_DURATION = 179;
export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  // Source frame 38 is the last frame before Flow invents a new top face.
  const holdAt = Math.round(38 / 24 * fps);
  const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
  const absorbed = interpolate(frame, [holdAt, holdAt + Math.round(0.22 * fps)], [0, 1], clamp);
  const stain = interpolate(frame, [holdAt + Math.round(0.12 * fps), holdAt + Math.round(0.95 * fps)], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={holdAt}>
        <OffthreadVideo src={staticFile('references/flow-raw/scene3-flow-raw-v1.mp4')} muted style={{width: '100%', height: '100%'}} />
      </Sequence>
      <Sequence from={holdAt}>
        <Img src={staticFile('references/scene3-contact-hold-v1.png')} style={{width: '100%', height: '100%'}} />
        {/* Restore only the droplet area from the same shot's clean background. */}
        <AbsoluteFill style={{clipPath: 'inset(690px 160px 747px 650px)', opacity: absorbed}}>
          <Img src={staticFile('references/scene3-flow-clean-background-v1.png')} style={{width: '100%', height: '100%'}} />
        </AbsoluteFill>
        <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0}}>
          <defs>
            <radialGradient id="absorbed-stain"><stop offset="0" stopColor="#493423" stopOpacity="1" /><stop offset="0.65" stopColor="#493423" stopOpacity="0.7" /><stop offset="1" stopColor="#493423" stopOpacity="0" /></radialGradient>
            <radialGradient id="soft-light"><stop offset="0" stopColor="#FFF1D7" stopOpacity="0.12" /><stop offset="1" stopColor="#FFF1D7" stopOpacity="0" /></radialGradient>
            <radialGradient id="soft-shadow"><stop offset="0" stopColor="#493423" stopOpacity="0.07" /><stop offset="1" stopColor="#493423" stopOpacity="0" /></radialGradient>
          </defs>
          <g opacity={stain}>
            <ellipse cx="729" cy="1190" rx="23" ry="14" fill="url(#absorbed-stain)" opacity="0.18" />
            <ellipse cx="729" cy="1184" rx="16" ry="5" fill="url(#soft-light)" />
            <ellipse cx="729" cy="1199" rx="18" ry="5" fill="url(#soft-shadow)" />
          </g>
        </svg>
      </Sequence>
    </AbsoluteFill>
  );
};

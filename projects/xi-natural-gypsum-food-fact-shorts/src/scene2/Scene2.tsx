import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

// Scene 2: 두부 + 식품용 황산칼슘 정보컷
// Duration: 6.5초 (156 frames @ 24fps)
// Motion: 미세한 emphasis on tofu, then mild powder bowl emphasis

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const durationFrames = 156;

  // Define two emphasis windows:
  // Frames 0-52: Tofu emphasis
  // Frames 65-145: Powder bowl emphasis

  // Tofu emphasis: 1.5% scale swing
  const tofuEmphasisStart = 0;
  const tofuEmphasisPeak = 26;
  const tofuEmphasisEnd = 52;

  const tofuScale = interpolate(
    frame,
    [tofuEmphasisStart, tofuEmphasisPeak, tofuEmphasisEnd],
    [1.0, 1.015, 1.0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.ease) }
  );

  // Powder bowl emphasis: 1.0% subtle scale
  const powderEmphasisStart = 65;
  const powderEmphasisPeak = 105;
  const powderEmphasisEnd = 145;

  const powderScale = interpolate(
    frame,
    [powderEmphasisStart, powderEmphasisPeak, powderEmphasisEnd],
    [1.0, 1.01, 1.0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.ease) }
  );

  // For now, use a simple unified scale that applies subtle motion
  // This is a placeholder approach — the actual emphasis regions
  // would be applied via CSS transforms if specific elements need highlighting
  const combinedScale = interpolate(
    frame,
    [0, tofuEmphasisEnd, powderEmphasisStart, powderEmphasisEnd, durationFrames],
    [1.0, tofuScale, 1.0, powderScale, 1.0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Img
        src={staticFile('references/scene02-base-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: `scale(${combinedScale})`,
          transformOrigin: 'center',
        }}
      />
    </AbsoluteFill>
  );
};

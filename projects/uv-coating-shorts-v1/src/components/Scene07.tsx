import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {ENDING} from '../ending/brief';
import {EASING_SETTLE, EASING_STANDARD, ENDING_TYPOGRAPHY} from '../ending/tokens';

export const SCENE07_DURATION = ENDING.durationInFrames;

const EASE = Easing.bezier(...EASING_STANDARD);
const EASE_SETTLE = Easing.bezier(...EASING_SETTLE);
const LOGO_SIZE = 260;
const TRUST_FONT_SIZE = 28;
const TRUST_LINE_HEIGHT = Math.round(TRUST_FONT_SIZE * 1.2);
const BRAND_COPY_GAP = 10;
const TAGLINE_HEIGHT = ENDING_TYPOGRAPHY.cardLabel.fontSize;
const BRAND_HEIGHT = ENDING_TYPOGRAPHY.hero.fontSize * 1.3 * 0.92;
const BLOCK_C_HEIGHT = TAGLINE_HEIGHT + BRAND_COPY_GAP + BRAND_HEIGHT;
const BLOCK_C_OFFSET = 20;
const BLOCK_B_OFFSET =
  BLOCK_C_OFFSET - (BLOCK_C_HEIGHT / 2 + 48 + TRUST_LINE_HEIGHT / 2);
const BLOCK_A_OFFSET =
  BLOCK_B_OFFSET - (TRUST_LINE_HEIGHT / 2 + 32 + LOGO_SIZE / 2);

export const Scene07: React.FC = () => {
  const frame = useCurrentFrame();
  const logoOpacity = interpolate(
    frame,
    [ENDING.logo.enterStart, ENDING.logo.enterEnd],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE},
  );
  const logoTranslateY = interpolate(
    frame,
    [ENDING.logo.enterStart, ENDING.logo.enterEnd],
    [-20, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE},
  );
  const logoPunchFrame =
    ENDING.logo.enterStart +
    Math.round((ENDING.logo.enterEnd - ENDING.logo.enterStart) * 0.6);
  const logoScale =
    frame < logoPunchFrame
      ? interpolate(frame, [ENDING.logo.enterStart, logoPunchFrame], [0.9, 1.02], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: EASE,
        })
      : interpolate(frame, [logoPunchFrame, ENDING.logo.enterEnd], [1.02, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: EASE_SETTLE,
        });

  return (
    <AbsoluteFill
      style={{background: 'linear-gradient(135deg, #F3EEE5 0%, #E0C9A8 100%)'}}
    >
      <Img
        src={staticFile('assets/logos/daesanlogo2.png')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: LOGO_SIZE,
          height: LOGO_SIZE,
          objectFit: 'contain',
          opacity: logoOpacity,
          transform: `translate(-50%, -50%) translateY(${BLOCK_A_OFFSET + logoTranslateY}px) scale(${logoScale})`,
        }}
      />
    </AbsoluteFill>
  );
};

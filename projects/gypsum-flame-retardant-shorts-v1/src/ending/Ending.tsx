import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  interpolateColors,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {ENDING} from './brief';
import {
  EASING_SETTLE,
  EASING_STANDARD,
  ENDING_COLORS,
  ENDING_TYPOGRAPHY,
} from './tokens';

const EASE = Easing.bezier(...EASING_STANDARD);
const EASE_SETTLE = Easing.bezier(...EASING_SETTLE);
const GRADIENT_BG = 'linear-gradient(135deg, #F3EEE5 0%, #E0C9A8 100%)';
const LOGO_SIZE = 260;
const TRUST_FONT_SIZE = 28;
const TRUST_LINE_HEIGHT = Math.round(TRUST_FONT_SIZE * 1.2);
const TRUST_START_SCALE = 1.8;
const TRUST_START_OFFSET = 180;
const BRAND_COPY_GAP = 10;
const TAGLINE_HEIGHT = ENDING_TYPOGRAPHY.cardLabel.fontSize;
const BRAND_HEIGHT = ENDING_TYPOGRAPHY.hero.fontSize * 1.3 * 0.92;
const BLOCK_C_HEIGHT = TAGLINE_HEIGHT + BRAND_COPY_GAP + BRAND_HEIGHT;
const BLOCK_C_OFFSET = 20;
const BLOCK_B_OFFSET =
  BLOCK_C_OFFSET - (BLOCK_C_HEIGHT / 2 + 48 + TRUST_LINE_HEIGHT / 2);
const BLOCK_A_OFFSET =
  BLOCK_B_OFFSET - (TRUST_LINE_HEIGHT / 2 + 32 + LOGO_SIZE / 2);

export const Ending: React.FC = () => {
  const frame = useCurrentFrame();
  const trustOpacity = interpolate(frame, [ENDING.trust.enterStart, ENDING.trust.enterEnd], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE,
  });
  const trustScale = interpolate(frame, [ENDING.trust.enterStart, ENDING.trust.enterEnd, ENDING.trust.holdEnd, ENDING.trust.shrinkEnd], [TRUST_START_SCALE, TRUST_START_SCALE, TRUST_START_SCALE, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE,
  });
  const trustPositionY = interpolate(frame, [ENDING.trust.enterStart, ENDING.trust.enterEnd, ENDING.trust.holdEnd, ENDING.trust.shrinkEnd], [TRUST_START_OFFSET, TRUST_START_OFFSET, TRUST_START_OFFSET, BLOCK_B_OFFSET], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE,
  });
  const trustColor = interpolateColors(frame, [ENDING.trust.holdEnd, ENDING.trust.shrinkEnd], [ENDING_COLORS.textMain, ENDING_COLORS.textSub], {easing: EASE});
  const taglineOpacity = interpolate(frame, [ENDING.tagline.enterStart, ENDING.tagline.enterEnd], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const taglineTranslateY = interpolate(frame, [ENDING.tagline.enterStart, ENDING.tagline.enterEnd], [20, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const brandOpacity = interpolate(frame, [ENDING.brand.enterStart, ENDING.brand.enterEnd], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const brandPunchFrame = ENDING.brand.enterStart + Math.round((ENDING.brand.enterEnd - ENDING.brand.enterStart) * 0.6);
  const brandScale = frame < brandPunchFrame
    ? interpolate(frame, [ENDING.brand.enterStart, brandPunchFrame], [0.96, 1.03], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE})
    : interpolate(frame, [brandPunchFrame, ENDING.brand.enterEnd], [1.03, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE_SETTLE});
  const logoOpacity = interpolate(frame, [ENDING.logo.enterStart, ENDING.logo.enterEnd], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const logoTranslateY = interpolate(frame, [ENDING.logo.enterStart, ENDING.logo.enterEnd], [-20, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const logoPunchFrame = ENDING.logo.enterStart + Math.round((ENDING.logo.enterEnd - ENDING.logo.enterStart) * 0.6);
  const logoScale = frame < logoPunchFrame
    ? interpolate(frame, [ENDING.logo.enterStart, logoPunchFrame], [0.9, 1.02], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE})
    : interpolate(frame, [logoPunchFrame, ENDING.logo.enterEnd], [1.02, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE_SETTLE});

  return (
    <AbsoluteFill style={{background: GRADIENT_BG}}>
      <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{position: 'absolute', top: '50%', left: '50%', width: LOGO_SIZE, height: LOGO_SIZE, objectFit: 'contain', opacity: logoOpacity, transform: `translate(-50%, -50%) translateY(${BLOCK_A_OFFSET + logoTranslateY}px) scale(${logoScale})`}} />
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) translateY(${trustPositionY}px) scale(${trustScale})`, opacity: trustOpacity, fontSize: TRUST_FONT_SIZE, fontFamily: PRETENDARD, fontWeight: 500, color: trustColor, whiteSpace: 'nowrap', textAlign: 'center'}}>{ENDING.trust.text}</div>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) translateY(${BLOCK_C_OFFSET}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: BRAND_COPY_GAP}}>
        <div style={{opacity: taglineOpacity, transform: `translateY(${taglineTranslateY}px)`, fontSize: ENDING_TYPOGRAPHY.cardLabel.fontSize, fontFamily: PRETENDARD, fontWeight: 600, lineHeight: 1, color: ENDING_COLORS.textMain, whiteSpace: 'nowrap', textAlign: 'center'}}>{ENDING.tagline.text}</div>
        <div style={{opacity: brandOpacity, transform: `scale(${brandScale})`, fontSize: ENDING_TYPOGRAPHY.hero.fontSize * 1.3, fontFamily: PRETENDARD, letterSpacing: '-0.02em', fontWeight: 800, lineHeight: 0.92, color: ENDING_COLORS.textMain, whiteSpace: 'nowrap', textAlign: 'center'}}>{ENDING.brand.text}</div>
      </div>
    </AbsoluteFill>
  );
};

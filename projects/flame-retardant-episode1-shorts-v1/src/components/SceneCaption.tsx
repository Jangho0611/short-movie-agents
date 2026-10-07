import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';

const ENTER_FRAMES = 14;
const EASE = Easing.bezier(0.25, 1, 0.5, 1);

const assertMaximumTwoLines = (text: string) => {
  if (text.split('\n').length > 2) {
    throw new Error('SceneCaption supports a maximum of two lines.');
  }
};

type CaptionVariant = 'hook' | 'process' | 'comparison' | 'result';

const variantStyles = {
  hook: {maxWidth: 900, padding: '18px 42px 19px', fontSize: 64, background: 'rgba(20, 99, 53, 0.96)', border: '1px solid rgba(255, 255, 255, 0.16)', color: '#FFFFFF'},
  process: {maxWidth: 900, padding: '24px 38px 28px', fontSize: 58, background: 'rgba(250, 241, 234, 0.96)', border: '1px solid rgba(173, 143, 122, 0.28)', color: '#333333'},
  comparison: {maxWidth: 842, padding: '18px 32px 20px', fontSize: 50, background: 'rgba(250, 241, 234, 0.96)', border: '1px solid rgba(173, 143, 122, 0.28)', color: '#333333'},
  result: {maxWidth: 790, padding: '18px 30px 20px', fontSize: 52, background: 'rgba(250, 241, 234, 0.94)', border: '1px solid rgba(173, 143, 122, 0.24)', color: '#333333'},
} satisfies Record<CaptionVariant, Record<string, string | number>>;

export const SceneCaption: React.FC<{
  text: string;
  variant?: CaptionVariant;
  top?: number;
}> = ({text, variant = 'process', top = 176}) => {
  assertMaximumTwoLines(text);
  const frame = useCurrentFrame();
  const caption = variantStyles[variant];
  const opacity = interpolate(frame, [0, ENTER_FRAMES - 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});
  const translateY = interpolate(frame, [0, ENTER_FRAMES - 1], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE});

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          top,
          left: 72,
          right: 72,
          display: 'flex',
          justifyContent: 'center',
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div style={{display: 'inline-flex', maxWidth: caption.maxWidth, padding: caption.padding, borderRadius: 20, background: caption.background, border: caption.border, boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)', color: caption.color, fontFamily: PRETENDARD, fontSize: caption.fontSize, fontWeight: 800, lineHeight: 1.22, letterSpacing: '-0.035em', textAlign: 'center', whiteSpace: 'pre-line', wordBreak: 'keep-all'}}>
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

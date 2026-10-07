import type {CSSProperties} from 'react';
import {AbsoluteFill} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';

const captionStyle: CSSProperties = {
  position: 'absolute',
  top: 192,
  left: 96,
  right: 96,
  color: '#111111',
  fontFamily: PRETENDARD,
  fontSize: 64,
  fontWeight: 800,
  lineHeight: 1.28,
  textAlign: 'center',
  whiteSpace: 'pre-line',
};

export const SceneCaption: React.FC<{text: string}> = ({text}) => {
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div style={captionStyle}>{text}</div>
    </AbsoluteFill>
  );
};

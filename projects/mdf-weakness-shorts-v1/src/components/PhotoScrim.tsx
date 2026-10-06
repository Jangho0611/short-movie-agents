import type {CSSProperties} from 'react';
import {READABILITY} from '../design/tokens';

export const PhotoScrim: React.FC<{
  tone?: 'dark' | 'light';
  style?: CSSProperties;
}> = ({tone = 'dark', style}) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 432,
      background:
        tone === 'dark'
          ? READABILITY.topDarkScrim
          : READABILITY.topLightScrim,
      pointerEvents: 'none',
      ...style,
    }}
  />
);

import {AbsoluteFill, Audio, Img, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

export const SCENE06_AUDIO_SECONDS = 8.528000;
export const SCENE06_SECONDS = SCENE06_AUDIO_SECONDS + 0.3;
export const SCENE06_DURATION = Math.ceil(SCENE06_SECONDS * 30);

const GESTURE_FRAME_COUNT = 96; // extracted PNG frame count
const GESTURE_FPS_SOURCE = 24; // Flow source is ~24fps for a 4s/96frame clip

const MAX_LOOPS = 2;

const GestureLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rawIndex = Math.floor((frame / fps) * GESTURE_FPS_SOURCE);
  const maxIndex = MAX_LOOPS * GESTURE_FRAME_COUNT - 1;
  const cappedIndex = Math.min(rawIndex, maxIndex);
  const sourceFrame = cappedIndex % GESTURE_FRAME_COUNT;
  const frameNumber = String(sourceFrame + 1).padStart(3, '0');
  return (
    <Img
      src={staticFile(`assets/video/scene06-frames/frame-${frameNumber}.png`)}
      style={{width: '100%', height: 'auto'}}
    />
  );
};

export const Scene06: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, fontFamily: PRETENDARD}}>
    <Audio src={staticFile('assets/audio/tts-scene6.mp3')} />
    <div
      style={{
        position: 'absolute',
        left: SAFE_AREA.horizontal,
        right: SAFE_AREA.horizontal,
        top: SAFE_AREA.captionTop,
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.hairline}`,
        borderRadius: 32,
        padding: '40px 48px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          ...TYPOGRAPHY.caption,
          fontSize: TYPOGRAPHY.caption.fontSize * 0.7,
          color: COLORS.ink,
          textAlign: 'center',
          letterSpacing: '-0.02em',
        }}
      >
        <div>
          <span style={{color: COLORS.fireRed}}>방화</span>와{' '}
          <span style={{color: COLORS.fireRed}}>방염</span>은 고르는 게 아니라
        </div>
        <div style={{marginTop: 16}}>각각 기준이 다르니 용도에 맞게 선택하세요</div>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: 60,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '55%',
      }}
    >
      <GestureLoop />
    </div>
  </AbsoluteFill>
);

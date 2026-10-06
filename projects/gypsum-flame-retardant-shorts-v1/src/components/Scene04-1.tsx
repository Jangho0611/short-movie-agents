import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

// Audio duration measured with ffprobe; preserve the entire four-second source.
export const SCENE04_1_AUDIO_SECONDS = 2.424;
export const SCENE04_1_SECONDS = SCENE04_1_AUDIO_SECONDS + 0.3;
export const SCENE04_1_PLAYBACK_RATE = 4 / SCENE04_1_SECONDS;
export const SCENE04_1_DURATION = Math.ceil(SCENE04_1_SECONDS * 30);

export const Scene04_1: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, fontFamily: PRETENDARD}}>
    <OffthreadVideo
      src={staticFile('assets/video/scene04-1-flow-nowm-v1.mp4')}
      playbackRate={SCENE04_1_PLAYBACK_RATE}
      muted
      style={{width: '100%', height: '100%', objectFit: 'contain'}}
    />
    <Audio src={staticFile('assets/audio/tts-scene4-1.mp3')} />
    <div
      style={{
        position: 'absolute',
        left: SAFE_AREA.horizontal,
        right: SAFE_AREA.horizontal,
        top: SAFE_AREA.captionTop,
        backgroundColor: COLORS.woodTone,
        borderRadius: 32,
        padding: '40px 48px',
      }}
    >
      <div
        style={{
          ...TYPOGRAPHY.caption,
          fontSize: TYPOGRAPHY.caption.fontSize * 0.7,
          color: COLORS.onDark,
          textAlign: 'center',
          letterSpacing: '-0.04em',
        }}
      >
        <div>방화석고보드 위에 벽지를 바로 붙이는데</div>
        <div style={{marginTop: 16}}>이 벽지, 그냥 써도 될까?</div>
      </div>
    </div>
  </AbsoluteFill>
);

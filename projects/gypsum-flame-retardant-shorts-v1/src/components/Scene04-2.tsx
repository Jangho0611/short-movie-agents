import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

// Audio duration measured with ffprobe; preserve the entire four-second source.
export const SCENE04_2_AUDIO_SECONDS = 2.64;
export const SCENE04_2_SECONDS = SCENE04_2_AUDIO_SECONDS + 0.3;
export const SCENE04_2_PLAYBACK_RATE = 4 / SCENE04_2_SECONDS;
export const SCENE04_2_DURATION = Math.ceil(SCENE04_2_SECONDS * 30);

export const Scene04_2: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, fontFamily: PRETENDARD}}>
    <OffthreadVideo
      src={staticFile('assets/video/scene04-2-flow-nowm-v1.mp4')}
      playbackRate={SCENE04_2_PLAYBACK_RATE}
      muted
      style={{width: '100%', height: '100%', objectFit: 'contain'}}
    />
    <Audio src={staticFile('assets/audio/tts-scene4-2.mp3')} />
    <div
      style={{
        position: 'absolute',
        left: SAFE_AREA.horizontal,
        right: SAFE_AREA.horizontal,
        top: SAFE_AREA.captionTop,
        backgroundColor: COLORS.warmBeige,
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
        <div>객실엔 커튼·카펫도 들어가죠</div>
        <div style={{marginTop: 16}}>이런 것도 확인 대상일까?</div>
      </div>
    </div>
  </AbsoluteFill>
);

import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

export const SCENE01_AUDIO_SECONDS = 3.720;
export const SCENE01_SECONDS = SCENE01_AUDIO_SECONDS + 0.3;
export const SCENE01_PLAYBACK_RATE = 4 / SCENE01_SECONDS;
export const SCENE01_DURATION = Math.ceil(SCENE01_SECONDS * 30);

export const Scene01: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, fontFamily: PRETENDARD}}>
    <OffthreadVideo
      src={staticFile('assets/video/scene01-flow-nowm-v1.mp4')}
      playbackRate={SCENE01_PLAYBACK_RATE}
      muted
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
    <Audio src={staticFile('assets/audio/tts-scene1.mp3')} />
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
        <div>방염코팅 대신</div>
        <div style={{marginTop: 16}}>방화석고만 쓰면 될까?</div>
      </div>
    </div>
  </AbsoluteFill>
);

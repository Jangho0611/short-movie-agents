import {
  AbsoluteFill,
  Audio,
  Freeze,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {SceneCaptionsV2} from '../components/SceneCaptionsV2';
import {Scene5Ending} from '../scene5/Scene5Ending';

export const DARUKKI_FINAL_FPS = 30;

const scenes = [
  {
    video: 'assets/video/scene01-veo-claude-legacy-test-v1.mp4',
    audio: 'assets/audio/scene01-tts-final-v5.mp3',
    caption: '다루끼랑 투바이,\n크기만 다른 걸까?',
    duration: 120,
    holdFrame: 119,
  },
  {
    video: 'assets/video/scene02-veo-legacy-v2.mp4',
    audio: 'assets/audio/scene02-tts-final-v1.mp3',
    caption: '차이는 크기보다\n쓰이는 역할',
    duration: 157,
    holdFrame: 119,
  },
  {
    video: 'assets/video/scene03-veo-legacy-v1.mp4',
    audio: 'assets/audio/scene03-tts-final-v6.mp3',
    caption: '다루끼\n벽체·천장 하지에 많이 사용',
    duration: 192,
    // Last clean source frame before the final ~0.4s corruption (3.567s).
    holdFrame: 107,
  },
  {
    video: 'assets/video/scene04-veo-legacy-v1.mp4',
    audio: 'assets/audio/scene04-tts-final-v1.mp3',
    caption: '투바이\n폭 필요한 가벽·보강틀',
    duration: 183,
    holdFrame: 119,
  },
  {
    video: 'assets/video/scene05-veo-legacy-v2.mp4',
    audio: 'assets/audio/scene05-tts-final-v1.mp3',
    caption: '현장 조건에 따라\n함께 쓰기도 합니다',
    duration: 153,
    // Stable frame immediately before the right-side frame breaks (3.200s).
    holdFrame: 96,
  },
  {
    video: 'assets/video/scene06-veo-legacy-v2.mp4',
    audio: 'assets/audio/scene06-tts-final-v1.mp3',
    caption: '필요한 폭과 역할에 따라\n골라 쓰면 됩니다',
    duration: 165,
    // User-approved hold point: source frame 77 @ 24fps = 3.208s.
    // On the 30fps final timeline this is frame 96.
    holdFrame: 96,
  },
] as const;

const ENDING_DURATION = 170;
export const DARUKKI_FINAL_DURATION =
  scenes.reduce((sum, scene) => sum + scene.duration, 0) + ENDING_DURATION;

const FinalScene: React.FC<(typeof scenes)[number]> = ({
  video,
  audio,
  caption,
  duration,
  holdFrame,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Freeze frame={Math.min(frame, holdFrame)}>
        <OffthreadVideo
          src={staticFile(video)}
          muted
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </Freeze>
      {video.includes('scene05-') ? (
        <>
          <svg
            width="0"
            height="0"
            style={{position: 'absolute'}}
          >
            <filter id="scene5-face-tone" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="
                  0.2118 0.7123 0.0719 0 0
                  0.2058 0.6924 0.0699 0 0
                  0.1975 0.6645 0.0670 0 0
                  0      0      0      1 0
                "
              />
            </filter>
          </svg>
          <Freeze frame={Math.min(frame, holdFrame)}>
            <OffthreadVideo
              src={staticFile(video)}
              muted
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                clipPath: 'ellipse(34px 39px at 391px 1406px)',
                filter: 'url(#scene5-face-tone)',
              }}
            />
          </Freeze>
        </>
      ) : null}
      <Audio src={staticFile(audio)} />
      <SceneCaptionsV2 lines={[caption]} totalFrames={duration} />
    </AbsoluteFill>
  );
};

const EndingAtOriginalSpeed: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Freeze frame={Math.min(135, Math.floor((frame * 24) / 30))}>
        <Scene5Ending />
      </Freeze>
      <Audio src={staticFile('assets/audio/scene06-tts-v3.mp3')} />
    </AbsoluteFill>
  );
};

export const DarukkiVsTwobuyFinal: React.FC = () => {
  let cursor = 0;

  return (
    <AbsoluteFill style={{backgroundColor: '#fff'}}>
      {scenes.map((scene) => {
        const from = cursor;
        cursor += scene.duration;
        return (
          <Sequence key={scene.video} from={from} durationInFrames={scene.duration} premountFor={30}>
            <FinalScene {...scene} />
          </Sequence>
        );
      })}
      <Sequence from={cursor} durationInFrames={ENDING_DURATION} premountFor={30}>
        <EndingAtOriginalSpeed />
      </Sequence>
    </AbsoluteFill>
  );
};

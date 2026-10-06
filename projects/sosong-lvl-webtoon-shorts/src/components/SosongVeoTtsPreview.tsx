import {AbsoluteFill, Audio, Series, staticFile} from 'remotion';
import {Scene5Ending} from '../scene5/Scene5Ending';
import {Scene05FinalPreview} from './Scene05FinalPreview';
import {SceneCaptions} from './SceneCaptions';
import {SceneVideoHold} from './SceneVideoHold';

const scenes = [
  {
    durationInFrames: 113,
    speechFrames: 109,
    video: 'assets/video/scene01-veo-v3.mp4',
    captions: ['소송각재와 LVL각재는', '뭐가 다를까요?'],
  },
  {
    durationInFrames: 162,
    speechFrames: 159,
    video: 'assets/video/scene02-veo-v2.mp4',
    captions: ['소송각재는 원목이라서', '휨이나 뒤틀림 정도가\n제품마다 다를 수 있습니다.'],
  },
  {
    durationInFrames: 138,
    speechFrames: 135,
    video: 'assets/video/scene03-veo-v2.mp4',
    captions: ['LVL은 얇은 나무판을', '같은 방향으로 여러 겹 쌓아 만든 목재입니다.'],
  },
  {
    durationInFrames: 148,
    speechFrames: 145,
    video: 'assets/video/scene04-veo-v1.mp4',
    captions: ['소송각재와 LVL각재는', '둘 다 실내 하지재로 쓸 수 있습니다.'],
  },
] as const;

const scene5 = {
  durationInFrames: 126,
  speechFrames: 123,
  captions: ['가격과 뒤틀림 정도,', '현장 조건을 보고 상황에 맞게 고르세요.'],
} as const;

const scene6 = {
  durationInFrames: 117,
} as const;

const VideoScene: React.FC<{scene: (typeof scenes)[number]}> = ({scene}) => {
  const isScene2 = scene.video === 'assets/video/scene02-veo-v2.mp4';

  return (
    <AbsoluteFill>
      <SceneVideoHold src={scene.video} nativeFrames={96} />
      {isScene2 ? (
        <Series>
          <Series.Sequence durationInFrames={65}>
            <SceneCaptions lines={[scene.captions[0]]} totalFrames={65} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={scene.speechFrames - 65}>
            <SceneCaptions lines={[scene.captions[1]]} totalFrames={scene.speechFrames - 65} />
          </Series.Sequence>
        </Series>
      ) : (
        <SceneCaptions lines={[...scene.captions]} totalFrames={scene.speechFrames} />
      )}
    </AbsoluteFill>
  );
};

export const SosongVeoTtsPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <Audio src={staticFile('assets/audio/sosong-lvl-tts-full-preview-v1.mp3')} />
      <Series>
        {scenes.map((scene) => (
          <Series.Sequence key={scene.video} durationInFrames={scene.durationInFrames}>
            <VideoScene scene={scene} />
          </Series.Sequence>
        ))}
        <Series.Sequence durationInFrames={scene5.durationInFrames}>
          <Scene05FinalPreview />
          <SceneCaptions lines={[...scene5.captions]} totalFrames={scene5.speechFrames} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={scene6.durationInFrames}>
          <Scene5Ending />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export const SOSONG_VEO_TTS_PREVIEW_TOTAL_FRAMES =
  scenes.reduce((sum, scene) => sum + scene.durationInFrames, 0) +
  scene5.durationInFrames +
  scene6.durationInFrames;

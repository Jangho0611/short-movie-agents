import {AbsoluteFill, Audio, Series, staticFile} from 'remotion';
import {Scene5Ending} from '../scene5/Scene5Ending';
import {SceneCaptions} from './SceneCaptions';
import {SceneVideoHold} from './SceneVideoHold';

const GAP_FRAMES = 5;

const scenes = [
  {
    speechFrames: 196,
    durationInFrames: 196 + GAP_FRAMES,
    src: 'assets/video/scene01-veo-test-v2.mp4',
    nativeFrames: 96,
    captions: [
      '각재를 납품받았는데',
      '휘어진 제품이 너무 많습니다',
      '이런 제품은 현장에서 그대로',
      '손실로 이어집니다',
    ],
  },
  {
    speechFrames: 224,
    durationInFrames: 224 + GAP_FRAMES,
    src: 'assets/video/scene02-veo-final-v1-trimmed.mp4',
    nativeFrames: 60,
    captions: [
      '뒤틀린 하지재를 그대로 사용하면',
      '마감재가 들뜹니다',
      '그리고 이음새가 벌어질 수 있습니다',
      '결국 재시공까지 이어질 수 있습니다',
    ],
  },
  {
    speechFrames: 145,
    durationInFrames: 145 + GAP_FRAMES,
    src: 'assets/video/scene03-veo-final-fixed-v2.mp4',
    nativeFrames: 96,
    captions: ['문제는 건조 상태입니다', '겉모습만 봐서는', '전문가도 쉽게 구별하기 어렵습니다'],
  },
  {
    speechFrames: 149,
    durationInFrames: 149 + GAP_FRAMES,
    src: 'assets/video/scene04-veo-final-trimmed.mp4',
    nativeFrames: 57,
    captions: [
      '명칭 규격과 실제 치수는',
      '다를 수도 있습니다',
      '그래서 발주 전에는',
      '실측 확인이 중요합니다',
    ],
  },
] as const;

const SCENE5_FRAMES = 79;

const VideoScene: React.FC<{scene: (typeof scenes)[number]}> = ({scene}) => (
  <AbsoluteFill>
    <SceneVideoHold src={scene.src} nativeFrames={scene.nativeFrames} />
    <SceneCaptions lines={[...scene.captions]} totalFrames={scene.speechFrames} />
  </AbsoluteFill>
);

export const SosongFinal: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <Audio src={staticFile('assets/audio/sosong-tts-full-final.mp3')} />
      <Series>
        {scenes.map((scene) => (
          <Series.Sequence key={scene.src} durationInFrames={scene.durationInFrames}>
            <VideoScene scene={scene} />
          </Series.Sequence>
        ))}
        <Series.Sequence durationInFrames={SCENE5_FRAMES}>
          <Scene5Ending />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export const SOSONG_FINAL_TOTAL_FRAMES =
  scenes.reduce((sum, scene) => sum + scene.durationInFrames, 0) + SCENE5_FRAMES;

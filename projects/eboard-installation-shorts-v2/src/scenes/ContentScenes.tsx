import {AbsoluteFill, Easing, Freeze, Img, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {SceneCaption} from '../components/SceneCaption';
import {EntrySettle, SubtleStill} from '../components/SubtleStill';
import {Scene6} from '../scene6/Scene6';
import {SCENE_TIMING} from '../timing';

const FullFrameVideo: React.FC<{src: string}> = ({src}) => (
  <OffthreadVideo
    src={staticFile(src)}
    muted
    playbackRate={1}
    style={{width: '100%', height: '100%', objectFit: 'cover'}}
  />
);

export const Scene1Full: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#111111'}}>
    <FullFrameVideo src="references/scene01-installation-flow-final.mp4" />
    <SceneCaption text={'이보드\n그냥 붙이면 끝일까요?'} variant="hook" />
  </AbsoluteFill>
);

export const Scene2Full: React.FC = () => (
  <AbsoluteFill>
    <SubtleStill src="references/scene02-wall-preparation-v3.png" />
    <SceneCaption text={'벽지와 곰팡이를 제거하고\n벽을 충분히 말려주세요.'} />
  </AbsoluteFill>
);

export const Scene3Full: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#111111'}}>
    <Sequence
      from={SCENE_TIMING.scene3.videoStartFrame}
      durationInFrames={SCENE_TIMING.scene3.videoEndFrameExclusive}
    >
      <FullFrameVideo src="references/scene03-measure-cut-flow-v4.mp4" />
    </Sequence>
    <Sequence
      from={SCENE_TIMING.scene3.transitionStartFrame}
    >
      <Scene3To4Reveal />
    </Sequence>
    <SceneCaption text={'치수를 재고 안전자를 대서\n커터칼로 잘라줍니다.'} />
  </AbsoluteFill>
);

export const Scene4Full: React.FC = () => (
  <AbsoluteFill>
    <EntrySettle>
      <Img
        src={staticFile('references/scene04-adhesive-application-start-v3.png')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </EntrySettle>
    <SceneCaption text={'전용 접착제를 고르게 바른 뒤\n벽에 밀착해주세요.'} />
  </AbsoluteFill>
);

const Scene3To4Reveal: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [0, SCENE_TIMING.scene3.transitionFrames - 1],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    },
  );
  const horizontalInset = (1 - progress) * 48;
  const verticalInset = (1 - progress) * 46;
  return (
    <AbsoluteFill
      style={{
        clipPath: `inset(${verticalInset}% ${horizontalInset}% round ${8 * (1 - progress)}px)`,
      }}
    >
      <Img
        src={staticFile('references/scene04-adhesive-application-start-v3.png')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </AbsoluteFill>
  );
};

export const Scene5Full: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#111111'}}>
    <Sequence durationInFrames={SCENE_TIMING.scene5.videoEndFrameExclusive}>
      <FullFrameVideo src="references/scene05-joint-putty-flow-v3.mp4" />
    </Sequence>
    <Sequence from={SCENE_TIMING.scene5.videoEndFrameExclusive}>
      <Freeze frame={SCENE_TIMING.scene5.freezeFrame}>
        <FullFrameVideo src="references/scene05-joint-putty-flow-v3.mp4" />
      </Freeze>
    </Sequence>
    <SceneCaption text="이음부는 퍼티로 꼼꼼히 마감합니다." />
  </AbsoluteFill>
);

export const Scene6Full: React.FC = () => (
  <AbsoluteFill>
    <EntrySettle scaleFrom={1}>
      <Scene6 />
    </EntrySettle>
    <SceneCaption text={'도배용은 네바리로, 페인트용은\n메쉬테이프와 퍼티로 마감합니다.'} variant="comparison" />
  </AbsoluteFill>
);

export const Scene7Full: React.FC = () => (
  <AbsoluteFill>
    <SubtleStill src="references/scene07-wallpaper-finish-v1.png" />
    <SceneCaption text={'이보드는 빈틈과 이음부를\n꼼꼼하게 처리하는 게 중요합니다.'} variant="result" />
  </AbsoluteFill>
);

import {AbsoluteFill, Freeze, Sequence, Video, staticFile} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {SCENE5_FLOW} from './brief-flow';

export const Scene5: React.FC = () => {
  return <AbsoluteFill>
    <Sequence durationInFrames={SCENE5_FLOW.videoDurationInFrames}>
      <Video muted src={staticFile('assets/video/scene05-flow-v1.mp4')} />
    </Sequence>
    <Sequence
      from={SCENE5_FLOW.videoDurationInFrames}
      durationInFrames={SCENE5_FLOW.holdDurationInFrames}
    >
      <Freeze frame={SCENE5_FLOW.videoDurationInFrames - 1}>
        <Video muted src={staticFile('assets/video/scene05-flow-v1.mp4')} />
      </Freeze>
    </Sequence>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 910,
        height: 390,
        backgroundColor: '#F3E8D7',
        borderBottomRightRadius: 150,
        opacity: 0.94,
      }}
    />
    <TopTitle style={{top: 105}}><div>외기와 맞닿는 벽체</div><div>내단열이 필요한 곳에 활용</div></TopTitle>
  </AbsoluteFill>;
};

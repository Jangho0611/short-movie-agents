import {AbsoluteFill, Sequence} from 'remotion';
import {EpisodeScene} from './components/EpisodeScene';
import {Scene07} from './components/Scene07';

export const EPISODE2_DURATION = 1043;

const GreenWord: React.FC<React.PropsWithChildren> = ({children}) => (
  <span style={{color: '#146335'}}>{children}</span>
);

export const Episode2Preview: React.FC = () => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={105}>
      <EpisodeScene media="assets/video/scene01-flow-final.mp4" kind="video" audio="assets/audio/scene01.wav" durationInFrames={105} videoDurationInFrames={105} captionBackgroundColor="#121212" captionTextColor="#FFFFFF" captionBorderColor="#121212" caption={<><span>벽 안쪽에 숨은 이 골조,</span><br/><span>방염 처리해야 할까요?</span></>} />
    </Sequence>
    <Sequence from={105} durationInFrames={135}>
      <EpisodeScene media="assets/video/scene02-flow-final.mp4" kind="video" audio="assets/audio/scene02.wav" durationInFrames={135} videoDurationInFrames={135} captionBackgroundColor="#F2F2F2" captionBorderColor="#F2F2F2" caption={<><span>안 보이게 숨는 자재는</span><br/><span>방염 의무가 <GreenWord>없어요</GreenWord></span></>} />
    </Sequence>
    <Sequence from={240} durationInFrames={150}>
      <EpisodeScene media="assets/video/scene03-flow-final.mp4" kind="video" audio="assets/audio/scene03.wav" durationInFrames={150} videoDurationInFrames={150} captionBackgroundColor="#F8F7F3" captionBorderColor="#F8F7F3" caption={<><span>방염 기준은 재료가 아니라</span><br/><span>노출 여부로 정해져요</span></>} />
    </Sequence>
    <Sequence from={390} durationInFrames={174}>
      <EpisodeScene media="assets/video/scene04-final.mp4" kind="video" audio="assets/audio/scene04.wav" durationInFrames={174} videoDurationInFrames={174} captionBackgroundColor="#F8F7F3" captionBorderColor="#F8F7F3" caption={<><span>마감재 뒤 골조는 안 보이니</span><br/><span>방염 의무 없음</span></>} />
    </Sequence>
    <Sequence from={564} durationInFrames={174}>
      <EpisodeScene media="assets/video/scene05-veo-final.mp4" kind="video" audio="assets/audio/scene05.wav" durationInFrames={174} videoDurationInFrames={174} videoScale={1.05} captionBackgroundColor="#F2F2F2" captionBorderColor="#F2F2F2" caption={<><span>겉에 보이는 마감 패널은</span><br/><span>방염 처리가 <GreenWord>필수예요</GreenWord></span></>} />
    </Sequence>
    <Sequence from={738} durationInFrames={135}>
      <EpisodeScene media="assets/video/scene06-final.mp4" kind="video" audio="assets/audio/scene06.wav" durationInFrames={135} videoDurationInFrames={135} captionBackgroundColor="#F2F2F2" captionBorderColor="#F2F2F2" caption={<><span>결국 중요한 건</span><br/><span>어디에 드러나 있느냐예요</span></>} />
    </Sequence>
    <Sequence from={873} durationInFrames={170}>
      <Scene07 />
    </Sequence>
  </AbsoluteFill>
);

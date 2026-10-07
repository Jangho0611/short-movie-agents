import {Composition, registerRoot} from 'remotion';
import {PRETENDARD} from './scene5/fonts';
import {Scene5Ending} from './scene5/Scene5Ending';

const captions = [
  ['MDF, 다 같은 밀도가 아닙니다\n확인하고 사용하고 계신가요?', '#c5b0f4'],
  ['인테리어용 MDF는 대부분 15형 등급을 쓰는데\n밀도로는 540급이 기준입니다', '#dceeb1'],
  ['그런데 같은 15형이라도\n510급 정도로 유통되기도 해요', '#efd4d4'],
  ['현장에서는 종종 이런 말이 나옵니다\n왜 이렇게 가볍지? 왜 이렇게 잘 휘지?', '#f4ecd6'],
  ['다음번 MDF 사실 땐\n밀도가 540급이 맞는지 물어보세요', '#c8e6cd'],
] as const;

const Caption: React.FC<{text: string; color: string}> = ({text, color}) => (
  <div style={{position: 'absolute', top: 220, left: '50%', transform: 'translateX(-50%)',
    width: 'max-content', padding: 32, borderRadius: 24, backgroundColor: color,
    color: '#1e1e1e', fontFamily: PRETENDARD, fontSize: 51, fontWeight: 700,
    lineHeight: 1.35, whiteSpace: 'pre', textAlign: 'center',
    textShadow: '0 1px 2px rgba(0,0,0,0.15)'}}>{text}</div>
);

const CaptionRenderRoot: React.FC = () => <>
  {captions.map(([text, color], index) => <Composition key={index}
    id={`Scene0${index + 1}Caption`} component={Caption} defaultProps={{text, color}}
    durationInFrames={1} fps={24} width={1080} height={1920} />)}
  <Composition id="SceneEnding" component={Scene5Ending} durationInFrames={136}
    fps={24} width={1080} height={1920} />
</>;

registerRoot(CaptionRenderRoot);

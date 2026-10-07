import {
  AbsoluteFill,
  Img,
  staticFile,
} from 'remotion';

// Scene 4: 건축용 석고보드는 먹는 제품이 아니라는 반전
// Duration: 4초 (96 frames @ 24fps)
// Motion: 안정적인 유지 - 아주 미세한 움직임 또는 static hold
// 자막이 메시지를 전달하므로 화면은 차분하게 유지

export const Scene4: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Img
        src={staticFile('references/scene04-base-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </AbsoluteFill>
  );
};

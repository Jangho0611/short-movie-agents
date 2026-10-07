import {AbsoluteFill} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';
import type {DarukkiSceneSpec} from './scene-spec';

export const ScenePlaceholder: React.FC<{spec: DarukkiSceneSpec}> = ({spec}) => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        backgroundColor: '#fffdf9',
        color: '#252525',
        display: 'flex',
        fontFamily: PRETENDARD,
        justifyContent: 'center',
        padding: 90,
      }}
    >
      <div style={{fontSize: 72, fontWeight: 800}}>다루끼 vs 투바이</div>
      <div style={{fontSize: 54, fontWeight: 700, marginTop: 24}}>Scene {spec.scene}</div>
      <div style={{fontSize: 30, lineHeight: 1.6, marginTop: 54, textAlign: 'center'}}>
        Veo 설계 대기<br />
        움직일 요소 · 고정 요소 · 골드 reference 확정 후 자산 연결
      </div>
    </AbsoluteFill>
  );
};


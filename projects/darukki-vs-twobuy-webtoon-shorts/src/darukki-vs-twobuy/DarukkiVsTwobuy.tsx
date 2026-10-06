import {AbsoluteFill, Sequence} from 'remotion';
import {
  DarukkiScene01,
  DarukkiScene02,
  DarukkiScene03,
  DarukkiScene04,
  DarukkiScene05,
  DarukkiScene06,
} from './scenes';
import {DARUKKI_VS_TWOBUY_SCENE_FRAMES} from './scene-spec';

const scenes = [DarukkiScene01, DarukkiScene02, DarukkiScene03, DarukkiScene04, DarukkiScene05, DarukkiScene06];

export const DARUKKI_VS_TWOBUY_DURATION = DARUKKI_VS_TWOBUY_SCENE_FRAMES * scenes.length;

export const DarukkiVsTwobuy: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#fff'}}>
    {scenes.map((Scene, index) => (
      <Sequence
        key={index}
        from={index * DARUKKI_VS_TWOBUY_SCENE_FRAMES}
        durationInFrames={DARUKKI_VS_TWOBUY_SCENE_FRAMES}
        premountFor={30}
      >
        <Scene />
      </Sequence>
    ))}
  </AbsoluteFill>
);


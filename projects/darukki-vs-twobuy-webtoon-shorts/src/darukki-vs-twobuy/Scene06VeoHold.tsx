import {AbsoluteFill} from 'remotion';
import {SceneVideoHold} from '../components/SceneVideoHold';

export const SCENE06_VEO_HOLD_FPS = 24;
export const SCENE06_VEO_HOLD_DURATION_IN_FRAMES = 96;

// Frame 77 is at 3.208s in the 24fps Veo source. It is the last stable
// expression/gesture frame before the unwanted final facial and timber motion.
export const SCENE06_VEO_HOLD_FRAME = 77;

export const Scene06VeoHold: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#fff'}}>
    <SceneVideoHold
      src="assets/video/scene06-veo-legacy-v2.mp4"
      nativeFrames={SCENE06_VEO_HOLD_FRAME + 1}
    />
  </AbsoluteFill>
);

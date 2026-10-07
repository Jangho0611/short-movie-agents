export const FPS = 24;
export const SCENE_TIMING = {
  scene1: {durationInFrames: 96},
  scene2: {durationInFrames: 88},
  scene3: {
    durationInFrames: 95,
    videoStartFrame: 0,
    videoEndFrameExclusive: 80,
    transitionStartFrame: 64,
    transitionFrames: 16,
  },
  scene4: {durationInFrames: 90},
  scene5: {
    durationInFrames: 96,
    videoEndFrameExclusive: 96,
    freezeFrame: 95,
  },
  scene6: {durationInFrames: 114},
  scene7: {durationInFrames: 100},
  scene8: {durationInFrames: 136},
} as const;

export const FULL_DURATION_IN_FRAMES = Object.values(SCENE_TIMING).reduce(
  (sum, scene) => sum + scene.durationInFrames,
  0,
);

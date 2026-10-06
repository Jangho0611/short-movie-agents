export const ENDING_COLORS = {
  textMain: '#333333',
  textSub: '#888888',
} as const;

export const ENDING_TYPOGRAPHY = {
  hero: {fontSize: 110, fontWeight: 700},
  cardLabel: {fontSize: 48, fontWeight: 700},
} as const;

export const EASING_STANDARD: [number, number, number, number] = [
  0.25, 1, 0.5, 1,
];
export const EASING_SETTLE: [number, number, number, number] = [
  0.33, 1, 0.68, 1,
];

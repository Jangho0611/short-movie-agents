export const DESIGN_REFERENCES = {
  main: 'Notion',
  secondary: 'Airbnb',
  motion: 'Framer (motion hierarchy only)',
} as const;

export const COLORS = {
  canvas: '#F6F5F4',
  surface: '#FFFFFF',
  ink: '#171717',
  inkSecondary: '#31302E',
  inkMuted: '#615D59',
  hairline: '#E6E6E6',
  // Reused from the approved Daesan cover; do not infer a replacement value.
  daesanGreen: '#146335',
  onDark: '#FFFFFF',
} as const;

export const SAFE_AREA = {
  horizontal: 88,
  captionTop: 192,
  topBoundary: 384,
  bottomBoundary: 288,
} as const;

export const TYPOGRAPHY = {
  caption: {
    fontSize: 64,
    fontWeight: 800,
    lineHeight: 1.22,
    letterSpacing: '-0.035em',
  },
  comparisonLabel: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-0.025em',
  },
} as const;

export const MOTION = {
  entryScale: 1.025,
  entryFrames: 18,
  entryOpacity: 0.92,
  opacityFrames: 6,
  subtleScale: 1.012,
} as const;

export const READABILITY = {
  lightTextShadow: '0 2px 12px rgba(0, 0, 0, 0.66)',
  darkTextShadow: '0 2px 12px rgba(255, 255, 255, 0.38)',
  topDarkScrim:
    'linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.22) 55%, rgba(0, 0, 0, 0) 100%)',
  topLightScrim:
    'linear-gradient(180deg, rgba(246, 245, 244, 0.84) 0%, rgba(246, 245, 244, 0.36) 58%, rgba(246, 245, 244, 0) 100%)',
} as const;

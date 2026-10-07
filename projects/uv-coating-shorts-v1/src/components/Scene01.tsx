import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {COLORS} from '../design/tokens';
import {PRETENDARD} from '../design/fonts';

export const SCENE01_DURATION = 168;

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

const enter = (
  frame: number,
  start: number,
  end: number,
  from: number,
) => ({
  opacity: interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  }),
  translateY: interpolate(frame, [start, end], [from, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  }),
});

const Board: React.FC<{
  src: string;
  left: number;
  direction: -1 | 1;
  start: number;
  end: number;
}> = ({src, left, direction, start, end}) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [start, end], [direction * 28, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const opacity = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <Img
      src={staticFile(src)}
      style={{
        position: 'absolute',
        left,
        top: 570,
        width: 390,
        height: 585,
        objectFit: 'contain',
        opacity,
        transform: `translateX(${x}px)`,
      }}
    />
  );
};

const Label: React.FC<{
  left: number;
  title: string;
  subtitle?: string;
  start: number;
  end: number;
}> = ({left, title, subtitle, start, end}) => {
  const frame = useCurrentFrame();
  const motion = enter(frame, start, end, 10);

  return (
    <div
      style={{
        position: 'absolute',
        left,
        top: 1188,
        width: 390,
        opacity: motion.opacity,
        transform: `translateY(${motion.translateY}px)`,
        textAlign: 'center',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <div style={{fontSize: 38, fontWeight: 700, letterSpacing: '-0.035em'}}>
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            display: 'inline-flex',
            marginTop: 5,
            padding: '5px 14px 6px',
            borderRadius: 10,
            background: 'rgba(20, 99, 53, 0.09)',
            border: '1px solid rgba(20, 99, 53, 0.15)',
            fontSize: 29,
            fontWeight: 700,
            color: '#315B42',
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </div>
  );
};

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();
  const characterOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const characterEntryScale = interpolate(frame, [0, 18], [0.99, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const hookPanel = enter(frame, 6, 18, 6);
  const hookText = enter(frame, 9, 24, 6);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F8F7F3 0%, #F3F2ED 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
      }}
    >
      <Sequence from={6}>
        <Audio src={staticFile('assets/audio/scene01-tts-v5.wav')} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          display: 'flex',
          justifyContent: 'center',
          opacity: hookPanel.opacity,
          transform: `translateY(${hookPanel.translateY}px)`,
        }}
      >
        <div
          style={{
          width: 'fit-content',
          maxWidth: 900,
          padding: '24px 38px 28px',
          borderRadius: 20,
          background: 'rgba(250, 241, 234, 0.96)',
          border: '1px solid rgba(173, 143, 122, 0.28)',
          boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)',
          textAlign: 'center',
          color: COLORS.ink,
          letterSpacing: '-0.045em',
          lineHeight: 1.16,
          }}
        >
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            opacity: hookText.opacity,
            transform: `translateY(${hookText.translateY}px)`,
          }}
        >
          일반 원판과 UV코팅판 중
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 60,
            fontWeight: 800,
            color: COLORS.daesanGreen,
            opacity: hookText.opacity,
            transform: `translateY(${hookText.translateY}px)`,
          }}
        >
          왜 더 비싼 UV코팅판을 쓸까요?
        </div>
        </div>
      </div>

      <Board
        src="assets/images/scene01-raw-birch-plywood.png"
        left={90}
        direction={-1}
        start={6}
        end={20}
      />
      <Board
        src="assets/images/scene01-uv-coated-birch-plywood.png"
        left={600}
        direction={1}
        start={26}
        end={42}
      />

      <Label left={90} title="일반 원판" start={6} end={20} />
      <Label
        left={600}
        title="UV코팅판"
        subtitle="+ 가공비"
        start={26}
        end={42}
      />

      <Img
        src={staticFile('assets/images/scene01-small-daesan.png')}
        style={{
          position: 'absolute',
          left: 393,
          top: 1095,
          width: 294,
          height: 490,
          objectFit: 'contain',
          opacity: characterOpacity,
          transform: `scale(${characterEntryScale})`,
          transformOrigin: '50% 100%',
        }}
      />
    </AbsoluteFill>
  );
};

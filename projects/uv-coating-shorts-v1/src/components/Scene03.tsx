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
import {PRETENDARD} from '../design/fonts';
import {COLORS} from '../design/tokens';

export const SCENE03_DURATION = 174;

const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

const enter = (frame: number, start: number, end: number, from = 10) => ({
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

const CostLabel: React.FC<{label: string; start: number}> = ({label, start}) => {
  const frame = useCurrentFrame();
  const motion = enter(frame, start, start + 12);

  return (
    <div
      style={{
        width: 158,
        opacity: motion.opacity,
        transform: `translateY(${motion.translateY}px)`,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 37,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.035em',
          color: COLORS.inkSecondary,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </div>
      <div
        style={{
          width: 42,
          height: 3,
          margin: '15px auto 0',
          borderRadius: 99,
          background: 'rgba(20, 99, 53, 0.34)',
        }}
      />
    </div>
  );
};

const Connector: React.FC<{start: number; end: number}> = ({start, end}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <div
      style={{
        width: 76,
        height: 2,
        marginTop: 21,
        background: 'rgba(49, 48, 46, 0.12)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(20, 99, 53, 0.46)',
          transform: `scaleX(${progress})`,
          transformOrigin: 'left center',
        }}
      />
    </div>
  );
};

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();
  const board = enter(frame, 0, 15, 16);
  const conclusion = enter(frame, 8, 22, 8);
  const costFlow = interpolate(frame, [29, 41], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F8F7F3 0%, #F3F2ED 100%)',
        overflow: 'hidden',
        fontFamily: PRETENDARD,
        color: COLORS.ink,
      }}
    >
      <Sequence from={6}>
        <Audio src={staticFile('assets/audio/scene03-tts-v8.wav')} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          display: 'flex',
          justifyContent: 'center',
          opacity: conclusion.opacity,
          transform: `translateY(${conclusion.translateY}px)`,
        }}
      >
        <div
          style={{
            width: 'fit-content',
            maxWidth: 900,
            padding: '24px 26px 28px',
            borderRadius: 20,
            background: 'rgba(250, 241, 234, 0.96)',
            border: '1px solid rgba(173, 143, 122, 0.28)',
            boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)',
            textAlign: 'center',
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.2,
          }}
        >
          <div style={{whiteSpace: 'nowrap'}}>여기에 인건비와 도료비가 필요합니다.</div>
          <div style={{marginTop: 7, whiteSpace: 'nowrap'}}>
            <span style={{color: COLORS.daesanGreen}}>작업시간과 공간</span>도 필요하죠.
          </div>
        </div>
      </div>

      <Img
        src={staticFile('assets/images/scene01-raw-birch-plywood.png')}
        style={{
          position: 'absolute',
          left: 285,
          top: 475,
          width: 510,
          height: 760,
          objectFit: 'contain',
          opacity: board.opacity,
          transform: `translateY(${board.translateY}px)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 539,
          top: 1220,
          width: 2,
          height: 110,
          background: 'rgba(49, 48, 46, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'rgba(20, 99, 53, 0.38)',
            transform: `scaleY(${costFlow})`,
            transformOrigin: 'top center',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 1345,
          left: 74,
          right: 74,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <CostLabel label="인건비" start={30} />
        <Connector start={41} end={50} />
        <CostLabel label="도료비" start={55} />
        <Connector start={68} end={77} />
        <CostLabel label="작업시간" start={86} />
        <Connector start={102} end={112} />
        <CostLabel label="공간" start={120} />
      </div>
    </AbsoluteFill>
  );
};

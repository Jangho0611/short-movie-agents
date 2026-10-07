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

export const SCENE05_DURATION = 173;

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

const FlowColumn: React.FC<{
  left: number;
  image: string;
  title: string;
  steps: string[];
  start: number;
  green?: boolean;
}> = ({left, image, title, steps, start, green = false}) => {
  const frame = useCurrentFrame();
  const motion = enter(frame, start, start + 15, 14);

  return (
    <div
      style={{
        position: 'absolute',
        left,
        top: 480,
        width: 430,
        opacity: motion.opacity,
        transform: `translateY(${motion.translateY}px) scale(1.12)`,
        transformOrigin: 'top center',
        textAlign: 'center',
      }}
    >
      <Img
        src={staticFile(image)}
        style={{width: 310, height: 480, objectFit: 'contain'}}
      />
      <div
        style={{
          marginTop: 12,
          fontSize: 43,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: green ? COLORS.daesanGreen : COLORS.ink,
        }}
      >
        {title}
      </div>
      <div
        style={{
          margin: '26px auto 0',
          width: 370,
          padding: '20px 16px 22px',
          borderRadius: 18,
          background: green ? 'rgba(20, 99, 53, 0.07)' : 'rgba(49, 48, 46, 0.05)',
          border: green
            ? '1px solid rgba(20, 99, 53, 0.16)'
            : '1px solid rgba(49, 48, 46, 0.11)',
        }}
      >
        {steps.map((step, index) => (
          <div key={step}>
            {index > 0 ? (
              <div
                style={{
                  margin: '8px auto',
                  color: green ? COLORS.daesanGreen : '#87908A',
                  fontSize: 25,
                  lineHeight: 1,
                }}
              >
                ↓
              </div>
            ) : null}
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: green ? '#315B42' : COLORS.inkSecondary,
              }}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const conclusion = enter(frame, 3, 18, 8);

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
        <Audio src={staticFile('assets/audio/scene05-tts-v2.wav')} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          top: 144,
          left: 72,
          right: 72,
          zIndex: 2,
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
            padding: '24px 38px 28px',
            borderRadius: 20,
            background: 'rgba(250, 241, 234, 0.96)',
            border: '1px solid rgba(173, 143, 122, 0.28)',
            boxShadow: '0 12px 32px rgba(74, 56, 42, 0.12)',
            textAlign: 'center',
            fontSize: 65,
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.16,
          }}
        >
          <div>그래서 판재값만 볼 게 아니라,</div>
          <div style={{marginTop: 8}}>
            <span style={{color: COLORS.daesanGreen}}>전체 공정비</span>를 비교해야 합니다.
          </div>
        </div>
      </div>

      <FlowColumn
        left={70}
        image="assets/images/scene01-raw-birch-plywood.png"
        title="일반 원판"
        steps={['샌딩', '도장', '건조']}
        start={15}
      />
      <FlowColumn
        left={580}
        image="assets/images/scene01-uv-coated-birch-plywood.png"
        title="UV코팅판"
        steps={['공장 선마감', '후속 제작']}
        start={35}
        green
      />

      <div
        style={{
          position: 'absolute',
          left: 539,
          top: 570,
          width: 2,
          height: 930,
          background: 'rgba(49, 48, 46, 0.1)',
        }}
      />
    </AbsoluteFill>
  );
};

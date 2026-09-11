import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Composition,
  OffthreadVideo,
  Sequence,
  interpolate,
  registerRoot,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const FPS = 30;
const MAIN_FRAMES = 224;
const END_FRAMES = 126;
const TOTAL_FRAMES = MAIN_FRAMES + END_FRAMES;

const zone: React.CSSProperties = {
  position: 'absolute',
  left: 70,
  width: 940,
  top: 720,
  height: 760,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',
};

const base: React.CSSProperties = {
  fontFamily: '"Apple SD Gothic Neo","Noto Sans KR",sans-serif',
  fontWeight: 900,
  color: '#fff',
  WebkitTextStroke: '5px #080808',
  paintOrder: 'stroke fill',
  textShadow:
    '0 5px 0 rgba(0,0,0,.95), 0 10px 18px rgba(0,0,0,.55)',
  letterSpacing: '-3px',
  lineHeight: 1.04,
};

const Spark: React.FC<{
  start: number;
  x?: number;
  y?: number;
}> = ({start, x = 200, y = 100}) => {
  const frame = useCurrentFrame();
  const f = frame - start;

  if (f < 0 || f > 11) return null;

  const p = interpolate(f, [0, 11], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {Array.from({length: 14}).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 14;
        const dist = 125 * p;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 10,
              height: 34,
              borderRadius: 10,
              background: i % 2 === 0 ? '#FFE600' : '#FF6A00',
              boxShadow: '0 0 12px rgba(255,150,0,.8)',
              opacity: 1 - p,
              transform: `
                translate(${Math.cos(angle) * dist}px,
                          ${Math.sin(angle) * dist}px)
                rotate(${angle * 180 / Math.PI + 90}deg)
                scale(${1 - p * .35})
              `,
            }}
          />
        );
      })}
    </div>
  );
};

const Char: React.FC<{
  char: string;
  index: number;
  start: number;
}> = ({char, index, start}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const f = frame - start - index * 2;

  const s =
    f < 0
      ? 0
      : spring({
          frame: f,
          fps,
          config: {
            damping: 12,
            stiffness: 230,
            mass: 0.5,
          },
        });

  const rot = index % 2 === 0 ? -3 * (1 - s) : 3 * (1 - s);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: f < 0 ? 0 : 1,
        transform: `scale(${0.72 + s * 0.28}) rotate(${rot}deg)`,
        transformOrigin: 'center bottom',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

const Word: React.FC<{
  children: React.ReactNode;
  local: number;
  delay: number;
  color?: string;
  boost?: number;
}> = ({
  children,
  local,
  delay,
  color = '#fff',
  boost = 1,
}) => {
  const {fps} = useVideoConfig();
  const f = local - delay;

  const s =
    f < 0
      ? 0
      : spring({
          frame: f,
          fps,
          config: {
            damping: 13,
            stiffness: 190,
            mass: 0.55,
          },
        });

  const y = interpolate(
    Math.max(0, Math.min(f, 7)),
    [0, 7],
    [25, 0]
  );

  return (
    <span
      style={{
        display: 'inline-block',
        margin: '0 9px',
        color,
        opacity: f < 0 ? 0 : 1,
        transform: `
          translateY(${y}px)
          scale(${(0.82 + s * 0.18) * boost})
        `,
        transformOrigin: 'center bottom',
      }}
    >
      {children}
    </span>
  );
};

const Hook = () => {
  const frame = useCurrentFrame();

  return (
    <div style={zone}>
      <div
        style={{
          ...base,
          fontSize: 128,
          whiteSpace: 'nowrap',
        }}
      >
        {Array.from('큰일났어요').map((c, i) => (
          <Char
            key={i}
            char={c}
            index={i}
            start={0}
          />
        ))}
      </div>
    </div>
  );
};

const Scene25 = () => {
  const frame = useCurrentFrame();
  const local = frame - 28;
  const {fps} = useVideoConfig();

  const f25 = frame - 37;

  const pop25 =
    f25 < 0
      ? 0
      : spring({
          frame: f25,
          fps,
          config: {
            damping: 9,
            stiffness: 240,
            mass: 0.5,
          },
        });

  return (
    <div style={zone}>
      <div
        style={{
          ...base,
          fontSize: 92,
          width: 920,
        }}
      >
        <div style={{whiteSpace: 'nowrap'}}>
          <Word local={local} delay={0}>
            오늘도
          </Word>

          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              margin: '0 15px',
              color: '#FFE600',
              transform: `scale(${0.84 + pop25 * 0.32})`,
              transformOrigin: 'center',
              textShadow:
                '0 0 12px rgba(255,230,0,.8), 0 5px 0 #000, 0 10px 18px rgba(0,0,0,.5)',
            }}
          >
            <Spark start={40} x={115} y={80} />
            <span style={{position: 'relative', zIndex: 2}}>
              25톤
            </span>
          </span>

          <Word local={local} delay={17}>
            한 차
          </Word>
        </div>

        <div style={{marginTop: 18}}>
          <Word local={local} delay={26}>
            들어왔어요
          </Word>
        </div>
      </div>
    </div>
  );
};

const Scene3 = () => {
  const frame = useCurrentFrame();
  const local = frame - 103;

  return (
    <div style={zone}>
      <div
        style={{
          ...base,
          fontSize: 96,
          width: 900,
        }}
      >
        <div>
          <Word local={local} delay={0}>
            둘 자리 걱정은
          </Word>
        </div>

        <div style={{marginTop: 18}}>
          <Word
            local={local}
            delay={10}
            color="#8CFF72"
            boost={1.08}
          >
            없습니다
          </Word>
        </div>
      </div>
    </div>
  );
};

const Scene4 = () => {
  const frame = useCurrentFrame();
  const local = frame - 152;

  const pulseFrame = frame - 165;

  let pulse = 1;

  if (pulseFrame >= 0 && pulseFrame <= 16) {
    if (pulseFrame < 7) {
      pulse = interpolate(
        pulseFrame,
        [0, 3, 7],
        [0.85, 1.18, 1]
      );
    } else if (pulseFrame >= 9) {
      pulse = interpolate(
        pulseFrame,
        [9, 12, 16],
        [1, 1.14, 1]
      );
    }
  }

  return (
    <div style={zone}>
      <div
        style={{
          ...base,
          fontSize: 94,
          width: 920,
        }}
      >
        <div>
          <Word local={local} delay={0}>
            들어오자마자
          </Word>
        </div>

        <div
          style={{
            marginTop: 18,
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              margin: '0 12px',
              color: '#FF409A',
              transform: `scale(${pulse})`,
              transformOrigin: 'center',
              textShadow:
                '0 0 12px rgba(255,64,154,.85), 0 5px 0 #000, 0 10px 18px rgba(0,0,0,.55)',
            }}
          >
            <Spark start={167} x={175} y={78} />

            <span style={{position: 'relative', zIndex: 2}}>
              바로바로
            </span>
          </span>

          <Word local={local} delay={29}>
            나가요
          </Word>
        </div>
      </div>
    </div>
  );
};

const CaptionRouter = () => {
  const frame = useCurrentFrame();

  if (frame < 28) return <Hook />;
  if (frame < 103) return <Scene25 />;
  if (frame < 152) return <Scene3 />;

  return <Scene4 />;
};

const MainVideo = () => (
  <AbsoluteFill style={{backgroundColor: '#111'}}>
    <OffthreadVideo
      src={staticFile('caption-practice/visual.mp4')}
      playbackRate={0.5145}
      muted
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />

    <Audio src={staticFile('caption-practice/tts.mp3')} />

    <CaptionRouter />
  </AbsoluteFill>
);

const Ending = () => (
  <AbsoluteFill style={{backgroundColor: '#000'}}>
    <OffthreadVideo
      src={staticFile('caption-practice/ending.mp4')}
      playbackRate={1.35}
      muted
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </AbsoluteFill>
);

const FullVideo = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={MAIN_FRAMES}
    >
      <MainVideo />
    </Sequence>

    <Sequence
      from={MAIN_FRAMES}
      durationInFrames={END_FRAMES}
    >
      <Ending />
    </Sequence>
  </AbsoluteFill>
);

const Root = () => (
  <Composition
    id="DaesanCaptionImpactV3"
    component={FullVideo}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    width={1080}
    height={1920}
  />
);

registerRoot(Root);

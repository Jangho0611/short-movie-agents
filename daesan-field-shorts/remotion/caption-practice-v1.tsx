import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Composition,
  OffthreadVideo,
  interpolate,
  registerRoot,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const FPS = 30;
const DURATION = 224;

/* -----------------------------
   공통 안전영역
----------------------------- */

const SAFE_WIDTH = 900;

const captionZone: React.CSSProperties = {
  position: 'absolute',
  left: 90,
  width: SAFE_WIDTH,
  top: 760,
  height: 720,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  pointerEvents: 'none',
};

const baseText: React.CSSProperties = {
  fontFamily:
    '"Apple SD Gothic Neo","Noto Sans KR","Arial Black",sans-serif',
  fontWeight: 900,
  color: '#fff',
  WebkitTextStroke: '8px #111',
  paintOrder: 'stroke fill',
  textShadow:
    '0 10px 0 rgba(0,0,0,0.85), 0 18px 26px rgba(0,0,0,0.5)',
  letterSpacing: '-4px',
  lineHeight: 1.02,
};

/* -----------------------------
   스파크 / 불꽃 터짐
----------------------------- */

const SparkBurst: React.FC<{
  start: number;
  centerX?: number;
  centerY?: number;
  strong?: boolean;
}> = ({
  start,
  centerX = 450,
  centerY = 150,
  strong = false,
}) => {
  const frame = useCurrentFrame();
  const local = frame - start;

  if (local < 0 || local > 16) return null;

  const progress = interpolate(local, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const particles = Array.from({length: strong ? 22 : 15});

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 900,
        height: 320,
        pointerEvents: 'none',
      }}
    >
      {/* 중앙 플래시 */}
      <div
        style={{
          position: 'absolute',
          left: centerX - 90,
          top: centerY - 90,
          width: 180,
          height: 180,
          borderRadius: 999,
          background:
            'radial-gradient(circle, rgba(255,245,120,0.95) 0%, rgba(255,120,0,0.55) 35%, rgba(255,50,0,0) 72%)',
          opacity: 1 - progress,
          transform: `scale(${0.4 + progress * 1.8})`,
        }}
      />

      {particles.map((_, i) => {
        const angle = (Math.PI * 2 * i) / particles.length;
        const distance = (strong ? 210 : 160) * progress;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const colors = ['#FFE600', '#FF8A00', '#FF3B00', '#FFF4A0'];
        const color = colors[i % colors.length];

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: centerX,
              top: centerY,
              width: strong ? 16 : 12,
              height: strong ? 46 : 34,
              borderRadius: 999,
              backgroundColor: color,
              boxShadow: `0 0 16px ${color}`,
              opacity: 1 - progress,
              transform: `
                translate(-50%, -50%)
                translate(${x}px, ${y}px)
                rotate(${(angle * 180) / Math.PI + 90}deg)
                scale(${1 - progress * 0.45})
              `,
            }}
          />
        );
      })}
    </div>
  );
};

/* -----------------------------
   글자 하나씩 POP
----------------------------- */

const CharPop: React.FC<{
  char: string;
  index: number;
  start: number;
}> = ({char, index, start}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const local = frame - start - index * 2;

  const pop =
    local < 0
      ? 0
      : spring({
          frame: local,
          fps,
          config: {
            damping: 9,
            stiffness: 260,
            mass: 0.45,
          },
        });

  const rotate =
    index % 2 === 0
      ? interpolate(pop, [0, 1], [-7, 0])
      : interpolate(pop, [0, 1], [7, 0]);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: local < 0 ? 0 : 1,
        transform: `
          scale(${0.55 + pop * 0.45})
          rotate(${rotate}deg)
        `,
        transformOrigin: 'center bottom',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

/* -----------------------------
   첫 훅
----------------------------- */

const HookCaption: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const wholePunch = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: {
      damping: 9,
      stiffness: 260,
      mass: 0.5,
    },
  });

  return (
    <div style={captionZone}>
      <div
        style={{
          ...baseText,
          fontSize: 132,
          whiteSpace: 'nowrap',
          transform: `scale(${0.94 + wholePunch * 0.06})`,
        }}
      >
        {Array.from('큰일났어요').map((c, i) => (
          <CharPop key={i} char={c} index={i} start={0} />
        ))}
      </div>
    </div>
  );
};

/* -----------------------------
   일반 단어 POP
----------------------------- */

const Word: React.FC<{
  children: React.ReactNode;
  localFrame: number;
  delay: number;
  color?: string;
  scaleBoost?: number;
}> = ({
  children,
  localFrame,
  delay,
  color = '#fff',
  scaleBoost = 1,
}) => {
  const {fps} = useVideoConfig();

  const f = localFrame - delay;

  const pop =
    f < 0
      ? 0
      : spring({
          frame: f,
          fps,
          config: {
            damping: 10,
            stiffness: 210,
            mass: 0.5,
          },
        });

  const y = interpolate(pop, [0, 1], [45, 0]);

  return (
    <span
      style={{
        display: 'inline-block',
        margin: '0 10px',
        opacity: f < 0 ? 0 : 1,
        color,
        transform: `
          translateY(${y}px)
          scale(${(0.68 + pop * 0.32) * scaleBoost})
        `,
        transformOrigin: 'center bottom',
      }}
    >
      {children}
    </span>
  );
};

/* -----------------------------
   25톤 펀치
----------------------------- */

const TwentyFiveTon: React.FC<{start: number}> = ({start}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const local = frame - start;

  const pop = spring({
    frame: Math.max(0, local),
    fps,
    config: {
      damping: 7,
      stiffness: 290,
      mass: 0.42,
    },
  });

  const shake =
    local >= 7 && local <= 13
      ? Math.sin(local * 3.5) * (13 - local) * 1.2
      : 0;

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        color: '#FFE600',
        transform: `
          translateX(${shake}px)
          scale(${0.72 + pop * 0.56})
        `,
        transformOrigin: 'center',
        margin: '0 14px',
        textShadow:
          '0 0 18px rgba(255,230,0,0.9), 0 10px 0 #000, 0 18px 24px rgba(0,0,0,.5)',
      }}
    >
      <SparkBurst
        start={start + 4}
        centerX={130}
        centerY={105}
        strong
      />
      25톤
    </span>
  );
};

/* -----------------------------
   바로바로 강조
----------------------------- */

const BaroBaro: React.FC<{start: number}> = ({start}) => {
  const frame = useCurrentFrame();

  const local = frame - start;

  let pulse = 1;

  if (local >= 0 && local < 7) {
    pulse = interpolate(local, [0, 3, 7], [0.72, 1.25, 1]);
  }

  if (local >= 9 && local < 16) {
    pulse = interpolate(local, [9, 12, 16], [1, 1.22, 1]);
  }

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        color: '#FF3B98',
        margin: '0 12px',
        transform: `scale(${pulse})`,
        transformOrigin: 'center',
        textShadow:
          '0 0 16px #ff3b98, 0 0 30px rgba(255,59,152,.6), 0 10px 0 #000',
      }}
    >
      <SparkBurst
        start={start + 2}
        centerX={190}
        centerY={100}
        strong
      />
      바로바로
    </span>
  );
};

/* -----------------------------
   Scene 2
----------------------------- */

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame - 28;

  return (
    <div style={captionZone}>
      <div
        style={{
          ...baseText,
          fontSize: 94,
          width: 880,
        }}
      >
        <div style={{whiteSpace: 'nowrap'}}>
          <Word localFrame={local} delay={0}>오늘도</Word>

          <TwentyFiveTon start={36} />

          <Word localFrame={local} delay={16}>한 차</Word>
        </div>

        <div
          style={{
            whiteSpace: 'nowrap',
            marginTop: 20,
          }}
        >
          <Word localFrame={local} delay={25}>
            들어왔어요
          </Word>
        </div>
      </div>
    </div>
  );
};

/* -----------------------------
   Scene 3
----------------------------- */

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame - 103;

  const {fps} = useVideoConfig();

  const punch = spring({
    frame: Math.max(0, local - 12),
    fps,
    config: {
      damping: 9,
      stiffness: 220,
      mass: 0.55,
    },
  });

  return (
    <div style={captionZone}>
      <div
        style={{
          ...baseText,
          fontSize: 100,
          width: 860,
          transform: `scale(${0.96 + punch * 0.04})`,
        }}
      >
        <div>
          <Word localFrame={local} delay={0}>
            둘 자리 걱정은
          </Word>
        </div>

        <div style={{marginTop: 18}}>
          <Word
            localFrame={local}
            delay={9}
            color="#7CFF6B"
            scaleBoost={1.12}
          >
            없습니다
          </Word>
        </div>
      </div>
    </div>
  );
};

/* -----------------------------
   Scene 4
----------------------------- */

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame - 152;

  return (
    <div style={captionZone}>
      <div
        style={{
          ...baseText,
          fontSize: 94,
          width: 900,
        }}
      >
        <div style={{whiteSpace: 'nowrap'}}>
          <Word localFrame={local} delay={0}>
            들어오자마자
          </Word>
        </div>

        <div
          style={{
            whiteSpace: 'nowrap',
            marginTop: 20,
          }}
        >
          <BaroBaro start={165} />

          <Word localFrame={local} delay={28}>
            나가요
          </Word>
        </div>
      </div>
    </div>
  );
};

/* -----------------------------
   Caption Router
----------------------------- */

const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 28) return <HookCaption />;
  if (frame < 103) return <Scene2 />;
  if (frame < 152) return <Scene3 />;
  return <Scene4 />;
};

/* -----------------------------
   Main
----------------------------- */

const Main: React.FC = () => {
  return (
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

      <Captions />
    </AbsoluteFill>
  );
};

const Root: React.FC = () => (
  <Composition
    id="DaesanCaptionImpact"
    component={Main}
    durationInFrames={DURATION}
    fps={FPS}
    width={1080}
    height={1920}
  />
);

registerRoot(Root);

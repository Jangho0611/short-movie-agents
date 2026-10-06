import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const SCENE05_DURATION = 229;

const Screw: React.FC<{offset: number}> = ({offset}) => (
  <g transform={`translate(0 ${offset})`} stroke="#454743" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M169 224H261V240L232 261H198L169 240Z" fill="#C9CBC6" />
    <path d="M198 261H232V396L215 427L198 396Z" fill="#A9ADA5" />
    <path d="M192 279L238 267M192 299L238 287M192 319L238 307M192 339L238 327M192 359L238 347M192 379L238 367M198 398L232 389" />
    <path d="M197 232H233" stroke="#454743" strokeWidth="5" />
  </g>
);

const Section: React.FC<{pilot: boolean; offset: number; crack: number}> = ({pilot, offset, crack}) => (
  <svg width="450" height="820" viewBox="0 0 430 784">
    <defs>
      <clipPath id={pilot ? 'screw-above-right' : 'screw-above-left'}><rect width="430" height="472" /></clipPath>
      <pattern id={pilot ? 'grain-right' : 'grain-left'} width="64" height="44" patternUnits="userSpaceOnUse">
        <path d="M4 9l12 2M33 6l9 3M22 26l15-2M47 32l11 2M5 39l8-2" fill="none" stroke="#987A54" strokeWidth="1.5" opacity="0.45" />
      </pattern>
    </defs>
    <rect x="1" y="1" width="428" height="782" rx="24" fill="#FFFFFF" stroke="#E6E6E6" strokeWidth="2" />
    <g clipPath={`url(#${pilot ? 'screw-above-right' : 'screw-above-left'})`}><Screw offset={offset} /></g>
    <rect x="47" y="472" width="336" height="174" rx="2" fill="#D7B88C" stroke="#8A7357" strokeWidth="3" />
    <rect x="49" y="474" width="332" height="170" fill={`url(#${pilot ? 'grain-right' : 'grain-left'})`} />
    {pilot ? <>
      {/* Narrower than the screw core; the open top shows a predrilled blind hole in section. */}
      <g opacity={Math.max(0, 1 - offset / 150)}><path d="M205 471V588Q215 604 225 588V471" fill="#FFFFFF" stroke="#8A7357" strokeWidth="3" />
      <path d="M206.5 472H223.5" stroke="#FFFFFF" strokeWidth="5" /></g>
    </> : null}
    {/* The opaque wood occludes the buried shank; only the flush head remains at the surface. */}
    <g opacity={Math.max(0, Math.min(1, (offset - 239) / 9))} stroke="#454743" strokeLinecap="round">
      <path d="M170 472H260" strokeWidth="3.5" />
      <path d="M199 473H231" strokeWidth="2" />
    </g>
    {!pilot && <g opacity={crack} fill="none" stroke="#785D40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M169 473l-9 7 3 6-10 7M260 473l9 8-3 6 9 8M239 476l5 8-2 5" />
    </g>}
  </svg>
);

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
  const offset = interpolate(t, [0.65, 3.35], [0, 248], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const crack = interpolate(t, [3.15, 3.35, 3.9, 4.25], [0, 0.85, 0.85, 0], clamp);
  return (
    <AbsoluteFill style={{backgroundColor: '#F6F5F4', alignItems: 'center'}}>
      <div style={{position: 'absolute', top: 430, display: 'flex', gap: 24}}>
        <Section pilot={false} offset={offset} crack={crack} />
        <Section pilot offset={offset} crack={0} />
      </div>
    </AbsoluteFill>
  );
};

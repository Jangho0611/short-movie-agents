import {AbsoluteFill, Composition, registerRoot} from 'remotion';

const Screw: React.FC = () => (
  <g stroke="#454743" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M169 224H261V240L232 261H198L169 240Z" fill="#C9CBC6" />
    <path d="M198 261H232V396L215 427L198 396Z" fill="#A9ADA5" />
    <path d="M192 279L238 267M192 299L238 287M192 319L238 307M192 339L238 327M192 359L238 347M192 379L238 367M198 398L232 389" />
    <path d="M197 232H233" stroke="#454743" strokeWidth="5" />
  </g>
);

const Section: React.FC<{pilot: boolean}> = ({pilot}) => (
  <svg width="450" height="820" viewBox="0 0 430 784">
    <defs>
      <pattern id={pilot ? 'grain-right' : 'grain-left'} width="64" height="44" patternUnits="userSpaceOnUse">
        <path d="M4 9l12 2M33 6l9 3M22 26l15-2M47 32l11 2M5 39l8-2" fill="none" stroke="#987A54" strokeWidth="1.5" opacity="0.45" />
      </pattern>
    </defs>
    <rect x="1" y="1" width="428" height="782" rx="24" fill="#FFFFFF" stroke="#E6E6E6" strokeWidth="2" />
    <Screw />
    <rect x="47" y="472" width="336" height="174" rx="2" fill="#D7B88C" stroke="#8A7357" strokeWidth="3" />
    <rect x="49" y="474" width="332" height="170" fill={`url(#${pilot ? 'grain-right' : 'grain-left'})`} />
    {pilot ? <>
      {/* Narrower than the screw core; the open top shows a predrilled blind hole in section. */}
      <path d="M205 471V588Q215 604 225 588V471" fill="#FFFFFF" stroke="#8A7357" strokeWidth="3" />
      <path d="M206.5 472H223.5" stroke="#FFFFFF" strokeWidth="5" />
    </> : null}
  </svg>
);

const Scene05StartFrame: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#F6F5F4', alignItems: 'center'}}>
    <div style={{position: 'absolute', top: 430, display: 'flex', gap: 24}}>
      <Section pilot={false} />
      <Section pilot />
    </div>
  </AbsoluteFill>
);
const Root: React.FC = () => <Composition id="Scene05StartFrame" component={Scene05StartFrame} durationInFrames={1} fps={30} width={1080} height={1920} />;
registerRoot(Root);

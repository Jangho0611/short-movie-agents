import {AbsoluteFill, cancelRender, continueRender, delayRender, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const SCENE02_DURATION = 146;
const fontHandle = delayRender('Scene 2 Korean font');
const font = new FontFace('Scene2Pretendard', `url(${staticFile('fonts/Pretendard-Bold.woff2')})`, {weight: '700'});
font.load().then((loaded) => {document.fonts.add(loaded); continueRender(fontHandle);}).catch(cancelRender);

const ForceIcon: React.FC<{bend: boolean}> = ({bend}) => (
  <svg width="340" height="210" viewBox="0 0 340 210" fill="none" stroke="#31302E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {bend ? <>
      <path d="M62 99Q170 171 278 99L278 120Q170 192 62 120Z" />
      <path d="M170 24V90M155 75L170 90L185 75" stroke="#146335" />
      <path d="M62 151L44 180H80ZM278 151L260 180H296Z" stroke="#8B8782" strokeWidth="3" />
    </> : <>
      <rect x="112" y="82" width="116" height="48" rx="4" />
      <path d="M99 106H24M42 88L24 106L42 124M241 106H316M298 88L316 106L298 124" stroke="#146335" />
      <path d="M149 93V119M191 93V119" stroke="#8B8782" strokeWidth="2" />
    </>}
  </svg>
);

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const fill = interpolate(frame, [16, 56], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic),
  });
  return (
    <AbsoluteFill style={{backgroundColor: '#F6F5F4', justifyContent: 'center', alignItems: 'center', fontFamily: 'Scene2Pretendard', fontWeight: 700, color: '#171717'}}>
      <div style={{display: 'flex', gap: 24}}>
        {['당기는 힘', '휘는 힘'].map((label, index) => (
          <div key={label} style={{width: 450, height: 760, boxSizing: 'border-box', padding: '52px 38px', borderRadius: 24, border: '2px solid #E6E6E6', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 48, lineHeight: 1.2, letterSpacing: '-0.025em'}}>{label}</div>
            <div style={{marginTop: 42, marginBottom: 38}}><ForceIcon bend={index === 1} /></div>
            <div style={{width: '100%', height: 2, backgroundColor: '#E6E6E6', marginBottom: 36}} />
            {['원목', 'MDF'].map((material, row) => (
              <div key={material} style={{width: '100%', marginBottom: 32}}>
                <div style={{fontSize: 32, lineHeight: 1, marginBottom: 17, color: row === 0 ? '#146335' : '#615D59'}}>{material}</div>
                <div style={{height: 30, width: '100%', borderRadius: 4, backgroundColor: '#F0EFED', overflow: 'hidden'}}>
                  {/* Qualitative illustration only, not a measured strength ratio. */}
                  <div style={{height: '100%', width: `${(row === 0 ? 94 : 58) * fill}%`, borderRadius: 4, backgroundColor: row === 0 ? '#146335' : '#A5A09A'}} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

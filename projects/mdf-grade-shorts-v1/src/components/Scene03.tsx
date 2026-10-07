import {interpolate, useCurrentFrame} from 'remotion';
import {EpisodeScene, Green} from './EpisodeScene';
export const SCENE03_DURATION = 219;
const GraphLabels: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = (start: number) => interpolate(frame, [start, start + 12], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const labelStyle: React.CSSProperties = {position:'absolute',top:1534,width:82,textAlign:'center',fontSize:29,fontWeight:800,color:'#252525'};
  return <><div style={{...labelStyle,left:530,opacity:opacity(65)}}>SE0</div><div style={{...labelStyle,left:620,opacity:opacity(112)}}>E0</div><div style={{...labelStyle,left:708,opacity:opacity(158)}}>E1</div><div style={{position:'absolute',left:797,top:873,width:42,textAlign:'center',fontSize:23,fontWeight:700,color:'rgba(45,45,45,0.55)',filter:'blur(0.7px)'}}>E0</div><div style={{position:'absolute',left:906,top:873,width:42,textAlign:'center',fontSize:23,fontWeight:700,color:'rgba(45,45,45,0.55)',filter:'blur(0.7px)'}}>E1</div></>;
};
export const Scene03: React.FC = () => <EpisodeScene media="assets/video/scene03-flow-v1.mp4" audio="assets/audio/scene03.mp3" durationInFrames={SCENE03_DURATION} mediaFrames={SCENE03_DURATION} labels={<GraphLabels />} caption={<><div><Green>SE0, E0, E1</Green></div><div>등급마다 기준치가 달라요</div></>} />;

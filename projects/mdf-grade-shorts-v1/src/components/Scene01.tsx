import {EpisodeScene, Green} from './EpisodeScene';
export const SCENE01_DURATION = 126;
const panelLabels = <><div style={{position:'absolute',left:797,top:870,width:42,textAlign:'center',fontSize:25,fontWeight:800,color:'#292929'}}>E0</div><div style={{position:'absolute',left:906,top:870,width:42,textAlign:'center',fontSize:25,fontWeight:800,color:'#292929'}}>E1</div></>;
export const Scene01: React.FC = () => <EpisodeScene media="assets/video/scene01-flow-v1.mp4" audio="assets/audio/scene01.mp3" durationInFrames={SCENE01_DURATION} mediaFrames={120} labels={panelLabels} caption={<><div><Green>E0, E1 MDF</Green></div><div>무슨 차이일까요?</div></>} />;

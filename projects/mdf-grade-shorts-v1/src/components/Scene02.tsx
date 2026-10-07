import {EpisodeScene, Green} from './EpisodeScene';
export const SCENE02_DURATION = 159;
const panelLabels = <><div style={{position:'absolute',left:797,top:870,width:42,textAlign:'center',fontSize:25,fontWeight:800,color:'#292929'}}>E0</div><div style={{position:'absolute',left:906,top:870,width:42,textAlign:'center',fontSize:25,fontWeight:800,color:'#292929'}}>E1</div></>;
export const Scene02: React.FC = () => <EpisodeScene media="assets/video/scene01-flow-v1.mp4" audio="assets/audio/scene02.mp3" durationInFrames={SCENE02_DURATION} mediaFrames={120} freeze scale={2.15} origin="82% 18%" labels={panelLabels} caption={<><div>이 숫자는 사실</div><div><Green>포름알데히드</Green> 방출 등급</div></>} />;

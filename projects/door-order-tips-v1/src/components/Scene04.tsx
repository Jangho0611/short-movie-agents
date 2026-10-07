import {interpolate,useCurrentFrame} from 'remotion';
import {GuideAccent,GuideImageScene} from './GuideImageScene';
export const SCENE04_DURATION=168;
export const Scene04:React.FC=()=>{
 const frame=useCurrentFrame();
 const blend=interpolate(frame,[78,90],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <GuideImageScene audio="scene04" title="③ 실린더 타공 위치" subtitle={<>하부여유값 달라 <GuideAccent>욕실·안방</GuideAccent> 별도 확인 필수</>} imageTop={350} images={[
  {file:'cylinder-height-bathroom.png',width:1132,height:1389,titleBottom:90},
  {file:'cylinder-height-bedroom.png',width:1123,height:1401,titleBottom:90,opacity:blend},
 ]}/>;
};

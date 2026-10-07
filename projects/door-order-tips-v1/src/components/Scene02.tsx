import {GuideAccent,GuideImageScene} from './GuideImageScene';
export const SCENE02_DURATION=131;
export const Scene02:React.FC=()=> <GuideImageScene audio="scene02" title="① 하부 여유값" subtitle={<>장판(2~3T) <GuideAccent>10mm</GuideAccent> · 강마루(7~8T) <GuideAccent>15mm</GuideAccent></>} images={[{file:'door-clearance-guide.png',width:1024,height:1536,titleBottom:244}]}/>;

import {GuideAccent,GuideImageScene} from './GuideImageScene';
export const SCENE03_DURATION=153;
export const Scene03:React.FC=()=> <GuideImageScene audio="scene03" title="② 대리석 하부식기 옵션" subtitle={<>문틀높이 포함 여부 → 본체높이 <GuideAccent>12mm</GuideAccent> 차이</>} images={[{file:'marble-threshold-guide.png',width:1024,height:1536,titleBottom:208}]}/>;

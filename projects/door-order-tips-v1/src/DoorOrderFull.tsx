import {AbsoluteFill, Sequence} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Scene06, SCENE06_DURATION} from './components/Scene06';
import {Ending} from './ending/Ending';
import {ENDING} from './ending/brief';
export const DOOR_SCENES = [
  {id:'Scene01', component:Scene01, duration:SCENE01_DURATION},
  {id:'Scene02', component:Scene02, duration:SCENE02_DURATION},
  {id:'Scene03', component:Scene03, duration:SCENE03_DURATION},
  {id:'Scene04', component:Scene04, duration:SCENE04_DURATION},
  {id:'Scene05', component:Scene05, duration:SCENE05_DURATION},
  {id:'Scene06', component:Scene06, duration:SCENE06_DURATION},
  {id:'Ending', component:Ending, duration:ENDING.durationInFrames},
] as const;
export const DOOR_ORDER_DURATION=DOOR_SCENES.reduce((sum,scene)=>sum+scene.duration,0);
export const DoorOrderFull: React.FC = () => {
  let from=0;
  return <AbsoluteFill>{DOOR_SCENES.map(({id,component:Component,duration})=>{
    const start=from;from+=duration;
    return <Sequence key={id} name={id} from={start} durationInFrames={duration}><Component/></Sequence>;
  })}</AbsoluteFill>;
};

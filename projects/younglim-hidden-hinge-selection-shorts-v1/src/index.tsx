import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {frames,HingePreview} from './HingePreview';
registerRoot(()=><>
  <Composition id="DaesanEnding" component={DaesanEnding} width={1080} height={1920} fps={30} durationInFrames={170}/>
  <Composition id="HiddenHingePreview" component={HingePreview} width={1080} height={1920} fps={30} durationInFrames={frames.reduce((a,b)=>a+b,0)}/>
</>);

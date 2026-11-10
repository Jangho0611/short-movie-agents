import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {DaesanEnding} from './DaesanEnding';
registerRoot(()=><Composition id="DaesanEnding" component={DaesanEnding} width={1080} height={1920} fps={30} durationInFrames={170}/>);

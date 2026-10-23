import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
// Initialization only. Main scenes await image and timing approval.
registerRoot(() => <Composition id="DaesanEnding" component={DaesanEnding} durationInFrames={170} fps={30} width={1080} height={1920}/>);

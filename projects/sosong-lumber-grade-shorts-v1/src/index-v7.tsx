import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {SosongGrade} from './SosongGrade-v7';
import timing from './timing.json';
registerRoot(()=><Composition id="SosongGradeV7" component={SosongGrade} width={1080} height={1920} fps={30} durationInFrames={timing.totalFrames}/>);

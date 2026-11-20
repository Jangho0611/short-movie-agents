import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene01Test} from './Scene01Test';
registerRoot(()=> <Composition id="Scene01Test" component={Scene01Test} durationInFrames={126} fps={30} width={1080} height={1920}/>);

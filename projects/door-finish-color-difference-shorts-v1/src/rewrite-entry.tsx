import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {RewriteScene,rewriteFrames} from './RewriteScenes';
registerRoot(()=><>{rewriteFrames.map((n,i)=><Composition key={i} id={`Rewrite${i+1}`} component={RewriteScene} defaultProps={{scene:i+1}} durationInFrames={n} fps={30} width={1080} height={1920}/>)}</>);

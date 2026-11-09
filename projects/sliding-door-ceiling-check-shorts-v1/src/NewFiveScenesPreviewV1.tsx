import React from 'react';
import {AbsoluteFill,Audio,Composition,Img,staticFile,useCurrentFrame,registerRoot,interpolate} from 'remotion';
const fr=[126,270,291,189,312];
const pictures=['new-scene01-hook-v2','new-scene02-real-v3-a','new-scene03-real-comparison-v2','new-scene04-hardware-v2','new-scene05-checklist-v1'];
const voices=['new-scene01-tts-v4-b','new-scene02-tts-v3','new-scene03-tts-v3','new-scene04-tts-v3','new-scene05-tts-v2'];
const Mask=({y,h,start,len}:{y:number;h:number;start:number;len:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:0,right:0,top:y,height:h,background:'#F6F3EC',opacity:interpolate(f,[start,start+len],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}/>};
function Shot({i}:{i:number}){const f=useCurrentFrame();const name=i===1?(f<92?pictures[i]:f<174?'new-scene02-finished-v3-candidate':'new-scene02-result-v1'):pictures[i];return <AbsoluteFill><Img src={staticFile('assets/images/'+name+'.png')} style={{width:1080,height:1920}}/>{i===1&&f>=174&&<Mask y={865} h={190} start={183} len={7}/>}
{i===4&&<><Mask y={619} h={173} start={30} len={7}/><Mask y={812} h={176} start={75} len={8}/><Mask y={1005} h={185} start={151} len={8}/><Mask y={1276} h={235} start={249} len={10}/></>}
<Audio src={staticFile('assets/audio/'+voices[i]+'.mp3')}/></AbsoluteFill>}
registerRoot(()=> <>{fr.map((n,i)=><Composition key={i} id={'NewShot'+(i+1)} component={Shot} defaultProps={{i}} width={1080} height={1920} fps={30} durationInFrames={n}/>)}</>);

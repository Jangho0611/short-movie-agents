import React from 'react';
import {interpolate} from 'remotion';
// Extracted from approved door-panel caption-preview-v4.tsx Scene caption layer.
// Only inputs (lines/local frame) are parameterized; approved style and motion retained.
export function DoorMasterBodyCaptionV4({lines,local}:{lines:string[],local:number}){
const p=interpolate(local,[0,5],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),ease=1-Math.pow(1-p,3),compact=false,second=false,height=298;
return <div style={{position:'absolute',top:0,width:1080,height,background:compact?'#f0ede7':'#F4F1E9'}}><svg width={1080} height={height}><g opacity={p} transform={`translate(0 ${12*(1-ease)})`}>{lines.map((line,i)=>{const accent=lines.length===1||i===1;return <text key={i} x={540} y={compact?137:lines.length===1?184:i===0?124:244} fontFamily="Apple SD Gothic Neo,Noto Sans KR,sans-serif" fontWeight={900} fontSize={compact?(second?90:100):accent?107:100} textAnchor="middle" fill={accent?'#FFE600':'#303431'} stroke={accent?'#343735':'none'} strokeWidth={accent?3.66:0} paintOrder="stroke fill">{line}</text>})}</g></svg></div>;
}

import React from 'react';
// Reused from episode 1: simplified Younglim 2025 pp.88–90 contour.
const ink='#555E68',wood='#DEC39D',grain='#A57E51',violet='#146335';
export const WoodProfile:React.FC<{split?:boolean;gap?:number;width?:number;height?:number;id:string}>=({split=false,gap=40,width=340,height=185,id})=>{
 const unified='M20 100H122V73H182L308 88V166H20Z';
 const body='M20 100H122V112H183V100H308V166H20Z';
 return <svg width={width} height={height} viewBox="0 0 330 190" aria-label={split?'문틀 본체와 분리된 스토퍼':'문틀과 스토퍼 일체 개념'}>
 <defs><pattern id={`grain-${id}`} width="92" height="33" patternUnits="userSpaceOnUse"><path d="M-8 13Q24 3 59 14T110 12M-8 27Q35 17 68 29T110 26" fill="none" stroke={grain} strokeWidth="1.5" opacity=".55"/></pattern></defs>
 <path d={split?body:unified} fill={wood} stroke={ink} strokeWidth="2.5"/><path d={split?body:unified} fill={`url(#grain-${id})`}/>
 {split&&<><path d="M116 74H190V99H180V109H128V99H116Z" transform={`translate(0 ${-gap})`} fill={wood} stroke={ink} strokeWidth="2.5"/><path d={`M129 ${111-gap}V98M177 ${111-gap}V98`} stroke={violet} strokeWidth="2" strokeDasharray="5 5"/></>}
 </svg>;
};

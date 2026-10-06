import React from 'react';
// Source of truth: younglim-integrated-frame-reference.png, the two labelled inset outlines.
// Image-relative coordinates only, NOT millimetres. The left plateau stays level;
// the right plateau descends toward its right edge. Both visible bottom reliefs retained.
export const IntegratedWoodProfile=({type,id}:{type:'single'|'sloped';id:string})=>{
 const outline=type==='single'
  ?'M0 7H18V0H87V25H78V22H67V25H21V22H11V25H0Z'
  :'M0 7H18V0H61L87 7V25H78V22H67V25H21V22H11V25H0Z';
 return <svg width="404" height="250" viewBox="-4 -14 95 59" aria-label={type==='single'?'외도어: 수평 상부 단면':'고바이: 오른쪽 경사 상부 단면'}>
 <defs><pattern id={`grain-${id}`} width="27.84" height="9.99" patternUnits="userSpaceOnUse" patternTransform="scale(1)"><path d="M-2.42 3.93Q7.26 .91 17.85 4.24T33.28 3.63M-2.42 8.17Q10.59 5.15 20.57 8.77T33.28 7.87" fill="none" stroke="#A57E51" strokeWidth=".454" opacity=".55"/></pattern></defs>
 <path d={outline} fill="#DEC39D" stroke="#555E68" strokeWidth=".756"/><path d={outline} fill={`url(#grain-${id})`}/>
 </svg>;
};

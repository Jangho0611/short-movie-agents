import React from 'react';
// Simplified observed exterior contours: Younglim 2025, pp.88–90.
// No inferred hollow chambers, fasteners or reinforcing parts are shown.
const ink='#555E68', pvc='#EDF0F3', wood='#DEC39D', grain='#A57E51', violet='#6250B8';
export const PVCProfile:React.FC<{type?:'normal'|'wide'|'slim';width?:number;height?:number;iso?:boolean}>=({type='normal',width=290,height=142,iso=false})=>{
 const d=type==='normal'?'M20 68H101V38H171L280 49V136H251V73H130V136H103V105H43V136H20Z':type==='wide'?'M20 68H106V53H280V136H253V74H132V136H104V105H43V136H20Z':'M20 68H106V57H280V136H253V76H132V136H104V105H43V136H20Z';
 return <svg width={width} height={height} viewBox={iso?'0 0 340 255':'0 0 310 158'} aria-label={`발포 ${type} 외형 개념`}>
 {iso&&<g transform="translate(20 90)"><path d={d} transform="translate(25 -70)" fill="#FAFBFC" stroke={ink} strokeWidth="2"/><path d="M20 68L45 -2H126L101 68M101 38L126 -32H196L171 38M171 38L196 -32L305 -21L280 49M280 136L305 66V-21L280 49" fill="#DCE1E7" stroke={ink} strokeWidth="2"/></g>}
 <g transform={iso?'translate(20 90)':undefined}><path d={d} fill={pvc} stroke={ink} strokeWidth="2.5" strokeLinejoin="round"/>{type==='slim'&&<><path d="M106 55V30H282V48H265V55" fill="#FAFBFC" stroke={ink} strokeWidth="2.5"/><path d="M110 34H277" stroke={violet} strokeWidth="3"/></>}{type==='wide'&&<path d="M110 53H276" stroke={violet} strokeWidth="4"/>}{type==='normal'&&<path d="M105 38H170L275 49" stroke={violet} strokeWidth="3"/>}</g>
 </svg>;
};
export const WoodProfile:React.FC<{split?:boolean;gap?:number;width?:number;height?:number;id:string}>=({split=false,gap=40,width=340,height=185,id})=>{
 const unified='M20 100H122V73H182L308 88V166H20Z';
 const body='M20 100H122V112H183V100H308V166H20Z';
 return <svg width={width} height={height} viewBox="0 0 330 190" aria-label={split?'문틀 본체와 분리된 스토퍼':'문틀과 스토퍼 일체 개념'}>
 <defs><pattern id={`grain-${id}`} width="92" height="33" patternUnits="userSpaceOnUse"><path d="M-8 13Q24 3 59 14T110 12M-8 27Q35 17 68 29T110 26" fill="none" stroke={grain} strokeWidth="1.5" opacity=".55"/></pattern></defs>
 <path d={split?body:unified} fill={wood} stroke={ink} strokeWidth="2.5"/><path d={split?body:unified} fill={`url(#grain-${id})`}/>
 {split&&<><path d="M116 74H190V99H180V109H128V99H116Z" transform={`translate(0 ${-gap})`} fill={wood} stroke={ink} strokeWidth="2.5"/><path d={`M129 ${111-gap}V98M177 ${111-gap}V98`} stroke={violet} strokeWidth="2" strokeDasharray="5 5"/></>}
 </svg>;
};
// Width arrows mean selection to suit the wall; no telescopic mechanism implied.
export const HybridProfile:React.FC<{width?:number;height?:number;compact?:boolean}>=({width=310,height=230,compact=false})=><svg width={width} height={height} viewBox="0 0 330 225" aria-label="목재와 PVC 문틀캡의 가변형 계열 개념">
 <rect x="56" y="94" width="218" height="68" fill={wood} stroke={ink} strokeWidth="2.5"/>
 <path d="M71 112Q155 99 256 119M71 142Q160 130 256 147" stroke={grain} strokeWidth="2" fill="none"/>
 <path d="M30 81H85V98H50V167H30ZM245 81H300V167H280V98H245Z" fill={pvc} stroke={ink} strokeWidth="2.5"/>
 <path d="M122 64H189V88H122Z" fill={wood} stroke={ink} strokeWidth="2.5"/>
 <path d="M30 180V213M300 180V213M34 198H296M43 190L32 198L43 206M287 190L298 198L287 206" stroke={violet} strokeWidth="2.5" fill="none"/>
 {!compact&&<text x="165" y="33" textAnchor="middle" fontSize="23" fontWeight="600" fill={violet}>벽체 조건에 맞는 폭</text>}
 </svg>;

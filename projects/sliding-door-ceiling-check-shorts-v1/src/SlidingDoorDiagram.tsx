import React from 'react';
// General front-view concept, not a manufacturer's installation drawing.
export const SlidingDoorDiagram: React.FC<{finishOpacity:number; emphasis:number}> = ({finishOpacity,emphasis}) => <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{position:'absolute',inset:0}}>
<defs><filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#292720" floodOpacity="0.12"/></filter></defs>
{/* ceiling and fixed backing */}
<path d="M100 650 H980 V696 H100 Z" fill="#d7d1c7" stroke="#393832" strokeWidth="4"/>
<path d="M150 696 V910 M930 696 V910" stroke="#d6d0c5" strokeWidth="5"/>
<rect x="185" y="723" width="710" height="50" rx="3" fill="#ceb99a" stroke="#393832" strokeWidth="3"/>
{/* rail visibly supported by backing */}
<path d="M245 773 V800 M835 773 V800" stroke="#393832" strokeWidth="8"/>
<rect x="165" y="792" width="750" height="42" rx="7" fill="#a6afb2" stroke="#393832" strokeWidth="4" filter="url(#shadow)"/>
<path d="M180 812 H899" stroke="#dbe0df" strokeWidth="5"/>
{/* simplified rollers, continuous hangers and door */}
<path d="M420 817 V940 M740 817 V940" stroke="#393832" strokeWidth="10"/>
<circle cx="420" cy="812" r="16" fill="#f7f4ed" stroke="#393832" strokeWidth="7"/>
<circle cx="740" cy="812" r="16" fill="#f7f4ed" stroke="#393832" strokeWidth="7"/>
<rect x="320" y="932" width="520" height="650" rx="5" fill="#d4b68c" stroke="#393832" strokeWidth="4" filter="url(#shadow)"/>
<rect x="345" y="959" width="470" height="596" rx="2" fill="#ddc39f"/>
<rect x="758" y="1195" width="14" height="105" rx="7" fill="#464139"/>
{/* Front ceiling finish masks rail, but leaves hanger-to-door connection visible. */}
<g opacity={finishOpacity}>
<rect x="130" y="698" width="820" height="192" rx="2" fill="#eee9df" stroke="#393832" strokeWidth="4"/>
<path d="M130 890 H950" stroke="#393832" strokeWidth="6"/>
</g>
<rect x="124" y="692" width="832" height="204" rx="5" fill="none" stroke="#e8bc35" strokeWidth="10" opacity={emphasis}/>
</svg>;

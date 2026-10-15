export const clamp=(x:number)=>Math.max(0,Math.min(1,x));
export const smooth=(f:number,a:number,b:number)=>{const t=clamp((f-a)/(b-a));return t*t*(3-2*t);};
export const outCubic=(f:number,a:number,b:number)=>1-Math.pow(1-clamp((f-a)/(b-a)),3);
export const FIT={doorW:350,doorH:790,frameW:330,frameH:780};
export const fitX=(f:number,contact:number)=>700-400*outCubic(f,8,contact)+18*smooth(f,contact+10,contact+27);
export const hingeGroupY=(f:number)=>65*(1-smooth(f,0,24));
export const lockX=(f:number,contact:number)=>270+300*outCubic(f,9,contact)-14*smooth(f,contact+12,contact+29);
export const LOCK={doorW:150,latchLength:32,latchHeight:34,latchOffsetY:410,strikeY:900};

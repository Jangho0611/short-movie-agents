export type Hand = 'left' | 'right';
export type Swing = 'push' | 'pull';
// The observer is always in the living room below the wall, facing upwards.
// Hand means HANDLE side in the closed door, never hinge side.
export const doorPoint = (hand: Hand, swing: Swing, angle: number, radius = 150) => {
 const pivotX = hand === 'left' ? 275 : 125;
 const signX = hand === 'left' ? -1 : 1;
 const signY = swing === 'push' ? -1 : 1;
 return {pivotX, x:pivotX+signX*radius*Math.cos(angle), y:200+signY*radius*Math.sin(angle)};
};
export const combinations = [
 {name:'밀좌손',hand:'left',swing:'push'},
 {name:'밀우손',hand:'right',swing:'push'},
 {name:'당좌손',hand:'left',swing:'pull'},
 {name:'당우손',hand:'right',swing:'pull'},
] as const;

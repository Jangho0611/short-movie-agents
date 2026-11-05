const {bundle}=require('@remotion/bundler');
const {getCompositions,renderStill}=require('@remotion/renderer');
const fs=require('fs');
(async()=>{const serveUrl=await bundle({entryPoint:require('path').resolve('src/stills-v3.tsx')});const comps=await getCompositions(serveUrl);for(const composition of comps){const output='public/assets/images/'+composition.id+'.png';if(fs.existsSync(output))throw new Error('Refuse overwrite '+output);await renderStill({serveUrl,composition,output,imageFormat:'png'});console.log(output)}})();

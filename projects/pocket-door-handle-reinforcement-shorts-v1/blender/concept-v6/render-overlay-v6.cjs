const path=require('path');const fs=require('fs');
const root=path.resolve(__dirname,'../..');process.chdir(root);
const {bundle}=require(path.join(root,'node_modules/@remotion/bundler'));
const {getCompositions,renderStill}=require(path.join(root,'node_modules/@remotion/renderer'));
(async()=>{const output='public/assets/images/scene03-reinforcement-concept-v6.png';if(fs.existsSync(output))throw Error('Refuse overwrite');const serveUrl=await bundle({entryPoint:path.join(root,'src/scene03-concept-v6.tsx')});const [composition]=await getCompositions(serveUrl);await renderStill({serveUrl,composition,output,imageFormat:'png'});console.log(output)})();

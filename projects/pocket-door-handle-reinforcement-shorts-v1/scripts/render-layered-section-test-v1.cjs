const path=require('path'),fs=require('fs');
const root=path.resolve(__dirname,'..');process.chdir(root);
const {bundle}=require('@remotion/bundler');const {getCompositions,renderStill}=require('@remotion/renderer');
(async()=>{const output='public/assets/images/scene03-layered-section-test-v1.png';if(fs.existsSync(output))throw Error('Refuse overwrite');const serveUrl=await bundle({entryPoint:path.join(root,'src/scene03-layered-section-test-v1.tsx')});const [composition]=await getCompositions(serveUrl);await renderStill({serveUrl,composition,output,imageFormat:'png'});console.log(output)})();

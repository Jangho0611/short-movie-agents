const {bundle}=require('@remotion/bundler');
const {renderMedia,selectComposition,openBrowser}=require('@remotion/renderer');
const fs=require('fs');
(async()=>{
 const url=await bundle({entryPoint:require('path').resolve('src/preview-v5.tsx')});
 const browser=await openBrowser('chrome',{browserExecutable:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',chromiumOptions:{gl:'swangle'}});
 const rows=[];
 try{for(let i=1;i<=5;i++){
 const output=`public/assets/video/scene0${i}-preview-v5.mp4`;if(fs.existsSync(output))throw Error('Output exists');
 const composition=await selectComposition({serveUrl:url,id:`Scene0${i}`,puppeteerInstance:browser});
 await renderMedia({serveUrl:url,composition,outputLocation:output,codec:'h264',crf:18,audioBitrate:'192k',concurrency:1,puppeteerInstance:browser,chromiumOptions:{gl:'swangle'},onBrowserLog:log=>{const m=log.text?.match(/CAPTION_QA (.*)/);if(m)rows.push({scene:i,...JSON.parse(m[1])});}});
 console.log(`Scene ${i} completed`);
 }}finally{await browser.close({silent:true});fs.writeFileSync('docs/preview-v5-caption-bounds.json',JSON.stringify(rows,null,2),{flag:'wx'});}
})();

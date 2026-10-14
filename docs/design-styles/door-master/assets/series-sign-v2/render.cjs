const path=require('path');const sharp=require('sharp');
(async()=>{const out=process.argv[2];if(!out)throw Error('Provide a NEW PNG output path');if(require('fs').existsSync(out))throw Error('Output exists');await sharp(process.argv[3]||path.join(__dirname,'doormaster-series-sign-v1-outlined.svg')).png().toFile(out);})();

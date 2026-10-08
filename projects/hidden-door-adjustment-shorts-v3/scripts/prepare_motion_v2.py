from pathlib import Path
import cv2, numpy as np, subprocess, json, hashlib

P=Path(__file__).resolve().parents[1]
V=P/'public/assets/video'
src=V/'daesani-point-left.mp4'
dst=V/'daesani-point-left-alpha-v2.mov'
assert not dst.exists()
cap=cv2.VideoCapture(str(src))
assert (int(cap.get(cv2.CAP_PROP_FRAME_COUNT)),cap.get(cv2.CAP_PROP_FPS))==(96,24)
enc=subprocess.Popen(['ffmpeg','-n','-v','error','-f','rawvideo','-pix_fmt','rgba','-s','520x580','-r','24','-i','-','-an','-c:v','qtrle','-pix_fmt','argb',str(dst)],stdin=subprocess.PIPE)
boxes=[]
for frame in range(96):
    ok,bgr=cap.read();assert ok
    near=np.uint8(np.min(bgr,axis=2)>242)
    _,labels,_,_=cv2.connectedComponentsWithStats(near,8)
    edge=np.unique(np.concatenate([labels[0],labels[-1],labels[:,0],labels[:,-1]]));edge=edge[edge!=0]
    alpha=np.where(np.isin(labels,edge),0,255).astype(np.uint8)
    # Approved episode-2 method: external white only, plus light floor shadow.
    # Enclosed face colors are retained. No flip, warp, recolor or generated pixels.
    alpha[910:][np.min(bgr[910:],axis=2)>145]=0
    rgba=cv2.cvtColor(bgr,cv2.COLOR_BGR2RGBA);rgba[:,:,3]=alpha
    crop=rgba[400:980,100:620]
    yy,xx=np.where(crop[:,:,3]>0)
    assert len(xx)>0
    boxes.append([int(xx.min()),int(yy.min()),int(xx.max()),int(yy.max())])
    enc.stdin.write(crop.tobytes())
enc.stdin.close();assert enc.wait()==0;cap.release()
assert all(x0>0 and y0>0 and x1<519 and y1<579 for x0,y0,x1,y1 in boxes)
report={'source':str(src),'alpha':str(dst),'source_sha256':hashlib.sha256(src.read_bytes()).hexdigest(),'alpha_sha256':hashlib.sha256(dst.read_bytes()).hexdigest(),'crop':[100,400,520,580],'fps':24,'frames':96,'bounds':boxes,'no_crop_clipping':True,'method':'external connected-white alpha removal, preserving internal face; approved ep2 floor-shadow treatment; no body or motion edits'}
(P/'docs/point-left-alpha-qa-v2.json').write_text(json.dumps(report,indent=2)+'\n')
print('Point-left alpha: PASS, 96 source frames, no clipped character pixels')

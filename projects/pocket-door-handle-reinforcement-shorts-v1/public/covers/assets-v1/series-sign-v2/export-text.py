from pathlib import Path
import xml.etree.ElementTree as ET,subprocess,json,sys
s=Path(__file__).parent
src=Path(sys.argv[1]) if len(sys.argv)>1 else s/'doormaster-series-sign-v1.svg'
out=Path(sys.argv[2]) if len(sys.argv)>2 else s/'sign-outlined-new.svg'
if out.exists():raise FileExistsError(out)
ET.register_namespace('','http://www.w3.org/2000/svg');tree=ET.parse(src);ns='{http://www.w3.org/2000/svg}'
for parent in tree.iter():
 for child in list(parent):
  if child.tag==ns+'text':
   text=''.join(child.itertext());size=child.get('font-size','72');kern=child.get('letter-spacing','0')
   q=json.loads(subprocess.check_output(['swift',str(s/'outline.swift'),str(s/'fonts/Pretendard-Black.ttf'),text,size,kern]))
   width=float(child.get('textLength',q['advance']));sx=width/q['advance']
   path=ET.Element(ns+'path',{'d':q['path'],'fill':child.get('fill','#fff'),'aria-label':text,'transform':f'translate({child.get("x","0")} {child.get("y","0")}) scale({sx} 1)'})
   parent.insert(list(parent).index(child),path);parent.remove(child)
  elif child.tag==ns+'style':parent.remove(child)
tree.write(out,encoding='utf-8',xml_declaration=True)

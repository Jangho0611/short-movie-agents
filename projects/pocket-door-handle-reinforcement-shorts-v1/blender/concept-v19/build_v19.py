import bpy,json,math,sys
from pathlib import Path
from mathutils import Vector,Matrix
from bpy_extras.object_utils import world_to_camera_view
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent;F=R/'public/assets/images/v19-frames'
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v18/pocket-handle-horizontal-section-v18.blend'))
section=bpy.context.scene;section.name='v19 educational horizontal observation';sm=section.camera.matrix_world.copy();ss=section.camera.data.ortho_scale
with bpy.data.libraries.load(str(R/'blender/concept-v14/pocket-handle-single-cutout-post-v14.blend'),link=False) as (a,b):b.scenes=list(a.scenes)
ext=b.scenes[0];ext.name='v19 original exterior';em=ext.camera.matrix_world.copy();es=ext.camera.data.ortho_scale
handles=[o for o in ext.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface'))];seated={o.name:o.matrix_world.copy() for o in handles}
# Exact v14 final exterior scene, only Y-normal translation on the handles.
for s in [ext,section]:
 s.render.resolution_x=540;s.render.resolution_y=960;s.render.resolution_percentage=100;s.render.fps=24;s.cycles.samples=20;s.render.image_settings.file_format='PNG';s.frame_start=1;s.frame_end=168
# Support appearance only: the spatial mask stays unchanged.
door=next(o for o in section.objects if o.name.startswith('v16 section display / v14 restored'))
nt=door.data.materials[0].node_tree;out=next(n for n in nt.nodes if n.type=='OUTPUT_MATERIAL');last=out.inputs['Surface'].links[0].from_node;mask=last.inputs[0].links[0].from_socket
geo=next(n for n in nt.nodes if n.type=='NEW_GEOMETRY');sep=nt.nodes.new('ShaderNodeSeparateXYZ');nt.links.new(geo.outputs['Position'],sep.inputs[0]);side=nt.nodes.new('ShaderNodeMath');side.operation='GREATER_THAN';side.inputs[1].default_value=-.245;nt.links.new(sep.outputs['X'],side.inputs[0]);factor=nt.nodes.new('ShaderNodeMapRange');nt.links.new(side.outputs[0],factor.inputs['Value']);mul=nt.nodes.new('ShaderNodeMath');mul.operation='MULTIPLY';nt.links.new(mask,mul.inputs[0]);nt.links.new(factor.outputs['Result'],mul.inputs[1]);nt.links.new(mul.outputs[0],last.inputs[0])
def ease(x):x=max(0,min(1,x));return x*x*(3-2*x)
def getpoints(s,objs):
 bpy.context.window.scene=s;bpy.context.view_layer.update();dg=bpy.context.evaluated_depsgraph_get();pts=[]
 for o in objs:
  ev=o.evaluated_get(dg);me=ev.to_mesh();pts.extend(ev.matrix_world@v.co for v in me.vertices);ev.to_mesh_clear()
 return pts
for o in handles:o.location.y-=.55
extpoints=getpoints(ext,handles)
secpoints=getpoints(section,[o for o in section.objects if o.name.startswith('v16 section display /') and 'envelope' not in o.name])
manifest=[];cache={};jobs=[];qa=[]
for i in range(168):
 t=i/24
 if t<1:u=0;alpha=0
 elif t<1.75:u=ease((t-1)/.75);alpha=0
 elif t<2.5:u=1;alpha=ease((t-1.75)/.75)
 elif t<4:u=1;alpha=1
 elif t<4.35:u=1;alpha=1-ease((t-4)/.35)
 elif t<4.95:u=1-ease((t-4.35)/.60);alpha=0
 else:u=0;alpha=0
 ins=ease((t-4.95)/.85)
 loc=em.translation.lerp(sm.translation,u);rot=em.to_quaternion().slerp(sm.to_quaternion(),u);scale=es*(1-u)+ss*u
 matrix=Matrix.LocRotScale(loc,rot,Vector((1,1,1)))
 # Keep full unsectioned handle within framing during camera transition.
 bpy.context.window.scene=ext;ext.camera.matrix_world=matrix;ext.camera.data.ortho_scale=scale;bpy.context.view_layer.update()
 if 0<u and alpha<1:
  ps=[world_to_camera_view(ext,ext.camera,p) for p in extpoints];ratio=max(max(abs(p.x-.5)/.46,abs(p.y-.5)/.46) for p in ps);scale*=max(1,ratio)
 # Scale returns smoothly to section framing while full upper handle fades out.
 if u==1 and alpha>0:scale=scale*(1-alpha)+ss*alpha
 right=ease((t-2.5)/.55) if t<4 else 1
 left=ease((t-3.05)/.45) if t<4 else 1
 if t<2.5:left=right=0
 item={'frame':i+1,'time':t,'alpha':alpha,'sources':[]}
 for kind,s,weight in [('ext',ext,1-alpha),('sec',section,alpha)]:
  if weight<=0:continue
  key=(kind,tuple(round(v,7) for row in matrix for v in row),round(scale,7),round(ins if kind=='ext' else left,7),round(right if kind=='sec' else 0,7))
  if key not in cache:
   path=F/f'{kind}-{i+1:04d}.png';cache[key]=str(path);jobs.append({'scene':kind,'matrix':[list(row) for row in matrix],'scale':scale,'ins':ins,'left':left,'right':right,'path':str(path),'frame':i+1})
  item['sources'].append({'path':cache[key],'weight':weight})
 manifest.append(item)
 qa.append({'frame':i+1,'insertion':ins,'exterior_restored_before_insertion':ins==0 or (u==0 and alpha==0),'normal_translation_y':-.55*(1-ins)})
assert all(x['exterior_restored_before_insertion'] for x in qa)
(D/'render-manifest.json').write_text(json.dumps(manifest,indent=2));(D/'motion-qa.json').write_text(json.dumps({'frames':168,'fps':24,'duration':7,'unique_renders':len(jobs),'per_frame':qa,'final_camera_exact_v14':True,'final_handle_matrices_exact_v14':True,'no_new_geometry':True,'transition':'same-coordinate exterior/section cross dissolve after camera move'},indent=2))
# Save both preserved scene assets; per-frame setup is reproducible by this script/manifest.
bpy.context.window.scene=ext;bpy.ops.wm.save_as_mainfile(filepath=str(D/'scene03-assembly-motion-v19.blend'))
print('RENDER_JOBS',len(jobs),flush=True)
for j in jobs:
 s=ext if j['scene']=='ext' else section;bpy.context.window.scene=s;s.camera.matrix_world=Matrix(j['matrix']);s.camera.data.ortho_scale=j['scale']
 if s==ext:
  for o in handles:o.matrix_world=seated[o.name].copy();o.location.y-=.55*(1-j['ins'])
 else:factor.inputs['To Min'].default_value=j['left'];factor.inputs['To Max'].default_value=j['right']
 bpy.context.view_layer.update();s.render.filepath=j['path'];assert not Path(j['path']).exists();bpy.ops.render.render(write_still=True,scene=s.name);print('DONE_FRAME',j['frame'],j['scene'],flush=True)

import bpy,json,hashlib
from pathlib import Path
R=Path(__file__).resolve().parents[2];D=R/'blender/concept-v4';out=R/'public/assets/images/pocket-handle-cutaway-v4.png';blend=D/'pocket-handle-cutaway-v4.blend'
if out.exists() or blend.exists():raise RuntimeError('Refuse overwrite')
prior={str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['public','src','docs','blender/concept-v1','blender/concept-v2','blender/concept-v3'] for p in (R/folder).rglob('*') if p.is_file()};(D/'preservation-before.json').write_text(json.dumps(prior))
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v3/pocket-handle-macro-cutaway-v3.blend'))
def sig(o):return {'matrix':[list(v) for v in o.matrix_world],'vertices':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else None,'materials':[m.name for m in o.data.materials] if o.type=='MESH' else []}
keep=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface')) or o.type in ['CAMERA','LIGHT']];baseline={o.name:sig(o) for o in keep}
for o in list(bpy.data.objects):
 if o not in keep:bpy.data.objects.remove(o,do_unlink=True)
white=bpy.data.materials['Neutral exterior']
m=bpy.data.materials.new('Editorial section neutral no material claim');m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(.47,.47,.44,1);p.inputs['Roughness'].default_value=.7

def cube(name,loc,size,mat,bevel=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat)
 if bevel:
  q=o.modifiers.new('Soft silhouette','BEVEL');q.width=bevel;q.segments=4;bpy.ops.object.modifier_apply(modifier=q.name)
 return o
slab=cube('Exterior plus local editorial reveal - NOT internal core',(0,.07,0),(5,.5,7),white);slab.data.materials.append(m)
# Rendering opening only: not product machining size/depth. No reinforcement volume.
t=cube('Presentation opening cutter',(-.18,-.19,.02),(.56,.62,1.88),m,.035)
bpy.context.view_layer.objects.active=slab;q=slab.modifiers.new('Local conceptual cutaway','BOOLEAN');q.operation='DIFFERENCE';q.solver='EXACT';q.object=t;bpy.ops.object.modifier_apply(modifier=q.name);bpy.data.objects.remove(t,do_unlink=True)
q=slab.modifiers.new('Soft cut edge','BEVEL');q.width=.006;q.segments=3;slab.modifiers.new('Normals','WEIGHTED_NORMAL')
scene=bpy.context.scene;scene.render.filepath=str(out);scene.frame_start=scene.frame_end=1;scene['scope']='Only exterior, local editorial reveal and visible grip. NO actual reinforcement, fixing or panel core. Reveal is NOT an installation template.';scene['future_notice']='내부 구조 설명용 개념도 · 제품별 상이'
assert all(sig(o)==baseline[o.name] for o in keep)
(D/'geometry-qa.json').write_text(json.dumps({'handle_camera_light_objects_unchanged':True,'remaining_objects':[o.name for o in scene.objects],'support_components':0,'animation_render':False},indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(blend));bpy.ops.render.render(write_still=True)

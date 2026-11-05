import bpy,json,hashlib
from pathlib import Path
R=Path(__file__).resolve().parents[2];D=R/'blender/concept-v3';out=R/'public/assets/images/pocket-handle-macro-cutaway-v3.png';dest=D/'pocket-handle-macro-cutaway-v3.blend'
if out.exists() or dest.exists():raise RuntimeError('Refuse overwrite')
prior={str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['public','src','docs','blender/concept-v1','blender/concept-v2'] for p in (R/folder).rglob('*') if p.is_file()};(D/'preservation-before.json').write_text(json.dumps(prior))
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v2/pocket-handle-macro-cutaway-v2.blend'))
def signature(o):
 return {'matrix':[list(v) for v in o.matrix_world],'vertices':[list(v.co) for v in o.data.vertices] if o.type=='MESH' else None,'materials':[m.name for m in o.data.materials] if o.type=='MESH' else [],'camera':(o.data.type,o.data.ortho_scale) if o.type=='CAMERA' else None,'light':(o.data.energy,o.data.size) if o.type=='LIGHT' else None}
keep=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface')) or o.type in ['CAMERA','LIGHT']];baseline={o.name:signature(o) for o in keep}
for o in list(bpy.data.objects):
 if o.name.startswith(('Door local envelope','Rear envelope convention','Editorial check bracket')):bpy.data.objects.remove(o,do_unlink=True)
def mat(name,col,rough=.65):
 m=bpy.data.materials.new(name);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*col,1);p.inputs['Roughness'].default_value=rough;return m
white=bpy.data.materials['Neutral exterior'];cut=mat('Neutral editorial cut surface NOT actual core',(.55,.53,.48));sup=mat('Hypothetical remaining support region - material unspecified',(.40,.34,.25));rear=mat('Neutral rear envelope convention',(.38,.39,.37))
def cube(name,loc,sz,m,bevel=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=sz;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if bevel:
  q=o.modifiers.new('Soft edge','BEVEL');q.width=bevel;q.segments=3;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=q.name)
 return o
def subtract(o,tool):
 bpy.context.view_layer.objects.active=o;q=o.modifiers.new('Explanatory opening NOT installation cut','BOOLEAN');q.operation='DIFFERENCE';q.solver='EXACT';q.object=tool;bpy.ops.object.modifier_apply(modifier=q.name);bpy.data.objects.remove(tool,do_unlink=True)
# Staging units only: window shrunk from 1.10 x 2.18 to .78 x 2.10, moved around handle.
slab=cube('Local door envelope conceptual',(0,.07,0),(5,.5,7),white);slab.data.materials.append(cut)
subtract(slab,cube('Editorial local window',(-.15,-.15,0),(.78,.72,2.10),cut,.035))
q=slab.modifiers.new('Cut edge','BEVEL');q.width=.008;q.segments=3;slab.modifiers.new('Normals','WEIGHTED_NORMAL')
cube('Rear boundary for depth only',(-.15,.235,0),(.78,.025,2.10),rear,.02)
# ONE conceptual continuous surrounding volume, not a count of real reinforcing pieces.
# Empty interior clearance exceeds the grip bowl envelope; no fixing points/holes.
support=cube('Hypothetical surrounding support - not manufacturer specification',(-.15,.04,0),(.70,.26,1.98),sup,.013)
subtract(support,cube('Void reserved for grip conceptual only',(-.245,.04,.0),(.48,.60,1.82),sup,.02))
q=support.modifiers.new('Soft cut edges','BEVEL');q.width=.005;q.segments=3;support.modifiers.new('Normals','WEIGHTED_NORMAL')
scene=bpy.context.scene;scene.render.filepath=str(out);scene.render.resolution_x=1080;scene.render.resolution_y=1920;scene.render.resolution_percentage=100;scene.frame_start=scene.frame_end=1
scene['scope']='Hypothetical local remaining support around empty grip space. Not actual SH30 installation, material, reinforcement count or specification. No fixing structure.';scene['future_notice']='내부 보강 위치 설명용 개념도 · 제품별 상이'
unchanged=all(signature(o)==baseline[o.name] for o in keep)
(D/'geometry-qa.json').write_text(json.dumps({'v2_handle_camera_lights_preserved':unchanged,'preserved_objects':list(baseline),'old_window_staging':[1.10,2.18],'new_window_staging':[.78,2.10],'support_inner_clearance_x':[-.485,-.005],'grip_bowl_x':[-.354,-.136],'no_cyan_curves':not any(o.type=='CURVE' for o in scene.objects),'concept_only':True},indent=2))
assert unchanged
bpy.ops.wm.save_as_mainfile(filepath=str(dest));bpy.ops.render.render(write_still=True)

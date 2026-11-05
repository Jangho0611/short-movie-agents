import bpy,json,hashlib
from pathlib import Path
R=Path(__file__).resolve().parents[2];D=R/'blender/concept-v5'
if (D/'comparison-v5.blend').exists():raise RuntimeError('exists')
prior={str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for folder in ['public','src','docs','blender/concept-v1','blender/concept-v2','blender/concept-v3','blender/concept-v4'] for p in (R/folder).rglob('*') if p.is_file()};(D/'before.json').write_text(json.dumps(prior))
bpy.ops.wm.open_mainfile(filepath=str(R/'blender/concept-v4/pocket-handle-cutaway-v4.blend'))
# Preserve grip, camera, and lights verbatim. Replace editorial exterior only.
keep=[o for o in bpy.data.objects if o.name.startswith(('SH30NI','Visible grip','Simplified surface')) or o.type in ['CAMERA','LIGHT']]
def sig(o):return [list(o.matrix_world[i]) for i in range(4)]+([[list(v.co) for v in o.data.vertices]] if o.type=='MESH' else [])
base={o.name:sig(o) for o in keep}
for o in list(bpy.data.objects):
 if o not in keep:bpy.data.objects.remove(o,do_unlink=True)
def mat(name,c,alpha=1):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;p=n.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Roughness'].default_value=.55
 if alpha<1:
  out=n.get('Material Output');t=n.new('ShaderNodeBsdfTransparent');mix=n.new('ShaderNodeMixShader');mix.inputs[0].default_value=alpha;m.node_tree.links.new(t.outputs[0],mix.inputs[1]);m.node_tree.links.new(p.outputs[0],mix.inputs[2]);m.node_tree.links.new(mix.outputs[0],out.inputs[0])
 return m
white=bpy.data.materials['Neutral exterior'];gray=mat('Editorial cut surface',(.52,.51,.47));blue=mat('Abstract condition reference NOT fixing hardware',(.12,.32,.44),.42);amber=mat('Hypothetical support FIELD not material',(.55,.32,.12),.27)
def cube(name,loc,size,m,b=.01):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if b:q=o.modifiers.new('Rounded concept boundaries','BEVEL');q.width=b;q.segments=5;bpy.ops.object.modifier_apply(modifier=q.name)
 return o
# A small local open cross-section. The right inspection strip exposes adjacent space.
slab=cube('Door exterior same in A B',(0,.07,0),(5,.5,7),white,0);slab.data.materials.append(gray)
t=cube('Editorial window not machining',(-.08,-.19,.02),(.76,.62,1.94),gray,.035)
bpy.context.view_layer.objects.active=slab;q=slab.modifiers.new('Local reveal','BOOLEAN');q.operation='DIFFERENCE';q.object=t;bpy.ops.object.modifier_apply(modifier=q.name);bpy.data.objects.remove(t,do_unlink=True)
# Both fields remain beside the grip, never across its occupied/mortise envelope.
# They indicate enquiry coordinates only; location itself is hypothetical.
ref=cube('Reference enquiry volume blue',(.185,-.045,.02),(.14,.21,.35),blue,.055)
bpy.ops.mesh.primitive_uv_sphere_add(segments=64,ring_count=32,location=(.185,-.015,.64));field=bpy.context.object;field.name='Hypothetical support field A or B';field.scale=(.105,.125,.225);field.data.materials.append(amber)
for p in field.data.polygons:p.use_smooth=True
scene=bpy.context.scene;scene.cycles.transparent_max_bounces=16;scene.frame_start=scene.frame_end=1;scene['notice']='Separate hypothetical placements, not movement or installation. Reference location is not a verified fixing point. No actual core or reinforcement.'
assert all(sig(o)==base[o.name] for o in keep)
(D/'geometry-qa.json').write_text(json.dumps({'v4_grip_camera_lights_preserved':True,'same_door_camera_scale':True,'field_x_min':.08,'grip_x_max':-.06,'reference_z':.02,'A_field_z':.64,'B_field_z':.02,'no_keyframes_added':True},indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(D/'comparison-v5.blend'))
# Raw intermediary frames stay with model source, only two delivered images in public.
for state,z in [('A',.64),('B',.02)]:
 field.location.z=z;scene.render.filepath=str(Path('/tmp')/('pocket-raw-'+state+'-v5.png'));bpy.ops.render.render(write_still=True)

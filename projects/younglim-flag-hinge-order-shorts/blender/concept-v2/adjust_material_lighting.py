import bpy,json,hashlib
from pathlib import Path
from mathutils import Vector
P=Path(__file__).resolve().parents[2]
bpy.ops.wm.open_mainfile(filepath=str(P/'blender/concept-v1/hinge-concept-v1.blend'))
s=bpy.context.scene
def snapshot():
 d={}
 for o in s.objects:
  if o.type=='LIGHT':continue
  d[o.name]={'type':o.type,'parent':o.parent.name if o.parent else None}
  if o.type=='MESH':
   d[o.name]['mesh']=hashlib.sha256(repr(([tuple(v.co) for v in o.data.vertices],[tuple(p.vertices) for p in o.data.polygons])).encode()).hexdigest()
   d[o.name]['modifiers']=[(m.name,m.type,getattr(m,'width',None),getattr(m,'segments',None)) for m in o.modifiers]
  if o.type=='CAMERA':d[o.name]['camera']=[o.data.type,o.data.ortho_scale,o.data.lens]
 for f in range(1,77):
  s.frame_set(f)
  for o in s.objects:
   if o.type!='LIGHT':d[o.name].setdefault('matrices',[]).append([list(row) for row in o.matrix_world])
 return d
before=snapshot()
base=bpy.data.materials['Concept satin silver']
for o in s.objects:
 if o.type!='MESH':continue
 m=base.copy();m.name='V2 silver '+('leaf' if 'leaf' in o.name else 'axis')
 n=m.node_tree.nodes.get('Principled BSDF');n.inputs['Base Color'].default_value=(.74,.74,.74,1);n.inputs['Metallic'].default_value=.88;n.inputs['Roughness'].default_value=.38 if 'leaf' in o.name else .23
 m.diffuse_color=(.74,.74,.74,1);o.data.materials.clear();o.data.materials.append(m)
for name,loc,power,w,h in [('Key',(-8,-12,5),3200,4,22),('Fill',(10,-8,3),2200,8,18),('Rim',(3,8,10),1800,6,16)]:
 o=bpy.data.objects[name];o.location=loc;o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler();o.data.shape='RECTANGLE';o.data.size=w;o.data.size_y=h;o.data.energy=power;o.data.color=(1,1,1)
bg=s.world.node_tree.nodes['Background'];bg.inputs[0].default_value=(.75,.75,.75,1);bg.inputs[1].default_value=.65
after=snapshot();assert before==after,'Geometry/animation/camera altered'
with (P/'blender/concept-v2/invariance-qa.json').open('x') as f:json.dump({'all_76_frames_geometry_camera_transforms_equal':before==after,'baseline_snapshot_sha256':hashlib.sha256(json.dumps(before,sort_keys=True).encode()).hexdigest()},f,indent=2)
s.frame_set(1);s.render.filepath=str(P/'public/assets/images/blender-concept-v2/frame-')
bpy.ops.wm.save_as_mainfile(filepath=str(P/'blender/concept-v2/hinge-concept-v2.blend'))
s.render.filepath=str(P/'public/assets/images/blender-concept-v2/material-check-001.png');bpy.ops.render.render(write_still=True)
